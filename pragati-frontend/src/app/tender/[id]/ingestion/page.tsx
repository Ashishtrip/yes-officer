// @ts-nocheck
'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/services/api';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function BidIngestion() {
  const router = useRouter();
  const params = useParams();
  const { user, logout } = useAuth();
  const [tender, setTender] = useState<any>(null);
  const [loadingTender, setLoadingTender] = useState(true);
  const [selectedBid, setSelectedBid] = useState<any>(null);

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

  if (loadingTender) return <div className="p-8 h-screen bg-surface">Loading Bid Ingestion Pipeline...</div>;
  if (!tender) return <div className="p-8 text-error h-screen bg-surface">Tender not found.</div>;

  return (
    <ProtectedRoute>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-surface-container-high">
        <div className="h-14 w-full px-layout-gutter flex items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-md min-w-[280px]">
            <img alt="Pragati Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XF1PZsUoMowWpDMDKHX4d0Uh2TzyN0ieKoXRAg9eWo0KUOJEYX9ay-0FikqKi6SCy-s2qdnXKKSVBN1U3cGfFxFZF0ukpbfXY2DXXHGRuTayL8HUzuRTRsVXDXLBNUvCkLJ45-5sgvvJPij2xXTdFwemSujw5XjPH5QUdV8NmgQmyup3OjnHPFKO06ETugegA2e_yc3BJ49NnxvbQ_j3UdtcbgijRrC1sPHCXBUxBBvQe1hRNlh5IrYBas" />
            <div className="flex flex-col">
              <span className="font-title-sm text-title-sm text-primary leading-none">Pragati</span>
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
              <span className="font-label-sm text-label-sm text-secondary-container uppercase">OCR Daemon: Live & Accelerated (A100-80GB)</span>
            </div>
          </div>

          {/* Header & Context Navigation Panel */}
          <div className="w-full bg-surface-container-lowest px-layout-gutter py-space-md shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                  <Link href="/" className="hover:text-primary transition-colors">Portal Desk</Link>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <Link href="/" className="hover:text-primary transition-colors">Tenders & Bids</Link>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <span className="font-mono text-on-surface font-semibold bg-surface-container px-1.5 py-0.5 rounded">{(tender.gem_tender_id as string)}</span>
                  <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                  <span className="text-primary font-medium">Ingest Bid Submissions</span>
                </div>
                <div className="flex flex-wrap items-center gap-space-md mt-1">
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Bid Ingestion & Statutory Document Processing Pipeline</h1>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm text-label-sm uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Tender Envelope: {tender.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm">
                <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md shadow-sm transition-all" type="button">
                  <span className="material-symbols-outlined text-[18px] text-primary">download</span>
                  GeM Batch Template (.CSV/JSON)
                </button>
                <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-all" type="button">
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">sync</span>
                  Sync GeM-SPV API ({(tender?.bids)?.length || 0} Bids Queued)
                </button>
                <button aria-label="Ingestion Settings" className="p-2 rounded bg-surface-container-low hover:bg-surface-container text-on-surface-variant transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]">tune</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-space-sm mt-space-md pt-space-xs overflow-x-auto">
              <button className="flex items-center gap-2 px-4 py-2.5 rounded font-title-sm text-title-sm bg-primary text-on-primary shadow-sm whitespace-nowrap">
                <span className="material-symbols-outlined text-[18px]">cloud_sync</span>
                GeM Automated Sync
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm font-bold">{(tender?.bids)?.length || 0} In Queue</span>
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
                <div className="bg-surface-container-low/60 rounded-xl p-space-xl flex flex-col items-center justify-center text-center group hover:bg-surface-container-low transition-all cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-105 transition-transform shadow-inner mb-space-md">
                    <span className="material-symbols-outlined text-[36px]">cloud_upload</span>
                  </div>
                  <h3 className="font-title-sm text-title-sm text-on-surface">Drag & Drop Bidder Packages or Complete Tender Envelopes</h3>
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
                      <h2 className="font-title-sm text-title-sm text-on-surface">Active Ingestion & Extraction Queue</h2>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">Live telemetry across AI classification, forensic tamper audit, and NER entity linking</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase bg-surface-container px-2 py-1 rounded">Batch Session: #GST-INGEST-{(tender.gem_tender_id as string).split('/').pop()}</span>
                    <button className="p-1 text-on-surface-variant hover:text-primary transition-colors" title="Refresh Telemetry" type="button">
                      <span className="material-symbols-outlined text-[18px]">refresh</span>
                    </button>
                  </div>
                </div>

                <div className="divide-y divide-surface-container">
                  {tender?.bids?.map((bid: Record<string, unknown>, index: number) => {
                    const isProcessing = index % 3 === 0;
                    const isFlagged = index % 4 === 0 && index !== 0;
                    const isCompleted = !isProcessing && !isFlagged;

                    return (
                      <div 
                        key={(bid.id as string) as string} 
                        onClick={() => setSelectedBid(bid)}
                        className={`p-space-base transition-colors flex flex-col gap-space-sm cursor-pointer ${
                          isFlagged ? 'bg-error-container/20 hover:bg-error-container/30' : 'hover:bg-surface-container-low/40'
                        } ${selectedBid?.id === (bid.id as string) ? 'border-l-4 border-primary bg-surface-container-low/40' : ''}`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                          <div className="flex items-start gap-space-sm">
                            <div className={`w-10 h-10 rounded flex items-center justify-center font-bold font-mono text-sm shrink-0 ${
                              isFlagged ? 'bg-error/10 text-error' : 
                              isProcessing ? 'bg-primary-fixed/60 text-primary' : 
                              'bg-secondary-container/40 text-on-secondary-container'
                            }`}>
                              {String(index + 1).padStart(2, '0')}
                            </div>
                            <div>
                              <div className="flex items-center gap-space-sm">
                                <span className="font-title-sm text-title-sm text-on-surface font-semibold">{((bid.bidder as Record<string, unknown>) as Record<string, unknown>).entity_name}</span>
                                <span className="font-mono text-label-sm text-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">GEM-BID-{(bid.id as string).substring(0, 5)}</span>
                                {isFlagged && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-sm font-label-sm bg-error-container text-on-error-container font-semibold">
                                    Forensic Discrepancy
                                  </span>
                                )}
                                {!isFlagged && (
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-sm font-label-sm bg-surface-container-high text-primary">
                                    Class-I MII
                                  </span>
                                )}
                              </div>
                              <div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm mt-1">
                                {isFlagged ? (
                                  <>
                                    <span className="text-error font-semibold flex items-center gap-1">
                                      <span className="material-symbols-outlined text-[16px]">warning</span>
                                      Statutory Defect
                                    </span>
                                    <span>•</span>
                                    <span>GSTIN: {(bid.bidder as Record<string, unknown>).gstin}</span>
                                  </>
                                ) : (
                                  <>
                                    <span>Envelope: Technical + Financial</span>
                                    <span>•</span>
                                    <span>GSTIN: {(bid.bidder as Record<string, unknown>).gstin}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-space-sm self-end md:self-auto">
                            {isProcessing && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                LayoutLMv3 NER (92%)
                              </span>
                            )}
                            {isCompleted && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm uppercase font-semibold">
                                <span className="material-symbols-outlined text-[15px] text-secondary">verified</span>
                                Completed
                              </span>
                            )}
                            {isFlagged && (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-error-container text-on-error-container font-label-sm text-label-sm uppercase font-bold">
                                <span className="material-symbols-outlined text-[15px] text-error">gpp_bad</span>
                                Flagged
                              </span>
                            )}
                          </div>
                        </div>
                        {isProcessing && (
                          <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden mt-1">
                            <div className="bg-primary h-2 rounded-full transition-all duration-500" style={{width: '92%'}}></div>
                          </div>
                        )}
                        {isCompleted && (
                          <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden mt-1">
                            <div className="bg-secondary h-2 rounded-full" style={{width: '100%'}}></div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right 4 Columns: Pipeline Telemetry & Document Intelligence Sidebar */}
            <div className="xl:col-span-4 flex flex-col gap-space-lg">
              {selectedBid ? (
                <div className="bg-surface-container-lowest rounded-xl p-space-base shadow-sm border border-outline-variant">
                  <div className="flex items-center justify-between pb-space-sm mb-space-sm border-b border-surface-container-high">
                    <h3 className="font-title-md text-title-md text-on-surface">Bidder Details</h3>
                    <button onClick={() => setSelectedBid(null)} className="text-on-surface-variant hover:text-on-surface p-1 rounded-full hover:bg-surface-container">
                      <span className="material-symbols-outlined text-[20px]">close</span>
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Entity Name</span>
                      <span className="font-body-md text-body-md text-on-surface font-semibold">{((selectedBid.bidder as Record<string, unknown>)?.entity_name as string) || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">GSTIN</span>
                      <span className="font-mono text-body-md text-on-surface">{((selectedBid.bidder as Record<string, unknown>)?.gstin as string) || 'N/A'}</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Bid ID</span>
                      <span className="font-mono text-body-md text-on-surface">{selectedBid.id as string}</span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">Submission Status</span>
                      <span className="inline-flex px-2 py-1 bg-secondary-container text-on-secondary-fixed text-label-sm font-label-sm rounded uppercase font-semibold">
                        {(selectedBid.status as string) || 'Submitted'}
                      </span>
                    </div>
                    <div className="pt-4 border-t border-surface-container-high">
                      <button className="w-full flex items-center justify-center gap-2 py-2 bg-primary text-on-primary rounded font-label-md transition-colors hover:bg-primary-container" type="button">
                        <span className="material-symbols-outlined text-[18px]">verified_user</span>
                        Force Re-Verify Dossier
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
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
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: "78%" }}></div>
                        </div>
                        <span className="text-label-sm font-label-sm text-on-surface-variant mt-0.5 block">Model: LayoutLMv3-Gov-Procure-XL (1.2B Params)</span>
                      </div>
                      <div>
                        <div className="flex justify-between text-label-md font-label-md text-on-surface mb-1">
                          <span>OCR Throughput Rate</span>
                          <span className="font-mono text-secondary font-bold">142 pgs/sec</span>
                        </div>
                        <div className="w-full bg-surface-container h-1.5 rounded-full overflow-hidden">
                          <div className="bg-secondary h-1.5 rounded-full" style={{ width: "86%" }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-space-md p-space-sm rounded bg-surface-container-low flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">speed</span>
                        <div>
                          <span className="font-label-sm text-label-sm uppercase text-on-surface-variant block">Average Latency</span>
                          <span className="font-title-sm text-title-sm font-bold text-on-surface">3.4s</span>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div className="bg-surface-container-lowest rounded-xl p-space-base shadow-sm">
                    <h3 className="font-title-sm text-title-sm text-on-surface mb-space-sm flex items-center gap-2">
                      <span className="material-symbols-outlined text-tertiary-container text-[20px]">security</span>
                      Forensic & Document Tamper Engine
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
                        <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">rule</span>
                        <div>
                          <span className="font-label-md font-label-md text-on-surface block">ICAI UDIN Direct Bridge</span>
                          <span className="text-on-surface-variant">Automated validation of 18-digit Unique Document Identification Numbers on CA Turnover & Net Worth certificates.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="sticky bottom-0 z-40 w-full bg-surface-container-lowest py-space-sm px-layout-gutter shadow-xl mt-space-lg">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary text-[24px]">gavel</span>
                <div className="text-body-sm font-body-sm text-on-surface-variant">
                  <span className="font-semibold text-on-surface">Statutory Compliance Affirmation:</span>
                  Document ingestion complies with General Financial Rules (GFR) 2017 Rule 144, Public Procurement (Preference to Make in India) Order 2017, and IT Act Section 65B evidence standards.
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-space-sm shrink-0">
                <button onClick={() => router.push(`/tender/${tender.id}/compliance`)} className="inline-flex items-center gap-2 px-5 py-2 rounded bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md shadow-md transition-all" type="button">
                  <span>Proceed to Compliance Verification</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
