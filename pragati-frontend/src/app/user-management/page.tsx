"use client";
import React, { useState } from "react";
import Link from "next/link";

const USERS = [
  {
    id: "rajesh",
    name: "Rajesh Kumar, IAS",
    initials: "RK",
    initialsTheme: "bg-primary/10 text-primary border-primary/20",
    verified: true,
    empId: "GOI-PO-88219",
    email: "rajesh.kumar92@nic.in",
    department: "Ministry of Heavy Industries",
    role: "Senior Procurement Officer",
    roleDesc: "Tier-1 Authority (Up to ₹500 Cr)",
    clearance: "Level-1 / GFR 144(xi)",
    clearanceIcon: "shield",
    clearanceTheme: "bg-surface-container text-primary",
    dsc: "Class-3 (e-Mudhra)",
    dscExp: "Exp: 14-Oct-2027 • Sandes SSO",
    status: "Active · Signed",
    statusTheme: "bg-secondary-container/40 text-on-secondary-container border-secondary/20",
    statusDot: "bg-secondary",
    selected: true,
  },
  {
    id: "sunita",
    name: "Dr. Sunita Meena",
    initials: "SM",
    initialsTheme: "bg-surface-container text-on-surface-variant border-surface-container-high",
    verified: false,
    sciIcon: true,
    empId: "GOI-TEC-44012",
    email: "sunita.meena@isro.gov.in",
    department: "TEC Chair (Space & Power Systems)",
    role: "TEC Committee Chair",
    roleDesc: "Envelope Decryptor & Scoring",
    clearance: "Scoped: B/529811",
    clearanceIcon: "lock_clock",
    clearanceTheme: "bg-surface-container-high text-on-surface",
    dsc: "Class-2 (NIC)",
    dscExp: "Exp: 01-Jan-2027 • Aadhaar OTP",
    status: "Active · Pending",
    statusTheme: "bg-surface-container-highest text-on-surface border-outline-variant",
    statusDot: "bg-primary",
    selected: false,
  },
  {
    id: "arun",
    name: "Arun V. (CVC Auditor)",
    initials: "AV",
    initialsTheme: "bg-surface-container text-on-surface-variant border-surface-container-high",
    verified: false,
    empId: "GOI-CVC-1104",
    email: "arun.vigilance@cag.gov.in",
    department: "Central Vigilance Commission",
    role: "Statutory Auditor",
    roleDesc: "Forensic Override & Debarment",
    clearance: "Sovereign Audit (All)",
    clearanceIcon: "policy",
    clearanceTheme: "bg-surface-container-high text-on-surface",
    dsc: "Class-3 (SafeScrypt)",
    dscExp: "Exp: 22-Aug-2028 • Hardware Token",
    status: "Active · Idle",
    statusTheme: "bg-surface-container-highest text-on-surface border-outline-variant",
    statusDot: "bg-on-surface-variant",
    selected: false,
  },
  {
    id: "priya",
    name: "Priya Desai",
    initials: "PD",
    initialsTheme: "bg-error-container/50 text-error border-error/20",
    verified: false,
    empId: "GOI-PO-39441",
    email: "priya.desai@health.gov.in",
    department: "Ministry of Health",
    role: "Procurement Officer",
    roleDesc: "Tier-2 Authority (Up to ₹50 Cr)",
    clearance: "Suspended (Inquiry)",
    clearanceIcon: "gavel",
    clearanceTheme: "bg-error-container text-on-error-container",
    dsc: "Revoked",
    dscExp: "By CVC Order #8812",
    status: "Suspended",
    statusTheme: "bg-error-container/40 text-on-error-container border-error/20",
    statusDot: "bg-error",
    selected: false,
  }
];

export default function UserManagementPage() {
  const [selectedUser, setSelectedUser] = useState<string | null>("rajesh");

  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen flex flex-col">
      {/* Header */}
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
            <Link href="/compliance-rules" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Compliance Rules</Link>
            <Link href="/portal-connectors" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Portal Connectors</Link>
            <Link href="/audit-logs" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Audit Logs</Link>
            <Link href="/user-management" className="h-full flex items-center px-space-xs font-title-sm text-title-sm text-primary border-b-2 border-primary transition-colors">User &amp; Access / Admin</Link>
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
          {/* Top Command & Breadcrumb Context Bar */}
          <div className="w-full bg-surface-container-lowest border-b border-surface-container-high px-layout-gutter py-space-md">
            <div className="max-w-[1720px] mx-auto flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm">
                <Link href="/" className="hover:text-primary cursor-pointer transition-colors">Portal Desk</Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-on-surface font-semibold">Role-Based Access Control (RBAC) &amp; Sovereign Identity Fleet</span>
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
                <div className="flex flex-col gap-space-2xs">
                  <div className="flex items-center gap-space-sm flex-wrap">
                    <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">User &amp; Sovereign Access Control Ledger (RBAC)</h1>
                    <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm font-semibold border border-primary/20">
                      <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                      NIC-IAM &amp; Jan Parichay Federation v3.8
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm font-semibold">
                      <span className="material-symbols-outlined text-[13px]">gavel</span>
                      GFR 2017 &amp; CERT-In Compliant
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant max-w-4xl">
                    Statutory identity federation, role assignment, DSC token binding, and granular access delegation for Procurement Officers, TEC Members, and CAG/CVC Vigilance Auditors under Digital India sovereign guidelines.
                  </p>
                </div>
                <div className="flex items-center gap-space-sm flex-wrap self-start lg:self-center">
                  <button type="button" className="inline-flex items-center gap-space-xs px-space-md py-2 rounded bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low text-on-surface font-label-md transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[16px] text-primary">sync</span>
                    <span>Sync NIC / Jan Parichay (API)</span>
                  </button>
                  <button type="button" className="inline-flex items-center gap-space-xs px-space-md py-2 rounded bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low text-on-surface font-label-md transition-all shadow-sm">
                    <span className="material-symbols-outlined text-[16px] text-secondary">picture_as_pdf</span>
                    <span>Audit Access Matrix (PDF)</span>
                  </button>
                  <button type="button" className="inline-flex items-center gap-space-xs px-space-base py-2 rounded bg-primary text-on-primary hover:bg-primary-container font-label-md shadow transition-colors font-bold">
                    <span className="material-symbols-outlined text-[18px]">person_add</span>
                    <span>+ Provision Sovereign User</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Telemetry Ribbon (KPI Matrix) */}
          <div className="w-full bg-surface-container-low border-b border-surface-container px-layout-gutter py-space-base">
            <div className="max-w-[1720px] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-base">
              <div className="bg-surface-container-lowest rounded-lg p-space-base border border-surface-container-high shadow-sm relative overflow-hidden">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Total Provisioned Fleet</span>
                    <div className="flex items-baseline gap-space-xs mt-1">
                      <span className="font-display-lg text-display-lg text-on-surface font-bold tabular-nums">342</span>
                      <span className="font-label-sm text-secondary font-semibold">Sovereign Users</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">badge</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs border-t border-surface-container-low flex items-center justify-between text-on-surface-variant font-label-sm">
                  <span className="flex items-center gap-1 text-secondary font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 28 Active Today
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-surface-container text-primary font-bold">Class-3 DSC Bound</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-lg p-space-base border border-surface-container-high shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Role Tier Distribution</span>
                    <div className="flex items-baseline gap-space-xs mt-1">
                      <span className="font-display-lg text-display-lg text-on-surface font-bold tabular-nums">4</span>
                      <span className="font-label-sm text-on-surface-variant">Statutory Tiers</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[22px]">account_tree</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs border-t border-surface-container-low flex items-center justify-between gap-1 text-on-surface-variant font-label-sm">
                  <span title="Procurement Officers"><strong className="text-on-surface">48</strong> PO</span>
                  <span>•</span>
                  <span title="Technical Evaluation Committee"><strong className="text-on-surface">164</strong> TEC</span>
                  <span>•</span>
                  <span title="Statutory Auditors"><strong className="text-on-surface">38</strong> CAG/CVC</span>
                  <span>•</span>
                  <span title="System Custodians"><strong className="text-on-surface">12</strong> Cust</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-lg p-space-base border border-surface-container-high shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">MFA &amp; FIPS Assurance</span>
                    <div className="flex items-baseline gap-space-xs mt-1">
                      <span className="font-display-lg text-display-lg text-secondary font-bold tabular-nums">100%</span>
                      <span className="font-label-sm text-secondary font-semibold">Enforced</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-secondary-container/30 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px]">security</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs border-t border-surface-container-low flex items-center justify-between text-on-surface-variant font-label-sm">
                  <span className="truncate">Sandes + Aadhaar OTP + DSC</span>
                  <span className="text-primary font-semibold">15m Idle Cutoff</span>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-lg p-space-base border border-surface-container-high shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Pending Re-Validations</span>
                    <div className="flex items-baseline gap-space-xs mt-1">
                      <span className="font-display-lg text-display-lg text-tertiary-container font-bold tabular-nums">05</span>
                      <span className="font-label-sm text-tertiary-container font-semibold">Transfers / Expiries</span>
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-tertiary-fixed/50 flex items-center justify-center text-tertiary-container">
                    <span className="material-symbols-outlined text-[22px]">history_edu</span>
                  </div>
                </div>
                <div className="mt-space-sm pt-space-xs border-t border-surface-container-low flex items-center justify-between text-on-surface-variant font-label-sm">
                  <span className="text-error font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px]">timer</span> 3 Expiring &lt;72h
                  </span>
                  <button type="button" className="text-primary hover:underline font-semibold">Scrutinize</button>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Workspace Canvas (12-Col Split Workbench) */}
          <div className="w-full px-layout-gutter py-space-lg flex-1">
            <div className="max-w-[1720px] mx-auto flex flex-col xl:flex-row gap-space-lg items-start">
              
              {/* Left / Center Heavy Panel: Search, Filters, Master Table */}
              <div className="w-full xl:w-[68%] 2xl:w-[72%] flex flex-col gap-space-md">
                
                {/* Filter & Search Administration Control Toolbar */}
                <div className="bg-surface-container-lowest rounded-lg border border-surface-container-high p-space-md flex flex-col gap-space-md shadow-sm">
                  <div className="flex flex-col md:flex-row items-center gap-space-sm justify-between">
                    <div className="w-full md:flex-1 relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
                      <input type="text" className="w-full pl-9 pr-4 py-2 bg-surface-container-low rounded border border-outline-variant text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-colors" placeholder="Search officer name, Gov Email (@nic.in / @gem.gov.in), Employee ID, DSC Serial, or Ministry..." />
                    </div>
                    <div className="flex items-center gap-space-xs w-full md:w-auto">
                      <select className="bg-surface-container-low border border-outline-variant rounded px-space-sm py-2 text-body-sm text-on-surface focus:outline-none focus:border-primary">
                        <option value="">All Ministries / Wings</option>
                        <option value="heavy">Ministry of Heavy Industries</option>
                        <option value="health">Ministry of Health &amp; Family Welfare</option>
                        <option value="railways">Ministry of Railways</option>
                        <option value="isro">ISRO / Space &amp; Power Systems</option>
                        <option value="cag">Office of CAG of India</option>
                      </select>
                      <select className="bg-surface-container-low border border-outline-variant rounded px-space-sm py-2 text-body-sm text-on-surface focus:outline-none focus:border-primary">
                        <option value="">All Security Clearances</option>
                        <option value="tier1">Secret / GFR 144(xi)</option>
                        <option value="confidential">Technical Confidential</option>
                        <option value="cag">Sovereign Oversight</option>
                        <option value="committee">Tender-Scoped Restricted</option>
                      </select>
                      <button type="button" className="p-2 rounded bg-surface-container-low border border-outline-variant hover:bg-surface-container text-on-surface-variant hover:text-on-surface" title="Export Current Filter Matrix">
                        <span className="material-symbols-outlined text-[18px]">file_download</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs border-t border-surface-container">
                    <div className="flex items-center gap-space-xs flex-wrap" role="tablist">
                      <button className="px-space-md py-1 rounded-full text-label-sm font-semibold bg-primary text-on-primary">All Fleet (342)</button>
                      <button className="px-space-md py-1 rounded-full text-label-sm font-semibold text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors">Procurement Officers (48)</button>
                      <button className="px-space-md py-1 rounded-full text-label-sm font-semibold text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors">TEC Evaluators (164)</button>
                      <button className="px-space-md py-1 rounded-full text-label-sm font-semibold text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors">Statutory Auditors (38)</button>
                      <button className="px-space-md py-1 rounded-full text-label-sm font-semibold text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors">System Custodians (12)</button>
                    </div>
                    <div className="flex items-center gap-space-xs text-label-sm text-on-surface-variant">
                      <span className="font-medium">Filter By State:</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-primary font-semibold">Active: 326</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-semibold">Suspended: 11</span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-semibold">Pending Re-bind: 5</span>
                    </div>
                  </div>
                </div>

                {/* Master Sovereign Identity & RBAC Ledger Table */}
                <div className="bg-surface-container-lowest rounded-lg border border-surface-container-high overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-surface-container-low border-b border-surface-container-high text-on-surface-variant font-label-sm uppercase tracking-wider">
                          <th className="py-3 px-space-base w-10 text-center">
                            <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-0 cursor-pointer" />
                          </th>
                          <th className="py-3 px-space-md font-semibold">Officer / Sovereign Identity</th>
                          <th className="py-3 px-space-md font-semibold">Assigned Statutory Role</th>
                          <th className="py-3 px-space-md font-semibold">Clearance Jurisdiction</th>
                          <th className="py-3 px-space-md font-semibold">DSC &amp; 2FA Attestation</th>
                          <th className="py-3 px-space-md font-semibold">Ledger Status</th>
                          <th className="py-3 px-space-md font-semibold text-right">Statutory Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-surface-container text-body-sm">
                        {USERS.map((user) => (
                          <tr key={user.id} className={`hover:bg-surface-container-low transition-colors group cursor-pointer ${selectedUser === user.id ? 'bg-surface-container-low/40 border-l-4 border-l-primary' : ''}`} onClick={() => setSelectedUser(user.id)}>
                            <td className="py-3.5 px-space-base text-center">
                              <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-0 cursor-pointer" checked={selectedUser === user.id} readOnly />
                            </td>
                            <td className="py-3.5 px-space-md">
                              <div className="flex items-center gap-space-sm">
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-title-sm font-bold border ${user.initialsTheme}`}>
                                  {user.initials}
                                </div>
                                <div className="flex flex-col min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="font-title-sm text-on-surface font-semibold truncate">{user.name}</span>
                                    {user.verified && <span className="material-symbols-outlined text-primary text-[15px]" title="Government Verified Sovereign Identity">verified</span>}
                                    {user.sciIcon && <span className="material-symbols-outlined text-secondary text-[15px]" title="Institutional Scientist Credential">science</span>}
                                  </div>
                                  <span className="font-label-sm text-on-surface-variant truncate">Emp: {user.empId} • {user.email}</span>
                                  <span className={`font-label-sm font-medium truncate ${selectedUser === user.id ? 'text-primary' : 'text-on-surface-variant'}`}>{user.department}</span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <div className="flex flex-col">
                                <span className="font-semibold text-on-surface">{user.role}</span>
                                <span className="font-label-sm text-on-surface-variant">{user.roleDesc}</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded font-label-sm font-semibold ${user.clearanceTheme}`}>
                                <span className="material-symbols-outlined text-[13px]">{user.clearanceIcon}</span> {user.clearance}
                              </span>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <div className="flex flex-col gap-0.5">
                                <div className={`flex items-center gap-1 font-label-sm font-medium ${user.dsc === 'Revoked' ? 'text-error' : 'text-secondary'}`}>
                                  <span className="material-symbols-outlined text-[13px]">{user.dsc === 'Revoked' ? 'key_off' : 'lock'}</span> {user.dsc}
                                </div>
                                <span className="font-label-sm text-on-surface-variant">{user.dscExp}</span>
                              </div>
                            </td>
                            <td className="py-3.5 px-space-md">
                              <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-label-sm font-semibold border ${user.statusTheme}`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${user.statusDot}`}></span> {user.status}
                              </span>
                            </td>
                            <td className="py-3.5 px-space-md text-right">
                              <div className="flex items-center justify-end gap-1">
                                <button type="button" className="px-2 py-1 rounded bg-surface-container hover:bg-primary hover:text-on-primary text-primary font-label-sm font-semibold transition-colors">Edit</button>
                                <button type="button" className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container"><span className="material-symbols-outlined text-[18px]">history</span></button>
                                <button type="button" className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container"><span className="material-symbols-outlined text-[18px]">more_vert</span></button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-surface-container-low px-space-md py-space-sm border-t border-surface-container flex items-center justify-between text-on-surface-variant font-label-sm">
                    <span>Showing 1 to 4 of 342 Identities</span>
                    <div className="flex items-center gap-2">
                      <button className="px-2 py-1 rounded border border-outline-variant hover:bg-surface-container disabled:opacity-50" disabled>Previous</button>
                      <button className="px-2 py-1 rounded border border-outline-variant hover:bg-surface-container">Next</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel: Identity Inspector & Policy Modeler (Dynamic based on selection) */}
              <div className="w-full xl:w-[32%] 2xl:w-[28%] flex flex-col gap-space-md" id="inspector-panel">
                {selectedUser === 'rajesh' && (
                  <div className="bg-surface-container-lowest rounded-lg border border-surface-container-high shadow-sm overflow-hidden flex flex-col h-full sticky top-[5.5rem]">
                    {/* Header */}
                    <div className="px-space-md py-space-sm bg-surface-container-low border-b border-surface-container flex items-center justify-between">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[20px]">manage_accounts</span>
                        <h2 className="font-title-sm text-title-sm text-on-surface font-bold uppercase tracking-tight">Identity Inspector</h2>
                      </div>
                      <span className="font-mono text-[10px] text-on-surface-variant">LEDGER-LOCK: ON</span>
                    </div>

                    <div className="p-space-md flex-1 overflow-y-auto flex flex-col gap-space-md">
                      {/* Identity Profile Badge */}
                      <div className="flex flex-col items-center text-center pb-space-md border-b border-surface-container">
                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-headline-lg font-bold border-2 border-primary/20 mb-3 relative">
                          RK
                          <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-secondary border-2 border-surface-container-lowest"></span>
                        </div>
                        <h3 className="font-headline-md text-headline-md text-on-surface font-bold">Rajesh Kumar, IAS</h3>
                        <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">rajesh.kumar92@nic.in</span>
                        <div className="mt-2 inline-flex flex-wrap items-center justify-center gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-surface-container text-primary font-label-sm font-semibold">GOI-PO-88219</span>
                          <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-label-sm font-semibold">Tier-1 PO</span>
                        </div>
                      </div>

                      {/* Cryptographic & Binding Status */}
                      <div className="flex flex-col gap-space-xs">
                        <h4 className="font-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Authentication &amp; Key Binding</h4>
                        <div className="p-space-sm bg-surface-container-low rounded border border-surface-container">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-1.5 text-secondary font-label-md">
                              <span className="material-symbols-outlined text-[16px]">fingerprint</span>
                              Class-3 DSC Active
                            </div>
                            <span className="font-mono text-[10px] text-on-surface-variant">e-Mudhra Ltd</span>
                          </div>
                          <div className="flex flex-col gap-1 font-label-sm text-on-surface">
                            <div className="flex justify-between">
                              <span className="text-on-surface-variant">Serial</span>
                              <span className="font-mono">7A 89 B2 14 F0 9C</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-on-surface-variant">Valid Till</span>
                              <span>14-Oct-2027</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-on-surface-variant">Hardware</span>
                              <span>USB Crypto Token (FIPS 140-2)</span>
                            </div>
                          </div>
                          <button type="button" className="w-full mt-2 py-1.5 rounded bg-surface-container-highest hover:bg-surface-container text-primary font-label-sm font-semibold transition-colors">Re-Validate Certificate Chain</button>
                        </div>
                      </div>

                      {/* Active Jurisdiction Matrix */}
                      <div className="flex flex-col gap-space-xs">
                        <div className="flex items-center justify-between">
                          <h4 className="font-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Active Jurisdiction Vectors</h4>
                          <span className="text-[10px] bg-primary-container text-on-primary-container px-1.5 rounded font-bold">144(xi) Enabled</span>
                        </div>
                        <ul className="flex flex-col gap-1.5 font-label-sm">
                          <li className="flex items-start gap-2 p-1.5 rounded hover:bg-surface-container-low">
                            <span className="material-symbols-outlined text-primary text-[16px]">account_balance</span>
                            <div className="flex flex-col">
                              <span className="text-on-surface font-semibold">Financial Bid Decryption</span>
                              <span className="text-on-surface-variant font-body-sm text-[11px]">Threshold: Uncapped (Tier-1)</span>
                            </div>
                          </li>
                          <li className="flex items-start gap-2 p-1.5 rounded hover:bg-surface-container-low">
                            <span className="material-symbols-outlined text-primary text-[16px]">gavel</span>
                            <div className="flex flex-col">
                              <span className="text-on-surface font-semibold">Contract Award &amp; LoA Issuance</span>
                              <span className="text-on-surface-variant font-body-sm text-[11px]">Requires Dual-Signature (Finance)</span>
                            </div>
                          </li>
                          <li className="flex items-start gap-2 p-1.5 rounded hover:bg-surface-container-low">
                            <span className="material-symbols-outlined text-primary text-[16px]">block</span>
                            <div className="flex flex-col">
                              <span className="text-on-surface font-semibold">Bidder Suspension (L1/L2)</span>
                              <span className="text-on-surface-variant font-body-sm text-[11px]">Temporary Debarment (Up to 6 Months)</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Critical Actions Footer */}
                    <div className="p-space-md border-t border-surface-container-high bg-surface-container-low flex flex-col gap-2">
                      <button type="button" className="w-full py-2 rounded bg-primary text-on-primary hover:bg-primary-container font-label-md font-semibold transition-colors flex items-center justify-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px]">edit_document</span> Modify Access Policies
                      </button>
                      <button type="button" className="w-full py-2 rounded border border-error text-error hover:bg-error-container hover:text-on-error-container font-label-md font-semibold transition-colors flex items-center justify-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px]">emergency</span> Suspend Identity &amp; Token
                      </button>
                    </div>
                  </div>
                )}
                {selectedUser !== 'rajesh' && (
                  <div className="bg-surface-container-lowest rounded-lg border border-surface-container-high shadow-sm overflow-hidden flex flex-col h-full sticky top-[5.5rem] items-center justify-center p-space-lg text-center text-on-surface-variant">
                    <span className="material-symbols-outlined text-[48px] text-surface-container-highest mb-4">account_box</span>
                    <h3 className="font-title-sm text-title-sm font-semibold mb-2">Select a Sovereign Identity</h3>
                    <p className="font-body-sm text-body-sm max-w-[250px]">Choose an officer from the ledger to view their DSC bindings, active jurisdiction matrix, and security clearance details.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
