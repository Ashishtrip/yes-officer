'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { api } from '@/services/api';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function BidderDetail() {
  const router = useRouter();
  const params = useParams();
  const [bid, setBid] = useState<any>({});
  const [loadingBid, setLoadingBid] = useState(true);

  useEffect(() => {
    if (params.id) {
      api.getBidDetails(params.id as string)
        .then(res => {
          if (res.success) {
            setBid(res.data.bid);
          }
        })
        .catch(err => console.error('Failed to fetch bid details', err))
        .finally(() => setLoadingBid(false));
    }
  }, [params.id]);

  const handleDecision = async (decision: 'APPROVED' | 'REJECTED') => {
    const remarks = window.prompt('Please enter remarks/justification for your decision.');
    if (!remarks) return;

    try {
      await api.submitPoDecision(bid.id, decision, remarks);
      alert(`Decision submitted successfully! Bidder is ${decision}.`);
      router.back();
    } catch (error) {
      console.error('Failed to submit decision', error);
      alert('Failed to submit decision. Check console.');
    }
  };

  if (loadingBid) return <div className="p-8 flex justify-center items-center h-screen bg-slate-900/60"><div className="text-white text-xl">Loading Bidder details...</div></div>;
  if (!bid) return <div className="p-8 text-red-500 h-screen bg-slate-900/60 flex justify-center items-center"><div className="bg-white p-6 rounded-lg">Bid not found.</div></div>;

  return (
    <ProtectedRoute>
      <div className="bg-slate-900/60 font-sans antialiased text-slate-800 min-h-screen flex items-center justify-center p-2 sm:p-4 lg:p-6 backdrop-blur-xs">
        <main className="w-full max-w-6xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[96vh]" data-purpose="compliance-verification-modal">
          
{/* BEGIN: ModalHeader */}
<header className="border-b border-slate-200 px-6 py-4 bg-white" data-purpose="modal-header">
{/* Breadcrumb & API Status */}
<div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-2.5">
<div className="flex items-center space-x-1.5 text-slate-500 font-medium">
<span>Tender: <span className="font-mono text-slate-700">GEM/2026/B/489201</span></span>
<span className="text-slate-300">›</span>
<span className="text-slate-900 font-semibold">Bidder Technical &amp; Statutory Compliance Deep-Dive</span>
</div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-medium text-[11px]">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Live GeM API Sync: Active
        </div>
</div>
{/* Bidder Identity & Score Badge Strip */}
<div className="flex flex-wrap items-center justify-between gap-4">
<div>
<div className="flex flex-wrap items-center gap-2.5">
<h1 className="text-2xl font-bold tracking-tight text-slate-900">{bid.bidder.entity_name}</h1>
<span className="px-2 py-0.5 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">L-1 Bidder</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
<svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
<path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
              Statutory Verified
            </span>
</div>
<div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-500 mt-1.5 font-mono">
<span><strong className="text-slate-600 font-sans font-medium">GSTIN:</strong> {bid.bidder.gstin}</span>
<span className="text-slate-300">•</span>
<span><strong className="text-slate-600 font-sans font-medium">GeM Seller ID:</strong> {bid.bidder.pan}</span>
<span className="text-slate-300">•</span>
<span><strong className="text-slate-600 font-sans font-medium">PAN:</strong> {bid.bidder.pan}</span>
<span className="text-slate-300">•</span>
<span><strong className="text-slate-600 font-sans font-medium">Udyam:</strong> UDYAM-MH-02-0045812</span>
</div>
</div>
{/* Compliance Score Card & Actions */}
<div className="flex items-center space-x-3">
<div className="border border-emerald-200 bg-emerald-50/40 rounded-lg px-3.5 py-1.5 text-right flex items-center gap-3">
<div>
<p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Compliance Index</p>
<div className="flex items-baseline justify-end gap-1">
<span className="text-2xl font-extrabold text-emerald-600">{bid.compliance_score?.toFixed(0)}</span>
<span className="text-xs font-semibold text-slate-400">/ 100</span>
</div>
</div>
<div className="h-7 w-[1px] bg-emerald-200"></div>
<span className="px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wide bg-emerald-100 text-emerald-800 border border-emerald-300">
              {bid.risk_level}
            </span>
</div>
{/* Audit Dossier Button */}
<button className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-md border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-xs" type="button">
<svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
            Audit Dossier
          </button>
{/* Dismiss / Close Modal */}
<button onClick={() => router.back()} aria-label="Close dialog" className="p-1.5 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors" type="button">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>
</header>
{/* END: ModalHeader */}
{/* BEGIN: ScrollableBodyContent */}
<div className="overflow-y-auto flex-1 p-6 space-y-6 bg-slate-50/50">
{/* BEGIN: FivePillarStrip */}
{/* 5-pillar statutory compliance cards */}
<section aria-label="Statutory Verification Pillars" data-purpose="statutory-pillars-grid">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
{/* Pillar 1: GSTN Status */}
<div className="bg-white border border-slate-200 rounded-lg p-3 shadow-2xs hover:border-slate-300 transition-colors">
<div className="flex items-center justify-between text-xs text-slate-500 mb-1">
<span className="font-medium text-slate-600">1. GSTN STATUS</span>
<svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
</div>
<p className="font-bold text-sm text-slate-900 leading-tight">Active &amp; Regular</p>
<p className="text-[11px] text-slate-500 mt-1">Filed to July 2026 • 0 Defaults</p>
</div>
{/* Pillar 2: Udyam MSME */}
<div className="bg-white border border-slate-200 rounded-lg p-3 shadow-2xs hover:border-slate-300 transition-colors">
<div className="flex items-center justify-between text-xs text-slate-500 mb-1">
<span className="font-medium text-slate-600">2. UDYAM MSME</span>
<svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
</div>
<p className="font-bold text-sm text-slate-900 leading-tight">Medium Enterprise</p>
<p className="text-[11px] text-slate-500 mt-1">Manufacturing NIC-2819</p>
</div>
{/* Pillar 3: Income Tax / PAN */}
<div className="bg-white border border-slate-200 rounded-lg p-3 shadow-2xs hover:border-slate-300 transition-colors">
<div className="flex items-center justify-between text-xs text-slate-500 mb-1">
<span className="font-medium text-slate-600">3. INCOME TAX / PAN</span>
<svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
</div>
<p className="font-bold text-sm text-slate-900 leading-tight">ITR-V Validated</p>
<p className="text-[11px] text-slate-500 mt-1">AY 24-25 &amp; 25-26 Matched</p>
</div>
{/* Pillar 4: EPFO Standing */}
<div className="bg-white border border-slate-200 rounded-lg p-3 shadow-2xs hover:border-slate-300 transition-colors">
<div className="flex items-center justify-between text-xs text-slate-500 mb-1">
<span className="font-medium text-slate-600">4. EPFO STANDING</span>
<svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
</div>
<p className="font-bold text-sm text-slate-900 leading-tight">248 Active Members</p>
<p className="text-[11px] text-slate-500 mt-1">ECR Cleared • No Notice</p>
</div>
{/* Pillar 5: Debarment Check */}
<div className="bg-white border border-slate-200 rounded-lg p-3 shadow-2xs hover:border-slate-300 transition-colors">
<div className="flex items-center justify-between text-xs text-slate-500 mb-1">
<span className="font-medium text-slate-600">5. DEBARMENT CHECK</span>
<svg className="w-4 h-4 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
<path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
</div>
<p className="font-bold text-sm text-slate-900 leading-tight">Clean Central Record</p>
<p className="text-[11px] text-slate-500 mt-1">Checked 14 Public Portals</p>
</div>
</div>
</section>
{/* END: FivePillarStrip */}
{/* BEGIN: CrossValidationMatrix */}
<section className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs" data-purpose="automated-cross-validation-matrix">
{/* Matrix Subheader */}
<div className="flex flex-wrap items-center justify-between px-5 py-3 border-b border-slate-200 bg-slate-50/80">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-govNavy" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<h2 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Automated Cross-Validation Matrix (Bid Document vs. Government Registry)
            </h2>
</div>
<span className="text-[11px] font-mono font-medium text-slate-500">
            Engine Rule v2.4 (GFR 2017 compliant)
          </span>
</div>
{/* Matrix Table */}
<div className="overflow-x-auto">
<table className="w-full text-left text-xs" data-purpose="validation-table">
<thead>
<tr className="bg-slate-100/75 border-b border-slate-200 text-slate-600 font-semibold uppercase text-[10px] tracking-wider">
<th className="py-2.5 px-4" scope="col">Verification Check Item</th>
<th className="py-2.5 px-4" scope="col">Submitted Bid Value</th>
<th className="py-2.5 px-4" scope="col">Live Portal API Value</th>
<th className="py-2.5 px-4" scope="col">Variance / Delta</th>
<th className="py-2.5 px-4 text-right" scope="col">Confidence &amp; Result</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 font-normal">
{/* Check 1: Entity Legal Name */}
<tr className="hover:bg-slate-50/70 transition-colors">
<td className="py-3 px-4">
<p className="font-medium text-slate-900 text-xs">Entity Legal Name</p>
<p className="text-[11px] text-slate-400 font-mono">MCA / ROC Registry Match</p>
</td>
<td className="py-3 px-4 font-medium text-slate-800">ABC Industries Limited</td>
<td className="py-3 px-4 font-mono font-medium text-slate-700">ABC INDUSTRIES LIMITED</td>
<td className="py-3 px-4">
<span className="text-emerald-700 font-medium text-xs">0.0% variance (Exact Match)</span>
</td>
<td className="py-3 px-4 text-right">
<span className="inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] border border-emerald-200">
                    100% • Verified
                  </span>
</td>
</tr>
{/* Check 2: Average Turnover */}
<tr className="hover:bg-slate-50/70 transition-colors">
<td className="py-3 px-4">
<p className="font-medium text-slate-900 text-xs">Average Turnover (FY 24-25)</p>
<p className="text-[11px] text-slate-400 font-mono">ITR-6 Form &amp; Audited Balance Sheet</p>
</td>
<td className="py-3 px-4 font-medium text-slate-800">₹48.60 Crore</td>
<td className="py-3 px-4 font-mono text-slate-700">₹48.58 Crore (ITR / MCA)</td>
<td className="py-3 px-4">
<span className="text-emerald-700 font-medium text-xs">+0.04% <span className="text-[10px] text-slate-400">(Allowable ≤ 1.0%)</span></span>
</td>
<td className="py-3 px-4 text-right">
<span className="inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] border border-emerald-200">
                    99.8% • Validated
                  </span>
</td>
</tr>
{/* Check 3: MSME Classification */}
<tr className="hover:bg-slate-50/70 transition-colors">
<td className="py-3 px-4">
<p className="font-medium text-slate-900 text-xs">MSME Classification</p>
<p className="text-[11px] text-slate-400 font-mono">Udyam Registration Portal</p>
</td>
<td className="py-3 px-4 font-medium text-slate-800">Medium Enterprise</td>
<td className="py-3 px-4 font-mono text-slate-700">Medium (Inv: ₹18.2 Cr, Turn: ₹48.58 Cr)</td>
<td className="py-3 px-4">
<span className="text-emerald-700 font-medium text-xs">Category Concurrence</span>
</td>
<td className="py-3 px-4 text-right">
<span className="inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] border border-emerald-200">
                    100% • Verified
                  </span>
</td>
</tr>
{/* Check 4: PAN Status & Linking */}
<tr className="hover:bg-slate-50/70 transition-colors">
<td className="py-3 px-4">
<p className="font-medium text-slate-900 text-xs">PAN Status &amp; Linking</p>
<p className="text-[11px] text-slate-400 font-mono">NSDL / Income Tax API</p>
</td>
<td className="py-3 px-4 font-mono font-medium text-slate-800">{bid.bidder.pan}</td>
<td className="py-3 px-4 font-mono text-slate-700">{bid.bidder.pan} (Active / Operative)</td>
<td className="py-3 px-4">
<span className="text-emerald-700 font-medium text-xs">Identical PAN-Aadhaar Seeded</span>
</td>
<td className="py-3 px-4 text-right">
<span className="inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] border border-emerald-200">
                    100% • Verified
                  </span>
</td>
</tr>
{/* Check 5: Central Debarment & Blacklist */}
<tr className="hover:bg-slate-50/70 transition-colors">
<td className="py-3 px-4">
<p className="font-medium text-slate-900 text-xs">Central Debarment &amp; Blacklist</p>
<p className="text-[11px] text-slate-400 font-mono">CIPP, CVC &amp; GeM Ban Repository</p>
</td>
<td className="py-3 px-4 font-medium text-slate-800">Declaration: Not Debarred</td>
<td className="py-3 px-4 font-mono text-slate-700">0 Adverse Records Across 14 Portals</td>
<td className="py-3 px-4">
<span className="text-emerald-700 font-medium text-xs">Clean Background</span>
</td>
<td className="py-3 px-4 text-right">
<span className="inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[11px] border border-emerald-200">
                    Zero Risk • Clear
                  </span>
</td>
</tr>
</tbody>
</table>
</div>
</section>
{/* END: CrossValidationMatrix */}
{/* BEGIN: BottomVerificationPanels */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-5" data-purpose="forensics-and-recommendation-split">
{/* Left Column: Document Forensics & Bounding OCR (7 cols) */}
<article className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col justify-between" data-purpose="document-forensics-panel">
<div>
<div className="flex items-center justify-between pb-3 border-b border-slate-100">
<div className="flex items-center gap-2">
<svg className="w-4 h-4 text-govNavy" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">Document Forensics &amp; Bounding OCR</h3>
</div>
<span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold">
                OCR Confidence: 98.4%
              </span>
</div>
{/* Visual Simulated OCR Document Preview */}
<div className="mt-3 bg-slate-50 border border-slate-200 rounded-lg p-3.5 font-mono text-[11px] text-slate-600 relative">
<div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-200/80 pb-1.5 mb-2.5 uppercase tracking-wider">
<span>Government of India – Ministry of MSME</span>
<span>UDYAM-MH-02-0045812</span>
</div>
{/* OCR Bounding Box 1 */}
<div className="border border-dashed border-blue-500 bg-blue-50/40 p-2 rounded mb-2 relative">
<div className="text-[9px] font-semibold tracking-wider text-blue-600 uppercase mb-0.5">
                  Identified Legal Entity [Confidence: 99.4%]
                </div>
<div className="text-slate-900 font-bold">
                  ABC INDUSTRIES LIMITED (Reg: 12/04/2016)
                </div>
</div>
{/* OCR Bounding Box 2 */}
<div className="border border-dashed border-emerald-500 bg-emerald-50/40 p-2 rounded mb-2.5 relative">
<div className="text-[9px] font-semibold tracking-wider text-emerald-700 uppercase mb-0.5">
                  Manufacturing Class &amp; Scale [Confidence: 97.9%]
                </div>
<div className="text-slate-900 font-bold">
                  Enterprise Scale: MEDIUM • Major Activity: MANUFACTURING
                </div>
</div>
{/* Document Footnote & Tamper Verification */}
<div className="flex flex-wrap items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-200/80">
<div className="flex items-center gap-1.5 text-emerald-700 font-sans font-medium">
<svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
<path clipRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
                  e-Sign Validated (NIC CA Cert)
                </div>
<span className="text-slate-400">Tamper Hash: 4e9a8f...39bc</span>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
<span>Layout Engine: <span className="font-mono text-slate-700 font-medium">LayoutLMv3-GovIN</span></span>
<span>Font Substitution: <strong className="font-normal text-emerald-700">None Detected</strong></span>
</div>
</article>
{/* Right Column: AI Recommendation Engine & Cryptographic Audit Trail (5 cols) */}
<article className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-4 shadow-xs flex flex-col justify-between" data-purpose="recommendation-audit-panel">
<div>
{/* AI Recommendation Section */}
<div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-100">
<svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
<path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd"></path>
</svg>
<h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">AI Recommendation Engine</h3>
</div>
<p className="text-xs text-slate-700 leading-relaxed font-sans">
<strong className="font-bold text-slate-900">Recommended for Technical Qualification.</strong> {bid.bidder.entity_name} satisfies all statutory compliance mandates under <span className="font-semibold text-slate-900">GFR Rule 144(xi)</span> and <span className="font-semibold text-slate-900">Make in India (PPO 2017)</span>. All 5 connected public registries returned zero critical variances.
            </p>
</div>
{/* Cryptographic Audit Trail */}
<div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50 rounded-lg p-3" data-purpose="cryptographic-trail">
<div className="flex items-center justify-between text-[10px] text-slate-500 uppercase tracking-wider mb-2">
<span className="font-bold text-slate-700">Cryptographic Audit Trail</span>
<span className="font-mono text-govNavy font-semibold">SHA-256</span>
</div>
<div className="space-y-1 text-[11px] font-mono">
<div className="flex items-start gap-1">
<span className="text-slate-400 font-sans text-[10px] uppercase w-16 shrink-0">Doc Hash:</span>
<span className="text-slate-700 break-all leading-tight select-all">8f9b23e80d46511a54c379a2f77e6c71c4c1a26087b</span>
</div>
<div className="flex items-start gap-1">
<span className="text-slate-400 font-sans text-[10px] uppercase w-16 shrink-0">Timestamp:</span>
<span className="text-slate-700 font-medium">2026-09-06T14:32:18+05:30</span>
</div>
<div className="flex items-start gap-1">
<span className="text-slate-400 font-sans text-[10px] uppercase w-16 shrink-0">Audited By:</span>
<span className="text-slate-700">Automated Engine v4.8 (Authenticated)</span>
</div>
</div>
</div>
</article>
</section>
{/* END: BottomVerificationPanels */}
</div>
{/* END: ScrollableBodyContent */}
{/* BEGIN: ModalFooter */}
<footer className="border-t border-slate-200 px-6 py-3.5 bg-white flex flex-wrap items-center justify-between gap-4" data-purpose="modal-action-bar">
{/* Sync Status Timestamp */}
<div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span>Last Registry Sync: <strong className="font-sans font-medium text-slate-700">Sept 6, 2026 14:32 IST</strong></span>
</div>
{/* Action Buttons */}
<div className="flex flex-wrap items-center gap-2.5">
<button className="px-3.5 py-2 text-xs font-semibold rounded-md border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors shadow-2xs" type="button">
          Seek Clarification (GeM)
        </button>
<button onClick={() => handleDecision("REJECTED")} className="px-3.5 py-2 text-xs font-semibold rounded-md border border-rose-200 text-rose-700 bg-rose-50/50 hover:bg-rose-100 hover:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-300 transition-colors" type="button">
          Reject Compliance
        </button>
<button onClick={() => handleDecision("APPROVED")} className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md text-white bg-govNavy hover:bg-govNavy-hover focus:outline-none focus:ring-2 focus:ring-govNavy/40 transition-colors shadow-sm" type="button">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
          Approve Technical Compliance
        </button>
</div>
</footer>
{/* END: ModalFooter */}

        </main>
      </div>
    </ProtectedRoute>
  );
}
