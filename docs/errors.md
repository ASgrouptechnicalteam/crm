### A. User-reported bugs (verified in code)

**A1. Task priority ignored**

- You set URGENT → UI shows MEDIUM everywhere.
- Cause: `POST /api/v1/tasks` validates `priority` but never writes it into `prisma.task.create`. DB keeps default.
- Also: time can look wrong if My Tasks vs Team Tasks format `target_date` differently (timezone/display).

**A2. Bulk upload permission does not take effect**

- You grant bulk upload in Permissions page → still blocked or button missing.
- Cause: effective permission comes from code matrix + DB `RolePermission` + JWT/`user.permissions`. Granting in UI does not reliably refresh the token or align with `RolePermissionsMatrix` / route guard `LEADS_BULK_UPLOAD`.

**A3. Add to pool / Add to me missing**

- Buttons do not appear or do nothing.
- Cause: UI gated on permissions + lead ownership state; role may lack the required leads permission, or claim/pool endpoints/filters hide actions for valid users.

**A4. “Leads added by me” disappears after refresh**

- List shows correctly once, refresh empties or resets to pipeline.
- Cause: tab state not persisted; refetch uses default pipeline filter and drops `created_by=me` (or equivalent).

**A5. Lead Matches shows no projects/units**

- Matches tab empty even when inventory exists.
- Cause: matches only score qualified leads against LIVE properties + VERIFIED projects with AVAILABLE units; UI may still be property-biased; qualification fields empty → zero matches.

**A6. Move to DROPPED → Conflict “exit_reason required”**

- Drop fails with that message.
- Cause: some paths call status update with only `{ status: 'DROPPED' }`. Server requires non-empty `exit_reason`. `DropLeadModal` exists and one parent path sends reason correctly; other paths (e.g. detail “Move to DROPPED” without modal) do not.

**A7. Schedule Demo handler list = “Unknown”**

- Dropdown full of “Unknown”.
- Cause: `/employees/demo-assignees` returns `{ id, label }`. UI uses `formatEmployeeLabel()` which only reads `full_name` / `employee_code` → both missing → “Unknown”.

**A8. Site visit accept → Access denied**

- Accept fails with permission error.
- Cause: accept route requires a specific permission (e.g. `SITE_VISITS_VERIFY` / related). Role matrix or DB grant missing for the role that should accept. Permissions page grant does not always apply to live requests.

---

### B. Critical structural / permission gaps

**B1. Three sources of truth for roles/permissions**

- `packages/shared` (stale)
- `apps/api/src/shared/auth.ts` (what the server uses)
- `apps/web/src/shared/index.ts` (what the UI uses)
- Drift causes 403s, missing buttons, and “permission granted but still denied”.

**B2. Permissions page can lie**

- UI can show a grant that does not match running server matrix or JWT.
- After toggle, session often still carries old permissions until re-login; some roles never get new keys.

**B3. ADMIN role inconsistent**

- In one matrix ADMIN is full access; in another it is a curated list missing leads/bulk/etc.
- ADMIN UI access and API access disagree.

**B4. Roles missing from matrix or DB**

- e.g. Channel Partner Manager / STAFF historically missing or incomplete in DB.
- Assigned employees get zero or incomplete permissions → workflows stop.

**B5. Marketing Director / PM / DLO missing read permissions that UI needs**

- Examples already found in code comments: `properties.read` required to even open lists used for polish/approve; `employees.read` required for assignee dropdowns; `tasks.create` / `reports.read_team` required for task UI that the role is shown.
- Result: form visible, submit or load 403.

**B6. Authorization sometimes JWT-only**

- Permission changes in DB do not affect current session until refresh/login.
- Workflows break mid-day after admin edits.

---

### C. Lead workflow errors

**C1. Drop without exit_reason (see A6)**

- Multiple UI entry points; not all open `DropLeadModal`.

**C2. Status transitions incomplete / blocked**

- Moving to `DEMO_SCHEDULED` requires `demo_handler_id`; UI can fail if handler list is broken (A7).
- Moving to `QUALIFIED` needs qualification data; partial forms cause validation errors.

**C3. Empty-string validation**

- Optional fields sent as `""` still hit `.min(1)` / regex in places not covered by `blankAsAbsent` → false validation errors (IFSC, exit detail, emails, etc.).

**C4. Bulk upload**

- Permission gate broken (A2).
- Server now sanitizes; old garbage leads may still exist in data.

**C5. Matches empty (A5)**

- No clear empty-state explaining “qualify lead” or “no VERIFIED/AVAILABLE inventory”.

**C6. Claim / pool / “added by me” (A3, A4)**

- Ownership and list filters inconsistent between tabs and refresh.

---

### D. Task workflow errors

**D1. Priority never persisted (A1)**

- Hard bug in create handler.

**D2. Deadline vs target_date naming**

- API body uses `deadline`; DB field `target_date`. Easy for future clients to send wrong key.

**D3. Team tasks permission**

- Team view needs `REPORTS_READ_TEAM`. Roles shown Team Tasks UI without that permission get empty list or 403.

**D4. Self-assigned tasks**

- Completing self-assigned tasks intentionally skips performance points — correct, but UX may look broken if user expects points.

---

### E. Demo / site visit workflow errors

**E1. Demo assignees shape mismatch (A7)**

- `{ id, label }` vs UI expecting name/code.

**E2. Demo list / badge 403**

- Some roles (e.g. Telecaller) need `DEMOS_READ` just to show badges; historically missing → silent empty UI.

**E3. Site visit accept 403 (A8)**

- Permission missing for roles that must accept.

**E4. Site visit post-accept actions**

- Telecaller needs VERIFY for reconfirm/reschedule/cancel after PM accepts; without it every button 403s.

**E5. Handler / agent dropdowns empty**

- Same pattern as demos: endpoint shape or `employees.read` missing → empty or “Unknown”.

---

### F. Inventory / property / project gaps

**F1. Dual model (Property vs ProjectUnit)**

- Backend has unified `/inventory` and unit-aware matching.
- Parts of UI still property-only → users cannot pick units where they should.

**F2. Matches ignore units if UI not updated (A5)**

- Backend can return units; frontend must render `kind: 'UNIT'`.

**F3. Interest / WhatsApp proposal**

- Must pass `property_id` **or** `project_unit_id` (+ `?kind=UNIT` where required). Wrong payload → save/proposal fails.

**F4. Verification gates**

- Units only match when parent project is VERIFIED and unit AVAILABLE. Unpublished inventory looks like “app is broken”.

---

### G. Auth / security / data errors

**G1. KYC / bank plaintext risk**

- Past bug wrote sensitive fields plaintext. Re-encrypt script exists; production may still have plaintext rows.

**G2. Employee phone/email uniqueness**

- App-layer checks added; DB unique constraint may not be applied in production → duplicates still possible.

**G3. App lock**

- Design is sound (token dropped while locked). Misconfigured WebAuthn/status can lock users out of workflows.

**G4. Shared package not used consistently**

- Tests importing `@rrh-ems/shared` get stale matrix → false test results vs real server.

---

### H. Frontend architecture gaps that cause bugs

**H1. Almost no API client layer**

- Only a few files under `apps/web/src/api/`. Most calls are ad-hoc `fetchWithAuth` with hand-built bodies → easy to omit `exit_reason`, `priority`, `kind`, wrong field names.

**H2. Error handling inconsistent**

- Some flows use `toUserFacingError` / toast; others `alert()` or silent fail. Users see “Conflict” / “Access denied” without actionable field-level fixes.

**H3. Permission checks split**

- UI hides buttons with `user.permissions` / `activeRole`; API enforces again. Mismatch → hidden features or visible then 403.

**H4. Large modals with multiple status paths**

- `LeadDetailModal` status buttons call different code paths (qualify modal vs demo modal vs bare `onUpdateStatus`). Easy for one path to skip required fields.

---

### I. Backend gaps that stop workflows

**I1. Customer portal routes empty**

- `mountPortal` is a no-op. Any customer-facing booking/payment/document flow is incomplete.

**I2. Portal worker disabled by default**

- Background portal sync off unless explicitly enabled.

**I3. Process still single-pool**

- Public + internal share one DB pool; under load CRM requests can fail (looks like random errors).

**I4. Migration / manual SQL mix**

- Risk of schema vs code mismatch on deploy → runtime errors mid-workflow.

---

### J. Minimal / subtle errors (still break workflows)

**J1. Empty string vs undefined on optional fields**

- Partially fixed with `blankAsAbsent`; remaining fields still fail validation on blank optional inputs.

**J2. Role name string mismatch**

- Matrix uses exact strings like `'project managers'`, `'telecallers'`. Any DB role name typo → no permissions.

**J3. Dropdowns depending on `employees.read`**

- Task assignee, demo handler, reassign, “assign to PM/DM” all need employee list. Missing permission → empty dropdown → cannot complete step.

**J4. Tab / filter state not in URL**

- “Added by me”, pipeline filters lost on refresh (A4).

**J5. Default priority MEDIUM in UI state**

- Create form defaults MEDIUM; even if fixed in API, forgetting to send priority still stores MEDIUM.

**J6. CORS / domain inconsistency**

- Code allows both `radharealhomeproperties.com` and `radharealhome.com` because product is inconsistent — can cause “works on one domain, fails on another”.

**J7. Static vs API origin for media**

- Wrong `VITE_API_ORIGIN` / `mediaUrl` → broken images, looks like data missing.

---

### K. Permission-by-role risk matrix (workflows that stop)

| Role                    | Typical break                                                                           |
| ----------------------- | --------------------------------------------------------------------------------------- |
| Telecaller              | No `DEMOS_READ` / `SITE_VISITS_VERIFY` → badges empty, post-accept actions 403          |
| Agent                   | Missing complete/visit permissions → cannot finish assigned work                        |
| Project Manager         | Missing `employees.read` / `reports.read_team` → empty assignee lists, empty team tasks |
| Digital Lead Operator   | Missing `TASKS_CREATE` or bulk permission → form shows, POST 403                        |
| Marketing Director      | Missing `properties.read` → cannot open list to polish/approve                          |
| Sales Manager           | Missing `employees.read` → cannot assign tasks                                          |
| Channel Partner Manager | Role/permissions historically missing in DB → entire role dead                          |
| Finance / HR            | Narrow matrix; any extra UI action 403s                                                 |
| Admin                   | Matrix disagreement with MD-level access                                                |

Any of the above turns into “workflow stopped” even when product intent says that role should do the action.

---

### L. What “bug free with permissions never stopping workflow” requires (checklist of gaps, not a plan)

1. Single permissions matrix, single import path, DB in sync, request-time enforcement matches UI.
2. Every status transition sends every required field (exit_reason, demo_handler_id, qualification).
3. Every create persists every accepted field (priority, etc.).
4. Every employee dropdown uses the same response shape the label helper understands.
5. Every role that sees a button has the API permission to complete that action.
6. List tabs and filters survive refresh.
7. Inventory (property + unit) used everywhere matches/bookings/interests need a target.
8. No silent empty UI for 403 — message names the missing permission.
9. Optional fields never reject blank as invalid.
10. Sensitive data and uniqueness constraints applied in production, not only in code.

---
