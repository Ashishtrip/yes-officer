'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/services/api';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function BidderCompliance() {
  const router = useRouter();
  const params = useParams();
  const { user, logout } = useAuth();
  const [tender, setTender] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(true);

  // State for interactivity
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Fallback dummy bidders if tender doesn't provide them
  const [bidders, setBidders] = useState([
    {
      id: 1,
      name: 'ABC Industries Ltd.',
      label: 'L-1 Bidder',
      labelColor: 'bg-surface-container text-on-surface-variant',
      gstin: '27AAACA1234A1Z5',
      gemId: 'GEM-SLR-9821',
      score: 92,
      scoreLabel: 'Excellent',
      risk: 'Low Risk',
      riskColor: 'bg-emerald-50 text-emerald-700',
      riskDot: 'bg-emerald-500',
      statusIcon: 'check_circle',
      statusText: 'Verified',
      statusColor: 'text-emerald-700',
      checkSummary: 'All 5 checks passed (Udyam, GSTN active, PAN matched, No Blacklist, ITR valid)',
      summaryIcon: 'verified_user',
      summaryColor: 'text-emerald-600',
      type: 'verified',
    },
    {
      id: 2,
      name: 'XYZ Pvt Ltd',
      label: 'L-2 Bidder',
      labelColor: 'bg-surface-container text-on-surface-variant',
      gstin: '07AABCS5678B1Z2',
      gemId: 'GEM-SLR-4412',
      score: 74,
      scoreLabel: 'Audit Alert',
      risk: 'Medium Risk',
      riskColor: 'bg-amber-50 text-amber-700',
      riskDot: 'bg-amber-500',
      statusIcon: 'warning',
      statusText: 'Issues Found',
      statusColor: 'text-amber-700',
      checkSummary: 'Udyam enterprise category mismatch (Declared: Micro, Portal: Medium)',
      summaryIcon: 'report_problem',
      summaryColor: 'text-amber-600',
      type: 'flagged',
    },
    {
      id: 3,
      name: 'PQR Traders',
      label: 'Flagged',
      labelColor: 'bg-error-container/40 text-error',
      gstin: '19AABCP9012C1Z9',
      gemId: 'GEM-SLR-1120',
      score: 38,
      scoreLabel: 'Non-Compliant',
      risk: 'Critical Risk',
      riskColor: 'bg-rose-50 text-rose-700',
      riskDot: 'bg-rose-500',
      statusIcon: 'cancel',
      statusText: 'Failed Checks',
      statusColor: 'text-error',
      checkSummary: 'GSTIN cancelled / inactive on portal; PAN mismatch detected',
      summaryIcon: 'error',
      summaryColor: 'text-error',
      type: 'flagged',
    },
    {
      id: 4,
      name: 'DEF Corp Solutions',
      label: 'Queued',
      labelColor: 'bg-surface-container text-on-surface-variant',
      gstin: '33AABCD3456D1Z3',
      gemId: 'GEM-SLR-6651',
      score: null,
      scoreLabel: 'Calculating',
      risk: 'Pending',
      riskColor: 'bg-surface-container text-on-surface-variant',
      riskDot: 'bg-outline',
      statusIcon: 'progress_activity',
      statusText: 'In Progress',
      statusColor: 'text-on-surface-variant',
      checkSummary: 'EPFO API verification pending queue response (Est. 2 mins)',
      summaryIcon: 'hourglass_empty',
      summaryColor: 'text-outline',
      type: 'pending',
    },
  ]);

  useEffect(() => {
    if (params.id) {
      api.getTenderById(params.id as string)
        .then(res => {
          if (res.success) {
            setTender(res.data.tender);
            // In a real app we might map res.data.tender.Bids to bidders state here
          }
        })
        .catch(err => console.error('Failed to load tender', err))
        .finally(() => setLoading(false));
    }
  }, [params.id]);

  if (loading) return <div className="p-8">Loading Bidder Compliance...</div>;
  if (!tender) return <div className="p-8 text-red-500">Tender not found.</div>;

  const filteredBidders = bidders.filter(b => {
    const matchesFilter = filter === 'all' || b.type === filter;
    const matchesSearch = b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          b.gstin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <ProtectedRoute>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-surface-container-high">
        <div className="h-14 w-full px-layout-gutter flex items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-md min-w-[280px]">
            <img alt="Yes Officer Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XF1PZsUoMowWpDMDKHX4d0Uh2TzyN0ieKoXRAg9eWo0KUOJEYX9ay-0FikqKi6SCy-s2qdnXKKSVBN1U3cGfFxFZF0ukpbfXY2DXXHGRuTayL8HUzuRTRsVXDXLBNUvCkLJ45-5sgvvJPij2xXTdFwemSujw5XjPH5QUdV8NmgQmyup3OjnHPFKO06ETugegA2e_yc3BJ49NnxvbQ_j3UdtcbgijRrC1sPHCXBUxBBvQe1hRNlh5IrYBas" />
            <div className="flex flex-col">
              <span className="font-title-sm text-title-sm text-primary leading-none">Yes Officer</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight mt-0.5">GeM Integrated Compliance Suite</span>
            </div>
          </div>
          <nav className="hidden xl:flex items-center h-full gap-space-lg" data-active-classes="text-primary font-title-sm border-b-2 border-primary">
            <Link className="h-full flex items-center px-space-xs font-body-md text-body-md text-primary font-title-sm border-b-2 border-primary transition-colors" href="/">Tenders & Bids</Link>
            <Link className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="/compliance-rules">Compliance Rules</Link>
            <Link className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="/portal-connectors">Portal Connectors</Link>
            <Link className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="/audit-logs">Audit Logs</Link>
          </nav>
          <div className="flex items-center gap-space-md ml-auto">
            <div className="hidden md:flex items-center bg-surface-container-low rounded-xl px-space-md py-1 border border-outline-variant focus-within:border-primary focus-within:bg-surface-container-lowest transition-colors w-72">
              <span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-space-xs">search</span>
              <input className="bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder-on-surface-variant w-full" placeholder="Search tenders, GSTIN, PAN... (Ctrl+K)" type="text" />
            </div>
            <button aria-label="Notifications" className="relative p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span>
            </button>
            <div className="h-6 w-px bg-surface-container-high mx-space-2xs"></div>
            <div className="flex items-center gap-space-sm pl-space-xs cursor-pointer group">
              <img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0gElgbgal4gd4SIMy3OwrKEcZe588flOOdKLPMe4KQ8SoeCQsdkrar6ypZ2bugDnd-W1CEEwh6fZA0UeQvpJYK4xZQmhS5NS9VGrL2hCUUlpfTD9A4ONwukYNR9GdwE_uDTQ7SBkE4ZFxXZMguxQxl-QG5ChJzn0KbJqTwPV0WnU1JFroUwLdTwGYDpAy41oufwfBXZlsuDZK3oN7EQKVs24q22rliyszAmfiQaCV5xMLweN3IuNKsQ" />
              <div className="hidden lg:flex flex-col text-left">
                <span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">{user?.name || 'Rajesh Kumar'}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">{user?.role || 'Procurement Officer'}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <main className="w-full pt-14 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="w-full px-layout-gutter py-space-lg max-w-[1720px] mx-auto space-y-space-lg">
            
            {/* 1. Breadcrumb & Navigation Context */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
              <Link className="hover:text-primary transition-colors" href="/">Home</Link>
              <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
              <Link className="hover:text-primary transition-colors" href="/">Tenders</Link>
              <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
              <Link className="font-tabular-num text-tabular-num text-on-surface-variant hover:text-primary" href={`/tender/${params.id}`}>{tender.tenderReferenceNumber}</Link>
              <span className="material-symbols-outlined text-[16px] text-outline">chevron_right</span>
              <span className="text-on-surface font-semibold">Bidder Compliance Evaluation</span>
            </nav>
            
            {/* 2. Tender Context Header */}
            <div className="w-full bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col xl:flex-row items-start xl:items-center justify-between gap-space-lg">
              <div className="space-y-space-xs max-w-4xl">
                <div className="flex flex-wrap items-center gap-space-sm">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    Tender: {tender.tenderReferenceNumber} <span className="text-on-surface-variant font-normal">— {tender.title}</span>
                  </h1>
                </div>
                <div className="flex flex-wrap items-center gap-x-space-md gap-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm bg-amber-50 text-amber-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                    Status: {tender.status.replace('_', ' ')}
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-outline">category</span>
                    Procurement Category: {tender.category || 'Goods & Machinery'}
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-outline">schedule</span>
                    Due: {new Date(tender.endDate).toLocaleDateString()}
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-outline">account_balance</span>
                    Ministry of Heavy Industries & Public Enterprises
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm w-full sm:w-auto self-end xl:self-center">
                <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-space-md py-2 h-10 rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md" type="button">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Export to PDF
                </button>
                <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-space-lg py-2 h-10 rounded-xl bg-primary-container text-on-primary hover:bg-primary transition-all font-label-md text-label-md shadow-sm active:scale-[0.98]" type="button">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  Finalize Evaluation
                </button>
              </div>
            </div>
            
            {/* 3. Summary Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Bidders</span>
                    <div className="font-display-lg text-display-lg text-on-surface font-tabular-num">24</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">group</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs flex items-center justify-between text-body-sm font-body-sm">
                  <span className="text-secondary font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">trending_up</span>
                    +4 from previous round
                  </span>
                  <span className="text-outline font-label-sm text-label-sm">Round 2 Open</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Fully Verified</span>
                    <div className="font-display-lg text-display-lg text-secondary font-tabular-num">18</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-secondary-container/40 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px]">verified</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs flex items-center justify-between text-body-sm font-body-sm">
                  <span className="text-on-surface-variant flex items-center gap-1 font-tabular-num">
                    <span className="font-semibold text-secondary">75.0%</span> compliance rate
                  </span>
                  <span className="text-on-surface-variant font-tabular-num font-label-sm text-label-sm">Avg Score: 91.4</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Flagged Issues</span>
                    <div className="font-display-lg text-display-lg text-amber-600 font-tabular-num">4</div>
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
                  <span className="text-outline font-label-sm text-label-sm">GST/Udyam alert</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Pending Verification</span>
                    <div className="font-display-lg text-display-lg text-outline font-tabular-num">2</div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-outline">
                    <span className="material-symbols-outlined text-[22px] animate-spin">sync</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs flex items-center justify-between text-body-sm font-body-sm">
                  <span className="text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">hourglass_top</span>
                    EPFO/API queue active
                  </span>
                  <span className="text-outline font-label-sm text-label-sm">Est: ~3m</span>
                </div>
              </div>
            </div>
            
            {/* 4. Quick Filter & Search */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
              <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-md">
                <div className="flex flex-wrap items-center gap-space-sm flex-1">
                  <div className="relative min-w-[280px] flex-1 max-w-md">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-outline">search</span>
                    <input 
                      className="w-full h-10 pl-10 pr-3 rounded-xl bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary outline-none transition-all" 
                      placeholder="Filter bidder name, GSTIN or PAN..." 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                    <button 
                      onClick={() => setFilter('all')}
                      className={`px-3 py-1.5 rounded-full font-label-md text-label-md transition-colors ${filter === 'all' ? 'bg-primary-container text-on-primary shadow-xs' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}
                    >
                      All Bidders (24)
                    </button>
                    <button 
                      onClick={() => setFilter('verified')}
                      className={`px-3 py-1.5 rounded-full font-label-md text-label-md transition-colors ${filter === 'verified' ? 'bg-primary-container text-on-primary shadow-xs' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}
                    >
                      Fully Verified (18)
                    </button>
                    <button 
                      onClick={() => setFilter('flagged')}
                      className={`px-3 py-1.5 rounded-full font-label-md text-label-md transition-colors ${filter === 'flagged' ? 'bg-primary-container text-on-primary shadow-xs' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}
                    >
                      Flagged (4)
                    </button>
                    <button 
                      onClick={() => setFilter('pending')}
                      className={`px-3 py-1.5 rounded-full font-label-md text-label-md transition-colors ${filter === 'pending' ? 'bg-primary-container text-on-primary shadow-xs' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}
                    >
                      Pending (2)
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 text-body-sm font-body-sm self-start lg:self-auto">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-label-sm text-label-sm font-medium">
                    Connected to GSTN, Udyam, Income Tax & EPFO APIs • Real-time Sync Active
                  </span>
                </div>
              </div>

              {/* 5. Main Content Area (Data Table) */}
              <div className="overflow-x-auto rounded-xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low text-outline font-label-sm text-label-sm uppercase tracking-wider">
                      <th className="py-3 px-space-md font-semibold" scope="col">Bidder Name & Identifiers</th>
                      <th className="py-3 px-space-md font-semibold min-w-[180px]" scope="col">Compliance Score</th>
                      <th className="py-3 px-space-md font-semibold" scope="col">Risk Level</th>
                      <th className="py-3 px-space-md font-semibold" scope="col">Status</th>
                      <th className="py-3 px-space-md font-semibold min-w-[280px]" scope="col">Discrepancy / Portal Check Summary</th>
                      <th className="py-3 px-space-md font-semibold text-right" scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container font-body-sm text-body-sm text-on-surface">
                    {filteredBidders.map(bidder => (
                      <tr key={bidder.id} className="hover:bg-surface-container-low/60 transition-colors group">
                        <td className="py-3.5 px-space-md">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <span className="font-title-sm text-title-sm text-on-surface font-semibold">{bidder.name}</span>
                              <span className={`font-label-sm text-label-sm px-1.5 py-0.5 rounded font-medium ${bidder.labelColor}`}>{bidder.label}</span>
                            </div>
                            <div className="flex items-center gap-1.5 mt-0.5 text-on-surface-variant font-tabular-num text-body-sm">
                              <span>GSTIN: {bidder.gstin}</span>
                              <span className="text-outline-variant">•</span>
                              <span>GeM ID: {bidder.gemId}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between font-tabular-num">
                              <span className={`font-semibold ${bidder.score !== null ? bidder.statusColor : 'text-outline'}`}>
                                {bidder.score !== null ? `${bidder.score} / 100` : '-- / 100'}
                              </span>
                              <span className={`font-label-sm text-label-sm ${bidder.score !== null ? bidder.statusColor : 'text-outline'}`}>
                                {bidder.scoreLabel}
                              </span>
                            </div>
                            <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full transition-all duration-500 ${bidder.score === null ? 'bg-outline-variant animate-pulse' : bidder.statusIcon === 'check_circle' ? 'bg-emerald-500' : bidder.statusIcon === 'warning' ? 'bg-amber-500' : 'bg-error'}`} 
                                style={{ width: bidder.score !== null ? `${bidder.score}%` : '15%' }}
                              ></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-label-sm text-label-sm font-semibold ${bidder.riskColor}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${bidder.riskDot}`}></span>
                            {bidder.risk}
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <span className={`inline-flex items-center gap-1 font-medium ${bidder.statusColor}`}>
                            <span className={`material-symbols-outlined text-[18px] ${bidder.statusIcon === 'progress_activity' ? 'animate-spin' : ''}`}>{bidder.statusIcon}</span>
                            {bidder.statusText}
                          </span>
                        </td>
                        <td className="py-3.5 px-space-md">
                          <div className="flex items-start gap-1.5">
                            <span className={`material-symbols-outlined text-[18px] shrink-0 mt-0.5 ${bidder.summaryColor}`}>{bidder.summaryIcon}</span>
                            <span className="text-on-surface-variant">{bidder.checkSummary}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-space-md text-right">
                          <button 
                            className={`inline-flex items-center justify-center px-3 py-1.5 rounded-xl font-label-md text-label-md transition-colors ${bidder.type === 'pending' ? 'bg-surface-container-low text-outline opacity-60 cursor-not-allowed' : 'bg-surface-container-low text-on-surface hover:bg-surface-container-high'}`}
                            type="button"
                            disabled={bidder.type === 'pending'}
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                    {filteredBidders.length === 0 && (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-on-surface-variant">
                          No bidders found matching your criteria.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <div className="font-tabular-num">
                  Showing <span className="font-semibold text-on-surface">1 to {filteredBidders.length}</span> of <span className="font-semibold text-on-surface">24</span> bidders
                </div>
                <div className="flex items-center gap-1">
                  <button className="p-1 rounded-lg text-outline-variant hover:bg-surface-container cursor-not-allowed transition-colors" disabled type="button">
                    <span className="material-symbols-outlined text-[20px]">first_page</span>
                  </button>
                  <button className="p-1 rounded-lg text-outline-variant hover:bg-surface-container cursor-not-allowed transition-colors" disabled type="button">
                    <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                  </button>
                  <div className="flex items-center gap-1 px-1 font-label-md text-label-md">
                    <button className="w-8 h-8 rounded-lg bg-primary-container text-on-primary font-semibold flex items-center justify-center" type="button">1</button>
                    <button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container flex items-center justify-center transition-colors" type="button">2</button>
                    <button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container flex items-center justify-center transition-colors" type="button">3</button>
                    <span className="px-1 text-outline">...</span>
                    <button className="w-8 h-8 rounded-lg text-on-surface-variant hover:bg-surface-container flex items-center justify-center transition-colors" type="button">6</button>
                  </div>
                  <button className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                  </button>
                  <button className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">last_page</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Institutional Context & Verification Note */}
            <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm text-body-sm font-body-sm text-on-surface-variant">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[20px]">policy</span>
                <span>
                  Statutory Verification Engine compliant with <strong>General Financial Rules (GFR) 2017</strong> & <strong>Public Procurement (Preference to Make in India) Order 2017</strong>.
                </span>
              </div>
              <div className="flex items-center gap-space-md font-label-sm text-label-sm text-outline">
                <span>Audit Ref: <span className="font-tabular-num">AUD-2026-99281-EVAL</span></span>
                <span>Cryptographic Hash: <span className="font-tabular-num font-mono text-[10px]">SHA256:7f4c8...19b</span></span>
              </div>
            </div>
            
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
