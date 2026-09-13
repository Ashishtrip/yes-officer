"use client";

import Image from "next/image";
import Link from "next/link";

export default function ClarificationsPage() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-surface-container-high"><div className="h-14 w-full px-layout-gutter flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md min-w-[310px] shrink-0"><img alt="Government of India Emblazoned Yes Officer Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XF1PZsUoMowWpDMDKHX4d0Uh2TzyN0ieKoXRAg9eWo0KUOJEYX9ay-0FikqKi6SCy-s2qdnXKKSVBN1U3cGfFxFZF0ukpbfXY2DXXHGRuTayL8HUzuRTRsVXDXLBNUvCkLJ45-5sgvvJPij2xXTdFwemSujw5XjPH5QUdV8NmgQmyup3OjnHPFKO06ETugegA2e_yc3BJ49NnxvbQ_j3UdtcbgijRrC1sPHCXBUxBBvQe1hRNlh5IrYBas"/><div className="flex flex-col"><div className="flex items-center gap-space-xs"><span className="font-title-sm text-title-sm text-primary leading-none">Yes Officer</span><span className="font-label-sm text-[10px] px-1 py-0.5 rounded bg-surface-container-high text-on-surface-variant uppercase font-semibold leading-none">Govt of India</span></div><span className="font-label-sm text-label-sm text-on-surface-variant leading-tight mt-0.5">Ministry of Finance • GeM Compliance</span></div></div><nav className="hidden xl:flex items-center h-full gap-space-md" data-active-classes="text-primary font-title-sm border-b-2 border-primary"><a className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="tenders-bids" href="#">Tenders &amp; Bids</a><a className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="vigilance-analytics" href="#">Vigilance &amp; Analytics</a><a className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="compliance-rules" href="#">Compliance Rules</a><a className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="portal-connectors" href="#">Portal Connectors</a><a className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="audit-logs" href="#">Audit Logs</a><a className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="user-access-admin" href="#">User &amp; Access / Admin</a></nav><div className="flex items-center gap-space-md ml-auto shrink-0"><div className="hidden 2xl:flex items-center bg-surface-container-low rounded-xl px-space-md py-1 border border-outline-variant focus-within:border-primary focus-within:bg-surface-container-lowest transition-colors w-64"><span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-space-xs">search</span><input className="bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder-on-surface-variant w-full" placeholder="Search tenders, GSTIN... (Ctrl+K)" type="text"/></div><button aria-label="Notifications" className="relative p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span></button><button aria-label="Help and Support" className="p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">help</span></button><div className="h-6 w-px bg-surface-container-high mx-space-2xs"></div><div className="flex items-center gap-space-sm pl-space-xs cursor-pointer group"><img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0gElgbgal4gd4SIMy3OwrKEcZe588flOOdKLPMe4KQ8SoeCQsdkrar6ypZ2bugDnd-W1CEEwh6fZA0UeQvpJYK4xZQmhS5NS9VGrL2hCUUlpfTD9A4ONwukYNR9GdwE_uDTQ7SBkE4ZFxXZMguxQxl-QG5ChJzn0KbJqTwPV0WnU1JFroUwLdTwGYDpAy41oufwfBXZlsuDZK3oN7EQKVs24q22rliyszAmfiQaCV5xMLweN3IuNKsQ"/><div className="hidden lg:flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">Rajesh Kumar, IAS</span><span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Senior Procurement Officer</span></div><span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface text-[18px]">expand_more</span></div></div></div></header><main className="w-full pt-14 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/* Breadcrumb & Regulatory Context Bar */}
<section className="w-full bg-surface-container-low px-layout-gutter py-space-sm border-b border-outline-variant/30 flex flex-wrap items-center justify-between gap-y-space-xs text-body-sm text-on-surface-variant">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">dashboard</span> Portal Desk
      </span>
<span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
<span className="font-label-md text-label-md text-on-surface-variant">Tenders &amp; Bids</span>
<span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
<span className="font-tabular-num text-tabular-num text-primary font-semibold">GEM/2026/B/489201</span>
<span className="material-symbols-outlined text-[14px] text-outline">chevron_right</span>
<span className="font-label-md text-label-md text-on-surface font-bold">Bidder Clarifications &amp; Statutory Representations Hub</span>
</div>
<div className="flex items-center gap-space-md text-label-sm">
<span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-secondary"></span> GeM Direct Integration (v4.2 Live)
      </span>
<span className="font-tabular-num text-on-surface-variant">Ledger Hash: 0x8F92...B39A</span>
</div>
</section>
{/* Active Tender & Statutory Rule Banner */}
<section className="w-full bg-surface-container-lowest px-layout-gutter py-space-md border-b border-outline-variant/40">
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
<div className="space-y-1">
<div className="flex flex-wrap items-center gap-space-sm">
<span className="font-label-sm uppercase tracking-wider px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-bold">MoHFW Division</span>
<span className="font-label-sm uppercase tracking-wider px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-semibold">ICB Medical Procurement</span>
<span className="font-tabular-num text-label-sm text-outline">Bid Validity: 64 Days Left</span>
</div>
<div className="flex items-baseline gap-space-sm flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-primary">GEM/2026/B/489201</h1>
<span className="font-body-md text-body-md text-on-surface-variant font-medium">Supply, Installation &amp; Commissioning of High-Precision Biomedical Diagnostic Imaging Suites</span>
</div>
<div className="flex items-center gap-space-xs text-label-md text-tertiary-container bg-tertiary-fixed/30 px-space-sm py-1 rounded w-fit">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
<span className="font-semibold">Statutory Protocol: GFR 2017 Rule 173(iv) &amp; GeM GTC Clause 12:</span>
<span>Time-bound Clarification Protocol (Strict 48h – 72h Non-Extendable Cure Window)</span>
</div>
</div>
{/* Action Buttons */}
<div className="flex flex-wrap items-center gap-space-xs shrink-0">
<button className="h-9 px-space-md rounded bg-primary hover:bg-primary-container text-on-primary font-label-md flex items-center gap-space-xs shadow-sm transition-all"  type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>+ Issue Statutory Clarification Notice</span>
</button>
<button className="h-9 px-space-md rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md flex items-center gap-space-xs transition-all"  type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">sync</span>
<span>Sync GeM Inbound Queue</span>
</button>
<button className="h-9 px-space-md rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md flex items-center gap-space-xs transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
<span>Export Audit Ledger (PDF)</span>
</button>
</div>
</div>
</section>
{/* Executive Clarification Metric Cards */}
<section className="w-full px-layout-gutter py-space-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-space-sm">
{/* Metric 1 */}
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Notices Issued</span>
<span className="material-symbols-outlined text-[20px] text-primary">gavel</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-display-lg text-display-lg text-on-surface font-bold">14</span>
<span className="font-label-sm text-on-surface-variant">Notices</span>
</div>
<div className="mt-2 text-label-sm text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">check_circle</span> Active evaluation stage
      </div>
</div>
{/* Metric 2 */}
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Turnaround Rate</span>
<span className="material-symbols-outlined text-[20px] text-secondary">assignment_turned_in</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-display-lg text-display-lg text-on-surface font-bold">78.6%</span>
<span className="font-tabular-num text-label-sm text-secondary font-semibold">11 / 14</span>
</div>
<div className="mt-2 text-label-sm text-outline flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span> 11 Responses Logged
      </div>
</div>
{/* Metric 3 (Urgent countdown) */}
<div className="bg-error-container/40 p-space-md rounded shadow-sm flex flex-col justify-between border-l-4 border-error">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-error uppercase tracking-wider font-bold">Pending Bidder Action</span>
<span className="material-symbols-outlined text-[20px] text-error animate-pulse">timer</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-display-lg text-display-lg text-error font-bold">2</span>
<span className="font-label-sm text-error font-semibold">Active (&lt;24h Left)</span>
</div>
<div className="mt-2 text-label-sm text-on-error-container font-medium flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-error">warning</span> Auto-disqualification triggered at 0h
      </div>
</div>
{/* Metric 4 */}
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Under TEC Scrutiny</span>
<span className="material-symbols-outlined text-[20px] text-tertiary-container">policy</span>
</div>
<div className="mt-2 flex items-baseline gap-2">
<span className="font-display-lg text-display-lg text-on-surface font-bold">1</span>
<span className="font-label-sm text-tertiary-container font-semibold">Dossier Pending</span>
</div>
<div className="mt-2 text-label-sm text-outline flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-primary">account_circle</span> Assigned: Dr. Sunita Meena
      </div>
</div>
{/* Metric 5 */}
<div className="bg-surface-container-lowest p-space-md rounded shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Rule Impact Summary</span>
<span className="material-symbols-outlined text-[20px] text-outline">fact_check</span>
</div>
<div className="mt-2 flex items-center gap-space-sm text-body-sm">
<span className="px-2 py-0.5 rounded bg-secondary/10 text-secondary font-semibold">6 Cleared</span>
<span className="px-2 py-0.5 rounded bg-error/10 text-error font-semibold">2 Rejected</span>
</div>
<div className="mt-2 text-label-sm text-outline">All decisions locked to DSC key</div>
</div>
</section>
{/* Filter Ribbon & Global Search */}
<section className="w-full px-layout-gutter pt-space-xs pb-space-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
{/* Lifecycle Tabs */}
<div className="flex items-center gap-space-xs overflow-x-auto pb-1 max-w-full">
<button className="px-3 py-1.5 rounded text-label-md font-semibold bg-primary text-on-primary whitespace-nowrap shadow-sm">
        All Notices (14)
      </button>
<button className="px-3 py-1.5 rounded text-label-md font-semibold bg-surface-container hover:bg-surface-container-high text-on-surface whitespace-nowrap transition-colors flex items-center gap-1.5">
        Awaiting Bidder Reply
        <span className="px-1.5 py-0.2 rounded-full bg-error text-on-error text-[10px] leading-tight">2</span>
</button>
<button className="px-3 py-1.5 rounded text-label-md font-semibold bg-surface-container hover:bg-surface-container-high text-on-surface whitespace-nowrap transition-colors flex items-center gap-1.5">
        Received &amp; Under Scrutiny
        <span className="px-1.5 py-0.2 rounded-full bg-tertiary-container text-on-primary text-[10px] leading-tight">1</span>
</button>
<button className="px-3 py-1.5 rounded text-label-md font-semibold bg-surface-container hover:bg-surface-container-high text-on-surface whitespace-nowrap transition-colors">
        Resolved &amp; Cleared (9)
      </button>
<button className="px-3 py-1.5 rounded text-label-md font-semibold bg-surface-container hover:bg-surface-container-high text-on-surface whitespace-nowrap transition-colors">
        Overdue / Default Disqualified (2)
      </button>
</div>
{/* Quick Search Ledger */}
<div className="flex items-center gap-space-xs w-full md:w-80">
<div className="flex items-center bg-surface-container-lowest rounded px-space-sm py-1.5 w-full border border-outline-variant focus-within:border-primary">
<span className="material-symbols-outlined text-outline text-[18px] mr-1">search</span>
<input className="w-full bg-transparent border-none outline-none font-body-sm text-on-surface placeholder:text-outline" placeholder="Search Bidder, GSTIN, #CLN ID..." type="text"/>
</div>
<button className="p-2 bg-surface-container rounded hover:bg-surface-container-high text-on-surface-variant" title="Apply Parameter Filters">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
</button>
</div>
</section>
{/* Main Workbench: 60/40 Split Screen Layout */}
<div className="w-full px-layout-gutter pb-space-xl grid grid-cols-1 xl:grid-cols-12 gap-space-md items-start">
{/* Left 7 Columns: Clarifications Ledger Table */}
<section className="xl:col-span-7 bg-surface-container-lowest rounded shadow-sm overflow-hidden flex flex-col">
<div className="px-space-md py-space-sm bg-surface-container-low flex items-center justify-between border-b border-outline-variant/30">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">table_chart</span>
<h2 className="font-title-sm text-title-sm text-on-surface">Statutory Clarifications Ledger</h2>
</div>
<span className="font-label-sm text-on-surface-variant">Showing 5 of 14 records • Sorted by Urgency</span>
</div>
{/* Ledger Table */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-outline text-[11px] font-label-sm uppercase tracking-wider border-b border-outline-variant/30">
<th className="py-2.5 px-3">Notice ID &amp; Target Bidder</th>
<th className="py-2.5 px-3">Clarification Category</th>
<th className="py-2.5 px-3">SLA / Response Window</th>
<th className="py-2.5 px-3">AI Vector Diff</th>
<th className="py-2.5 px-3">Verdict Status</th>
<th className="py-2.5 px-3 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/20 font-body-sm text-on-surface">
{/* Active Selected Row (#CLN-4892-03) */}
<tr className="bg-primary-fixed/20 transition-colors cursor-pointer" >
<td className="py-3 px-3 align-top">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
<span className="font-tabular-num font-bold text-primary">#CLN-4892-03</span>
</div>
<div className="font-label-md font-semibold text-on-surface mt-0.5">ABC Industries Ltd.</div>
<div className="font-tabular-num text-[11px] text-outline">GSTIN: 07AABCU9603R1ZM</div>
</td>
<td className="py-3 px-3 align-top max-w-[200px]">
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm block truncate" title="Non-Fatal Deviation: Discrepancy in ISO 13485 Calibration Expiry Date">Non-Fatal Deviation</span>
<p className="text-body-sm text-on-surface-variant text-[12px] mt-1 line-clamp-2">Discrepancy in ISO 13485 Calibration Expiry Date vs. NABL Registry</p>
</td>
<td className="py-3 px-3 align-top">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm font-semibold flex items-center gap-1 w-fit">
<span className="material-symbols-outlined text-[14px]">timer</span> 34h 12m left
                </span>
<span className="font-tabular-num text-[11px] text-outline block mt-1">Reply Recv: Today, 09:14 IST</span>
</td>
<td className="py-3 px-3 align-top">
<div className="flex items-center gap-1 text-[12px] text-secondary font-medium">
<span className="material-symbols-outlined text-[16px]">verified</span> 99.4% Match
                </div>
<span className="text-[11px] text-outline block">No tampering detected</span>
</td>
<td className="py-3 px-3 align-top">
<span className="px-2 py-0.5 rounded text-[11px] font-label-sm font-semibold bg-tertiary-fixed text-on-tertiary-fixed flex items-center gap-1 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Under AI Scrutiny
                </span>
<span className="text-[10px] text-outline block mt-1">Assigned: Rajesh Kumar</span>
</td>
<td className="py-3 px-3 align-top text-right">
<button className="px-2 py-1 rounded bg-primary text-on-primary text-label-sm font-medium hover:bg-primary-container inline-flex items-center gap-0.5">
<span>Inspect</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
</td>
</tr>
{/* Row 2 (#CLN-4892-02) */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer" >
<td className="py-3 px-3 align-top">
<span className="font-tabular-num font-bold text-on-surface">#CLN-4892-02</span>
<div className="font-label-md font-semibold text-on-surface mt-0.5">Bharat Imaging Devices Pvt Ltd</div>
<div className="font-tabular-num text-[11px] text-outline">GSTIN: 27AABCB8912P1ZN</div>
</td>
<td className="py-3 px-3 align-top max-w-[200px]">
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm block truncate">Financial Verification</span>
<p className="text-body-sm text-on-surface-variant text-[12px] mt-1 line-clamp-2">CA Net Worth Schedule Missing UDIN &amp; Physical Stamp</p>
</td>
<td className="py-3 px-3 align-top">
<span className="font-label-sm text-secondary flex items-center gap-1 font-medium">
<span className="material-symbols-outlined text-[14px]">check</span> Resolved
                </span>
<span className="font-tabular-num text-[11px] text-outline block mt-1">Cleared on 14-Oct-2026</span>
</td>
<td className="py-3 px-3 align-top">
<div className="flex items-center gap-1 text-[12px] text-secondary font-medium">
<span className="material-symbols-outlined text-[16px]">verified</span> 100% UDIN
                </div>
<span className="text-[11px] text-outline block">ICAI Database Validated</span>
</td>
<td className="py-3 px-3 align-top">
<span className="px-2 py-0.5 rounded text-[11px] font-label-sm font-semibold bg-secondary/10 text-secondary flex items-center gap-1 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Deviation Cured
                </span>
<span className="text-[10px] text-outline block mt-1">By TEC Chair</span>
</td>
<td className="py-3 px-3 align-top text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm font-medium">
                  Ledger View
                </button>
</td>
</tr>
{/* Row 3 (#CLN-4892-01) */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer" >
<td className="py-3 px-3 align-top">
<span className="font-tabular-num font-bold text-on-surface">#CLN-4892-01</span>
<div className="font-label-md font-semibold text-on-surface mt-0.5">Siddhartha MedTech Systems</div>
<div className="font-tabular-num text-[11px] text-outline">GSTIN: 06AAACS5432K1ZP</div>
</td>
<td className="py-3 px-3 align-top max-w-[200px]">
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm block truncate">OEM Authorization</span>
<p className="text-body-sm text-on-surface-variant text-[12px] mt-1 line-clamp-2">Manufacturer Authorization Format Clause 4 Ambiguity</p>
</td>
<td className="py-3 px-3 align-top">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm font-semibold flex items-center gap-1 w-fit">
<span className="material-symbols-outlined text-[14px]">timer</span> 11h 04m left
                </span>
<span className="font-tabular-num text-[11px] text-outline block mt-1">Awaiting Upload</span>
</td>
<td className="py-3 px-3 align-top">
<span className="text-[12px] text-outline">Pending Bidder</span>
</td>
<td className="py-3 px-3 align-top">
<span className="px-2 py-0.5 rounded text-[11px] font-label-sm font-semibold bg-surface-container-high text-on-surface-variant flex items-center gap-1 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span> Awaiting Reply
                </span>
<span className="text-[10px] text-outline block mt-1">Auto-reminder sent</span>
</td>
<td className="py-3 px-3 align-top text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm font-medium">
                  Send Nudge
                </button>
</td>
</tr>
{/* Row 4 (#CLN-4892-04) */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="py-3 px-3 align-top">
<span className="font-tabular-num font-bold text-on-surface">#CLN-4892-04</span>
<div className="font-label-md font-semibold text-on-surface mt-0.5">Zenith Diagnostic Importers</div>
<div className="font-tabular-num text-[11px] text-outline">GSTIN: 33AAACZ9841N1Z0</div>
</td>
<td className="py-3 px-3 align-top max-w-[200px]">
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm block truncate">Make in India (MII)</span>
<p className="text-body-sm text-on-surface-variant text-[12px] mt-1 line-clamp-2">Local Content Calculation Discrepancy (Class I vs Class II)</p>
</td>
<td className="py-3 px-3 align-top">
<span className="font-label-sm text-error font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">cancel</span> Expired (0h)
                </span>
<span className="font-tabular-num text-[11px] text-outline block mt-1">No Response within 72h</span>
</td>
<td className="py-3 px-3 align-top">
<span className="text-[12px] text-error font-medium">No Document</span>
</td>
<td className="py-3 px-3 align-top">
<span className="px-2 py-0.5 rounded text-[11px] font-label-sm font-semibold bg-error/10 text-error flex items-center gap-1 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span> Disqualified
                </span>
<span className="text-[10px] text-outline block mt-1">Rule 173 Default</span>
</td>
<td className="py-3 px-3 align-top text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm font-medium">
                  Summary
                </button>
</td>
</tr>
{/* Row 5 (#CLN-4892-05) */}
<tr className="hover:bg-surface-container-low transition-colors cursor-pointer">
<td className="py-3 px-3 align-top">
<span className="font-tabular-num font-bold text-on-surface">#CLN-4892-05</span>
<div className="font-label-md font-semibold text-on-surface mt-0.5">Nova BioCare Corp</div>
<div className="font-tabular-num text-[11px] text-outline">GSTIN: 19AAACN8820M1ZG</div>
</td>
<td className="py-3 px-3 align-top max-w-[200px]">
<span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm block truncate">Past Experience</span>
<p className="text-body-sm text-on-surface-variant text-[12px] mt-1 line-clamp-2">Client End-User Satisfaction Certificate Signature Validation</p>
</td>
<td className="py-3 px-3 align-top">
<span className="font-label-sm text-secondary flex items-center gap-1 font-medium">
<span className="material-symbols-outlined text-[14px]">check</span> Resolved
                </span>
<span className="font-tabular-num text-[11px] text-outline block mt-1">Cleared on 13-Oct-2026</span>
</td>
<td className="py-3 px-3 align-top">
<div className="flex items-center gap-1 text-[12px] text-secondary font-medium">
<span className="material-symbols-outlined text-[16px]">verified</span> Validated
                </div>
<span className="text-[11px] text-outline block">e-Sign Verified</span>
</td>
<td className="py-3 px-3 align-top">
<span className="px-2 py-0.5 rounded text-[11px] font-label-sm font-semibold bg-secondary/10 text-secondary flex items-center gap-1 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Deviation Cured
                </span>
<span className="text-[10px] text-outline block mt-1">By Rajesh Kumar</span>
</td>
<td className="py-3 px-3 align-top text-right">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm font-medium">
                  Ledger View
                </button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Footer Action & Notice Status */}
<div className="px-space-md py-space-sm bg-surface-container-low border-t border-outline-variant/30 flex items-center justify-between">
<div className="flex items-center gap-2 text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px] text-primary">security</span>
<span>All notices signed with Class-3 Government Organization DSC tokens</span>
</div>
<div className="flex items-center gap-1">
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm" disabled>Previous</button>
<span className="px-2 text-label-sm text-outline">1 of 3</span>
<button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm">Next</button>
</div>
</div>
</section>
{/* Right 5 Columns: Side-by-Side Document & Explanation Diff Panel */}
<aside className="xl:col-span-5 bg-surface-container-lowest rounded shadow-sm overflow-hidden flex flex-col">
{/* Panel Header */}
<div className="px-space-md py-space-sm bg-primary text-on-primary flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]">policy</span>
<div>
<h3 className="font-title-sm text-title-sm leading-tight">Clarification Case Inspection</h3>
<span className="font-label-sm text-primary-fixed block">Case Reference: #CLN-4892-03 • ABC Industries Ltd.</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-tertiary text-on-tertiary font-label-sm">Under Review</span>
</div>
<div className="p-space-md space-y-space-md overflow-y-auto max-h-[820px]">
{/* 1. Original Statutory Issue Flagged */}
<div className="bg-surface-container-low p-space-sm rounded">
<div className="flex items-center justify-between text-label-sm text-outline mb-1">
<span className="font-semibold text-primary flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">smart_toy</span> AI LayoutLMv3 Extraction Issue
            </span>
<span>Clause 14.3 (Technical Fit)</span>
</div>
<p className="font-body-sm text-on-surface leading-relaxed">
            “Bidder submission Doc #12 (ISO 13485 Calibration) exhibited low OCR clarity (Score 62%). Expiry date stamp blurred; unable to cross-validate cryptographic hash against National Accreditation Board for Testing and Calibration Laboratories (NABL) online portal.”
          </p>
</div>
{/* 2. Bidder Official Explanation (Verbatim signed statement) */}
<div className="bg-surface-container-low p-space-sm rounded">
<div className="flex items-center justify-between text-label-sm mb-1">
<span className="font-semibold text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">feed</span> Verbatim Bidder Explanation
            </span>
<span className="font-tabular-num text-outline">Logged 14-Oct 09:14 IST</span>
</div>
<blockquote className="text-[13px] italic text-on-surface-variant bg-surface-container-lowest p-2 rounded border-l-2 border-primary">
            “We respectfully submit high-resolution 600 DPI vector re-scan of ISO 13485:2016 certificate (Valid through 28-Feb-2028). Directly verifiable at nabl-india.org/cert/MED-99201. Accompanied by notarized affidavit on Rs. 100 non-judicial stamp paper attested by our Managing Director.”
          </blockquote>
<div className="mt-2 flex items-center justify-between text-[11px] text-outline">
<span>Signed: Vikramaditya Sen (Director)</span>
<span className="text-secondary font-medium">Class-3 DSC Verified ✔</span>
</div>
</div>
{/* 3. Side-by-Side Document Diff View */}
<div>
<div className="flex items-center justify-between mb-2">
<h4 className="font-label-md text-label-md text-on-surface uppercase tracking-wider flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">difference</span> Visual Verification Comparison
            </h4>
<span className="text-label-sm text-secondary font-semibold">Zero Semantic Drift Detected</span>
</div>
<div className="grid grid-cols-2 gap-space-xs">
{/* Original Submission */}
<div className="bg-surface-container-low p-2 rounded">
<div className="flex items-center justify-between text-[11px] font-label-sm text-outline mb-1">
<span>Original Filing (Doc #12)</span>
<span className="text-error font-bold">OCR: 62%</span>
</div>
<div className="relative w-full h-36 bg-surface-container-highest rounded overflow-hidden flex flex-col justify-end p-2 border border-error/30">
<div className="absolute inset-0 bg-cover bg-center filter blur-[1px] opacity-70" data-alt="A blurred high-contrast scan of a bureaucratic medical ISO compliance certificate with faint official government seals and indistinct printed typography in navy ink." style={{backgroundImage: "url('https"}}></div>
<div className="relative z-10 bg-surface/90 p-1 rounded text-[10px] text-error font-mono">
                  Blur detected in calibration box
                </div>
</div>
<div className="mt-1 text-[11px] text-outline">NABL Portal Validation: <span className="text-error font-medium">Failed / Unclear</span></div>
</div>
{/* Revised Submission */}
<div className="bg-secondary/5 p-2 rounded">
<div className="flex items-center justify-between text-[11px] font-label-sm text-outline mb-1">
<span>Revised Filing (Doc #12-v2)</span>
<span className="text-secondary font-bold">OCR: 99.4%</span>
</div>
<div className="relative w-full h-36 bg-surface-container-highest rounded overflow-hidden flex flex-col justify-end p-2 border border-secondary/40">
<div className="absolute inset-0 bg-cover bg-center" data-alt="A crisp, sharp high-resolution document scan of a biomedical calibration certification with clear gold and blue emblem, prominent valid dates, and a distinct QR code." style={{backgroundImage: "url('https"}}></div>
<div className="relative z-10 bg-surface/90 p-1 rounded text-[10px] text-secondary font-mono flex items-center gap-1">
<span className="material-symbols-outlined text-[12px]">qr_code_2</span> Validated QR Match
                </div>
</div>
<div className="mt-1 text-[11px] text-outline">NABL Portal Validation: <span className="text-secondary font-medium">Authenticated</span></div>
</div>
</div>
</div>
{/* 4. Procurement Officer (PO) Decision Controls */}
<div className="bg-surface-container p-space-sm rounded space-y-space-sm">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">rate_review</span> Mandatory PO Verdict Protocol
            </label>
<span className="text-[11px] text-outline">Rule 173(iv) Binding</span>
</div>
{/* Radio Verdict Options */}
<div className="space-y-1.5">
<label className="flex items-start gap-2 p-2 rounded bg-surface-container-lowest cursor-pointer hover:bg-surface-container-low transition-colors">
<input defaultChecked className="mt-0.5 text-primary focus:ring-primary" name="po_verdict" type="radio" value="accept"/>
<div className="text-body-sm">
<span className="font-semibold text-on-surface">Accept Explanation &amp; Cure Technical Deviation</span>
<p className="text-[12px] text-on-surface-variant">Clarification is purely informational; does not alter substantive bid price or product specifications.</p>
</div>
</label>
<label className="flex items-start gap-2 p-2 rounded bg-surface-container-lowest cursor-pointer hover:bg-surface-container-low transition-colors">
<input className="mt-0.5 text-primary focus:ring-primary" name="po_verdict" type="radio" value="supplementary"/>
<div className="text-body-sm">
<span className="font-semibold text-on-surface">Request Supplementary Evidence (Final 24h Window)</span>
<p className="text-[12px] text-on-surface-variant">Curing document partially fulfills requirement; requires OEM factory-direct attestation.</p>
</div>
</label>
<label className="flex items-start gap-2 p-2 rounded bg-surface-container-lowest cursor-pointer hover:bg-surface-container-low transition-colors">
<input className="mt-0.5 text-error focus:ring-primary" name="po_verdict" type="radio" value="reject"/>
<div className="text-body-sm">
<span className="font-semibold text-error">Reject &amp; Escalate to Disqualification Queue</span>
<p className="text-[12px] text-on-surface-variant">Material deviation not curable under GFR 173 without unfair competitive advantage.</p>
</div>
</label>
</div>
{/* Mandatory Statutory Justification Textbox */}
<div>
<label className="block font-label-md text-label-md text-on-surface mb-1" htmlFor="justification-text">
              Mandatory Statutory Justification Note (Signed to Audit Trail):
            </label>
<textarea className="w-full p-2 bg-surface-container-lowest rounded border border-outline-variant font-body-sm text-on-surface focus:outline-none focus:border-primary placeholder:text-outline text-[13px]" id="justification-text" placeholder="State statutory reasoning referencing GFR Rule 173(iv)..." rows={3}>Verified revised ISO 13485:2016 calibration document against NABL registry live API. Document verified authentic without modification of tender technical baseline. Deviation categorized as non-substantive clerical cure. Recommended for technical clearance.</textarea>
</div>
{/* Execution Button */}
<button className="w-full h-10 px-4 rounded bg-primary hover:bg-primary-container text-on-primary font-label-md flex items-center justify-center gap-2 shadow-sm transition-all"  type="button">
<span className="material-symbols-outlined text-[18px]">fingerprint</span>
<span>Digitally Sign &amp; Append to Audit Trail (Class-3 DSC)</span>
</button>
</div>
</div>
</aside>
</div>
{/* Legal Governance & Audit Ledger Footer */}
<footer className="w-full bg-surface-container-low border-t border-outline-variant/30 px-layout-gutter py-space-sm mt-auto">
<div className="flex flex-col md:flex-row items-center justify-between gap-space-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[20px] text-primary">verified_user</span>
<p className="text-[12px] leading-tight">
<strong className="text-on-surface">Legal Governance Notice:</strong> Under GFR Rule 173 and CVC Procurement Guidelines (Section 8.4), no clarification shall permit any material alteration of price, scope, or commercial conditions. All exchanges are recorded in the MeitY MeghRaj immutably signed ledger.
        </p>
</div>
<div className="flex items-center gap-space-md text-[11px] text-outline shrink-0">
<span>Session Token: DSC-IN-8890-RAJESH</span>
<span>•</span>
<span>GeM GTC v4.2 Compliance Guard</span>
</div>
</div>
</footer>
</div>
</main>
    </>
  );
}
