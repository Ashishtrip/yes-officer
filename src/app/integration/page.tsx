"use client";

import Image from "next/image";
import Link from "next/link";

export default function IntegrationPage() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-surface-container-high shadow-sm"><div className="h-14 w-full px-layout-gutter flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-md shrink-0"><img alt="Government of India Emblazoned Yes Officer Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XF1PZsUoMowWpDMDKHX4d0Uh2TzyN0ieKoXRAg9eWo0KUOJEYX9ay-0FikqKi6SCy-s2qdnXKKSVBN1U3cGfFxFZF0ukpbfXY2DXXHGRuTayL8HUzuRTRsVXDXLBNUvCkLJ45-5sgvvJPij2xXTdFwemSujw5XjPH5QUdV8NmgQmyup3OjnHPFKO06ETugegA2e_yc3BJ49NnxvbQ_j3UdtcbgijRrC1sPHCXBUxBBvQe1hRNlh5IrYBas"/><div className="flex flex-col"><div className="flex items-center gap-space-xs"><span className="font-title-sm text-title-sm text-primary leading-none font-bold">Yes Officer</span><span className="font-label-sm text-[10px] px-1 py-0.5 rounded bg-surface-container-high text-on-surface-variant uppercase font-semibold leading-none">Govt of India</span><span className="hidden xl:inline-flex items-center gap-1 font-label-sm text-[10px] px-1.5 py-0.5 rounded bg-secondary-container text-on-secondary-container font-semibold uppercase leading-none"><span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>NIC/Cert-In L3</span></div><span className="font-label-sm text-label-sm text-on-surface-variant leading-tight mt-0.5">Ministry of Finance • GeM Compliance Core</span></div></div><nav className="hidden lg:flex items-center h-full gap-space-xs overflow-x-auto" data-active-classes="text-primary font-semibold border-b-2 border-primary"><a className="h-full flex items-center px-space-xs font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="tenders-bids" href="#">Tenders &amp; Bids</a><a className="h-full flex items-center px-space-xs font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="vigilance-analytics" href="#">Vigilance &amp; Analytics</a><a className="h-full flex items-center px-space-xs font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="compliance-rules" href="#">Compliance Rules</a><a className="h-full flex items-center px-space-xs font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="contract-award-pbg" href="#">Contract Award &amp; PBG</a><a className="h-full flex items-center px-space-xs font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="grievance-iem-appeals" href="#">Grievance &amp; IEM Appeals</a><a className="h-full flex items-center px-space-xs font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="public-rti-disclosures" href="#">Public RTI Disclosures</a><a className="h-full flex items-center px-space-xs font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="portal-connectors" href="#">Portal Connectors</a><a className="h-full flex items-center px-space-xs font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="developer-gateway-diagnostics" href="#">Developer Gateway</a><a className="h-full flex items-center px-space-xs font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="audit-logs" href="#">Audit Logs</a><a className="h-full flex items-center px-space-xs font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors whitespace-nowrap" data-path="user-access-admin" href="#">Admin</a></nav><div className="flex items-center gap-space-sm ml-auto shrink-0"><div className="hidden 2xl:flex items-center bg-surface-container-low rounded-xl px-space-sm py-1 border border-outline-variant focus-within:border-primary focus-within:bg-surface-container-lowest transition-colors w-52"><span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-space-xs">search</span><input className="bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder-on-surface-variant w-full" placeholder="Search tenders, PBG, GSTIN..." type="text"/></div><button aria-label="Notifications" className="relative p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span></button><button aria-label="Help and Support" className="p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">help</span></button><div className="h-6 w-px bg-surface-container-high mx-space-2xs"></div><div className="flex items-center gap-space-sm pl-space-xs cursor-pointer group"><img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0gElgbgal4gd4SIMy3OwrKEcZe588flOOdKLPMe4KQ8SoeCQsdkrar6ypZ2bugDnd-W1CEEwh6fZA0UeQvpJYK4xZQmhS5NS9VGrL2hCUUlpfTD9A4ONwukYNR9GdwE_uDTQ7SBkE4ZFxXZMguxQxl-QG5ChJzn0KbJqTwPV0WnU1JFroUwLdTwGYDpAy41oufwfBXZlsuDZK3oN7EQKVs24q22rliyszAmfiQaCV5xMLweN3IuNKsQ"/><div className="hidden xl:flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">Rajesh Kumar, IAS</span><span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Senior Procurement Officer</span></div><span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface text-[18px]">expand_more</span></div></div></div></header><main className="w-full pt-14 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/* Sub-Header / Sovereign Infrastructure Identity Banner */}
<div className="w-full bg-surface-container-low px-layout-gutter py-space-md">
<div className="max-w-[1720px] mx-auto flex flex-col xl:flex-row xl:items-center justify-between gap-space-md">
{/* Breadcrumb & Core Identity */}
<div className="flex flex-col gap-space-2xs min-w-0">
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span>Portal Desk</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span>System Administration</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Sovereign API Gateway &amp; Diagnostics Console</span>
</div>
<div className="flex items-center gap-space-sm flex-wrap">
<h1 className="font-headline-md text-headline-md text-on-surface tracking-tight">GeM Integration Gateway, Webhook Engine &amp; DevOps Diagnostics Console</h1>
<span className="font-label-sm text-label-sm px-space-xs py-space-2xs bg-surface-container-highest text-primary rounded font-semibold uppercase tracking-wider">Production Node 08</span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm flex-wrap">
<span className="inline-flex items-center gap-1 font-mono text-[11px] text-on-surface">NIC/MeitY API Gateway v4.2</span>
<span>•</span>
<span className="inline-flex items-center gap-1 font-mono text-[11px] text-on-surface">Kafka Cluster v3.6 (Brokers: 5/5)</span>
<span>•</span>
<span className="inline-flex items-center gap-1 font-mono text-[11px] text-secondary">
<span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse"></span>
            FIPS 140-3 Level 3 HSM Active
          </span>
<span>•</span>
<span className="inline-flex items-center gap-1 font-mono text-[11px] text-on-surface">Redis Cluster (6 Shards)</span>
</div>
</div>
{/* Action Controls Bar */}
<div className="flex items-center gap-space-xs flex-wrap shrink-0">
<button className="h-9 px-space-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container-high rounded font-label-md text-label-md transition-all flex items-center gap-1.5 shadow-sm active:translate-y-px" id="btn-cache-flush" type="button">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">cached</span>
          Force Cache Invalidation (Redis)
        </button>
<button className="h-9 px-space-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container-high rounded font-label-md text-label-md transition-all flex items-center gap-1.5 shadow-sm active:translate-y-px" id="btn-replay-queue" type="button">
<span className="material-symbols-outlined text-[16px] text-secondary">replay</span>
          Replay Failed Webhook Queue (Kafka)
        </button>
<button className="h-9 px-space-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container-high rounded font-label-md text-label-md transition-all flex items-center gap-1.5 shadow-sm active:translate-y-px" id="btn-rotate-secret" type="button">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">key</span>
          Rotate Gateway OAuth 2.0 Secret
        </button>
<button className="h-9 px-space-sm bg-primary text-on-primary hover:bg-primary-container rounded font-label-md text-label-md transition-all flex items-center gap-1.5 shadow-sm active:translate-y-px" id="btn-export-metrics" type="button">
<span className="material-symbols-outlined text-[16px]">file_download</span>
          Export Metrics
        </button>
</div>
</div>
</div>
{/* Notification Toast Area (Script Triggered) */}
<div className="hidden w-full bg-secondary text-on-secondary px-layout-gutter py-space-xs text-center font-label-md text-label-md transition-all" id="status-toast">
    Command executed successfully across MeghRaj sovereign cluster nodes.
  </div>
{/* Main Workspace */}
<div className="w-full px-layout-gutter py-space-lg max-w-[1720px] mx-auto flex flex-col gap-space-lg">
{/* Executive Telemetry Suite (Top Banner KPIs) */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-md">
{/* KPI 1 */}
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Ingress &amp; Egress Throughput</span>
<span className="material-symbols-outlined text-primary text-[20px]">speed</span>
</div>
<div className="my-space-xs flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight tabular-nums">4,820</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">req / min</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
<span className="inline-flex items-center gap-1 text-[11px] text-secondary font-semibold">
<span className="material-symbols-outlined text-[14px]">arrow_drop_up</span> Peak 6,100 at 14:00
          </span>
<span className="text-[11px] text-on-surface-variant">Bid Unsealing Window</span>
</div>
{/* Sparkline bar representation */}
<div className="w-full h-1 bg-surface-container-high rounded mt-space-sm overflow-hidden flex gap-0.5">
<div className="h-full bg-primary" style={{width: "78%"}}></div>
<div className="h-full bg-secondary-fixed-dim" style={{width: "22%"}}></div>
</div>
</div>
{/* KPI 2 */}
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">p99 Pipeline Latency</span>
<span className="material-symbols-outlined text-secondary text-[20px]">timer</span>
</div>
<div className="my-space-xs flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight tabular-nums">142</span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">ms</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
<span className="inline-flex items-center gap-1 text-[11px] text-secondary font-semibold">
<span className="material-symbols-outlined text-[14px]">verified</span> SLA Target &lt;250ms
          </span>
<span className="text-[11px] text-on-surface-variant">MeitY SLA Pass</span>
</div>
<div className="w-full h-1 bg-surface-container-high rounded mt-space-sm overflow-hidden">
<div className="h-full bg-secondary" style={{width: "56%"}}></div>
</div>
</div>
{/* KPI 3 */}
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Kafka Event Pipeline Health</span>
<span className="material-symbols-outlined text-primary text-[20px]">hub</span>
</div>
<div className="my-space-xs flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg font-bold text-on-surface tracking-tight tabular-nums">0</span>
<span className="font-body-sm text-body-sm text-secondary font-semibold">Lag / 100% In-Order</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
<span className="font-mono text-[11px] text-on-surface font-medium truncate max-w-[180px]">gem.bid.events.v1</span>
<span className="text-[11px] text-secondary font-medium">Synced</span>
</div>
<div className="w-full h-1 bg-surface-container-high rounded mt-space-sm overflow-hidden">
<div className="h-full bg-secondary" style={{width: "100%"}}></div>
</div>
</div>
{/* KPI 4 */}
<div className="bg-surface-container-lowest p-space-md rounded-lg shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Circuit Breaker Mesh</span>
<span className="material-symbols-outlined text-secondary text-[20px]">shield</span>
</div>
<div className="my-space-xs flex items-baseline gap-space-xs">
<span className="font-display-lg text-display-lg font-bold text-secondary tracking-tight">ALL CLOSED</span>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm pt-space-xs">
<span className="text-[11px] text-on-surface">0 Tripped / 6 Connectors</span>
<span className="text-[11px] text-on-surface-variant">Udyam • GSTN • EPFO • MCA21</span>
</div>
<div className="w-full h-1 bg-surface-container-high rounded mt-space-sm overflow-hidden">
<div className="h-full bg-secondary" style={{width: "100%"}}></div>
</div>
</div>
</div>
{/* Two-Column Architecture Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
{/* LEFT COLUMN (65% / lg:col-span-8) */}
<div className="lg:col-span-8 flex flex-col gap-space-lg">
{/* 1. Microservice Mesh & Portal Connector Topology Status */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between flex-wrap gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[22px]">account_tree</span>
<h2 className="font-title-sm text-title-sm text-on-surface tracking-tight">Microservice Mesh &amp; Statutory Connector Topology</h2>
</div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-ping"></span>
<span>Telemetry Auto-refresh (3s)</span>
</div>
</div>
{/* Connector Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-sm">
{/* Connector 1 */}
<div className="bg-surface-container-low p-space-md rounded flex flex-col gap-space-xs hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">GeM Core Ingestion API</span>
<span className="px-space-xs py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container uppercase">200 OK</span>
</div>
<div className="text-on-surface-variant font-mono text-[11px] mt-space-2xs flex flex-col gap-0.5">
<div className="flex justify-between"><span>Endpoint:</span> <span className="text-on-surface font-semibold">/v4/bid-ingest</span></div>
<div className="flex justify-between"><span>p95 Latency:</span> <span className="text-secondary font-semibold">38 ms</span></div>
<div className="flex justify-between"><span>Daily Quota:</span> <span className="text-on-surface">85,420 / 100,000</span></div>
<div className="flex justify-between"><span>Availability:</span> <span className="text-on-surface">99.98%</span></div>
</div>
</div>
{/* Connector 2 */}
<div className="bg-surface-container-low p-space-md rounded flex flex-col gap-space-xs hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">GSTN Tax Validator</span>
<span className="px-space-xs py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container uppercase">200 OK</span>
</div>
<div className="text-on-surface-variant font-mono text-[11px] mt-space-2xs flex flex-col gap-0.5">
<div className="flex justify-between"><span>Protocols:</span> <span className="text-on-surface font-semibold">GSTR-3B • e-Way</span></div>
<div className="flex justify-between"><span>p95 Latency:</span> <span className="text-secondary font-semibold">112 ms</span></div>
<div className="flex justify-between"><span>OAuth Token:</span> <span className="text-on-surface">Active (NIC ASP)</span></div>
<div className="flex justify-between"><span>Failover:</span> <span className="text-on-surface">DR-Hyderabad Ready</span></div>
</div>
</div>
{/* Connector 3 */}
<div className="bg-surface-container-low p-space-md rounded flex flex-col gap-space-xs hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">MSME Udyam Aadhaar Bridge</span>
<span className="px-space-xs py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container uppercase">200 OK</span>
</div>
<div className="text-on-surface-variant font-mono text-[11px] mt-space-2xs flex flex-col gap-0.5">
<div className="flex justify-between"><span>Classification:</span> <span className="text-on-surface font-semibold">Micro/Small/Med</span></div>
<div className="flex justify-between"><span>p95 Latency:</span> <span className="text-secondary font-semibold">84 ms</span></div>
<div className="flex justify-between"><span>Cache TTL:</span> <span className="text-on-surface">18h (Local L1/L2)</span></div>
<div className="flex justify-between"><span>Signature:</span> <span className="text-on-surface">UIDAI e-Sign Valid</span></div>
</div>
</div>
{/* Connector 4 */}
<div className="bg-surface-container-low p-space-md rounded flex flex-col gap-space-xs hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">EPFO / Shram Suvidha</span>
<span className="px-space-xs py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container uppercase">200 OK</span>
</div>
<div className="text-on-surface-variant font-mono text-[11px] mt-space-2xs flex flex-col gap-0.5">
<div className="flex justify-between"><span>EPF ECR Audit:</span> <span className="text-on-surface font-semibold">Active Match</span></div>
<div className="flex justify-between"><span>p95 Latency:</span> <span className="text-secondary font-semibold">168 ms</span></div>
<div className="flex justify-between"><span>Circuit State:</span> <span className="text-secondary font-semibold">Normal / Closed</span></div>
<div className="flex justify-between"><span>Queue Depth:</span> <span className="text-on-surface">0 Pending</span></div>
</div>
</div>
{/* Connector 5 */}
<div className="bg-surface-container-low p-space-md rounded flex flex-col gap-space-xs hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">RBI SFMS MT-760 Gateway</span>
<span className="px-space-xs py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container uppercase">200 OK</span>
</div>
<div className="text-on-surface-variant font-mono text-[11px] mt-space-2xs flex flex-col gap-0.5">
<div className="flex justify-between"><span>Security:</span> <span className="text-secondary font-semibold">Mutual TLS (mTLS)</span></div>
<div className="flex justify-between"><span>p95 Latency:</span> <span className="text-secondary font-semibold">46 ms</span></div>
<div className="flex justify-between"><span>e-PBG Verification:</span> <span className="text-on-surface">Real-Time Ack</span></div>
<div className="flex justify-between"><span>Audit Trail:</span> <span className="text-on-surface">Signed Digilocker</span></div>
</div>
</div>
{/* Connector 6 */}
<div className="bg-surface-container-low p-space-md rounded flex flex-col gap-space-xs hover:bg-surface-container-high transition-colors">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold truncate">MCA21 Director DIN / CIN</span>
<span className="px-space-xs py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container uppercase">200 OK</span>
</div>
<div className="text-on-surface-variant font-mono text-[11px] mt-space-2xs flex flex-col gap-0.5">
<div className="flex justify-between"><span>Registry Sync:</span> <span className="text-on-surface font-semibold">MCA v3 API</span></div>
<div className="flex justify-between"><span>p95 Latency:</span> <span className="text-secondary font-semibold">92 ms</span></div>
<div className="flex justify-between"><span>Rate Limit:</span> <span className="text-on-surface">45 / 60 req/min</span></div>
<div className="flex justify-between"><span>Debarment DB:</span> <span className="text-on-surface">In-Sync (CVC list)</span></div>
</div>
</div>
</div>
</div>
{/* 2. Real-Time Webhook Event Stream & Kafka Message Consumer Ledger */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between flex-wrap gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[22px]">stream</span>
<h2 className="font-title-sm text-title-sm text-on-surface tracking-tight">Real-Time Webhook Event Stream &amp; Kafka Message Ledger</h2>
</div>
<div className="flex items-center gap-space-xs">
<input className="h-8 px-space-sm bg-surface-container-low rounded text-[12px] font-mono text-on-surface placeholder-on-surface-variant outline-none focus:bg-surface-container-high w-64 transition-colors" id="filter-table-input" placeholder="Filter by event, ref, or status..." type="text"/>
<button className="h-8 px-space-xs bg-surface-container-low hover:bg-surface-container-high rounded text-on-surface text-label-sm font-label-sm flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">tune</span> Filter
              </button>
</div>
</div>
{/* Monospaced High-Density Ledger Table */}
<div className="w-full overflow-x-auto">
<table className="w-full text-left font-mono text-[12px] whitespace-nowrap">
<thead className="bg-surface-container-low text-on-surface-variant uppercase text-[11px] tracking-wider">
<tr>
<th className="py-2.5 px-space-sm">Timestamp (UTC)</th>
<th className="py-2.5 px-space-sm">Event Type</th>
<th className="py-2.5 px-space-sm">Ingress Gateway</th>
<th className="py-2.5 px-space-sm">Tender / Ref No</th>
<th className="py-2.5 px-space-sm tabular-nums text-right">Payload Size</th>
<th className="py-2.5 px-space-sm text-center">Status</th>
<th className="py-2.5 px-space-sm text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container">
{/* Row 1 */}
<tr className="hover:bg-surface-container-low/70 transition-colors group cursor-pointer event-row" data-ref="GEM/2026/B/489201" data-type="TENDER_BID_SUBMITTED">
<td className="py-2.5 px-space-sm text-on-surface font-mono">2026-10-16T14:02:18.491Z</td>
<td className="py-2.5 px-space-sm"><span className="px-1.5 py-0.5 rounded bg-surface-container-high text-primary font-semibold">TENDER_BID_SUBMITTED</span></td>
<td className="py-2.5 px-space-sm text-on-surface-variant">gem-gateway.gov.in</td>
<td className="py-2.5 px-space-sm text-primary font-semibold">GEM/2026/B/489201</td>
<td className="py-2.5 px-space-sm tabular-nums text-right text-on-surface">48.2 KB</td>
<td className="py-2.5 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container">
                      200 DELIVERED
                    </span>
</td>
<td className="py-2.5 px-space-sm text-right">
<button className="inspect-btn text-primary hover:underline text-[11px] font-semibold" type="button">Inspect JSON</button>
</td>
</tr>
{/* Row 2 */}
<tr className="hover:bg-surface-container-low/70 transition-colors group cursor-pointer event-row" data-ref="SFMS/BG/2026/0914" data-type="SFMS_BG_CONFIRMED">
<td className="py-2.5 px-space-sm text-on-surface font-mono">2026-10-16T14:02:14.108Z</td>
<td className="py-2.5 px-space-sm"><span className="px-1.5 py-0.5 rounded bg-surface-container-high text-secondary font-semibold">SFMS_BG_CONFIRMED</span></td>
<td className="py-2.5 px-space-sm text-on-surface-variant">sfms-node-03.rbi.org.in</td>
<td className="py-2.5 px-space-sm text-primary font-semibold">PBG-RBI-9018442</td>
<td className="py-2.5 px-space-sm tabular-nums text-right text-on-surface">14.6 KB</td>
<td className="py-2.5 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container">
                      200 DELIVERED
                    </span>
</td>
<td className="py-2.5 px-space-sm text-right">
<button className="inspect-btn text-primary hover:underline text-[11px] font-semibold" type="button">Inspect JSON</button>
</td>
</tr>
{/* Row 3 */}
<tr className="hover:bg-surface-container-low/70 transition-colors group cursor-pointer event-row" data-ref="GSTN/EV/07AAACG9281" data-type="GSTN_REVOCATION_WEBHOOK">
<td className="py-2.5 px-space-sm text-on-surface font-mono">2026-10-16T14:01:59.832Z</td>
<td className="py-2.5 px-space-sm"><span className="px-1.5 py-0.5 rounded bg-tertiary-fixed text-tertiary font-semibold">GSTN_REVOCATION_WEBHOOK</span></td>
<td className="py-2.5 px-space-sm text-on-surface-variant">api.gstn.gov.in</td>
<td className="py-2.5 px-space-sm text-primary font-semibold">GSTN/07AAACG9281</td>
<td className="py-2.5 px-space-sm tabular-nums text-right text-on-surface">8.1 KB</td>
<td className="py-2.5 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-surface-container-highest text-primary">
                      202 ACCEPTED (0/3)
                    </span>
</td>
<td className="py-2.5 px-space-sm text-right">
<button className="inspect-btn text-primary hover:underline text-[11px] font-semibold" type="button">Inspect JSON</button>
</td>
</tr>
{/* Row 4 */}
<tr className="hover:bg-surface-container-low/70 transition-colors group cursor-pointer event-row" data-ref="UDYAM-MH-01-00291" data-type="UDYAM_CLASSIFICATION_MUTATION">
<td className="py-2.5 px-space-sm text-on-surface font-mono">2026-10-16T14:01:42.221Z</td>
<td className="py-2.5 px-space-sm"><span className="px-1.5 py-0.5 rounded bg-surface-container-high text-on-surface font-semibold">UDYAM_CLASSIFICATION</span></td>
<td className="py-2.5 px-space-sm text-on-surface-variant">udyam.msme.gov.in</td>
<td className="py-2.5 px-space-sm text-primary font-semibold">UDYAM-MH-01-00291</td>
<td className="py-2.5 px-space-sm tabular-nums text-right text-on-surface">6.4 KB</td>
<td className="py-2.5 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container">
                      200 DELIVERED
                    </span>
</td>
<td className="py-2.5 px-space-sm text-right">
<button className="inspect-btn text-primary hover:underline text-[11px] font-semibold" type="button">Inspect JSON</button>
</td>
</tr>
{/* Row 5 */}
<tr className="hover:bg-surface-container-low/70 transition-colors group cursor-pointer event-row" data-ref="GEM/2026/B/489110" data-type="TENDER_BID_SUBMITTED">
<td className="py-2.5 px-space-sm text-on-surface font-mono">2026-10-16T14:01:10.019Z</td>
<td className="py-2.5 px-space-sm"><span className="px-1.5 py-0.5 rounded bg-surface-container-high text-primary font-semibold">TENDER_BID_SUBMITTED</span></td>
<td className="py-2.5 px-space-sm text-on-surface-variant">gem-gateway.gov.in</td>
<td className="py-2.5 px-space-sm text-primary font-semibold">GEM/2026/B/489110</td>
<td className="py-2.5 px-space-sm tabular-nums text-right text-on-surface">52.8 KB</td>
<td className="py-2.5 px-space-sm text-center">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container">
                      200 DELIVERED
                    </span>
</td>
<td className="py-2.5 px-space-sm text-right">
<button className="inspect-btn text-primary hover:underline text-[11px] font-semibold" type="button">Inspect JSON</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* 3. Raw JSON Payload & Cryptographic Header Inspector */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between flex-wrap gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[22px]">data_object</span>
<h2 className="font-title-sm text-title-sm text-on-surface tracking-tight">Raw JSON Payload &amp; Header Cryptographic Inspector</h2>
</div>
<div className="flex items-center gap-space-sm font-mono text-[11px]">
<span className="text-on-surface-variant">Active Record:</span>
<span className="px-1.5 py-0.5 bg-surface-container-high rounded text-primary font-semibold" id="active-record-tag">GEM/2026/B/489201</span>
<button className="px-space-xs py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-highest transition-colors flex items-center gap-1 font-label-sm text-label-sm" id="btn-copy-payload" type="button">
<span className="material-symbols-outlined text-[14px]">content_copy</span> Copy Raw
              </button>
</div>
</div>
{/* Diagnostic Metadata Badge Strip */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-xs font-mono text-[11px] bg-surface-container-low p-space-sm rounded">
<div>
<span className="text-on-surface-variant">mTLS Fingerprint:</span>
<div className="font-semibold text-on-surface truncate">SHA256:7B:9A:88:E2:01:DF:8C:55</div>
</div>
<div>
<span className="text-on-surface-variant">HMAC Verification:</span>
<div className="font-semibold text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">check_circle</span> VALID (HSM Verified)
              </div>
</div>
<div>
<span className="text-on-surface-variant">X-Sovereign-Trace-ID:</span>
<div className="font-semibold text-primary truncate">nic-trace-del-08-98214-gem</div>
</div>
</div>
{/* Code View Area */}
<div className="w-full bg-inverse-surface rounded p-space-md font-mono text-[12px] leading-relaxed text-inverse-on-surface overflow-x-auto shadow-inner">
<pre className="whitespace-pre"><code><span className="text-[#90a8ff]">{"{"}</span>
  <span className="text-[#b6c4ff]">"schema_version"</span>: <span className="text-[#ffddb8]">"v4.2.0-in-gov"</span>,
  <span className="text-[#b6c4ff]">"event_id"</span>: <span className="text-[#ffddb8]">"evt_90918c5e_gem_unseal"</span>,
  <span className="text-[#b6c4ff]">"event_type"</span>: <span className="text-[#ffddb8]">"TENDER_BID_SUBMITTED"</span>,
  <span className="text-[#b6c4ff]">"timestamp_utc"</span>: <span className="text-[#ffddb8]">"2026-10-16T14:02:18.491Z"</span>,
  <span className="text-[#b6c4ff]">"jurisdiction"</span>: {"{"}
    <span className="text-[#b6c4ff]">"ministry"</span>: <span className="text-[#ffddb8]">"Ministry of Finance"</span>,
    <span className="text-[#b6c4ff]">"procurement_portal"</span>: <span className="text-[#ffddb8]">"GeM Core Ingestion Gateway"</span>,
    <span className="text-[#b6c4ff]">"tender_ref"</span>: <span className="text-[#ffddb8]">"GEM/2026/B/489201"</span>
  {"}"},
  <span className="text-[#b6c4ff]">"bidder_payload_manifest"</span>: {"{"}
    <span className="text-[#b6c4ff]">"bidder_entity_gstin"</span>: <span className="text-[#ffddb8]">"07AAACB2210G1Z4"</span>,
    <span className="text-[#b6c4ff]">"udyam_registration_no"</span>: <span className="text-[#ffddb8]">"UDYAM-DL-03-0019284"</span>,
    <span className="text-[#b6c4ff]">"sfms_pbg_guarantee_ref"</span>: <span className="text-[#ffddb8]">"BG-SFMS-AXIS-2026-9901"</span>,
    <span className="text-[#b6c4ff]">"technical_evaluation_clauses_met"</span>: <span className="text-[#6cf8bb]">true</span>,
    <span className="text-[#b6c4ff]">"crytographic_hash_sha512"</span>: <span className="text-[#ffddb8]">"09e3a890dfcb...6811ba78a"</span>
  {"}"},
  <span className="text-[#b6c4ff]">"security_envelope"</span>: {"{"}
    <span className="text-[#b6c4ff]">"hsm_key_identifier"</span>: <span className="text-[#ffddb8]">"safenet_luna_hsm_key_sovereign_01"</span>,
    <span className="text-[#b6c4ff]">"signed_by_cca_root"</span>: <span className="text-[#6cf8bb]">true</span>,
    <span className="text-[#b6c4ff]">"kafka_delivery_offset"</span>: <span className="text-[#ffddb8]">4910284</span>
  {"}"}
<span className="text-[#90a8ff]">{"}"}</span></code></pre>
</div>
</div>
</div>
{/* RIGHT COLUMN (35% / lg:col-span-4) */}
<div className="lg:col-span-4 flex flex-col gap-space-lg">
{/* 1. Circuit Breaker & Rate Limiting Threshold Controls */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[22px]">tune</span>
<h2 className="font-title-sm text-title-sm text-on-surface tracking-tight">Circuit Breaker &amp; In-Memory Policy</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            Automated fail-safe parameters applied on NIC/MeitY API mesh. Breakers trip automatically upon anomaly spikes.
          </p>
<div className="flex flex-col gap-space-xs">
<div className="bg-surface-container-low p-space-sm rounded flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Failure Trip Threshold</span>
<span className="font-mono text-[12px] font-bold text-primary">5 consecutive (5xx)</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Reset Timeout Window</span>
<span className="font-mono text-[12px] font-bold text-primary">30 seconds</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Half-Open Trial Volume</span>
<span className="font-mono text-[12px] font-bold text-primary">3 probes</span>
</div>
<div className="bg-surface-container-low p-space-sm rounded flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Redis Key Eviction Policy</span>
<span className="font-mono text-[12px] font-bold text-on-surface">allkeys-lru</span>
</div>
</div>
{/* Redis Memory Bar Gauge */}
<div className="flex flex-col gap-space-2xs mt-space-xs">
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Redis Cluster Memory</span>
<span className="text-on-surface font-semibold tabular-nums">3.4 GB / 16.0 GB (21.2%)</span>
</div>
<div className="w-full h-2 bg-surface-container-high rounded overflow-hidden">
<div className="h-full bg-secondary" style={{width: "21.2%"}}></div>
</div>
<span className="text-[10px] font-mono text-on-surface-variant">Operating well below saturation limit (&lt;80%)</span>
</div>
</div>
{/* 2. Sovereign Cryptographic HSM & Security Diagnostics */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[22px]">security</span>
<h2 className="font-title-sm text-title-sm text-on-surface tracking-tight">Sovereign HSM &amp; Cryptography</h2>
</div>
<div className="flex flex-col gap-space-sm">
{/* HSM Module Status */}
<div className="p-space-sm bg-surface-container-low rounded flex flex-col gap-space-2xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">SafeNet Luna HSM Hardware</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-secondary-container text-on-secondary-container">SYNCHRONIZED</span>
</div>
<span className="font-mono text-[11px] text-on-surface-variant">FIPS 140-3 Level 3 Hardware Module</span>
<span className="font-mono text-[11px] text-on-surface">Partition: <span className="font-semibold text-primary">/sec-vault/gem-sign-p1</span></span>
</div>
{/* Jan Parichay Token */}
<div className="p-space-sm bg-surface-container-low rounded flex flex-col gap-space-2xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Jan Parichay OAuth 2.0 Token</span>
<span className="font-mono text-[11px] text-secondary font-bold">38m Remaining</span>
</div>
<span className="font-mono text-[11px] text-on-surface-variant">Scope: read:gem, write:tender, audit:epfo</span>
<span className="font-mono text-[11px] text-secondary">Auto-refresh daemon: Active &amp; Healthy</span>
</div>
{/* Mutual TLS Root CA */}
<div className="p-space-sm bg-surface-container-low rounded flex flex-col gap-space-2xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Mutual TLS (mTLS) Root CA</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-surface-container-high text-primary">VALID</span>
</div>
<span className="font-mono text-[11px] text-on-surface">India PKI CCA Root CA 2022</span>
<span className="font-mono text-[11px] text-on-surface-variant">Validity: Oct 2022 – Oct 2032 (3,280 days)</span>
</div>
</div>
</div>
{/* 3. Emergency Traffic Controls (Institutional Safeguards) */}
<div className="bg-surface-container-lowest rounded-lg shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center gap-space-xs text-error">
<span className="material-symbols-outlined text-[22px]">warning</span>
<h2 className="font-title-sm text-title-sm text-on-surface tracking-tight">Emergency Traffic Safeguards</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
            DevOps operational switches for failover during national maintenance windows or statutory tender freeze periods.
          </p>
{/* Toggle Supervised Dry-Run */}
<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded">
<div className="flex flex-col pr-space-sm">
<span className="font-label-md text-label-md text-on-surface font-semibold">Dry-Run / Mock Gateway Fallback</span>
<span className="text-[11px] text-on-surface-variant">Routes to sandbox responses for isolated node drills</span>
</div>
<label className="relative inline-flex items-center cursor-pointer shrink-0">
<input className="sr-only peer" id="toggle-dryrun" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
</label>
</div>
{/* Action Button: Graceful Drain */}
<button className="w-full py-2.5 px-space-md bg-error-container text-on-error-container hover:bg-error hover:text-on-error rounded font-label-md text-label-md transition-colors flex items-center justify-center gap-space-xs" id="btn-drain" type="button">
<span className="material-symbols-outlined text-[18px]">power_settings_new</span>
            Trigger Graceful Connection Drain (Rolling Upgrade)
          </button>
<span className="text-[10px] text-on-surface-variant text-center font-mono">Requires Level 4 Dual-Officer Auth Signature</span>
</div>
</div>
</div>
{/* Sovereign Infrastructure Institutional Footer */}
<div className="w-full bg-surface-container-low rounded-lg p-space-md mt-space-md flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant font-mono text-[11px]">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="flex items-center gap-1 text-on-surface font-semibold">
<span className="material-symbols-outlined text-[14px] text-secondary">verified_user</span>
          CERT-In Cyber Security Guidelines 2022
        </span>
<span>•</span>
<span>OpenAPI Specification v3.1</span>
<span>•</span>
<span>MeitY e-Gov Interoperability Framework (e-GIF)</span>
</div>
<div className="flex items-center gap-space-sm shrink-0">
<span>Sovereign Cloud:</span>
<span className="text-on-surface font-semibold">MeghRaj Delhi Node 08 (meghraj-del-node-k8s-08)</span>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
