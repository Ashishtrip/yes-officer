"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

export default function VigilanceAnalyticsPage() {
  // @ts-nocheck
  const [flags, setFlags] = useState<any[]>([]);

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/vigilance/analytics");
        if (res.data && res.data.success) {
          setFlags(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch vigilance flags", err);
      }
    };
    fetchFlags();
  }, []);

  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen flex flex-col">

      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-surface-container-high shadow-sm">
        <div className="h-14 w-full px-layout-gutter flex items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-md min-w-[280px]">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <span className="font-title-sm text-title-sm text-primary leading-none font-bold">Pragati</span>
                <span className="px-1.5 py-0.5 rounded bg-surface-container text-primary font-label-sm text-[10px] uppercase font-bold tracking-wider">Gov Portal</span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight mt-0.5">GeM Integrated Compliance & Statutory Audit</span>
            </div>
          </div>
          <nav className="hidden xl:flex items-center h-full gap-space-lg" aria-label="Main Navigation">
            <Link href="/" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Tenders &amp; Bids</Link>
            <Link href="/vigilance-analytics" className="h-full flex items-center px-space-xs font-title-sm text-title-sm text-primary border-b-2 border-primary transition-colors">Vigilance &amp; Analytics</Link>
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
<main className="w-full pt-14 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/* BREADCRUMB & CONTEXT BANNER */}
<section className="bg-surface-container-low px-layout-gutter py-space-sm">
<div className="flex flex-wrap items-center justify-between gap-space-sm max-w-[1720px] mx-auto">
<div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
<span className="hover:text-primary cursor-pointer transition-colors">Portal Desk</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-primary cursor-pointer transition-colors">Vigilance &amp; Scrutiny Wing</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Systemic Compliance Intelligence &amp; Analytics</span>
</div>
<div className="flex flex-wrap items-center gap-space-xs">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-surface-container-highest text-primary text-label-sm font-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          MeitY MeghRaj Node 04 Active
        </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-surface-container-highest text-on-surface-variant text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[13px] text-primary">policy</span>
          CVC Vigilance Manual 2021 • GFR Rule 173
        </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-primary-container text-on-primary text-label-sm font-label-sm font-semibold">
          FY 2026-27 (Q2 Telemetry)
        </span>
</div>
</div>
</section>
{/* TITLE & COMMAND BAR */}
<section className="bg-surface-container-lowest px-layout-gutter py-space-md shadow-sm">
<div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-space-md max-w-[1720px] mx-auto">
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
            Vigilance &amp; Procurement Compliance Analytics
          </h1>
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm tracking-wide uppercase font-bold">
            Statutory CAG Feed
          </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
          Real-time forensic telemetry across GeM bids, statutory database discrepancies, collusion signatures, and sovereign verification pipelines.
        </p>
</div>
{/* Action Cluster */}
<div className="flex flex-wrap items-center gap-space-xs shrink-0">
<div className="flex items-center bg-surface-container-low px-space-sm py-1.5 rounded-lg">
<span className="material-symbols-outlined text-primary text-[18px] mr-1.5">date_range</span>
<select aria-label="Fiscal Period Filter" className="bg-transparent font-label-md text-label-md text-on-surface outline-none cursor-pointer pr-2">
<option>Last 90 Days (Q2 FY 2026-27)</option>
<option>Last 30 Days (August 2026)</option>
<option>Q1 FY 2026-27 Audit Cycle</option>
<option>Full FY 2025-26 Consolidation</option>
</select>
</div>
<div className="flex items-center bg-surface-container-low px-space-sm py-1.5 rounded-lg">
<span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-1.5">account_balance</span>
<select aria-label="Ministry Scrutiny Filter" className="bg-transparent font-label-md text-label-md text-on-surface outline-none cursor-pointer pr-2">
<option>All Line Ministries (148 Tenders)</option>
<option>Ministry of Defence (DDP)</option>
<option>Ministry of Health &amp; Family Welfare</option>
<option>Ministry of Heavy Industries</option>
<option>Ministry of Railways (CRIS)</option>
<option>Ministry of Power &amp; New Energy</option>
</select>
</div>
<button className="flex items-center gap-1.5 bg-surface-container-high hover:bg-surface-container-highest text-primary px-space-sm py-1.5 rounded-lg font-label-md text-label-md transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">download_for_offline</span>
          Export CVC Dossier
        </button>
<button className="flex items-center gap-1.5 bg-primary hover:bg-primary-container text-on-primary px-space-md py-1.5 rounded-lg font-label-md text-label-md font-semibold transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">gavel</span>
          Generate CAG Statutory Brief
        </button>
</div>
</div>
</section>
{/* MAIN DASHBOARD CONTENT AREA */}
<div className="px-layout-gutter py-space-lg flex flex-col gap-space-lg max-w-[1720px] mx-auto w-full">
{/* TOP-LEVEL EXECUTIVE KPI CARDS */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/* KPI 1 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Overall Clearance Rate</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight">78.4%</span>
<span className="inline-flex items-center font-label-sm text-label-sm text-secondary font-semibold">
<span className="material-symbols-outlined text-[14px]">trending_up</span> +3.2%
              </span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">verified</span>
</div>
</div>
<div className="my-space-xs">
{/* Sparkline SVG */}
<svg className="w-full h-8 text-secondary" fill="none" preserveAspectRatio="none" viewBox="0 0 100 25">
<path d="M0,18 Q10,19 20,15 T40,14 T60,11 T80,7 T100,4" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<path d="M0,18 Q10,19 20,15 T40,14 T60,11 T80,7 T100,4 L100,25 L0,25 Z" fill="currentColor" fillOpacity="0.08"></path>
</svg>
</div>
<div className="pt-space-xs bg-surface-container-low/40 rounded-lg p-2 mt-1">
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between">
<span>Evaluated Fleet:</span>
<span className="font-tabular-num text-tabular-num font-semibold text-on-surface">1,842 bids / 148 tenders</span>
</p>
</div>
</div>
{/* KPI 2 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Top Systemic Defect</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-headline-lg text-headline-lg font-bold text-error tracking-tight">59.6%</span>
<span className="px-1.5 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-[10px] font-bold uppercase tracking-wider">
                Systemic Defect
              </span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-error-container/40 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[22px]">warning</span>
</div>
</div>
<div className="mt-1">
<div className="font-label-md text-label-md font-semibold text-on-surface">EPFO &amp; Shram Suvidha Portal</div>
<div className="w-full bg-surface-container-high h-2 rounded-full mt-1.5 overflow-hidden">
<div className="bg-error h-full rounded-full" style={{"width": "59.6%"}}></div>
</div>
</div>
<div className="pt-space-xs bg-surface-container-low/40 rounded-lg p-2 mt-space-xs">
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between">
<span>Challan Wage Lock:</span>
<span className="font-tabular-num text-tabular-num font-semibold text-error">614 of 1,030 non-compliant</span>
</p>
</div>
</div>
{/* KPI 3 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Verification Velocity</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-display-lg text-display-lg font-bold text-primary tracking-tight">3.4 min</span>
<span className="inline-flex items-center font-label-sm text-label-sm text-secondary font-semibold">
                -92% vs manual
              </span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-secondary-container/40 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">speed</span>
</div>
</div>
<div className="mt-1 flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Prior Baseline:</span>
<span className="line-through font-tabular-num text-tabular-num text-outline">48.0 Hours</span>
<span className="material-symbols-outlined text-[14px] text-secondary">arrow_forward</span>
<span className="font-tabular-num text-tabular-num font-bold text-secondary">3.4 Mins</span>
</div>
<div className="pt-space-xs bg-surface-container-low/40 rounded-lg p-2 mt-space-xs">
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between">
<span>Engine Runtime:</span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">LayoutLMv3 + DPIIT/MCA APIs</span>
</p>
</div>
</div>
{/* KPI 4 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider block">Forensic Holds &amp; Fraud Flags</span>
<div className="flex items-baseline gap-2 mt-1">
<span className="font-display-lg text-display-lg font-bold text-tertiary-container tracking-tight">34 Flags</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-tabular-num">
                (1.8% of fleet)
              </span>
</div>
</div>
<div className="w-10 h-10 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[22px]">shield_with_heart</span>
</div>
</div>
<div className="mt-1 flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
<span className="font-label-sm text-label-sm font-semibold text-error">Escalated to CVC Oversight</span>
</div>
<div className="pt-space-xs bg-surface-container-low/40 rounded-lg p-2 mt-space-xs">
<p className="font-body-sm text-body-sm text-on-surface-variant flex items-center justify-between">
<span>Signatures:</span>
<span className="font-label-sm text-label-sm font-semibold text-on-surface">UDIN Tamper • Border Shells</span>
</p>
</div>
</div>
</div>
{/* MAIN ANALYTICAL GRID (TWO-COLUMN) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
{/* LEFT COLUMN (WIDE / 8 COLS) */}
<div className="lg:col-span-8 flex flex-col gap-space-lg">
{/* SECTION 3A: TRENDS OVER TIME */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm">
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-md text-headline-md text-primary font-bold">
                  Compliance &amp; Disqualification Trends Over Time
                </h2>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                  12-Week Rolling
                </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Dynamic intake, automated envelope clearance, algorithmic rejections, and vigilance manual holds across Q2.
              </p>
</div>
{/* Legend */}
<div className="flex flex-wrap items-center gap-3">
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-primary"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Bids Ingested</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Passed</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-error"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Disqualified</span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Manual Holds</span>
</div>
</div>
</div>
{/* Inflection Point Callout Banner */}
<div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between my-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">info</span>
<span className="font-body-sm text-body-sm text-on-surface">
<strong className="font-semibold text-primary">Week 8 Inflection Marker:</strong> Disqualifications spiked +34% due to automated DoE GFR 144(xi) border declaration parser rollout.
              </span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-tabular-num">Circular OM F.No.6/18/2019-PPD</span>
</div>
{/* Chart Graphic (Tailwind Native Stacked / Stepped Graph + SVG Overlay) */}
<div className="relative w-full h-64 mt-2">
{/* Gridlines */}
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
<div className="w-full h-px bg-surface-container-highest"></div>
<div className="w-full h-px bg-surface-container-highest"></div>
<div className="w-full h-px bg-surface-container-highest"></div>
<div className="w-full h-px bg-surface-container-highest"></div>
<div className="w-full h-px bg-surface-container-highest"></div>
</div>
{/* SVG Multi-Series Curves */}
<svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 700 240">
<defs>
<linearGradient id="primaryArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#00236f" stopOpacity="0.18"></stop>
<stop offset="100%" stopColor="#00236f" stopOpacity="0.0"></stop>
</linearGradient>
<linearGradient id="secondaryArea" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stopColor="#006c49" stopOpacity="0.25"></stop>
<stop offset="100%" stopColor="#006c49" stopOpacity="0.0"></stop>
</linearGradient>
</defs>
{/* Ingested bids area */}
<path d="M0,190 L58,180 L116,165 L175,170 L233,145 L291,130 L350,110 L408,80 L466,75 L525,85 L583,60 L641,45 L700,40 L700,240 L0,240 Z" fill="url(#primaryArea)"></path>
<path d="M0,190 L58,180 L116,165 L175,170 L233,145 L291,130 L350,110 L408,80 L466,75 L525,85 L583,60 L641,45 L700,40" fill="none" stroke="#00236f" strokeWidth="2.5"></path>
{/* Approved technical envelope */}
<path d="M0,210 L58,200 L116,190 L175,192 L233,170 L291,160 L350,145 L408,135 L466,120 L525,128 L583,105 L641,90 L700,82 L700,240 L0,240 Z" fill="url(#secondaryArea)"></path>
<path d="M0,210 L58,200 L116,190 L175,192 L233,170 L291,160 L350,145 L408,135 L466,120 L525,128 L583,105 L641,90 L700,82" fill="none" stroke="#006c49" strokeWidth="2.5"></path>
{/* Disqualified / Defective Line (spikes at week 8 = x:466) */}
<path d="M0,225 L58,220 L116,215 L175,218 L233,215 L291,210 L350,205 L408,185 L466,195 L525,197 L583,195 L641,195 L700,198" fill="none" stroke="#ba1a1a" strokeDasharray="4 2" strokeWidth="2"></path>
{/* Manual Overrides Line */}
<path d="M0,235 L58,235 L116,234 L175,236 L233,235 L291,230 L350,232 L408,225 L466,220 L525,224 L583,222 L641,225 L700,226" fill="none" stroke="#ffb95f" strokeWidth="1.8"></path>
{/* Inflection Line at Week 8 */}
<line stroke="#ba1a1a" strokeDasharray="3 3" strokeWidth="1" x1="466" x2="466" y1="20" y2="230"></line>
<circle cx="466" cy="75" fill="#00236f" r="4"></circle>
<circle cx="466" cy="120" fill="#006c49" r="4"></circle>
<circle cx="466" cy="195" fill="#ba1a1a" r="4"></circle>
</svg>
{/* X Axis Labels */}
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant pt-2">
<span>W01</span>
<span>W02</span>
<span>W03</span>
<span>W04</span>
<span>W05</span>
<span>W06</span>
<span>W07</span>
<span className="font-bold text-error">W08 (OM Tighten)</span>
<span>W09</span>
<span>W10</span>
<span>W11</span>
<span>W12</span>
</div>
</div>
{/* Bottom Week Metric Strip */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-md mt-space-md border-t border-surface-container-high">
<div className="bg-surface-container-low p-2 rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant block">W12 Total Intake</span>
<span className="font-headline-md text-headline-md font-bold text-primary font-tabular-num">218 Bids</span>
</div>
<div className="bg-surface-container-low p-2 rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant block">W12 Compliant</span>
<span className="font-headline-md text-headline-md font-bold text-secondary font-tabular-num">179 (82.1%)</span>
</div>
<div className="bg-surface-container-low p-2 rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant block">W12 Auto-Rejected</span>
<span className="font-headline-md text-headline-md font-bold text-error font-tabular-num">35 (16.0%)</span>
</div>
<div className="bg-surface-container-low p-2 rounded-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant block">W12 Manual Override</span>
<span className="font-headline-md text-headline-md font-bold text-tertiary font-tabular-num">4 (1.8%)</span>
</div>
</div>
</div>
{/* SECTION 3B: COMMON DISQUALIFICATION ROOT-CAUSE BREAKDOWN */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm">
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-md text-headline-md text-primary font-bold">
                  Common Disqualification &amp; Failure Root-Cause Breakdown
                </h2>
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                  1,030 Total Defects Logged
                </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Parametric root cause analysis from automated sovereign database cross-referencing and OCR document diffing.
              </p>
</div>
<button className="font-label-md text-label-md text-primary hover:text-primary-container font-semibold flex items-center gap-1 self-start sm:self-center">
<span>View Full Failure Taxonomy</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
{/* Root Causes Bars Stack */}
<div className="flex flex-col gap-space-sm mt-space-sm">
{/* Item 1 */}
<div className="bg-surface-container-low p-space-sm rounded-xl">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-md bg-error text-on-error flex items-center justify-center font-label-sm text-label-sm font-bold">1</span>
<span className="font-title-sm text-title-sm font-semibold text-on-surface">EPFO Active Contributor &amp; ECR Mismatch</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px] uppercase">Labor Law GFR 173</span>
</div>
<div className="flex items-center gap-3">
<span className="font-tabular-num text-tabular-num font-bold text-error">59.6%</span>
<span className="font-tabular-num text-tabular-num text-on-surface-variant">(614 bids)</span>
<button className="text-primary hover:text-primary-container font-label-sm text-label-sm font-semibold" type="button">Inspect Cohort</button>
</div>
</div>
<div className="w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden">
<div className="bg-error h-full rounded-full" style={{"width": "59.6%"}}></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                Discrepancy between declared EPF employee strength and last 6 months electronic challan cum return (ECR) filing records on Shram Suvidha.
              </p>
</div>
{/* Item 2 */}
<div className="bg-surface-container-low p-space-sm rounded-xl">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-md bg-tertiary-container text-on-tertiary flex items-center justify-center font-label-sm text-label-sm font-bold">2</span>
<span className="font-title-sm text-title-sm font-semibold text-on-surface">GFR Rule 144(xi) Land Border &amp; Beneficial Ownership Defect</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px] uppercase">National Security</span>
</div>
<div className="flex items-center gap-3">
<span className="font-tabular-num text-tabular-num font-bold text-tertiary-container">22.4%</span>
<span className="font-tabular-num text-tabular-num text-on-surface-variant">(231 bids)</span>
<button className="text-primary hover:text-primary-container font-label-sm text-label-sm font-semibold" type="button">Inspect Cohort</button>
</div>
</div>
<div className="w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden">
<div className="bg-tertiary-container h-full rounded-full" style={{"width": "22.4%"}}></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                Missing valid Class-1 DPIIT registration certificate for ultimate beneficial ownership (UBO) tied to shared land-border jurisdiction.
              </p>
</div>
{/* Item 3 */}
<div className="bg-surface-container-low p-space-sm rounded-xl">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-md bg-primary-container text-on-primary flex items-center justify-center font-label-sm text-label-sm font-bold">3</span>
<span className="font-title-sm text-title-sm font-semibold text-on-surface">ICAI UDIN &amp; CA Turnover Certificate Invalid / Unverified</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px] uppercase">Financial Rigor</span>
</div>
<div className="flex items-center gap-3">
<span className="font-tabular-num text-tabular-num font-bold text-primary">18.2%</span>
<span className="font-tabular-num text-tabular-num text-on-surface-variant">(187 bids)</span>
<button className="text-primary hover:text-primary-container font-label-sm text-label-sm font-semibold" type="button">Inspect Cohort</button>
</div>
</div>
<div className="w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width": "18.2%"}}></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                UDIN not generated within statutory 15 days, expired practitioner license, or certificate figures mismatching Form 3CD schedules.
              </p>
</div>
{/* Item 4 */}
<div className="bg-surface-container-low p-space-sm rounded-xl">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-md bg-surface-container-highest text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold">4</span>
<span className="font-title-sm text-title-sm font-semibold text-on-surface">MSME Udyam Activity Code Ineligibility</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px] uppercase">Preferential Quota</span>
</div>
<div className="flex items-center gap-3">
<span className="font-tabular-num text-tabular-num font-bold text-on-surface">14.5%</span>
<span className="font-tabular-num text-tabular-num text-on-surface-variant">(149 bids)</span>
<button className="text-primary hover:text-primary-container font-label-sm text-label-sm font-semibold" type="button">Inspect Cohort</button>
</div>
</div>
<div className="w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden">
<div className="bg-outline h-full rounded-full" style={{"width": "14.5%"}}></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                Manufacturing exemptions &amp; EMD waiver claimed under Trader / Service NIC sub-categories contrary to tender specifications.
              </p>
</div>
{/* Item 5 */}
<div className="bg-surface-container-low p-space-sm rounded-xl">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
<div className="flex items-center gap-2">
<span className="w-6 h-6 rounded-md bg-surface-container-highest text-on-surface flex items-center justify-center font-label-sm text-label-sm font-bold">5</span>
<span className="font-title-sm text-title-sm font-semibold text-on-surface">GSTN 3-Year Return Inconsistency / Inactive Status</span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-[10px] uppercase">Tax Standing</span>
</div>
<div className="flex items-center gap-3">
<span className="font-tabular-num text-tabular-num font-bold text-on-surface">8.1%</span>
<span className="font-tabular-num text-tabular-num text-on-surface-variant">(83 bids)</span>
<button className="text-primary hover:text-primary-container font-label-sm text-label-sm font-semibold" type="button">Inspect Cohort</button>
</div>
</div>
<div className="w-full bg-surface-container-highest h-2.5 rounded-full overflow-hidden">
<div className="bg-outline-variant h-full rounded-full" style={{"width": "8.1%"}}></div>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                Frequent GSTR-3B default notices in past 12 tax periods or suspended registration state at time of technical envelope unsealing.
              </p>
</div>
</div>
</div>
</div>
{/* RIGHT COLUMN (NARROW / 4 COLS) */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/* SECTION 3C: AI PIPELINE VELOCITY & SLA PERFORMANCE */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col">
<div className="flex items-center justify-between pb-space-sm">
<div>
<h2 className="font-headline-md text-headline-md text-primary font-bold">
                AI Engine Velocity &amp; SLA
              </h2>
<span className="font-label-sm text-label-sm text-on-surface-variant block">Sub-Envelope Pipeline Latency</span>
</div>
<span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" title="Sovereign Cluster Active"></span>
</div>
{/* Benchmark Comparison Visual */}
<div className="bg-surface-container-low p-space-sm rounded-xl my-space-xs flex flex-col gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Evaluation Speedup Factor</span>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface-variant">Manual TEC Baseline</span>
<span className="font-title-sm text-title-sm font-bold text-on-surface">14 Calendar Days</span>
</div>
<span className="material-symbols-outlined text-primary text-[24px]">electric_bolt</span>
<div className="flex flex-col text-right">
<span className="font-body-sm text-body-sm text-secondary font-semibold">Pragati AI Suite</span>
<span className="font-title-sm text-title-sm font-bold text-secondary">3.4 Minutes</span>
</div>
</div>
<div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden mt-1">
<div className="bg-secondary h-full rounded-full" style={{"width": "98%"}}></div>
</div>
</div>
{/* Processing Time Distribution */}
<div className="mt-space-sm flex flex-col gap-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Pipeline Tier Distribution</span>
{/* Tier 1 */}
<div className="p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-md text-label-md font-bold text-on-surface">Fast-Track Automated</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">(&lt; 1 min)</span>
</div>
<span className="font-tabular-num text-tabular-num font-bold text-secondary">64%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                All 6 sovereign APIs verified clean without manual intervention. OCR confidence score &gt; 98.4%.
              </p>
</div>
{/* Tier 2 */}
<div className="p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-label-md text-label-md font-bold text-on-surface">Standard Parsing</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">(1 - 5 min)</span>
</div>
<span className="font-tabular-num text-tabular-num font-bold text-primary">28%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Multi-entity holding structures and foreign joint-venture balance sheet normalization.
              </p>
</div>
{/* Tier 3 */}
<div className="p-2.5 rounded-lg bg-surface-container-low">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-tertiary-container"></span>
<span className="font-label-md text-label-md font-bold text-on-surface">Human-in-the-Loop</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">(&gt; 15 min)</span>
</div>
<span className="font-tabular-num text-tabular-num font-bold text-tertiary-container">8%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Flagged for forensic scan ambiguity, CA seal stamp pixelation, or manual vigilance officer hold.
              </p>
</div>
</div>
</div>
{/* SECTION 3D: SYSTEMIC VIGILANCE ALERT & COLLUSION WATCHLIST */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col flex-1">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-error text-[22px]">policy</span>
<h2 className="font-headline-md text-headline-md text-error font-bold">
                Collusion Watchlist
              </h2>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold uppercase">
              3 Active Cases
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
            Algorithmic cartelization and common-origin cluster detection engine.
          </p>
{/* Alert Feed Cards */}
<div className="flex flex-col gap-space-sm overflow-y-auto max-h-[460px] pr-1">
{/* Alert 1 */}
<div className="p-space-sm rounded-xl bg-error-container/20 flex flex-col gap-1.5">
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm font-bold text-error uppercase tracking-wider">
                  Cluster Pattern #CP-104
                </span>
<span className="px-1.5 py-0.2 rounded bg-error text-on-error font-label-sm text-[10px] font-semibold uppercase">
                  High Severity
                </span>
</div>
<p className="font-title-sm text-title-sm font-semibold text-on-surface leading-snug">
                Identical CA UDIN Stamp Raster Across Ministries
              </p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                4 bidders in MoD &amp; MoHFW tenders utilize exact pixel-level CA seal artifacts and identical metadata signatures.
              </p>
<div className="flex items-center justify-between pt-1 mt-1 text-on-surface-variant font-label-sm text-label-sm">
<span>Entities: 4 Bidders</span>
<button className="text-error hover:underline font-semibold" type="button">Initiate CVC Inquiry →</button>
</div>
</div>
{/* Alert 2 */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1.5">
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm font-bold text-primary uppercase tracking-wider">
                  Geo-Concurrence #GC-088
                </span>
<span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-primary font-label-sm text-[10px] font-semibold uppercase">
                  CVC Notice Drafted
                </span>
</div>
<p className="font-title-sm text-title-sm font-semibold text-on-surface leading-snug">
                Common Unit Address: Noida Sector 62
              </p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                3 independent bidders for Tender GEM/2026/B/489201 share physical premise and common authorized signatory phone prefix.
              </p>
<div className="flex items-center justify-between pt-1 mt-1 text-on-surface-variant font-label-sm text-label-sm">
<span>Tender: GEM/2026/B/489201</span>
<button className="text-primary hover:underline font-semibold" type="button">Review Dossier →</button>
</div>
</div>
{/* Alert 3 */}
<div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1.5">
<div className="flex items-start justify-between">
<span className="font-label-sm text-label-sm font-bold text-tertiary uppercase tracking-wider">
                  Fiscal Anomaly #FA-512
                </span>
<span className="px-1.5 py-0.2 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] font-semibold uppercase">
                  CAG Team Review
                </span>
</div>
<p className="font-title-sm text-title-sm font-semibold text-on-surface leading-snug">
                Sudden 14x Udyam Turnover Spike in 45 Days
              </p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Bidder revised MSME turnover classification exactly 45 days prior to high-value defense procurement release date.
              </p>
<div className="flex items-center justify-between pt-1 mt-1 text-on-surface-variant font-label-sm text-label-sm">
<span>CIN: U74999DL2018PTC</span>
<button className="text-primary hover:underline font-semibold" type="button">Inspect Tax Ledger →</button>
</div>
</div>
</div>
</div>
</div>
</div>
{/* SECTION 4: SECTORAL / MINISTRY COMPLIANCE MATRIX (FULL WIDTH BOTTOM TABLE) */}
<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-md">
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-md text-headline-md text-primary font-bold">
              Cross-Ministry Compliance &amp; Scrutiny Matrix
            </h2>
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase font-semibold">
              Section 4(1)(b) Disclosure Standard
            </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Aggregated institutional compliance ratings, bottleneck indicators, and statutory actions across primary central procuring authorities.
          </p>
</div>
<div className="flex items-center gap-space-xs">
<div className="relative">
<span className="material-symbols-outlined absolute left-2.5 top-2 text-[18px] text-on-surface-variant">filter_alt</span>
<input className="pl-8 pr-3 py-1.5 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface outline-none w-64" placeholder="Filter ministries or bottlenecks..." type="text"/>
</div>
<button className="p-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Reload Matrix" type="button">
<span className="material-symbols-outlined text-[20px]">refresh</span>
</button>
</div>
</div>
{/* High Density Table Container */}
<div className="w-full overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
<th className="py-3 px-space-sm">Ministry / Organization</th>
<th className="py-3 px-space-sm text-center">Active Tenders</th>
<th className="py-3 px-space-sm text-center">Bids Screened</th>
<th className="py-3 px-space-sm">Clean Pass %</th>
<th className="py-3 px-space-sm">Primary Bottleneck Driver</th>
<th className="py-3 px-space-sm text-center">Avg Velocity</th>
<th className="py-3 px-space-sm text-center">Vigilance Holds</th>
<th className="py-3 px-space-sm text-right">Statutory Action</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm divide-y divide-surface-container-high">
{/* Row 1 */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3.5 px-space-sm font-title-sm text-title-sm font-semibold text-on-surface">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Ministry of Heavy Industries</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant block pl-4">Automotive &amp; Capital Goods Div</span>
</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num font-semibold">28</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num font-semibold">342</td>
<td className="py-3.5 px-space-sm">
<div className="flex items-center gap-2">
<span className="font-tabular-num text-tabular-num font-bold text-secondary">82.1%</span>
<div className="w-16 bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{"width": "82.1%"}}></div>
</div>
</div>
</td>
<td className="py-3.5 px-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                  EPFO Challan Gap (41%)
                </span>
</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num">2.8 min</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-semibold">2 Flags</span>
</td>
<td className="py-3.5 px-space-sm text-right">
<button className="px-3 py-1 rounded bg-surface-container-high hover:bg-primary hover:text-on-primary font-label-sm text-label-sm font-semibold text-primary transition-colors" type="button">
                  Review Dossier
                </button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3.5 px-space-sm font-title-sm text-title-sm font-semibold text-on-surface">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span>Ministry of Health &amp; Family Welfare</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant block pl-4">Medical Devices &amp; AIIMS Procurements</span>
</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num font-semibold">42</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num font-semibold">518</td>
<td className="py-3.5 px-space-sm">
<div className="flex items-center gap-2">
<span className="font-tabular-num text-tabular-num font-bold text-error">74.5%</span>
<div className="w-16 bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-error h-full" style={{"width": "74.5%"}}></div>
</div>
</div>
</td>
<td className="py-3.5 px-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                  ICAI UDIN Expiry (38%)
                </span>
</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num">3.9 min</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold">11 Flags</span>
</td>
<td className="py-3.5 px-space-sm text-right">
<button className="px-3 py-1 rounded bg-surface-container-high hover:bg-primary hover:text-on-primary font-label-sm text-label-sm font-semibold text-primary transition-colors" type="button">
                  Review Dossier
                </button>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3.5 px-space-sm font-title-sm text-title-sm font-semibold text-on-surface">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Ministry of Defence (DDP)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant block pl-4">Ordnance &amp; Strategic Avionics Wing</span>
</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num font-semibold">35</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num font-semibold">460</td>
<td className="py-3.5 px-space-sm">
<div className="flex items-center gap-2">
<span className="font-tabular-num text-tabular-num font-bold text-secondary">86.2%</span>
<div className="w-16 bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{"width": "86.2%"}}></div>
</div>
</div>
</td>
<td className="py-3.5 px-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary-container"></span>
                  GFR 144(xi) Border Check (52%)
                </span>
</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num">4.1 min</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num">
<span className="px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-semibold">8 Flags</span>
</td>
<td className="py-3.5 px-space-sm text-right">
<button className="px-3 py-1 rounded bg-surface-container-high hover:bg-primary hover:text-on-primary font-label-sm text-label-sm font-semibold text-primary transition-colors" type="button">
                  Review Dossier
                </button>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3.5 px-space-sm font-title-sm text-title-sm font-semibold text-on-surface">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span>Ministry of Railways (CRIS)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant block pl-4">Signaling &amp; Telecom Infra Grid</span>
</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num font-semibold">24</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num font-semibold">312</td>
<td className="py-3.5 px-space-sm">
<div className="flex items-center gap-2">
<span className="font-tabular-num text-tabular-num font-bold text-error">69.8%</span>
<div className="w-16 bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-error h-full" style={{"width": "69.8%"}}></div>
</div>
</div>
</td>
<td className="py-3.5 px-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                  EPFO / Subcontracting (46%)
                </span>
</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num">3.2 min</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num">
<span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-semibold">9 Flags</span>
</td>
<td className="py-3.5 px-space-sm text-right">
<button className="px-3 py-1 rounded bg-surface-container-high hover:bg-primary hover:text-on-primary font-label-sm text-label-sm font-semibold text-primary transition-colors" type="button">
                  Review Dossier
                </button>
</td>
</tr>
{/* Row 5 */}
<tr className="hover:bg-surface-container-low/60 transition-colors">
<td className="py-3.5 px-space-sm font-title-sm text-title-sm font-semibold text-on-surface">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>Ministry of Power &amp; New Energy</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant block pl-4">Solar EPC &amp; Grid Storage Contracts</span>
</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num font-semibold">19</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num font-semibold">210</td>
<td className="py-3.5 px-space-sm">
<div className="flex items-center gap-2">
<span className="font-tabular-num text-tabular-num font-bold text-secondary">81.4%</span>
<div className="w-16 bg-surface-container-high h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{"width": "81.4%"}}></div>
</div>
</div>
</td>
<td className="py-3.5 px-space-sm">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                  Udyam MSME NIC Code (29%)
                </span>
</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num">2.9 min</td>
<td className="py-3.5 px-space-sm text-center font-tabular-num text-tabular-num">
<span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-semibold">4 Flags</span>
</td>
<td className="py-3.5 px-space-sm text-right">
<button className="px-3 py-1 rounded bg-surface-container-high hover:bg-primary hover:text-on-primary font-label-sm text-label-sm font-semibold text-primary transition-colors" type="button">
                  Review Dossier
                </button>
</td>
</tr>
</tbody>
</table>
</div>
{/* Table Footer / Summary Bar */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-md mt-space-md border-t border-surface-container-high">
<span className="font-body-sm text-body-sm text-on-surface-variant">
          Showing 5 of 22 active line ministries. All metrics update synchronously via NIC Gateway.
        </span>
<div className="flex items-center gap-2">
<button className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high" type="button">Previous</button>
<span className="font-label-sm text-label-sm text-primary font-bold px-2">Page 1 of 5</span>
<button className="px-2.5 py-1 rounded bg-surface-container-low text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high" type="button">Next</button>
</div>
</div>
</div>
{/* STATUTORY CITATION & AUDIT LEDGER FOOTER */}
<footer className="bg-surface-container-low p-space-md rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md text-on-surface-variant">
<div className="flex items-start gap-space-sm max-w-4xl">
<span className="material-symbols-outlined text-primary text-[24px] shrink-0 mt-0.5">verified_user</span>
<div>
<span className="font-label-md text-label-md font-bold text-on-surface block">
            Statutory Governance Citation &amp; Evidence Trail
          </span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            Compiled under Section 4(1)(b) Right to Information Act 2005, CVC Vigilance Framework 2021, and Rule 173 of General Financial Rules (GFR). Analytics rendered from cryptographic append-only audit ledgers. Tamper-evidence verified on MeitY MeghRaj Node.
          </p>
</div>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-space-md shrink-0 w-full md:w-auto justify-between md:justify-end">
<div className="flex flex-col text-left md:text-right">
<span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center md:justify-end gap-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
            Ledger: Cryptographically Synced
          </span>
<span className="font-tabular-num text-tabular-num text-[11px] text-on-surface-variant font-mono">
            Export Hash: #CVC-ANL-2026-Q2-88B1
          </span>
</div>
<button className="flex items-center gap-1.5 px-space-sm py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-primary font-label-md text-label-md font-semibold shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[16px]">fingerprint</span>
          Verify SHA-256 Ledger
        </button>
</div>
</footer>
</div>
</div></main>
    </div>
  );
}
