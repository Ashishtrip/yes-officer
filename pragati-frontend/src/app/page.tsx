'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { api } from '@/services/api';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [tenders, setTenders] = useState<any[]>([]);
  const [loadingTenders, setLoadingTenders] = useState(true);
  const router = useRouter();

  useEffect(() => {
    api.getTenders()
      .then(res => {
        if (res.success) {
          setTenders(res.data.tenders);
        }
      })
      .catch(err => {
        console.error('Failed to load tenders', err);
      })
      .finally(() => {
        setLoadingTenders(false);
      });
  }, []);

  return (
    <ProtectedRoute>
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
            <Link href="/" className="h-full flex items-center px-space-xs font-title-sm text-title-sm text-primary border-b-2 border-primary transition-colors">Tenders &amp; Bids</Link>
            <Link href="/vigilance-analytics" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Vigilance &amp; Analytics</Link>
            <Link href="/compliance-rules" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Compliance Rules</Link>
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
      <main className="w-full pt-14 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
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
<tbody className="divide-y divide-surface-container">{tenders.map((tender: Record<string, any>) => (
<tr key={tender.id} className="hover:bg-surface-container-low/60 transition-colors group">
<td className="py-space-md px-space-md text-center align-top">
<input aria-label={`Select ${tender.gem_tender_id}`} className="mt-1 rounded text-primary focus:ring-0 focus:outline-none" type="checkbox"/>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs flex-wrap">
<Link href={`/tender/${tender.id}/ingestion`} className="font-tabular-num font-semibold text-primary text-title-sm hover:underline">{tender.gem_tender_id}</Link>
<span className="bg-primary-fixed text-on-primary-fixed font-label-sm text-[10px] px-1.5 py-0.2 rounded uppercase font-bold tracking-wider">High-Value EPC</span>
<span className="bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-[10px] px-1.5 py-0.2 rounded uppercase font-bold">PPO MII: Cl-I (50%)</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold group-hover:text-primary transition-colors line-clamp-1">
                    {tender.title}
                  </span>
<div className="flex items-center gap-space-sm font-label-sm text-label-sm text-on-surface-variant mt-0.5">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">category</span> {tender.category}
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
<span className="font-title-sm text-title-sm text-on-surface font-bold">Value Unavailable</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">EMD: N/A</span>
<span className="text-secondary font-label-sm text-[11px] font-medium">PBG: Standard</span>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Due: <strong>{new Date(tender.bid_end_date).toLocaleDateString()}</strong></span>
<span className="bg-error-container text-on-error-container font-semibold px-1.5 rounded text-[11px]">{tender.status}</span>
</div>
<div className="font-label-sm text-label-sm text-on-surface-variant">
                    Created: {new Date(tender.created_at).toLocaleDateString()}
                  </div>
</div>
</td>
<td className="py-space-md px-space-md align-top">
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="font-semibold text-on-surface font-tabular-num">{tender._count?.bids || 0} Bids Total</span>
<span className="font-tabular-num text-secondary font-semibold">Processed</span>
</div>
{/* Mini Segmented Progress Bar */}
<div className="w-full h-2 rounded-full bg-surface-container flex overflow-hidden">
<div className="h-full bg-secondary" style={{ width: "100%" }} title="Processed"></div>
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
<div className="bg-primary-container h-full rounded-full" style={{ width: "75%" }}></div>
</div>
<span className="font-tabular-num font-label-sm text-label-sm text-on-surface-variant">75%</span>
</div>
<span className="font-label-sm text-[11px] text-on-surface-variant">18/24 Dossiers Reviewed</span>
</div>
</td>
<td className="py-space-md px-space-md align-top text-right pr-space-lg">
<div className="flex flex-col items-end gap-1.5">
<Link href={`/tender/${tender.id}/ingestion`} className="h-8 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1 transition-colors shadow-xs">
<span className="material-symbols-outlined text-[16px]">cloud_sync</span>
<span>Ingestion Queue</span>
</Link>
<Link href={`/tender/${tender.id}/compliance`} className="h-8 px-3 rounded-lg bg-primary-container hover:bg-primary hover:text-on-primary text-primary-fixed font-label-md text-label-md flex items-center gap-1 transition-colors shadow-xs">
<span className="material-symbols-outlined text-[16px]">gavel</span>
<span>Compliance Desk</span>
</Link>
<Link href={`/tender/${tender.id}/tec`} className="h-8 px-3 rounded-lg bg-secondary-container hover:bg-secondary hover:text-on-secondary text-secondary-fixed font-label-md text-label-md flex items-center gap-1 transition-colors shadow-xs">
<span className="material-symbols-outlined text-[16px]">fact_check</span>
<span>TEC Matrix</span>
</Link>
<Link href={`/tender/${tender.id}/financial`} className="h-8 px-3 rounded-lg bg-tertiary-container hover:bg-tertiary hover:text-on-tertiary text-tertiary-fixed font-label-md text-label-md flex items-center gap-1 transition-colors shadow-xs">
<span className="material-symbols-outlined text-[16px]">price_check</span>
<span>Financial Bid</span>
</Link>
<Link href={`/tender/${tender.id}/award`} className="h-8 px-3 rounded-lg bg-surface-container-highest hover:bg-surface-container hover:text-primary text-on-surface font-label-md text-label-md flex items-center gap-1 transition-colors shadow-xs">
<span className="material-symbols-outlined text-[16px]">workspace_premium</span>
<span>Contract Award</span>
</Link>
</div>
</td>
</tr>
))}</tbody>
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
<button className="h-8 px-2.5 rounded bg-surface-container-lowest text-on-surface-variant hover:text-on-surface disabled:opacity-40" disabled={true} type="button">
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
<div className="bg-secondary h-full" style={{ width: "42%" }}></div>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded-xl">
<span className="font-label-sm text-label-sm text-on-surface-variant block">EPFO Compliance</span>
<span className="font-headline-md text-headline-md font-tabular-num text-on-surface mt-0.5">18 <span className="text-xs text-on-surface-variant font-normal">/ 60 rpm</span></span>
<div className="w-full bg-surface-container h-1 rounded-full mt-1.5 overflow-hidden">
<div className="bg-primary h-full" style={{ width: "30%" }}></div>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded-xl">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Udyam MSME Registry</span>
<span className="font-headline-md text-headline-md font-tabular-num text-tertiary-container mt-0.5">95 <span className="text-xs text-on-surface-variant font-normal">/ 100 rpm</span></span>
<div className="w-full bg-surface-container h-1 rounded-full mt-1.5 overflow-hidden">
<div className="bg-tertiary-container h-full" style={{ width: "95%" }}></div>
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
</div>
      </main>
    </ProtectedRoute>
  );
}
