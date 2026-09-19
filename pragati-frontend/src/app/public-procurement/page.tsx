// @ts-nocheck
"use client";
import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen flex flex-col">

      
<main className="w-full pt-14 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/* Top Notice & Statutory Banner */}
<div className="w-full bg-primary text-on-primary px-layout-gutter py-2 text-label-sm font-label-sm flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="flex items-center gap-1 bg-surface-container-lowest/15 px-2 py-0.5 rounded text-[10px] tracking-wide uppercase font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span> Statutory Registry
      </span>
<span>Union of India • Gazette Reference: MoHFW/RTI/SEC4-1B/2026/04</span>
<span className="opacity-40">|</span>
<span>National IST Timestamp: 2026-03-29 11:42:08 +05:30 (NPL New Delhi)</span>
</div>
<div className="flex items-center gap-space-md">
<span className="flex items-center gap-1 font-semibold text-secondary-fixed">
<span className="material-symbols-outlined text-[14px]">lock</span> 256-Bit Merkle Verification Valid
      </span>
<Link className="text-on-primary underline hover:text-secondary-fixed transition-colors" href="#rti-filing">DoPT RTI Portal Link</Link>
</div>
</div>
{/* Main Context Area */}
<div className="w-full px-layout-gutter py-space-lg flex flex-col gap-space-lg bg-surface">
{/* Breadcrumb & Header Title Strip */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant flex-wrap">
<span className="hover:text-primary cursor-pointer">Public Transparency Desk</span>
<span className="material-symbols-outlined text-[12px]">chevron_right</span>
<span className="hover:text-primary cursor-pointer">Section 4(1)(b) RTI Disclosures</span>
<span className="material-symbols-outlined text-[12px]">chevron_right</span>
<span className="text-on-surface font-semibold">Ministry of Health &amp; Family Welfare Procurement</span>
</div>
<div className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-md mt-1">
<div className="flex flex-col max-w-4xl">
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
            Public Procurement Transparency &amp; Proactive Disclosure Portal
          </h1>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
            Mandatory proactive disclosures under <strong className="text-on-surface">Section 4(1)(b) of the RTI Act 2005</strong>, 
            <strong className="text-on-surface">CVC Proactive Disclosure Directives 2021</strong>, and 
            <strong className="text-on-surface">General Financial Rules (GFR) 2017 Rule 159</strong> for unhindered citizen audit and public exchequer accountability.
          </p>
</div>
{/* Action Bar Buttons */}
<div className="flex items-center flex-wrap gap-space-xs shrink-0">
<button className="h-9 px-3 rounded-lg bg-surface-container text-primary hover:bg-surface-container-highest transition-colors font-label-md text-label-md flex items-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">file_download</span>
<span>Annual Dossier (PDF)</span>
</button>
<button className="h-9 px-3 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md text-label-md flex items-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">data_object</span>
<span>Open Data API (JSON)</span>
</button>
<button className="h-9 px-3 rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors font-label-md text-label-md flex items-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
<span>File Online RTI (DoPT)</span>
</button>
<button className="h-9 px-3 rounded-lg bg-surface-container-lowest text-secondary hover:bg-secondary-container/20 transition-colors font-label-md text-label-md flex items-center gap-1.5 shadow-sm" type="button">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>Verify Cryptographic Audit Hash</span>
</button>
</div>
</div>
</div>
{/* Public Transparency KPI Suite */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/* KPI 1 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Publicly Screened Bids</span>
<span className="p-1.5 rounded-lg bg-surface-container text-primary">
<span className="material-symbols-outlined text-[18px]">policy</span>
</span>
</div>
<div className="mt-2">
<div className="font-display-lg text-display-lg font-bold text-primary tabular-nums">1,842</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Published across <span className="font-semibold text-on-surface">148 Central Contracts</span>
</div>
</div>
<div className="mt-3 pt-2 text-[11px] font-label-sm text-secondary flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 100% gazetted on CPPP &amp; GeM
        </div>
</div>
{/* KPI 2 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Total Value Awarded</span>
<span className="p-1.5 rounded-lg bg-surface-container text-primary">
<span className="material-symbols-outlined text-[18px]">currency_rupee</span>
</span>
</div>
<div className="mt-2">
<div className="font-display-lg text-display-lg font-bold text-on-surface tabular-nums">₹3,410.80 Cr</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Sanctioned: ₹3,724.50 Cr • Saved: <span className="font-semibold text-secondary">₹313.70 Cr</span>
</div>
</div>
<div className="mt-3 pt-2 text-[11px] font-label-sm text-on-surface-variant flex items-center justify-between">
<span>100% Taxpayer Funds Itemized</span>
<span className="font-semibold text-secondary font-tabular-num text-tabular-num">8.42% Net Rebate</span>
</div>
</div>
{/* KPI 3 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">MSME &amp; Start-up Share</span>
<span className="p-1.5 rounded-lg bg-surface-container text-secondary">
<span className="material-symbols-outlined text-[18px]">storefront</span>
</span>
</div>
<div className="mt-2">
<div className="flex items-baseline gap-2">
<div className="font-display-lg text-display-lg font-bold text-secondary tabular-nums">28.4%</div>
<span className="font-label-sm text-label-sm text-secondary font-semibold bg-secondary-container px-1.5 py-0.5 rounded">+3.4% Surplus</span>
</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Statutory Target: 25.0% under Public Proc. Policy
          </div>
</div>
<div className="mt-3 pt-2 text-[11px] font-label-sm text-on-surface-variant">
          621 Micro &amp; Small Enterprises Awarded
        </div>
</div>
{/* KPI 4 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold">Make-In-India Share (Class-I)</span>
<span className="p-1.5 rounded-lg bg-surface-container text-primary">
<span className="material-symbols-outlined text-[18px]">flag</span>
</span>
</div>
<div className="mt-2">
<div className="font-display-lg text-display-lg font-bold text-primary tabular-nums">74.2%</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Class-I Local Content (&gt;50% Domestic Value Addition)
          </div>
</div>
<div className="mt-3 pt-2 text-[11px] font-label-sm text-on-surface-variant">
          High-Tech Bio-Medical Indigenous Allocation
        </div>
</div>
</div>
{/* Two-Column Public & Auditor Workbench (65% / 35%) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/* LEFT COLUMN (65% / lg:col-span-8) */}
<div className="lg:col-span-8 flex flex-col gap-space-lg min-w-0">
{/* SECTION 1: Public Tender Award & Contract Ledger */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div>
<h2 className="font-headline-md text-headline-md text-primary font-bold flex items-center gap-2">
<span>Public Tender Award &amp; Contract Ledger</span>
<span className="text-[11px] font-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-medium">Sec 4(1)(b)(xi)</span>
</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Full disclosure of commercial awards, exchequer savings, sanction estimates, and L-1 determination audits.
              </p>
</div>
{/* Quick Filter Pill / Live Counter */}
<div className="flex items-center gap-space-xs shrink-0">
<span className="font-label-sm text-label-sm text-on-surface-variant">Filter by Ministry:</span>
<select className="h-8 px-2 rounded-lg bg-surface-container-low text-on-surface text-label-sm font-label-sm focus:outline-none">
<option defaultValue>All Participating Ministries (12)</option>
<option>Ministry of Health &amp; Family Welfare</option>
<option>Ministry of Defence (Medical)</option>
<option>Ministry of Heavy Industries</option>
</select>
</div>
</div>
{/* Master Data Grid: High Density */}
<div className="overflow-x-auto rounded-lg bg-surface-container-lowest">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<tr>
<th className="py-2.5 px-3">Tender / Bid ID</th>
<th className="py-2.5 px-3">Procuring Wing &amp; Item</th>
<th className="py-2.5 px-3 text-right">Sanctioned vs Awarded</th>
<th className="py-2.5 px-3">Awarded Bidder(s)</th>
<th className="py-2.5 px-3">Justification &amp; Local Content</th>
<th className="py-2.5 px-3 text-right">Gazette / Proof</th>
</tr>
</thead>
<tbody className="text-on-surface">
{/* ROW 1 */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3 px-3 align-top font-tabular-num text-tabular-num font-semibold text-primary">
<div className="flex items-center gap-1">
<span>GEM/2026/B/489201</span>
</div>
<span className="text-[10px] text-on-surface-variant block font-normal">GeM Public RA No. 8912</span>
<span className="inline-flex items-center gap-1 mt-1 text-[10px] px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold uppercase">
<span className="w-1 h-1 rounded-full bg-secondary"></span> Published
                    </span>
</td>
<td className="py-3 px-3 align-top">
<span className="font-semibold text-on-surface block">MoHFW (Procurement Wing-IV)</span>
<span className="text-body-sm text-on-surface-variant text-[12px] block mt-0.5">High-Precision Biomedical Diagnostic Imaging Suite (64-Slice PET-CT)</span>
<span className="text-[11px] text-on-surface-variant opacity-80 block">Qty: 24 Systems • AIIMS Delivery Cluster</span>
</td>
<td className="py-3 px-3 align-top text-right font-tabular-num text-tabular-num">
<div className="text-[11px] text-on-surface-variant">Est: ₹48.50 Cr</div>
<div className="font-bold text-on-surface text-[14px]">₹41.20 Cr</div>
<div className="text-[11px] font-semibold text-secondary">
                      Saved ₹7.30 Cr (15.05%)
                    </div>
</td>
<td className="py-3 px-3 align-top">
<div className="font-medium text-on-surface">Apex Heavy Diagnostic Systems <span className="text-[11px] text-on-surface-variant">(50%)</span></div>
<div className="font-medium text-on-surface mt-1">ABC Industries Ltd <span className="text-[11px] text-secondary font-semibold">(50% MII Match)</span></div>
<span className="text-[10px] text-on-surface-variant block mt-0.5 font-tabular-num">GSTIN: 07AAACA4918Q1Z4</span>
</td>
<td className="py-3 px-3 align-top">
<div className="text-[12px] text-on-surface leading-tight">
                      Lowest Evaluated Commercial (L-1); Class-I Local Content declared at <span className="font-semibold text-primary">68.4%</span>.
                    </div>
<span className="inline-block mt-1 text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">
                      Integrity Pact Compliant
                    </span>
</td>
<td className="py-3 px-3 align-top text-right">
<Link className="inline-flex items-center gap-1 text-[11px] font-label-md text-primary hover:underline bg-surface-container px-2 py-1 rounded" href="#view-gazette-1">
<span className="material-symbols-outlined text-[14px]">picture_as_pdf</span> Notice
                    </Link>
</td>
</tr>
{/* ROW 2 */}
<tr className="hover:bg-surface-container-low/60 transition-colors bg-surface-container-low/20">
<td className="py-3 px-3 align-top font-tabular-num text-tabular-num font-semibold text-primary">
<div className="flex items-center gap-1">
<span>GEM/2026/B/481902</span>
</div>
<span className="text-[10px] text-on-surface-variant block font-normal">GeM Direct Reverse Auction</span>
<span className="inline-flex items-center gap-1 mt-1 text-[10px] px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold uppercase">
<span className="w-1 h-1 rounded-full bg-secondary"></span> Published
                    </span>
</td>
<td className="py-3 px-3 align-top">
<span className="font-semibold text-on-surface block">Ministry of Defence (AFMS)</span>
<span className="text-body-sm text-on-surface-variant text-[12px] block mt-0.5">Automated External Defibrillators &amp; ICU Ventilator Modules</span>
<span className="text-[11px] text-on-surface-variant opacity-80 block">Qty: 480 Units • Border Command Hospitals</span>
</td>
<td className="py-3 px-3 align-top text-right font-tabular-num text-tabular-num">
<div className="text-[11px] text-on-surface-variant">Est: ₹18.20 Cr</div>
<div className="font-bold text-on-surface text-[14px]">₹15.85 Cr</div>
<div className="text-[11px] font-semibold text-secondary">
                      Saved ₹2.35 Cr (12.91%)
                    </div>
</td>
<td className="py-3 px-3 align-top">
<div className="font-medium text-on-surface">MedTech Bharat Innovations LLP</div>
<span className="text-[10px] px-1.5 py-0.2 rounded bg-surface-container-high text-primary font-semibold">MSE Registered</span>
<span className="text-[10px] text-on-surface-variant block mt-0.5 font-tabular-num">GSTIN: 27AABCM8210P1ZK</span>
</td>
<td className="py-3 px-3 align-top">
<div className="text-[12px] text-on-surface leading-tight">
                      L-1 Responsive; Class-I MII Content <span className="font-semibold text-primary">82.1%</span> (Pune R&amp;D Facility Certified).
                    </div>
<span className="inline-block mt-1 text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">
                      NABL Tested Batch
                    </span>
</td>
<td className="py-3 px-3 align-top text-right">
<Link className="inline-flex items-center gap-1 text-[11px] font-label-md text-primary hover:underline bg-surface-container px-2 py-1 rounded" href="#view-gazette-2">
<span className="material-symbols-outlined text-[14px]">picture_as_pdf</span> Notice
                    </Link>
</td>
</tr>
{/* ROW 3 */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3 px-3 align-top font-tabular-num text-tabular-num font-semibold text-primary">
<div className="flex items-center gap-1">
<span>GEM/2026/B/479100</span>
</div>
<span className="text-[10px] text-on-surface-variant block font-normal">Global Open Tender E-Proc</span>
<span className="inline-flex items-center gap-1 mt-1 text-[10px] px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold uppercase">
<span className="w-1 h-1 rounded-full bg-secondary"></span> Published
                    </span>
</td>
<td className="py-3 px-3 align-top">
<span className="font-semibold text-on-surface block">Ministry of Heavy Industries</span>
<span className="text-body-sm text-on-surface-variant text-[12px] block mt-0.5">Heavy Mobile Medical Vans with On-board Sterilization Units</span>
<span className="text-[11px] text-on-surface-variant opacity-80 block">Qty: 60 Custom Chassis • PM-ABHIM Scheme</span>
</td>
<td className="py-3 px-3 align-top text-right font-tabular-num text-tabular-num">
<div className="text-[11px] text-on-surface-variant">Est: ₹32.00 Cr</div>
<div className="font-bold text-on-surface text-[14px]">₹29.10 Cr</div>
<div className="text-[11px] font-semibold text-secondary">
                      Saved ₹2.90 Cr (9.06%)
                    </div>
</td>
<td className="py-3 px-3 align-top">
<div className="font-medium text-on-surface">Tata Motors Special Vehicles Div.</div>
<span className="text-[10px] text-on-surface-variant block mt-0.5 font-tabular-num">GSTIN: 27AAACT2727Q1ZW</span>
</td>
<td className="py-3 px-3 align-top">
<div className="text-[12px] text-on-surface leading-tight">
                      L-1 Techno-Commercial Matrix; Local content verified at <span className="font-semibold text-primary">91.5%</span>.
                    </div>
<span className="inline-block mt-1 text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">
                      ARA-Certified Body
                    </span>
</td>
<td className="py-3 px-3 align-top text-right">
<Link className="inline-flex items-center gap-1 text-[11px] font-label-md text-primary hover:underline bg-surface-container px-2 py-1 rounded" href="#view-gazette-3">
<span className="material-symbols-outlined text-[14px]">picture_as_pdf</span> Notice
                    </Link>
</td>
</tr>
</tbody>
</table>
</div>
<div className="flex items-center justify-between pt-2 text-label-sm font-label-sm text-on-surface-variant flex-wrap gap-2">
<div>Displaying 3 of 148 Public Gazette Awards • Synchronized with Central Public Procurement Portal (CPPP)</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1 rounded bg-surface-container text-primary font-semibold hover:bg-surface-container-high transition-colors" type="button">
                Load All 148 Public Records
              </button>
</div>
</div>
</div>
{/* SECTION 2: Technical Evaluation Transparency & Disqualification Disclosures */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-md">
<div className="flex items-start justify-between gap-space-md">
<div>
<h2 className="font-headline-md text-headline-md text-primary font-bold flex items-center gap-2">
<span>Technical Evaluation Transparency &amp; Disqualification Disclosures</span>
<span className="text-[11px] font-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-medium">Sec 4(1)(b)(v)</span>
</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Statutory disclosures detailing why rejected bidders were disqualified, eliminating arbitrary exclusion under CVC Proactive Directives.
              </p>
</div>
<div className="shrink-0 flex items-center gap-1 bg-surface-container px-2.5 py-1 rounded-lg text-primary text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[16px]">visibility</span>
<span>Total Non-Responsive: 11 Vendors</span>
</div>
</div>
{/* Reasoned Disqualification Table */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
{/* Disqualification Card 1 */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-semibold text-error flex items-center gap-1">
<span className="w-2 h-2 rounded bg-error"></span> Disqualified
                  </span>
<span className="text-[11px] font-tabular-num text-on-surface-variant">GEM/2026/B/489201</span>
</div>
<div className="font-semibold text-on-surface mt-1.5 text-body-md">Global Diagnostics Corp Ltd</div>
<div className="font-label-sm text-[11px] text-error font-semibold mt-1">
                  Reason: Invalid NABL Calibration Scope
                </div>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1.5 leading-snug">
                  Submitted calibration certificates failed Section 4.2 parameters for radiation tube thermal dissipation. Did not submit ISO/IEC 17025 accredited proof within cure window.
                </p>
</div>
<div className="mt-3 pt-2 text-[10px] text-on-surface-variant font-tabular-num">
                Audit Ref: TEC-MOHFW-2026-DISQ-01
              </div>
</div>
{/* Disqualification Card 2 */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-semibold text-error flex items-center gap-1">
<span className="w-2 h-2 rounded bg-error"></span> Disqualified
                  </span>
<span className="text-[11px] font-tabular-num text-on-surface-variant">GEM/2026/B/481902</span>
</div>
<div className="font-semibold text-on-surface mt-1.5 text-body-md">SinoMed Tech Overseas FZE</div>
<div className="font-label-sm text-[11px] text-error font-semibold mt-1">
                  Reason: GFR Rule 144(xi) Land Border Declaration
                </div>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1.5 leading-snug">
                  Bidder failed to furnish mandatory Department of Expenditure (DoE) competent registration certificates regarding beneficial ownership in land-border sharing jurisdictions.
                </p>
</div>
<div className="mt-3 pt-2 text-[10px] text-on-surface-variant font-tabular-num">
                Audit Ref: TEC-MOHFW-2026-DISQ-02
              </div>
</div>
{/* Disqualification Card 3 */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm font-semibold text-error flex items-center gap-1">
<span className="w-2 h-2 rounded bg-error"></span> Disqualified
                  </span>
<span className="text-[11px] font-tabular-num text-on-surface-variant">GEM/2026/B/479100</span>
</div>
<div className="font-semibold text-on-surface mt-1.5 text-body-md">Vanguard Fabricators Consortium</div>
<div className="font-label-sm text-[11px] text-error font-semibold mt-1">
                  Reason: GFR Rule 173 Turnover Deficit
                </div>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-1.5 leading-snug">
                  Audited 3-year average turnover fell short of the mandatory ₹12.00 Cr requirement (audited at ₹8.40 Cr). Net worth certificates submitted lacked valid ICAI UDIN tag.
                </p>
</div>
<div className="mt-3 pt-2 text-[10px] text-on-surface-variant font-tabular-num">
                Audit Ref: TEC-MOHFW-2026-DISQ-03
              </div>
</div>
</div>
{/* Citizen Verification & Integrity Pact Certificate */}
<div className="mt-1 p-space-md rounded-xl bg-surface-container-low flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-[32px] mt-0.5">verified_user</span>
<div className="flex flex-col">
<div className="font-title-sm text-title-sm text-primary font-bold">
                  Citizen Verification &amp; Public Integrity Pact Attestation
                </div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 max-w-2xl">
                  Public Statement of Non-Collusion and Anti-Corruption Undertaking formally executed by all 18 initial bidding vendors, under the supervision of Independent External Monitor (IEM) <strong className="text-on-surface">Justice (Retd.) Alok Verma</strong> (Former Judge, High Court).
                </p>
<div className="flex items-center gap-3 mt-2 text-label-sm font-label-sm text-on-surface-variant">
<span className="flex items-center gap-1 font-semibold text-secondary">
<span className="material-symbols-outlined text-[14px]">check_circle</span> Zero Cartelization Flags
                  </span>
<span>•</span>
<span>CVC Registration IEM-MoHFW-2024/91</span>
</div>
</div>
</div>
<button className="shrink-0 h-9 px-3 rounded-lg bg-surface-container-highest text-primary hover:bg-surface-container font-label-md text-label-md flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[16px]">history_edu</span>
<span>Inspect IEM Signed Accord</span>
</button>
</div>
</div>
{/* SECTION 3: Public Procurement Grievance & Redressal Statistics */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div>
<h2 className="font-headline-md text-headline-md text-primary font-bold flex items-center gap-2">
<span>Public Procurement Grievance &amp; Redressal Statistics</span>
<span className="text-[11px] font-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-medium">Sec 4(1)(b)(xii)</span>
</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Proactive public reporting on vendor pre-bid challenges, citizen appeals, and disposal timelines under CVC 15-Day SLA.
              </p>
</div>
<span className="font-label-sm text-label-sm bg-secondary-container text-on-secondary-container font-semibold px-2 py-1 rounded">
              92.8% On-Time SLA
            </span>
</div>
{/* Grievance Stat Bar & Breakdown */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm text-center">
<div className="p-space-sm rounded-lg bg-surface-container-low">
<div className="font-display-lg text-display-lg font-bold text-on-surface tabular-nums">14</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-1 font-medium">Total Complaints Received</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low">
<div className="font-display-lg text-display-lg font-bold text-secondary tabular-nums">13</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-1 font-medium">Resolved ≤15 Days SLA</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low">
<div className="font-display-lg text-display-lg font-bold text-primary tabular-nums">1</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-1 font-medium">Upheld &amp; RFP Amended</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low">
<div className="font-display-lg text-display-lg font-bold text-on-surface-variant tabular-nums">12</div>
<div className="font-label-sm text-label-sm text-on-surface-variant mt-1 font-medium">Dismissed (Reasoned Order)</div>
</div>
</div>
{/* Mini Inline Chart SVG: Grievance Resolution Velocity */}
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center justify-between text-label-sm font-label-sm">
<span className="text-on-surface font-semibold">15-Day SLA Resolution Trajectory (FY 2025-26)</span>
<span className="text-on-surface-variant">Average Resolution Turnaround: <strong className="text-on-surface">6.4 Business Days</strong></span>
</div>
<div className="w-full h-12 flex items-end gap-1.5 pt-2">
<div className="flex-1 bg-secondary/80 rounded-t h-8" title="Oct: 2 Cases (Avg 5d)"></div>
<div className="flex-1 bg-secondary/80 rounded-t h-10" title="Nov: 3 Cases (Avg 7d)"></div>
<div className="flex-1 bg-secondary/80 rounded-t h-6" title="Dec: 1 Case (Avg 4d)"></div>
<div className="flex-1 bg-secondary/80 rounded-t h-11" title="Jan: 4 Cases (Avg 8d)"></div>
<div className="flex-1 bg-secondary/80 rounded-t h-7" title="Feb: 2 Cases (Avg 6d)"></div>
<div className="flex-1 bg-secondary rounded-t h-9" title="Mar: 2 Cases (Avg 6d)"></div>
</div>
<div className="flex justify-between text-[10px] font-label-sm text-on-surface-variant">
<span>OCT 25</span>
<span>NOV 25</span>
<span>DEC 25</span>
<span>JAN 26</span>
<span>FEB 26</span>
<span>MAR 26 (CURRENT)</span>
</div>
</div>
</div>
</div>
{/* RIGHT COLUMN (35% / lg:col-span-4) */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/* Open Governance & Citizen Scrutiny Desk */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h2 className="font-title-sm text-title-sm text-primary font-bold">Citizen Scrutiny &amp; Ratings</h2>
<span className="flex items-center gap-1 font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Live Audit
            </span>
</div>
{/* CAG Compliance Stamp & MeitY Rating Card */}
<div className="p-space-md rounded-xl bg-surface-container flex flex-col gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm text-primary">
<span className="material-symbols-outlined text-[28px]">approval</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Independent Audit</span>
<span className="font-title-sm text-title-sm font-bold text-on-surface">CAG Compliance Certified</span>
<span className="font-body-sm text-[12px] text-secondary font-semibold">Zero Adverse Audit Notes in FY 2025-26</span>
</div>
</div>
<div className="pt-2 flex items-center justify-between text-on-surface-variant font-body-sm text-[12px]">
<span>Transparency Rating (MeitY):</span>
<span className="font-headline-md text-headline-md font-bold text-primary">Grade A+</span>
</div>
<div className="w-full bg-surface-container-high rounded-full h-1.5">
<div className="bg-primary h-1.5 rounded-full" style={{"width": "96%"}}></div>
</div>
<span className="text-[11px] text-on-surface-variant text-right">96.4% Compliance on National Proactive Disclosures</span>
</div>
{/* Public Information Officer (PIO) Directory */}
<div className="flex flex-col gap-space-xs pt-1">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
              Designated RTI Appellate Officers
            </span>
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-semibold text-on-surface">Shri Arvind Saxena, CSS</span>
<span className="text-[10px] bg-surface-container px-1.5 py-0.5 rounded text-primary font-semibold">Central Public Info Officer</span>
</div>
<span className="text-[12px] text-on-surface-variant">Director (Procurement Compliance), MoHFW</span>
<span className="text-[11px] font-tabular-num text-on-surface-variant">Email: cpio-proc.mohfw@gov.in • Ph: +91 11 2306 1482</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-1">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-semibold text-on-surface">Ms. Priya Sundaram, IAS</span>
<span className="text-[10px] bg-surface-container px-1.5 py-0.5 rounded text-secondary font-semibold">First Appellate Authority</span>
</div>
<span className="text-[12px] text-on-surface-variant">Joint Secretary (Public Transparency), MoHFW</span>
<span className="text-[11px] font-tabular-num text-on-surface-variant">Email: faa-transparency@gov.in • Ph: +91 11 2306 2801</span>
</div>
</div>
</div>
{/* Downloadable Statutory Disclosure Packages */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-md">
<div>
<h2 className="font-title-sm text-title-sm text-primary font-bold">Statutory Disclosure Packages</h2>
<p className="font-body-sm text-[12px] text-on-surface-variant mt-0.5">
              Sanitized raw datasets released pursuant to RTI Act Section 4 &amp; Open Government Data (OGD) policy.
            </p>
</div>
<div className="flex flex-col gap-space-sm">
{/* Package 1 */}
<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high/60 transition-colors flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">table_view</span>
<div>
<div className="font-label-md text-label-md font-semibold text-on-surface">Itemized BOQ with Landed Rates</div>
<div className="text-[11px] text-on-surface-variant leading-tight mt-0.5">
                    Unit rates, customs clearance, GST splits &amp; warranty loads (Excl. trade secrets under Sec 8(1)(d)).
                  </div>
<div className="text-[10px] font-tabular-num text-on-surface-variant mt-1">XLSX (4.8 MB) • SHA-256 Validated</div>
</div>
</div>
<button className="p-1 rounded text-primary hover:bg-surface-container shrink-0" title="Download BOQ" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
{/* Package 2 */}
<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high/60 transition-colors flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">summarize</span>
<div>
<div className="font-label-md text-label-md font-semibold text-on-surface">Technical Evaluation Minutes</div>
<div className="text-[11px] text-on-surface-variant leading-tight mt-0.5">
                    Unredacted minutes of all 7 TEC committee sittings and lab inspection protocols.
                  </div>
<div className="text-[10px] font-tabular-num text-on-surface-variant mt-1">PDF (14.2 MB) • Gazetted Digital Sign</div>
</div>
</div>
<button className="p-1 rounded text-primary hover:bg-surface-container shrink-0" title="Download Minutes" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
{/* Package 3 */}
<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container-high/60 transition-colors flex items-start justify-between gap-space-sm">
<div className="flex items-start gap-2">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">account_balance</span>
<div>
<div className="font-label-md text-label-md font-semibold text-on-surface">e-PBG Bank Verification Extract</div>
<div className="text-[11px] text-on-surface-variant leading-tight mt-0.5">
                    Confirmation of 3% Performance Bank Guarantees lodged via SFMS API (State Bank of India).
                  </div>
<div className="text-[10px] font-tabular-num text-on-surface-variant mt-1">JSON / CSV (1.2 MB)</div>
</div>
</div>
<button className="p-1 rounded text-primary hover:bg-surface-container shrink-0" title="Download e-PBG Extract" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
</div>
</div>
</div>
{/* Cryptographic Proof of Non-Tampering */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<h2 className="font-title-sm text-title-sm text-primary font-bold flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-[20px]">enhanced_encryption</span>
<span>Cryptographic Proof</span>
</h2>
<span className="font-label-sm text-[10px] px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold uppercase">
              Immutable
            </span>
</div>
<p className="font-body-sm text-[12px] text-on-surface-variant">
            Each proactive disclosure ledger entry is anchored into an immutable cryptographic Merkle tree to prevent retroactive document substitution.
          </p>
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col gap-2">
<div>
<span className="font-label-sm text-[10px] uppercase tracking-wider text-on-surface-variant font-semibold">Merkle Root Hash</span>
<div className="font-tabular-num text-tabular-num text-primary font-mono text-[12px] break-all bg-surface-container-lowest p-1.5 rounded mt-0.5 select-all">
                #RTI-PUB-MOHFW-2026-981A7F2BC018E9
              </div>
</div>
<div className="flex items-center justify-between text-[11px] font-tabular-num text-on-surface-variant">
<span>National Physical Lab Time:</span>
<span className="font-semibold text-on-surface">IST 2026-03-29 11:42:08</span>
</div>
</div>
{/* Citizen QR Code Verification Block */}
<div className="flex items-center gap-space-md pt-2">
{/* Simulated High-Precision QR Matrix SVG */}
<div className="w-20 h-20 bg-surface-container-lowest p-1.5 rounded-lg shadow-sm shrink-0 flex items-center justify-center">
<svg className="w-full h-full text-on-surface" fill="currentColor" viewBox="0 0 100 100">
{/* Outer Corners */}
<path d="M0,0 h30 v30 h-30 z M6,6 h18 v18 h-18 z M10,10 h10 v10 h-10 z"></path>
<path d="M70,0 h30 v30 h-30 z M76,6 h18 v18 h-18 z M80,10 h10 v10 h-10 z"></path>
<path d="M0,70 h30 v30 h-30 z M6,76 h18 v18 h-18 z M10,80 h10 v10 h-10 z"></path>
{/* Random Matrix Dots */}
<rect height="6" width="6" x="36" y="6"></rect>
<rect height="6" width="6" x="48" y="6"></rect>
<rect height="6" width="6" x="42" y="16"></rect>
<rect height="6" width="6" x="54" y="24"></rect>
<rect height="6" width="8" x="6" y="38"></rect>
<rect height="6" width="6" x="20" y="44"></rect>
<rect height="8" width="8" x="36" y="36"></rect>
<rect height="6" width="8" x="50" y="40"></rect>
<rect height="6" width="6" x="64" y="38"></rect>
<rect height="6" width="6" x="78" y="44"></rect>
<rect height="6" width="6" x="90" y="38"></rect>
<rect height="6" width="6" x="36" y="52"></rect>
<rect height="6" width="6" x="48" y="58"></rect>
<rect height="6" width="6" x="60" y="54"></rect>
<rect height="6" width="8" x="72" y="60"></rect>
<rect height="6" width="6" x="40" y="70"></rect>
<rect height="6" width="6" x="52" y="76"></rect>
<rect height="6" width="6" x="66" y="72"></rect>
<rect height="6" width="6" x="78" y="80"></rect>
<rect height="6" width="6" x="90" y="76"></rect>
<rect height="6" width="6" x="42" y="88"></rect>
<rect height="6" width="6" x="56" y="90"></rect>
<rect height="6" width="6" x="70" y="88"></rect>
</svg>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Scan for Direct Mobile Audit</span>
<span className="font-body-sm text-[12px] text-on-surface-variant leading-tight mt-0.5">
                Authenticates integrity against the National Informatics Centre (NIC) Public RTI Blockchain node.
              </span>
<Link className="text-[11px] font-label-md text-primary font-semibold hover:underline mt-1" href="#verify-hash">
                Open Public Audit Ledger Explorer →
              </Link>
</div>
</div>
</div>
{/* Proactive RTI Helpdesk Card */}
<div className="p-space-md rounded-xl bg-surface-container text-on-surface flex flex-col gap-space-sm shadow-sm" id="rti-filing">
<div className="flex items-center gap-2 text-primary">
<span className="material-symbols-outlined text-[20px]">contact_support</span>
<span className="font-title-sm text-title-sm font-bold">Need Unlisted Disclosure?</span>
</div>
<p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
            If any specific non-exempt public procurement document is not proactively published here, citizens are entitled under <strong className="text-on-surface">Section 6(1) of RTI Act 2005</strong> to lodge an instant request with zero physical visits.
          </p>
<div className="flex items-center gap-2 mt-1">
<Link className="h-8 px-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors inline-flex items-center gap-1" href="https://rtionline.gov.in" rel="noopener noreferrer" target="_blank">
<span>Submit Section 6(1) RTI</span>
<span className="material-symbols-outlined text-[14px]">open_in_new</span>
</Link>
<span className="text-[11px] text-on-surface-variant">Nominal Fee: ₹10 via UPI/Netbanking</span>
</div>
</div>
</div>
</div>
{/* Institutional Statutory Footer Strip */}
<div className="mt-space-lg pt-space-md pb-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-semibold text-on-surface">Statutory Authority:</span>
<span>Right to Information (RTI) Act 2005 (Sec 4)</span>
<span>•</span>
<span>Central Vigilance Commission Circular No. 03/01/21</span>
<span>•</span>
<span>GFR 2017 Rule 159</span>
</div>
<div className="text-[11px] text-on-surface-variant text-center sm:text-right">
        Published in compliance with the public interest and statutory transparency mandates of the Union of India.
      </div>
</div>
</div>
</div></main>
    </div>
  );
}
