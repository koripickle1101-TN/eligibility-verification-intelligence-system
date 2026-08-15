# EVIS 1.0: Eligibility Verification Intelligence System

A student-developed healthcare operations portfolio project for exploring how insurance eligibility risk can be identified before scheduling, authorization, claim submission, or patient billing are affected.

**Created by Kori Pickle, BSHA Candidate, University of Phoenix**

## Project Purpose

EVIS 1.0 is designed to demonstrate student-level workflow analysis around coverage status, payer mismatch, plan type confusion, demographic conflicts, coordination-of-benefits issues, referral requirements, authorization triggers, patient responsibility visibility, and clean intake readiness.

The core operational question is:

> **Where did the workflow first lose control?**

## New Simulation: Demographic Verification & Eligibility Exception Control

This repository now includes a 30-case synthetic experiment comparing:

- **Baseline state:** no structured demographic verification checkpoint before eligibility.
- **Control state:** a modeled verification checkpoint intended to catch selected intake defects before eligibility becomes the first visible signal.

The simulation separates:

- Failure
- Signal
- Preventive control
- Detective control
- Corrective action
- Workflow gate
- First loss of control
- Downstream rework

### Simulated Case Mix

| Scenario | Cases |
|---|---:|
| Clean registration | 18 |
| DOB transposition | 4 |
| Member ID typo | 3 |
| Subscriber name discrepancy | 2 |
| Missing demographic field | 2 |
| Payer selection discrepancy | 1 |
| **Total** | **30** |

The control-state capture rate and all modeled minutes, rework touches, and outcome rates are synthetic design assumptions used only for learning. They are **not healthcare benchmarks or observed employer results**.

## Portfolio Trilogy

| Project | Focus |
|---|---|
| EVIS 1.0 | Eligibility verification and front-end intake risk |
| PARCS 2.0 | Prior authorization reliability and patient access risk |
| DPIS 1.0 | Denial prevention and revenue integrity risk |

## No PHI / Integrity Notice

Created by Kori Pickle, BSHA Candidate, University of Phoenix. This project is educational, simulated, and does not use PHI, employer data, payer data, claims data, real eligibility transactions, or real patient information.

## Core Artifacts

- `index.html`
- `demographic-eligibility-control-simulation.html`
- `data/demographic-eligibility-control-simulation.csv`
- `eligibility-risk-scorecard.html`
- `coverage-verification-checklist.html`
- `patient-intake-risk-map.html`
- `eligibility-dashboard.html`
- `sample-eligibility-cases.html`
- `eligibility-risk-calculator.html`
- `monthly-eligibility-quality-report.html`
- `data/sample-eligibility-cases.csv`

## Brand System

- Pure White: `#FFFFFF`
- True Black: `#000000`
- Tennessee Orange: `#FF8200`
- Editorial serif headlines with clean modern sans-serif body text

## Skills Practiced / Demonstrated in the Portfolio

- Eligibility verification workflow analysis
- Patient access risk detection
- Demographic data-quality controls
- Preventive vs. detective control design
- Exception management thinking
- Front-end revenue-cycle readiness
- Root-cause classification
- Synthetic data design
- KPI calculation
- Workflow mapping
- No-PHI portfolio documentation
- Recruiter-facing operational communication

## Created by

Kori Pickle  
BSHA Candidate, University of Phoenix  
Healthcare Operations Intelligence Engine™
