## A. Critical FE ↔ BE (still broken)

### A1. Site visit accept still fails for Agent (incomplete Wave 6)

**Problem**

- Route requires `SITE_VISITS_ACCEPT`.
- `lifecycle.acceptVisit` and `SiteVisitPolicy.canAccept` still check `SITE_VISITS_ASSIGN_AGENT`.
- Agent matrix has ACCEPT, not ASSIGN → route may pass, service returns 403.

**Instructions**

1. In `apps/api/src/services/siteVisit/lifecycle.ts` → accept uses `Permissions.SITE_VISITS_ACCEPT`.
2. In `apps/api/src/policies/siteVisit.policy.ts` → `canAccept` uses `SITE_VISITS_ACCEPT`.
3. Keep ASSIGN only on assign/reassign routes.
4. Add `SITE_VISITS_ACCEPT` to `apps/web/src/shared` (constant + Agent/PM/SM matrix).
5. After deploy, restart API once so brand-new permission is seeded onto existing roles.

### A2. Agent cannot reach Accept UI

**Problem**  
Accept only lives in `PMBlindApprovalQueue`, nav `pm-approvals` is `PROJECT_MANAGER | MD | ADMIN` only. Agent never sees Accept even after API fix.

**Instructions**

- Show approvals / pending-accept queue for any role with `SITE_VISITS_ACCEPT` (or include Agent).
- List visits where `project_manager_id === current user` and status `PENDING_ACCEPTANCE`.
- Update outdated comment “agents cannot accept”.

### A3. Reassign target list excludes Agents

**Problem**  
Policy allows Agent as reassignment target; UI filters only PM/SM → cannot assign to Agent.

**Instructions**  
In reassign dropdown, include employees with `PROJECT_MANAGER` **or** `AGENT`.

---

## B. Permissions & navigation (your items 3–4)

### B1. Sidebar not fully permission-driven

**Problem**  
Many items always visible (Leads, Site Visits, Demos, Tasks, Properties, Projects, Complaints, etc.) with only some using `requiredAnyRole`. Little use of `requiredPermission`. Users see pages they cannot use → 403 / empty screens.

**Instructions**

1. Every nav item that hits a guarded API must set `requiredPermission` (and/or `requiredAnyRole` where role is the product rule).
2. Filter: show only if `(permission match) AND (role match if set)`.
3. Examples:
   - Leads → `LEADS_READ`
   - Site Visits → `SITE_VISITS_READ`
   - Demos → `DEMOS_READ`
   - Tasks → `TASKS_READ`
   - Properties → `PROPERTIES_READ`
   - Projects → `PROJECTS_READ`
   - Bookings → `BOOKINGS_READ`
   - PM Approvals → `SITE_VISITS_ACCEPT` or `DEMOS_ACCEPT`
   - Bulk-related only where `LEADS_BULK_UPLOAD`
4. Same rule for mobile bottom nav and any “quick actions”.
5. **Never** show a button that only fails with “Access denied”; hide or disable with no dead click.

### B2. Web shared still missing `SITE_VISITS_ACCEPT`

**Instructions**  
Mirror API/`packages/shared` into `apps/web/src/shared` so FE gates match BE.

### B3. Role vs permission mismatches (examples)

| Screen                 | Risk                                                                |
| ---------------------- | ------------------------------------------------------------------- |
| Bulk upload            | Mostly fixed; still role OR for MD/MD-like — prefer permission only |
| Task assignee dropdown | Needs `EMPLOYEES_READ`; empty without it                            |
| Lead assign            | Uses `/md/employees` vs elsewhere `/employees`                      |

**Instructions**  
One employee-list endpoint + require `EMPLOYEES_READ` only where assign is allowed; hide assign UI without it.

---

## C. Lead distribution (your item 1)

### C1. Leads are **not** equally distributed

**Problem**  
`distributionService` uses **performance-weighted** assignment: score + call boost + new-joiner boost − active load. Not round-robin / equal share.

**Instructions (product choice → code)**  
If product rule is **equal distribution to all active telecallers**:

1. Replace (or add mode) equal / round-robin among `ACTIVE` telecallers.
2. Prefer lowest `activeLeadCount` (true load balance), optional stable rotation (last assigned id).
3. Remove or disable performance weight for assignment (keep score for dashboards only).
4. Unclaimed only when **zero** active telecallers.
5. Document in distribution monitor: “Equal load balancing”, not “performance weighted”.
6. Add test: N telecallers, N×K leads → counts differ by at most 1.

---

## D. Global search (your item 2)

### D1. Global search bar should be removed

**Problem**  
`GlobalSearchInput` in `AppLayout` is a non-functional placeholder (`<input type="search">` with no handler/API).

**Instructions**

1. Remove `GlobalSearchInput` and its usage from desktop header (and mobile if present).
2. Do not leave a dead search box.
3. If search is needed later, wire to real `/search` and gate by permissions.

---

## E. Notifications (your items 5–7)

### E1. Desktop drawer shows only half the list

**Problem**  
Drawer list uses `max-h-[420px] overflow-y-auto`. On desktop, panel/parent overflow or height often clips content so only part of the list is usable.

**Instructions**

1. Desktop panel: full viewport-aware height (e.g. `max-h-[min(70vh,640px)]` or flex column with `flex-1 min-h-0 overflow-y-auto` on the list only).
2. Ensure parent is not `overflow: hidden` without scroll on the list.
3. Test laptop + wide desktop with 20+ notifications; every row reachable by scroll.
4. Mobile already OK — don’t break it.

### E2. No remove/dismiss per notification

**Problem**  
API only: list + mark read. No dismiss/delete. UI has mark-read (check), not remove/cross.

**Instructions**

1. Backend: `DELETE /notifications/:id` or `PATCH .../dismiss` with soft flag `dismissed_at` / `hidden_from_inbox` (prefer soft delete so history works).
2. Scope: only own `employee_id`.
3. FE: cross/remove on each row in main inbox → call dismiss → remove from main list only.
4. Do **not** hard-delete if history is required.

### E3. No notification history

**Problem**  
`GET /notifications` is last 20, no history endpoint, no history UI.

**Instructions**

1. `GET /notifications?scope=inbox|history` (or `/notifications/history`).
   - Inbox: not dismissed, recent.
   - History: all for user including dismissed/read, paginated.
2. FE: “Notification history” entry (bell menu or Account).
3. History shows removed items; inbox does not.
4. Optional: mark read from history; still no hard delete unless admin policy requires it.

---

## F. Account — roles & responsibilities (your item 8)

### F1. Account section does not clearly show role rules for everyone

**Instructions**

1. Account / Profile: section **Roles & responsibilities**.
2. **Common rules (all roles):** attendance expectations, data privacy, lead handling ethics, EOD report, no sharing credentials, etc.
3. **Role-specific block** for `activeRole` (and each assigned role if multi-role): what they can do, what they must do, what they must not do — driven from one content map keyed by `Roles.*`.
4. Same content for every user of that role (no empty state for staff).

---

## G. Performance scoring guide (your item 9)

### G1. Scoring Guide & Matrix incomplete vs real rules

**Problem**  
Backend has concrete weights (`PERFORMANCE_WEIGHTS`: task +2, report +0.5, booking +10, late −1, half-day −1, uninformed absent −2, midnight auto-checkout −1, missing EOD −1, etc. + tier multipliers). UI matrix does not fully explain approval outcomes for late / leave / emergency logout.

**Instructions**  
Update **Scoring Guide & Matrix** on My Performance to list **every** active rule in plain language:

| Event                                                | Effect (document actual numbers from code)                                                                        |
| ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Complete task                                        | +                                                                                                                 |
| Submit daily report                                  | +                                                                                                                 |
| Booking / target exceeded / completed all work       | +                                                                                                                 |
| Late (unapproved)                                    | −                                                                                                                 |
| Half day                                             | −                                                                                                                 |
| Below target / overdue task                          | −                                                                                                                 |
| Uninformed absent                                    | −                                                                                                                 |
| Midnight auto-checkout                               | −                                                                                                                 |
| Missing daily report                                 | −                                                                                                                 |
| **Late / leave / emergency logout request APPROVED** | Attendance treated normal (or stated policy); **no** (or reduced) penalty — match real attendance→performance job |
| **Same request REJECTED**                            | Count as late/absent/penalty as coded — show exact −                                                              |

Also show tier multipliers (e.g. Danger penalties ×1.25, Excellent boosts ×1.1) if still applied.  
Keep UI in sync with `performance-metric.ts` — one source of truth or generate copy from the same constants.

---

## H. PM field attendance (your item 10)

### H1. No proper “field / offsite work” flow for Project Managers

**Problem**  
Attendance is kiosk/QR-oriented. PMs on site/verification/office work cannot login/logout at kiosk. Need request-based attendance with approval and EOD auto-logout.

**Instructions**

**A. Request (PM)**

1. “Field / offsite attendance” request: reason (required), work type (site visit / project verification / office work / other), expected start (and optional end).
2. Submit → status `PENDING`.

**B. Attendance while pending**  
3. Product rule you stated: **while pending or approved, day counts as normal attendance** (present from request time).  
4. **Only if rejected** → mark **absent** (or revoke present and apply absent penalty).

**C. Approval**  
5. Approver: MD / HR (use existing attendance proposal permissions).  
6. Approve → keep present; Reject → absent + performance impact per matrix.

**D. EOD**  
7. On day of approved/pending field request, when PM submits **daily EOD report**, system **records logout** at submit time (or end of IST workday policy — pick one and document).  
8. No kiosk logout required that day.

**E. Edge cases**  
9. Reject after EOD already submitted → define rule (e.g. convert to absent + notify; adjust performance job).  
10. Multiple requests same day → one open request only.  
11. Sidebar: show this action only for roles allowed (PM + any other field roles you include).

Wire into existing `attendance/proposals` if it already supports types; otherwise extend proposal types and rollup job.

---

## I. Previously fixed (do not reopen unless regression)

- Task priority persisted
- Demo assignee names
- Drop + `exit_reason`
- Bulk gated mainly by `LEADS_BULK_UPLOAD`
- Added-by-me includes assigned leads
- Task deadline IST
- Boot sync does not restore revoked permissions
- packages/shared ≈ API auth

---

## J. Other remaining gaps (short)

| ID  | Issue                          | Instruction                                                        |
| --- | ------------------------------ | ------------------------------------------------------------------ |
| J1  | Dual employee endpoints        | Standardize on one list API for assignees                          |
| J2  | Thin typed API client          | Prefer clients for leads, visits, demos, notifications, attendance |
| J3  | Customer portal empty          | Out of scope unless product prioritizes                            |
| J4  | Equal vs weighted distribution | See C1 — product says equal                                        |

---

## Priority order for work

1. **P0:** A1–A3 (accept service/policy + UI + reassign targets)
2. **P0:** B1 (sidebar/actions only if allowed)
3. **P1:** C1 equal telecaller distribution
4. **P1:** D1 remove global search
5. **P1:** E1–E3 notifications (desktop scroll, dismiss, history)
6. **P2:** F1 account roles text
7. **P2:** G1 full scoring guide including approval outcomes
8. **P2:** H1 PM field attendance + EOD logout

---

## One-line summary

Still-breaking bugs: **accept path (service/policy), Agent UI, nav showing forbidden items**. Product gaps to build: **equal lead distribution, remove search, strict sidebar, notification dismiss/history + desktop layout, account role rules, full scoring guide, PM field attendance with approve/reject and EOD logout**.
