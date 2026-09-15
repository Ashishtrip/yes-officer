'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function PortalConnectors() {
  const { user, logout } = useAuth();
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalEndpoint, setModalEndpoint] = useState('');
  const [modalBody, setModalBody] = useState('');
  
  const [syncing, setSyncing] = useState(false);
  const [synced, setSynced] = useState(false);
  
  const [pinging, setPinging] = useState(false);
  const [pinged, setPinged] = useState(false);

  const triggerSyncAll = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setSynced(true);
      setTimeout(() => setSynced(false), 2500);
    }, 1200);
  };

  const testLatencyPing = () => {
    setPinging(true);
    setTimeout(() => {
      setPinging(false);
      setPinged(true);
      setTimeout(() => setPinged(false), 2500);
    }, 1000);
  };

  const inspectPayload = (connectorName: string, endpoint: string, details: string) => {
    setModalTitle(`Payload: ${connectorName}`);
    setModalEndpoint(endpoint);
    setModalBody(JSON.stringify({
      connector: connectorName,
      query: endpoint,
      audit_verdict: details,
      tls_version: "TLS 1.3_CHACHA20_POLY1305_SHA256",
      signature_sha256: "9f82c448d5b882f029e1c12a83f12463e271a39943f"
    }, null, 2));
    setModalOpen(true);
  };

  const copyPayload = () => {
    navigator.clipboard.writeText(modalBody);
    alert("Payload signature copied to clipboard for statutory record.");
    setModalOpen(false);
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
          <nav className="hidden xl:flex items-center h-full gap-space-lg">
            <Link className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="/">Tenders & Bids</Link>
            <Link className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="/compliance-rules">Compliance Rules</Link>
            <Link className="h-full flex items-center px-space-xs font-title-sm text-title-sm text-primary border-b-2 border-primary transition-colors" href="/portal-connectors">Portal Connectors</Link>
            <Link className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="/audit-logs">Audit Logs</Link>
          </nav>
          <div className="flex items-center gap-space-md ml-auto">
            <button onClick={logout} className="text-on-surface-variant hover:text-primary font-label-md">Logout</button>
            <div className="h-6 w-px bg-surface-container-high mx-space-2xs"></div>
            <div className="flex items-center gap-space-sm pl-space-xs cursor-pointer group">
              <img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0gElgbgal4gd4SIMy3OwrKEcZe588flOOdKLPMe4KQ8SoeCQsdkrar6ypZ2bugDnd-W1CEEwh6fZA0UeQvpJYK4xZQmhS5NS9VGrL2hCUUlpfTD9A4ONwukYNR9GdwE_uDTQ7SBkE4ZFxXZMguxQxl-QG5ChJzn0KbJqTwPV0WnU1JFroUwLdTwGYDpAy41oufwfBXZlsuDZK3oN7EQKVs24q22rliyszAmfiQaCV5xMLweN3IuNKsQ" />
              <div className="hidden lg:flex flex-col text-left">
                <span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">{user?.name || 'Rajesh Kumar, IAS'}</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">{user?.role || 'Senior Procurement Officer'}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full pt-14 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Sub-Header */}
          <div className="w-full bg-surface-container-lowest shadow-sm px-layout-gutter py-space-lg">
            <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between gap-space-lg">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
                  <span>Portal Desk</span>
                  <span className="material-symbols-outlined text-[13px]">chevron_right</span>
                  <span>Integration Architecture</span>
                  <span className="material-symbols-outlined text-[13px]">chevron_right</span>
                  <span className="text-primary font-semibold">Government Portal Connectors</span>
                </div>
                <div className="flex items-center gap-space-md mt-0.5">
                  <div className="h-8 w-1.5 rounded-full bg-primary"></div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Sovereign Portal Connectors & Integration Gateway</h1>
                  <span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-lg bg-surface-container-low text-secondary font-label-sm text-label-sm uppercase font-semibold">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                    NIC Gateway V4.2
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-4xl mt-0.5">
                  Real-time sovereign adapter telemetry, API quota consumption, automated circuit breakers, and Redis cache synchronization across statutory Indian public registries.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm">
                <button onClick={triggerSyncAll} className="px-space-md py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container transition-all flex items-center gap-space-xs shadow-sm active:scale-[0.98]">
                  {syncing ? (
                    <>
                      <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                      <span className="font-label-md text-label-md">Syncing Fleet...</span>
                    </>
                  ) : synced ? (
                    <>
                      <span className="material-symbols-outlined text-[18px] text-secondary">check_circle</span>
                      <span className="font-label-md text-label-md">All 6 Synced</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[18px]">sync</span>
                      <span className="font-label-md text-label-md">Force Sync All Connectors</span>
                    </>
                  )}
                </button>
                <button onClick={testLatencyPing} className="px-space-md py-2 rounded-xl bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-space-xs active:scale-[0.98]">
                  {pinging ? (
                    <>
                      <span className="material-symbols-outlined text-[18px] animate-pulse">speed</span>
                      <span className="font-label-md text-label-md">Pinging Sovereign Endpoints...</span>
                    </>
                  ) : pinged ? (
                    <>
                      <span className="material-symbols-outlined text-[18px] text-secondary">done_all</span>
                      <span className="font-label-md text-label-md">Avg: 172ms (Optimal)</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[18px]">speed</span>
                      <span className="font-label-md text-label-md">Test Endpoint Latency</span>
                    </>
                  )}
                </button>
                <button className="px-space-md py-2 rounded-xl bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[18px]">key</span>
                  <span className="font-label-md text-label-md">Rotate API Gateway Keys</span>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full px-layout-gutter py-space-xl max-w-[1600px] mx-auto flex flex-col gap-space-xl">
            {/* Top KPI Telemetry Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Active Sovereign Pipelines</span>
                    <div className="flex items-baseline gap-space-xs mt-space-xs">
                      <span className="font-display-lg text-display-lg text-on-surface">6</span>
                      <span className="font-title-sm text-title-sm text-on-surface-variant">/ 6 Connected</span>
                    </div>
                  </div>
                  <div className="p-space-xs rounded-lg bg-surface-container text-secondary">
                    <span className="material-symbols-outlined text-[24px]">hub</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-space-sm flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> 100% Operational Health
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">All Adapters Green</span>
                </div>
              </div>

              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Global Ingestion Rate</span>
                    <div className="flex items-baseline gap-space-xs mt-space-xs">
                      <span className="font-display-lg text-display-lg text-on-surface font-tabular-num">1,420</span>
                      <span className="font-label-md text-label-md text-on-surface-variant font-medium">calls / hr</span>
                    </div>
                  </div>
                  <div className="p-space-xs rounded-lg bg-surface-container text-primary">
                    <span className="material-symbols-outlined text-[24px]">query_stats</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-space-sm flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px] text-secondary">verified_user</span> Avg Latency: 184ms
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-tabular-num">TLS 1.3 E2E</span>
                </div>
              </div>

              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary-container"></div>
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Cache Hit Ratio (Redis L2)</span>
                    <div className="flex items-baseline gap-space-xs mt-space-xs">
                      <span className="font-display-lg text-display-lg text-on-surface font-tabular-num">86.4%</span>
                      <span className="font-label-sm text-label-sm text-secondary font-semibold">+2.1% 24h</span>
                    </div>
                  </div>
                  <div className="p-space-xs rounded-lg bg-surface-container text-primary-container">
                    <span className="material-symbols-outlined text-[24px]">memory</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-space-sm flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant truncate font-tabular-num">
                    Saved 12,400 roundtrips
                  </span>
                  <span className="font-label-sm text-label-sm text-on-primary-fixed-variant font-semibold">Max TTL: 24h</span>
                </div>
              </div>

              <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute top-0 left-0 w-full h-1 bg-tertiary-container"></div>
                <div className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Circuit Breakers & Fallbacks</span>
                    <div className="flex items-baseline gap-space-xs mt-space-xs">
                      <span className="font-display-lg text-display-lg text-on-surface font-tabular-num">0</span>
                      <span className="font-label-sm text-label-sm text-secondary font-semibold">Tripped</span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">· 1 Half-Open</span>
                    </div>
                  </div>
                  <div className="p-space-xs rounded-lg bg-surface-container text-tertiary">
                    <span className="material-symbols-outlined text-[24px]">shield_with_heart</span>
                  </div>
                </div>
                <div className="mt-space-md pt-space-sm bg-surface-container-low -mx-space-lg -mb-space-lg px-space-lg py-space-sm flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-tertiary font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary-container animate-ping"></span> NSIC Scraper Standby
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant font-tabular-num">Auto-Recoil</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
              <div className="xl:col-span-8 flex flex-col gap-space-md">
                <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-title-sm text-title-sm text-on-surface">Registered Sovereign Adapters</span>
                    <span className="px-space-xs py-0.5 rounded-md bg-surface-container-high font-tabular-num text-label-sm text-primary font-bold">6 Total</span>
                  </div>
                  <div className="flex items-center gap-space-xs">
                    <button className="px-space-sm py-1 rounded bg-surface-container font-label-sm text-label-sm text-primary font-semibold">All Active</button>
                    <button className="px-space-sm py-1 rounded hover:bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Tax & Identity (3)</button>
                    <button className="px-space-sm py-1 rounded hover:bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Corporate & Labor (2)</button>
                    <button className="px-space-sm py-1 rounded hover:bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Integrity/Sanction (1)</button>
                  </div>
                </div>

                {/* 1. GSTN */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary font-bold">
                        <span className="material-symbols-outlined text-[24px]">receipt_long</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-space-xs">
                          <h3 className="font-title-sm text-title-sm text-on-surface font-semibold">GSTN Direct Sovereign Pipeline</h3>
                          <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">REST / mTLS</span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Goods and Services Tax Network · Department of Revenue, Ministry of Finance</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-md self-end md:self-auto">
                      <div className="flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-low text-secondary font-label-sm text-label-sm font-semibold">
                        <span className="w-2 h-2 rounded-full bg-secondary"></span>
                        CONNECTED
                      </div>
                      <div className="text-right">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Latency</span>
                        <span className="font-tabular-num text-tabular-num text-on-surface font-semibold text-secondary">142 ms</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md bg-surface-container-low p-space-md rounded-xl">
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
                        <span>API Rate Quota</span>
                        <span className="font-tabular-num font-semibold text-on-surface">42 / 100 req/min (42%)</span>
                      </div>
                      <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: "42%" }}></div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Resilience & Cache</span>
                      <span className="font-body-sm text-body-sm text-on-surface font-semibold">Circuit Closed (0 err/1h) · Redis 12h TTL</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Verification Protocol</span>
                      <span className="font-body-sm text-body-sm text-on-surface font-semibold">GSTR-3B, GSTR-1, Active Status, Legal Name</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-xs">
                    <div className="flex flex-wrap gap-space-2xs text-on-surface-variant font-label-sm text-label-sm">
                      <span className="px-space-xs py-0.5 rounded bg-surface-container">GSTIN Regex V2</span>
                      <span className="px-space-xs py-0.5 rounded bg-surface-container">HSN Mapping</span>
                      <span className="px-space-xs py-0.5 rounded bg-surface-container">Filing Regularity Check</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <button onClick={() => inspectPayload('GSTN Direct Pipeline', 'GSTIN: 07AAACH7409R1ZZ', 'Payload validated: GSTR-3B current for FY 2024-25 Q3, turnover certified ₹14.8 Cr')} className="px-space-sm py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold transition-colors">
                        Inspect Payload
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. Udyam MSME */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                    <div className="flex items-start gap-space-md">
                      <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary font-bold">
                        <span className="material-symbols-outlined text-[24px]">domain</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-space-xs">
                          <h3 className="font-title-sm text-title-sm text-on-surface font-semibold">Udyam MSME National Registry</h3>
                          <span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">SOAP / REST Gateway</span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">Ministry of Micro, Small and Medium Enterprises (MSME)</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-md self-end md:self-auto">
                      <div className="flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-low text-tertiary font-label-sm text-label-sm font-semibold">
                        <span className="w-2 h-2 rounded-full bg-on-tertiary-container animate-ping"></span>
                        HIGH LOAD
                      </div>
                      <div className="text-right">
                        <span className="font-label-sm text-label-sm text-on-surface-variant block">Latency</span>
                        <span className="font-tabular-num text-tabular-num text-on-surface font-semibold">210 ms</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md bg-surface-container-low p-space-md rounded-xl">
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
                        <span className="text-error font-semibold">API Rate Quota (Alert)</span>
                        <span className="font-tabular-num font-semibold text-error">95 / 100 req/min (95%)</span>
                      </div>
                      <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                        <div className="bg-error h-full rounded-full" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Resilience & Circuit</span>
                      <span className="font-body-sm text-body-sm text-error font-semibold">Auto-Throttle Active · Backoff 2.4s</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">Validated Attributes</span>
                      <span className="font-body-sm text-body-sm text-on-surface font-semibold">19-digit URN, NIC 4-Digit, Class (Micro/Small)</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-xs">
                    <div className="flex flex-wrap gap-space-2xs text-on-surface-variant font-label-sm text-label-sm">
                      <span className="px-space-xs py-0.5 rounded bg-surface-container">NIC Revision 2008</span>
                      <span className="px-space-xs py-0.5 rounded bg-surface-container">Investment & Turnover Validation</span>
                      <span className="px-space-xs py-0.5 rounded bg-surface-container">DIC Unit Confirmation</span>
                    </div>
                    <div className="flex items-center gap-space-xs">
                      <button onClick={() => inspectPayload('Udyam MSME Registry', 'URN: UDYAM-KR-03-0019284', 'Classification: Micro Enterprise | Plant & Machinery: ₹84 Lakhs | Turnover: ₹2.4 Cr | NIC: 6201')} className="px-space-sm py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold transition-colors">
                        Inspect Payload
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="xl:col-span-4 flex flex-col gap-space-md">
                {/* Module A */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-primary text-[20px]">analytics</span>
                      <h3 className="font-title-sm text-title-sm text-on-surface font-semibold">24h Gateway Traffic Health</h3>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-semibold font-tabular-num">99.4% Success</span>
                  </div>
                  <div className="flex flex-col gap-space-xs pt-space-xs">
                    <div className="h-4 w-full rounded-full bg-surface-container flex overflow-hidden">
                      <div className="bg-secondary h-full" style={{ width: "99.4%" }} title="Success (200/201): 99.4%"></div>
                      <div className="bg-tertiary-container h-full" style={{ width: "0.4%" }} title="Rate Limited (429): 0.4%"></div>
                      <div className="bg-error h-full" style={{ width: "0.2%" }} title="Timeout / Fail (504): 0.2%"></div>
                    </div>
                    <div className="flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm">
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-secondary"></span> 200 OK (99.4%)</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary-container"></span> 429 Throttle (0.4%)</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-error"></span> 5xx Timeout (0.2%)</span>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">Hourly Latency Variance (ms)</span>
                      <span className="font-label-sm text-label-sm text-primary font-tabular-num font-semibold">Min: 98ms · Max: 340ms</span>
                    </div>
                    <svg className="w-full h-20 overflow-visible text-primary" fill="none" viewBox="0 0 320 60">
                      <line stroke="currentColor" strokeDasharray="2 2" strokeOpacity="0.08" x1="0" x2="320" y1="15" y2="15"></line>
                      <line stroke="currentColor" strokeDasharray="2 2" strokeOpacity="0.08" x1="0" x2="320" y1="40" y2="40"></line>
                      <defs>
                        <linearGradient id="latencyGrad" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.25"></stop>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0.0"></stop>
                        </linearGradient>
                      </defs>
                      <path d="M0,45 Q25,38 50,42 T100,28 T150,32 T200,18 T250,30 T300,22 L320,24 L320,60 L0,60 Z" fill="url(#latencyGrad)"></path>
                      <path d="M0,45 Q25,38 50,42 T100,28 T150,32 T200,18 T250,30 T300,22 L320,24" fill="none" stroke="currentColor" strokeWidth="2"></path>
                      <circle className="fill-primary" cx="200" cy="18" r="3"></circle>
                    </svg>
                    <div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
                      <span>00:00</span>
                      <span>06:00</span>
                      <span>12:00</span>
                      <span>18:00</span>
                      <span>Now</span>
                    </div>
                  </div>
                </div>

                {/* Module C */}
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center gap-space-xs">
                    <span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
                    <h3 className="font-title-sm text-title-sm text-on-surface font-semibold">Statutory Security & DPDP 2023</h3>
                  </div>
                  <div className="flex flex-col gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                    <div className="flex items-center justify-between py-1 border-b border-surface-container">
                      <span>Data Protection</span>
                      <span className="font-semibold text-on-surface">DPDP Act 2023 Compliant</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-surface-container">
                      <span>At-Rest Cryptography</span>
                      <span className="font-semibold text-on-surface font-tabular-num">AES-256 (FIPS 140-3)</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-surface-container">
                      <span>Transit Protocol</span>
                      <span className="font-semibold text-on-surface font-tabular-num">TLS 1.3 mTLS Pinned</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span>Verification Audit Log</span>
                      <span className="font-semibold text-primary font-tabular-num">SHA-256 Chain Signed</span>
                    </div>
                  </div>
                  <div className="mt-space-xs p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                    <div className="flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-on-surface-variant text-[18px]">cloud_done</span>
                      <span className="font-label-sm text-label-sm text-on-surface font-semibold">NIC MeghRaj Cloud Node</span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">MeitY Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] bg-inverse-surface/40 backdrop-blur-sm flex items-center justify-center p-space-md">
          <div className="bg-surface-container-lowest max-w-xl w-full rounded-2xl shadow-xl p-space-lg flex flex-col gap-space-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-primary text-[24px]">terminal</span>
                <h4 className="font-title-sm text-title-sm text-on-surface font-semibold">{modalTitle}</h4>
              </div>
              <button className="p-1 rounded hover:bg-surface-container text-on-surface-variant" onClick={() => setModalOpen(false)}>
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">Endpoint Identifier</span>
              <div className="p-space-xs bg-surface-container-low rounded font-tabular-num text-body-sm text-primary font-semibold">
                {modalEndpoint}
              </div>
            </div>
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-semibold uppercase">Parsed JSON Response (Normalized)</span>
              <pre className="p-space-md bg-inverse-surface text-inverse-on-surface rounded-xl font-tabular-num text-label-sm overflow-x-auto leading-relaxed whitespace-pre-wrap">
                {modalBody}
              </pre>
            </div>
            <div className="flex justify-end gap-space-xs pt-space-xs">
              <button className="px-space-md py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-semibold transition-colors" onClick={() => setModalOpen(false)}>
                Dismiss
              </button>
              <button className="px-space-md py-2 rounded-xl bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-colors flex items-center gap-1" onClick={copyPayload}>
                <span className="material-symbols-outlined text-[16px]">content_copy</span>
                <span>Copy Signature</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </ProtectedRoute>
  );
}
