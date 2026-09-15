'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function ComplianceRules() {
  const { user, logout } = useAuth();
  const [selectedRule, setSelectedRule] = useState<string>('FIN-TURNOVER');
  const [tolerance, setTolerance] = useState<number>(1.0);

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
            <Link className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="/">Tenders & Bids</Link>
            <Link className="h-full flex items-center px-space-xs font-body-md text-body-md text-primary font-title-sm border-b-2 border-primary transition-colors" href="/compliance-rules">Compliance Rules</Link>
            <Link className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">Portal Connectors</Link>
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
            <button aria-label="Help and Support" className="p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]">help</span>
            </button>
            <div className="h-6 w-px bg-surface-container-high mx-space-2xs"></div>
            <div className="flex items-center gap-space-sm pl-space-xs cursor-pointer group">
              <img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0gElgbgal4gd4SIMy3OwrKEcZe588flOOdKLPMe4KQ8SoeCQsdkrar6ypZ2bugDnd-W1CEEwh6fZA0UeQvpJYK4xZQmhS5NS9VGrL2hCUUlpfTD9A4ONwukYNR9GdwE_uDTQ7SBkE4ZFxXZMguxQxl-QG5ChJzn0KbJqTwPV0WnU1JFroUwLdTwGYDpAy41oufwfBXZlsuDZK3oN7EQKVs24q22rliyszAmfiQaCV5xMLweN3IuNKsQ" />
              <div className="hidden lg:flex flex-col text-left">
                <span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">{user?.name || 'Rajesh Kumar, IAS'}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">{user?.role || 'Senior Procurement Officer'}</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface text-[18px]">expand_more</span>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full pt-14 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="w-full px-layout-margin py-space-xl flex flex-col gap-space-xl bg-surface">
            {/* Section 1: Header, Breadcrumbs, Identity & Global Actions */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
              <div className="flex flex-col gap-space-2xs min-w-0">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
                  <Link href="/" className="hover:text-primary cursor-pointer transition-colors">Home</Link>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <span className="hover:text-primary cursor-pointer transition-colors">Configuration</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <span className="text-primary font-semibold">Compliance Rules Engine</span>
                </div>
                <div className="flex flex-wrap items-center gap-space-md mt-space-xs">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                    Statutory & Tender-Specific Compliance Rule Engine
                  </h1>
                  <div className="flex items-center gap-space-xs px-space-sm py-0.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                    </span>
                    <span className="font-semibold text-primary">Engine v2.4</span>
                    <span className="text-on-surface-variant">· GFR 2017 & PPO 2017 Compliant</span>
                  </div>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-4xl mt-0.5">
                  Configure verification criteria, threshold tolerances, statutory mandates, and scoring weightages applied automatically across Government e-Marketplace (GeM) bidder technical and preliminary evaluations.
                </p>
              </div>
              <div className="flex items-center gap-space-md shrink-0 self-start lg:self-center">
                <button className="flex items-center gap-space-xs px-space-base h-9 bg-surface-container-lowest text-on-surface font-label-md text-label-md rounded-lg shadow-sm hover:bg-surface-container-low active:bg-surface-container transition-all" type="button">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">cloud_upload</span>
                  <span>Audit Rule Changes</span>
                </button>
                <button className="flex items-center gap-space-xs px-space-base h-9 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-md hover:bg-primary transition-all" type="button">
                  <span className="material-symbols-outlined text-[18px]">add_circle</span>
                  <span>Add Custom Rule</span>
                </button>
              </div>
            </div>

            {/* Section 2: 4-Metric Statutory Indicator Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-lg">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Configured Fleet</span>
                    <div className="flex items-baseline gap-space-xs mt-1">
                      <span className="font-display-lg text-display-lg text-on-surface font-bold">18</span>
                      <span className="font-label-md text-label-md text-secondary font-semibold">Active & Live</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">verified</span>
                  </div>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden mt-space-md">
                  <div className="bg-secondary h-full rounded-full" style={{ width: "100%" }}></div>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mt-space-xs">
                  <span>0 Disabled</span>
                  <span>100% Operational Coverage</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Statutory Mandates</span>
                    <div className="flex items-baseline gap-space-xs mt-1">
                      <span className="font-display-lg text-display-lg text-on-surface font-bold">5</span>
                      <span className="font-label-md text-label-md text-error font-semibold">Non-Negotiable</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-error-container/40 flex items-center justify-center text-error">
                    <span className="material-symbols-outlined text-[22px]">gavel</span>
                  </div>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden mt-space-md">
                  <div className="bg-error h-full rounded-full" style={{ width: "100%" }}></div>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mt-space-xs">
                  <span>Instant Disqualification Gate</span>
                  <span className="font-semibold text-on-surface">Zero Waiver</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Tolerance Gates</span>
                    <div className="flex items-baseline gap-space-xs mt-1">
                      <span className="font-display-lg text-display-lg text-on-surface font-bold">4</span>
                      <span className="font-label-md text-label-md text-on-tertiary-container font-semibold">Calibrated</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-tertiary-fixed/60 flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined text-[22px]">tune</span>
                  </div>
                </div>
                <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden mt-space-md">
                  <div className="bg-on-tertiary-container h-full rounded-full" style={{ width: "80%" }}></div>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mt-space-xs">
                  <span>e.g., Turnover ±1.0%</span>
                  <span>Fuzzy Name &gt;95%</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Portal Connectors</span>
                    <div className="flex items-baseline gap-space-xs mt-1">
                      <span className="font-display-lg text-display-lg text-on-surface font-bold">6 / 6</span>
                      <span className="font-label-md text-label-md text-secondary font-semibold">Synced</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-secondary-fixed/50 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px]">hub</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 mt-space-md">
                  <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">GSTN</span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Udyam</span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">NSDL</span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">EPFO</span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">MCA</span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">CVC</span>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm mt-space-xs">
                  <span>Latency &lt; 340ms avg</span>
                  <span className="text-secondary font-semibold">Real-time Ping OK</span>
                </div>
              </div>
            </div>

            {/* Section 3: Dual Workspace Architecture */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-xl items-start">
              {/* Left 8 Columns */}
              <div className="xl:col-span-8 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-xs overflow-x-auto pb-1 md:pb-0">
                    <button className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm font-semibold tracking-wide shrink-0">
                      All Rules (18)
                    </button>
                    <button className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm tracking-wide shrink-0 transition-colors">
                      Statutory Mandates (5)
                    </button>
                    <button className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm tracking-wide shrink-0 transition-colors">
                      Financial Viability (4)
                    </button>
                    <button className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm tracking-wide shrink-0 transition-colors">
                      Technical / MSME (4)
                    </button>
                    <button className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm tracking-wide shrink-0 transition-colors">
                      Provenance & Integrity (3)
                    </button>
                    <button className="px-space-md py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm tracking-wide shrink-0 transition-colors">
                      Custom Specific (2)
                    </button>
                  </div>
                  <div className="flex items-center gap-space-xs shrink-0 self-end md:self-auto">
                    <span className="text-on-surface-variant font-label-sm text-label-sm">Sort by:</span>
                    <select className="h-8 bg-surface-container-low text-on-surface font-label-sm text-label-sm px-2 rounded-lg outline-none cursor-pointer">
                      <option>Severity: Highest to Lowest</option>
                      <option>Rule ID Ascending</option>
                      <option>Source Portal</option>
                      <option>Evaluation Order</option>
                    </select>
                  </div>
                </div>

                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="px-space-lg py-space-md bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="font-title-sm text-title-sm text-on-surface font-bold">Standard Rule Registry</span>
                      <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm text-label-sm font-semibold">Active Engine Schema 2024.1</span>
                    </div>
                    <div className="flex items-center gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
                      <span className="flex items-center gap-1"><span className="inline-block w-2 h-2 rounded-full bg-error"></span> Hard Gate</span>
                      <span className="flex items-center gap-1 ml-2"><span className="inline-block w-2 h-2 rounded-full bg-secondary"></span> Weighted Point</span>
                      <span className="flex items-center gap-1 ml-2"><span className="inline-block w-2 h-2 rounded-full bg-tertiary"></span> Preference</span>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-surface-container-low/50 text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                          <th className="py-space-md px-space-lg">Rule Identifier & Description</th>
                          <th className="py-space-md px-space-md">Verification Source</th>
                          <th className="py-space-md px-space-md">Gate Type</th>
                          <th className="py-space-md px-space-md">Tolerance / Criteria</th>
                          <th className="py-space-md px-space-md text-right">Weight</th>
                          <th className="py-space-md px-space-lg text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-body-sm font-body-sm divide-y divide-surface-container">
                        
                        <tr className={`${selectedRule === 'R-144-XI' ? 'bg-surface-container-low' : 'hover:bg-surface-container-low/60 bg-surface-container-lowest'} transition-colors group cursor-pointer`} onClick={() => setSelectedRule('R-144-XI')}>
                          <td className="py-space-md px-space-lg">
                            <div className="flex items-start gap-space-sm">
                              <span className="mt-0.5 text-error material-symbols-outlined text-[18px]">security</span>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                  <span className={`font-title-sm text-body-md font-semibold transition-colors ${selectedRule === 'R-144-XI' ? 'text-primary font-bold' : 'text-on-surface group-hover:text-primary'}`}>
                                    GFR Rule 144(xi) - Land Border Security Mandate
                                  </span>
                                  {selectedRule === 'R-144-XI' && <span className="px-1.5 py-0.2 rounded bg-primary-container text-on-primary font-label-sm text-[10px] uppercase">Selected</span>}
                                </div>
                                <span className="text-on-surface-variant font-body-sm text-[12px] line-clamp-1">
                                  Mandatory registration with competent authority for bidders sharing land border with India.
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-space-md px-space-md whitespace-nowrap">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                              <span className="material-symbols-outlined text-[13px] text-primary">account_balance</span> MoF / MEA Validated
                            </span>
                          </td>
                          <td className="py-space-md px-space-md whitespace-nowrap">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Hard Disqualification
                            </span>
                          </td>
                          <td className="py-space-md px-space-md">
                            <span className="font-tabular-num text-tabular-num text-on-surface font-medium">0% Tolerance Strict</span>
                          </td>
                          <td className="py-space-md px-space-md text-right font-tabular-num text-tabular-num font-semibold text-error">Mandatory Fail</td>
                          <td className="py-space-md px-space-lg text-center whitespace-nowrap">
                            <button aria-defaultChecked={true} className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full bg-primary-container p-0.5 transition-colors duration-200 ease-in-out focus:outline-none">
                              <span className="translate-x-4 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-surface shadow ring-0 transition duration-200 ease-in-out"></span>
                            </button>
                          </td>
                        </tr>

                        <tr className={`${selectedRule === 'GSTN-ACT' ? 'bg-surface-container-low' : 'hover:bg-surface-container-low/60 bg-surface-container-lowest'} transition-colors group cursor-pointer`} onClick={() => setSelectedRule('GSTN-ACT')}>
                          <td className="py-space-md px-space-lg">
                            <div className="flex items-start gap-space-sm">
                              <span className="mt-0.5 text-primary material-symbols-outlined text-[18px]">domain_verification</span>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                  <span className={`font-title-sm text-body-md font-semibold transition-colors ${selectedRule === 'GSTN-ACT' ? 'text-primary font-bold' : 'text-on-surface group-hover:text-primary'}`}>
                                    GSTN Active Status & Return Regularity
                                  </span>
                                  {selectedRule === 'GSTN-ACT' && <span className="px-1.5 py-0.2 rounded bg-primary-container text-on-primary font-label-sm text-[10px] uppercase">Selected</span>}
                                </div>
                                <span className="text-on-surface-variant font-body-sm text-[12px] line-clamp-1">
                                  Validates GST status is Active and GSTR-3B filed continuously for preceding 3 calendar quarters.
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-space-md px-space-md whitespace-nowrap">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                              <span className="material-symbols-outlined text-[13px] text-secondary">sync</span> GSTN Direct API
                            </span>
                          </td>
                          <td className="py-space-md px-space-md whitespace-nowrap">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Hard Disqualification
                            </span>
                          </td>
                          <td className="py-space-md px-space-md">
                            <span className="font-tabular-num text-tabular-num text-on-surface font-medium">≤ 0 Defaults (3 Mo)</span>
                          </td>
                          <td className="py-space-md px-space-md text-right font-tabular-num text-tabular-num font-semibold text-error">Mandatory Fail</td>
                          <td className="py-space-md px-space-lg text-center whitespace-nowrap">
                            <button aria-defaultChecked={true} className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full bg-primary-container p-0.5 transition-colors duration-200 ease-in-out focus:outline-none">
                              <span className="translate-x-4 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-surface shadow ring-0 transition duration-200 ease-in-out"></span>
                            </button>
                          </td>
                        </tr>

                        <tr className={`${selectedRule === 'FIN-TURNOVER' ? 'bg-surface-container-low' : 'hover:bg-surface-container-low/60 bg-surface-container-lowest'} transition-colors group cursor-pointer`} onClick={() => setSelectedRule('FIN-TURNOVER')}>
                          <td className="py-space-md px-space-lg">
                            <div className="flex items-start gap-space-sm">
                              <span className="mt-0.5 text-on-tertiary-container material-symbols-outlined text-[18px]">query_stats</span>
                              <div className="flex flex-col">
                                <div className="flex items-center gap-2">
                                  <span className={`font-title-sm text-body-md font-semibold transition-colors ${selectedRule === 'FIN-TURNOVER' ? 'text-primary font-bold' : 'text-on-surface group-hover:text-primary'}`}>
                                    Turnover Variance vs. Audited ITR/MCA
                                  </span>
                                  {selectedRule === 'FIN-TURNOVER' && <span className="px-1.5 py-0.2 rounded bg-primary-container text-on-primary font-label-sm text-[10px] uppercase">Selected</span>}
                                </div>
                                <span className="text-on-surface-variant font-body-sm text-[12px] line-clamp-1">
                                  Audited 3-year turnover declared in CA certificate against MCA-21 XBRL e-filings.
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="py-space-md px-space-md whitespace-nowrap">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm text-label-sm">
                              <span className="material-symbols-outlined text-[13px] text-primary">analytics</span> ITR-6 & MCA XBRL
                            </span>
                          </td>
                          <td className="py-space-md px-space-md whitespace-nowrap">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold">
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Weighted Point Gate
                            </span>
                          </td>
                          <td className="py-space-md px-space-md">
                            <span className="font-tabular-num text-tabular-num text-primary font-bold">≤ {tolerance.toFixed(1)}% Delta</span>
                          </td>
                          <td className="py-space-md px-space-md text-right font-tabular-num text-tabular-num font-bold text-on-surface">25 pts</td>
                          <td className="py-space-md px-space-lg text-center whitespace-nowrap">
                            <button aria-defaultChecked={true} className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full bg-primary-container p-0.5 transition-colors duration-200 ease-in-out focus:outline-none">
                              <span className="translate-x-4 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-surface shadow ring-0 transition duration-200 ease-in-out"></span>
                            </button>
                          </td>
                        </tr>

                        {/* Additional rules ... */}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="px-space-lg py-space-sm bg-surface-container-lowest flex flex-wrap items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                    <span>Showing 7 of 18 statutory rules loaded in evaluator runtime.</span>
                    <div className="flex items-center gap-space-sm">
                      <span className="text-secondary font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[15px]">cloud_sync</span> Rule Engine Cache In-Sync
                      </span>
                      <button className="px-2 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors font-medium">
                        Load Inactive Archives (4)
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-title-sm text-title-sm text-on-surface font-semibold">Statutory Evaluation Pipeline Execution Order</span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">How incoming GeM bid payloads flow across automated statutory barriers</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">Deterministic Flow</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-space-sm items-center pt-space-xs">
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1 relative group">
                      <span className="font-label-sm text-label-sm text-error font-bold">PHASE 1 · GATE 0</span>
                      <span className="font-title-sm text-body-md text-on-surface font-semibold">Statutory Disqualifiers</span>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">Land Border 144(xi), CVC Debarment, Inactive GSTN.</p>
                      <div className="mt-2 text-error font-label-sm text-label-sm font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">dangerous</span> Rejection is Final
                      </div>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1 relative group">
                      <span className="font-label-sm text-label-sm text-primary font-bold">PHASE 2 · GATE 1</span>
                      <span className="font-title-sm text-body-md text-on-surface font-semibold">Financial Viability</span>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">Turnover delta verification, MCA Solvency & Net Worth.</p>
                      <div className="mt-2 text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">tune</span> Tolerances Evaluated
                      </div>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1 relative group">
                      <span className="font-label-sm text-label-sm text-secondary font-bold">PHASE 3 · GATE 2</span>
                      <span className="font-title-sm text-body-md text-on-surface font-semibold">Technical & MSME Standing</span>
                      <p className="font-body-sm text-[12px] text-on-surface-variant">NIC code verification, past work orders, EPFO headcount.</p>
                      <div className="mt-2 text-secondary font-label-sm text-label-sm font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span> Weighted 0-100 Pts
                      </div>
                    </div>
                    <div className="p-space-md rounded-lg bg-primary-container text-on-primary flex flex-col gap-1 relative shadow-sm">
                      <span className="font-label-sm text-label-sm text-on-primary-container font-bold">PHASE 4 · VERDICT</span>
                      <span className="font-title-sm text-body-md text-on-primary font-bold">Compliance Summary Report</span>
                      <p className="font-body-sm text-[12px] text-on-primary-container">Signed cryptographic hash logged to audit immutable store.</p>
                      <div className="mt-2 text-secondary-fixed-dim font-label-sm text-label-sm font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">verified</span> Auto-Forwarded to PO
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 4 Columns */}
              <div className="xl:col-span-4 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="p-space-lg bg-surface-container-low flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-bold uppercase">
                        Active Parameter Inspector
                      </span>
                      <span className="font-tabular-num text-label-sm text-on-surface-variant font-mono">
                        {selectedRule === 'FIN-TURNOVER' ? 'RULE-FIN-TURNOVER-03' : `RULE-${selectedRule}`}
                      </span>
                    </div>
                    <h3 className="font-title-sm text-headline-md text-on-surface font-bold mt-1">
                      {selectedRule === 'FIN-TURNOVER' ? 'Turnover Variance vs Audited Balance Sheet' : 'Rule Configuration'}
                    </h3>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {selectedRule === 'FIN-TURNOVER' ? 'Evaluates submitted CA turnover certificate against MCA-21 XBRL ledger.' : 'Details for selected rule...'}
                    </span>
                  </div>

                  <div className="p-space-lg flex flex-col gap-space-lg">
                    {/* Tolerance Slider */}
                    <div className="flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <label className="font-title-sm text-body-sm text-on-surface font-semibold flex items-center gap-1">
                          <span>Allowable Tolerance Delta (±%)</span>
                          <span className="material-symbols-outlined text-[16px] text-on-surface-variant cursor-help" title="Percentage difference allowed between bid doc and portal API without hard flagging">info</span>
                        </label>
                        <div className="flex items-center gap-1">
                          <span className="font-tabular-num text-title-sm text-primary font-bold">{tolerance.toFixed(1)}</span>
                          <span className="font-label-md text-label-md text-on-surface-variant">%</span>
                        </div>
                      </div>
                      <input 
                        className="w-full accent-primary cursor-pointer h-2 bg-surface-container rounded-lg" 
                        max="5" 
                        min="0" 
                        step="0.1" 
                        type="range" 
                        value={tolerance}
                        onChange={(e) => setTolerance(parseFloat(e.target.value))}
                      />
                      <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                        <span>0.0% (Zero Tolerance)</span>
                        <span>Default: 1.0%</span>
                        <span>5.0% (Max GFR)</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-xs">
                      <label className="font-title-sm text-body-sm text-on-surface font-semibold">Violation Severity Level</label>
                      <div className="grid grid-cols-3 gap-space-xs">
                        <button className="py-2 px-1 text-center rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold transition-colors" type="button">
                          Critical / Disqualify
                        </button>
                        <button className="py-2 px-1 text-center rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-semibold shadow-sm" type="button">
                          Medium / Score Deduction
                        </button>
                        <button className="py-2 px-1 text-center rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold transition-colors" type="button">
                          Informational Advisory
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <label className="font-title-sm text-body-sm text-on-surface font-semibold">Scoring Points Allocation</label>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">Max Available: 100 Pts</span>
                      </div>
                      <div className="flex items-center gap-space-sm">
                        <input className="h-9 w-24 bg-surface-container-low text-on-surface font-tabular-num text-body-md font-bold px-3 rounded-lg outline-none focus:bg-surface-container-lowest" type="number" defaultValue="25" />
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Points credited if variance stays within calibrated tolerance limit.</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-xs">
                      <label className="font-title-sm text-body-sm text-on-surface font-semibold">Advanced Machine Vision Settings</label>
                      <div className="flex items-center justify-between p-3 rounded-lg border border-outline-variant">
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md text-on-surface font-semibold">LayoutLMv3 Entity Extraction</span>
                          <p className="font-body-sm text-[12px] text-on-surface-variant max-w-[200px] mt-0.5">
                            Extracts raw CA membership seal and UDIN barcode from scanned PDF balance sheets.
                          </p>
                        </div>
                        <button aria-defaultChecked={true} className="relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full bg-secondary p-0.5 transition-colors duration-200" role="switch">
                          <span className="translate-x-4 pointer-events-none inline-block h-4 w-4 transform rounded-full bg-surface shadow ring-0"></span>
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-space-xs">
                      <label className="font-title-sm text-body-sm text-on-surface font-semibold">Fallback Protocol (Portal API Failure / Timeout)</label>
                      <select className="h-9 bg-surface-container-low text-on-surface font-body-sm text-body-sm px-3 rounded-lg outline-none focus:bg-surface-container-lowest">
                        <option defaultValue="1">Escalate to Senior PO for Manual Verification Drawer</option>
                        <option>Halt Bid Evaluation & Retry in 15 Minutes</option>
                        <option>Provisional Pass Subject to Post-Qualification Audit</option>
                        <option>Automated Clarification Request to Bidder (GeM Notice)</option>
                      </select>
                    </div>

                    <div className="p-space-md rounded-lg bg-surface-container-high/40 flex flex-col gap-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-primary font-bold uppercase tracking-wider flex items-center gap-1">
                          <span className="material-symbols-outlined text-[16px]">science</span> Live Test Sandbox
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-secondary"></span> Ready to test
                        </span>
                      </div>
                      <div className="bg-surface-container-lowest p-space-sm rounded-lg flex flex-col gap-1 shadow-sm">
                        <div className="flex items-center justify-between font-label-sm text-label-sm">
                          <span className="text-on-surface font-bold">ABC Industries Ltd. (Tender #GEM/2024/B/8901)</span>
                          <span className="text-on-surface-variant font-mono">PAN: AAACB1234F</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-body-sm text-[12px] mt-1 pt-1 border-t border-surface-container">
                          <div>
                            <span className="text-on-surface-variant">Bid Declared FY23:</span>
                            <span className="font-tabular-num font-semibold text-on-surface ml-1">₹ 42.50 Cr</span>
                          </div>
                          <div>
                            <span className="text-on-surface-variant">MCA XBRL Verified:</span>
                            <span className="font-tabular-num font-semibold text-on-surface ml-1">₹ 42.48 Cr</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-1 text-[11px] font-label-sm pt-1">
                          <span className="text-on-surface-variant">Tolerance Boundary: <strong className="text-primary">±{tolerance.toFixed(1)}%</strong></span>
                          {0.04 <= tolerance ? (
                            <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed font-bold">PASS · +0.04% Variance</span>
                          ) : (
                            <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-bold">FAIL · +0.04% Variance</span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-space-sm pt-1">
                        <button className="w-full py-1.5 bg-surface-container-lowest hover:bg-surface-container text-primary font-label-sm text-label-sm font-semibold rounded shadow-sm transition-colors text-center" type="button">
                          Run Batch Test (24 Active Bidders)
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-space-sm pt-space-xs">
                      <button className="w-1/2 py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold rounded-lg transition-colors text-center" type="button">
                        Discard Edits
                      </button>
                      <button className="w-1/2 py-2.5 bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-semibold rounded-lg shadow-md transition-colors text-center flex items-center justify-center gap-1" type="button">
                        <span className="material-symbols-outlined text-[16px]">save</span>
                        <span>Save Configuration</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-xs text-primary">
                    <span className="material-symbols-outlined text-[20px]">policy</span>
                    <span className="font-title-sm text-body-md font-bold">Statutory Governance Framework</span>
                  </div>
                  <p className="font-body-sm text-[12px] text-on-surface-variant">
                    Rules configured within this workspace strictly comply with the Ministry of Finance General Financial Rules (GFR) 2017 (amended up to Oct 2023), Public Procurement (Preference to Make in India) Order 2017, and GeM Special Terms and Conditions (STC v4.0).
                  </p>
                  <div className="flex items-center gap-space-md mt-space-2xs text-[11px] font-label-sm text-on-surface-variant font-medium">
                    <span>Last Gazette Update: 14-Oct-2023</span>
                    <span>·</span>
                    <Link href="#" className="text-primary font-semibold hover:underline flex items-center gap-0.5">
                      <span>View Ministry Gazettes</span>
                      <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
