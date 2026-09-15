'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/services/api';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

// Mock data based on the HTML design
const MOCK_BIDDERS = [
  {
    id: 1,
    rank: 'T-1',
    rankColor: 'bg-primary-fixed text-primary',
    name: 'Apex Heavy Diagnostic Systems',
    gemId: 'GEM-S-99420',
    gstin: '07AAACA1234A1Z5',
    category: 'Class-I MII (72%)',
    categoryColor: 'text-secondary',
    aiBase: 98.4,
    tech: 34.0,
    techPercent: (34.0 / 35.0) * 100,
    track: 29.0,
    trackPercent: (29.0 / 30.0) * 100,
    fin: 19.5,
    finPercent: (19.5 / 20.0) * 100,
    sla: 14.5,
    slaPercent: (14.5 / 15.0) * 100,
    committeePts: '97/96/98',
    committeeTotal: 97.00,
    verdict: 'Qualified',
    verdictColor: 'bg-secondary-container text-on-secondary-container',
    verdictDot: 'bg-secondary',
    evaluatorScores: [
      { name: 'Dr. Sunita Meena (Chairperson)', score: 92.0, comment: 'Spectrometer resolution complies fully with CSIR specifications. High marks on cryogenic stabilization subsystem.' },
      { name: 'Rajesh Kumar, IAS (Member Sec)', score: 93.0, comment: 'Audited turnover ₹112 Cr comfortably exceeds eligibility floor (₹30 Cr). Class-I local value addition certified by statutory auditor.' },
      { name: 'Prof. M. K. Narayanan (External SME)', score: 91.0, comment: 'Solid clinical deployment in 4 AIIMS regional campuses. Authorized service depot in New Delhi and Chennai verified.' }
    ],
    aiParsing: {
      text: 'LayoutLMv3 verified Form 3CD schedules against audited balance sheet; 0.04% variance within GFR tolerance. NABL calibration certificate validity confirmed through e-Gov repository.',
      pages: 1480,
      confidence: 99.8
    }
  },
  {
    id: 2,
    rank: 'T-2',
    rankColor: 'bg-primary-container text-on-primary',
    name: 'ABC Industries Ltd.',
    gemId: 'GEM-S-77312',
    gstin: '07AABCU9603R1ZM',
    category: 'Class-I MII (68%)',
    categoryColor: 'text-secondary',
    msme: 'MSME-General',
    selected: true,
    aiBase: 94.2,
    tech: 32.5,
    techPercent: (32.5 / 35.0) * 100,
    track: 28.0,
    trackPercent: (28.0 / 30.0) * 100,
    fin: 18.0,
    finPercent: (18.0 / 20.0) * 100,
    sla: 13.5,
    slaPercent: (13.5 / 15.0) * 100,
    committeePts: '92/93/91',
    committeeTotal: 92.00,
    verdict: 'Qualified',
    verdictColor: 'bg-secondary-container text-on-secondary-container',
    verdictDot: 'bg-secondary',
    evaluatorScores: [
      { name: 'Dr. Sunita Meena (Chairperson)', score: 92.0, comment: 'Spectrometer resolution complies fully with CSIR specifications. High marks on cryogenic stabilization subsystem.' },
      { name: 'Rajesh Kumar, IAS (Member Sec)', score: 93.0, comment: 'Audited turnover ₹112 Cr comfortably exceeds eligibility floor (₹30 Cr). Class-I local value addition certified by statutory auditor.' },
      { name: 'Prof. M. K. Narayanan (External SME)', score: 91.0, comment: 'Solid clinical deployment in 4 AIIMS regional campuses. Authorized service depot in New Delhi and Chennai verified.' }
    ],
    aiParsing: {
      text: 'LayoutLMv3 verified Form 3CD schedules against audited balance sheet; 0.04% variance within GFR tolerance. NABL calibration certificate validity confirmed through e-Gov repository.',
      pages: 1480,
      confidence: 99.8
    }
  },
  {
    id: 3,
    rank: 'T-3',
    rankColor: 'bg-primary-fixed text-primary',
    name: 'MedTech Diagnostics India Pvt Ltd',
    gemId: 'GEM-S-66104',
    gstin: '07AABCD1234A1Z5',
    category: 'Class-I MII (65%)',
    categoryColor: 'text-secondary',
    aiBase: 89.0,
    tech: 31.0,
    techPercent: (31.0 / 35.0) * 100,
    track: 26.5,
    trackPercent: (26.5 / 30.0) * 100,
    fin: 17.0,
    finPercent: (17.0 / 20.0) * 100,
    sla: 13.0,
    slaPercent: (13.0 / 15.0) * 100,
    committeePts: '88/87/88',
    committeeTotal: 87.50,
    verdict: 'Qualified',
    verdictColor: 'bg-secondary-container text-on-secondary-container',
    verdictDot: 'bg-secondary',
    evaluatorScores: [
      { name: 'Dr. Sunita Meena (Chairperson)', score: 88.0, comment: 'Meets most requirements but lacks specific certifications for subsystem components.' },
      { name: 'Rajesh Kumar, IAS (Member Sec)', score: 87.0, comment: 'Financials are solid, local value addition certified.' },
      { name: 'Prof. M. K. Narayanan (External SME)', score: 88.0, comment: 'Good track record in secondary care facilities.' }
    ],
    aiParsing: {
      text: 'LayoutLMv3 verified Form 3CD schedules against audited balance sheet; no significant variance found.',
      pages: 1200,
      confidence: 99.5
    }
  },
  {
    id: 4,
    rank: 'T-4',
    rankColor: 'bg-surface-container-high text-on-surface',
    name: 'Bharat Precision Labs Consortium',
    gemId: 'GEM-S-44198',
    gstin: '07AABCE1234A1Z5',
    category: 'Class-II MII (51%)',
    categoryColor: 'text-secondary',
    varianceFlag: true,
    aiBase: 81.5,
    tech: 28.0,
    techPercent: (28.0 / 35.0) * 100,
    track: 25.0,
    trackPercent: (25.0 / 30.0) * 100,
    fin: 16.0,
    finPercent: (16.0 / 20.0) * 100,
    sla: 11.0,
    slaPercent: (11.0 / 15.0) * 100,
    committeePts: '84/76/80',
    committeePtsColor: 'text-tertiary-container',
    committeeTotal: 80.00,
    verdict: 'Qualified',
    verdictColor: 'bg-secondary-container text-on-secondary-container',
    verdictDot: 'bg-secondary',
    evaluatorScores: [
      { name: 'Dr. Sunita Meena (Chairperson)', score: 84.0, comment: 'Acceptable specifications, but variance in scoring noted due to differing interpretations of SLA.' },
      { name: 'Rajesh Kumar, IAS (Member Sec)', score: 76.0, comment: 'Concerns regarding SLA commitments and penalties.' },
      { name: 'Prof. M. K. Narayanan (External SME)', score: 80.0, comment: 'Technical capabilities are adequate.' }
    ],
    aiParsing: {
      text: 'LayoutLMv3 noted SLA penalty clauses differ slightly from standard template.',
      pages: 900,
      confidence: 98.2
    }
  },
  {
    id: 5,
    rank: 'T-5',
    rankColor: 'bg-surface-container-high text-on-surface',
    name: 'Vardhman Surgical & Clinical Implements',
    gemId: 'GEM-S-51102',
    gstin: '07AABCF1234A1Z5',
    category: 'Pending NABL Sample Re-test',
    categoryColor: 'text-tertiary-container',
    aiBase: 76.4,
    aiBaseIcon: 'help',
    aiBaseColor: 'text-tertiary-container',
    tech: 27.0,
    techPercent: (27.0 / 35.0) * 100,
    track: 23.0,
    trackPercent: (23.0 / 30.0) * 100,
    fin: 15.0,
    finPercent: (15.0 / 20.0) * 100,
    sla: 11.0,
    slaPercent: (11.0 / 15.0) * 100,
    committeePts: '76/76/76',
    committeeTotal: 76.00,
    verdict: 'Provisional',
    verdictColor: 'bg-surface-container-high text-on-surface',
    verdictDot: 'bg-tertiary-container',
    evaluatorScores: [
      { name: 'Dr. Sunita Meena (Chairperson)', score: 76.0, comment: 'Pending physical validation of sample.' },
      { name: 'Rajesh Kumar, IAS (Member Sec)', score: 76.0, comment: 'Conditional qualification.' },
      { name: 'Prof. M. K. Narayanan (External SME)', score: 76.0, comment: 'Need to see test results.' }
    ],
    aiParsing: {
      text: 'LayoutLMv3 flagged missing final NABL test report.',
      pages: 850,
      confidence: 97.0
    }
  },
  {
    id: 6,
    rank: 'DQ',
    rankColor: 'bg-error-container text-on-error-container',
    name: 'Sino-Global Biosensors Overseas Corp',
    gemId: '',
    gstin: 'N/A',
    category: 'Land Border Sharing Jurisdiction without Competent Authority Cert',
    categoryColor: 'text-error',
    isDq: true,
    aiBase: 0.0,
    aiBaseIcon: 'cancel',
    aiBaseColor: 'text-error',
    tech: '—',
    track: '—',
    fin: '—',
    sla: '—',
    vetoRule: 'Veto Rule 144(xi)',
    committeeTotal: 0.00,
    verdict: 'Disqualified',
    verdictColor: 'bg-error-container text-on-error-container',
    verdictDot: 'bg-error',
    evaluatorScores: [
      { name: 'Dr. Sunita Meena (Chairperson)', score: 0.0, comment: 'Mandatory disqualification under Rule 144(xi).' },
      { name: 'Rajesh Kumar, IAS (Member Sec)', score: 0.0, comment: 'Failed threshold criteria.' },
      { name: 'Prof. M. K. Narayanan (External SME)', score: 0.0, comment: 'N/A' }
    ],
    aiParsing: {
      text: 'LayoutLMv3 identified country of origin as restricted and flagged missing DPIIT registration certificate.',
      pages: 500,
      confidence: 99.9
    }
  }
];

export default function TECEvaluation() {
  const router = useRouter();
  const params = useParams();
  const { user, logout } = useAuth();
  
  const [tender, setTender] = useState<Record<string, any> | null>(null);
  const [loading, setLoading] = useState(true);
  
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const [selectedBidderId, setSelectedBidderId] = useState(2);
  const selectedBidder = MOCK_BIDDERS.find(b => b.id === selectedBidderId) || MOCK_BIDDERS[1];

  useEffect(() => {
    const fetchTender = async () => {
      try {
        if (params?.id) {
          const data = await api.getTenderById(params.id as string);
          setTender(data);
        }
      } catch (error) {
        console.error('Failed to fetch tender details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTender();
  }, [params?.id]);

  const filteredBidders = MOCK_BIDDERS.filter((b) => {
    if (searchQuery) {
      const lowerQ = searchQuery.toLowerCase();
      if (!b.name.toLowerCase().includes(lowerQ) && !b.gemId.toLowerCase().includes(lowerQ)) {
        return false;
      }
    }
    if (filter === 'qualified') return b.verdict === 'Qualified';
    if (filter === 'disqualified') return b.verdict === 'Disqualified';
    if (filter === 'variance') return b.varianceFlag;
    return true;
  });

  if (loading) {
    return (
      <ProtectedRoute>
        <div className="flex h-screen bg-surface items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </ProtectedRoute>
    );
  }

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-surface">
        {/* Simplified Sidebar */}
        <nav className="w-20 lg:w-64 bg-surface-container-lowest border-r border-surface-container-high flex flex-col justify-between hidden md:flex">
          <div className="p-space-md flex flex-col gap-space-lg">
            <div className="flex items-center justify-center lg:justify-start gap-3 px-2">
              <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center font-title-md font-bold">
                P
              </div>
              <span className="font-title-md text-title-md text-on-surface hidden lg:block tracking-wide">
                Pragati
              </span>
            </div>
            
            <div className="flex flex-col gap-1">
              <Link href="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors group">
                <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">dashboard</span>
                <span className="font-label-md text-label-md hidden lg:block">Command Center</span>
              </Link>
              
              <Link href={`/tender/${params?.id}`} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-surface-container-low transition-colors group">
                <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">description</span>
                <span className="font-label-md text-label-md hidden lg:block">Tender Profile</span>
              </Link>

              <Link href={`/tender/${params?.id}/tec`} className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-secondary-container text-on-secondary-container transition-colors group">
                <span className="material-symbols-outlined text-[20px] text-secondary">fact_check</span>
                <span className="font-label-md text-label-md hidden lg:block font-bold">TEC Matrix</span>
              </Link>
            </div>
          </div>
          
          <div className="p-space-md border-t border-surface-container-high">
            <button onClick={logout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface-variant hover:bg-error-container hover:text-on-error-container transition-colors group">
              <span className="material-symbols-outlined text-[20px]">logout</span>
              <span className="font-label-md text-label-md hidden lg:block">Sign Out</span>
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
          {/* Header */}
          <header className="h-16 bg-surface-container-lowest border-b border-surface-container-high flex items-center justify-between px-space-lg shrink-0">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-secondary text-[24px]">fact_check</span>
              <div>
                <h1 className="font-title-md text-title-md text-on-surface font-bold">
                  TEC Consensus &amp; Scoring Matrix
                </h1>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  {tender?.title || 'Tender Evaluation'} • UID: {tender?.uid || params?.id}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full border border-surface-container-high">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                </span>
                <span className="font-label-sm text-[11px] text-on-surface font-semibold uppercase tracking-wider">
                  Committee Quorum Active
                </span>
              </div>
              <button className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors relative">
                <span className="material-symbols-outlined text-[20px]">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error"></span>
              </button>
              <div className="flex items-center gap-2 border-l border-surface-container-high pl-4">
                <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-md font-bold">
                  {user?.name?.charAt(0) || 'U'}
                </div>
                <div className="hidden md:flex flex-col">
                  <span className="font-label-sm text-label-sm font-bold text-on-surface">{user?.name}</span>
                  <span className="font-label-sm text-[11px] text-on-surface-variant">{user?.role}</span>
                </div>
              </div>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-space-md lg:p-space-lg flex flex-col gap-space-lg">
            {/* SECTION 1: Evaluation Committee Quorum State */}
            <section className="flex flex-col gap-space-sm">
              <h2 className="font-title-sm text-title-sm text-on-surface font-semibold">
                Evaluation Committee Quorum State
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-sm">
                {/* Keyholder 1 */}
                <div className="bg-surface-container-low rounded-lg p-3 border border-surface-container-high flex flex-col justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-on-primary text-xl ring-2 ring-primary shrink-0">
                      SM
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="font-title-sm text-[13px] text-on-surface font-bold truncate">Dr. Sunita Meena</span>
                      <span className="font-label-sm text-[11px] text-primary font-semibold truncate">Chairperson (TEC)</span>
                      <span className="font-body-sm text-[11px] text-on-surface-variant truncate">Director General, Safdarjung</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 text-[11px] font-body-sm bg-surface-container-lowest p-2 rounded border border-surface-container-high">
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface-variant font-label-sm">DSC Token:</span>
                      <span className="font-tabular-num font-semibold text-on-surface">Class-3 (e-Mudhra)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface-variant font-label-sm">Signed Stamp:</span>
                      <span className="font-tabular-num text-on-surface-variant">Today 13:45:22 IST</span>
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
                    <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-on-primary text-xl ring-2 ring-primary shrink-0">
                      RK
                    </div>
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
                    <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-on-primary text-xl ring-2 ring-primary shrink-0">
                      MN
                    </div>
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
                    <div className="w-11 h-11 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface text-xl ring-2 ring-outline-variant shrink-0">
                      AB
                    </div>
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

            {/* SECTION 2: Detailed Multi-Bidder Scoring Matrix (Left 65%) & Selected Bidder Deep Dive Drawer (Right 35%) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
              {/* LEFT COLUMN: High-Density Table */}
              <div className="lg:col-span-8 flex flex-col gap-space-sm">
                {/* Table Toolbar */}
                <div className="bg-surface-container-lowest rounded-xl p-3 border border-surface-container-high flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="relative w-64">
                      <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[18px] text-on-surface-variant">search</span>
                      <input 
                        className="w-full h-9 pl-8 pr-3 text-body-sm font-body-sm rounded-lg bg-surface-container-low border border-surface-container-high focus:outline-none focus:border-primary text-on-surface" 
                        placeholder="Filter bidder name, GeM ID..." 
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center gap-1 text-label-sm font-label-sm text-on-surface-variant bg-surface-container-low px-2 py-1 rounded">
                      <span>Filter:</span>
                      <select 
                        className="bg-transparent font-semibold text-on-surface outline-none cursor-pointer"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                      >
                        <option value="all">All Evaluated ({MOCK_BIDDERS.length})</option>
                        <option value="qualified">Qualified Only ({MOCK_BIDDERS.filter(b => b.verdict === 'Qualified').length})</option>
                        <option value="disqualified">Disqualified ({MOCK_BIDDERS.filter(b => b.verdict === 'Disqualified').length})</option>
                        <option value="variance">Score Variance &gt;5 pts ({MOCK_BIDDERS.filter(b => b.varianceFlag).length})</option>
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
                <div className="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-sm overflow-hidden flex flex-col">
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
                        {filteredBidders.map((bidder) => (
                          <tr 
                            key={bidder.id} 
                            onClick={() => setSelectedBidderId(bidder.id)}
                            className={`transition-colors cursor-pointer group ${
                              selectedBidderId === bidder.id 
                                ? 'bg-surface-container' 
                                : bidder.isDq ? 'bg-error-container/20 hover:bg-error-container/30' : 'hover:bg-surface-container-low'
                            }`}
                          >
                            <td className={`py-3 px-3 text-center font-tabular-num font-bold ${bidder.isDq ? 'text-error' : (selectedBidderId === bidder.id ? 'text-primary' : 'text-on-surface')}`}>
                              <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${bidder.rankColor} font-label-sm`}>
                                {bidder.rank}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex flex-col">
                                <div className="flex items-center gap-1">
                                  <span className={`font-title-sm text-[13px] font-semibold ${bidder.isDq ? 'text-on-surface line-through group-hover:text-error' : (selectedBidderId === bidder.id ? 'text-primary font-bold' : 'text-on-surface group-hover:text-primary')}`}>
                                    {bidder.name}
                                  </span>
                                  {selectedBidderId === bidder.id && (
                                    <span className="px-1 py-0.5 rounded bg-primary-fixed text-primary font-label-sm text-[9px] uppercase font-bold">Selected</span>
                                  )}
                                  {bidder.varianceFlag && (
                                    <span className="material-symbols-outlined text-[14px] text-tertiary-container" title="Score Variance Alert &gt;5 pts">warning</span>
                                  )}
                                </div>
                                <div className={`flex items-center gap-1.5 font-label-sm text-[10px] mt-0.5 ${bidder.isDq ? 'text-error font-semibold' : 'text-on-surface-variant'}`}>
                                  {bidder.gemId && <span className="font-mono">{bidder.gemId}</span>}
                                  {bidder.gemId && <span>•</span>}
                                  <span className={`${bidder.categoryColor} font-semibold`}>{bidder.category}</span>
                                  {bidder.msme && <span>•</span>}
                                  {bidder.msme && <span className="text-primary font-semibold">{bidder.msme}</span>}
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-3 text-center">
                              <span className={`inline-flex items-center gap-0.5 ${bidder.aiBaseColor || 'text-secondary'} font-tabular-num font-semibold text-[12px]`}>
                                <span className="material-symbols-outlined text-[13px]">{bidder.aiBaseIcon || 'verified'}</span> {bidder.aiBase.toFixed(1)}%
                              </span>
                            </td>
                            <td className={`py-3 px-3 text-right font-tabular-num ${bidder.isDq ? 'text-on-surface-variant' : 'font-medium'}`}>{typeof bidder.tech === 'number' ? bidder.tech.toFixed(1) : bidder.tech}</td>
                            <td className={`py-3 px-3 text-right font-tabular-num ${bidder.isDq ? 'text-on-surface-variant' : 'font-medium'}`}>{typeof bidder.track === 'number' ? bidder.track.toFixed(1) : bidder.track}</td>
                            <td className={`py-3 px-3 text-right font-tabular-num ${bidder.isDq ? 'text-error font-bold' : 'font-medium'}`}>{typeof bidder.fin === 'number' ? bidder.fin.toFixed(1) : bidder.fin}</td>
                            <td className={`py-3 px-3 text-right font-tabular-num ${bidder.isDq ? 'text-on-surface-variant' : 'font-medium'}`}>{typeof bidder.sla === 'number' ? bidder.sla.toFixed(1) : bidder.sla}</td>
                            
                            <td className={`py-3 px-3 text-center ${bidder.vetoRule ? 'font-label-sm text-[10px] text-error font-semibold uppercase' : ''}`}>
                              {bidder.vetoRule ? (
                                bidder.vetoRule
                              ) : (
                                <div className={`flex items-center justify-center gap-1 font-tabular-num text-[11px] ${bidder.committeePtsColor || 'text-on-surface-variant'} ${bidder.varianceFlag ? 'font-semibold' : ''}`}>
                                  {bidder.committeePts.split('/').map((pt, i, arr) => (
                                    <span key={i}>
                                      <span>{pt}</span>
                                      {i < arr.length - 1 && '/'}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </td>
                            <td className={`py-3 px-3 text-right font-tabular-num font-bold ${bidder.isDq ? 'text-error' : (bidder.committeeTotal >= 80 ? 'text-primary' : 'text-on-surface')} text-[14px]`}>
                              {bidder.committeeTotal.toFixed(2)}
                            </td>
                            <td className="py-3 px-3 text-center">
                              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${bidder.verdictColor} font-label-sm text-[10px] font-bold uppercase tracking-wider whitespace-nowrap`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${bidder.verdictDot}`}></span> {bidder.verdict}
                              </span>
                            </td>
                            <td className="py-3 px-3 text-right">
                              <button className={`p-1 rounded transition-colors ${selectedBidderId === bidder.id ? 'bg-primary text-on-primary' : (bidder.isDq ? 'hover:bg-surface-container text-error' : 'hover:bg-surface-container text-on-surface-variant hover:text-primary')}`} type="button">
                                <span className="material-symbols-outlined text-[18px]">{bidder.isDq ? 'gavel' : 'visibility'}</span>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Table Pagination & Audit Hash Footer */}
                  <div className="bg-surface-container-low border-t border-surface-container-high px-4 py-2.5 flex items-center justify-between flex-wrap gap-2 text-on-surface-variant font-label-sm text-label-sm">
                    <div className="flex items-center gap-2">
                      <span>Showing 1 to {filteredBidders.length} of {MOCK_BIDDERS.length} Total Evaluated Bids</span>
                      <span className="h-3 w-px bg-outline-variant"></span>
                      <span className="text-primary font-semibold">Statutory Sorting: Highest Composite Tech Score (T-1 Descending)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container border border-surface-container-high disabled:opacity-50" disabled type="button">Prev</button>
                      <button className="px-2.5 py-1 rounded bg-primary text-on-primary font-bold" type="button">1</button>
                      <button className="px-2 py-1 rounded bg-surface-container-lowest text-on-surface hover:bg-surface-container border border-surface-container-high disabled:opacity-50" disabled type="button">Next</button>
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

              {/* RIGHT COLUMN: Inspection & Consensus Drawer */}
              <div className="lg:col-span-4 flex flex-col gap-space-sm">
                <div className="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-md overflow-hidden flex flex-col">
                  {/* Inspection Card Header */}
                  <div className="bg-surface-container-low p-space-sm border-b border-surface-container-high flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">assignment_turned_in</span>
                      <h3 className="font-title-sm text-title-sm text-on-surface font-semibold">Bidder Evaluation Deep Dive</h3>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-tabular-num font-bold text-label-sm">
                      Rank {selectedBidder.rank}
                    </span>
                  </div>
                  
                  <div className="p-space-md flex flex-col gap-space-sm">
                    {/* Selected Bidder Header Info */}
                    <div className="flex flex-col gap-1 pb-3 border-b border-surface-container-high">
                      <div className="flex items-center justify-between">
                        <span className={`font-headline-md text-[17px] font-bold ${selectedBidder.isDq ? 'text-error line-through' : 'text-on-surface'}`}>{selectedBidder.name}</span>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${selectedBidder.verdictColor} font-label-sm text-[11px] font-bold uppercase`}>
                          {selectedBidder.verdict}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                        <span>GSTIN: {selectedBidder.gstin}</span>
                        <span>•</span>
                        <span>GeM ID: {selectedBidder.gemId || 'N/A'}</span>
                      </div>
                    </div>

                    {/* Parameter Sub-score Breakdown with Progress Bars */}
                    {!selectedBidder.isDq ? (
                      <div className="flex flex-col gap-2">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Consolidated Sub-Parameters</span>
                        <div className="space-y-2 text-body-sm font-body-sm">
                          <div>
                            <div className="flex justify-between font-label-sm text-[11px] mb-0.5">
                              <span className="text-on-surface font-medium">OEM Specifications Compliance (Max 35)</span>
                              <span className="font-tabular-num font-bold text-primary">{typeof selectedBidder.tech === 'number' ? selectedBidder.tech.toFixed(1) : selectedBidder.tech} / 35.0</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                              <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${selectedBidder.techPercent}%` }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between font-label-sm text-[11px] mb-0.5">
                              <span className="text-on-surface font-medium">Past Performance &amp; Indian Deployments (Max 30)</span>
                              <span className="font-tabular-num font-bold text-primary">{typeof selectedBidder.track === 'number' ? selectedBidder.track.toFixed(1) : selectedBidder.track} / 30.0</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                              <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${selectedBidder.trackPercent}%` }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between font-label-sm text-[11px] mb-0.5">
                              <span className="text-on-surface font-medium">Financial Standing &amp; Solvency Ratio (Max 20)</span>
                              <span className="font-tabular-num font-bold text-primary">{typeof selectedBidder.fin === 'number' ? selectedBidder.fin.toFixed(1) : selectedBidder.fin} / 20.0</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                              <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${selectedBidder.finPercent}%` }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between font-label-sm text-[11px] mb-0.5">
                              <span className="text-on-surface font-medium">Service Network &amp; Mean Time to Repair (Max 15)</span>
                              <span className="font-tabular-num font-bold text-primary">{typeof selectedBidder.sla === 'number' ? selectedBidder.sla.toFixed(1) : selectedBidder.sla} / 15.0</span>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                              <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${selectedBidder.slaPercent}%` }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-error-container/20 p-3 rounded-lg border border-error-container flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-error font-bold">
                          <span className="material-symbols-outlined">gavel</span>
                          Disqualification Cause
                        </div>
                        <p className="text-sm text-on-surface">{selectedBidder.category}</p>
                      </div>
                    )}

                    {/* AI Parsing & Automated Cross-Check Callout */}
                    <div className="bg-surface-container-low rounded-lg p-3 border border-surface-container-high flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5 text-primary font-label-sm text-label-sm font-bold">
                        <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                        LayoutLMv3 Multimodal Cross-Verification
                      </div>
                      <p className="text-on-surface font-body-sm text-[12px] leading-relaxed">
                        {selectedBidder.aiParsing.text}
                      </p>
                      <div className="flex items-center gap-2 font-mono text-[10px] text-on-surface-variant pt-1 border-t border-surface-container-high">
                        <span>Parsed {selectedBidder.aiParsing.pages} PDF pages</span>
                        <span>•</span>
                        <span>Confidence: {selectedBidder.aiParsing.confidence}%</span>
                      </div>
                    </div>

                    {/* Committee Member Scoring Rationale Strip */}
                    <div className="flex flex-col gap-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Individual Evaluator Scoring</span>
                      <div className="space-y-1.5 text-[11px] font-body-sm max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                        {selectedBidder.evaluatorScores.map((ev, i) => (
                          <div key={i} className="p-2 rounded bg-surface-container-low border border-surface-container-high flex flex-col gap-1">
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-on-surface">{ev.name}</span>
                              <span className={`font-tabular-num font-bold ${ev.score >= 80 ? 'text-primary' : (ev.score === 0 ? 'text-error' : 'text-on-surface')}`}>
                                Score: {ev.score.toFixed(1)} / 100
                              </span>
                            </div>
                            <p className="text-on-surface-variant italic">"{ev.comment}"</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dissent Opinion Ledger */}
                    {selectedBidder.varianceFlag && (
                      <div className="bg-surface-container rounded-lg p-2.5 flex items-start gap-2 text-on-surface">
                        <span className="material-symbols-outlined text-tertiary-container text-[18px] shrink-0 mt-0.5">warning</span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-[11px] font-bold text-on-surface">Dissenting Opinion Ledger</span>
                          <span className="font-body-sm text-[10px] text-on-surface-variant leading-relaxed">
                            A scoring variance of &gt;5 points exists between committee members regarding SLA requirements. Needs consensus discussion.
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {!selectedBidder.varianceFlag && !selectedBidder.isDq && (
                      <div className="bg-surface-container rounded-lg p-2.5 flex items-start gap-2 text-on-surface">
                        <span className="material-symbols-outlined text-secondary text-[18px] shrink-0 mt-0.5">verified_user</span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-[11px] font-bold text-on-surface">Consensus Verified</span>
                          <span className="font-body-sm text-[10px] text-on-surface-variant leading-relaxed">
                            No significant variance in scoring among committee members.
                          </span>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
