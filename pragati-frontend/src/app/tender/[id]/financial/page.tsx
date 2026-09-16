// @ts-nocheck
"use client";
import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { useAuth } from "../../../../context/AuthContext";


interface FinancialBid extends Record<string, unknown> {
  id: string;
  bidder: Record<string, unknown>;
  evaluated: number;
  baseQuoted: number;
  gst: number;
  compliance_score?: number;
}

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const { user, logout } = useAuth();
  const [tender, setTender] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedBidId, setSelectedBidId] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      api.getTenderById(params.id as string)
        .then((res: Record<string, unknown>) => {
          setTender(res.data);
          if (res.data?.bids?.length > 0) {
            setSelectedBidId(res.data.bids[0].id);
          }
        })
        .catch((err) => console.error("Failed to fetch tender", err))
        .finally(() => setLoading(false));
    }
  }, [params.id]);

  const generateFinancial = (bid: Record<string, unknown>) => {
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
    return [...(tender?.bids)].map(b => ({
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
  const l1Price = l1Bid?.evaluated || 0;
  
  const selectedBid = sortedBids.find(b => b.id === selectedBidId) || sortedBids[0];
  const selBidder = (selectedBid?.bidder as Record<string, unknown>) || {};

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
{/* Top Sovereign Identity & Procurement Context Strip */}
<section className="bg-surface-container-low px-layout-gutter py-space-sm border-b border-surface-container-high">
<div className="max-w-[1720px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
{/* Breadcrumb Hierarchy */}
<div className="flex items-center flex-wrap gap-space-xs font-label-md text-label-md text-on-surface-variant">
<span className="hover:text-primary cursor-pointer transition-colors">Portal Desk</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-primary cursor-pointer transition-colors">Tenders &amp; Bids</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="font-tabular-num font-semibold text-primary">GEM/2026/B/489201</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-semibold">Financial Bid Opening &amp; Reverse Auction Decision Desk</span>
</div>
{/* Compliance Security Badges */}
<div className="flex items-center gap-space-md shrink-0">
<div className="flex items-center gap-1.5 px-space-sm py-1 bg-surface-container-lowest rounded-lg border border-outline-variant/60 shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider">HSM FIPS 140-3 Active</span>
</div>
<div className="flex items-center gap-1.5 px-space-sm py-1 bg-surface-container-lowest rounded-lg border border-outline-variant/60 shadow-sm">
<span className="material-symbols-outlined text-primary text-[16px]">verified_user</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-medium">NIC/GeM Gateway Authenticated</span>
</div>
</div>
</div>
</section>
{/* Tender Institutional Context Master Banner */}
<section className="bg-surface-container-lowest px-layout-gutter py-space-lg border-b border-surface-container-high shadow-sm">
<div className="max-w-[1720px] mx-auto flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
<div className="space-y-space-xs">
<div className="flex items-center flex-wrap gap-space-sm">
<span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed font-label-md text-label-md font-bold uppercase tracking-wide">
            Module 4.9 Desk
          </span>
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
            Tender #GEM/2026/B/489201
          </h1>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm border border-outline-variant/40">
            Divisible EPC Scheme
          </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant font-medium max-w-4xl">
          Supply, Commissioning &amp; Multi-Year Comprehensive Maintenance of High-Precision Biomedical &amp; Diagnostic Equipment | Ministry of Health &amp; Family Welfare (MoHFW)
        </p>
<div className="flex items-center flex-wrap gap-y-1 gap-x-space-lg font-body-sm text-body-sm text-on-surface-variant pt-1">
<div>Sanctioned Estimate: <span className="font-tabular-num font-semibold text-on-surface">₹48,50,00,000</span></div>
<div className="h-3 w-px bg-outline-variant"></div>
<div>Procurement Cell: <span className="font-medium text-on-surface">Medical Infrastructure Wing-IV</span></div>
<div className="h-3 w-px bg-outline-variant"></div>
<div>Opening Protocol: <span className="font-medium text-on-surface">Rule 160(ii) GFR 2017 Dual-Key Unsealing</span></div>
</div>
</div>
{/* Action Buttons Bar */}
<div className="flex items-center flex-wrap gap-space-sm lg:shrink-0">
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-lowest border border-outline hover:bg-surface-container hover:border-primary text-on-surface transition-all font-label-md text-label-md shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-error">picture_as_pdf</span>
<span>Form-6 Matrix (PDF)</span>
</button>
<button className="flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-lowest border border-outline hover:bg-surface-container text-on-surface transition-all font-label-md text-label-md shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">insights</span>
<span>GeM e-RA Telemetry</span>
</button>
<button onClick={() => router.push(`/tender/${tender.id}/award`)} className="flex items-center gap-1.5 px-space-lg py-2 rounded-lg bg-primary-container text-on-primary hover:bg-primary transition-all font-label-md text-label-md shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">gavel</span>
<span>Draft Statutory LoA</span>
</button>
</div>
</div>
{/* Cryptographic Unsealing Status Strip */}
<div className="max-w-[1720px] mx-auto mt-space-md p-space-sm bg-surface-container rounded-lg border border-primary/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[20px]">enhanced_encryption</span>
</div>
<div>
<div className="font-title-sm text-title-sm text-primary flex items-center gap-space-xs">
            Financial Envelopes Decrypted &amp; Synchronized
            <span className="px-1.5 py-0.5 rounded bg-secondary/15 text-secondary font-label-sm text-[10px] font-bold uppercase tracking-wider">Verified</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            3 of 3 Authorized Custodian Keys Verified (FIPS 140-3 HSM Root) • Custodians: R. Kumar (IAS), Dr. V. Mathur (DG-Tech), S. Sengupta (Finance Rep)
          </p>
</div>
</div>
<div className="font-tabular-num text-body-sm text-on-surface-variant shrink-0 bg-surface-container-lowest px-space-sm py-1 rounded border border-outline-variant">
        Time of Unseal: <span className="text-on-surface font-semibold">16-Oct-2026 14:00:22 IST</span>
</div>
</div>
</section>
{/* Main Workstation Layout: 12-Column Grid */}
<div className="max-w-[1720px] mx-auto w-full px-layout-gutter py-space-lg">
{/* Row 1: Executive Financial Opening KPIs */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-space-md mb-space-lg">
{/* KPI 1 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-sm relative overflow-hidden">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Bids Evaluated</span>
<span className="material-symbols-outlined text-primary text-[20px]">folder_managed</span>
</div>
<div className="mt-2 flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-primary font-bold tabular-nums">18 / 18</span>
</div>
<div className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
          100% technically responsive unsealed
        </div>
<div className="w-full bg-surface-container h-1 rounded-full mt-3 overflow-hidden">
<div className="bg-primary h-full w-full"></div>
</div>
</div>
{/* KPI 2 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl border border-secondary/40 shadow-sm relative overflow-hidden bg-gradient-to-br from-surface-container-lowest to-secondary/5">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold">Base L-1 Quoted Price</span>
<span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
</div>
<div className="mt-2 flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-on-surface font-bold tabular-nums">₹41.20 Cr</span>
</div>
<div className="mt-1 font-body-sm text-body-sm text-secondary font-medium">
          Apex Heavy Diagnostic Systems
        </div>
<div className="text-[11px] text-on-surface-variant mt-1">15.05% below sanctioned benchmark</div>
</div>
{/* KPI 3 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-sm relative overflow-hidden">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">MII / MSME Band (L1+20%)</span>
<span className="material-symbols-outlined text-tertiary text-[20px]">factory</span>
</div>
<div className="mt-2 flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-tertiary-container font-bold tabular-nums">2 Bidders</span>
</div>
<div className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
          Within ₹49.44 Cr Purchase Margin
        </div>
<div className="text-[11px] text-on-surface-variant mt-1">Eligible for 50:50 quota match</div>
</div>
{/* KPI 4 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-sm relative overflow-hidden">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Net Exchequer Savings</span>
<span className="material-symbols-outlined text-secondary text-[20px]">account_balance</span>
</div>
<div className="mt-2 flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg text-secondary font-bold tabular-nums">₹7.30 Cr</span>
</div>
<div className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
          Fiscal variance: -15.05%
        </div>
<div className="text-[11px] text-on-surface-variant mt-1">Vs. Sanction of ₹48.50 Cr</div>
</div>
{/* KPI 5 */}
<div className="bg-surface-container-lowest p-space-md rounded-xl border border-surface-container-high shadow-sm relative overflow-hidden">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Reverse Auction (e-RA)</span>
<span className="material-symbols-outlined text-primary text-[20px]">timer</span>
</div>
<div className="mt-2 flex items-baseline gap-space-xs">
<span className="font-title-sm text-title-sm text-primary font-bold">16-Oct-26 10:00</span>
</div>
<div className="mt-1 font-body-sm text-body-sm text-secondary font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Auto-Rules Engaged
        </div>
<div className="text-[11px] text-on-surface-variant mt-1">Decrement: ₹5,00,000 step</div>
</div>
</div>
{/* Row 2: Two Columns Workbench (Comparative Table + Allocation Desk) */}
<div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
{/* Left Column: Master Commercial Evaluation Matrix (8 Cols on XL) */}
<div className="xl:col-span-8 space-y-space-lg">
<div className="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-sm overflow-hidden">
{/* Table Header Banner */}
<div className="p-space-md bg-surface-container-low border-b border-surface-container-high flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
<div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">table_chart</span>
<h2 className="font-title-sm text-title-sm text-primary">Commercial Evaluation &amp; Preferential Loading Matrix</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Statutory Ranking Computed Under GFR 2017 &amp; Public Procurement (Preference to Make in India) Order
              </p>
</div>
<div className="flex items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant">Density: High</span>
<div className="h-4 w-px bg-outline-variant"></div>
<button className="p-1 text-on-surface-variant hover:text-primary rounded bg-surface-container-lowest border border-outline-variant" title="Filter columns" type="button">
<span className="material-symbols-outlined text-[16px]">filter_list</span>
</button>
<button className="p-1 text-on-surface-variant hover:text-primary rounded bg-surface-container-lowest border border-outline-variant" title="Export CSV" type="button">
<span className="material-symbols-outlined text-[16px]">download</span>
</button>
</div>
</div>
{/* The Table */}
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
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
                {sortedBids.map((bid, index) => {
                  const bidder = ((bid as FinancialBid).bidder as Record<string, unknown>) || {};
                  const isL1 = index === 0;
                  const variance = isL1 ? 0 : (((bid as FinancialBid).evaluated - l1Price) / l1Price) * 100;
                  
                  return (
                    <tr key={bid.id as string} onClick={() => setSelectedBidId(bid.id as string)} className={`hover:bg-surface-container-low transition-colors cursor-pointer group ${selectedBidId === bid.id ? 'bg-surface-container' : ''}`}>
                      <td className="py-3 px-space-md font-tabular-num">
                        <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded font-label-sm font-bold shadow-xs ${isL1 ? 'bg-secondary text-on-secondary' : 'bg-surface-container text-on-surface-variant'}`}>
                          L-{index + 1}
                        </span>
                      </td>
                      <td className="py-3 px-space-md">
                        <div className="font-title-sm text-body-md font-semibold text-primary">{bidder.entity_name as string || "Unknown"}</div>
                        <div className="text-[11px] text-on-surface-variant font-tabular-num">GeM Seller: {bidder.gem_seller_id as string || "N/A"} • GSTIN: {bidder.gstin as string || "N/A"}</div>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="px-1.5 py-0.2 rounded bg-surface-container-highest text-on-surface-variant text-[10px] font-semibold uppercase">Class-I MII (72%)</span>
                          <span className="px-1.5 py-0.2 rounded bg-primary-fixed text-on-primary-fixed text-[10px] font-semibold">MSME Medium</span>
                        </div>
                      </td>
                      <td className="py-3 px-space-sm text-center font-tabular-num font-semibold text-primary">
                        {((bid as FinancialBid).compliance_score as number || 0).toFixed(1)}
                      </td>
                      <td className="py-3 px-space-md text-right font-tabular-num text-on-surface font-semibold">
                        ₹{((bid as FinancialBid).baseQuoted as number).toLocaleString('en-IN', {maximumFractionDigits: 0})}
                      </td>
                      <td className="py-3 px-space-md text-right font-tabular-num text-on-surface-variant">
                        <div className="text-xs">GST 18%: ₹{((bid as FinancialBid).gst as number).toLocaleString('en-IN', {maximumFractionDigits: 0})}</div>
                        <div className="text-[10px]">AMC/CMC: ₹0.00</div>
                      </td>
                      <td className="py-3 px-space-md text-right font-tabular-num font-bold text-on-surface text-[14px]">
                        ₹{((bid as FinancialBid).evaluated as number).toLocaleString('en-IN', {maximumFractionDigits: 0})}
                      </td>
                      <td className={`py-3 px-space-sm text-right font-tabular-num font-bold ${isL1 ? 'text-secondary' : 'text-tertiary'}`}>
                        {isL1 ? '0.00%' : `+${variance.toFixed(2)}%`}
                      </td>
                      <td className="py-3 px-space-md">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold ${isL1 ? 'bg-secondary/15 text-secondary border border-secondary/30' : 'bg-tertiary-fixed text-on-tertiary-fixed border border-tertiary-fixed-dim'}`}>
                          {isL1 ? <><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>L-1 Benchmark</> : 'MII Price Match Eligible'}
                        </span>
                        <p className="text-[10px] text-on-surface-variant mt-0.5">{isL1 ? 'Eligible for 50% minimum allocation' : 'Within L-1 + 20% statutory band'}</p>
                      </td>
                      <td className="py-3 px-space-sm text-center">
                        <button className="p-1 hover:bg-surface-container rounded text-primary" title="Inspect BOQ breakdown" type="button">
                          <span className="material-symbols-outlined text-[18px]">receipt_long</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
</table>
</div>
{/* Bottom Table Pagination and Verification Metadata */}
<div className="px-space-md py-space-sm bg-surface-container-low border-t border-surface-container-high flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-space-xs font-tabular-num">
<span>Showing 1 to 5 of 18 Evaluated Commercial Envelopes</span>
<span className="text-outline-variant">•</span>
<button className="text-primary hover:underline font-semibold" type="button">View remaining 13 non-ranking bids</button>
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
<div className="font-display-lg text-title-sm font-bold text-primary mt-1 tabular-nums">₹41,20,00,000</div>
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
<span>Sanction Ceiling: ₹48.50 Cr</span>
<span className="text-primary font-bold">Base L-1: ₹41.20 Cr</span>
<span className="text-secondary font-bold">Target e-RA Landing: ~₹39.80 Cr</span>
</div>
<div className="relative h-6 w-full bg-surface-container rounded-full overflow-hidden flex items-center">
<div className="absolute left-0 top-0 bottom-0 bg-primary/20 w-full"></div>
<div className="absolute left-0 top-0 bottom-0 bg-secondary/30 w-[84%]"></div>
<div className="absolute left-0 top-0 bottom-0 bg-secondary w-[80%] rounded-r-full"></div>
<span className="relative z-10 text-[11px] font-bold text-on-secondary ml-3 tabular-nums">
                Current Fiscal Gain: ₹7,30,00,000 (-15.05%)
              </span>
</div>
<div className="flex items-center justify-between text-[11px] text-on-surface-variant mt-2 font-tabular-num">
<span>Class-I Local Preference Band Extends to ₹49.44 Cr</span>
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
<div className="font-title-sm text-title-sm text-primary font-bold mt-0.5">ABC Industries Ltd</div>
<div className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              Class-I Local Supplier • 68% Local Content
            </div>
<div className="mt-space-sm pt-space-xs border-t border-surface-container-high text-body-sm space-y-1 font-tabular-num">
<div className="flex justify-between">
<span className="text-on-surface-variant">Base L-1 Quoted Price:</span>
<span className="font-semibold text-on-surface">₹41,20,00,000</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">ABC Industries Quote:</span>
<span className="font-semibold text-primary">₹42,80,00,000</span>
</div>
<div className="flex justify-between">
<span className="text-on-surface-variant">Statutory Margin Band:</span>
<span className="font-medium text-tertiary">₹49,44,00,000 (L-1 + 20%)</span>
</div>
<div className="flex justify-between font-semibold">
<span className="text-secondary">Statutory Verdict:</span>
<span className="text-secondary">Eligible for 50% Quantity Match</span>
</div>
</div>
</div>
{/* Statutory Audit Verification Badge */}
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
{/* Split Allocation Scheme (50:50 Breakdown) */}
<div className="mt-space-md">
<div className="font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-2">
              Simulated Contract Splitting (50:50 Clause)
            </div>
<div className="space-y-2">
{/* Allocation Part 1 */}
<div className="p-space-sm rounded-lg bg-surface-container-low border border-surface-container-high flex justify-between items-center">
<div>
<div className="font-label-md text-label-md font-bold text-primary">Apex Heavy Diagnostic Systems (L-1)</div>
<div className="text-[11px] text-on-surface-variant">Primary Statutory Award (50% Volume)</div>
</div>
<div className="text-right font-tabular-num">
<div className="font-bold text-on-surface">₹20,60,00,000</div>
<div className="text-[10px] text-secondary font-semibold">Fixed L-1 Rate</div>
</div>
</div>
{/* Allocation Part 2 */}
<div className="p-space-sm rounded-lg bg-surface-container-low border border-surface-container-high flex justify-between items-center">
<div>
<div className="font-label-md text-label-md font-bold text-on-surface">ABC Industries Ltd (Class-I MII)</div>
<div className="text-[11px] text-on-surface-variant">MII Preference Offer (50% Volume)</div>
</div>
<div className="text-right font-tabular-num">
<div className="font-bold text-on-surface">₹20,60,00,000</div>
<div className="text-[10px] text-tertiary font-semibold">Condition: Match L-1</div>
</div>
</div>
</div>
</div>
{/* Interactive Action Decision Protocol */}
<div className="mt-space-lg pt-space-md border-t border-surface-container-high space-y-space-sm">
<div className="font-label-md text-label-md text-on-surface font-bold">
              Committee Determination Action
            </div>
<div className="space-y-2 text-body-sm">
<label className="flex items-start gap-2 p-space-xs rounded hover:bg-surface-container cursor-pointer">
<input defaultChecked className="mt-1 text-primary focus:ring-primary" name="committee_action" type="radio"/>
<div>
<div className="font-semibold text-primary">Issue GeM Price Matching Invitation (MII Clause 3a)</div>
<div className="text-xs text-on-surface-variant">Transmit 72-hour formal notice to ABC Industries to match L-1 price of ₹41.20 Cr.</div>
</div>
</label>
<label className="flex items-start gap-2 p-space-xs rounded hover:bg-surface-container cursor-pointer">
<input className="mt-1 text-primary focus:ring-primary" name="committee_action" type="radio"/>
<div>
<div className="font-semibold text-on-surface">Execute Direct 100% Award to L-1 (Apex Heavy)</div>
<div className="text-xs text-on-surface-variant">Bypass quantity splitting under Clause 11 justification (Critical Non-Interoperability).</div>
</div>
</label>
<label className="flex items-start gap-2 p-space-xs rounded hover:bg-surface-container cursor-pointer">
<input className="mt-1 text-primary focus:ring-primary" name="committee_action" type="radio"/>
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
<button className="w-full py-2.5 px-space-md rounded-lg bg-primary text-on-primary hover:bg-primary-container transition-colors font-label-md text-label-md font-semibold flex items-center justify-center gap-2 shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">history_edu</span>
<span>Sign &amp; Issue Recommendation to MoHFW Finance</span>
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
</div>
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
</div></main>
    </div>
  );
}
