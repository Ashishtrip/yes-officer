"use client";
import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen flex flex-col">

      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-surface-container-high shadow-sm">
        <div className="h-14 w-full px-layout-gutter flex items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-md min-w-[280px]">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <span className="font-title-sm text-title-sm text-primary leading-none font-bold">Yes Officer</span>
                <span className="px-1.5 py-0.5 rounded bg-surface-container text-primary font-label-sm text-[10px] uppercase font-bold tracking-wider">Gov Portal</span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight mt-0.5">GeM Integrated Compliance & Statutory Audit</span>
            </div>
          </div>
          <nav className="hidden xl:flex items-center h-full gap-space-lg" aria-label="Main Navigation">
            <Link href="/" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Tenders &amp; Bids</Link>
            <Link href="/vigilance-analytics" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Vigilance &amp; Analytics</Link>
            <Link href="/statutory-rules" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Compliance Rules</Link>
            <Link href="/portal-connectors" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Portal Connectors</Link>
            <Link href="/audit-logs" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Audit Logs</Link>
            <Link href="/user-management" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">User &amp; Access / Admin</Link>
          </nav>
          <div className="flex items-center gap-space-md ml-auto">
            <div className="hidden md:flex items-center bg-surface-container-low rounded-xl px-space-md py-1 border border-outline-variant focus-within:border-primary focus-within:bg-surface-container-lowest transition-colors w-64">
              <span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-space-xs">search</span>
              <input type="text" className="bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder-on-surface-variant w-full" placeholder="Search tenders, GSTIN, PAN..." />
            </div>
            <button type="button" className="relative p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" aria-label="Notifications">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span>
            </button>
            <div className="h-6 w-px bg-surface-container-high mx-space-2xs"></div>
            <div className="flex items-center gap-space-sm pl-space-xs cursor-pointer group">
              <div className="hidden lg:flex flex-col text-left">
                <span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">Rajesh Kumar, IAS</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Senior Procurement Officer</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface text-[18px]">expand_more</span>
            </div>
          </div>
        </div>
      </header>
<main className="w-full pt-14 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/* Sub-Header & Statutory Meta Ribbon */}
<section className="w-full bg-surface-container-lowest border-b border-surface-container-high px-layout-gutter py-space-md">
<div className="max-w-[1680px] mx-auto flex flex-col gap-space-sm">
{/* Breadcrumb & Classification Pill */}
<div className="flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm">
<span className="hover:text-primary cursor-pointer">Portal Desk</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-primary cursor-pointer">Governance &amp; Vigilance</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Grievance &amp; Debarment Appeals Tribunal (IEM Desk)</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-[10px] uppercase font-bold tracking-wider">NIC/MeitY Certified E-Tribunal</span>
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Live Bench Session
          </span>
</div>
</div>
{/* Main Title, Statutory Badges & Action Toolbar */}
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md pt-space-2xs">
<div className="space-y-1">
<div className="flex flex-wrap items-baseline gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">Statutory Bidder Grievance, Debarment &amp; Appeals Tribunal</h1>
<span className="font-label-md text-label-md text-primary bg-surface-container-high px-2 py-0.5 rounded">IEM BENCH #IV</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant flex flex-wrap items-center gap-x-2 gap-y-1">
<span className="font-semibold text-on-surface">Authority Mandate:</span> Central Vigilance Commission (CVC) Circular No. 05/01/22 &amp; GFR 2017 Rule 151 (Debarment from Bidding)
            <span className="text-outline-variant">•</span>
<span className="font-mono text-primary font-semibold">Tender Ref: GEM/2026/B/489201</span>
</p>
</div>
{/* Action Bar */}
<div className="flex flex-wrap items-center gap-space-xs">
<button className="h-9 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" type="button">
<span className="material-symbols-outlined text-[16px] text-primary">add_circle</span>
<span>+ Register Suo-Motu Grievance</span>
</button>
<button className="h-9 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" type="button">
<span className="material-symbols-outlined text-[16px] text-primary">videocam</span>
<span>Schedule Virtual Hearing</span>
</button>
<button className="h-9 px-3 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md flex items-center gap-1.5 shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">verified_user</span>
<span>Issue CVC Finding (DSC)</span>
</button>
<button className="h-9 px-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1 transition-colors" title="Export IEM Ledger as Cryptographic PDF" type="button">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
</button>
</div>
</div>
</div>
</section>
{/* Main Viewport Body */}
<div className="w-full max-w-[1680px] mx-auto px-layout-gutter py-space-lg flex flex-col gap-space-lg">
{/* Executive KPI Suite */}
<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/* KPI 1 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Active Representations</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-display-lg text-display-lg font-bold text-on-surface tabular-nums">3</span>
<span className="font-label-sm text-label-sm text-error font-medium">1 Critical</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">/ 2 Routine</span>
</div>
</div>
<span className="p-2 rounded-lg bg-surface-container text-primary material-symbols-outlined text-[20px]">gavel</span>
</div>
<div className="mt-space-sm pt-space-xs border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Active Adjudication</span>
<span className="font-semibold text-primary">Bench In-Session</span>
</div>
</div>
{/* KPI 2 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Resolution SLA Avg.</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-display-lg text-display-lg font-bold text-secondary tabular-nums">11.4</span>
<span className="font-label-md text-label-md text-on-surface-variant">Days</span>
</div>
</div>
<span className="p-2 rounded-lg bg-surface-container text-secondary material-symbols-outlined text-[20px]">speed</span>
</div>
<div className="mt-space-sm pt-space-xs border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Statutory Ceiling: 15 Days</span>
<span className="text-secondary font-semibold font-tabular-num">76% Compliance</span>
</div>
</div>
{/* KPI 3 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Debarment Notices</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-display-lg text-display-lg font-bold text-error tabular-nums">4</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Entities Sanctioned</span>
</div>
</div>
<span className="p-2 rounded-lg bg-error-container text-error material-symbols-outlined text-[20px]">block</span>
</div>
<div className="mt-space-sm pt-space-xs border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>GFR Rule 175 &amp; CCI S.3</span>
<span className="text-error font-semibold">Exclusion Active</span>
</div>
</div>
{/* KPI 4 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Integrity Pact Compliance</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-display-lg text-display-lg font-bold text-on-surface tabular-nums">100%</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">Verified</span>
</div>
</div>
<span className="p-2 rounded-lg bg-secondary-container text-on-secondary-container material-symbols-outlined text-[20px]">handshake</span>
</div>
<div className="mt-space-sm pt-space-xs border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>All 12 Active Bidders</span>
<span className="text-secondary font-semibold">CVC Counter-Signed</span>
</div>
</div>
</section>
{/* Main Two-Column High-Density Workstation */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/* Left Column (65% width: 8/12 on large screens) */}
<div className="lg:col-span-8 flex flex-col gap-space-lg">
{/* 1. Active Grievance & Appeal Docket Ledger */}
<section className="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-sm overflow-hidden">
<div className="px-space-md py-space-sm bg-surface-container-low border-b border-surface-container-high flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">account_balance</span>
<h2 className="font-title-sm text-title-sm text-on-surface font-semibold">Statutory Grievance &amp; Appeal Docket Ledger</h2>
<span className="ml-2 font-label-sm text-[11px] bg-primary text-on-primary px-2 py-0.2 rounded-full">3 Cases Pending</span>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center bg-surface-container-lowest rounded border border-outline-variant px-2 py-1">
<span className="material-symbols-outlined text-on-surface-variant text-[16px] mr-1">filter_list</span>
<span className="font-label-sm text-label-sm text-on-surface font-medium">All Jurisdiction</span>
</div>
</div>
</div>
{/* Table Container */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-surface-container-high font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<th className="py-2.5 px-space-md">Docket ID</th>
<th className="py-2.5 px-space-md">Appellant / Bidder</th>
<th className="py-2.5 px-space-md">Contested Grounds</th>
<th className="py-2.5 px-space-md">Lodged Date</th>
<th className="py-2.5 px-space-md">Tribunal Status</th>
<th className="py-2.5 px-space-md text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-sm text-body-sm">
{/* Case Row 1 (Active/Selected) */}
<tr className="bg-surface-container-low/60 hover:bg-surface-container-low transition-colors border-l-4 border-l-primary">
<td className="py-3 px-space-md whitespace-nowrap">
<span className="font-mono text-primary font-bold">#GRV-2026-0891</span>
<span className="block font-label-sm text-[10px] text-on-surface-variant">Class-II MII</span>
</td>
<td className="py-3 px-space-md">
<div className="font-semibold text-on-surface">Zenith Diagnostic Importers</div>
<span className="font-label-sm text-[11px] text-error">Disqualified for Non-Local Status</span>
</td>
<td className="py-3 px-space-md">
<p className="line-clamp-2 max-w-xs text-on-surface-variant">
                      Alleged misclassification of Class-II local supplier threshold under DPIIT PPO 2017 order.
                    </p>
</td>
<td className="py-3 px-space-md whitespace-nowrap text-on-surface-variant font-tabular-num">
                    12-Oct-2026<br/><span className="text-[11px]">11:30 IST</span>
</td>
<td className="py-3 px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-label-sm font-semibold bg-amber-50 text-amber-800 border border-amber-200">
<span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                      Hearing Concluded
                    </span>
</td>
<td className="py-3 px-space-md text-right whitespace-nowrap">
<button className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors inline-flex items-center gap-1" type="button">
<span>Active</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</td>
</tr>
{/* Case Row 2 */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-md whitespace-nowrap">
<span className="font-mono text-on-surface font-semibold">#GRV-2026-0884</span>
<span className="block font-label-sm text-[10px] text-on-surface-variant">Tech Specs</span>
</td>
<td className="py-3 px-space-md">
<div className="font-semibold text-on-surface">MedTech Solutions Corp</div>
<span className="font-label-sm text-[11px] text-on-surface-variant">GSTIN: 07AABCM9102K1Z9</span>
</td>
<td className="py-3 px-space-md">
<p className="line-clamp-2 max-w-xs text-on-surface-variant">
                      Challenge against rejection of Technical Envelope C (Optical sensor tolerances).
                    </p>
</td>
<td className="py-3 px-space-md whitespace-nowrap text-on-surface-variant font-tabular-num">
                    09-Oct-2026<br/><span className="text-[11px]">16:45 IST</span>
</td>
<td className="py-3 px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-label-sm font-semibold bg-blue-50 text-blue-800 border border-blue-200">
<span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                      Evidence Under Review
                    </span>
</td>
<td className="py-3 px-space-md text-right whitespace-nowrap">
<button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors" type="button">
                      Open Docket
                    </button>
</td>
</tr>
{/* Case Row 3 */}
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-md whitespace-nowrap">
<span className="font-mono text-error font-semibold">#DEB-2026-0042</span>
<span className="block font-label-sm text-[10px] text-error">Rule 144(xi)</span>
</td>
<td className="py-3 px-space-md">
<div className="font-semibold text-on-surface">Sino-Global Biosensors Ltd</div>
<span className="font-label-sm text-[11px] text-error font-medium">Land-Border Land Restriction</span>
</td>
<td className="py-3 px-space-md">
<p className="line-clamp-2 max-w-xs text-on-surface-variant">
                      Notice of 2-Year Debarment for failure of mandatory beneficial ownership disclosure.
                    </p>
</td>
<td className="py-3 px-space-md whitespace-nowrap text-on-surface-variant font-tabular-num">
                    04-Oct-2026<br/><span className="text-[11px]">09:15 IST</span>
</td>
<td className="py-3 px-space-md whitespace-nowrap">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-label-sm font-semibold bg-red-50 text-red-800 border border-red-200">
<span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
                      Interim Stay Denied
                    </span>
</td>
<td className="py-3 px-space-md text-right whitespace-nowrap">
<button className="px-2.5 py-1 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors" type="button">
                      Open Docket
                    </button>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/* 2. Detailed Case Evidence & Cross-Examination Workspace (Selected Case) */}
<section className="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-sm p-space-md flex flex-col gap-space-md">
<div className="flex flex-wrap items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-high">
<div className="flex items-center gap-space-sm">
<span className="p-2 rounded-lg bg-surface-container text-primary material-symbols-outlined text-[20px]">find_in_page</span>
<div>
<div className="flex items-center gap-2">
<h2 className="font-title-sm text-title-sm text-on-surface font-bold">Case Evidence &amp; Scrutiny Workspace</h2>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface font-mono text-[11px] font-semibold">#GRV-2026-0891</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Appellant: Zenith Diagnostic Importers vs. Technical Evaluation Committee (MoHFW)</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Bench Assessor:</span>
<span className="font-label-sm text-label-sm font-semibold text-primary">Justice (Retd.) Alok Verma</span>
</div>
</div>
{/* Grievance Summary vs TEC Rebuttal Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/* Left: Appellant Representation */}
<div className="p-space-md rounded-lg bg-surface-container-low border border-surface-container-high flex flex-col gap-space-sm">
<div className="flex items-center justify-between border-b border-surface-container-high pb-2">
<span className="font-label-md text-label-md font-semibold text-on-surface flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[18px]">description</span>
                  Appellant&apos;s Ground of Appeal
                </span>
<span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">Annexure-A1</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                &quot;The appellant claims their statutory Class-II Local Value Addition Certificate (stamped by an independent Chartered Accountant firm M/s Aggarwal &amp; Co.) asserting 21.8% domestic value addition was summarily rejected by the TEC during Envelope B evaluation without providing a 48-hour cure period.&quot;
              </p>
<div className="mt-auto pt-2 flex items-center justify-between text-[11px] text-on-surface-variant">
<span>Chartered Accountant UDIN: 26084912AAAA99</span>
<span className="text-primary font-semibold hover:underline cursor-pointer">View CA Certificate.pdf</span>
</div>
</div>
{/* Right: AI & TEC Rebuttal Audit */}
<div className="p-space-md rounded-lg bg-red-50/50 border border-red-100 flex flex-col gap-space-sm">
<div className="flex items-center justify-between border-b border-red-200/60 pb-2">
<span className="font-label-md text-label-md font-semibold text-red-950 flex items-center gap-1.5">
<span className="material-symbols-outlined text-error text-[18px]">rule_folder</span>
                  TEC Rebuttal &amp; Portal OCR Findings
                </span>
<span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-red-100 text-error">Audit Verdict: Discrepancy</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                Automated ICEGATE Bill of Entry reconciliation &amp; AI OCR audit established that critical biosensor core components are pre-assembled imports from OEM Shenzhen BioTech. Actual domestic assembly and packaging value addition totals only <strong className="text-error font-bold">17.4%</strong>, which fails the statutory 20.0% Class-II threshold under DPIIT PPO 2017.
              </p>
<div className="mt-auto pt-2 flex items-center justify-between text-[11px] text-on-surface-variant">
<span className="text-error font-mono font-medium">ICEGATE BoE: #8491028-DEL</span>
<span className="text-error font-semibold hover:underline cursor-pointer">View Cross-Verification.log</span>
</div>
</div>
</div>
{/* Chronological Hearing Timeline */}
<div className="mt-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold block mb-space-sm">Statutory Hearing Timeline (CVC 15-Day SLA Tracker)</span>
<div className="relative border-l-2 border-surface-container-high ml-3 space-y-4 py-1">
{/* Item 1 */}
<div className="relative pl-6">
<span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary border-2 border-surface-container-lowest"></span>
<div className="flex flex-wrap items-baseline gap-2">
<span className="font-label-md text-label-md font-semibold text-on-surface">Day 1: Formal Representation Lodged</span>
<span className="font-mono text-[11px] text-on-surface-variant">12-Oct-2026 11:30 IST</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Lodged electronically via GeM Grievance module; system acknowledgment auto-dispatched to MoHFW Vigilance Cell.</p>
</div>
{/* Item 2 */}
<div className="relative pl-6">
<span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary border-2 border-surface-container-lowest"></span>
<div className="flex flex-wrap items-baseline gap-2">
<span className="font-label-md text-label-md font-semibold text-on-surface">Day 3: Legal Cell Scrutiny Completed</span>
<span className="font-mono text-[11px] text-on-surface-variant">14-Oct-2026 15:20 IST</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Determined maintainable under CVC Office Order 05/01/22. Case marked for mandatory Independent External Monitor intervention.</p>
</div>
{/* Item 3 */}
<div className="relative pl-6">
<span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-secondary border-2 border-surface-container-lowest"></span>
<div className="flex flex-wrap items-baseline gap-2">
<span className="font-label-md text-label-md font-semibold text-on-surface">Day 5: MoHFW Written Submission Logged</span>
<span className="font-mono text-[11px] text-on-surface-variant">16-Oct-2026 18:00 IST</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Procuring Entity filed formal counter-affidavit attaching Customs Bill of Entry and technical evaluation committee scorecards.</p>
</div>
{/* Item 4 */}
<div className="relative pl-6">
<span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-2 border-surface-container-lowest"></span>
<div className="flex flex-wrap items-baseline gap-2">
<span className="font-label-md text-label-md font-semibold text-primary">Day 8: Virtual Tribunal Hearing Held (Today)</span>
<span className="font-mono text-[11px] text-on-surface-variant">19-Oct-2026 11:00 IST</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface mt-0.5 font-medium">Conducted over NIC Vidyo platform. Both appellant advocates and technical officers examined under oath. Stenographic verbatim transcript generated.</p>
</div>
</div>
</div>
</section>
{/* 3. Central Blacklisting & Debarment Register */}
<section className="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-sm overflow-hidden">
<div className="px-space-md py-space-sm bg-surface-container-low border-b border-surface-container-high flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-error text-[20px]">gavel</span>
<h2 className="font-title-sm text-title-sm text-on-surface font-semibold">Central Blacklisting &amp; Debarment Register (GFR 151 &amp; 175)</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Real-Time GeM Core Sync: <span className="text-secondary font-semibold">ACTIVE</span></span>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low border-b border-surface-container-high font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
<th className="py-2.5 px-space-md">Sanctioned Entity</th>
<th className="py-2.5 px-space-md">Issuing Ministry</th>
<th className="py-2.5 px-space-md">Statutory Ground</th>
<th className="py-2.5 px-space-md">Debarment Period</th>
<th className="py-2.5 px-space-md">GeM Status</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-sm text-body-sm">
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-md font-semibold text-on-surface">
                    Apex Global Infotech Pvt Ltd
                    <span className="block font-label-sm text-[11px] text-on-surface-variant font-mono">CIN: U72200DL2018PTC329101</span>
</td>
<td className="py-3 px-space-md text-on-surface-variant">Department of Expenditure (DoE)</td>
<td className="py-3 px-space-md text-error font-medium">GFR 151(i) Collusive Bidding</td>
<td className="py-3 px-space-md text-on-surface-variant font-tabular-num">
                    01-Jan-2025 to 31-Dec-2027<br/><span className="text-[11px] text-on-surface-variant">(3 Years Central)</span>
</td>
<td className="py-3 px-space-md">
<span className="px-2 py-0.5 rounded text-label-sm font-semibold bg-red-100 text-error">BLOCKED</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-md font-semibold text-on-surface">
                    Falcon Defense Avionics Corp
                    <span className="block font-label-sm text-[11px] text-on-surface-variant font-mono">PAN: AAACF2910L</span>
</td>
<td className="py-3 px-space-md text-on-surface-variant">Ministry of Defence (MoD)</td>
<td className="py-3 px-space-md text-error font-medium">Rule 144(xi) Security Clearance Lapsed</td>
<td className="py-3 px-space-md text-on-surface-variant font-tabular-num">
                    14-May-2025 to 13-May-2027<br/><span className="text-[11px] text-on-surface-variant">(2 Years)</span>
</td>
<td className="py-3 px-space-md">
<span className="px-2 py-0.5 rounded text-label-sm font-semibold bg-red-100 text-error">BLOCKED</span>
</td>
</tr>
<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3 px-space-md font-semibold text-on-surface">
                    Euro-Indo Medical Surgicals
                    <span className="block font-label-sm text-[11px] text-on-surface-variant font-mono">GSTIN: 27AAACE4819M1ZR</span>
</td>
<td className="py-3 px-space-md text-on-surface-variant">Ministry of Health (MoHFW)</td>
<td className="py-3 px-space-md text-error font-medium">Integrity Pact Breach / Forgery</td>
<td className="py-3 px-space-md text-on-surface-variant font-tabular-num">
                    22-Aug-2025 to 21-Aug-2026<br/><span className="text-[11px] text-on-surface-variant">(1 Year)</span>
</td>
<td className="py-3 px-space-md">
<span className="px-2 py-0.5 rounded text-label-sm font-semibold bg-red-100 text-error">BLOCKED</span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
</div>
{/* Right Column (35% width: 4/12 on large screens) */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/* 1. Independent External Monitor (IEM) Bench Composition */}
<section className="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-sm p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between border-b border-surface-container-high pb-2">
<h2 className="font-title-sm text-title-sm text-on-surface font-semibold flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[20px]">badge</span>
              IEM Bench Composition
            </h2>
<span className="font-label-sm text-[10px] bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded font-bold uppercase">Quorum Formed</span>
</div>
{/* Presiding IEM */}
<div className="p-space-sm rounded-lg bg-surface-container-low border border-surface-container-high flex items-start gap-space-sm">
<span className="p-2 rounded bg-surface-container-lowest text-primary material-symbols-outlined text-[24px]">balance</span>
<div className="min-w-0 flex-1">
<span className="font-label-sm text-[11px] uppercase font-bold text-primary tracking-wider">Presiding IEM</span>
<h3 className="font-label-md text-label-md font-bold text-on-surface truncate">Justice (Retd.) Alok Verma</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant">Former Judge, Delhi High Court</p>
<div className="mt-1 flex items-center gap-1 font-mono text-[10px] text-secondary">
<span className="material-symbols-outlined text-[12px]">security</span>
<span>FIPS 140-3 Class-3 DSC Active</span>
</div>
</div>
</div>
{/* Technical IEM */}
<div className="p-space-sm rounded-lg bg-surface-container-low border border-surface-container-high flex items-start gap-space-sm">
<span className="p-2 rounded bg-surface-container-lowest text-on-surface-variant material-symbols-outlined text-[24px]">engineering</span>
<div className="min-w-0 flex-1">
<span className="font-label-sm text-[11px] uppercase font-bold text-on-surface-variant tracking-wider">Technical IEM</span>
<h3 className="font-label-md text-label-md font-bold text-on-surface truncate">Shri R. Venkatesh</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant">Ex-Director General (Supplies &amp; Disposals)</p>
<div className="mt-1 flex items-center gap-1 font-mono text-[10px] text-secondary">
<span className="material-symbols-outlined text-[12px]">security</span>
<span>GovCA Certified Key Registered</span>
</div>
</div>
</div>
{/* Vigilance Liaison */}
<div className="p-space-sm rounded-lg bg-surface-container-low border border-surface-container-high flex items-start gap-space-sm">
<span className="p-2 rounded bg-surface-container-lowest text-on-surface-variant material-symbols-outlined text-[24px]">supervisor_account</span>
<div className="min-w-0 flex-1">
<span className="font-label-sm text-[11px] uppercase font-bold text-on-surface-variant tracking-wider">Vigilance Liaison / Registrar</span>
<h3 className="font-label-md text-label-md font-bold text-on-surface truncate">Amitav Banerjee, IA&amp;AS</h3>
<p className="font-body-sm text-[12px] text-on-surface-variant">Designated Independent Monitor Secretary</p>
</div>
</div>
</section>
{/* 2. Statutory Adjudication & Order Console */}
<section className="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-sm p-space-md flex flex-col gap-space-md">
<div className="flex items-center justify-between border-b border-surface-container-high pb-2">
<h2 className="font-title-sm text-title-sm text-on-surface font-semibold flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[20px]">assignment_turned_in</span>
              Statutory Adjudication Console
            </h2>
<span className="font-label-sm text-[10px] bg-surface-container px-2 py-0.5 rounded font-mono font-bold">CVC FORM-IV</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Record binding bench verdict for <strong className="text-on-surface">Docket #GRV-2026-0891</strong>. This finding will automatically update the GeM procurement engine and seal the tender evaluation.
          </p>
{/* Radio Options for Official Verdict */}
<div className="space-y-2">
<label className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer border border-transparent has-[:checked]:border-primary has-[:checked]:bg-surface-container-low/80">
<input defaultChecked className="mt-1 accent-primary" name="iem_verdict" type="radio" value="dismiss"/>
<div className="flex flex-col text-left">
<span className="font-label-md text-label-md font-bold text-on-surface">1. Dismiss Representation — Uphold TEC Disqualification</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">No malice, bias, or procedural lapse established. Domestic value addition confirmed &lt;20%.</span>
</div>
</label>
<label className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer border border-transparent has-[:checked]:border-primary has-[:checked]:bg-surface-container-low/80">
<input className="mt-1 accent-primary" name="iem_verdict" type="radio" value="remand"/>
<div className="flex flex-col text-left">
<span className="font-label-md text-label-md font-bold text-on-surface">2. Remand to TEC for Technical Re-Evaluation</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Time-bound 48-hour cure period to reconcile CA calculations.</span>
</div>
</label>
<label className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer border border-transparent has-[:checked]:border-primary has-[:checked]:bg-surface-container-low/80">
<input className="mt-1 accent-primary" name="iem_verdict" type="radio" value="debar"/>
<div className="flex flex-col text-left">
<span className="font-label-md text-label-md font-bold text-error">3. Confirm Central Debarment for 2 Years</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Invoking GFR 151(i) for intentional fraudulent local content declaration.</span>
</div>
</label>
<label className="flex items-start gap-2.5 p-2 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer border border-transparent has-[:checked]:border-primary has-[:checked]:bg-surface-container-low/80">
<input className="mt-1 accent-primary" name="iem_verdict" type="radio" value="cci_reference"/>
<div className="flex flex-col text-left">
<span className="font-label-md text-label-md font-bold text-on-surface">4. Recommend Reference to CCI</span>
<span className="font-body-sm text-[12px] text-on-surface-variant">Cartelization and bid rigging suspected under Section 3 of Competition Act.</span>
</div>
</label>
</div>
{/* Pre-populated Reasoned Order Summary Textbox */}
<div className="space-y-1">
<label className="font-label-sm text-label-sm font-semibold text-on-surface flex items-center justify-between">
<span>Reasoned Order Summary &amp; Statutory Dictum:</span>
<span className="text-primary text-[11px] cursor-pointer hover:underline">Insert Legal Precedent</span>
</label>
<textarea className="w-full p-2.5 rounded-md border border-outline-variant bg-surface-container-lowest text-on-surface font-body-sm text-[13px] leading-snug focus:outline-none focus:border-primary" rows={4} defaultValue="Upon comprehensive examination of the appellant's CA certificate vis-à-vis Customs Bill of Entry No. 8491028-DEL, the Tribunal finds no procedural irregularity in TEC's disqualification order. The domestic content is verified at 17.4%, failing the statutory 20% mandate under DPIIT Notification P-45021/2/2017-PP(BE-II). Representation stands dismissed with no cost."></textarea>
</div>
{/* Attestation Button */}
<button className="w-full py-2.5 px-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold flex items-center justify-center gap-2 shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">fingerprint</span>
<span>Sign &amp; Promulgate Final Tribunal Order (DSC)</span>
</button>
</section>
{/* 3. CVC Real-Time Escalation & Notification Hub */}
<section className="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-sm p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between border-b border-surface-container-high pb-2">
<h2 className="font-title-sm text-title-sm text-on-surface font-semibold flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[20px]">hub</span>
              CVC &amp; Inter-Agency Escalation Node
            </h2>
<span className="flex items-center gap-1 font-label-sm text-[11px] text-secondary font-semibold">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Encrypted Link
            </span>
</div>
<div className="space-y-2 text-body-sm text-[13px]">
<div className="p-2 rounded bg-surface-container-low flex items-center justify-between">
<div>
<span className="font-semibold text-on-surface">MeitY MeghRaj Node:</span>
<span className="block text-on-surface-variant font-mono text-[11px]">sec-gw-cvc.nic.in:443</span>
</div>
<span className="text-secondary font-bold text-label-sm">200 OK</span>
</div>
<div className="p-2 rounded bg-surface-container-low flex items-center justify-between">
<div>
<span className="font-semibold text-on-surface">Chief Vigilance Officer (CVO):</span>
<span className="block text-on-surface-variant font-mono text-[11px]">MoHFW Procurement Vigilance</span>
</div>
<span className="text-primary font-semibold text-label-sm">Synced (11:42)</span>
</div>
<div className="p-2 rounded bg-surface-container-low flex items-center justify-between">
<div>
<span className="font-semibold text-on-surface">GeM Disciplinary Board:</span>
<span className="block text-on-surface-variant font-mono text-[11px]">Automated Debarment Webhook</span>
</div>
<span className="text-secondary font-semibold text-label-sm">Armed</span>
</div>
</div>
</section>
</div>
</div>
{/* Institutional Footer Ribbon */}
<footer className="mt-space-md pt-space-md border-t border-surface-container-high text-on-surface-variant flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm">
<div className="flex flex-wrap items-center gap-x-3 gap-y-1">
<span className="font-semibold text-on-surface">Statutory Citations:</span>
<span>CVC Office Order No. 05/01/22</span>
<span>•</span>
<span>GFR 2017 Rules 151, 173(iv), 175</span>
<span>•</span>
<span>Section 8, Central Vigilance Commission Act 2003</span>
</div>
<div className="flex items-center gap-2 font-mono text-[11px]">
<span className="material-symbols-outlined text-[14px] text-secondary">verified</span>
<span>SHA-256 Digest: #IEM-TRIBUNAL-2026-9041B-VALID</span>
</div>
</footer>
</div>
</div></main>
    </div>
  );
}
