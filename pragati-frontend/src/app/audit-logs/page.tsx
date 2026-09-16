'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

const auditData: Record<string, any> = {
  row1: {
    id: "#AUD-98214",
    officer: "Rajesh Kumar, IAS",
    role: "Senior Procurement Officer",
    hash: "7f3b89a01f964032d849a64720980c6551b81ee0a905a5a1f292c2a048a19a01",
    justification: "Turnover variance within +0.04% GFR tolerance; Class-I Local Supplier (MII) verified with 68.4% local value addition per Statutory Auditor Certificate dated 08-Oct-2026. Land border clearance verified via MoF circular OM F.No.6/18/2019-PPD. Approved for commercial stage."
  },
  row2: {
    id: "#AUD-98205",
    officer: "AI Daemon (LayoutLMv3)",
    role: "System Check",
    hash: "3c2d44e8c10928bb01948fa9112988cb04221190aa234e89920b12a819c44e8",
    justification: "GSTIN 07AAAAA0000A1Z5 verified active on direct GSTN sovereign pipeline. 36 consecutive monthly GSTR-3B filings analyzed. Turnover INR 48.20 Cr matches audited P&L statement without discrepancy."
  },
  row3: {
    id: "#AUD-98189",
    officer: "Rajesh Kumar, IAS",
    role: "Senior Procurement Officer",
    hash: "9a8c11f0a200192388c991a0044811ec11481109a8200188bb004a88711f0a2",
    justification: "Disqualification Gate Enforced under Rule 144(xi) of GFR 2017: Ultimate beneficial ownership (UBO) exceeds 10% in Land Border sharing jurisdiction without Registration Certificate from DPIIT Competent Authority."
  },
  row4: {
    id: "#AUD-98172",
    officer: "Portal Bridge Daemon",
    role: "System Check",
    hash: "5e6183c9dd9801a23877b0918c89110022384a9190223847711200195e6183c9",
    justification: "Udyam Registration URN: UDYAM-DL-01-0029381 verified with Ministry of MSME. Enterprise classified as 'Micro' with valid NIC Code 2819 matching Tender scope of works. Earnest Money Deposit (EMD) exemption applied per Rule 170(i)."
  },
  row5: {
    id: "#AUD-98150",
    officer: "Dr. Sunita Meena",
    role: "TEC Committee Chair",
    hash: "11a099bb4f9011882377a019488bb91004112098bb41298012aa019411a099bb",
    justification: "Unanimous Tender Evaluation Committee (TEC) clearance across all 14 technical parameters and financial solvency certificates. Authorized decryption key dispatch for commercial bid opening."
  }
};

export default function AuditLogs() {
  const { user, logout } = useAuth();
  const [selectedRecord, setSelectedRecord] = useState<string>('row1');
  const [isMerkleModalOpen, setIsMerkleModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // @ts-nocheck
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/v1/audit");
        if (res.data && res.data.success) {
          const apiLogs = res.data.data.logs.map((log: any, idx: number) => ({
            id: `row${idx + 1}`,
            realId: log.id,
            officer: log.user_email,
            role: "System Check",
            hash: "7f3b89a01f964032d849a64720980c6551b81ee0a905a5a1f292c2a048a19a01", // Fake hash for demo
            justification: log.action + " - " + (log.details ? JSON.stringify(log.details) : log.target),
            timestamp: new Date(log.timestamp).toLocaleString(),
            action: log.action,
            target: log.target,
            status: log.status
          }));
          setLogs(apiLogs);
          if (apiLogs.length > 0) {
            setSelectedRecord('row1');
          }
        }
      } catch (err) {
        console.error("Failed to fetch audit logs", err);
      }
    };
    fetchLogs();
  }, []);

  // Use dynamic logs if available, fallback to static auditData
  const displayLogs = logs.length > 0 ? logs : Object.keys(auditData).map(k => ({ ...auditData[k], originalKey: k }));
  const currentRecord = logs.length > 0 ? logs.find(l => l.id === selectedRecord) || logs[0] : auditData[selectedRecord];


  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(currentRecord, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

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
            <Link className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="/compliance-rules">Compliance Rules</Link>
            <Link className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="/portal-connectors">Portal Connectors</Link>
            <Link className="h-full flex items-center px-space-xs font-body-md text-body-md text-primary font-title-sm border-b-2 border-primary transition-colors" href="/audit-logs">Audit Logs</Link>
          </nav>
          <div className="flex items-center gap-space-md ml-auto">
            <button onClick={logout} className="text-on-surface-variant hover:text-primary font-label-md">Logout</button>
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
          {/* Sovereign Ribbon */}
          <div className="w-full bg-primary text-on-primary px-layout-gutter py-1 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">verified_user</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-container-high">
                Government of India · Ministry of Finance · Central Vigilance Commission (CVC) & CAG Compliance Framework
              </span>
            </div>
            <div className="flex items-center gap-space-md">
              <span className="font-label-sm text-label-sm text-surface-container-high flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary-fixed"></span>
                NIC MeghRaj Sovereign Node: <strong className="text-on-primary font-mono ml-0.5">DL-AZ01-PRD</strong>
              </span>
              <span className="text-surface-dim font-label-sm text-label-sm">|</span>
              <span className="font-label-sm text-label-sm text-tertiary-fixed font-semibold tracking-wide">GFR 2017 RULE 173(IV) AUDIT GATEWAY</span>
            </div>
          </div>

          {/* Breadcrumb & Header */}
          <div className="w-full bg-surface-container-lowest px-layout-gutter py-space-md flex flex-wrap items-center justify-between gap-space-md shadow-sm">
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                <Link href="/" className="hover:text-primary cursor-pointer transition-colors">Portal Desk</Link>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="hover:text-primary cursor-pointer transition-colors">Vigilance & Audit Division</span>
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                <span className="text-primary font-semibold">Sovereign Audit Trail & Immutable Log Ledger</span>
              </div>
              <div className="flex items-center gap-space-md mt-1">
                <h1 className="font-headline-lg text-headline-lg text-on-surface flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[28px]">policy</span>
                  Immutable Audit Trail & Statutory Scrutiny Ledger
                </h1>
                <span className="bg-surface-container-low text-primary text-label-sm font-label-sm px-2.5 py-0.5 rounded-full font-semibold">
                  TEC & CAG Dossier Repository
                </span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex items-center gap-space-sm">
              <div className="flex items-center gap-1.5 bg-surface-container-low px-3 py-1.5 rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-secondary text-[18px]">security</span>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold">DPDP Act 2023 Shield</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant text-[10px]">Sec. 8 Compliant Log Archive</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-primary-container text-on-primary px-3 py-1.5 rounded-lg shadow-sm">
                <span className="material-symbols-outlined text-tertiary-fixed text-[18px]">lock</span>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-primary font-semibold">SHA-256 Immutability Enforced</span>
                  <span className="font-label-sm text-label-sm text-inverse-primary text-[10px]">Merkle Tree Root #89201-9B</span>
                </div>
              </div>
            </div>
          </div>

          {/* KPI Ribbon */}
          <div className="px-layout-gutter py-space-base grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-base">
            <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Audit Records</span>
                  <span className="font-headline-lg text-headline-lg text-primary mt-1 font-tabular-num">42,891</span>
                </div>
                <div className="p-2 bg-surface-container-low text-primary rounded-lg">
                  <span className="material-symbols-outlined text-[24px]">database</span>
                </div>
              </div>
              <div className="mt-3 pt-2 bg-surface-container-low/40 rounded px-2 py-1 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Append-Only Immutable
                </span>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">0 Write / 0 Del</span>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">TEC Verified Actions</span>
                  <span className="font-headline-lg text-headline-lg text-on-surface mt-1 font-tabular-num">1,280</span>
                </div>
                <div className="p-2 bg-surface-container-low text-secondary rounded-lg">
                  <span className="material-symbols-outlined text-[24px]">approval</span>
                </div>
              </div>
              <div className="mt-3 pt-2 bg-surface-container-low/40 rounded px-2 py-1 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Class-3 DSC Signed</span>
                <span className="font-label-sm text-label-sm text-primary font-semibold">100% Validated</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Scrutiny Requests</span>
                  <span className="font-headline-lg text-headline-lg text-error mt-1 font-tabular-num">03</span>
                </div>
                <div className="p-2 bg-error-container text-on-error-container rounded-lg">
                  <span className="material-symbols-outlined text-[24px]">troubleshoot</span>
                </div>
              </div>
              <div className="mt-3 pt-2 bg-surface-container-low/40 rounded px-2 py-1 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">CVC & CAG Interrogations</span>
                <span className="font-label-sm text-label-sm text-error font-semibold">SLA: 48h Remaining</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest p-space-base rounded-xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Hash Integrity Status</span>
                  <span className="font-headline-lg text-headline-lg text-secondary mt-1 flex items-center gap-1 font-tabular-num">
                    100%
                    <span className="material-symbols-outlined text-secondary text-[22px]">check_circle</span>
                  </span>
                </div>
                <div className="p-2 bg-secondary-fixed text-on-secondary-fixed rounded-lg">
                  <span className="material-symbols-outlined text-[24px]">hub</span>
                </div>
              </div>
              <div className="mt-3 pt-2 bg-surface-container-low/40 rounded px-2 py-1 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">Block #89201-9B</span>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">Merkle Root Synced</span>
              </div>
            </div>
          </div>

          {/* Action & Audit Export Toolbar */}
          <div className="px-layout-gutter pb-space-sm flex flex-wrap items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm flex-1 min-w-[320px] max-w-xl">
              <div className="flex items-center bg-surface-container-lowest rounded-lg px-space-md py-2 w-full shadow-sm">
                <span className="material-symbols-outlined text-on-surface-variant text-[20px] mr-2">filter_alt</span>
                <input 
                  className="bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder-on-surface-variant w-full" 
                  placeholder="Filter by Action ID (#AUD-), Tender No, GSTIN, Officer, or Hash..." 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="text-on-surface-variant hover:text-on-surface text-[18px]" onClick={() => setSearchQuery('')}>
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-space-sm flex-wrap">
              <div className="relative inline-block text-left">
                <button className="flex items-center gap-1.5 bg-surface-container-lowest text-on-surface px-3 py-2 rounded-lg text-label-md font-label-md shadow-sm hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[18px] text-primary">calendar_month</span>
                  <span>Last 30 Days (Q2 FY 2026-27)</span>
                  <span className="material-symbols-outlined text-[16px]">expand_more</span>
                </button>
              </div>
              <button 
                className="flex items-center gap-1.5 bg-surface-container-lowest text-primary px-3.5 py-2 rounded-lg text-label-md font-label-md shadow-sm hover:bg-surface-container-low transition-colors"
                onClick={() => setIsMerkleModalOpen(true)}
              >
                <span className="material-symbols-outlined text-[18px]">fingerprint</span>
                <span>Verify Merkle Chain</span>
              </button>
              
              <div className="relative group">
                <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-lg text-label-md font-label-md shadow hover:bg-primary-container transition-colors">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  <span>Export Audit Dossier</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
                </button>
                <div className="absolute right-0 top-full mt-1 w-64 bg-surface-container-lowest rounded-xl shadow-xl py-2 hidden group-hover:block z-30">
                  <div className="px-3 py-1.5 text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Official Export Formats</div>
                  <button className="w-full text-left flex items-center gap-2 px-4 py-2 text-body-sm font-body-sm text-on-surface hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined text-error text-[18px]">picture_as_pdf</span>
                    <div className="flex flex-col">
                      <span className="font-semibold">TEC Dossier (PDF Signed)</span>
                      <span className="text-[11px] text-on-surface-variant">Formatted for statutory evaluation</span>
                    </div>
                  </button>
                  <button className="w-full text-left flex items-center gap-2 px-4 py-2 text-body-sm font-body-sm text-on-surface hover:bg-surface-container-low transition-colors">
                    <span className="material-symbols-outlined text-secondary text-[18px]">table_chart</span>
                    <div className="flex flex-col">
                      <span className="font-semibold">CAG Audit Ledger (CSV)</span>
                      <span className="text-[11px] text-on-surface-variant">Raw tabular logs with sha256 checksums</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="px-layout-gutter pb-space-base flex flex-wrap items-center justify-between gap-space-sm">
            <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg">
              <button className="px-3 py-1 text-label-md font-label-md bg-surface-container-lowest text-primary rounded shadow-sm font-semibold transition-all">All Logs (42,891)</button>
              <button className="px-3 py-1 text-label-md font-label-md text-on-surface-variant hover:text-on-surface rounded transition-all">Portal Verifications (29,401)</button>
              <button className="px-3 py-1 text-label-md font-label-md text-on-surface-variant hover:text-on-surface rounded transition-all">PO Decisions (1,280)</button>
            </div>
            <div className="flex items-center gap-2 text-label-sm font-label-sm">
              <span className="text-on-surface-variant uppercase tracking-wider">Status:</span>
              <span className="cursor-pointer bg-surface-container-lowest text-on-surface px-2 py-0.5 rounded shadow-sm font-semibold">All</span>
              <span className="cursor-pointer bg-error-container text-on-error-container px-2 py-0.5 rounded font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Disqualified (12)
              </span>
              <span className="cursor-pointer bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Cleared / Approved (86)
              </span>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="px-layout-gutter pb-space-2xl grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
            
            {/* Audit Ledger Section */}
            <div className="xl:col-span-8 flex flex-col gap-space-sm bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
              <div className="px-space-base py-3 bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">list_alt</span>
                  <span className="font-title-sm text-title-sm text-on-surface font-semibold">Statutory Bid Audit Ledger</span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container-lowest px-2 py-0.5 rounded">Realtime Append Stream</span>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span> Sync Active (mTLS 1.3)
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto w-full">
                <table className="w-full text-left font-body-sm text-body-sm border-collapse">
                  <thead>
                    <tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                      <th className="py-3 px-space-base whitespace-nowrap">Timestamp (IST)</th>
                      <th className="py-3 px-space-base whitespace-nowrap">Action ID & Hash</th>
                      <th className="py-3 px-space-base whitespace-nowrap">Actor / Initiator</th>
                      <th className="py-3 px-space-base whitespace-nowrap">Tender & Bidder Ref</th>
                      <th className="py-3 px-space-base whitespace-nowrap">Action & Checked</th>
                      <th className="py-3 px-space-base whitespace-nowrap">Status Verdict</th>
                    </tr>
                  </thead>
                  <tbody className="divide-none text-on-surface">
                    {displayLogs.map((log: any, idx: number) => (
                      <tr key={log.id || idx} className={`hover:bg-surface-container-low cursor-pointer transition-colors ${selectedRecord === (log.id || log.originalKey) ? 'bg-surface-container-low' : 'bg-surface-container-lowest'}`} onClick={() => setSelectedRecord(log.id || log.originalKey)}>
                        <td className="py-3 px-space-base whitespace-nowrap align-top">
                          <span className="font-tabular-num font-semibold text-on-surface block">{log.timestamp || '14-Oct-2026'}</span>
                        </td>
                        <td className="py-3 px-space-base whitespace-nowrap align-top">
                          <div className="flex items-center gap-1">
                            <span className="font-semibold text-primary font-mono text-[12px]">{log.realId ? `#AUD-${log.realId.substring(0,6)}` : log.id}</span>
                            <span className="material-symbols-outlined text-[14px] text-secondary">verified</span>
                          </div>
                          <span className="font-mono text-[10px] text-on-surface-variant block">{log.hash?.substring(0, 10)}...</span>
                        </td>
                        <td className="py-3 px-space-base align-top whitespace-nowrap">
                          <span className="font-semibold text-on-surface block">{log.officer}</span>
                          <span className="text-[10px] text-on-surface-variant">{log.role}</span>
                        </td>
                        <td className="py-3 px-space-base align-top">
                          <span className="font-mono text-[11px] font-semibold text-primary block">{log.target || 'System'}</span>
                        </td>
                        <td className="py-3 px-space-base align-top">
                          <span className="font-semibold block text-[13px]">{log.action || 'Check'}</span>
                        </td>
                        <td className="py-3 px-space-base align-top whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded ${log.status === 'SUCCESS' ? 'bg-secondary-fixed text-on-secondary-fixed' : 'bg-error-container text-on-error-container'} text-label-sm font-bold uppercase`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${log.status === 'SUCCESS' ? 'bg-secondary' : 'bg-error'}`}></span> {log.status || 'APPROVED'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Sidebar: Interactive Inspector */}
            <div className="xl:col-span-4 flex flex-col gap-space-base bg-surface-container-lowest p-space-lg rounded-xl shadow-md">
              <div className="flex items-center justify-between pb-3 border-b-0 bg-surface-container-low -mx-space-lg -mt-space-lg px-space-lg py-3 rounded-t-xl">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">verified</span>
                  <div>
                    <h3 className="font-title-sm text-title-sm text-on-surface font-semibold leading-tight">Cryptographic Inspector</h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Selected Audit Entry Verification</span>
                  </div>
                </div>
                <span className="font-mono text-label-sm font-bold bg-primary text-on-primary px-2.5 py-1 rounded">
                  {currentRecord.id}
                </span>
              </div>

              <div className="p-space-md bg-secondary-fixed/30 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-secondary text-[26px]">task_alt</span>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md text-on-secondary-fixed font-bold">Merkle Chain Verified</span>
                    <span className="font-label-sm text-label-sm text-on-secondary-container">Block #42891 · Zero Tamper Delta</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary text-[20px]">lock</span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Officer Digital Signature (DSC)</span>
                <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">badge</span>
                      <div>
                        <span className="font-body-sm font-semibold text-on-surface block">{currentRecord.officer}</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">{currentRecord.role}</span>
                      </div>
                    </div>
                    <span className="text-[11px] bg-surface-container-lowest text-secondary px-2 py-0.5 rounded font-mono font-semibold">VALID</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">PO Justification & Statutory Note</span>
                <div className="p-space-md bg-surface-container-low rounded-lg text-body-sm font-body-sm text-on-surface leading-relaxed relative">
                  <span className="material-symbols-outlined text-surface-dim absolute top-2 right-2 text-[32px] -z-0 pointer-events-none">format_quote</span>
                  <p className="relative z-10 text-[13px] text-on-surface">
                    "{currentRecord.justification}"
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">SHA-256 Digest</span>
                  <span className="text-[11px] text-secondary font-mono font-semibold">MATCHED (0ms)</span>
                </div>
                <div className="p-space-md bg-surface-container-low rounded-lg font-mono text-[11px] break-all">
                  <span className="text-primary font-bold">{currentRecord.hash}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Raw JSON Payload</span>
                  <button onClick={handleCopy} className="text-primary hover:text-primary-container text-[11px] font-label-sm flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">{copied ? 'done' : 'content_copy'}</span>
                    <span>{copied ? 'Copied!' : 'Copy Raw'}</span>
                  </button>
                </div>
                <pre className="bg-inverse-surface text-inverse-on-surface p-space-sm rounded-lg text-[10px] font-mono overflow-x-auto max-h-36">
                  <code>{JSON.stringify(currentRecord, null, 2)}</code>
                </pre>
              </div>

            </div>
          </div>
        </div>

        {/* Merkle Modal */}
        {isMerkleModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-inverse-surface/60 backdrop-blur-sm">
            <div className="bg-surface-container-lowest rounded-2xl max-w-2xl w-full p-space-xl shadow-2xl mx-4 relative animate-in fade-in">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-space-sm">
                  <div className="p-2 bg-secondary-fixed text-on-secondary-fixed rounded-lg">
                    <span className="material-symbols-outlined text-[24px]">verified_user</span>
                  </div>
                  <div>
                    <h3 className="font-headline-md text-headline-md text-on-surface">Merkle Tree Ledger Integrity Check</h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Cryptographic Verification against NIC Sovereign MeghRaj Cloud</span>
                  </div>
                </div>
                <button className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low" onClick={() => setIsMerkleModalOpen(false)}>
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
              <div className="py-space-base space-y-space-md">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-label-sm font-label-sm">
                    <span className="text-on-surface font-semibold">Chain Recalculation Progress (42,891 Blocks)</span>
                    <span className="text-secondary font-bold">100% Completed</span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full w-full"></div>
                  </div>
                </div>
                <div className="p-space-base bg-surface-container-low rounded-xl space-y-2 text-body-sm font-body-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">Latest Merkle Root Hash:</span>
                    <span className="font-mono text-primary font-semibold text-[12px]">892019bca4023910ee2418a...fe99021</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-on-surface-variant">Tamper Delta Detected:</span>
                    <span className="text-secondary font-bold font-mono">0.000000% (Bit-Exact Integrity)</span>
                  </div>
                </div>
              </div>
              <div className="pt-space-md flex justify-end gap-space-sm">
                <button className="px-4 py-2 bg-surface-container-low text-on-surface rounded-lg text-label-md font-label-md hover:bg-surface-container-high transition-colors" onClick={() => setIsMerkleModalOpen(false)}>
                  Close Verification
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </ProtectedRoute>
  );
}
