"use client";

import Image from "next/image";
import Link from "next/link";

export default function TendersManagement() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-surface-container-high"><div className="h-14 w-full px-layout-gutter flex items-center justify-between gap-space-lg"><div className="flex items-center gap-space-md min-w-[280px]"><img alt="Yes Officer Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XF1PZsUoMowWpDMDKHX4d0Uh2TzyN0ieKoXRAg9eWo0KUOJEYX9ay-0FikqKi6SCy-s2qdnXKKSVBN1U3cGfFxFZF0ukpbfXY2DXXHGRuTayL8HUzuRTRsVXDXLBNUvCkLJ45-5sgvvJPij2xXTdFwemSujw5XjPH5QUdV8NmgQmyup3OjnHPFKO06ETugegA2e_yc3BJ49NnxvbQ_j3UdtcbgijRrC1sPHCXBUxBBvQe1hRNlh5IrYBas"/><div className="flex flex-col"><span className="font-title-sm text-title-sm text-primary leading-none">Yes Officer</span><span className="font-label-sm text-label-sm text-on-surface-variant leading-tight mt-0.5">GeM Integrated Compliance Suite</span></div></div><nav className="hidden xl:flex items-center h-full gap-space-lg" data-active-classes="text-primary font-title-sm border-b-2 border-primary"><a className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="tenders-bids" href="#">Tenders &amp; Bids</a><a className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="compliance-rules" href="#">Compliance Rules</a><a className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="portal-connectors" href="#">Portal Connectors</a><a className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="audit-logs" href="#">Audit Logs</a></nav><div className="flex items-center gap-space-md ml-auto"><div className="hidden md:flex items-center bg-surface-container-low rounded-xl px-space-md py-1 border border-outline-variant focus-within:border-primary focus-within:bg-surface-container-lowest transition-colors w-72"><span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-space-xs">search</span><input className="bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder-on-surface-variant w-full" placeholder="Search tenders, GSTIN, PAN... (Ctrl+K)" type="text"/></div><button aria-label="Notifications" className="relative p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span></button><button aria-label="Help and Support" className="p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">help</span></button><div className="h-6 w-px bg-surface-container-high mx-space-2xs"></div><div className="flex items-center gap-space-sm pl-space-xs cursor-pointer group"><img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0gElgbgal4gd4SIMy3OwrKEcZe588flOOdKLPMe4KQ8SoeCQsdkrar6ypZ2bugDnd-W1CEEwh6fZA0UeQvpJYK4xZQmhS5NS9VGrL2hCUUlpfTD9A4ONwukYNR9GdwE_uDTQ7SBkE4ZFxXZMguxQxl-QG5ChJzn0KbJqTwPV0WnU1JFroUwLdTwGYDpAy41oufwfBXZlsuDZK3oN7EQKVs24q22rliyszAmfiQaCV5xMLweN3IuNKsQ"/><div className="hidden lg:flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">Rajesh Kumar, IAS</span><span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Senior Procurement Officer</span></div><span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface text-[18px]">expand_more</span></div></div></div></header><main className="w-full pt-14 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/* Top Command & Action Bar */}
<section className="w-full bg-surface-container-lowest px-layout-margin py-space-md shadow-sm">
<div className="max-w-[1680px] mx-auto flex flex-col gap-space-md">
{/* Breadcrumbs & Status Flag */}
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
<a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[16px]">home</span>
            Portal Desk
          </a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Tenders &amp; Bids Management</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="font-normal text-on-surface-variant">Active Procurement Fleet</span>
</div>
<div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-1 rounded-full">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">
            GeM Gateway API Sync: <strong className="text-on-surface font-semibold">12 mins ago</strong> · Production Pipeline FY 2026-27
          </span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant ml-1 cursor-pointer hover:text-primary" title="Refresh Live Feeds">sync</span>
</div>
</div>
{/* Main Section Header */}
<div className="flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
<div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight">Active Tenders &amp; Bidder Submissions Fleet</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Real-time multi-ministerial bid ingestion, automated statutory verification (GFR 144(xi), DPIIT PPO), and technical compliance gate controls.
          </p>
</div>
<div className="flex flex-wrap items-center gap-space-sm">
<button className="h-9 px-space-md bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-xl flex items-center gap-space-xs transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">download</span>
            Import GeM Tender (API/CSV)
          </button>
<button className="h-9 px-space-md bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md rounded-xl flex items-center gap-space-xs transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-tertiary-container">analytics</span>
            Consolidated Compliance Digest
          </button>
<button className="h-9 px-space-md bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md rounded-xl flex items-center gap-space-xs transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
            Create New Tender Evaluation
          </button>
</div>
</div>
</div>
</section>
{/* Main Workstation Layout */}
<div className="w-full px-layout-margin py-space-lg max-w-[1680px] mx-auto flex flex-col gap-space-lg">
{/* KPI Metric Cards Strip */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/* Card 1 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Active In-Flight Tenders</span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-display-lg text-display-lg text-primary font-tabular-num">14</span>
<span className="font-label-md text-label-md text-on-surface-variant">Tenders</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">folder_special</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-space-sm py-1 rounded">
<span className="font-medium text-on-surface">6 High-Value (&gt; ₹10 Cr)</span>
<span className="text-outline">8 Standard Tier</span>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Total Ingested Bids</span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-display-lg text-display-lg text-on-surface font-tabular-num">142</span>
<span className="font-label-md text-label-md text-on-surface-variant">Submissions</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-on-primary-fixed-variant">
<span className="material-symbols-outlined text-[22px]">inventory_2</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-space-sm py-1 rounded">
<span className="font-medium text-on-surface">28 Portfolios / Depts</span>
<span className="text-secondary font-semibold">98.4% OCR Parsed</span>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-error font-semibold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-error"></span>
              Statutory Risk Alerts
            </span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-display-lg text-display-lg text-error font-tabular-num">19</span>
<span className="font-label-md text-label-md text-on-surface-variant">Flagged Bids</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-error-container flex items-center justify-center text-on-error-container">
<span className="material-symbols-outlined text-[22px]">policy</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between font-label-sm text-label-sm bg-error-container/40 px-space-sm py-1 rounded text-on-error-container">
<span className="font-semibold">11 Land Border 144(xi)</span>
<span className="text-on-error-container font-medium">8 GSTN Cancelled</span>
</div>
</div>
{/* Card 4 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
              Audit Turnaround Velocity
            </span>
<div className="flex items-baseline gap-space-xs mt-1">
<span className="font-display-lg text-display-lg text-secondary font-tabular-num">1.8</span>
<span className="font-label-md text-label-md text-on-surface-variant">Days / Tender</span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-container/40 flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined text-[22px]">speed</span>
</div>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-space-sm py-1 rounded">
<span className="text-on-surface">Baseline: 14.0 days manual</span>
<span className="text-secondary font-semibold">87.1% Accelerated</span>
</div>
</div>
</div>
{/* Filter, Search & Status Navigation Section */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-md">
{/* Upper Filter Row: Search & Select Pickers */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-center">
{/* Search Input */}
<div className="lg:col-span-5 relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
<span className="material-symbols-outlined text-[20px]">search</span>
</div>
<input className="w-full pl-10 pr-space-md h-10 bg-surface-container-low font-body-sm text-body-sm text-on-surface rounded-xl placeholder-on-surface-variant focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Search by GeM Tender ID (e.g., GEM/2026/B/...), Ministry, Keyword, PAN, GSTIN..." type="text"/>
</div>
{/* Filter Dropdown 1: Category */}
<div className="lg:col-span-2">
<div className="relative">
<select className="w-full h-10 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-xl pl-3 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20">
<option>All Procurement Types</option>
<option>Supply of Goods</option>
<option>Non-Consulting Services</option>
<option>Major Works &amp; EPC</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[20px] text-on-surface-variant pointer-events-none">arrow_drop_down</span>
</div>
</div>
{/* Filter Dropdown 2: Ministry */}
<div className="lg:col-span-3">
<div className="relative">
<select className="w-full h-10 bg-surface-container-low text-on-surface font-body-sm text-body-sm rounded-xl pl-3 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-primary/20">
<option>All Ministries (Heavy Ind, Def, Rail, Health)</option>
<option>Ministry of Heavy Industries</option>
<option>Ministry of Defence</option>
<option>Ministry of Railways</option>
<option>Ministry of Health &amp; Family Welfare</option>
<option>Ministry of New &amp; Renewable Energy</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-2.5 text-[20px] text-on-surface-variant pointer-events-none">arrow_drop_down</span>
</div>
</div>
{/* Sort and View Mode Switcher */}
<div className="lg:col-span-2 flex items-center justify-end gap-space-xs">
<div className="relative flex-1">
<select className="w-full h-10 bg-surface-container-low text-on-surface font-label-md text-label-md rounded-xl pl-3 pr-7 appearance-none focus:outline-none">
<option>Due Date (Urgent)</option>
<option>Value (High to Low)</option>
<option>Submissions Count</option>
<option>Compliance Risk (High)</option>
</select>
<span className="material-symbols-outlined absolute right-1.5 top-2.5 text-[18px] text-on-surface-variant pointer-events-none">sort</span>
</div>
<div className="flex items-center bg-surface-container-low p-1 rounded-xl">
<button aria-label="Table View" className="p-1.5 rounded-lg bg-surface-container-lowest text-primary shadow-xs" type="button">
<span className="material-symbols-outlined text-[18px] block">table_rows</span>
</button>
<button aria-label="Matrix View" className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface" type="button">
<span className="material-symbols-outlined text-[18px] block">grid_view</span>
</button>
</div>
</div>
</div>
{/* Lower Filter Row: Workflow Status Tabs */}
<div className="flex items-center justify-between overflow-x-auto border-t border-surface-container pt-space-xs">
<div className="flex items-center gap-space-xs text-nowrap">
<button className="px-space-md py-2 font-label-md text-label-md rounded-xl bg-primary text-on-primary font-semibold flex items-center gap-space-xs shadow-sm" type="button">
<span>All Active Tenders</span>
<span className="bg-on-primary/20 text-on-primary px-1.5 py-0.5 rounded-full font-tabular-num text-[11px]">14</span>
</button>
<button className="px-space-md py-2 font-label-md text-label-md rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors flex items-center gap-space-xs" type="button">
<span>Under Technical Evaluation</span>
<span className="bg-surface-container px-1.5 py-0.5 rounded-full font-tabular-num text-[11px] text-on-surface font-semibold">6</span>
</button>
<button className="px-space-md py-2 font-label-md text-label-md rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors flex items-center gap-space-xs" type="button">
<span>Statutory Verification Queue</span>
<span className="bg-surface-container px-1.5 py-0.5 rounded-full font-tabular-num text-[11px] text-on-surface font-semibold">4</span>
</button>
<button className="px-space-md py-2 font-label-md text-label-md rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors flex items-center gap-space-xs" type="button">
<span>Financial Bid Opening Ready</span>
<span className="bg-secondary-container/40 text-on-secondary-container px-1.5 py-0.5 rounded-full font-tabular-num text-[11px] font-semibold">3</span>
</button>
<button className="px-space-md py-2 font-label-md text-label-md rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors flex items-center gap-space-xs" type="button">
<span>Finalized &amp; Dossier Sealed</span>
<span className="bg-surface-container px-1.5 py-0.5 rounded-full font-tabular-num text-[11px] text-on-surface font-semibold">1</span>
</button>
</div>
<div className="hidden md:flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span> Verified Valid
          </span>
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span> Discrepancy Flag
          </span>
<span className="flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-error"></span> Statutory Disqualification
          </span>
</div>
</div>
</div>
{/* Primary Enterprise Data Grid: GeM Tender Registry */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider select-none">
<th className="py-space-md px-space-md w-12 text-center" scope="col">
<input aria-label="Select all tenders" className="rounded text-primary focus:ring-0 focus:outline-none" type="checkbox"/>
</th>
<th className="py-space-md px-space-md min-w-[340px]" scope="col">Tender Reference &amp; Scope Details</th>
<th className="py-space-md px-space-md min-w-[200px]" scope="col">Procuring Authority</th>
<th className="py-space-md px-space-md min-w-[130px] text-right" scope="col">Est. Contract Value</th>
<th className="py-space-md px-space-md min-w-[190px]" scope="col">Timeline &amp; Deadlines</th>
<th className="py-space-md px-space-md min-w-[210px]" scope="col">Bidder Health &amp; Ingestion</th>
<th className="py-space-md px-space-md min-w-[180px]" scope="col">Compliance Verdict</th>
<th className="py-space-md px-space-md min-w-[170px] text-right pr-space-lg" scope="col">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
{/* ROW 1 (Anchor Tender: Supply of Industrial Equipment) */}
<tr className="hover:bg-surface-container-low/60 transition-colors group">
<td className="py-space-md px-space-md text-center align-top">
<input aria-label="Select GEM/2026/B/489201" defaultChecked className="mt-1 rounded text-primary focus:ring-0 focus:outline-none" type="checkbox"/>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-tabular-num font-semibold text-primary text-title-sm">GEM/2026/B/489201</span>
<span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-[10px] px-1.5 py-0.2 rounded uppercase font-bold tracking-wider">High-Value EPC</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[10px] px-1.5 py-0.2 rounded uppercase font-bold">PPO MII: Cl-I (50%)</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold group-hover:text-primary transition-colors line-clamp-1">
                    Supply of Industrial Equipment &amp; High-Precision Machinery
                  </span>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant mt-0.5">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">category</span> Goods (Heavy Engineering)
                    </span>
<span>·</span>
<span>Bid Mode: Two Packet (RA Enabled)</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm font-semibold text-on-surface">Ministry of Heavy Industries</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Dept of Public Enterprises</span>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-outline mt-1">
<span className="material-symbols-outlined text-[14px]">fingerprint</span> NIC/GEM-IND-8820
                  </div>
</div>
</td>
<td className="py-space-md px-space-md align-top text-right font-tabular-num">
<div className="flex flex-col items-end">
<span className="font-title-sm text-title-sm text-on-surface font-bold">₹48.50 Cr</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">EMD: ₹97.00 Lakh</span>
<span className="text-secondary font-label-sm text-[11px] font-medium">PBG: 5% Specified</span>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Due: <strong>15-Sept-2026</strong></span>
<span className="bg-error-container text-on-error-container font-semibold px-1.5 rounded text-[11px]">9 days left</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">
                    Pub: 28-Aug-2026 · 14:00 IST
                  </div>
<span className="font-label-sm text-[11px] text-tertiary-container font-medium flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[13px]">schedule</span> Tech Opening: 16-Sept
                  </span>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="font-semibold text-on-surface font-tabular-num">24 Bids Total</span>
<span className="font-tabular-num text-secondary font-semibold">18 Valid</span>
</div>
{/* Mini Segmented Progress Bar */}
<div className="w-full h-2 rounded-full bg-surface-container flex overflow-hidden">
<div className="h-full bg-secondary" style={{width: "75%"}} title="18 Verified"></div>
<div className="h-full bg-tertiary-container" style={{width: "17%"}} title="4 Flagged for Discrepancies"></div>
<div className="h-full bg-outline-variant" style={{width: "8%"}} title="2 Ingestion Pending"></div>
</div>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
<span className="text-error font-medium">4 Flagged GFR</span>
<span>·</span>
<span className="text-on-surface-variant">2 Processing</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm font-bold w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
                    Evaluation In Progress
                  </div>
<div className="flex items-center gap-2 mt-1">
<div className="flex-1 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{width: "75%"}}></div>
</div>
<span className="font-tabular-num font-label-sm text-label-sm text-on-surface-variant">75%</span>
</div>
<span className="font-label-sm text-[11px] text-on-surface-variant">18/24 Dossiers Reviewed</span>
</div>
</td>
<td className="py-space-md px-space-md align-top text-right pr-space-lg">
<div className="flex flex-col items-end gap-1.5">
<button className="h-8 px-3 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md flex items-center gap-1 transition-colors shadow-xs" type="button">
<span>Open Compliance Desk</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<button className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">description</span>
                    View GeM Packet
                  </button>
</div>
</td>
</tr>
{/* ROW 2 (Diagnostic Medical Analyzers) */}
<tr className="hover:bg-surface-container-low/60 transition-colors group">
<td className="py-space-md px-space-md text-center align-top">
<input aria-label="Select GEM/2026/B/510294" className="mt-1 rounded text-primary focus:ring-0 focus:outline-none" type="checkbox"/>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-tabular-num font-semibold text-primary text-title-sm">GEM/2026/B/510294</span>
<span className="bg-surface-container text-on-surface-variant font-label-sm text-[10px] px-1.5 py-0.2 rounded uppercase font-bold">Medical Device</span>
<span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[10px] px-1.5 py-0.2 rounded uppercase font-bold">ICMR Approved</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold group-hover:text-primary transition-colors line-clamp-1">
                    Procurement of High-Throughput Diagnostic Medical Analyzers
                  </span>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant mt-0.5">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">biotech</span> Specialized Healthcare Equipment
                    </span>
<span>·</span>
<span>Turnkey Installation</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm font-semibold text-on-surface">Ministry of Health &amp; Family Welfare</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Directorate General of Health Services</span>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-outline mt-1">
<span className="material-symbols-outlined text-[14px]">fingerprint</span> DGHS/MED-DIV-441
                  </div>
</div>
</td>
<td className="py-space-md px-space-md align-top text-right font-tabular-num">
<div className="flex flex-col items-end">
<span className="font-title-sm text-title-sm text-on-surface font-bold">₹18.20 Cr</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">EMD: ₹36.40 Lakh</span>
<span className="text-on-surface-variant font-label-sm text-[11px]">CMC: 5 Years Incl.</span>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Due: <strong>22-Sept-2026</strong></span>
<span className="bg-surface-container text-on-surface font-semibold px-1.5 rounded text-[11px]">16 days left</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">
                    Pub: 01-Sept-2026 · 10:30 IST
                  </div>
<span className="font-label-sm text-[11px] text-secondary font-medium flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[13px]">check_circle</span> Pre-bid Clarified
                  </span>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="font-semibold text-on-surface font-tabular-num">12 Bids Total</span>
<span className="font-tabular-num text-secondary font-semibold">11 Valid</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container flex overflow-hidden">
<div className="h-full bg-secondary" style={{width: "92%"}} title="11 Verified"></div>
<div className="h-full bg-error" style={{width: "8%"}} title="1 Debarment Alert"></div>
</div>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
<span className="text-error font-medium">1 Debarment Check</span>
<span>·</span>
<span className="text-secondary font-medium">0 Pending</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-bold w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    Technical Gate Review
                  </div>
<div className="flex items-center gap-2 mt-1">
<div className="flex-1 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-primary-container h-full rounded-full" style={{width: "92%"}}></div>
</div>
<span className="font-tabular-num font-label-sm text-label-sm text-on-surface-variant">92%</span>
</div>
<span className="font-label-sm text-[11px] text-on-surface-variant">11/12 Dossiers Cleared</span>
</div>
</td>
<td className="py-space-md px-space-md align-top text-right pr-space-lg">
<div className="flex flex-col items-end gap-1.5">
<button className="h-8 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1 transition-colors" type="button">
<span>Open Desk</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
<button className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">description</span>
                    View GeM Packet
                  </button>
</div>
</td>
</tr>
{/* ROW 3 (Railway Freight Logistics - Critical Attention) */}
<tr className="hover:bg-surface-container-low/60 transition-colors group bg-error-container/10">
<td className="py-space-md px-space-md text-center align-top">
<input aria-label="Select GEM/2026/B/478120" className="mt-1 rounded text-primary focus:ring-0 focus:outline-none" type="checkbox"/>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-tabular-num font-semibold text-primary text-title-sm">GEM/2026/B/478120</span>
<span className="bg-error text-on-error font-label-sm text-[10px] px-1.5 py-0.2 rounded uppercase font-bold tracking-wider">Critical Urgent</span>
<span className="bg-surface-container-highest text-on-surface font-label-sm text-[10px] px-1.5 py-0.2 rounded uppercase font-bold">Services AMC</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold group-hover:text-primary transition-colors line-clamp-1">
                    Annual Maintenance &amp; Network Modernization for Railway Freight Logistics
                  </span>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant mt-0.5">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">train</span> IT Infrastructure &amp; Telemetry
                    </span>
<span>·</span>
<span>SLA Penalty 0.5%/hr</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm font-semibold text-on-surface">Ministry of Railways</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">CRIS IT Directorate</span>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-outline mt-1">
<span className="material-symbols-outlined text-[14px]">fingerprint</span> CRIS/FOIS-ENG-902
                  </div>
</div>
</td>
<td className="py-space-md px-space-md align-top text-right font-tabular-num">
<div className="flex flex-col items-end">
<span className="font-title-sm text-title-sm text-on-surface font-bold">₹72.00 Cr</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">EMD: ₹1.44 Cr</span>
<span className="text-error font-label-sm text-[11px] font-medium">3-Yr Commitment</span>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-error font-semibold">Due: <strong>08-Sept-2026</strong></span>
<span className="bg-error text-on-error font-bold px-1.5 rounded text-[11px] animate-pulse">2 days left</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">
                    Pub: 15-Aug-2026 · 18:00 IST
                  </div>
<span className="font-label-sm text-[11px] text-error font-semibold flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[13px]">warning</span> Tech Cutoff Imminent
                  </span>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="font-semibold text-on-surface font-tabular-num">31 Bids Total</span>
<span className="font-tabular-num text-error font-semibold">7 Disqualified</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container flex overflow-hidden">
<div className="h-full bg-secondary" style={{width: "71%"}} title="22 Qualified"></div>
<div className="h-full bg-error" style={{width: "23%"}} title="7 Disqualified Land Border"></div>
<div className="h-full bg-outline-variant" style={{width: "6%"}} title="2 In Progress"></div>
</div>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm">
<span className="text-error font-bold">7 Breached GFR 144(xi)</span>
<span className="text-outline">·</span>
<span className="text-on-surface-variant font-medium">2 Pending</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-bold w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                    Urgent Disqualification Gate
                  </div>
<div className="flex items-center gap-2 mt-1">
<div className="flex-1 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-error h-full rounded-full" style={{width: "71%"}}></div>
</div>
<span className="font-tabular-num font-label-sm text-label-sm text-error font-bold">71%</span>
</div>
<span className="font-label-sm text-[11px] text-error font-semibold">Action Required from Rajesh Kumar</span>
</div>
</td>
<td className="py-space-md px-space-md align-top text-right pr-space-lg">
<div className="flex flex-col items-end gap-1.5">
<button className="h-8 px-3 rounded-lg bg-error hover:bg-on-error-container text-on-error font-label-md text-label-md flex items-center gap-1 transition-colors shadow-xs" type="button">
<span>Resolve Disqualifications</span>
<span className="material-symbols-outlined text-[16px]">priority_high</span>
</button>
<button className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">description</span>
                    View GeM Packet
                  </button>
</div>
</td>
</tr>
{/* ROW 4 (Solar PV Power Plant - Clean, Ready for Financial Opening) */}
<tr className="hover:bg-surface-container-low/60 transition-colors group">
<td className="py-space-md px-space-md text-center align-top">
<input aria-label="Select GEM/2026/B/529811" className="mt-1 rounded text-primary focus:ring-0 focus:outline-none" type="checkbox"/>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-tabular-num font-semibold text-primary text-title-sm">GEM/2026/B/529811</span>
<span className="bg-secondary-fixed text-on-secondary-fixed font-label-sm text-[10px] px-1.5 py-0.2 rounded uppercase font-bold">Mega Infrastructure</span>
<span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-[10px] px-1.5 py-0.2 rounded uppercase font-bold">ALMM Mandated</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold group-hover:text-primary transition-colors line-clamp-1">
                    Deployment of Solar PV Power Plant &amp; Microgrid Storage (50MW)
                  </span>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant mt-0.5">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">solar_power</span> Clean Energy &amp; Storage Works
                    </span>
<span>·</span>
<span>Govt Joint Venture</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm font-semibold text-on-surface">Ministry of New and Renewable Energy</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Solar Energy Corporation of India (SECI)</span>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-outline mt-1">
<span className="material-symbols-outlined text-[14px]">fingerprint</span> SECI/SOL-GRID/009
                  </div>
</div>
</td>
<td className="py-space-md px-space-md align-top text-right font-tabular-num">
<div className="flex flex-col items-end">
<span className="font-title-sm text-title-sm text-on-surface font-bold">₹135.00 Cr</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">EMD: ₹2.70 Cr (Bank BG)</span>
<span className="text-secondary font-label-sm text-[11px] font-medium">Class-1 MII &gt; 65%</span>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Due: <strong>30-Sept-2026</strong></span>
<span className="bg-surface-container text-on-surface font-semibold px-1.5 rounded text-[11px]">24 days left</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">
                    Pub: 04-Sept-2026 · 16:30 IST
                  </div>
<span className="font-label-sm text-[11px] text-secondary font-medium flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[13px]">lock_open</span> Commercial Bid Ready
                  </span>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="font-semibold text-on-surface font-tabular-num">19 Bids Ingested</span>
<span className="font-tabular-num text-secondary font-semibold">19 Cleared</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container flex overflow-hidden">
<div className="h-full bg-secondary" style={{width: "100%"}} title="100% Ingestion Complete"></div>
</div>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary">
<span className="material-symbols-outlined text-[14px]">done_all</span>
<span>100% OCR &amp; GSTN Validated</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Ready for Financial Opening
                  </div>
<div className="flex items-center gap-2 mt-1">
<div className="flex-1 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{width: "100%"}}></div>
</div>
<span className="font-tabular-num font-label-sm text-label-sm text-secondary font-bold">100%</span>
</div>
<span className="font-label-sm text-[11px] text-on-surface-variant">Committee DSC Signs Captured</span>
</div>
</td>
<td className="py-space-md px-space-md align-top text-right pr-space-lg">
<div className="flex flex-col items-end gap-1.5">
<button className="h-8 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1 transition-colors" type="button">
<span>Review Audit Summary</span>
<span className="material-symbols-outlined text-[16px]">verified</span>
</button>
<button className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">folder_zip</span>
                    View GeM Packet
                  </button>
</div>
</td>
</tr>
{/* ROW 5 (Armored Communication Cables - Finalized & Sealed) */}
<tr className="hover:bg-surface-container-low/60 transition-colors group">
<td className="py-space-md px-space-md text-center align-top">
<input aria-label="Select GEM/2026/B/399021" className="mt-1 rounded text-primary focus:ring-0 focus:outline-none" type="checkbox"/>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-tabular-num font-semibold text-primary text-title-sm">GEM/2026/B/399021</span>
<span className="bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px] px-1.5 py-0.2 rounded uppercase font-bold">Defence Goods</span>
<span className="bg-surface-container text-on-surface-variant font-label-sm text-[10px] px-1.5 py-0.2 rounded uppercase font-bold">Security Clearance</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold group-hover:text-primary transition-colors line-clamp-1">
                    Supply of High-Tensile Armored Communication Cables
                  </span>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant mt-0.5">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">shield</span> Strategic Border Telecommunications
                    </span>
<span>·</span>
<span>Q3 Delivery</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm font-semibold text-on-surface">Ministry of Defence</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Ordnance Procurement Wing</span>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-outline mt-1">
<span className="material-symbols-outlined text-[14px]">fingerprint</span> MOD/DDP/CAB-8819
                  </div>
</div>
</td>
<td className="py-space-md px-space-md align-top text-right font-tabular-num">
<div className="flex flex-col items-end">
<span className="font-title-sm text-title-sm text-on-surface font-bold">₹34.80 Cr</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">EMD: ₹69.60 Lakh</span>
<span className="text-secondary font-label-sm text-[11px] font-medium">L1 Award Awarded</span>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Finalized: <strong>02-Sept-2026</strong></span>
<span className="bg-surface-container-highest text-on-surface font-medium px-1.5 rounded text-[11px]">Concluded</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">
                    Pub: 10-Aug-2026 · 11:00 IST
                  </div>
<span className="font-label-sm text-[11px] text-on-surface-variant font-medium flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[13px]">lock</span> Evaluation Closed
                  </span>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="font-semibold text-on-surface font-tabular-num">16 Bids Total</span>
<span className="font-tabular-num text-on-surface-variant font-semibold">14 Qualified</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container flex overflow-hidden">
<div className="h-full bg-surface-tint" style={{width: "87.5%"}} title="14 Qualified"></div>
<div className="h-full bg-error" style={{width: "12.5%"}} title="2 Disqualified GFR 144(xi)"></div>
</div>
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
<span className="text-error font-medium">2 Rejected GFR 144(xi)</span>
<span>·</span>
<span className="text-on-surface-variant">NIC Stamped</span>
</div>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-bold w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                    Evaluation Sealed &amp; Signed
                  </div>
<div className="flex items-center gap-2 mt-1">
<div className="flex-1 bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-outline h-full rounded-full" style={{width: "100%"}}></div>
</div>
<span className="font-tabular-num font-label-sm text-label-sm text-outline font-bold">100%</span>
</div>
<span className="font-label-sm text-[11px] text-on-surface-variant">Cryptographic Hash Stamped</span>
</div>
</td>
<td className="py-space-md px-space-md align-top text-right pr-space-lg">
<div className="flex flex-col items-end gap-1.5">
<button className="h-8 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md flex items-center gap-1 transition-colors" type="button">
<span>Download Dossier</span>
<span className="material-symbols-outlined text-[16px]">file_download</span>
</button>
<button className="font-label-sm text-label-sm text-outline hover:text-on-surface flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">archive</span>
                    Archive Records
                  </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
{/* Pagination & Selection Footer */}
<div className="px-space-md py-space-sm bg-surface-container-low border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-md">
<span className="font-label-sm text-label-sm text-on-surface-variant">
            Showing <strong className="text-on-surface">1 - 5</strong> of <strong className="text-on-surface">14</strong> active evaluation files
          </span>
<span className="h-3 w-px bg-outline-variant"></span>
<span className="font-label-sm text-label-sm text-primary font-medium">1 tender selected for batch export</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="h-8 px-2.5 rounded bg-surface-container-lowest text-on-surface-variant hover:text-on-surface disabled:opacity-40" disabled type="button">
<span className="material-symbols-outlined text-[16px]">chevron_left</span>
</button>
<button className="h-8 w-8 rounded bg-primary text-on-primary font-label-md text-label-md font-semibold" type="button">1</button>
<button className="h-8 w-8 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md" type="button">2</button>
<button className="h-8 w-8 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md" type="button">3</button>
<button className="h-8 px-2.5 rounded bg-surface-container-lowest text-on-surface-variant hover:text-on-surface" type="button">
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</button>
</div>
</div>
</div>
{/* Bottom Section: Split Two-Column Utility & Governance Console */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/* Left Column: Ingestion Pipeline & Telemetry */}
<div className="lg:col-span-6 bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">hub</span>
</div>
<div>
<h2 className="font-title-sm text-title-sm text-primary">Real-Time Bid Ingestion &amp; OCR Telemetry</h2>
<p className="font-label-sm text-label-sm text-on-surface-variant">Live LayoutLMv3 Document Neural Pipeline &amp; Statutory API Throughput</p>
</div>
</div>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-[11px] font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span> Daemon Active
            </span>
</div>
{/* Micro Telemetry Grid */}
<div className="grid grid-cols-3 gap-space-sm my-space-md">
<div className="bg-surface-container-low p-space-sm rounded-xl">
<span className="font-label-sm text-label-sm text-on-surface-variant block">GSTN Live Verifier</span>
<span className="font-headline-md text-headline-md font-tabular-num text-on-surface mt-0.5">42 <span className="text-xs text-on-surface-variant font-normal">/ 100 rpm</span></span>
<div className="w-full bg-surface-container h-1 rounded-full mt-1.5 overflow-hidden">
<div className="bg-secondary h-full" style={{width: "42%"}}></div>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded-xl">
<span className="font-label-sm text-label-sm text-on-surface-variant block">EPFO Compliance</span>
<span className="font-headline-md text-headline-md font-tabular-num text-on-surface mt-0.5">18 <span className="text-xs text-on-surface-variant font-normal">/ 60 rpm</span></span>
<div className="w-full bg-surface-container h-1 rounded-full mt-1.5 overflow-hidden">
<div className="bg-primary h-full" style={{width: "30%"}}></div>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded-xl">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Udyam MSME Registry</span>
<span className="font-headline-md text-headline-md font-tabular-num text-tertiary-container mt-0.5">95 <span className="text-xs text-on-surface-variant font-normal">/ 100 rpm</span></span>
<div className="w-full bg-surface-container h-1 rounded-full mt-1.5 overflow-hidden">
<div className="bg-tertiary-container h-full" style={{width: "95%"}}></div>
</div>
</div>
</div>
{/* Worker Jobs Queue List */}
<div className="space-y-space-xs font-body-sm text-body-sm">
<div className="flex items-center justify-between p-space-xs rounded bg-surface-container-low/50">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[16px] text-secondary">check_circle</span>
<span className="font-tabular-num font-medium text-on-surface">Batch OCR #89201-P2</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">48 Financial BOQ Sheets extracted</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-tabular-num">0.42s latency</span>
</div>
<div className="flex items-center justify-between p-space-xs rounded bg-surface-container-low/50">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[16px] text-primary animate-spin">progress_activity</span>
<span className="font-tabular-num font-medium text-on-surface">Sanctions Screener Daemon</span>
<span className="text-on-surface-variant font-label-sm text-label-sm">Cross-referencing DoE / GeM Incident Debarment DB</span>
</div>
<span className="font-label-sm text-label-sm text-primary font-semibold font-tabular-num">Evaluating...</span>
</div>
</div>
</div>
{/* Hash Verification Footer */}
<div className="mt-space-md pt-space-xs border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span className="flex items-center gap-1 font-mono text-[11px]">
<span className="material-symbols-outlined text-[14px]">lock</span>
            SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
          </span>
<span className="text-secondary font-semibold">Gateway Verified</span>
</div>
</div>
{/* Right Column: Statutory Rule Gate Auto-Enforcement Summary */}
<div className="lg:col-span-6 bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-sm border-b border-surface-container">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">gavel</span>
</div>
<div>
<h2 className="font-title-sm text-title-sm text-primary">Statutory Rule Gate Auto-Enforcement Summary</h2>
<p className="font-label-sm text-label-sm text-on-surface-variant">Mandatory Sovereign Audits Applied across Active Bids (Zero Manual Bypass)</p>
</div>
</div>
<span className="font-label-sm text-[11px] font-semibold text-primary bg-primary-fixed px-2 py-0.5 rounded">
              DSC Level-3 Enforced
            </span>
</div>
{/* Compliance Rules Status Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm my-space-md">
{/* Rule 1 */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">GFR 2017 Rule 144(xi)</span>
<span className="bg-error-container text-on-error-container font-label-sm text-[10px] px-1.5 rounded font-bold">11 Breaches</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1 leading-snug">
                  Land border restriction compliance. Evaluates Beneficial Ownership certificates &amp; Competent Authority Registrations.
                </p>
</div>
<span className="text-error font-label-sm text-[11px] font-semibold mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">block</span> Automated Non-Responsive Flag
              </span>
</div>
{/* Rule 2 */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">DPIIT PPO Order (MII)</span>
<span className="bg-secondary-container text-on-secondary-container font-label-sm text-[10px] px-1.5 rounded font-bold">100% Audited</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1 leading-snug">
                  Public Procurement Preference to Make in India. Verification of Local Content % by Statutory Auditor/Cost Accountant.
                </p>
</div>
<span className="text-secondary font-label-sm text-[11px] font-semibold mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">verified</span> Class-I &amp; Class-II Segregated
              </span>
</div>
{/* Rule 3 */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">MSME / Udyam Gate</span>
<span className="bg-surface-container-highest text-on-surface font-label-sm text-[10px] px-1.5 rounded font-bold">34 Exemptions</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1 leading-snug">
                  Real-time Udyam API handshake for EMD / Tender fee exemptions and 25% procurement preference thresholds.
                </p>
</div>
<span className="text-primary font-label-sm text-[11px] font-semibold mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">check</span> Validated with MSME Portal
              </span>
</div>
{/* Rule 4 */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col justify-between">
<div>
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface">Central Debarment Matrix</span>
<span className="bg-secondary-container text-on-secondary-container font-label-sm text-[10px] px-1.5 rounded font-bold">Synced Today</span>
</div>
<p className="font-label-sm text-label-sm text-on-surface-variant mt-1 leading-snug">
                  Dept of Expenditure, GeM Incident Management, and Central Vigilance Commission debarment blacklists.
                </p>
</div>
<span className="text-secondary font-label-sm text-[11px] font-semibold mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">security</span> Zero Ineligible Allowed
              </span>
</div>
</div>
</div>
{/* Policy Compliance Stamped By */}
<div className="mt-space-md pt-space-xs border-t border-surface-container flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-primary">verified_user</span>
            Automated Audit Guard v4.2 under GFR Manual 2024
          </span>
<button className="text-primary font-semibold hover:underline flex items-center gap-0.5" type="button">
            Configure Gate Parameters
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</div></main>
    </>
  );
}
