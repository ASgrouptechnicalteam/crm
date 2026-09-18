**Telecaller site-visit product rule (your wording) vs current app**

---

## What you want

1. **As soon as a site visit is booked** → telecaller sees it on the **Site Visits** page.
2. **Full details**, including **which PM accepted** (when accepted).
3. Actions: **Reschedule** and **Cancel**, available **until the visit is completed**.
4. After **Completed** → visit appears under a **Completed** tab (not mixed as the main active work list).
5. **1 day before** → **notification only** to reconfirm (not the first time actions appear).

---

## What the app does today

| Requirement                      | Current state                                                                                                                                                                                                                                                             |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Show booked visits to telecaller | Partially: list is scoped to telecaller / PM / agent; **booked** visits in `PENDING_ACCEPTANCE` can appear for the booking telecaller.                                                                                                                                    |
| Full details + PM who accepted   | Partially: card can show `telecaller` and `project_manager` when present. **`project_manager` is set on accept** — before accept, PM may be route target only / incomplete on card.                                                                                       |
| Reschedule from booking onward   | **No.** Reschedule mainly when `ACCEPTED` or `PENDING_CUSTOMER_RECONFIRMATION` (+ `SITE_VISITS_VERIFY`). **Not** on `PENDING_ACCEPTANCE`.                                                                                                                                 |
| Cancel until completed           | **No.** Cancel/initiate-cancel is tied to later states (e.g. hold / reconfirm paths), not all open statuses from book → complete.                                                                                                                                         |
| Completed tab                    | **No dedicated “Active / Completed” tabs.** There is a **status stepper** including “6. Done”; all visits share one grid filtered by pipeline stages, not a clear Completed tab.                                                                                          |
| T−1 reconfirm **notification**   | **Weak.** Dashboard pushes **“Reconfirm Tomorrow's Visits”** (UI banner for tomorrow only). Not the same as a reliable **push/in-app notification job** 1 day before. Reconfirm **action** is still status-gated (`ACCEPTED` → reconfirm flow), not “notify only at T−1.” |

---

## Gaps to fix (clear instructions)

### 1. Telecaller Site Visits list: always show _their_ open bookings

**Instructions**

- API list for telecaller: all visits where `telecaller_id = me`, company-scoped, until terminal states.
- **Active tab:** status **not** in `COMPLETED`, `CANCELLED` (and any dead ends you use).
- **Completed tab:** `COMPLETED` (optional sub: `CANCELLED` or separate Cancelled).
- Sort: soonest `scheduled_date` first on Active.

### 2. Card details (including PM)

**Show at least**

- Booking code, lead/customer, phone (when allowed), scheduled date/time
- Property / project / unit
- Status
- **Booked by (telecaller)**
- **Accepted by (PM):** name, code, phone — from `project_manager` **after accept**
- While `PENDING_ACCEPTANCE`: show **“Awaiting PM acceptance”** and **routed PM** if `project_manager_id` is already set at book time

Ensure `listVisits` always includes `project_manager { id, full_name, employee_code, phone }` for the telecaller’s own visits (no blind PII strip for the booking telecaller — already special-cased in places; keep that).

### 3. Reschedule + Cancel from book until complete

**Active statuses** (examples):  
`PENDING_ACCEPTANCE`, `ACCEPTED`, `PENDING_CUSTOMER_RECONFIRMATION`, `CONFIRMED`, `RESCHEDULE_*`, `ON_HOLD`, etc. — **everything except** `COMPLETED` / `CANCELLED`.

**UI (telecaller + `SITE_VISITS_VERIFY` or dedicated perms)**

- **Reschedule** → existing reschedule API; after reschedule keep PM reconfirm flow if required.
- **Cancel** → existing initiate-cancel / cancel flow; allow from these open statuses (not only hold/reconfirm).

**Do not** hide these behind “only tomorrow” or only `PENDING_CUSTOMER_RECONFIRMATION`.

**Backend**

- Allow `reschedule` and cancel transitions from the open statuses above (state machine), with same company + telecaller ownership checks.
- After `COMPLETED`, **no** reschedule/cancel on the active card (completed tab is read-only or limited).

### 4. Completed tab

**Instructions**

- Site Visits page: tabs **Active** | **Completed**.
- Active: non-terminal.
- Completed: `COMPLETED` (and decide if cancelled lives here or under Active filters).
- Moving to completed is automatic when status becomes `COMPLETED` (no manual move).

### 5. One day before = notification to reconfirm only

**Instructions**

- **Job (daily IST):** visits with `scheduled_date` = tomorrow, status still open → `notifyEmployee(telecaller_id, { type: RECONFIRM_REMINDER, … link: '/site-visits' })`.
- Optional: notify PM.
- **Do not** use T−1 to first show Reschedule/Cancel.
- Dashboard “tomorrow” banner may remain as extra UX; primary requirement is **notification**.
- Optional: **Reconfirm with customer** button stays available on open visits (any day), and T−1 notification reminds them to use it.

---

## Acceptance criteria

1. Telecaller books visit → appears on **Site Visits → Active** with details.
2. After PM accepts → same card shows **PM name/contact**.
3. From booking (or from accept if you keep PM-first) until complete: **Reschedule** and **Cancel** visible and working.
4. On complete → card leaves Active, shows under **Completed**.
5. Calendar day before visit → telecaller gets **reconfirm notification**; actions were already available earlier.

---

## Relation to other remaining work

This **replaces/clarifies** the earlier “day-before options” item:

- **Actions:** from booked (open) until completed.
- **T−1:** notification to reconfirm only.
- **Completed:** own tab.
- **PM details:** on card after accept (and routed PM while pending if available).

Still separate: field-work attendance, notification history query, ungated nav, profile role copy, etc.

**Full remaining gaps & failures** — `ASgrouptechnicalteam/crm` (current product + code)

---

## A. Site visits — telecaller workflow (your latest rules)

### A1. Booked visits not managed as “Active vs Completed” for telecallers

- **Need:** After book → show on Site Visits with full details; after complete → **Completed** tab only.
- **Now:** One mixed pipeline/grid + stepper; no clear **Active | Completed** tabs for telecallers.
- **Fix:** Active = not `COMPLETED`/`CANCELLED`; Completed = `COMPLETED`; filter by `telecaller_id = me`.

### A2. PM-accepted details incomplete / unclear on telecaller cards

- **Need:** All details including **PM who accepted** (name/code/phone).
- **Now:** `project_manager` can show after accept; before accept often “awaiting PM”; not consistently presented as required detail set.
- **Fix:** Always return/show PM when set; while pending show “Awaiting acceptance” + routed PM if known.

### A3. Reschedule / Cancel not available from booking until complete

- **Need:** **Reschedule** and **Cancel** from open visit until completed.
- **Now:** Mostly after `ACCEPTED` / reconfirm/hold paths; not from early open statuses through to pre-complete.
- **Fix:** UI + state machine allow both for telecaller-owned open statuses; hide after `COMPLETED`/`CANCELLED`.

### A4. Day-before treated as action window, not notify-only

- **Need:** **1 day before** → **notification to reconfirm only**; actions already available earlier.
- **Now:** Dashboard **“Reconfirm Tomorrow's Visits”** is T+1-only; reconfirm flow still status-tied; no solid dedicated T−1 notification job as the main rule.
- **Fix:** Cron/job T−1 → notify telecaller (link `/site-visits`); do not gate Reschedule/Cancel on “tomorrow.”

---

## B. Notifications

### B1. History = dismissed only

- **Need:** Full history including dismissed.
- **Now:** `scope=history` → `is_dismissed: true` only.
- **Fix:** History = all for user; inbox = not dismissed.

### B2. Desktop list height still ~420px

- **Need:** Full scrollable list on desktop.
- **Now:** Inner list `max-h-[420px]` can still clip.
- **Fix:** Viewport-based max height + `min-h-0 overflow-y-auto`.

---

## C. Attendance — field / PM offsite

### C1. Field work does not fully drive present/absent

- **Need:** Pending/approved field → present; rejected → absent (+ performance).
- **Now:** Submit `FIELD_WORK` exists; approve path mainly handles `LATE_CHECKIN`; reject copy still leave/late-oriented.
- **Fix:** Approve/reject handlers for `FIELD_WORK`; rollup uses proposal status.

### C2. EOD auto-logout only partial relative to field rules

- **Need:** On field day, EOD submit records logout.
- **Now:** EOD can set `check_out_at` if missing; not clearly tied only to field-day policy.
- **Fix:** Confirm field-day present + EOD checkout together in one rule set.

---

## D. Permissions & navigation

### D1. Some nav items still ungated

- **Examples:** Complaints, Sales Pipeline (personal items like profile may stay open).
- **Effect:** Open page → 403/empty.
- **Fix:** `COMPLAINTS_READ`, pipeline/`LEADS_READ` (or real opp perm); hide dead actions.

### D2. Profile “Roles & responsibilities” key mismatch

- **Now:** `roleCopy` uses `ADMIN`, `TELECALLER`, …; real roles are `Admin (Technical)`, `telecallers`, etc.
- **Effect:** Generic “Standard employee access.”
- **Fix:** Key by `Roles.*`; common rules for all; all real roles.

### D3. Auth middleware inconsistency

- Some routes `requirePermission`, some `requireAuthz` (DB overrides).
- **Risk:** UI grant applies on some APIs only after refresh.
- **Fix:** Prefer DB-aware authz on mutating routes.

---

## E. Performance scoring guide

### E1. Approved vs rejected attendance not fully explained

- Boosts/penalties listed; **approved** late/leave/emergency logout vs **rejected** impact not fully clear.
- **Fix:** Explicit +/− rows matched to `PERFORMANCE_WEIGHTS` / rollup jobs.

---

## F. Distribution / polish

### F1. Equal load — minor

- Lowest `activeLeadCount` is in place.
- **Optional:** Stable tie-break; remove “performance-weighted assignment” wording in UI/docs.

### F2. Agent Approvals empty state

- Agent sees Approvals if they have ACCEPT; list only visits routed to them.
- **Fix:** Clear empty copy if by design; or change list policy if product differs.

---

## G. Structural / deferred

### G1. Customer portal still empty (`mountPortal` no-op)

### G2. Thin typed FE API layer (mostly ad-hoc `fetchWithAuth`)

### G3. Deploy ops

- Ensure notification dismiss columns migrated.
- Ensure `site_visits.accept` seeded on Agent/PM/SM in DB.

---

## Already fixed (do not treat as open)

- Accept: route + service + policy use `SITE_VISITS_ACCEPT`; web matrix includes it
- Approvals nav permission-gated; reassign targets include Agent
- Task priority + IST display
- Drop + `exit_reason`
- Demo assignee names
- Bulk → `LEADS_BULK_UPLOAD`
- Added-by-me includes assigned
- Equal telecaller assignment (load-based)
- Global search removed
- Notification soft dismiss + Inbox/History UI (history **semantics** still wrong — B1)
- Permission keys aligned API / web / packages

---

## Priority order

| Pri    | IDs                  | Focus                                                                                               |
| ------ | -------------------- | --------------------------------------------------------------------------------------------------- |
| **P0** | **A1–A4**            | Telecaller site visits: Active/Completed, details+PM, Reschedule/Cancel until done, T−1 notify only |
| **P0** | **B1**               | Notification history query                                                                          |
| **P1** | **C1–C2**            | Field work present/absent + EOD                                                                     |
| **P1** | **D1–D2**            | Nav gates + role copy                                                                               |
| **P1** | **B2, E1**           | Desktop notif height; scoring approval text                                                         |
| **P2** | **D3, F1–F2, G1–G3** | Authz consistency, polish, portal, ops                                                              |

---

## One-line summary

**Biggest open product gap:** telecaller site visits must show from **book → complete** with **details + PM**, **Reschedule/Cancel** the whole time, **Completed tab** after done, and **T−1 reconfirm notification only**.

**Biggest open tech gaps:** notification **history filter**, **field-work attendance outcomes**, **ungated nav**, **roleCopy** mismatch.
