// @ts-nocheck
"use client";
import React from "react";
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from "next/link";
import { api } from '@/services/api';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';


const getRiskStyles = (risk: string) => {
  switch (risk?.toUpperCase()) {
    case 'LOW':
      return { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-500', label: 'Low Risk' };
    case 'MEDIUM':
      return { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500', label: 'Medium Risk' };
    case 'HIGH':
    case 'CRITICAL':
      return { bg: 'bg-rose-50', text: 'text-rose-700', dot: 'bg-rose-500', label: 'Critical Risk' };
    default:
      return { bg: 'bg-surface-container', text: 'text-on-surface-variant', dot: 'bg-outline', label: 'Pending' };
  }
};

const getStatusStyles = (status: string) => {
  switch (status?.toUpperCase()) {
    case 'COMPLIANT':
    case 'VERIFIED':
      return { text: 'text-emerald-700', icon: 'check_circle', label: 'Verified' };
    case 'FLAGGED':
    case 'ISSUES':
      return { text: 'text-amber-700', icon: 'warning', label: 'Issues Found' };
    case 'FAILED':
    case 'NON_COMPLIANT':
      return { text: 'text-error', icon: 'cancel', label: 'Failed Checks' };
    default:
      return { text: 'text-on-surface-variant', icon: 'progress_activity', label: 'In Progress', iconClass: 'animate-spin' };
  }
};

const getScoreStyles = (score: number | null | undefined) => {
  if (score === null || score === undefined) {
    return { text: 'text-outline', labelText: 'text-outline', bg: 'bg-outline-variant', label: 'Calculating', width: '15%', pulse: true };
  }
  if (score >= 80) return { text: 'text-emerald-600', labelText: 'text-emerald-700', bg: 'bg-emerald-500', label: 'Excellent', width: `${score}%`, pulse: false };
  if (score >= 50) return { text: 'text-amber-600', labelText: 'text-amber-700', bg: 'bg-amber-500', label: 'Audit Alert', width: `${score}%`, pulse: false };
  return { text: 'text-error', labelText: 'text-error', bg: 'bg-error', label: 'Non-Compliant', width: `${score}%`, pulse: false };
};

export default function BidderCompliance() {
  const router = useRouter();
  const params = useParams();
  const { user, logout } = useAuth();
  const [tender, setTender] = useState<any>(null);
  const [loadingTender, setLoadingTender] = useState(true);

  useEffect(() => {
    if (params.id) {
      api.getTenderById(params.id as string)
        .then(res => {
          if (res.success) {
            setTender(res.data.tender);
          }
        })
        .catch(err => console.error('Failed to load tender', err))
        .finally(() => setLoadingTender(false));
    }
  }, [params.id]);

  if (loadingTender) return <div className="p-8 h-screen bg-surface">Loading Compliance Verification...</div>;
  if (!tender) return <div className="p-8 text-error h-screen bg-surface">Tender not found.</div>;

  return (
    <ProtectedRoute>
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
<button onClick={() => router.push(`/tender/${tender.id}/tec`)} className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-space-lg py-2 h-10 rounded-xl bg-primary-container text-on-primary hover:bg-primary transition-all font-label-md text-label-md shadow-sm active:scale-[0.98]" type="button">
<span className="material-symbols-outlined text-[18px]">check_circle</span>
          Finalize Evaluation
        </button>
</div>
</div>
{/* 3. Summary Metrics (4-Column Bento Row) */}
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
{(() => {
  const bids = (tender?.bids) || [];
  const totalBids = bids.length;
  const compliantBids = bids.filter(b => b.status === 'COMPLIANT' || b.status === 'VERIFIED').length;
  const flaggedBids = bids.filter(b => b.status === 'FLAGGED' || b.status === 'ISSUES' || b.risk_level === 'MEDIUM').length;
  const pendingBids = bids.filter(b => !b.status || b.status === 'PENDING').length;
  const complianceRate = totalBids > 0 ? ((compliantBids / totalBids) * 100).toFixed(1) : '0.0';
  const avgScore = totalBids > 0 ? (bids.reduce((acc, b) => acc + (b.compliance_score || 0), 0) / totalBids).toFixed(1) : '0.0';

  return (
    <>
      {/* Card 1: Total Bidders */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Bidders</span>
            <div className="font-display-lg text-display-lg text-on-surface font-tabular-num">{totalBids}</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[22px]">group</span>
          </div>
        </div>
        <div className="mt-space-sm pt-space-xs flex items-center justify-between text-body-sm font-body-sm">
          <span className="text-secondary font-medium flex items-center gap-1">
            <span className="material-symbols-outlined text-[16px]">trending_up</span>
            Live Updates
          </span>
        </div>
      </div>

      {/* Card 2: Fully Verified */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Fully Verified</span>
            <div className="font-display-lg text-display-lg text-secondary font-tabular-num">{compliantBids}</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-secondary-container/40 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined text-[22px]">verified</span>
          </div>
        </div>
        <div className="mt-space-sm pt-space-xs flex items-center justify-between text-body-sm font-body-sm">
          <span className="text-on-surface-variant flex items-center gap-1 font-tabular-num">
            <span className="font-semibold text-secondary">{complianceRate}%</span> compliance rate
          </span>
          <span className="text-on-surface-variant font-tabular-num font-label-sm text-label-sm">Avg Score: {avgScore}</span>
        </div>
      </div>

      {/* Card 3: Flagged Issues */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Flagged Issues</span>
            <div className="font-display-lg text-display-lg text-amber-600 font-tabular-num">{flaggedBids}</div>
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
        </div>
      </div>

      {/* Card 4: Pending Verification */}
      <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Pending Verification</span>
            <div className="font-display-lg text-display-lg text-outline font-tabular-num">{pendingBids}</div>
          </div>
          <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-outline">
            <span className="material-symbols-outlined text-[22px] animate-spin">sync</span>
          </div>
        </div>
        <div className="mt-space-sm pt-space-xs flex items-center justify-between text-body-sm font-body-sm">
          <span className="text-on-surface-variant flex items-center gap-1 font-tabular-num">
            Awaiting external API response
          </span>
        </div>
      </div>
    </>
  );
})()}
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
  {((tender?.bids) || []).map((bid: Record<string, unknown>, index: number) => {
    const riskStyle = getRiskStyles(bid.risk_level);
    const statusStyle = getStatusStyles(bid.status);
    const scoreStyle = getScoreStyles(bid.compliance_score as number);
    
    let summaryIcon = 'verified_user';
    let summaryIconColor = 'text-emerald-600';
    let summaryText = 'All checks passed';
    
    if (bid.verificationChecks && bid.verificationChecks.length > 0) {
      const failedChecks = bid.verificationChecks.filter((c: Record<string, unknown>) => c.status !== 'VERIFIED');
      if (failedChecks.length > 0) {
        summaryIcon = 'report_problem';
        summaryIconColor = 'text-amber-600';
        summaryText = failedChecks.map((c: Record<string, unknown>) => c.discrepancy_detail || c.check_type).join('; ');
      }
    } else {
      summaryIcon = 'hourglass_empty';
      summaryIconColor = 'text-outline';
      summaryText = 'Verification pending';
    }

    if (bid.status === 'FAILED' || bid.status === 'NON_COMPLIANT') {
      summaryIcon = 'error';
      summaryIconColor = 'text-error';
    }

    return (
      <tr key={bid.id || index} className="hover:bg-surface-container-low/60 transition-colors group">
        <td className="py-3.5 px-space-md">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-title-sm text-title-sm text-on-surface font-semibold">{bid.bidder?.entity_name || 'Unknown Bidder'}</span>
              <span className={`font-label-sm text-label-sm px-1.5 py-0.5 rounded font-medium ${index === 0 ? 'bg-surface-container text-on-surface-variant' : 'bg-surface-container text-on-surface-variant'}`}>
                L-{index + 1} Bidder
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5 text-on-surface-variant font-tabular-num text-body-sm">
              <span>GSTIN: {bid.bidder?.gstin || 'N/A'}</span>
              <span className="text-outline-variant">•</span>
              <span>GeM ID: {bid.bidder?.gem_seller_id || 'N/A'}</span>
            </div>
          </div>
        </td>
        <td className="py-3.5 px-space-md">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between font-tabular-num">
              <span className={`font-semibold ${scoreStyle.text}`}>{bid.compliance_score !== null ? `${bid.compliance_score} / 100` : '-- / 100'}</span>
              <span className={`font-label-sm text-label-sm ${scoreStyle.labelText}`}>{scoreStyle.label}</span>
            </div>
            <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
              <div className={`${scoreStyle.bg} h-full rounded-full ${scoreStyle.pulse ? 'animate-pulse' : 'transition-all duration-500'}`} style={{ width: scoreStyle.width }}></div>
            </div>
          </div>
        </td>
        <td className="py-3.5 px-space-md">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm ${riskStyle.bg} ${riskStyle.text} font-semibold`}>
            <span className={`w-1.5 h-1.5 rounded-full ${riskStyle.dot}`}></span>
            {riskStyle.label}
          </span>
        </td>
        <td className="py-3.5 px-space-md">
          <span className={`inline-flex items-center gap-1 ${statusStyle.text} font-medium`}>
            <span className={`material-symbols-outlined text-[18px] ${statusStyle.iconClass || ''}`}>{statusStyle.icon}</span>
            {statusStyle.label}
          </span>
        </td>
        <td className="py-3.5 px-space-md">
          <div className="flex items-start gap-1.5">
            <span className={`material-symbols-outlined ${summaryIconColor} text-[18px] shrink-0 mt-0.5`}>{summaryIcon}</span>
            <span className="text-on-surface-variant">{summaryText}</span>
          </div>
        </td>
        <td className="py-3.5 px-space-md text-right">
          <button className="inline-flex items-center justify-center px-3 py-1.5 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors" type="button">
            View Details
          </button>
        </td>
      </tr>
    );
  })}
</tbody>
</table>
</div>
{/* Pagination Footer */}
<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
<div className="font-tabular-num">
  Showing <span className="font-semibold text-on-surface">1 to {(tender?.bids)?.length || 0}</span> of <span className="font-semibold text-on-surface">{(tender?.bids)?.length || 0}</span> bidders
</div>
<div className="flex items-center gap-1">
<button className="p-1 rounded-lg text-outline-variant hover:bg-surface-container cursor-not-allowed transition-colors" disabled={true} type="button">
<span className="material-symbols-outlined text-[20px]">first_page</span>
</button>
<button className="p-1 rounded-lg text-outline-variant hover:bg-surface-container cursor-not-allowed transition-colors" disabled={true} type="button">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<div className="px-2 font-semibold text-on-surface">1</div>
<button className="p-1 rounded-lg text-on-surface hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
<button className="p-1 rounded-lg text-on-surface hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">last_page</span>
</button>
</div>
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

</main>
      </div>
    </ProtectedRoute>
  );
}
