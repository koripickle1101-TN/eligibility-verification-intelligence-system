# EVIS — Completed Synthetic Patient Access Queue Evidence

**Student-developed, simulated, educational, no-PHI healthcare operations exercise.** Created by Kori Pickle, BSHA Candidate, University of Phoenix (degree in progress). No professional healthcare work, payer access, live coverage determinations, or employer results are claimed.

## Reviewer snapshot

**Problem:** An eligibility exception can be detected without being assigned, followed up, or appropriately closed.

**Approach:** A separate 12-record fictional intake queue tracks issue type, assigned administrative queue, follow-up action, due date, fictional closure, overdue status, and open age.

**Evidence:** [Download the 12-case CSV](../data/patient-access-work-queue-12-synthetic-cases.csv). A corrected branded Excel workbook accompanies this case study as a separate deliverable; it is **not yet hosted in this GitHub repository**.

**What it illustrates:** Spreadsheet queue organization, coverage-exception classification, handoff note writing, escalation awareness, follow-up dates, and basic counting/aging methodology.

**Limitations:** All data and statuses are fictional; this is a *different scenario* from the repository's earlier 30-case demographic simulation and its 15-vs-15 comparison. Do not merge or compare their rates. A closed administrative case never guarantees eligibility, authorization, service clearance, or payment.

## Practical control sequence

```text
Detect exception → Record supporting issue → Assign responsible queue
           ↓
Schedule next action and due date → Follow up / escalate
           ↓
Verify documented disposition → Close OR keep on hold for review
```

## Example synthetic dispositions

| Case | Visible issue | Student-modeled next action | State as of 2026-10-20 |
|---|---|---|---|
| EV-002 | Member ID mismatch | Check the identifier against an approved source and recheck | Closed (fictional recheck) |
| EV-003 | Inactive coverage response | Verify service-date coverage context and alert scheduling | Open; not verified |
| EV-006 | Coordination-of-benefits uncertainty | Clarify coverage order through appropriate qualified review | Escalated; not resolved |
| EV-009 | Referral requirement question | Review authoritative requirements and route appropriately | Escalated; determination not assumed |
| EV-012 | Language-access follow-up | Arrange approved communication support without recording sensitive identifying details | Open |

## Count and metric definitions

Reporting date: **2026-10-20** (fixed reproducible scenario date).

- Total fictional cases: **12**
- Closed: **7**; Open: **3**; Escalated: **2**; Unresolved: **5**
- Administrative closure share: **7 / 12 = 58.3%**, a descriptive synthetic count, not performance achievement.
- Open age (calendar days): **MAX(0, reporting date − intake date)** for an unresolved case; zero for closed cases.
- Overdue unresolved: an unresolved case where follow-up due date precedes the fixed reporting date.
- Closed-case on-time fraction: completed fictional closures on or before follow-up due date divided by *closed fictional cases*, not all cases.

## Closure-evidence audit

The seven Closed rows are **fictional author-entered dispositions**, not independently verified payer outcomes. The current queue records a simulated status, closure date, assigned queue, and narrative handoff note. It does **not** include a verifiable source reference, source-check timestamp, independent reviewer, or authenticated eligibility-response artifact. Therefore the correct description is **modeled administrative closure**, never confirmed real-world eligibility or authorized advancement.

| Case | Modeled closure note | Independent closure proof |
|---|---|---|
| EV-001 | No exception in fictional intake | Not available |
| EV-002 | Member ID corrected and rechecked | Not available |
| EV-004 | No exception in fictional intake | Not available |
| EV-005 | Subscriber name corrected and reverified | Not available |
| EV-007 | No exception in fictional intake | Not available |
| EV-010 | No exception in fictional intake | Not available |
| EV-011 | Payer selection corrected and reverified | Not available |

All five unresolved records (EV-003, EV-006, EV-008, EV-009, EV-012) are past their fictional follow-up due dates on the fixed reporting date. A modeled escalation is not equivalent to resolution.

For a stronger future simulation, add clearly fictional evidence-source types, event timestamps, role-based reviews, recheck outcomes, and final disposition criteria. Do not invent real payer responses, screenshots, transaction identifiers, or independent confirmations.

## Privacy, judgment, and access boundaries

No names, dates of birth, member numbers, payer IDs, real records, PHI, live EHR access, claims, or payer transactions are used. These examples do not make clinical, coding, benefit, compliance, or medical-necessity determinations. Communication support and reasonable accommodations require applicable organizational procedures.

**Core question:** Where did the workflow first lose control?
