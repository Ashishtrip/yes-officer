// @ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { api } from "../../../../services/api";

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const [tender, setTender] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      api.getTenderById(params.id as string)
        .then((res: any) => {
          setTender(res.data);
        })
        .catch((err: any) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [params.id]);

  const generateFinancial = (bid: any) => {
    let hash = 0;
    const str = (bid.id as string) || "default";
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const baseQuoted = 300000000 + (Math.abs(hash) % 150000000); // 30 Cr to 45 Cr
    const gst = baseQuoted * 0.18;
    const evaluated = baseQuoted + gst;
    return { baseQuoted, gst, evaluated };
  };

  const getSortedBids = () => {
    if (!tender?.bids) return [];
    return [...tender.bids].map(b => ({
      ...b,
      ...generateFinancial(b)
    })).sort((a, b) => a.evaluated - b.evaluated);
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-surface">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!tender) return null;

  const sortedBids = getSortedBids();
  const l1Bid = sortedBids[0];
  const l1BidderName = l1Bid?.bidder?.entity_name || "{l1BidderName}";
  const l1Price = l1Bid?.evaluated || 412000000;
  
  const l2Bid = sortedBids[1];
  const l2BidderName = l2Bid?.bidder?.entity_name || "{l2BidderName}";
  const l2Price = l2Bid?.evaluated || 412000000;

  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen flex flex-col">

      
<main className="w-full pt-14 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/* Top Sovereign Operational Ribbon */}
<section className="w-full bg-surface-container-lowest px-layout-gutter py-space-md border-b-0 shadow-sm">
<div className="max-w-[1680px] mx-auto flex flex-col gap-space-sm">
{/* Breadcrumb & Status Markers */}
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<nav aria-label="Audit Breadcrumb" className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
<span className="hover:text-primary transition-colors cursor-pointer">Portal Desk</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-primary transition-colors cursor-pointer">Tenders &amp; Bids</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="font-tabular-num text-tabular-num text-on-surface">{tender.gem_tender_id || tender.id}</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Contract Award &amp; PBG Desk</span>
</nav>
{/* Compliance Badges */}
<div className="flex flex-wrap items-center gap-space-xs">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
            GFR 2017 Rule 171 Compliant
          </span>
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px] text-secondary">check_circle</span>
            SFMS MT-760 Gateway Live
          </span>
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase tracking-wider">
<span className="material-symbols-outlined text-[14px] text-primary">token</span>
            Class-3 DSC Active (e-Mudhra)
          </span>
</div>
</div>
{/* Desk Master Title + Sovereign Metadata */}
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md pt-space-xs">
<div className="flex flex-col gap-1 max-w-4xl">
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase px-1.5 py-0.5 rounded bg-primary text-on-primary font-bold tracking-widest">Article 299 Sovereign Execution</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">SANCTION: F.18-42/2026-MED-III</span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight font-bold">Contract Award, LoA Execution &amp; e-PBG Management Desk</h1>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Tender Ref: <strong className="text-on-surface font-tabular-num">{tender.gem_tender_id || tender.id}</strong> • {tender.title || 'Tender Details'} • Sanctioned Allocation: <strong className="text-on-surface font-tabular-num">₹{(l1Price).toLocaleString('en-IN', {maximumFractionDigits: 0})}</strong> (Split 50:50 under Public Procurement Preference to Make in India Order)
          </p>
</div>
{/* Global Action Cluster */}
<div className="flex flex-wrap items-center gap-space-xs shrink-0">
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors shadow-sm" id="btn-download-draft" type="button">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
            Download Master Draft (PDF)
          </button>
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-surface-container-highest hover:bg-surface-container text-primary font-label-md text-label-md transition-colors shadow-sm" id="btn-verify-sfms" type="button">
<span className="material-symbols-outlined text-[18px]">sync</span>
            Verify SFMS via RBI Gateway
          </button>
<button className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-colors shadow-md" id="btn-sign-contract" type="button">
<span className="material-symbols-outlined text-[18px]">draw</span>
            Sign &amp; Issue Contract (DSC)
          </button>
</div>
</div>
</div>
</section>
{/* Executive Statutory KPI Suite */}
<section className="w-full px-layout-gutter py-space-md bg-surface-container-low">
<div className="max-w-[1680px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/* KPI 1 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Total Contract Value</span>
<span className="p-1.5 rounded bg-surface-container text-primary material-symbols-outlined text-[18px]">payments</span>
</div>
<div className="mt-space-sm flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-primary font-tabular-num">₹{(l1Price / 10000000).toFixed(2)}</span>
<span className="font-title-sm text-title-sm text-on-surface-variant font-medium">Crores</span>
</div>
<div className="mt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>100% Allocated (2 Vendors)</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold">50:50 MII Split</span>
</div>
</div>
{/* KPI 2 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">PBG Security Mandated</span>
<span className="p-1.5 rounded bg-surface-container text-primary material-symbols-outlined text-[18px]">verified_user</span>
</div>
<div className="mt-space-sm flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-on-surface font-tabular-num">₹{(l1Price * 0.05 / 10000000).toFixed(2)}</span>
<span className="font-title-sm text-title-sm text-on-surface-variant font-medium">Crores</span>
</div>
<div className="mt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>5.0% of Total Value</span>
<span className="font-label-sm text-label-sm text-primary font-semibold">DoE OM 2024 / R171</span>
</div>
</div>
{/* KPI 3 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">e-PBG Verification Status</span>
<span className="p-1.5 rounded bg-tertiary-fixed text-tertiary material-symbols-outlined text-[18px]">account_balance</span>
</div>
<div className="mt-space-sm flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-secondary font-tabular-num">1</span>
<span className="font-title-sm text-title-sm text-on-surface-variant font-medium">/ 2 Confirmed</span>
</div>
<div className="mt-space-xs flex items-center justify-between font-body-sm text-body-sm">
<span className="text-secondary font-medium">SBI Verified (SFMS MT760)</span>
<span className="text-tertiary font-medium">PNB Pending (14h)</span>
</div>
</div>
{/* KPI 4 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Delivery Milestone Window</span>
<span className="p-1.5 rounded bg-surface-container-high text-primary material-symbols-outlined text-[18px]">schedule</span>
</div>
<div className="mt-space-sm flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-primary font-tabular-num">45</span>
<span className="font-title-sm text-title-sm text-on-surface-variant font-medium">Days Countdown</span>
</div>
<div className="mt-space-xs flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Consignment Phase 1</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">AIIMS &amp; PGIMER</span>
</div>
</div>
</div>
</section>
{/* Main Workstation Layout: 65% Ledger & Allocations / 35% Inspector & Statutory Guardrails */}
<main className="w-full px-layout-gutter py-space-lg">
<div className="max-w-[1680px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/* LEFT COLUMN: 65% (8 Cols in 12-grid) */}
<div className="lg:col-span-8 flex flex-col gap-space-lg">
{/* PANEL 1: Multi-Award Allocation & Contract Splitting Ledger */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="px-space-md py-space-sm bg-surface-container-low flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">call_split</span>
<h2 className="font-title-sm text-title-sm text-primary font-bold uppercase tracking-tight">Contract Split Execution: Make in India (MII) Preference Order</h2>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Statutory Rule: Clause 3(b) PPO-2017</span>
</div>
</div>
<div className="p-space-md flex flex-col gap-space-md">
{/* Split Allocations Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/* Supplier 1: {l1BidderName.split(' ')[0]} Diagnostic Systems */}
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase px-1.5 py-0.5 rounded bg-primary text-on-primary font-semibold">L-1 Native Lowest Bidder</span>
<h3 className="font-title-sm text-title-sm text-on-surface font-bold mt-1.5">{l1BidderName}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant font-mono">GSTIN: 07AAACA1098F1ZS • CAGE/NCAGE: S4891</p>
</div>
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold uppercase">50% Volume</span>
</div>
<div className="py-space-xs grid grid-cols-2 gap-space-xs bg-surface-container-lowest p-2.5 rounded">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Allocated Value</span>
<span className="font-tabular-num text-tabular-num text-on-surface font-bold">₹{(l1Price / 2).toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Required e-PBG (5%)</span>
<span className="font-tabular-num text-tabular-num text-on-surface font-bold">₹{(l1Price / 2 * 0.05).toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
<span className="font-label-sm text-label-sm text-secondary font-semibold">e-PBG Authenticated via SBI SFMS</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">#SBI-DEL-2026-9941</span>
</div>
</div>
{/* Supplier 2: {l2BidderName.split(' ')[0]} Ltd */}
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between gap-space-sm hover:shadow-md transition-shadow">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm uppercase px-1.5 py-0.5 rounded bg-surface-container-highest text-primary font-semibold">Class-I Local Supplier (MII Match)</span>
<h3 className="font-title-sm text-title-sm text-on-surface font-bold mt-1.5">{l2BidderName}</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant font-mono">GSTIN: 27AABCA4432G1ZL • Local Content: 68.4%</p>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary font-label-sm text-label-sm font-bold uppercase">50% Volume</span>
</div>
<div className="py-space-xs grid grid-cols-2 gap-space-xs bg-surface-container-lowest p-2.5 rounded">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Allocated Value</span>
<span className="font-tabular-num text-tabular-num text-on-surface font-bold">₹{(l1Price / 2).toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Required e-PBG (5%)</span>
<span className="font-tabular-num text-tabular-num text-on-surface font-bold">₹{(l1Price / 2 * 0.05).toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-tertiary text-[18px]">hourglass_top</span>
<span className="font-label-sm text-label-sm text-tertiary font-semibold">Under PNB Bank Callback Confirmation</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">#PNB-SFMS-88192</span>
</div>
</div>
</div>
{/* Quantitative Split Visual Bar */}
<div className="p-space-sm rounded bg-surface-container-low flex flex-col gap-1.5">
<div className="flex justify-between items-center text-label-sm font-label-sm">
<span className="font-semibold text-primary">Consortium Production Distribution Matrix</span>
<span className="text-on-surface-variant">Combined Supply Volume: 24 Diagnostic Units</span>
</div>
<div className="h-3 w-full rounded bg-surface-container-high flex overflow-hidden">
<div className="h-full bg-primary flex items-center justify-center text-[10px] text-on-primary font-bold" style={{"width": "50%"}}>{l1BidderName.substring(0, 8)} 50%</div>
<div className="h-full bg-surface-container-highest flex items-center justify-center text-[10px] text-primary font-bold" style={{"width": "50%"}}>{l2BidderName.substring(0, 8)} 50%</div>
</div>
</div>
</div>
</div>
{/* PANEL 2: Structured Financial Messaging System (SFMS) & e-PBG Ledger */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="px-space-md py-space-sm bg-surface-container-low flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">account_balance_wallet</span>
<h2 className="font-title-sm text-title-sm text-primary font-bold uppercase tracking-tight">e-PBG Real-Time Bank Verification Ledger</h2>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">SFMS MT-760 Gateway L3 Live</span>
<button className="p-1 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" id="refresh-ledger-btn" title="Sync Bank Ledger">
<span className="material-symbols-outlined text-[18px]">autorenew</span>
</button>
</div>
</div>
{/* Strict Workstation Data Table */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-2.5 px-space-md">Instrument / NeSL ID</th>
<th className="py-2.5 px-space-md">Issuing Bank &amp; Branch</th>
<th className="py-2.5 px-space-md">Beneficiary Clause</th>
<th className="py-2.5 px-space-md text-right">BG Value</th>
<th className="py-2.5 px-space-md">SFMS Timestamp</th>
<th className="py-2.5 px-space-md">Expiry &amp; Claim</th>
<th className="py-2.5 px-space-md text-right">Audit Verdict</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm divide-y divide-surface-container-high/40">
{/* Row 1: SBI */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-sm px-space-md align-top">
<div className="font-mono text-on-surface font-bold text-tabular-num">BG-SBI-9921408</div>
<div className="font-mono text-[11px] text-on-surface-variant">NeSL: 2026-ES-488219</div>
</td>
<td className="py-space-sm px-space-md align-top">
<div className="text-on-surface font-medium">State Bank of India</div>
<div className="text-on-surface-variant text-[11px]">CAG Branch, New Delhi (SBIN0009988)</div>
</td>
<td className="py-space-sm px-space-md align-top">
<div className="text-on-surface">President of India</div>
<div className="text-on-surface-variant text-[11px]">through MoHFW, Govt of India</div>
</td>
<td className="py-space-sm px-space-md text-right align-top">
<span className="font-tabular-num font-bold text-on-surface text-tabular-num">₹{(l1Price / 2 * 0.05).toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
<span className="block text-[11px] text-secondary font-medium">100% Margin Backed</span>
</td>
<td className="py-space-sm px-space-md align-top font-tabular-num">
<div className="text-on-surface font-medium">14-Oct-2026</div>
<div className="text-[11px] text-on-surface-variant">11:42:08 IST</div>
</td>
<td className="py-space-sm px-space-md align-top font-tabular-num">
<div className="text-on-surface font-medium">14-Dec-2029</div>
<div className="text-[11px] text-on-surface-variant">Claim: 14-Feb-2030 (+60d)</div>
</td>
<td className="py-space-sm px-space-md text-right align-top">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      Verified Live
                    </span>
<button className="block ml-auto mt-1 font-label-sm text-[11px] text-primary hover:underline">View Advice</button>
</td>
</tr>
{/* Row 2: PNB */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-sm px-space-md align-top">
<div className="font-mono text-on-surface font-bold text-tabular-num">BG-PNB-8819203</div>
<div className="font-mono text-[11px] text-on-surface-variant">NeSL: 2026-ES-910244</div>
</td>
<td className="py-space-sm px-space-md align-top">
<div className="text-on-surface font-medium">Punjab National Bank</div>
<div className="text-on-surface-variant text-[11px]">Parliament St, New Delhi (PUNB0001400)</div>
</td>
<td className="py-space-sm px-space-md align-top">
<div className="text-on-surface">President of India</div>
<div className="text-on-surface-variant text-[11px]">through MoHFW, Govt of India</div>
</td>
<td className="py-space-sm px-space-md text-right align-top">
<span className="font-tabular-num font-bold text-on-surface text-tabular-num">₹{(l1Price / 2 * 0.05).toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
<span className="block text-[11px] text-tertiary font-medium">FDR Pledge Confirmed</span>
</td>
<td className="py-space-sm px-space-md align-top font-tabular-num">
<div className="text-on-surface font-medium">15-Oct-2026</div>
<div className="text-[11px] text-on-surface-variant">09:14:22 IST</div>
</td>
<td className="py-space-sm px-space-md align-top font-tabular-num">
<div className="text-on-surface font-medium">15-Dec-2029</div>
<div className="text-[11px] text-on-surface-variant">Claim: 15-Feb-2030 (+60d)</div>
</td>
<td className="py-space-sm px-space-md text-right align-top">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm uppercase font-semibold">
<span className="material-symbols-outlined text-[12px]">schedule</span>
                      Pending Callback
                    </span>
<button className="block ml-auto mt-1 font-label-sm text-[11px] text-primary hover:underline" id="btn-ping-pnb">Force Gateway Ping</button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Bottom Verification Metric Bar */}
<div className="px-space-md py-space-xs bg-surface-container-low flex flex-wrap items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Mandatory Rule 171(iii): Validity extends minimum 60 days beyond completion of all contractual obligations &amp; warranty.</span>
<span className="font-mono text-primary font-bold">Total PBG In-Custody: ₹2,06,00,000 (100% Secured)</span>
</div>
</div>
{/* PANEL 3: Milestone & Consignment Execution Horizon */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">timeline</span>
<h2 className="font-title-sm text-title-sm text-primary font-bold uppercase tracking-tight">Contract Execution &amp; Delivery Milestone Schedule</h2>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-mono">Stage 2 of 5 Active</span>
</div>
{/* Step Progression Component */}
<div className="grid grid-cols-1 md:grid-cols-5 gap-space-sm relative">
{/* Stage 1 */}
<div className="p-space-sm rounded bg-surface-container-low flex flex-col gap-1 relative overflow-hidden">
<div className="h-1 bg-secondary rounded w-full mb-1"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-bold">STAGE 1</span>
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold text-sm">LoA Issuance &amp; Acceptance</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Countersigned by both vendors with Class-3 DSC</span>
</div>
{/* Stage 2 */}
<div className="p-space-sm rounded bg-surface-container-high/60 flex flex-col gap-1 relative overflow-hidden ring-1 ring-primary/20">
<div className="h-1 bg-primary rounded w-full mb-1"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-primary font-bold">STAGE 2</span>
<span className="material-symbols-outlined text-primary text-[16px] animate-spin">progress_activity</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold text-sm">e-PBG Lodgment &amp; SFMS</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">90% Complete • PNB final callback pending</span>
</div>
{/* Stage 3 */}
<div className="p-space-sm rounded bg-surface-container-low opacity-80 flex flex-col gap-1 relative overflow-hidden">
<div className="h-1 bg-surface-container-high rounded w-full mb-1"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">STAGE 3</span>
<span className="material-symbols-outlined text-on-surface-variant text-[16px]">calendar_today</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold text-sm">Tripartite Signing</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">GeM, Ministry &amp; Consortia • Target: 20-Oct-2026</span>
</div>
{/* Stage 4 */}
<div className="p-space-sm rounded bg-surface-container-low opacity-60 flex flex-col gap-1 relative overflow-hidden">
<div className="h-1 bg-surface-container-high rounded w-full mb-1"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">STAGE 4</span>
<span className="material-symbols-outlined text-on-surface-variant text-[16px]">fact_check</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold text-sm">Pre-Dispatch (PDI)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">DGQA / RITES joint laboratory verification</span>
</div>
{/* Stage 5 */}
<div className="p-space-sm rounded bg-surface-container-low opacity-60 flex flex-col gap-1 relative overflow-hidden">
<div className="h-1 bg-surface-container-high rounded w-full mb-1"></div>
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant font-bold">STAGE 5</span>
<span className="material-symbols-outlined text-on-surface-variant text-[16px]">local_shipping</span>
</div>
<span className="font-title-sm text-title-sm text-on-surface font-semibold text-sm">Consignment &amp; CRAC</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">AIIMS &amp; PGIMER receipt certificates</span>
</div>
</div>
</div>
{/* PANEL 4: Visual Supply Chain & Consignee Location Matrix */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">hub</span>
<h2 className="font-title-sm text-title-sm text-primary font-bold uppercase tracking-tight">Institutional Consignee Deployment Map</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">2 Master Hubs • Bi-weekly Telemetry</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
{/* Consignee Hub 1 */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">AIIMS New Delhi Central Diagnostic Complex</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-primary font-mono">12 Units</span>
</div>
<div className="w-full h-44 rounded-lg bg-cover bg-center shadow-inner" data-location="All India Institute of Medical Sciences, New Delhi, India" style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuASfFxISJUPdQnvVM-71-O7ALxD00jyzCm_GjsDsbJmb3ZRhosKaP6KugB-c37B2Izco9FnKEi_tfEEiq3q7lnODPefxGWH-9Zk3qL6SdnmjFOx1-HOdhY9d_jbeEOIS42Q9JloKtTfKFoywj4d-a5x5kG6uyNZfNzzVpYR2xheb9xfQZLj2RM21xaT8rpb62Po9ZwhY_KbMMORChiUDGoRv8rmOXeyx_1dHWlVe6rlAgNK50_Oa7j5LA')"}}></div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Designated Nodal Officer: Prof. A. Sanyal (Head of Radiology • Biometric Receipt PIN Enabled)</p>
</div>
{/* Consignee Hub 2 */}
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">PGIMER Chandigarh Advanced Cardiac Centre</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-primary font-mono">12 Units</span>
</div>
<div className="w-full h-44 rounded-lg bg-cover bg-center shadow-inner" data-location="Postgraduate Institute of Medical Education and Research, Chandigarh, India" style={{"backgroundImage": "url('https://lh3.googleusercontent.com/aida-public/AB6AXuByi2pIibdycVVe4xTpkRRkoDJ4Kx81V3O3t8ebzM6ytzL7-u7fye4t6U9hbUzkGQiVqlejkjzxFP9FRoZR-v2xo29xAWHrhJw-3gx_TJmrDms6_gGK5hy4MWOdvT2WBXGIEMY9D-_nSevYywfcO6RBiBJYwdhVJdZ-1n7hMnMH4o2Bmoz977G2mq4w9TwqdVRyVGlF2XeibXpkSv3EXJndVTR2NWDOixmVmF6Mkw6uuPp5-S5Npon9bg')"}}></div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Designated Nodal Officer: Dr. M. K. Rawat (Biomedical Stores Superintendent)</p>
</div>
</div>
</div>
</div>
{/* RIGHT COLUMN: 35% (4 Cols in 12-grid) */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/* RIGHT CARD 1: Interactive LoA Document Preview & Digital Seal Inspector */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="px-space-md py-space-sm bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">description</span>
<h2 className="font-title-sm text-title-sm text-primary font-bold uppercase tracking-tight">LoA &amp; Sovereign Contract Seal</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary font-mono font-bold">DSC ATTESTED</span>
</div>
{/* Document Sheet Simulation */}
<div className="p-space-md flex flex-col gap-space-md">
<div className="p-space-md bg-surface-container-low/60 rounded-lg flex flex-col gap-space-sm">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Letter of Acceptance Ref</span>
<span className="font-title-sm text-title-sm text-on-surface font-mono font-bold">MoHFW/PROC/2026/LOA-4892</span>
</div>
<img className="w-10 h-10 object-contain opacity-80" data-alt="Official high-resolution national emblem of India embossed seal watermark in deep institutional indigo and crisp monochrome line art on archival bond paper background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrmqtlyFRpNkRhG91irrHR-d1fjQ0LOGrgFQPyqo03HnyGBD4so4rEe9nFDfKBDNBvgesrLIalNZ4rfdTXIaf-pskVixc8IM4wV9VpVVvj4bMFwsiejen75rP6Ns3xuVzupd3GJsBK2gsCYPSPlBg5r_pukqMmw4iJ--zHFDiOoh2T3WcSbvIAmiKdkwE3ATLW5IFB8QzbigSYX_qvDUACyuPgleNKQe_vrUv8Fj_9lw-ljXmTb77WiQ"/>
</div>
{/* Enforced Legal Clauses */}
<div className="flex flex-col gap-1.5 pt-space-xs">
<span className="font-label-sm text-label-sm uppercase font-bold text-on-surface tracking-wider">Statutory Binding Clauses:</span>
<div className="p-2 rounded bg-surface-container-lowest flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">gavel</span>
<span className="font-body-sm text-body-sm text-on-surface leading-snug"><strong>Liquidity Damages:</strong> 0.5% per week of delay up to a hard maximum of 10% total value.</span>
</div>
<div className="p-2 rounded bg-surface-container-lowest flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">handshake</span>
<span className="font-body-sm text-body-sm text-on-surface leading-snug"><strong>Integrity Pact:</strong> Strict non-collusion governance overseen by Independent External Monitor (IEM).</span>
</div>
<div className="p-2 rounded bg-surface-container-lowest flex items-start gap-2">
<span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">build</span>
<span className="font-body-sm text-body-sm text-on-surface leading-snug"><strong>Warranty &amp; CMC:</strong> 36 Months on-site warranty + 5-year Comprehensive AMC mandatory.</span>
</div>
</div>
{/* Digital Signature Certificate Token Status */}
<div className="mt-2 pt-2 bg-surface-container-lowest p-2.5 rounded flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[22px]">fingerprint</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Rajesh Kumar, IAS</span>
<span className="font-label-sm text-[10px] text-on-surface-variant">Class-3 DSC Token #8942-A109 (e-Mudhra)</span>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">Active Key</span>
</div>
</div>
{/* Signing Controls */}
<div className="flex flex-col gap-2">
<button className="w-full py-2 px-3 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors flex items-center justify-center gap-1.5" id="btn-inspect-dsc">
<span className="material-symbols-outlined text-[18px]">verified</span>
                Inspect Cryptographic Certificate Chain
              </button>
<button className="w-full py-2 px-3 rounded bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-1.5" id="btn-export-sanction">
<span className="material-symbols-outlined text-[18px]">print</span>
                Print Official Gazette Notice Extract
              </button>
</div>
</div>
</div>
{/* RIGHT CARD 2: Statutory Risk & Forfeiture Control Panel */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="px-space-md py-space-sm bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-error text-[20px]">warning</span>
<h2 className="font-title-sm text-title-sm text-on-surface font-bold uppercase tracking-tight">Statutory Default &amp; Forfeiture Watch</h2>
</div>
<span className="px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-bold">Rule 171(iv) Active</span>
</div>
<div className="p-space-md flex flex-col gap-space-md">
{/* Statutory Alert Notification */}
<div className="p-space-sm rounded bg-error-container/30 flex flex-col gap-1.5">
<div className="flex items-center gap-1.5 text-on-error-container font-semibold font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">shield_with_heart</span>
<span>Mandatory 15-Day Hard Enforcement Window</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                Failure to lodge valid e-PBG within fifteen (15) calendar days from LoA dispatch enforces mandatory automatic cancellation of the award and simultaneous forfeiture of the Bid Security / EMD.
              </p>
<div className="mt-1 flex items-center justify-between font-label-sm text-label-sm font-mono text-on-surface-variant">
<span>LoA Dispatched: 10-Oct-2026</span>
<span className="text-error font-bold">Time Elapsed: 5d 08h</span>
</div>
</div>
{/* Interventions */}
<div className="flex flex-col gap-2">
<button className="w-full py-2 px-3 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-colors flex items-center justify-between" id="btn-grant-extension">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
                  Grant 7-Day Grace Extension (PO Discretion)
                </span>
<span className="font-label-sm text-[10px] bg-surface-container-lowest px-1.5 py-0.5 rounded text-on-surface-variant">Requires Reason</span>
</button>
<button className="w-full py-2 px-3 rounded bg-surface-container-highest hover:bg-surface-container text-primary font-label-md text-label-md transition-colors flex items-center justify-between" id="btn-trigger-ping">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">podcasts</span>
                  Trigger Urgent Bank Verification Ping
                </span>
<span className="font-label-sm text-[10px] text-on-surface-variant">PNB SFMS Node</span>
</button>
<button className="w-full py-2 px-3 rounded bg-error-container hover:bg-error/20 text-on-error-container font-label-md text-label-md transition-colors flex items-center justify-between" id="btn-revoke-award">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px]">block</span>
                  Initiate Default Notice &amp; Escalate to L-2
                </span>
<span className="font-label-sm text-[10px] uppercase font-bold">Vigilance Core</span>
</button>
</div>
</div>
</div>
{/* RIGHT CARD 3: Gateway Telemetry & Cryptographic Connectors */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="px-space-md py-space-sm bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">sensors</span>
<h2 className="font-title-sm text-title-sm text-primary font-bold uppercase tracking-tight">FinTech Infrastructure Nodes</h2>
</div>
<span className="font-label-sm text-label-sm text-secondary font-mono">100% HEALTH</span>
</div>
<div className="p-space-md flex flex-col gap-space-sm">
{/* Connector 1 */}
<div className="p-space-sm rounded bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<div>
<span className="font-label-md text-label-md text-on-surface font-semibold block">SFMS / RBI NPCI Gateway</span>
<span className="font-body-sm text-[11px] text-on-surface-variant font-mono">Structured Message MT-760 Adapter</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm font-mono text-secondary font-bold">42ms Latency</span>
<span className="block text-[10px] text-on-surface-variant">Encrypted IPSec</span>
</div>
</div>
{/* Connector 2 */}
<div className="p-space-sm rounded bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<div>
<span className="font-label-md text-label-md text-on-surface font-semibold block">NeSL Digital E-Stamp Repository</span>
<span className="font-body-sm text-[11px] text-on-surface-variant font-mono">National E-Governance Services Ltd</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm font-mono text-primary font-bold">Synced (1m ago)</span>
<span className="block text-[10px] text-on-surface-variant">256-Bit SSL OK</span>
</div>
</div>
{/* Visual Ping Rate / Throughput SVG Chart */}
<div className="mt-space-xs p-space-sm bg-surface-container-low rounded flex flex-col gap-1">
<div className="flex justify-between items-center text-label-sm font-label-sm text-on-surface-variant">
<span>SFMS API Query Load (Last 6 Hours)</span>
<span className="font-mono text-on-surface font-medium">99.98% Success</span>
</div>
<svg className="w-full h-10 text-primary" fill="none" preserveAspectRatio="none" viewBox="0 0 300 40">
<path d="M0 35 L20 28 L40 32 L60 18 L80 24 L100 12 L120 16 L140 8 L160 22 L180 14 L200 19 L220 11 L240 15 L260 7 L280 12 L300 9" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2"></path>
<path d="M0 35 L20 28 L40 32 L60 18 L80 24 L100 12 L120 16 L140 8 L160 22 L180 14 L200 19 L220 11 L240 15 L260 7 L280 12 L300 9 L300 40 L0 40 Z" fill="currentColor" fillOpacity="0.08"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</main>
{/* Institutional Integrity & Cryptographic Seal Footer */}
<footer className="w-full px-layout-gutter py-space-md bg-surface-container-lowest mt-space-xl">
<div className="max-w-[1680px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-on-surface-variant">
<div className="flex flex-col gap-0.5">
<span className="font-label-md text-label-md text-on-surface font-semibold">Statutory Authority References</span>
<p className="font-body-sm text-[12px] text-on-surface-variant">
          GFR 2017 Rule 171 • Manual for Procurement of Goods 2024 (Section 6.2) • Public Procurement Order (Preference to Make in India) 2017 • IT Act 2000 Section 3A.
        </p>
</div>
<div className="flex flex-col md:items-end gap-0.5 shrink-0">
<div className="flex items-center gap-1.5 font-mono text-[11px] text-primary">
<span className="material-symbols-outlined text-[14px]">lock</span>
<span>SHA-256 Ledger Hash: 49b7f920...89104-EVD</span>
</div>
<span className="text-[11px] text-on-surface-variant">Timestamped by National Informatics Centre (NIC) Sovereign Node • Server IST 15:42:19</span>
</div>
</div>
</footer>
{/* Modal / Inspection Drawer Simulation for Certificate & SFMS Verification */}
<div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/40 p-4" id="dsc-inspect-modal">
<div className="bg-surface-container-lowest rounded-xl max-w-lg w-full p-space-lg shadow-xl flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[24px]">verified_user</span>
<h3 className="font-title-sm text-title-sm text-primary font-bold">Class-3 Digital Signature Key Audit</h3>
</div>
<button className="p-1 rounded text-on-surface-variant hover:text-on-surface" id="btn-close-modal">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>
<div className="flex flex-col gap-2 font-mono text-body-sm text-body-sm bg-surface-container-low p-space-md rounded">
<div><strong className="text-on-surface">Signatory:</strong> Rajesh Kumar, IAS</div>
<div><strong className="text-on-surface">Designation:</strong> Senior Procurement Officer, MoHFW</div>
<div><strong className="text-on-surface">CA Issuer:</strong> e-Mudhra Sub-CA for CCA India L3</div>
<div><strong className="text-on-surface">Valid Through:</strong> 12-Nov-2028</div>
<div><strong className="text-on-surface">Cryptographic Algorithm:</strong> RSA 4096-bit with SHA-256</div>
<div><strong className="text-on-surface">CRL Revocation Status:</strong> Verified Active (OCSP 200 OK)</div>
</div>
<div className="flex justify-end gap-space-xs pt-space-xs">
<button className="px-4 py-2 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md" id="btn-modal-dismiss">Close Audit Inspector</button>
</div>
</div>
</div>
</div>
{/* Inline Interaction Logic */}
</main>
    </div>
  );
}
