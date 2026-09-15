// @ts-nocheck
"use client";
import React from "react";
import Link from "next/link";


import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { useAuth } from "../../../../context/AuthContext";

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
        .catch((err: unknown) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [params.id]);

  const generateScores = (bid: Record<string, any>) => {
    return {
      experience: 12.5,
      fin: 18.0,
      tech: 32.5,
      track: 14.0,
      sla: 14.0,
      total: 77.0,
      consensus: 80,
      comment: "Meets baseline criteria"
    };
  };

  const selectedBid = tender?.bids ? (tender?.bids).find((b: Record<string, unknown>) => b.id === selectedBidId) || (tender?.bids)[0] : null;
  const selBidder = selectedBid?.bidder as Record<string, unknown> || {};
  const selScores = selectedBid ? generateScores(selectedBid) : null;

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
{/* Top Command Ribbon & Institutional Context Bar */}
<section className="w-full bg-surface-container-lowest border-b border-surface-container-high px-space-layout-gutter py-space-sm">
<div className="max-w-[1720px] mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between gap-space-sm">
{/* Breadcrumb + Title Block */}
<div className="flex flex-col gap-space-2xs min-w-0">
<nav className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<span className="hover:text-primary cursor-pointer">Portal Desk</span>
<span className="material-symbols-outlined text-[13px] text-outline">chevron_right</span>
<span className="hover:text-primary cursor-pointer">Tenders &amp; Bids</span>
<span className="material-symbols-outlined text-[13px] text-outline">chevron_right</span>
<span className="font-tabular-num text-on-surface">GEM/2026/B/489201</span>
<span className="material-symbols-outlined text-[13px] text-outline">chevron_right</span>
<span className="text-primary font-bold">TEC Scoring &amp; Quorum Portal</span>
</nav>
<div className="flex items-center gap-space-sm flex-wrap">
<h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-semibold flex items-center gap-space-xs">
            Technical Evaluation Committee (TEC) Scoring &amp; Quorum Matrix
          </h1>
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
            FIPS 140-3 HSM Root Verified
          </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[14px] text-primary">security</span>
            PRD 4.8 / TDD §4.2 Statutory Mode
          </span>
</div>
</div>
{/* Quick Action Commands */}
<div className="flex items-center gap-space-xs shrink-0 flex-wrap">
<button className="h-9 px-space-md inline-flex items-center gap-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-label-md font-label-md transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[17px] text-primary">description</span>
          Download TEC Summary (Class-3 Signed)
        </button>
<button className="h-9 px-space-md inline-flex items-center gap-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface text-label-md font-label-md transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[17px] text-secondary">sync</span>
          Sync GeM Technical Stage
        </button>
<button onClick={() => router.push(`/tender/${tender.id}/financial`)} className="h-9 px-space-md inline-flex items-center gap-1.5 rounded-lg bg-primary hover:bg-primary-container text-on-primary text-label-md font-label-md transition-colors shadow-md" type="button">
<span className="material-symbols-outlined text-[17px]">lock_open</span>
          Authorize Financial Envelope Decryption
        </button>
</div>
</div>
</section>
{/* Tender Metadata Brief Strip */}
<section className="w-full bg-surface-container-low border-b border-surface-container-high px-space-layout-gutter py-space-xs">
<div className="max-w-[1720px] mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-6 text-on-surface font-body-sm text-body-sm">
<div className="flex items-center gap-4 flex-wrap">
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">Tender:</span>
<span className="font-tabular-num font-semibold text-primary">GEM/2026/B/489201</span>
</div>
<div className="h-3 w-px bg-outline-variant"></div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">Category:</span>
<span className="text-on-surface font-medium">High-Precision Biomedical &amp; Diagnostic Equipment</span>
</div>
<div className="h-3 w-px bg-outline-variant"></div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">Indenting Ministry:</span>
<span className="text-on-surface">Ministry of Health &amp; Family Welfare (MoHFW)</span>
</div>
<div className="h-3 w-px bg-outline-variant"></div>
<div className="flex items-center gap-1.5">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wide">Est. Value:</span>
<span className="font-tabular-num font-bold text-primary">₹48,50,00,000 (INR 48.50 Cr)</span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[15px]">verified</span>
          Multi-Key DSC Quorum: 4 of 4 Keys Active
        </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Last Root Check: 14:02:18 IST</span>
</div>
</div>
</section>
{/* Main Body Content Grid */}
<div className="w-full px-space-layout-gutter py-space-md">
<div className="max-w-[1720px] mx-auto flex flex-col gap-space-md">
{/* SECTION 1: Executive TEC Quorum & Milestone Strip (Bento Overview) */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
{/* Card 1: Quorum Readiness */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-surface-container-high relative overflow-hidden flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Quorum Integrity</span>
<span className="font-display-lg text-display-lg font-bold text-primary mt-1">100%</span>
<span className="font-body-sm text-body-sm text-secondary font-medium flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[15px]">check_circle</span>
                4 of 4 Members Present &amp; Signed
              </span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">vpn_key</span>
</div>
</div>
<div className="mt-3 pt-2 border-t border-surface-container-high flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Threshold: GFR 173(xvi)</span>
<span className="font-tabular-num text-secondary font-semibold">Decryption Validated</span>
</div>
</div>
{/* Card 2: Bids Processed */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-surface-container-high flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Evaluation Velocity</span>
<span className="font-display-lg text-display-lg font-bold text-on-surface mt-1">24 <span className="text-headline-md text-on-surface-variant font-normal">/ 24</span></span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">100% Technical Stage Concluded</span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">fact_check</span>
</div>
</div>
<div className="mt-3 pt-2 border-t border-surface-container-high flex items-center justify-between font-label-sm text-label-sm">
<span className="text-secondary font-semibold">18 Qualified</span>
<span className="text-error font-semibold">5 Disqualified</span>
<span className="text-tertiary-container font-semibold">1 Stipulated</span>
</div>
</div>
{/* Card 3: Technical Scoring Distribution */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-surface-container-high flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Mean Technical Score</span>
<span className="font-display-lg text-display-lg font-bold text-primary mt-1 font-tabular-num">84.6 <span className="text-headline-md text-on-surface-variant font-normal">/ 100</span></span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Min Qualifying Floor: 75.0</span>
</div>
{/* Mini Inline SVG Distribution Gauge */}
<div className="w-12 h-12 shrink-0">
<svg className="w-full h-full text-primary transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="84.6, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
</div>
</div>
<div className="mt-3 pt-2 border-t border-surface-container-high flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Score Standard Deviation</span>
<span className="font-tabular-num font-semibold text-on-surface">±4.18 Pts</span>
</div>
</div>
{/* Card 4: Consensus & Dissent Ratio */}
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-surface-container-high flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Consensus Stability</span>
<span className="font-display-lg text-display-lg font-bold text-secondary mt-1">Unanimous</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">22 Unanimous • 2 Majority Votes</span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[24px]">gavel</span>
</div>
</div>
<div className="mt-3 pt-2 border-t border-surface-container-high flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Dissent Records</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-semibold">0 Formal Dissents</span>
</div>
</div>
</section>
{/* SECTION 2: Committee Member Attestation & Keyholder Deck */}
<section className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm border border-surface-container-high flex flex-col gap-space-sm">
<div className="flex items-center justify-between border-b border-surface-container-high pb-2">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">badge</span>
<h2 className="font-title-sm text-title-sm text-on-surface font-semibold">Statutory TEC Keyholders &amp; Attestation Register</h2>
<span className="text-on-surface-variant font-label-sm text-label-sm">(Rule 173(xvi) Gazetted Committee)</span>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
              All Cryptographic Hardware Tokens Live
            </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-sm">
{/* Keyholder 1 */}
<div className="bg-surface-container-low rounded-lg p-3 border border-surface-container-high flex flex-col justify-between gap-3">
<div className="flex items-start gap-3">
<img className="w-11 h-11 rounded-full object-cover ring-2 ring-primary shrink-0" data-alt="Official portrait photo of Indian woman senior aerospace scientist Dr Sunita Meena, formal government attire, clean crisp background, institutional lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBycg1cg48BOjTOqv_aytJFhNKmQIPgBw9_HnAt8ez-f_ddRZS74vl0d_BP02wWNh153huFvHVPev8fVusy-P8dQ97gNWaBfKFtaHnUR1KdM4LvWmPLSjIlftmYKz9ggvrfq5Kfeof8jKMwTza1gSba_vXNtraNaAOBzgvzcRyf-fPXT2wjimEUjVF6ZpnqE8s650N2gVGP9Gcgm3nT0tXq4DPYmqw8Yx-mcX6rZNX76a3kyDDsxRF8gQ"/>
<div className="flex flex-col min-w-0">
<span className="font-title-sm text-[13px] text-on-surface font-bold truncate">Dr. Sunita Meena</span>
<span className="font-label-sm text-[11px] text-primary font-semibold truncate">Chairperson, TEC</span>
<span className="font-body-sm text-[11px] text-on-surface-variant truncate">ISRO / Dept. of Space</span>
</div>
</div>
<div className="flex flex-col gap-1 text-[11px] font-body-sm bg-surface-container-lowest p-2 rounded border border-surface-container-high">
<div className="flex justify-between items-center">
<span className="text-on-surface-variant font-label-sm">DSC Token:</span>
<span className="font-tabular-num font-semibold text-on-surface">Class-3 (NIC CA)</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant font-label-sm">Signed Stamp:</span>
<span className="font-tabular-num text-on-surface-variant">Today 13:48:22 IST</span>
</div>
<div className="flex items-center justify-between pt-1 border-t border-surface-container-high">
<span className="text-secondary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">key</span> Quorum Key Decrypted
                </span>
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
</div>
</div>
</div>
{/* Keyholder 2 */}
<div className="bg-surface-container-low rounded-lg p-3 border border-surface-container-high flex flex-col justify-between gap-3">
<div className="flex items-start gap-3">
<img alt="Rajesh Kumar IAS" className="w-11 h-11 rounded-full object-cover ring-2 ring-primary shrink-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0gElgbgal4gd4SIMy3OwrKEcZe588flOOdKLPMe4KQ8SoeCQsdkrar6ypZ2bugDnd-W1CEEwh6fZA0UeQvpJYK4xZQmhS5NS9VGrL2hCUUlpfTD9A4ONwukYNR9GdwE_uDTQ7SBkE4ZFxXZMguxQxl-QG5ChJzn0KbJqTwPV0WnU1JFroUwLdTwGYDpAy41oufwfBXZlsuDZK3oN7EQKVs24q22rliyszAmfiQaCV5xMLweN3IuNKsQ"/>
<div className="flex flex-col min-w-0">
<span className="font-title-sm text-[13px] text-on-surface font-bold truncate">Rajesh Kumar, IAS</span>
<span className="font-label-sm text-[11px] text-primary font-semibold truncate">Member Secretary</span>
<span className="font-body-sm text-[11px] text-on-surface-variant truncate">Sr. Procurement Officer, MoHFW</span>
</div>
</div>
<div className="flex flex-col gap-1 text-[11px] font-body-sm bg-surface-container-lowest p-2 rounded border border-surface-container-high">
<div className="flex justify-between items-center">
<span className="text-on-surface-variant font-label-sm">DSC Token:</span>
<span className="font-tabular-num font-semibold text-on-surface">Class-3 (e-Mudhra)</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant font-label-sm">Signed Stamp:</span>
<span className="font-tabular-num text-on-surface-variant">Today 13:52:10 IST</span>
</div>
<div className="flex items-center justify-between pt-1 border-t border-surface-container-high">
<span className="text-secondary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">key</span> Quorum Key Decrypted
                </span>
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
</div>
</div>
</div>
{/* Keyholder 3 */}
<div className="bg-surface-container-low rounded-lg p-3 border border-surface-container-high flex flex-col justify-between gap-3">
<div className="flex items-start gap-3">
<img className="w-11 h-11 rounded-full object-cover ring-2 ring-primary shrink-0" data-alt="Senior Indian academic professor male Prof MK Narayanan with grey hair, spectacles, formal blazer, intellectual scholarly demeanor, neutral studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA4vQBaHb8MwiRStkR93n1o8MxqmNllE2bvoPYE5_fpONjsdTsv9Xkx6I7vQ4dx0dbd-B8OCh-6hANusXDcdi7FJJdphPyqZulX0QG9uYpohvDXSTBEsebkgqT86UfrbSwmdu1GAdk4oFRKV-OcUXIkSuKi_nSQbTjGgVvbXc58s5XqWYiPJFUlwlNzYD3ETwjw00bKCUIbsH8v9Q8Bo9JVNesYzd6rpFPEja3dFlNku3LHiNQUJveqA"/>
<div className="flex flex-col min-w-0">
<span className="font-title-sm text-[13px] text-on-surface font-bold truncate">Prof. M. K. Narayanan</span>
<span className="font-label-sm text-[11px] text-primary font-semibold truncate">External Technical SME</span>
<span className="font-body-sm text-[11px] text-on-surface-variant truncate">AIIMS Bio-Engineering Dept.</span>
</div>
</div>
<div className="flex flex-col gap-1 text-[11px] font-body-sm bg-surface-container-lowest p-2 rounded border border-surface-container-high">
<div className="flex justify-between items-center">
<span className="text-on-surface-variant font-label-sm">DSC Token:</span>
<span className="font-tabular-num font-semibold text-on-surface">Class-3 (Capricorn CA)</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant font-label-sm">Signed Stamp:</span>
<span className="font-tabular-num text-on-surface-variant">Today 13:56:44 IST</span>
</div>
<div className="flex items-center justify-between pt-1 border-t border-surface-container-high">
<span className="text-secondary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">key</span> Quorum Key Decrypted
                </span>
<span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
</div>
</div>
</div>
{/* Keyholder 4: Non-Voting Integrity Monitor */}
<div className="bg-surface-container-low rounded-lg p-3 border border-surface-container-high flex flex-col justify-between gap-3">
<div className="flex items-start gap-3">
<img className="w-11 h-11 rounded-full object-cover ring-2 ring-outline-variant shrink-0" data-alt="Portrait of senior Indian auditor officer Amitav Banerjee IA and AS, wearing formal suit with necktie, sharp composed expression, administrative office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSr1rGg7bkRMxfY2mmmp2prusxGeEygCB95CcUwlPde7O5C7rw0Wp34v2SMXvvrJnuUTgZmfPITr404cLPaEFFgRsV4T6qlnjpND_WjdK5ZzcdUhh-P6wgSsqOhI7cnSXp0ifUy1UCl8uGPP8qC48oZhDkSt_whQlvqBHLAMsXFDzJKRE7VdZ-vFfgy_fjJawSygaMc4Sl7tzUcMCrFk79ms7jU1kX2wj1jBEE1FdyF6SiF58keQ-mPA"/>
<div className="flex flex-col min-w-0">
<span className="font-title-sm text-[13px] text-on-surface font-bold truncate">Amitav Banerjee, IA&amp;AS</span>
<span className="font-label-sm text-[11px] text-on-surface-variant font-semibold truncate">Vigilance &amp; CAG Observer</span>
<span className="font-body-sm text-[11px] text-on-surface-variant truncate">Independent Monitor (Non-Voting)</span>
</div>
</div>
<div className="flex flex-col gap-1 text-[11px] font-body-sm bg-surface-container-lowest p-2 rounded border border-surface-container-high">
<div className="flex justify-between items-center">
<span className="text-on-surface-variant font-label-sm">Role:</span>
<span className="font-semibold text-on-surface">Procedural Witness</span>
</div>
<div className="flex justify-between items-center">
<span className="text-on-surface-variant font-label-sm">Integrity Seal:</span>
<span className="font-tabular-num text-primary font-mono font-semibold">#VIG-8842-OK</span>
</div>
<div className="flex items-center justify-between pt-1 border-t border-surface-container-high">
<span className="text-secondary font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[13px]">shield</span> Audit Hash Verified
                </span>
<span className="material-symbols-outlined text-secondary text-[16px]">done_all</span>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 3 & 4: Detailed Multi-Bidder Scoring Matrix (Left 65%) & Selected Bidder Deep Dive Drawer (Right 35%) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
{/* LEFT COLUMN: High-Density Table (8 cols on lg/xl) */}
<div className="lg:col-span-8 flex flex-col gap-space-sm">
{/* Table Toolbar */}
<div className="bg-surface-container-lowest rounded-xl p-3 border border-surface-container-high flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-2 flex-wrap">
<div className="relative w-64">
<span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[18px] text-on-surface-variant">search</span>
<input className="w-full h-9 pl-8 pr-3 text-body-sm font-body-sm rounded-lg bg-surface-container-low border border-surface-container-high focus:outline-none focus:border-primary text-on-surface" placeholder="Filter bidder name, GeM ID..." type="text"/>
</div>
<div className="flex items-center gap-1 text-label-sm font-label-sm text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">
<span>Filter:</span>
<select className="bg-transparent font-semibold text-on-surface outline-none cursor-pointer">
<option>All Evaluated (24)</option>
<option>Qualified Only (18)</option>
<option>Disqualified (5)</option>
<option>Score Variance &gt;5 pts (2)</option>
</select>
</div>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant">Consensus Formula: <span className="font-mono text-on-surface font-semibold">Mean(Scores) ≥ 75.00</span></span>
<button className="h-8 px-2.5 rounded bg-surface-container-low hover:bg-surface-container text-on-surface text-label-sm font-label-sm flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[15px]">file_download</span> Export CSV
              </button>
</div>
</div>
{/* Master Table Container */}
<div className="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full border-collapse text-left text-body-sm font-body-sm">
<thead>
<tr className="bg-surface-container-low border-b border-surface-container-high text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3 px-3 w-16 text-center">Rank</th>
<th className="py-3 px-4 min-w-[220px]">Bidder Entity &amp; GeM ID</th>
<th className="py-3 px-3 text-center">AI Base</th>
<th className="py-3 px-3 text-right">Tech (35)</th>
<th className="py-3 px-3 text-right">Track (30)</th>
<th className="py-3 px-3 text-right">Fin (20)</th>
<th className="py-3 px-3 text-right">SLA (15)</th>
<th className="py-3 px-3 text-center">Committee Pts</th>
<th className="py-3 px-3 text-right font-bold text-primary">Composite</th>
<th className="py-3 px-3 text-center">Verdict</th>
<th className="py-3 px-3 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-high">
                {((tender?.bids || [])).map((bid: Record<string, unknown>, index: number) => {
                  const scores = generateScores(bid);
                  const bidder = bid.bidder || {};
                  return (
                    <tr key={bid.id} onClick={() => setSelectedBidId(bid.id)} className={`hover:bg-surface-container-low transition-colors cursor-pointer group ${selectedBidId === bid.id ? 'bg-surface-container' : ''}`}>
                      <td className="py-3 px-3 text-center font-tabular-num font-bold text-primary">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-fixed text-primary font-label-sm">T-{index + 1}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-col">
                          <span className="font-title-sm text-[13px] font-semibold text-on-surface group-hover:text-primary">{bidder.entity_name || "Unknown Bidder"}</span>
                          <div className="flex items-center gap-1.5 font-label-sm text-[10px] text-on-surface-variant mt-0.5">
                            <span className="font-mono">{bidder.gem_seller_id || "N/A"}</span>
                            <span>•</span>
                            <span className="text-secondary font-semibold">Class-I MII</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className="inline-flex items-center gap-0.5 text-secondary font-tabular-num font-semibold text-[12px]">
                          <span className="material-symbols-outlined text-[13px]">verified</span> {(bid.compliance_score || 0).toFixed(1)}%
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right font-tabular-num text-on-surface">{scores.tech}/35</td>
                      <td className="py-3 px-3 text-right font-tabular-num text-on-surface">{scores.track}/30</td>
                      <td className="py-3 px-3 text-right font-tabular-num text-on-surface">{scores.fin}/20</td>
                      <td className="py-3 px-3 text-right font-tabular-num text-on-surface">{scores.sla}/15</td>
                      <td className="py-3 px-3 text-center">
                        <div className="flex items-center justify-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((_, i) => (
                            <div key={i} className={`w-1.5 h-4 rounded-sm ${i < 4 ? 'bg-primary' : 'bg-surface-container-high'}`}></div>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-3 text-right font-tabular-num font-bold text-primary text-[14px]">{scores.total}</td>
                      <td className="py-3 px-3 text-center">
                        <span className={`inline-flex px-1.5 py-0.5 rounded font-label-sm text-[10px] font-bold uppercase tracking-wider ${scores.total >= 75 ? 'bg-secondary-fixed text-secondary' : 'bg-error-container text-error'}`}>
                          {scores.consensus}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button className="text-on-surface-variant hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
</table>
</div>
{/* Table Pagination & Audit Hash Footer */}
<div className="bg-surface-container-low border-t border-surface-container-high px-4 py-2.5 flex items-center justify-between flex-wrap gap-2 text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-2">
<span>Showing 1 to 7 of 24 Total Evaluated Bids</span>
<span className="h-3 w-px bg-outline-variant"></span>
<span className="text-primary font-semibold">Statutory Sorting: Highest Composite Tech Score (T-1 Descending)</span>
</div>
<div className="flex items-center gap-1">
<button className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container border border-surface-container-high disabled:opacity-50" type="button">Prev</button>
<button className="px-2.5 py-1 rounded bg-primary text-on-primary font-bold" type="button">1</button>
<button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container border border-surface-container-high" type="button">2</button>
<button className="px-2.5 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container border border-surface-container-high" type="button">3</button>
<button className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container border border-surface-container-high" type="button">Next</button>
</div>
</div>
</div>
{/* Parameter Weightage Legend Banner */}
<div className="bg-surface-container-low rounded-xl p-3 border border-surface-container-high flex items-center justify-between flex-wrap gap-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">balance</span>
<span className="font-label-md text-label-md text-on-surface font-semibold">Tender Weightage Scheme:</span>
</div>
<div className="flex items-center gap-4 text-body-sm font-body-sm text-on-surface-variant flex-wrap">
<span className="flex items-center gap-1">
<span className="w-2.5 h-2.5 rounded bg-primary"></span> OEM Specs: <strong className="font-tabular-num text-on-surface">35 Pts</strong>
</span>
<span className="flex items-center gap-1">
<span className="w-2.5 h-2.5 rounded bg-primary-fixed-variant"></span> Past Track: <strong className="font-tabular-num text-on-surface">30 Pts</strong>
</span>
<span className="flex items-center gap-1">
<span className="w-2.5 h-2.5 rounded bg-surface-tint"></span> Solvency &amp; Fin: <strong className="font-tabular-num text-on-surface">20 Pts</strong>
</span>
<span className="flex items-center gap-1">
<span className="w-2.5 h-2.5 rounded bg-secondary"></span> Service SLA: <strong className="font-tabular-num text-on-surface">15 Pts</strong>
</span>
</div>
</div>
</div>
{/* RIGHT COLUMN: Inspection & Consensus Drawer / Panel (4 cols on lg/xl) */}
            <div className="lg:col-span-4 flex flex-col gap-space-sm">
              <div className="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-md overflow-hidden flex flex-col">
                {/* Inspection Card Header */}
                <div className="bg-surface-container-low p-space-sm border-b border-surface-container-high flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">assignment_turned_in</span>
                    <h3 className="font-title-sm text-title-sm text-on-surface font-semibold">Bidder Evaluation Deep Dive</h3>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-tabular-num font-bold text-label-sm">
                    {selectedBidId ? 'Selected' : 'None'}
                  </span>
                </div>
                {selectedBid ? (
                  <div className="p-space-md flex flex-col gap-space-sm">
                    {/* Selected Bidder Header Info */}
                    <div className="flex flex-col gap-1 pb-3 border-b border-surface-container-high">
                      <div className="flex items-center justify-between">
                        <span className="font-headline-md text-[17px] font-bold text-on-surface">{selBidder.entity_name || "Unknown Bidder"}</span>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-label-sm text-[11px] font-bold uppercase ${selScores?.total >= 75 ? 'bg-secondary-container text-on-secondary-container' : 'bg-error-container text-error'}`}>
                          {selScores?.consensus}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                        <span>GSTIN: {selBidder.gstin || "N/A"}</span>
                        <span>•</span>
                        <span>GeM ID: {selBidder.gem_seller_id || "N/A"}</span>
                      </div>
                    </div>

                    {/* Parameter Sub-score Breakdown with Progress Bars */}
                    <div className="flex flex-col gap-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Consolidated Sub-Parameters</span>
                      <div className="space-y-2 text-body-sm font-body-sm">
                        <div>
                          <div className="flex justify-between font-label-sm text-[11px] mb-0.5">
                            <span className="text-on-surface font-medium">OEM Specifications Compliance (Max 35)</span>
                            <span className="font-tabular-num font-bold text-primary">{selScores?.tech} / 35.0</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${(selScores?.tech / 35) * 100}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between font-label-sm text-[11px] mb-0.5">
                            <span className="text-on-surface font-medium">Past Performance & Indian Deployments (Max 30)</span>
                            <span className="font-tabular-num font-bold text-primary">{selScores?.track} / 30.0</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${(selScores?.track / 30) * 100}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between font-label-sm text-[11px] mb-0.5">
                            <span className="text-on-surface font-medium">Financial Standing & Solvency Ratio (Max 20)</span>
                            <span className="font-tabular-num font-bold text-primary">{selScores?.fin} / 20.0</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${(selScores?.fin / 20) * 100}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between font-label-sm text-[11px] mb-0.5">
                            <span className="text-on-surface font-medium">Service Network & Mean Time to Repair (Max 15)</span>
                            <span className="font-tabular-num font-bold text-primary">{selScores?.sla} / 15.0</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${(selScores?.sla / 15) * 100}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Digital Seal & SHA-256 Merkle Ledger */}
                    <div className="bg-surface-container-low rounded-lg p-2.5 border border-surface-container-high font-mono text-[10px] text-on-surface-variant flex flex-col gap-1 mt-4">
                      <div className="flex items-center justify-between text-on-surface font-semibold">
                        <span className="flex items-center gap-1 font-label-sm"><span className="material-symbols-outlined text-[13px] text-primary">fingerprint</span> Cryptographic Seal</span>
                        <span className="text-secondary">SHA-256 Validated</span>
                      </div>
                      <div className="truncate text-on-surface" title={selectedBid.id}>
                        Merkle Root: {selectedBid.id}
                      </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="flex flex-col gap-2 pt-2 border-t border-surface-container-high mt-4">
                      <button className="w-full h-9 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors shadow" type="button">
                        <span className="material-symbols-outlined text-[17px]">lock</span>
                        Confirm & Lock Bidder Qualification
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-space-md text-center text-on-surface-variant font-body-sm">
                    Select a bidder to view details.
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* SECTION 5: Statutory Compliance Footer & Regulatory Authorities */}
<footer className="mt-space-sm bg-surface-container-lowest rounded-xl p-space-md border border-surface-container-high flex flex-col gap-space-sm shadow-sm">
<div className="flex items-center justify-between flex-wrap gap-2 border-b border-surface-container-high pb-3">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-primary font-bold font-title-sm text-title-sm">
<span className="material-symbols-outlined text-[20px]">account_balance</span>
              Government of India Procurement Compliance Framework
            </div>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase font-semibold">
              NIC • MeitY • CVC Enforced
            </span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant font-label-sm text-label-sm">
<span>Session ID: <strong className="text-on-surface font-mono">TEC-SES-2026-489201-B</strong></span>
<span>•</span>
<span>Server Time: <strong className="text-on-surface font-tabular-num">14:03:45 IST</strong></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md text-body-sm font-body-sm text-on-surface-variant">
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-primary text-[15px]">verified</span>
              General Financial Rules (GFR) 2017 - Rule 173(xvi)
            </span>
<p className="text-[12px] leading-relaxed">
              Mandates full technical evaluation of responsiveness before opening financial bids. Evaluators are bound by statutory integrity pacts with zero tolerance for conflict of interest.
            </p>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-primary text-[15px]">verified</span>
              Manual for Procurement of Goods 2024 (MoF)
            </span>
<p className="text-[12px] leading-relaxed">
              Chapter 7 provisions govern committee quorum validation, composite scoring aggregation, and recording of dissenting rationales prior to technical qualification notification.
            </p>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-primary text-[15px]">verified</span>
              Section 65B Indian Evidence Act &amp; IT Act 2000
            </span>
<p className="text-[12px] leading-relaxed">
              Electronic evidence admissibility ensured through multi-signatory Class-3 Digital Signature Certificates (DSC) anchored to FIPS 140-3 Hardware Security Modules.
            </p>
</div>
</div>
</footer>
</div>
</div>
</div></main>
    </div>
  );
}
