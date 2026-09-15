"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock Bidders Data based on the design
const MOCK_BIDDERS = [
  {
    id: "B-1",
    rank: "L-1",
    name: "Apex Heavy Diagnostic Systems",
    gemId: "GEM-SELLER-992144",
    gstin: "07AAACG9281M1ZK",
    typeClass: "Class-I MII (72%)",
    orgSize: "MSME Medium",
    techScore: 97.0,
    baseQuoted: 349152542,
    gst: 62800000,
    customs: 0,
    amc: 0,
    evaluatedLanded: 412000000,
    variance: 0.0,
    statutoryStatus: "L-1 Benchmark",
    statutorySubtext: "Eligible for 50% minimum allocation",
    colorTheme: "bg-secondary/5",
    rankTheme: "bg-secondary text-on-secondary",
    statutoryTheme: "bg-secondary/15 text-secondary border-secondary/30",
    actionEligible: false,
    auditVerified: true,
  },
  {
    id: "B-2",
    rank: "L-2",
    name: "ABC Industries Ltd",
    gemId: "GEM-SELLER-488210",
    gstin: "27AABCA4419E1Z8",
    typeClass: "Class-I Local (68%)",
    orgSize: "MSME Small",
    techScore: 92.0,
    baseQuoted: 362711864,
    gst: 65200000,
    customs: 0,
    amc: 0,
    evaluatedLanded: 428000000,
    variance: 3.88,
    statutoryStatus: "MII Price Match Eligible",
    statutorySubtext: "Within L-1 + 20% statutory band",
    colorTheme: "bg-primary-fixed/20",
    rankTheme: "bg-primary-fixed text-on-primary-fixed border border-primary/20",
    statutoryTheme:
      "bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary-fixed-dim",
    actionEligible: true,
    auditVerified: true,
  },
  {
    id: "B-3",
    rank: "L-3",
    name: "MedTech Precision Instruments Pvt Ltd",
    gemId: "GEM-SELLER-110294",
    gstin: "29AAACM2219K1ZS",
    typeClass: "Class-I Local (62%)",
    orgSize: "Non-MSME",
    techScore: 89.5,
    baseQuoted: 373728813,
    gst: 67200000,
    customs: 0,
    amc: 0,
    evaluatedLanded: 441000000,
    variance: 7.04,
    statutoryStatus: "Backup MII Rank #2",
    statutorySubtext: "Sequential match if L-2 declines",
    colorTheme: "hover:bg-surface-container-low transition-colors",
    rankTheme: "bg-surface-container text-on-surface-variant",
    statutoryTheme:
      "bg-surface-container text-on-surface-variant border border-outline-variant",
    actionEligible: false,
    auditVerified: false,
  },
  {
    id: "B-4",
    rank: "L-4",
    name: "Bharat Precision Labs Consortium",
    gemId: "GEM-SELLER-672901",
    gstin: "06AABCB9921D1ZB",
    typeClass: "Class-II Local (51%)",
    orgSize: "MSME Micro",
    techScore: 87.5,
    baseQuoted: 385593220,
    gst: 69400000,
    customs: 0,
    amc: 0,
    evaluatedLanded: 455000000,
    variance: 10.44,
    statutoryStatus: "Class-II Ineligible",
    statutorySubtext: "Order Clause 3(a) excludes Class-II",
    colorTheme: "hover:bg-surface-container-low transition-colors",
    rankTheme: "bg-surface-container text-on-surface-variant",
    statutoryTheme:
      "bg-surface-container-low text-on-surface-variant border border-outline-variant/60",
    actionEligible: false,
    auditVerified: false,
  },
  {
    id: "B-5",
    rank: "L-5",
    name: "Global Bio-Diagnostics India Pvt Ltd",
    gemId: "GEM-SELLER-381023",
    gstin: "33AAACG7712M1Z0",
    typeClass: "Non-Local (<20%)",
    orgSize: "Import OEM",
    techScore: 94.0,
    baseQuoted: 398305084,
    gst: 71700000,
    customs: 12000000,
    amc: 0,
    evaluatedLanded: 482000000,
    variance: 16.99,
    statutoryStatus: "No Purchase Preference",
    statutorySubtext: "Non-local supplier status",
    colorTheme: "hover:bg-surface-container-low transition-colors opacity-80",
    rankTheme: "bg-surface-container text-on-surface-variant",
    statutoryTheme: "bg-error-container text-on-error-container",
    actionEligible: false,
    auditVerified: false,
  },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
};
const formatCrore = (value: number) => {
  return "₹" + (value / 10000000).toFixed(2) + " Cr";
};

export default function FinancialBidOpeningPage() {
  const params = useParams();
  const tenderId = params?.id || "T-2026-9812";
  
  const [selectedBidderId, setSelectedBidderId] = useState<string>("B-2"); // Default select ABC Industries

  const selectedBidder = MOCK_BIDDERS.find((b) => b.id === selectedBidderId) || MOCK_BIDDERS[1];
  const l1Bidder = MOCK_BIDDERS.find((b) => b.rank === "L-1") || MOCK_BIDDERS[0];
  const targetLanded = 398000000;
  const sanctionCeiling = 485000000;
  const currentFiscalGain = sanctionCeiling - l1Bidder.evaluatedLanded;

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-surface-container-lowest border-b border-surface-container-high px-layout-gutter h-16 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-space-md">
          <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center font-display-sm font-bold shadow-sm">
            F
          </div>
          <h1 className="font-title-md text-title-md text-primary tracking-tight">
            PRAGATI <span className="font-light text-on-surface-variant">| Procurement Governance &amp; Transparency Initiative</span>
          </h1>
        </div>
        <div className="flex items-center gap-space-sm text-on-surface-variant font-label-md text-label-md">
          <span className="material-symbols-outlined text-[18px]">account_circle</span>
          <span className="font-medium">Joint Secretary (Procurement), MoHFW</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 px-layout-gutter py-space-lg w-full max-w-[1720px] mx-auto flex flex-col gap-space-xl">
        {/* Top Context & Governance Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-on-surface-variant mb-3 font-semibold uppercase tracking-wider">
              <Link href="/" className="hover:text-primary transition-colors">Portals</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <Link href={`/tender/${tenderId}`} className="hover:text-primary transition-colors">Tender {tenderId}</Link>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary font-bold">Financial Bid Opening</span>
            </div>
            {/* Tender Banner */}
            <h2 className="font-display-sm text-display-sm text-on-surface leading-tight">
              Tender: High-End MRI Scanners (3 Tesla)
            </h2>
            <div className="flex items-center gap-3 mt-2 text-body-sm text-on-surface-variant font-tabular-num">
              <span className="px-1.5 py-0.5 rounded bg-surface-container-high font-semibold text-on-surface">ID: {tenderId}</span>
              <span>Published: 12-Oct-2026</span>
              <span>Sanctioning Auth: MoHFW</span>
            </div>
          </div>
          {/* Cryptographic Unsealing Status */}
          <div className="bg-surface-container p-space-sm rounded-lg border border-outline-variant flex items-start gap-space-sm w-full md:w-[380px]">
            <div className="p-1.5 bg-secondary/15 text-secondary rounded flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined">lock_open</span>
            </div>
            <div>
              <div className="font-label-sm text-label-sm font-bold text-on-surface">Financial Envelopes Unsealed</div>
              <div className="text-[10px] text-on-surface-variant font-tabular-num mt-0.5">
                Timestamp: 28-Nov-2026 14:32:01 IST
                <br />
                Blockchain Tx: 0x8f4a...92b1
              </div>
            </div>
          </div>
        </div>

        {/* Global Financial Dashboard (5 KPIs) */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-space-sm md:gap-space-md">
          <div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-xs">
            <div className="flex items-center gap-2 text-on-surface-variant mb-1">
              <span className="material-symbols-outlined text-[18px]">gavel</span>
              <span className="font-label-sm text-label-sm uppercase font-semibold">Total Bidders</span>
            </div>
            <div className="font-display-lg text-display-lg text-on-surface tabular-nums tracking-tight">18</div>
            <div className="text-xs text-secondary font-semibold mt-1">12 Technically Qualified</div>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-xs">
            <div className="flex items-center gap-2 text-on-surface-variant mb-1">
              <span className="material-symbols-outlined text-[18px]">emoji_events</span>
              <span className="font-label-sm text-label-sm uppercase font-semibold">L-1 Established</span>
            </div>
            <div className="font-display-lg text-display-lg text-secondary tabular-nums tracking-tight">{formatCrore(l1Bidder.evaluatedLanded)}</div>
            <div className="text-xs text-on-surface-variant mt-1">Apex Heavy Diagnostic Systems</div>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-xs">
            <div className="flex items-center gap-2 text-on-surface-variant mb-1">
              <span className="material-symbols-outlined text-[18px]">account_balance</span>
              <span className="font-label-sm text-label-sm uppercase font-semibold">Budget Ceiling</span>
            </div>
            <div className="font-display-lg text-display-lg text-on-surface tabular-nums tracking-tight">{formatCrore(sanctionCeiling)}</div>
            <div className="text-xs text-on-surface-variant mt-1">Administrative Approval Limit</div>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-xl border border-secondary/30 bg-secondary/5 shadow-xs">
            <div className="flex items-center gap-2 text-secondary mb-1">
              <span className="material-symbols-outlined text-[18px]">trending_down</span>
              <span className="font-label-sm text-label-sm uppercase font-semibold">Notional Gain (vs Ceiling)</span>
            </div>
            <div className="font-display-lg text-display-lg text-secondary tabular-nums tracking-tight">{formatCrore(currentFiscalGain)}</div>
            <div className="text-xs text-secondary font-semibold mt-1">15.05% Below Estimate</div>
          </div>

          <div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-error/10 rounded-bl-full flex items-start justify-end p-2">
              <div className="w-2 h-2 rounded-full bg-error animate-pulse"></div>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant mb-1">
              <span className="material-symbols-outlined text-[18px]">rule</span>
              <span className="font-label-sm text-label-sm uppercase font-semibold">MII Margin Flag</span>
            </div>
            <div className="font-display-lg text-display-lg text-error tabular-nums tracking-tight">Active</div>
            <div className="text-xs text-on-surface-variant mt-1">L-2 within 20% statutory band</div>
          </div>
        </div>

        {/* Action Layout: Master Matrix & Allocation Engine */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
          {/* Left Column: Master Commercial Evaluation Matrix (8 Cols on XL) */}
          <div className="xl:col-span-8 space-y-space-lg">
            
            <div className="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-sm overflow-hidden flex flex-col">
              {/* Table Header Section */}
              <div className="p-space-md border-b border-surface-container-high flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm bg-surface-container/50">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[24px]">price_check</span>
                  <h3 className="font-title-sm text-title-md text-primary font-bold">Master Commercial Evaluation Matrix</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button type="button" className="text-xs font-semibold px-3 py-1.5 rounded border border-outline-variant hover:bg-surface-container transition-colors flex items-center gap-1 text-on-surface">
                    <span className="material-symbols-outlined text-[16px]">download</span> Export CSV
                  </button>
                  <button type="button" className="text-xs font-semibold px-3 py-1.5 rounded border border-outline-variant hover:bg-surface-container transition-colors flex items-center gap-1 text-on-surface">
                    <span className="material-symbols-outlined text-[16px]">filter_list</span> Filter
                  </button>
                </div>
              </div>

              {/* Responsive Table Wrapper */}
              <div className="overflow-x-auto">
                <table className="w-full text-left whitespace-nowrap">
                  <thead>
                    <tr className="bg-surface-container text-on-surface-variant font-label-sm text-label-sm border-b border-surface-container-high uppercase tracking-wider">
                      <th className="py-3 px-space-md w-16">Rank</th>
                      <th className="py-3 px-space-md min-w-[240px]">Bidder Details &amp; GeM ID</th>
                      <th className="py-3 px-space-sm text-center w-20">Tech Score</th>
                      <th className="py-3 px-space-md text-right min-w-[120px]">Base Quoted (INR)</th>
                      <th className="py-3 px-space-md text-right min-w-[130px]">Statutory Loading</th>
                      <th className="py-3 px-space-md text-right min-w-[130px]">Evaluated Landed</th>
                      <th className="py-3 px-space-sm text-right w-24">L-1 Variance</th>
                      <th className="py-3 px-space-md min-w-[190px]">Statutory Status</th>
                      <th className="py-3 px-space-sm text-center w-20">Audit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container-high font-body-sm text-body-sm text-on-surface">
                    {MOCK_BIDDERS.map((bidder) => (
                      <tr 
                        key={bidder.id} 
                        onClick={() => setSelectedBidderId(bidder.id)}
                        className={`${bidder.colorTheme} cursor-pointer ${selectedBidderId === bidder.id ? "ring-2 ring-inset ring-primary" : ""}`}
                      >
                        <td className="py-3 px-space-md font-tabular-num">
                          <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded font-label-sm font-bold ${bidder.rankTheme}`}>
                            {bidder.rank}
                          </span>
                        </td>
                        <td className="py-3 px-space-md">
                          <div className={`font-title-sm text-body-md font-semibold ${bidder.rank === 'L-1' || bidder.rank === 'L-2' ? 'text-primary' : 'text-on-surface'} flex items-center gap-1.5`}>
                            {bidder.name}
                            {bidder.actionEligible && <span className="material-symbols-outlined text-tertiary text-[16px]" title="Active MII Preference Inspection Candidate">stars</span>}
                          </div>
                          <div className="text-[11px] text-on-surface-variant font-tabular-num">GeM Seller: {bidder.gemId} • GSTIN: {bidder.gstin}</div>
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface-variant text-[10px] font-semibold uppercase">{bidder.typeClass}</span>
                            <span className="px-1.5 py-0.2 rounded bg-primary-fixed text-on-primary-fixed text-[10px] font-semibold">{bidder.orgSize}</span>
                          </div>
                        </td>
                        <td className={`py-3 px-space-sm text-center font-tabular-num font-semibold ${bidder.rank === 'L-1' ? 'text-primary' : 'text-on-surface'}`}>
                          {bidder.techScore.toFixed(1)}
                        </td>
                        <td className="py-3 px-space-md text-right font-tabular-num text-on-surface font-semibold">
                          {formatCurrency(bidder.baseQuoted)}
                        </td>
                        <td className="py-3 px-space-md text-right font-tabular-num text-on-surface-variant">
                          <div className="text-xs">GST 18%: {formatCrore(bidder.gst)}</div>
                          <div className="text-[10px]">Customs/AMC: {formatCrore(bidder.customs + bidder.amc)}</div>
                        </td>
                        <td className="py-3 px-space-md text-right font-tabular-num font-bold text-on-surface text-[14px]">
                          {formatCurrency(bidder.evaluatedLanded)}
                        </td>
                        <td className={`py-3 px-space-sm text-right font-tabular-num font-bold ${bidder.variance === 0 ? 'text-secondary' : bidder.variance < 5 ? 'text-tertiary' : bidder.variance < 15 ? 'text-on-surface-variant font-normal' : 'text-error'}`}>
                          {bidder.variance === 0 ? "0.00%" : `+${bidder.variance.toFixed(2)}%`}
                        </td>
                        <td className="py-3 px-space-md">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${bidder.statutoryTheme}`}>
                            {bidder.rank === 'L-1' || bidder.rank === 'L-2' ? <span className={`w-1.5 h-1.5 rounded-full ${bidder.rank === 'L-1' ? 'bg-secondary' : 'bg-tertiary'}`}></span> : null}
                            {bidder.statutoryStatus}
                          </span>
                          <p className="text-[10px] text-on-surface-variant mt-0.5">{bidder.statutorySubtext}</p>
                        </td>
                        <td className="py-3 px-space-sm text-center">
                          <button type="button" className="p-1 hover:bg-surface-container rounded text-primary" title="Inspect BOQ breakdown">
                            <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Bottom Table Pagination and Verification Metadata */}
              <div className="px-space-md py-space-sm bg-surface-container-low border-t border-surface-container-high flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm text-body-sm text-on-surface-variant">
                <div className="flex items-center gap-space-xs font-tabular-num">
                  <span>Showing 1 to 5 of 18 Evaluated Commercial Envelopes</span>
                  <span className="text-outline-variant">•</span>
                  <button type="button" className="text-primary hover:underline font-semibold">View remaining 13 non-ranking bids</button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm uppercase tracking-wide">Statutory Rule Verified:</span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-semibold text-xs border border-primary/20">
                    PPO 2017 Cl. 3(a) &amp; Rule 153 GFR
                  </span>
                </div>
              </div>
            </div>

            {/* Reverse Auction Simulation & Historical Corridor Widget */}
            <div className="bg-surface-container-lowest rounded-xl border border-surface-container-high p-space-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm pb-space-sm border-b border-surface-container-high">
                <div>
                  <h3 className="font-title-sm text-title-sm text-primary flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[20px]">swap_vert</span>
                    GeM Reverse Auction (e-RA) Corridor Simulation
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Standard Auction Rules for Medical Electronics: 50% Top Vendors or 60% Elimination Threshold
                  </p>
                </div>
                <span className="px-2 py-1 rounded bg-secondary/15 text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider self-start">
                  Auto-Trigger Pending Committee Approval
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md my-space-md">
                <div className="bg-surface-container-low p-space-sm rounded-lg border border-surface-container-high">
                  <div className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">e-RA Floor Base Bid</div>
                  <div className="font-display-lg text-title-sm font-bold text-primary mt-1 tabular-nums">{formatCurrency(l1Bidder.evaluatedLanded)}</div>
                  <div className="text-[11px] text-on-surface-variant mt-0.5">Established by L-1 Opening</div>
                </div>
                <div className="bg-surface-container-low p-space-sm rounded-lg border border-surface-container-high">
                  <div className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Minimum Decrement Step</div>
                  <div className="font-display-lg text-title-sm font-bold text-on-surface mt-1 tabular-nums">₹5,00,000 <span className="text-xs font-normal text-on-surface-variant">(0.12%)</span></div>
                  <div className="text-[11px] text-on-surface-variant mt-0.5">Configured per GeM GTC Cl. 12</div>
                </div>
                <div className="bg-surface-container-low p-space-sm rounded-lg border border-surface-container-high">
                  <div className="font-label-sm text-label-sm text-on-surface-variant uppercase font-semibold">Dynamic Extension Logic</div>
                  <div className="font-display-lg text-title-sm font-bold text-tertiary-container mt-1 tabular-nums">15 Minutes</div>
                  <div className="text-[11px] text-on-surface-variant mt-0.5">Triggered if bid within final 10 mins</div>
                </div>
              </div>
              
              {/* Visual Corridor Representation (SVG Mini Sparkline / Stepper) */}
              <div className="p-space-sm bg-surface-container-low rounded-lg border border-surface-container-high">
                <div className="flex justify-between items-center text-xs font-semibold text-on-surface-variant mb-2">
                  <span>Sanction Ceiling: {formatCrore(sanctionCeiling)}</span>
                  <span className="text-primary font-bold">Base L-1: {formatCrore(l1Bidder.evaluatedLanded)}</span>
                  <span className="text-secondary font-bold">Target e-RA Landing: ~{formatCrore(targetLanded)}</span>
                </div>
                <div className="relative h-6 w-full bg-surface-container rounded-full overflow-hidden flex items-center">
                  <div className="absolute left-0 top-0 bottom-0 bg-primary/20 w-full"></div>
                  <div className="absolute left-0 top-0 bottom-0 bg-secondary/30 w-[84%]"></div>
                  <div className="absolute left-0 top-0 bottom-0 bg-secondary w-[80%] rounded-r-full"></div>
                  <span className="relative z-10 text-[11px] font-bold text-on-secondary ml-3 tabular-nums">
                    Current Fiscal Gain: {formatCurrency(currentFiscalGain)} (-15.05%)
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-on-surface-variant mt-2 font-tabular-num">
                  <span>Class-I Local Preference Band Extends to {formatCrore(l1Bidder.evaluatedLanded * 1.2)}</span>
                  <span className="text-primary font-medium">Eligible Bidders for e-RA: 9 of 18 (H-1 Elimination Applied)</span>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column: Statutory Decision & MII/MSME Allocation Engine (4 Cols on XL) */}
          <div className="xl:col-span-4 space-y-space-lg">
            {/* Statutory Allocation Desk Card */}
            <div className="bg-surface-container-lowest rounded-xl border-2 border-primary/30 p-space-lg shadow-md relative">
              <div className="flex items-center justify-between border-b border-surface-container-high pb-space-sm">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-primary text-[22px]">policy</span>
                  <div>
                    <h3 className="font-title-sm text-title-sm text-primary">Statutory Allocation Engine</h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Rule 153 &amp; MII 2017 Order Analysis</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm font-bold">
                  Divisible EPC
                </span>
              </div>
              
              {/* Subject Under Inspection */}
              <div className="mt-space-md p-space-sm rounded-lg bg-surface-container-low border border-surface-container-high">
                <div className="text-[11px] font-semibold uppercase text-on-surface-variant">Candidate Supplier under Review</div>
                <div className="font-title-sm text-title-sm text-primary font-bold mt-0.5">{selectedBidder.name}</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  {selectedBidder.typeClass} Supplier • {selectedBidder.orgSize}
                </div>
                
                <div className="mt-space-sm pt-space-xs border-t border-surface-container-high text-body-sm space-y-1 font-tabular-num">
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Base L-1 Quoted Price:</span>
                    <span className="font-semibold text-on-surface">{formatCurrency(l1Bidder.evaluatedLanded)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">{selectedBidder.name.substring(0, 15)} Quote:</span>
                    <span className="font-semibold text-primary">{formatCurrency(selectedBidder.evaluatedLanded)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-on-surface-variant">Statutory Margin Band:</span>
                    <span className="font-medium text-tertiary">{formatCurrency(l1Bidder.evaluatedLanded * 1.2)} (L-1 + 20%)</span>
                  </div>
                  <div className="flex justify-between font-semibold mt-2">
                    <span className="text-secondary">Statutory Verdict:</span>
                    <span className={`text-${selectedBidder.actionEligible ? 'secondary' : 'on-surface-variant'}`}>
                      {selectedBidder.actionEligible ? 'Eligible for 50% Quantity Match' : 'Ineligible / Out of Band'}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Statutory Audit Verification Badge */}
              {selectedBidder.auditVerified && (
              <div className="mt-space-md p-space-sm rounded-lg bg-secondary/10 border border-secondary/30">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">verified_user</span>
                  <div className="text-body-sm">
                    <div className="font-semibold text-secondary">Local Content Authenticated</div>
                    <div className="text-xs text-on-surface-variant mt-0.5">
                      Statutory Auditor Certificate verified against ICAI Portal.
                    </div>
                    <div className="font-tabular-num text-[11px] text-on-surface font-medium mt-1">
                      UDIN: <span className="font-semibold">24049812BGHY9811</span> • Auditor: M/s Khanna &amp; Varma CA
                    </div>
                  </div>
                </div>
              </div>
              )}
              
              {/* Split Allocation Scheme (50:50 Breakdown) */}
              {selectedBidder.actionEligible && (
              <div className="mt-space-md">
                <div className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-2">
                  Simulated Contract Splitting (50:50 Clause)
                </div>
                <div className="space-y-2">
                  {/* Allocation Part 1 */}
                  <div className="p-space-sm rounded-lg bg-surface-container-low border border-surface-container-high flex justify-between items-center">
                    <div>
                      <div className="font-label-md text-label-md font-bold text-primary">{l1Bidder.name} (L-1)</div>
                      <div className="text-[11px] text-on-surface-variant">Primary Statutory Award (50% Volume)</div>
                    </div>
                    <div className="text-right font-tabular-num">
                      <div className="font-bold text-on-surface">{formatCurrency(l1Bidder.evaluatedLanded / 2)}</div>
                      <div className="text-[10px] text-secondary font-semibold">Fixed L-1 Rate</div>
                    </div>
                  </div>
                  {/* Allocation Part 2 */}
                  <div className="p-space-sm rounded-lg bg-surface-container-low border border-surface-container-high flex justify-between items-center">
                    <div>
                      <div className="font-label-md text-label-md font-bold text-on-surface">{selectedBidder.name}</div>
                      <div className="text-[11px] text-on-surface-variant">MII Preference Offer (50% Volume)</div>
                    </div>
                    <div className="text-right font-tabular-num">
                      <div className="font-bold text-on-surface">{formatCurrency(l1Bidder.evaluatedLanded / 2)}</div>
                      <div className="text-[10px] text-tertiary font-semibold">Condition: Match L-1</div>
                    </div>
                  </div>
                </div>
              </div>
              )}
              
              {/* Interactive Action Decision Protocol */}
              <div className="mt-space-lg pt-space-md border-t border-surface-container-high space-y-space-sm">
                <div className="font-label-md text-label-md text-on-surface font-bold">
                  Committee Determination Action
                </div>
                <div className="space-y-2 text-body-sm">
                  <label className="flex items-start gap-2 p-space-xs rounded hover:bg-surface-container cursor-pointer">
                    <input type="radio" name="committee_action" className="mt-1 text-primary focus:ring-primary" defaultChecked />
                    <div>
                      <div className="font-semibold text-primary">Issue GeM Price Matching Invitation (MII Clause 3a)</div>
                      <div className="text-xs text-on-surface-variant">Transmit 72-hour formal notice to {selectedBidder.actionEligible ? selectedBidder.name : "eligible bidder"} to match L-1 price.</div>
                    </div>
                  </label>
                  <label className="flex items-start gap-2 p-space-xs rounded hover:bg-surface-container cursor-pointer">
                    <input type="radio" name="committee_action" className="mt-1 text-primary focus:ring-primary" />
                    <div>
                      <div className="font-semibold text-on-surface">Execute Direct 100% Award to L-1 ({l1Bidder.name})</div>
                      <div className="text-xs text-on-surface-variant">Bypass quantity splitting under Clause 11 justification (Critical Non-Interoperability).</div>
                    </div>
                  </label>
                  <label className="flex items-start gap-2 p-space-xs rounded hover:bg-surface-container cursor-pointer">
                    <input type="radio" name="committee_action" className="mt-1 text-primary focus:ring-primary" />
                    <div>
                      <div className="font-semibold text-on-surface">Trigger GeM Electronic Reverse Auction (e-RA)</div>
                      <div className="text-xs text-on-surface-variant">Open real-time 120-minute reverse auction window for all qualified vendors.</div>
                    </div>
                  </label>
                </div>
                
                {/* Digital Signature Form Class-3 Authentication */}
                <div className="mt-space-md pt-space-sm border-t border-surface-container-high">
                  <div className="p-space-sm bg-surface-container rounded-lg border border-outline-variant mb-space-sm flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">token</span>
                      <div>
                        <div className="font-label-sm text-label-sm font-bold text-on-surface">DSC Token Detected: Rajesh Kumar, IAS</div>
                        <div className="text-[10px] text-on-surface-variant font-tabular-num">Valid till 14-Aug-2027 • Cert ID: eMudhra-C3-99420</div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[18px]">check_circle</span>
                  </div>
                  
                  <button type="button" className="w-full py-2.5 px-space-md rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors font-label-md text-label-md font-semibold flex items-center justify-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">history_edu</span>
                    <span>Sign &amp; Issue Recommendation</span>
                  </button>
                  <p className="text-center text-[10px] text-on-surface-variant mt-2 font-tabular-num">
                    Audit Hash: SHA-256: 8F2A9C0E14B82931D45A7... • Section 65B Electronic Evidence Admissible
                  </p>
                </div>
              </div>
            </div>
            
            {/* Quick Audit Reference Panel */}
            <div className="bg-surface-container-lowest rounded-xl border border-surface-container-high p-space-md shadow-sm">
              <div className="font-title-sm text-body-md font-bold text-on-surface flex items-center gap-1.5 mb-2">
                <span className="material-symbols-outlined text-on-surface-variant text-[18px]">account_balance_wallet</span>
                Statutory Financial Verifications
              </div>
              <ul className="text-xs text-on-surface-variant space-y-2">
                <li className="flex items-center justify-between pb-1 border-b border-surface-container-high">
                  <span>Earnest Money Deposit (EMD) Status:</span>
                  <span className="font-semibold text-secondary">Verified Bank Guarantees</span>
                </li>
                <li className="flex items-center justify-between pb-1 border-b border-surface-container-high">
                  <span>Performance Security Guarantee (e-PBG):</span>
                  <span className="font-semibold text-on-surface">Mandatory 5% of Contract</span>
                </li>
                <li className="flex items-center justify-between pb-1 border-b border-surface-container-high">
                  <span>GST Compliance Cross-Verification:</span>
                  <span className="font-semibold text-secondary">GSTR-3B Compliant (100%)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Non-Debarment Certificate:</span>
                  <span className="font-semibold text-secondary">No CVC/DoE Blacklist Match</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Sovereign Governance & Audit Trail Citations Footer */}
      <footer className="mt-space-2xl bg-surface-container-low border-t border-surface-container-high px-layout-gutter py-space-lg text-on-surface-variant">
        <div className="max-w-[1720px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-md text-xs">
          <div className="space-y-1">
            <div className="font-semibold text-on-surface flex items-center gap-2">
              <span>Official Procurement Decision Record</span>
              <span className="h-3 w-px bg-outline-variant"></span>
              <span>Government of India Compliance Authority</span>
            </div>
            <p className="text-on-surface-variant max-w-4xl">
              Evaluated in strict conformity with the Public Procurement (Preference to Make in India) Order 2017 (revised 16.09.2020), General Financial Rules (GFR) 2017 Rule 153 &amp; Rule 160, and Micro and Small Enterprises (MSEs) Order 2012. Cryptographic unsealing complies with Section 65B of the Indian Evidence Act, 1872 for electronic record admissibility.
            </p>
          </div>
          <div className="flex items-center gap-space-lg shrink-0 font-tabular-num text-right">
            <div>
              <div className="font-semibold text-on-surface">Audit Instance ID</div>
              <div className="text-[11px]">AUD-MOHFW-2026-OCT-8891</div>
            </div>
            <div className="h-8 w-px bg-surface-container-high"></div>
            <div>
              <div className="font-semibold text-on-surface">Session Encryption</div>
              <div className="text-[11px] text-secondary">AES-256 GCM (NIC-HSM)</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
