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
<div className="w-full px-layout-gutter py-space-lg max-w-[1720px] mx-auto space-y-space-lg">
{/* 1. Breadcrumb & Navigation Context */}
<nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
<Link className="hover:text-primary transition-colors" href="#">Home</Link>
<span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
<Link className="hover:text-primary transition-colors" href="#">Tenders</Link>
<span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
<span className="font-tabular-num text-tabular-num text-on-surface-variant">GEM/2026/B/489201</span>
<span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
<span className="text-on-surface font-semibold">Bidder Compliance Evaluation</span>
</nav>
{/* 2. Tender Context Header */}
<div className="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-lg">
<div className="space-y-space-xs max-w-4xl">
<div className="flex flex-wrap items-center gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
            Tender: GEM/2026/B/489201 <span className="text-on-surface-variant font-normal">— Supply of Industrial Equipment &amp; High-Precision Machinery</span>
</h1>
</div>
<div className="flex flex-wrap items-center gap-x-space-md gap-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-amber-50 text-amber-800">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
            Status: Under Evaluation
          </span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-outline">category</span>
            Procurement Category: Goods &amp; Machinery
          </span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-outline">schedule</span>
            Due: Sept 15, 2026 (17:00 IST)
          </span>
<span className="text-outline-variant">•</span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-outline">account_balance</span>
            Ministry of Heavy Industries &amp; Public Enterprises
          </span>
</div>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto self-end xl:self-center">
<button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-space-md py-2 h-10 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
          Export to PDF
        </button>
<button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-space-lg py-2 h-10 rounded-xl bg-primary-container text-on-primary hover:bg-primary transition-all font-label-md text-label-md shadow-sm active:scale-[0.98]" type="button">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
          Finalize Evaluation
        </button>
</div>
</div>
{/* 3. Summary Metrics (4-Column Bento Row) */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/* Card 1: Total Bidders */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Bidders</span>
<div className="font-display-lg text-display-lg text-on-surface font-tabular-num">24</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">group</span>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-body-sm font-body-sm">
<span className="text-secondary font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
            +4 from previous round
          </span>
<span className="text-outline font-label-sm text-label-sm">Round 2 Open</span>
</div>
</div>
{/* Card 2: Fully Verified */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Fully Verified</span>
<div className="font-display-lg text-display-lg text-secondary font-tabular-num">18</div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-container/40 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">verified</span>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant flex items-center gap-1 font-tabular-num">
<span className="font-semibold text-secondary">75.0%</span> compliance rate
          </span>
<span className="text-on-surface-variant font-tabular-num font-label-sm text-label-sm">Avg Score: 91.4</span>
</div>
</div>
{/* Card 3: Flagged Issues */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Flagged Issues</span>
<div className="font-display-lg text-display-lg text-amber-600 font-tabular-num">4</div>
</div>
<div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
<span className="material-symbols-outlined text-[22px]">warning</span>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-body-sm font-body-sm">
<span className="text-amber-700 font-medium flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
            Requires PO manual review
          </span>
<span className="text-outline font-label-sm text-label-sm">GST/Udyam alert</span>
</div>
</div>
{/* Card 4: Pending Verification */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="space-y-1">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Pending Verification</span>
<div className="font-display-lg text-display-lg text-outline font-tabular-num">2</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-outline">
<span className="material-symbols-outlined text-[22px] animate-spin">sync</span>
</div>
</div>
<div className="mt-space-sm pt-space-xs flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">hourglass_top</span>
            EPFO/API queue active
          </span>
<span className="text-outline font-label-sm text-label-sm">Est: ~3m</span>
</div>
</div>
</div>
{/* 4. Quick Filter, Real-time Indicator & Controls */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
<div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
{/* Search & Filter Chips */}
<div className="flex flex-wrap items-center gap-space-sm flex-1">
<div className="relative min-w-[280px] flex-1 max-w-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-outline">search</span>
<input className="w-full h-10 pl-10 pr-3 rounded-xl bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none transition-all" id="bidderSearchInput" placeholder="Filter bidder name, GSTIN or PAN..." type="text"/>
</div>
<div className="flex items-center gap-1.5 overflow-x-auto py-1">
<button className="filter-chip active px-3 py-1.5 rounded-full font-label-md text-label-md bg-primary-container text-on-primary shadow-xs transition-colors" data-filter="all">
              All Bidders (24)
            </button>
<button className="filter-chip px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors" data-filter="verified">
              Fully Verified (18)
            </button>
<button className="filter-chip px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors" data-filter="flagged">
              Flagged (4)
            </button>
<button className="filter-chip px-3 py-1.5 rounded-full font-label-md text-label-md bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors" data-filter="pending">
              Pending (2)
            </button>
</div>
</div>
{/* Real-time Live API Status Indicator */}
<div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-body-sm font-body-sm self-start lg:self-auto">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="font-label-sm text-label-sm font-medium">
            Connected to GSTN, Udyam, Income Tax &amp; EPFO APIs • Real-time Sync Active
          </span>
</div>
</div>
{/* 5. Main Content Area (Data Table) */}
<div className="overflow-x-auto rounded-xl">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-outline font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3 px-space-md font-semibold" scope="col">Bidder Name &amp; Identifiers</th>
<th className="py-3 px-space-md font-semibold min-w-[180px]" scope="col">Compliance Score</th>
<th className="py-3 px-space-md font-semibold" scope="col">Risk Level</th>
<th className="py-3 px-space-md font-semibold" scope="col">Status</th>
<th className="py-3 px-space-md font-semibold min-w-[280px]" scope="col">Discrepancy / Portal Check Summary</th>
<th className="py-3 px-space-md font-semibold text-right" scope="col">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container font-body-sm text-body-sm text-on-surface">
{/* Row 1: ABC Industries Ltd. */}
<tr className="hover:bg-surface-container-low/60 transition-colors group">
<td className="py-3.5 px-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-title-sm text-title-sm text-on-surface font-semibold">ABC Industries Ltd.</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">L-1 Bidder</span>
</div>
<div className="flex items-center gap-1.5 mt-0.5 text-on-surface-variant font-tabular-num text-body-sm">
<span>GSTIN: 27AAACA1234A1Z5</span>
<span className="text-outline-variant">•</span>
<span>GeM ID: GEM-SLR-9821</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-tabular-num">
<span className="font-semibold text-emerald-600">92 / 100</span>
<span className="font-label-sm text-label-sm text-emerald-700">Excellent</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{"width": "92%"}}></div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-emerald-50 text-emerald-700 font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Low Risk
                </span>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
                  Verified
                </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-emerald-600 text-[18px] shrink-0 mt-0.5">verified_user</span>
<span className="text-on-surface-variant">All 5 checks passed (Udyam, GSTN active, PAN matched, No Blacklist, ITR valid)</span>
</div>
</td>
<td className="py-3.5 px-space-md text-right">
<button className="inline-flex items-center justify-center px-3 py-1.5 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors" type="button">
                  View Details
                </button>
</td>
</tr>
{/* Row 2: XYZ Pvt Ltd */}
<tr className="hover:bg-surface-container-low/60 transition-colors group">
<td className="py-3.5 px-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-title-sm text-title-sm text-on-surface font-semibold">XYZ Pvt Ltd</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">L-2 Bidder</span>
</div>
<div className="flex items-center gap-1.5 mt-0.5 text-on-surface-variant font-tabular-num text-body-sm">
<span>GSTIN: 07AABCS5678B1Z2</span>
<span className="text-outline-variant">•</span>
<span>GeM ID: GEM-SLR-4412</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-tabular-num">
<span className="font-semibold text-amber-600">74 / 100</span>
<span className="font-label-sm text-label-sm text-amber-700">Audit Alert</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{"width": "74%"}}></div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-amber-50 text-amber-700 font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Medium Risk
                </span>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 text-amber-700 font-medium">
<span className="material-symbols-outlined text-[18px]">warning</span>
                  Issues Found
                </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-amber-600 text-[18px] shrink-0 mt-0.5">report_problem</span>
<span className="text-on-surface-variant">Udyam enterprise category mismatch (Declared: Micro, Portal: Medium)</span>
</div>
</td>
<td className="py-3.5 px-space-md text-right">
<button className="inline-flex items-center justify-center px-3 py-1.5 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors" type="button">
                  View Details
                </button>
</td>
</tr>
{/* Row 3: PQR Traders */}
<tr className="hover:bg-surface-container-low/60 transition-colors group">
<td className="py-3.5 px-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-title-sm text-title-sm text-on-surface font-semibold">PQR Traders</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-error-container/40 text-error font-medium">Flagged</span>
</div>
<div className="flex items-center gap-1.5 mt-0.5 text-on-surface-variant font-tabular-num text-body-sm">
<span>GSTIN: 19AABCP9012C1Z9</span>
<span className="text-outline-variant">•</span>
<span>GeM ID: GEM-SLR-1120</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-tabular-num">
<span className="font-semibold text-error">38 / 100</span>
<span className="font-label-sm text-label-sm text-error">Non-Compliant</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-error h-full rounded-full transition-all duration-500" style={{"width": "38%"}}></div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-rose-50 text-rose-700 font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                  Critical Risk
                </span>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 text-error font-medium">
<span className="material-symbols-outlined text-[18px]">cancel</span>
                  Failed Checks
                </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-error text-[18px] shrink-0 mt-0.5">error</span>
<span className="text-on-surface-variant">GSTIN cancelled / inactive on portal; PAN mismatch detected</span>
</div>
</td>
<td className="py-3.5 px-space-md text-right">
<button className="inline-flex items-center justify-center px-3 py-1.5 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors" type="button">
                  View Details
                </button>
</td>
</tr>
{/* Row 4: DEF Corp Solutions */}
<tr className="hover:bg-surface-container-low/60 transition-colors group">
<td className="py-3.5 px-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-title-sm text-title-sm text-on-surface font-semibold">DEF Corp Solutions</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">Queued</span>
</div>
<div className="flex items-center gap-1.5 mt-0.5 text-on-surface-variant font-tabular-num text-body-sm">
<span>GSTIN: 33AABCD3456D1Z3</span>
<span className="text-outline-variant">•</span>
<span>GeM ID: GEM-SLR-6651</span>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-tabular-num">
<span className="font-semibold text-outline">-- / 100</span>
<span className="font-label-sm text-label-sm text-outline">Calculating</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-outline-variant h-full rounded-full animate-pulse" style={{"width": "15%"}}></div>
</div>
</div>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                  Pending
                </span>
</td>
<td className="py-3.5 px-space-md">
<span className="inline-flex items-center gap-1 text-on-surface-variant font-medium">
<span className="material-symbols-outlined text-[18px] animate-spin">progress_activity</span>
                  In Progress
                </span>
</td>
<td className="py-3.5 px-space-md">
<div className="flex items-start gap-1.5">
<span className="material-symbols-outlined text-outline text-[18px] shrink-0 mt-0.5">hourglass_empty</span>
<span className="text-on-surface-variant">EPFO API verification pending queue response (Est. 2 mins)</span>
</div>
</td>
<td className="py-3.5 px-space-md text-right">
<button className="inline-flex items-center justify-center px-3 py-1.5 rounded-xl bg-surface-container-low text-outline opacity-60 cursor-not-allowed font-label-md text-label-md" disabled={true} type="button">
                  View Details
                </button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination Footer */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
<div className="font-tabular-num">
          Showing <span className="font-semibold text-on-surface">1 to 4</span> of <span className="font-semibold text-on-surface">24</span> bidders
        </div>
<div className="flex items-center gap-1">
<button className="p-1 rounded-lg text-outline-variant hover:bg-surface-container cursor-not-allowed transition-colors" disabled={true} type="button">
<span className="material-symbols-outlined text-[20px]">first_page</span>
</button>
<button className="p-1 rounded-lg text-outline-variant hover:bg-surface-container cursor-not-allowed transition-colors" disabled={true} type="button">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<div className="flex items-center gap-1 px-1 font-label-md text-label-md">
<button className="w-8 h-8 rounded-lg bg-primary-container text-on-primary font-semibold flex items-center justify-center" type="button">1</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container flex items-center justify-center transition-colors" type="button">2</button>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container flex items-center justify-center transition-colors" type="button">3</button>
<span className="px-1 text-outline">...</span>
<button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container flex items-center justify-center transition-colors" type="button">6</button>
</div>
<button className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
<button className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">last_page</span>
</button>
</div>
</div>
</div>
{/* Institutional Context & Verification Note */}
<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm text-body-sm font-body-sm text-on-surface-variant">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">policy</span>
<span>
          Statutory Verification Engine compliant with <strong>General Financial Rules (GFR) 2017</strong> &amp; <strong>Public Procurement (Preference to Make in India) Order 2017</strong>.
        </span>
</div>
<div className="flex items-center gap-space-md font-label-sm text-label-sm text-outline">
<span>Audit Ref: <span className="font-tabular-num">AUD-2026-99281-EVAL</span></span>
<span>Cryptographic Hash: <span className="font-tabular-num font-mono text-[10px]">SHA256:7f4c8...19b</span></span>
</div>
</div>
</div>

</div></main>
    </div>
  );
}
