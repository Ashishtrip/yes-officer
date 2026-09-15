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
{/* TOP STATUTORY NOTICE & FORENSIC INVESTIGATION META-BAR */}
<section className="bg-surface-container-lowest px-layout-gutter py-space-md shadow-sm">
<div className="max-w-[1720px] mx-auto flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
{/* Breadcrumb & Case Identifier */}
<div className="flex flex-col gap-space-2xs min-w-0">
<div className="flex items-center gap-space-xs text-on-surface-variant font-body-sm text-body-sm flex-wrap">
<span className="hover:text-primary cursor-pointer transition-colors">Portal Desk</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-primary cursor-pointer transition-colors">Vigilance &amp; Analytics</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="font-label-md text-label-md text-primary bg-surface-container-high px-space-xs py-0.5 rounded">
            Forensic Integrity &amp; Collusion Investigation Workbench
          </span>
<span className="font-label-sm text-label-sm text-error bg-error-container/30 px-space-xs py-0.5 rounded font-semibold uppercase ml-space-xs">
            TDD §7 &amp; §8 Enforced
          </span>
</div>
<div className="flex items-center gap-space-md flex-wrap mt-space-2xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-error text-[22px]">gavel</span>
<span className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
              Case #CVC-FR-2026-89201
            </span>
</div>
<span className="h-4 w-px bg-surface-container-high"></span>
<div className="flex items-center gap-space-xs">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Tender Ref:</span>
<span className="font-label-md text-label-md text-primary font-bold">GEM/2026/B/489201</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">(High-Precision Biomedical &amp; Diagnostic Equipment)</span>
</div>
<span className="h-4 w-px bg-surface-container-high"></span>
<div className="flex items-center gap-space-xs bg-surface-container px-space-sm py-1 rounded">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-on-surface">MeitY Forensic Graph Engine v4.2 Active</span>
<span className="text-on-surface-variant text-[11px] font-tabular-num">| Vault #EVD-4892-01</span>
</div>
</div>
</div>
{/* Action Cluster */}
<div className="flex items-center gap-space-sm flex-wrap shrink-0">
<button className="bg-surface-container-low hover:bg-surface-container text-on-surface px-space-md py-space-sm rounded font-label-md text-label-md flex items-center gap-space-xs transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-tertiary">cell_tower</span>
<span>Broadcast to Inter-Ministry Mesh</span>
</button>
<button className="bg-surface-container-low hover:bg-surface-container text-on-surface px-space-md py-space-sm rounded font-label-md text-label-md flex items-center gap-space-xs transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-error">notification_important</span>
<span>Escalate to CVO</span>
</button>
<button className="bg-primary hover:bg-primary-container text-on-primary px-space-md py-space-sm rounded font-label-md text-label-md flex items-center gap-space-xs transition-colors shadow-md" type="button">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Export Statutory Dossier (Class-3 DSC)</span>
</button>
</div>
</div>
</section>
{/* 1. EXECUTIVE FORENSIC THREAT & CARTELIZATION RISK RIBBON */}
<section className="px-layout-gutter py-space-md">
<div className="max-w-[1720px] mx-auto bg-surface-container-lowest rounded-xl shadow-md p-space-lg overflow-hidden relative">
<div className="absolute -right-16 -top-16 w-64 h-64 bg-error/5 rounded-full pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-lg relative z-10">
{/* Metric 1: Cartel Severity */}
<div className="bg-error-container/20 rounded-xl p-space-md flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-error-container uppercase font-bold tracking-wider">Cluster Risk Level</span>
<span className="material-symbols-outlined text-error text-[20px]">warning</span>
</div>
<div className="my-space-xs">
<div className="font-headline-md text-headline-md font-bold text-error leading-tight">
              HIGH CRITICALITY
            </div>
<p className="font-label-sm text-label-sm text-on-error-container mt-1 font-semibold uppercase tracking-wide">
              Confirmed Cartel Syndicate
            </p>
</div>
<div className="flex items-center gap-space-xs text-[11px] font-label-sm text-on-surface-variant bg-surface-container-lowest/80 px-2 py-1 rounded">
<span className="material-symbols-outlined text-[14px] text-error">balance</span>
<span>Sec 3(3) Competition Act Invoked</span>
</div>
</div>
{/* Metric 2: Suspect Entities */}
<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Suspect Entities</span>
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">hub</span>
</div>
<div className="my-space-xs">
<div className="font-display-lg text-display-lg font-bold text-on-surface leading-none">
              4 <span className="font-title-sm text-title-sm text-on-surface-variant font-normal">/ 18 Bidders</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              ABC Ind, Apex Heavy, Horizon Bio, MedTech
            </p>
</div>
<div className="flex items-center gap-space-xs text-[11px] font-label-sm text-error bg-surface-container-lowest px-2 py-1 rounded">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
<span>22.2% Bid Share Contamination</span>
</div>
</div>
{/* Metric 3: Forensic Vector Anomalies */}
<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Forensic Flags</span>
<span className="material-symbols-outlined text-tertiary text-[20px]">fingerprint</span>
</div>
<div className="my-space-xs">
<div className="font-display-lg text-display-lg font-bold text-tertiary leading-none">
              6 <span className="font-title-sm text-title-sm text-tertiary-container font-semibold">Anomalies</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              UDIN Stamp Vector, IP Concurrence, MCA DIN
            </p>
</div>
<div className="flex items-center gap-space-xs text-[11px] font-label-sm text-tertiary bg-surface-container-lowest px-2 py-1 rounded">
<span className="material-symbols-outlined text-[14px]">pattern</span>
<span>Multi-Modal Deep Neural Verification</span>
</div>
</div>
{/* Metric 4: Collusion Exposure */}
<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Collusion Exposure</span>
<span className="material-symbols-outlined text-primary text-[20px]">currency_rupee</span>
</div>
<div className="my-space-xs">
<div className="font-display-lg text-display-lg font-bold text-primary font-tabular-num leading-none">
              ₹48.50 <span className="font-title-sm text-title-sm text-primary font-medium">Cr</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Total Tender Procurement Outlay at Risk
            </p>
</div>
<div className="flex items-center gap-space-xs text-[11px] font-label-sm text-primary bg-surface-container-lowest px-2 py-1 rounded">
<span className="material-symbols-outlined text-[14px]">shield</span>
<span>EMD Forfeiture Pool: ₹97.00 Lakh</span>
</div>
</div>
{/* Metric 5: Evidence Hash Integrity */}
<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider">Merkle Vault Integrity</span>
<span className="material-symbols-outlined text-secondary text-[20px]">lock</span>
</div>
<div className="my-space-xs">
<div className="font-display-lg text-display-lg font-bold text-secondary leading-none">
              100%
            </div>
<p className="font-label-sm text-label-sm text-on-surface-variant font-mono mt-1 truncate" title="SHA-256: 8f492b...a0914e">
              SHA-256: 8f492b4a...90e3
            </p>
</div>
<div className="flex items-center gap-space-xs text-[11px] font-label-sm text-secondary bg-surface-container-lowest px-2 py-1 rounded">
<span className="material-symbols-outlined text-[14px]">verified_user</span>
<span>Sec 65B Indian Evidence Act Valid</span>
</div>
</div>
</div>
</div>
</section>
{/* MAIN WORKBENCH GRID: SPLIT SCREEN (65% EVIDENCE/GRAPH vs 35% CVC ACTION CONSOLE) */}
<section className="px-layout-gutter pb-space-2xl">
<div className="max-w-[1720px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
{/* LEFT 8-COL: NETWORK GRAPH & EVIDENCE LEDGER */}
<div className="xl:col-span-8 flex flex-col gap-space-lg">
{/* 2. BIDDER FORENSIC NETWORK & ENTITY-RELATIONSHIP GRAPH */}
<div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col">
<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md mb-space-md bg-surface-container-lowest">
<div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">bubble_chart</span>
<h2 className="font-headline-md text-headline-md font-bold text-on-surface">
                  Cartel Graph Topology &amp; Entity-Relationship Mesh
                </h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Multi-layer cross-entity telemetry generated from GeM API, MCA21 Ministry of Corporate Affairs, and CERT-In DNS logs.
              </p>
</div>
{/* Graph Legend */}
<div className="flex items-center gap-space-md mt-space-sm sm:mt-0 flex-wrap">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-3 h-0.5 bg-error"></span>
<span>Common IP Subnet</span>
</div>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-3 h-0.5 bg-tertiary-fixed-dim"></span>
<span>Shared MCA DIN</span>
</div>
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-3 h-0.5 bg-primary"></span>
<span>CA UDIN Pixel Stamp Duplicate</span>
</div>
</div>
</div>
{/* Network Canvas Diagram */}
<div className="relative w-full h-[460px] bg-surface-container-low/50 rounded-xl overflow-hidden p-space-md flex flex-col justify-between">
{/* Ambient Grid Pattern Background SVG */}
<svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid-pattern" patternUnits="userSpaceOnUse" width="40">
<path className="text-on-surface" d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.7"></path>
</pattern>
</defs>
<rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
</svg>
{/* Active Connection Vector SVG Paths */}
<svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
{/* Noida Hub to Bidder A */}
<path className="animate-pulse" d="M 50% 50% L 20% 28%" stroke="#ba1a1a" strokeDasharray="6,4" strokeWidth="2.5"></path>
{/* Noida Hub to Bidder B */}
<path className="animate-pulse" d="M 50% 50% L 80% 28%" stroke="#ba1a1a" strokeDasharray="6,4" strokeWidth="2.5"></path>
{/* Noida Hub to Bidder C */}
<path d="M 50% 50% L 25% 78%" stroke="#ffb95f" strokeWidth="2.5"></path>
{/* Noida Hub to Bidder D */}
<path d="M 50% 50% L 75% 78%" stroke="#00236f" strokeDasharray="3,3" strokeWidth="2"></path>
{/* Direct Subnet Link between Bidder A & Bidder B */}
<path d="M 20% 28% Q 50% 12% 80% 28%" stroke="#ba1a1a" strokeDasharray="4,4" strokeWidth="2.5"></path>
</svg>
{/* Top Row Nodes */}
<div className="flex justify-between items-start z-10 w-full px-space-md">
{/* Node 1: Bidder A */}
<div className="w-64 bg-surface-container-lowest rounded-xl p-space-sm shadow-md transition-transform hover:scale-[1.02] cursor-pointer">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm font-bold text-error uppercase">Bidder A</span>
<span className="bg-error/10 text-error px-1.5 py-0.2 rounded font-label-sm text-[10px]">L1 TENDERER</span>
</div>
<div className="font-title-sm text-title-sm font-bold text-on-surface truncate">ABC Industries Ltd.</div>
<div className="text-[11px] font-body-sm text-on-surface-variant mt-1 flex flex-col gap-0.5">
<span className="flex items-center gap-1 font-mono text-[10px]">
<span className="material-symbols-outlined text-[13px] text-error">wifi_tethering</span>
                    IP: 103.21.144.12 • 14:22 IST
                  </span>
<span className="text-on-surface-variant font-mono text-[10px]">DIN: 08942104 (Sunil Varma)</span>
</div>
</div>
{/* Top Indicator Badge */}
<div className="hidden sm:flex flex-col items-center bg-surface-container-lowest/90 backdrop-blur px-space-md py-1 rounded-full shadow-sm text-center">
<span className="font-label-sm text-label-sm text-error font-bold tracking-wider uppercase">Concurrence Gap: 360 Seconds</span>
<span className="text-[10px] text-on-surface-variant">2 GeM bids submitted via same Airtel Gateway</span>
</div>
{/* Node 2: Bidder B */}
<div className="w-64 bg-surface-container-lowest rounded-xl p-space-sm shadow-md transition-transform hover:scale-[1.02] cursor-pointer">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm font-bold text-error uppercase">Bidder B</span>
<span className="bg-surface-container-high text-on-surface-variant px-1.5 py-0.2 rounded font-label-sm text-[10px]">L2 TENDERER</span>
</div>
<div className="font-title-sm text-title-sm font-bold text-on-surface truncate">Global Rail Dynamics</div>
<div className="text-[11px] font-body-sm text-on-surface-variant mt-1 flex flex-col gap-0.5">
<span className="flex items-center gap-1 font-mono text-[10px] text-error font-bold">
<span className="material-symbols-outlined text-[13px]">wifi_tethering</span>
                    IP: 103.21.144.12 • 14:28 IST
                  </span>
<span className="text-on-surface-variant font-mono text-[10px]">DIN: 08942104 (Cross Holding)</span>
</div>
</div>
</div>
{/* Central Hub Node: Secretarial / Physical Synthesis */}
<div className="flex justify-center items-center z-10 w-full my-auto">
<div className="max-w-md bg-surface-container-lowest rounded-xl p-space-md shadow-xl text-center relative">
<div className="w-10 h-10 rounded-full bg-error text-on-error flex items-center justify-center mx-auto -mt-8 shadow-md">
<span className="material-symbols-outlined text-[20px]">corporate_fare</span>
</div>
<div className="font-label-sm text-label-sm font-bold text-error uppercase tracking-widest mt-1">
                  Synthetic Front Entity Hub
                </div>
<div className="font-title-sm text-title-sm font-bold text-on-surface mt-0.5">
                  Shared Secretarial &amp; Operational Workspace
                </div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                  Plot C-48, Sector 62, Noida, Gautam Buddha Nagar, UP 201309
                </div>
<div className="flex items-center justify-center gap-space-sm mt-space-sm text-[11px] font-label-sm flex-wrap">
<span className="bg-error-container/40 text-on-error-container px-2 py-0.5 rounded font-mono">
                    Common Lease Deed #UP-NOI-88192
                  </span>
<span className="bg-surface-container-high text-on-surface px-2 py-0.5 rounded">
                    MCA21 Registered Office Match
                  </span>
</div>
</div>
</div>
{/* Bottom Row Nodes */}
<div className="flex justify-between items-end z-10 w-full px-space-md">
{/* Node 3: Bidder C */}
<div className="w-64 bg-surface-container-lowest rounded-xl p-space-sm shadow-md transition-transform hover:scale-[1.02] cursor-pointer">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm font-bold text-tertiary uppercase">Bidder C</span>
<span className="bg-surface-container-high text-on-surface-variant px-1.5 py-0.2 rounded font-label-sm text-[10px]">L3 TENDERER</span>
</div>
<div className="font-title-sm text-title-sm font-bold text-on-surface truncate">Horizon Scientific LLP</div>
<div className="text-[11px] font-body-sm text-on-surface-variant mt-1 flex flex-col gap-0.5">
<span className="text-on-surface-variant font-mono text-[10px]">SBI Noida Sector 62 Bank Guarantee</span>
<span className="text-tertiary font-mono text-[10px] font-bold">Identical Signatory DIN 08942104</span>
</div>
</div>
{/* Network Summary Strip */}
<div className="hidden md:flex items-center gap-space-sm bg-surface-container-lowest/95 backdrop-blur px-space-md py-1.5 rounded-lg shadow-sm">
<span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
<div className="text-left font-label-sm text-label-sm text-on-surface">
<span className="font-bold text-primary">NIC GeoIP Bridge:</span> Physical separation &lt; 0 meters (Single office premises)
                </div>
</div>
{/* Node 4: Bidder D */}
<div className="w-64 bg-surface-container-lowest rounded-xl p-space-sm shadow-md transition-transform hover:scale-[1.02] cursor-pointer">
<div className="flex items-center justify-between mb-1">
<span className="font-label-sm text-label-sm font-bold text-primary uppercase">Bidder D</span>
<span className="bg-surface-container-high text-on-surface-variant px-1.5 py-0.2 rounded font-label-sm text-[10px]">COVER BIDDER</span>
</div>
<div className="font-title-sm text-title-sm font-bold text-on-surface truncate">MedTech Consortium</div>
<div className="text-[11px] font-body-sm text-on-surface-variant mt-1 flex flex-col gap-0.5">
<span className="text-primary font-mono text-[10px] font-bold">Duplicate CA UDIN: 24089421B8</span>
<span className="text-on-surface-variant font-mono text-[10px]">Uploaded via Proxy (Mullvad VPN)</span>
</div>
</div>
</div>
</div>
</div>
{/* 3. DEEP-DIVE FORENSIC INSPECTION & EVIDENCE LEDGER */}
<div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col">
<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md mb-space-md">
<div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[22px]">policy</span>
<h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                  Statutory Evidence Dossier &amp; Vector Ledger
                </h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Admissible Court-Ready Electronic Records with Cryptographic Chain of Custody.
              </p>
</div>
<div className="flex items-center gap-space-xs mt-space-sm sm:mt-0">
<span className="font-label-sm text-label-sm text-secondary bg-secondary-container/30 text-on-secondary-container px-space-sm py-1 rounded font-bold">
                Indian Evidence Act §65B Certified
              </span>
</div>
</div>
{/* Ledger Table */}
<div className="overflow-x-auto">
<table className="w-full text-left font-body-sm text-body-sm">
<thead className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<tr>
<th className="py-space-sm px-space-md rounded-l">Forensic Vector &amp; Metadata</th>
<th className="py-space-sm px-space-md">Detection Method</th>
<th className="py-space-sm px-space-md">Cluster Findings</th>
<th className="py-space-sm px-space-md">Evidentiary Value</th>
<th className="py-space-sm px-space-md rounded-r text-right">Verdict</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-high">
{/* Row 1: EXIF & PDF Metadata Chronology */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-md px-space-md align-top">
<div className="font-title-sm text-title-sm font-semibold text-on-surface">
                      PDF Metadata &amp; Chronology
                    </div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      EXIF, Font Subsets, Producer Hashes
                    </div>
<div className="text-[11px] font-mono text-on-surface-variant mt-1">
                      Payload: BoQ_Specs_Signed.pdf
                    </div>
</td>
<td className="py-space-md px-space-md align-top">
<span className="inline-flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded text-[11px] font-label-sm font-semibold text-on-surface">
                      LayoutLMv3 Multi-Modal
                    </span>
<div className="text-[11px] text-on-surface-variant mt-1">
                      Entropy &amp; Compression Scan
                    </div>
</td>
<td className="py-space-md px-space-md align-top max-w-sm">
<p className="text-on-surface text-body-sm leading-relaxed">
                      Author string <span className="font-mono text-error font-bold">&quot;Administrator-HP&quot;</span> and cracked Adobe Acrobat Pro v2024.1 signature identical across Bidder A, B, and D with creation timestamp delta of only <span className="font-bold text-error">14 seconds</span>.
                    </p>
</td>
<td className="py-space-md px-space-md align-top">
<div className="font-label-sm text-label-sm text-on-surface font-semibold">CVC Manual Ch. VIII §4.2</div>
<div className="text-[11px] text-secondary font-semibold mt-0.5">Strict Collusion Inference</div>
</td>
<td className="py-space-md px-space-md align-top text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-error-container/40 text-on-error-container font-label-sm text-label-sm font-bold uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                      COLLUSIVE
                    </span>
</td>
</tr>
{/* Row 2: ICAI CA UDIN Seal */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-md px-space-md align-top">
<div className="font-title-sm text-title-sm font-semibold text-on-surface">
                      ICAI CA UDIN Stamp Vector
                    </div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Auditor Turnover Certification
                    </div>
<div className="text-[11px] font-mono text-on-surface-variant mt-1">
                      Ref UDIN: 24089421B8942E1
                    </div>
</td>
<td className="py-space-md px-space-md align-top">
<span className="inline-flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded text-[11px] font-label-sm font-semibold text-on-surface">
                      ICAI API Bridge v2
                    </span>
<div className="text-[11px] text-on-surface-variant mt-1">
                      Pixel-Vector Congruence
                    </div>
</td>
<td className="py-space-md px-space-md align-top max-w-sm">
<p className="text-on-surface text-body-sm leading-relaxed">
                      Pixel raster comparison yields <span className="font-bold text-error">99.8% geometric congruence</span> to a revoked stamp of CA Pramod &amp; Associates. Identical digital signature raster copied and pasted onto Bidder D submission.
                    </p>
</td>
<td className="py-space-md px-space-md align-top">
<div className="font-label-sm text-label-sm text-on-surface font-semibold">IPC Sec 465 / 471 (Forgery)</div>
<div className="text-[11px] text-error font-semibold mt-0.5">Direct Criminal Fraud</div>
</td>
<td className="py-space-md px-space-md align-top text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-error-container/40 text-on-error-container font-label-sm text-label-sm font-bold uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                      FRAUDULENT
                    </span>
</td>
</tr>
{/* Row 3: Rule 144(xi) Beneficial Ownership */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-md px-space-md align-top">
<div className="font-title-sm text-title-sm font-semibold text-on-surface">
                      Land Border &amp; Beneficial Ownership
                    </div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      GFR Rule 144(xi) Compliance
                    </div>
<div className="text-[11px] font-mono text-on-surface-variant mt-1">
                      MCA21 CIN: U74999DL2018PTC
                    </div>
</td>
<td className="py-space-md px-space-md align-top">
<span className="inline-flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded text-[11px] font-label-sm font-semibold text-on-surface">
                      MCA21 Graph Traversal
                    </span>
<div className="text-[11px] text-on-surface-variant mt-1">
                      Layered Corporate Trace
                    </div>
</td>
<td className="py-space-md px-space-md align-top max-w-sm">
<p className="text-on-surface text-body-sm leading-relaxed">
                      Hidden beneficial holding of <span className="font-bold text-tertiary">42.4% equity</span> routed via Sino-Tech Global Holdings (Hong Kong) without mandatory MHA security clearance or DPIIT registration certificate.
                    </p>
</td>
<td className="py-space-md px-space-md align-top">
<div className="font-label-sm text-label-sm text-on-surface font-semibold">DoE OM F.No.6/18/2019-PPD</div>
<div className="text-[11px] text-tertiary font-semibold mt-0.5">National Security Bar</div>
</td>
<td className="py-space-md px-space-md align-top text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-tertiary-fixed/60 text-tertiary font-label-sm text-label-sm font-bold uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                      NON-COMPLIANT
                    </span>
</td>
</tr>
{/* Row 4: Geo-Spatial & Telemetry Concurrence */}
<tr className="hover:bg-surface-container-low/50 transition-colors">
<td className="py-space-md px-space-md align-top">
<div className="font-title-sm text-title-sm font-semibold text-on-surface">
                      Geo-Spatial &amp; Telemetry Concurrence
                    </div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      Submission TLS &amp; BGP Fingerprints
                    </div>
<div className="text-[11px] font-mono text-on-surface-variant mt-1">
                      Coord: 28.6289° N, 77.3792° E
                    </div>
</td>
<td className="py-space-md px-space-md align-top">
<span className="inline-flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded text-[11px] font-label-sm font-semibold text-on-surface">
                      NIC GeoIP Bridge
                    </span>
<div className="text-[11px] text-on-surface-variant mt-1">
                      Airtel ASN BGP Peering
                    </div>
</td>
<td className="py-space-md px-space-md align-top max-w-sm">
<p className="text-on-surface text-body-sm leading-relaxed">
                      Submissions for Bidder A &amp; Bidder B routed via identical BGP router hops and exact match MAC address gateway hash (<span className="font-mono text-error">4A:89:12:DF:99</span>), proving operational unity.
                    </p>
</td>
<td className="py-space-md px-space-md align-top">
<div className="font-label-sm text-label-sm text-on-surface font-semibold">IT Act 2000 §43A &amp; §65B</div>
<div className="text-[11px] text-secondary font-semibold mt-0.5">Conclusive Digital Proof</div>
</td>
<td className="py-space-md px-space-md align-top text-right">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-error-container/40 text-on-error-container font-label-sm text-label-sm font-bold uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                      COLLUSIVE
                    </span>
</td>
</tr>
</tbody>
</table>
</div>
{/* Micro Explainer Note */}
<div className="mt-space-md pt-space-sm bg-surface-container-low p-space-md rounded-lg flex items-center justify-between flex-wrap gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">encrypted</span>
<span className="font-body-sm text-body-sm text-on-surface">
                All 4 vectors sealed into GeM Immutable Forensic Ledger with Merkle Proof <span className="font-mono font-bold text-primary">#MK-7729-EVD</span>.
              </span>
</div>
<button className="font-label-sm text-label-sm text-primary font-bold hover:underline flex items-center gap-1" type="button">
<span>View Raw JSON Evidence Payloads</span>
<span className="material-symbols-outlined text-[14px]">open_in_new</span>
</button>
</div>
</div>
</div>
{/* RIGHT 4-COL: STATUTORY ENFORCEMENT & CVC ACTION CONSOLE */}
<div className="xl:col-span-4 flex flex-col gap-space-lg">
{/* Action Panel */}
<div className="bg-surface-container-lowest rounded-xl shadow-md p-space-lg flex flex-col justify-between">
<div>
{/* Header */}
<div className="flex items-center justify-between pb-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-error text-[24px]">verified</span>
<div>
<h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                    Statutory Action Console
                  </h3>
<p className="font-label-sm text-label-sm text-on-surface-variant">
                    CVC &amp; CCI Cartelization Enforcement Desk
                  </p>
</div>
</div>
<span className="font-label-sm text-label-sm text-error bg-error-container/40 px-2 py-0.5 rounded font-bold">
                MANDATORY
              </span>
</div>
{/* Recommended Executive Verdict */}
<div className="bg-error-container/20 p-space-md rounded-xl my-space-md">
<div className="flex items-center gap-space-xs text-error font-label-md text-label-md font-bold uppercase">
<span className="material-symbols-outlined text-[18px]">emergency</span>
                Recommended Administrative Order
              </div>
<p className="font-body-sm text-body-sm text-on-surface font-medium mt-space-xs leading-relaxed">
                Targeted Disqualification of 4 Collusive Entities under <span className="font-bold">GeM GTC Clause 4</span> &amp; <span className="font-bold">GFR Rule 175(1)(ii)</span> (Cartelization &amp; Bid Rigging) with forfeiture of EMD and referral to CCI.
              </p>
</div>
{/* Statutory Provisions Reference Card */}
<div className="flex flex-col gap-space-sm mb-space-lg">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                Statutory Citations Invoked
              </span>
<div className="bg-surface-container-low p-space-sm rounded-lg flex items-start gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">menu_book</span>
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">Competition Act 2002 §3(3)</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Presumption of Anti-Competitive Agreement / Bid Rigging.</div>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg flex items-start gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">menu_book</span>
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">CVC Vigilance Manual 2021 Ch. VIII</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Preventive Vigilance &amp; Red Flag Protocols in Public Tenders.</div>
</div>
</div>
<div className="bg-surface-container-low p-space-sm rounded-lg flex items-start gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">menu_book</span>
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">GFR 2017 Rule 175</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Code of Integrity for Public Procurement Violations.</div>
</div>
</div>
</div>
{/* Enforcement Decision Selection Form */}
<div className="flex flex-col gap-space-sm mb-space-lg">
<label className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">
                Select Enforcement Decree:
              </label>
{/* Option 1 (Selected) */}
<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high cursor-pointer transition-colors">
<input defaultChecked className="mt-1 text-primary focus:ring-primary h-4 w-4" name="enforcement_action" type="radio"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">
                    Debar 4 Entities &amp; Forfeit EMD (₹97,00,000)
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">
                    Exclude cartel syndicate, initiate 2-year debarment proceeding on GeM &amp; CPPP.
                  </span>
</div>
</label>
{/* Option 2 */}
<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input className="mt-1 text-primary focus:ring-primary h-4 w-4" name="enforcement_action" type="radio"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">
                    Freeze Price Opening &amp; Full Retender
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">
                    Scrap tender under GFR Rule 173(xxiii) due to poisoned competitive price discovery.
                  </span>
</div>
</label>
{/* Option 3 */}
<label className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<input className="mt-1 text-primary focus:ring-primary h-4 w-4" name="enforcement_action" type="radio"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">
                    Allow Clean Bidders (14) to Proceed
                  </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">
                    Segregate the 4 tainted bids and proceed to technical scoring with uncompromised cohort.
                  </span>
</div>
</label>
</div>
{/* Digital Signature Attestation Block */}
<div className="bg-surface-container-high/60 p-space-md rounded-xl mb-space-lg">
<div className="flex items-center justify-between mb-space-xs">
<span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider">Officer DSC Sealing</span>
<span className="material-symbols-outlined text-primary text-[18px]">verified_user</span>
</div>
<div className="flex items-center gap-space-md">
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-title-sm shrink-0">
                  RK
                </div>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md font-bold text-on-surface truncate">Rajesh Kumar, IAS</span>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Sr. Procurement Officer • NIC Cert #8942-A1</span>
<span className="text-[10px] font-mono text-on-surface-variant mt-0.5">Token: eMudhra Class-3 / Level-A Auth</span>
</div>
</div>
</div>
</div>
{/* Confirm & Dispatch Button */}
<div className="flex flex-col gap-space-xs">
<button className="w-full bg-error hover:bg-on-error-container text-on-error py-space-md px-space-lg rounded-xl font-label-md text-label-md font-bold flex items-center justify-center gap-space-xs transition-colors shadow-lg shadow-error/20" type="button">
<span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
<span>Execute Disqualification &amp; Dispatch Statutory Dossier</span>
</button>
<p className="font-label-sm text-label-sm text-center text-on-surface-variant mt-1">
              Dispatched automatically to CVC portal, CCI cartel cell &amp; GeM Incident Desk.
            </p>
</div>
</div>
{/* Secondary Vigilance Health Widget */}
<div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-9 h-9 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">hub</span>
</div>
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">CVC Vigilance Mesh Node #412</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Sync: Active • Latency 18ms</div>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-secondary/15 px-2 py-0.5 rounded font-bold uppercase">
            HEALTHY
          </span>
</div>
</div>
</div>
</section>
{/* 5. FORENSIC LEGAL AFFIRMATION & CRYPTOGRAPHIC EVIDENCE FOOTER */}
<footer className="bg-surface-container-low px-layout-gutter py-space-lg mt-space-xl">
<div className="max-w-[1720px] mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-body-sm">
<div className="flex items-center gap-space-md flex-wrap">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">security</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Statutory Chain of Custody Maintained</span>
</div>
<span className="hidden md:inline h-4 w-px bg-outline-variant"></span>
<span>National Informatics Centre (NIC) Atomic Time Standard Anchored: 2026-03-31T14:48:22.091Z IST</span>
<span className="hidden md:inline h-4 w-px bg-outline-variant"></span>
<span>Whistle-Blower Protection Act 2014 Safeguards Applied</span>
</div>
<div className="flex items-center gap-space-md">
<span className="text-xs font-mono">HASH: 9a38f7...c41e8</span>
<span className="text-xs text-on-surface font-medium">Government of India • Ministry of Finance</span>
</div>
</div>
</footer>
</div></main>
    </div>
  );
}
