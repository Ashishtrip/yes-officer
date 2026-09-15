"use client";
import React from "react";
import Link from "next/link";

export default function Page() {
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
{/* Top Statutory Notification Banner */}
<div className="w-full bg-primary text-on-primary px-layout-gutter py-2 flex flex-wrap items-center justify-between gap-space-sm shadow-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-secondary-container text-[18px]">verified_user</span>
<span className="font-label-md text-label-md tracking-wider uppercase text-secondary-container">NIC / MeitY MeghRaj Node 04 Certified</span>
<span className="text-outline-variant font-body-sm">|</span>
<span className="font-body-sm text-body-sm text-surface-container-high truncate">FIPS 140-3 HSM Root Key Active • STQC Class-3 DSC Verification Gateway • GFR 2017 Rule 144 Compliant</span>
</div>
<div className="flex items-center gap-space-md">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-fixed-dim opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-container"></span>
</span>
<span className="font-label-sm text-label-sm text-secondary-container uppercase">OCR Daemon: Live &amp; Accelerated (A100-80GB)</span>
</div>
</div>
{/* Header & Context Navigation Panel */}
<div className="w-full bg-surface-container-lowest px-layout-gutter py-space-md shadow-sm">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
{/* Breadcrumb & Title */}
<div className="flex flex-col gap-1">
<div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
<Link className="hover:text-primary transition-colors" href="#">Portal Desk</Link>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<Link className="hover:text-primary transition-colors" href="#">Tenders &amp; Bids</Link>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="font-mono text-on-surface font-semibold bg-surface-container px-1.5 py-0.5 rounded">GEM/2026/B/489201</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-medium">Ingest Bid Submissions</span>
</div>
<div className="flex flex-wrap items-center gap-space-md mt-1">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Bid Ingestion &amp; Statutory Document Processing Pipeline</h1>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Tender Envelope: Two-Cover EPC (Supply &amp; Commissioning)
          </span>
</div>
</div>
{/* Action Cluster */}
<div className="flex flex-wrap items-center gap-space-sm">
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">download</span>
          GeM Batch Template (.CSV/JSON)
        </button>
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed">sync</span>
          Sync GeM-SPV API (24 Bids Queued)
        </button>
<button aria-label="Ingestion Settings" className="p-2 rounded bg-surface-container-low hover:bg-surface-container text-on-surface-variant transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">tune</span>
</button>
</div>
</div>
{/* Mode Selector Bar */}
<div className="flex items-center gap-space-sm mt-space-md pt-space-xs overflow-x-auto">
<button className="flex items-center gap-2 px-4 py-2.5 rounded font-title-sm text-title-sm bg-primary text-on-primary shadow-sm whitespace-nowrap">
<span className="material-symbols-outlined text-[18px]">cloud_sync</span>
        GeM Automated Sync
        <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-bold">24 In Queue</span>
</button>
<button className="flex items-center gap-2 px-4 py-2.5 rounded font-title-sm text-title-sm bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors">
<span className="material-symbols-outlined text-[18px]">upload_file</span>
        Direct Multi-Bidder Batch Upload (.ZIP / Bulk PDF)
        <span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm">High-Throughput</span>
</button>
<button className="flex items-center gap-2 px-4 py-2.5 rounded font-title-sm text-title-sm bg-surface-container-low hover:bg-surface-container text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-colors">
<span className="material-symbols-outlined text-[18px]">person_add</span>
        Single Bidder Manual Dossier Ingestion
      </button>
</div>
</div>
{/* Main Grid Workspace */}
<div className="px-layout-gutter py-space-lg grid grid-cols-1 xl:grid-cols-12 gap-space-lg">
{/* Left 8 Columns: Ingestion Dropzone & Real-Time Queue */}
<div className="xl:col-span-8 flex flex-col gap-space-lg">
{/* Drag & Drop Zone Box */}
<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative overflow-hidden">
<div className="flex flex-col md:flex-row items-center justify-between gap-space-md mb-space-base">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Bulk Dossier Ingestion Gateway</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Accepts structured technical bid envelopes, audited financial statements, and digital certificate containers.</p>
</div>
<span className="inline-flex items-center gap-1 text-label-sm font-label-sm text-secondary bg-secondary-container/30 px-2.5 py-1 rounded">
<span className="material-symbols-outlined text-[16px]">lock_clock</span>
            256-Bit TLS In-Transit Encryption
          </span>
</div>
{/* Institutional Dashed Drop Target */}
<div className="bg-surface-container-low/60 rounded-xl p-space-xl flex flex-col items-center justify-center text-center group hover:bg-surface-container-low transition-all cursor-pointer">
<div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform shadow-inner mb-space-md">
<span className="material-symbols-outlined text-[36px]">cloud_upload</span>
</div>
<h3 className="font-title-sm text-title-sm text-on-surface">Drag &amp; Drop Bidder Packages or Complete Tender Envelopes</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-lg mt-1 mb-space-md">
            Compatible formats: <strong className="text-on-surface font-medium">PDF (Encrypted/Unencrypted), ZIP (GeM Vendor Export), XBRL Financials, PKCS#7 (.p7b/.p7s)</strong> up to 250MB per submission.
          </p>
<div className="flex flex-wrap items-center justify-center gap-space-md">
<button className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md rounded shadow-md transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">folder_open</span>
              Browse Local Bidder Archives
            </button>
<button className="inline-flex items-center gap-2 px-4 py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded transition-all" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">cloud_done</span>
              Import from NIC Secure MinIO S3 Vault
            </button>
</div>
</div>
{/* Checkbox / Toggle Options Grid */}
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md mt-space-md pt-space-md bg-surface-container-low/30 p-3 rounded-lg">
<label className="flex items-start gap-2.5 cursor-pointer">
<input defaultChecked className="mt-1 w-4 h-4 text-primary rounded bg-surface border-outline-variant focus:ring-primary" type="checkbox"/>
<div>
<span className="font-label-md text-label-md text-on-surface block">STQC Class-3 DSC Verification</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">CRL/OCSP real-time validation</span>
</div>
</label>
<label className="flex items-start gap-2.5 cursor-pointer">
<input defaultChecked className="mt-1 w-4 h-4 text-primary rounded bg-surface border-outline-variant focus:ring-primary" type="checkbox"/>
<div>
<span className="font-label-md text-label-md text-on-surface block">Compute SHA-256 Checksums</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Immutable legal audit registry stamp</span>
</div>
</label>
<label className="flex items-start gap-2.5 cursor-pointer">
<input defaultChecked className="mt-1 w-4 h-4 text-primary rounded bg-surface border-outline-variant focus:ring-primary" type="checkbox"/>
<div>
<span className="font-label-md text-label-md text-on-surface block">LayoutLMv3 NER Parser</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Autonomous field extraction</span>
</div>
</label>
</div>
</div>
{/* Real-Time Processing Queue Table & Cards */}
<div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="p-space-base bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">view_timeline</span>
<div>
<h2 className="font-title-sm text-title-sm text-on-surface">Active Ingestion &amp; Extraction Queue</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Live telemetry across AI classification, forensic tamper audit, and NER entity linking</p>
</div>
</div>
<div className="flex items-center gap-2">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase bg-surface-container px-2 py-1 rounded">Batch Session: #GST-INGEST-489201-B</span>
<button className="p-1 text-on-surface-variant hover:text-primary transition-colors" title="Refresh Telemetry" type="button">
<span className="material-symbols-outlined text-[18px]">refresh</span>
</button>
</div>
</div>
{/* Bid Items List */}
<div className="divide-y divide-surface-container">
{/* Bidder 1: Processing OCR/NER 92% */}
<div className="p-space-base hover:bg-surface-container-low/40 transition-colors flex flex-col gap-space-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded bg-primary-fixed/60 flex items-center justify-center text-primary font-bold font-mono text-sm shrink-0">
                  01
                </div>
<div>
<div className="flex items-center gap-space-sm">
<span className="font-title-sm text-title-sm text-on-surface font-semibold">ABC Industries Ltd.</span>
<span className="font-mono text-label-sm text-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">GEM-BID-88912</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-sm font-label-sm bg-surface-container-high text-primary">
                      Class-I MII (62.4%)
                    </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-sm font-label-sm bg-secondary-container/40 text-on-secondary-container">
                      Medium Enterprise
                    </span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm mt-1">
<span>Envelope: Technical + Financial (2-Cover)</span>
<span>•</span>
<span>6/6 Files Staged (18.4 MB)</span>
<span>•</span>
<span className="font-mono text-label-sm text-label-sm">SHA: e3b0c44298fc...8b5d</span>
</div>
</div>
</div>
{/* Status Badge & Micro Actions */}
<div className="flex items-center gap-space-sm self-end md:self-auto">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  LayoutLMv3 NER (92%)
                </span>
<button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Inspect Raw OCR tokens">
<span className="material-symbols-outlined text-[18px]">find_in_page</span>
</button>
<button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Field Extraction Map">
<span className="material-symbols-outlined text-[18px]">data_object</span>
</button>
</div>
</div>
{/* Ingestion Progress Bar */}
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden mt-1">
<div className="bg-primary h-2 rounded-full transition-all duration-500" style={{"width": "92%"}}></div>
</div>
{/* Documents Pills Identified */}
<div className="flex flex-wrap items-center gap-1.5 mt-1">
<span className="font-label-sm text-label-sm text-on-surface-variant mr-1">Parsed Artifacts:</span>
<span className="px-2 py-0.5 bg-surface-container-lowest text-on-surface text-label-sm font-label-sm rounded shadow-sm inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-secondary">check_circle</span> ITR-6 (FY 2024-25)
              </span>
<span className="px-2 py-0.5 bg-surface-container-lowest text-on-surface text-label-sm font-label-sm rounded shadow-sm inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-secondary">check_circle</span> GST-3B (Jan 2026)
              </span>
<span className="px-2 py-0.5 bg-surface-container-lowest text-on-surface text-label-sm font-label-sm rounded shadow-sm inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-secondary">check_circle</span> Udyam Reg Cert
              </span>
<span className="px-2 py-0.5 bg-surface-container-lowest text-on-surface text-label-sm font-label-sm rounded shadow-sm inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-secondary">check_circle</span> CA Net Worth (UDIN Match)
              </span>
<span className="px-2 py-0.5 bg-surface-container-lowest text-on-surface text-label-sm font-label-sm rounded shadow-sm inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-secondary">check_circle</span> GFR 144 Self-Decl.
              </span>
<span className="px-2 py-0.5 bg-surface-container-lowest text-on-surface text-label-sm font-label-sm rounded shadow-sm inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[13px] text-secondary">check_circle</span> PKCS#7 Validated
              </span>
</div>
</div>
{/* Bidder 2: Completed 100% */}
<div className="p-space-base hover:bg-surface-container-low/40 transition-colors flex flex-col gap-space-sm bg-surface-container-lowest">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded bg-secondary-container/40 flex items-center justify-center text-on-secondary-container font-bold font-mono text-sm shrink-0">
                  02
                </div>
<div>
<div className="flex items-center gap-space-sm">
<span className="font-title-sm text-title-sm text-on-surface font-semibold">Apex Heavy Electricals Pvt Ltd</span>
<span className="font-mono text-label-sm text-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">GEM-BID-88914</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-sm font-label-sm bg-surface-container-high text-primary">
                      OEM / Direct Manufacturer
                    </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-sm font-label-sm bg-secondary-container text-on-secondary-container">
                      Clean Audit
                    </span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm mt-1">
<span>7/7 Verified Statutory Filings (34.2 MB)</span>
<span>•</span>
<span className="text-secondary font-medium">0 Discrepancies Detected</span>
<span>•</span>
<span className="font-mono text-label-sm text-label-sm">UDIN: 24049812BGHY9811</span>
</div>
</div>
</div>
{/* Status Badge */}
<div className="flex items-center gap-space-sm self-end md:self-auto">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm uppercase font-semibold">
<span className="material-symbols-outlined text-[15px] text-secondary">verified</span>
                  Completed • Ready for Evaluation
                </span>
<button className="px-3 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-all">
                  Open Dossier
                </button>
</div>
</div>
{/* Ingestion Progress Bar (Completed) */}
<div className="w-full bg-surface-container rounded-full h-2 overflow-hidden mt-1">
<div className="bg-secondary h-2 rounded-full" style={{"width": "100%"}}></div>
</div>
<div className="flex flex-wrap items-center justify-between text-body-sm font-body-sm text-on-surface-variant mt-1">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-secondary">security</span>
                STQC Class-3 Signature: Validated via NSDL Sub-CA • Valid till 14-Oct-2027
              </span>
<span className="text-label-sm font-label-sm text-primary font-mono font-semibold">Processed in 2.8s</span>
</div>
</div>
{/* Bidder 3: Flagged Forensics Alert */}
<div className="p-space-base bg-error-container/20 hover:bg-error-container/30 transition-colors flex flex-col gap-space-sm">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded bg-error/10 flex items-center justify-center text-error font-bold font-mono text-sm shrink-0">
                  03
                </div>
<div>
<div className="flex items-center gap-space-sm">
<span className="font-title-sm text-title-sm text-on-surface font-semibold">Global Infra Dynamics Ltd</span>
<span className="font-mono text-label-sm text-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">GEM-BID-88918</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-sm font-label-sm bg-error-container text-on-error-container font-semibold">
                      Forensic Discrepancy
                    </span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm mt-1">
<span className="text-error font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">warning</span>
                      2 Tamper Inconsistencies &amp; 1 Statutory Defect
                    </span>
<span>•</span>
<span>Submission Time: 14:22 IST Today</span>
</div>
</div>
</div>
{/* Action Flag */}
<div className="flex items-center gap-space-sm self-end md:self-auto">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-error-container text-on-error-container font-label-sm text-label-sm uppercase font-bold">
<span className="material-symbols-outlined text-[15px] text-error">gpp_bad</span>
                  Flagged: Forensics Alert
                </span>
<button className="px-3 py-1 rounded bg-error text-on-error font-label-md text-label-md hover:bg-on-error-container transition-all">
                  Inspect Tamper Report
                </button>
</div>
</div>
{/* Warning Notice Box */}
<div className="mt-1 p-space-sm bg-surface-container-lowest rounded flex flex-col gap-1 shadow-sm">
<div className="flex items-start gap-2 text-error font-body-sm text-body-sm">
<span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5">content_copy</span>
<div>
<strong className="font-semibold">Compression Anomaly &amp; Font Bounding Box Mismatch:</strong>
                  Page 3 of <em>CA_Networth_Certificate_2025.pdf</em> contains clone-stamped raster layer overlapping ICAI Seal. The UDIN string <code className="bg-surface-container px-1 py-0.5 font-mono text-on-surface">23019842AAAA01</code> does not reconcile with ICAI Registry API.
                </div>
</div>
<div className="flex items-start gap-2 text-on-tertiary-container font-body-sm text-body-sm mt-0.5">
<span className="material-symbols-outlined text-[18px] shrink-0 mt-0.5">flag</span>
<div>
<strong className="font-semibold">Statutory Non-Compliance:</strong> Land-Border Sharing Compliance Declaration under GFR 2017 Rule 144(xi) is missing from envelope archive.
                </div>
</div>
</div>
</div>
{/* Bidder 4: Queued in Pipeline */}
<div className="p-space-base hover:bg-surface-container-low/40 transition-colors flex flex-col gap-space-sm bg-surface-container-lowest">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-on-surface-variant font-bold font-mono text-sm shrink-0">
                  04
                </div>
<div>
<div className="flex items-center gap-space-sm">
<span className="font-title-sm text-title-sm text-on-surface font-semibold">Sahara Engineering Works</span>
<span className="font-mono text-label-sm text-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">GEM-BID-88921</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-sm font-label-sm bg-surface-container text-on-surface-variant">
                      Micro Enterprise (SC/ST Owned)
                    </span>
</div>
<div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm mt-1">
<span>Envelope: Single Package (Technical + Commercial)</span>
<span>•</span>
<span>5 Documents Pending OCR (8.1 MB)</span>
</div>
</div>
</div>
{/* Queued status */}
<div className="flex items-center gap-space-sm self-end md:self-auto">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase">
<span className="material-symbols-outlined text-[15px] animate-spin">hourglass_empty</span>
                  Queued in Pipeline (Position #2)
                </span>
<button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Boost Priority">
<span className="material-symbols-outlined text-[18px]">priority_high</span>
</button>
</div>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden mt-1">
<div className="bg-outline-variant h-1.5 rounded-full" style={{"width": "15%"}}></div>
</div>
</div>
</div>
{/* Table Footer / Pagination */}
<div className="p-space-sm bg-surface-container-low/50 flex flex-col sm:flex-row items-center justify-between text-body-sm font-body-sm text-on-surface-variant px-space-base">
<div>Showing 4 of 24 bids staged for Tender GEM/2026/B/489201</div>
<div className="flex items-center gap-1">
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high text-label-sm font-label-sm disabled:opacity-50" disabled={true}>Previous</button>
<span className="px-2 font-mono text-label-sm text-label-sm text-on-surface font-semibold">1 of 6</span>
<button className="px-2.5 py-1 rounded bg-surface-container text-on-surface hover:bg-surface-container-high text-label-sm font-label-sm">Next</button>
</div>
</div>
</div>
</div>
{/* Right 4 Columns: Pipeline Telemetry & Document Intelligence Sidebar */}
<div className="xl:col-span-4 flex flex-col gap-space-lg">
{/* Worker Nodes & Hardware Telemetry */}
<div className="bg-surface-container-lowest rounded-xl p-space-base shadow-sm">
<div className="flex items-center justify-between pb-space-sm mb-space-sm bg-surface-container-low/40 -mx-base -mt-base p-space-base rounded-t-xl">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">memory</span>
<h3 className="font-title-sm text-title-sm text-on-surface">MeitY Cloud Inference Mesh</h3>
</div>
<span className="font-label-sm text-label-sm text-secondary font-mono font-semibold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            CLUSTER STABLE
          </span>
</div>
<div className="space-y-3">
<div>
<div className="flex justify-between text-label-md font-label-md text-on-surface mb-1">
<span>NVIDIA A100 Tensor Core (GPU Node 4)</span>
<span className="font-mono text-primary font-bold">78% VRAM</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-primary h-1.5 rounded-full" style={{"width": "78%"}}></div>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant mt-0.5 block">Model: LayoutLMv3-Gov-Procure-XL (1.2B Params)</span>
</div>
<div>
<div className="flex justify-between text-label-md font-label-md text-on-surface mb-1">
<span>OCR Throughput Rate</span>
<span className="font-mono text-secondary font-bold">142 pgs/sec</span>
</div>
<div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
<div className="bg-secondary h-1.5 rounded-full" style={{"width": "86%"}}></div>
</div>
<span className="text-label-sm font-label-sm text-on-surface-variant mt-0.5 block">Fallback Engine: Tesseract 5.3 Gov-Indic (Idle)</span>
</div>
</div>
{/* Latency Metrics Banner */}
<div className="mt-space-md p-space-sm rounded bg-surface-container-low flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">speed</span>
<div>
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">Average Latency</span>
<span className="font-title-sm text-title-sm font-bold text-on-surface">3.4s</span>
<span className="text-body-sm font-body-sm text-on-surface-variant">/ 50-pg technical bid</span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">Queue Wait Time</span>
<span className="font-title-sm text-title-sm font-bold text-secondary">0.9s</span>
</div>
</div>
</div>
{/* Ingestion Overview Donut / Breakdown Card */}
<div className="bg-surface-container-lowest rounded-xl p-space-base shadow-sm">
<h3 className="font-title-sm text-title-sm text-on-surface mb-space-sm flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">analytics</span>
          Tender Dossier Ingestion Breakdown
        </h3>
{/* Mini Visual Chart Area */}
<div className="flex items-center gap-space-md my-space-md">
<div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
{/* Inline Minimal SVG Donut Chart (Sub 2KB) */}
<svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
<circle cx="18" cy="18" fill="none" r="15.915" stroke="#eaedff" strokeWidth="4.5"></circle>
{/* Completed 18 / 24 = 75% (dasharray 75, 25) */}
<circle cx="18" cy="18" fill="none" r="15.915" stroke="#006c49" strokeDasharray="75 25" stroke-dashoffset="0" strokeWidth="4.5"></circle>
{/* Flagged 4 / 24 = 16.6% */}
<circle cx="18" cy="18" fill="none" r="15.915" stroke="#ba1a1a" strokeDasharray="16.6 83.4" stroke-dashoffset="-75" strokeWidth="4.5"></circle>
{/* In Processing 2 / 24 = 8.3% */}
<circle cx="18" cy="18" fill="none" r="15.915" stroke="#00236f" strokeDasharray="8.4 91.6" stroke-dashoffset="-91.6" strokeWidth="4.5"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="font-headline-md text-headline-md font-bold text-on-surface leading-none">24</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Total Bids</span>
</div>
</div>
<div className="flex flex-col gap-2 w-full text-label-md font-label-md">
<div className="flex items-center justify-between">
<span className="flex items-center gap-1.5 text-on-surface">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span> Parsed Successfully
              </span>
<span className="font-mono font-bold text-on-surface">18</span>
</div>
<div className="flex items-center justify-between">
<span className="flex items-center gap-1.5 text-on-surface">
<span className="w-2.5 h-2.5 rounded-full bg-error"></span> Flagged / Forensic Hold
              </span>
<span className="font-mono font-bold text-error">4</span>
</div>
<div className="flex items-center justify-between">
<span className="flex items-center gap-1.5 text-on-surface">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span> Queued / Processing
              </span>
<span className="font-mono font-bold text-primary">2</span>
</div>
</div>
</div>
<div className="pt-space-sm bg-surface-container-low/40 p-space-sm rounded">
<div className="flex justify-between text-label-sm font-label-sm text-on-surface-variant">
<span>Model Ingestion Accuracy</span>
<span className="text-secondary font-bold font-mono">99.1% F1-Score</span>
</div>
<p className="text-body-sm font-body-sm text-on-surface-variant mt-1">
            Pre-trained on 45,000+ Indian Public Procurement datasets covering Udyam, Form 16A, GST REG-06, and MCA21 disclosures.
          </p>
</div>
</div>
{/* Forensics & Fraud Intelligence Panel */}
<div className="bg-surface-container-lowest rounded-xl p-space-base shadow-sm">
<h3 className="font-title-sm text-title-sm text-on-surface mb-space-sm flex items-center gap-2">
<span className="material-symbols-outlined text-tertiary-container text-[20px]">security</span>
          Forensic &amp; Document Tamper Engine
        </h3>
<div className="space-y-space-sm text-body-sm font-body-sm">
<div className="flex items-start gap-2.5 p-2 rounded bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">search_check</span>
<div>
<span className="font-label-md font-label-md text-on-surface block">Font Vector Hash Analysis</span>
<span className="text-on-surface-variant">Scans embedded font glyph tables to identify post-export modified numerical fields on balance sheets.</span>
</div>
</div>
<div className="flex items-start gap-2.5 p-2 rounded bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">fingerprint</span>
<div>
<span className="font-label-md font-label-md text-on-surface block">EXIF &amp; Metadata Chronology</span>
<span className="text-on-surface-variant">Verifies PDF creation software signatures against declared notarization timestamps.</span>
</div>
</div>
<div className="flex items-start gap-2.5 p-2 rounded bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">rule</span>
<div>
<span className="font-label-md font-label-md text-on-surface block">ICAI UDIN Direct Bridge</span>
<span className="text-on-surface-variant">Automated validation of 18-digit Unique Document Identification Numbers on CA Turnover &amp; Net Worth certificates.</span>
</div>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-label-sm font-label-sm text-on-surface-variant">
<span>Tender Security Grade: <strong className="text-on-surface font-semibold">MoF Mandatory Strict</strong></span>
<Link className="text-primary hover:underline font-semibold" href="#">Rules Config</Link>
</div>
</div>
</div>
</div>
{/* Statutory Sign-off & Batch Action Bar (Sticky Footer) */}
<div className="sticky bottom-0 z-40 w-full bg-surface-container-lowest py-space-sm px-layout-gutter shadow-xl">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
{/* Statutory Disclaimer */}
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[24px]">gavel</span>
<div className="text-body-sm font-body-sm text-on-surface-variant">
<span className="font-semibold text-on-surface">Statutory Compliance Affirmation:</span>
          Document ingestion complies with General Financial Rules (GFR) 2017 Rule 144, Public Procurement (Preference to Make in India) Order 2017, and IT Act Section 65B evidence standards.
        </div>
</div>
{/* Primary Batch Action Buttons */}
<div className="flex flex-wrap items-center gap-space-sm shrink-0">
<button className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
          Export Ingestion Summary (PDF)
        </button>
<button className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">verified</span>
          Cross-Registry Validation (24 Bids)
        </button>
<button className="inline-flex items-center gap-2 px-5 py-2 rounded bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-md transition-all" type="button">
<span>Proceed to Compliance Verification</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>
</div>
</div>
</div></main>
    </div>
  );
}
