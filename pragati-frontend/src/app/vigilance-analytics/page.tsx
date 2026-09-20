"use client";
import React, { useState, useEffect } from "react";
import { api } from "@/services/api";
import ProtectedRoute from '@/components/ProtectedRoute';
import { PageHeader } from "@/components/PageHeader";
import { KpiCard } from "@/components/KpiCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";

export default function VigilanceAnalyticsPage() {
  const [flags, setFlags] = useState<any[]>([]);

  useEffect(() => {
    const fetchFlags = async () => {
      try {
        const res = await api.getVigilanceStats();
        if (res && res.success) {
          setFlags(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch vigilance flags", err);
      }
    };
    fetchFlags();
  }, []);

  const breadcrumbs = [
    { label: 'Portal Desk', href: '/' },
    { label: 'Vigilance & Scrutiny Wing' },
    { label: 'Systemic Compliance Intelligence & Analytics' }
  ];

  const pageActions = (
    <>
      <div className="flex items-center gap-2">
        <Select defaultValue="90days">
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Fiscal Period Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="90days">Last 90 Days (Q2 FY 2026-27)</SelectItem>
            <SelectItem value="30days">Last 30 Days (August 2026)</SelectItem>
            <SelectItem value="q1">Q1 FY 2026-27 Audit Cycle</SelectItem>
            <SelectItem value="full2526">Full FY 2025-26 Consolidation</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2">
        <Select defaultValue="all">
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder="Ministry Scrutiny Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Line Ministries (148 Tenders)</SelectItem>
            <SelectItem value="mod">Ministry of Defence (DDP)</SelectItem>
            <SelectItem value="mohw">Ministry of Health & Family Welfare</SelectItem>
            <SelectItem value="mohi">Ministry of Heavy Industries</SelectItem>
            <SelectItem value="mor">Ministry of Railways (CRIS)</SelectItem>
            <SelectItem value="mopne">Ministry of Power & New Energy</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button variant="outline" className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px]">download_for_offline</span>
        Export CVC Dossier
      </Button>
      <Button className="flex items-center gap-2">
        <span className="material-symbols-outlined text-[18px]">gavel</span>
        Generate CAG Statutory Brief
      </Button>
    </>
  );

  const statusInfo = (
    <div className="flex flex-wrap items-center gap-2 text-sm">
      <Badge variant="outline" className="bg-surface-container-highest text-primary border-none gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
        MeitY MeghRaj Node 04 Active
      </Badge>
      <Badge variant="outline" className="bg-surface-container-highest text-muted-foreground border-none gap-1">
        <span className="material-symbols-outlined text-[13px] text-primary">policy</span>
        CVC Vigilance Manual 2021 • GFR Rule 173
      </Badge>
      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
        FY 2026-27 (Q2 Telemetry)
      </Badge>
    </div>
  );

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background flex flex-col pt-14">
        <PageHeader 
        breadcrumbs={breadcrumbs}
        title="Vigilance & Procurement Compliance Analytics"
        description="Real-time forensic telemetry across GeM bids, statutory database discrepancies, collusion signatures, and sovereign verification pipelines."
        actions={pageActions}
        statusInfo={statusInfo}
      />

      <main className="flex-1 w-full max-w-[1680px] mx-auto p-4 md:p-6 lg:p-8 flex flex-col gap-8">
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <KpiCard
            title="Overall Clearance Rate"
            value={
              <div className="flex items-baseline gap-2">
                <span>78.4%</span>
                <span className="text-sm text-green-600 flex items-center font-semibold">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> +3.2%
                </span>
              </div>
            }
            icon="verified"
            iconColor="text-primary"
            subtext={
              <div className="flex justify-between items-center w-full mt-2">
                <span>Evaluated Fleet:</span>
                <span className="font-semibold text-foreground">1,842 bids / 148 tenders</span>
              </div>
            }
          />

          <KpiCard
            title="Top Systemic Defect"
            value={
              <div className="flex items-baseline gap-2">
                <span className="text-destructive">59.6%</span>
              </div>
            }
            icon="warning"
            iconColor="text-destructive"
            subtext={
              <div className="flex flex-col gap-2 mt-2 w-full">
                <div className="font-medium text-foreground">EPFO & Shram Suvidha Portal</div>
                <div className="w-full bg-secondary h-1.5 rounded-full overflow-hidden">
                  <div className="bg-destructive h-full rounded-full" style={{ width: "59.6%" }}></div>
                </div>
                <div className="flex justify-between items-center text-xs mt-1">
                  <span>Challan Wage Lock:</span>
                  <span className="font-semibold text-destructive">614 of 1,030 non-compliant</span>
                </div>
              </div>
            }
          />

          <KpiCard
            title="Verification Velocity"
            value={
              <div className="flex items-baseline gap-2 text-primary">
                <span>3.4 min</span>
                <span className="text-sm font-semibold text-green-600">-92% vs manual</span>
              </div>
            }
            icon="speed"
            iconColor="text-green-600"
            subtext={
              <div className="flex flex-col gap-2 mt-2 w-full">
                <div className="flex items-center gap-2">
                  <span>Prior Baseline:</span>
                  <span className="line-through">48.0 Hours</span>
                  <span className="material-symbols-outlined text-[14px] text-green-600">arrow_forward</span>
                  <span className="font-bold text-green-600">3.4 Mins</span>
                </div>
                <div className="flex justify-between items-center text-xs mt-1">
                  <span>Engine Runtime:</span>
                  <span className="font-semibold text-foreground">LayoutLMv3 + DPIIT/MCA APIs</span>
                </div>
              </div>
            }
          />

          <KpiCard
            title="Forensic Holds & Flags"
            value={
              <div className="flex items-baseline gap-2 text-orange-500">
                <span>34 Flags</span>
                <span className="text-sm text-muted-foreground font-normal">(1.8% of fleet)</span>
              </div>
            }
            icon="shield_with_heart"
            iconColor="text-orange-500"
            subtext={
              <div className="flex flex-col gap-2 mt-2 w-full">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-destructive animate-ping"></span>
                  <span className="font-semibold text-destructive text-xs">Escalated to CVC Oversight</span>
                </div>
                <div className="flex justify-between items-center text-xs mt-1">
                  <span>Signatures:</span>
                  <span className="font-semibold text-foreground">UDIN Tamper • Border Shells</span>
                </div>
              </div>
            }
          />
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Trends Over Time */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <Card>
              <CardHeader className="pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    Compliance & Disqualification Trends Over Time
                    <Badge variant="secondary" className="font-normal text-xs">12-Week Rolling</Badge>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Dynamic intake, automated envelope clearance, algorithmic rejections, and vigilance manual holds across Q2.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-3 h-3 rounded-full bg-blue-900"></span> Ingested</div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-3 h-3 rounded-full bg-green-700"></span> Passed</div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-3 h-3 rounded-full bg-red-600"></span> Disqualified</div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground"><span className="w-3 h-3 rounded-full bg-orange-400"></span> Holds</div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-3 rounded-lg flex items-center justify-between my-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">info</span>
                    <span><strong className="font-semibold text-primary">Week 8 Inflection Marker:</strong> Disqualifications spiked +34% due to automated DoE GFR 144(xi) border declaration parser rollout.</span>
                  </div>
                  <span className="text-muted-foreground tabular-nums">Circular OM F.No.6/18/2019-PPD</span>
                </div>
                
                <div className="relative w-full h-64 mt-2">
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
                    <div className="w-full h-px bg-border"></div>
                    <div className="w-full h-px bg-border"></div>
                    <div className="w-full h-px bg-border"></div>
                    <div className="w-full h-px bg-border"></div>
                    <div className="w-full h-px bg-border"></div>
                  </div>
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 700 240">
                    <defs>
                      <linearGradient id="primaryArea" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.18"></stop>
                        <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.0"></stop>
                      </linearGradient>
                      <linearGradient id="secondaryArea" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#15803d" stopOpacity="0.25"></stop>
                        <stop offset="100%" stopColor="#15803d" stopOpacity="0.0"></stop>
                      </linearGradient>
                    </defs>
                    <path d="M0,190 L58,180 L116,165 L175,170 L233,145 L291,130 L350,110 L408,80 L466,75 L525,85 L583,60 L641,45 L700,40 L700,240 L0,240 Z" fill="url(#primaryArea)"></path>
                    <path d="M0,190 L58,180 L116,165 L175,170 L233,145 L291,130 L350,110 L408,80 L466,75 L525,85 L583,60 L641,45 L700,40" fill="none" stroke="#1e3a8a" strokeWidth="2.5"></path>
                    <path d="M0,210 L58,200 L116,190 L175,192 L233,170 L291,160 L350,145 L408,135 L466,120 L525,128 L583,105 L641,90 L700,82 L700,240 L0,240 Z" fill="url(#secondaryArea)"></path>
                    <path d="M0,210 L58,200 L116,190 L175,192 L233,170 L291,160 L350,145 L408,135 L466,120 L525,128 L583,105 L641,90 L700,82" fill="none" stroke="#15803d" strokeWidth="2.5"></path>
                    <path d="M0,225 L58,220 L116,215 L175,218 L233,215 L291,210 L350,205 L408,185 L466,195 L525,197 L583,195 L641,195 L700,198" fill="none" stroke="#dc2626" strokeDasharray="4 2" strokeWidth="2"></path>
                    <path d="M0,235 L58,235 L116,234 L175,236 L233,235 L291,230 L350,232 L408,225 L466,220 L525,224 L583,222 L641,225 L700,226" fill="none" stroke="#f97316" strokeWidth="1.8"></path>
                    <line stroke="#dc2626" strokeDasharray="3 3" strokeWidth="1" x1="466" x2="466" y1="20" y2="230"></line>
                    <circle cx="466" cy="75" fill="#1e3a8a" r="4"></circle>
                    <circle cx="466" cy="120" fill="#15803d" r="4"></circle>
                    <circle cx="466" cy="195" fill="#dc2626" r="4"></circle>
                  </svg>
                  <div className="flex justify-between text-xs text-muted-foreground pt-2">
                    <span>W01</span><span>W02</span><span>W03</span><span>W04</span><span>W05</span><span>W06</span><span>W07</span>
                    <span className="font-bold text-destructive">W08 (OM Tighten)</span>
                    <span>W09</span><span>W10</span><span>W11</span><span>W12</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 mt-6 border-t">
                  <div className="bg-muted p-3 rounded-lg">
                    <span className="text-xs text-muted-foreground block">W12 Total Intake</span>
                    <span className="text-lg font-bold text-primary tabular-nums">218 Bids</span>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <span className="text-xs text-muted-foreground block">W12 Compliant</span>
                    <span className="text-lg font-bold text-green-700 tabular-nums">179 (82.1%)</span>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <span className="text-xs text-muted-foreground block">W12 Auto-Rejected</span>
                    <span className="text-lg font-bold text-destructive tabular-nums">35 (16.0%)</span>
                  </div>
                  <div className="bg-muted p-3 rounded-lg">
                    <span className="text-xs text-muted-foreground block">W12 Manual Override</span>
                    <span className="text-lg font-bold text-orange-500 tabular-nums">4 (1.8%)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-xl font-bold flex items-center gap-2">
                    Common Disqualification Root-Cause Breakdown
                    <Badge variant="destructive">1,030 Total Defects</Badge>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Parametric root cause analysis from automated sovereign database cross-referencing and OCR document diffing.
                  </p>
                </div>
                <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                  View Full Taxonomy <span className="material-symbols-outlined ml-1 text-[16px]">arrow_forward</span>
                </Button>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                
                {[
                  { num: 1, color: "bg-destructive", text: "text-destructive", title: "EPFO Active Contributor & ECR Mismatch", tag: "Labor Law GFR 173", pct: 59.6, count: 614, desc: "Discrepancy between declared EPF employee strength and last 6 months electronic challan cum return (ECR) filing records on Shram Suvidha." },
                  { num: 2, color: "bg-orange-500", text: "text-orange-500", title: "GFR Rule 144(xi) Land Border & Beneficial Ownership Defect", tag: "National Security", pct: 22.4, count: 231, desc: "Missing valid Class-1 DPIIT registration certificate for ultimate beneficial ownership (UBO) tied to shared land-border jurisdiction." },
                  { num: 3, color: "bg-blue-600", text: "text-blue-600", title: "ICAI UDIN & CA Turnover Certificate Invalid / Unverified", tag: "Financial Rigor", pct: 18.2, count: 187, desc: "UDIN not generated within statutory 15 days, expired practitioner license, or certificate figures mismatching Form 3CD schedules." },
                  { num: 4, color: "bg-slate-600", text: "text-slate-600", title: "MSME Udyam Activity Code Ineligibility", tag: "Preferential Quota", pct: 14.5, count: 149, desc: "Manufacturing exemptions & EMD waiver claimed under Trader / Service NIC sub-categories contrary to tender specifications." },
                  { num: 5, color: "bg-slate-400", text: "text-slate-400", title: "GSTN 3-Year Return Inconsistency / Inactive Status", tag: "Tax Standing", pct: 8.1, count: 83, desc: "Frequent GSTR-3B default notices in past 12 tax periods or suspended registration state at time of technical envelope unsealing." }
                ].map(item => (
                  <div key={item.num} className="bg-muted p-4 rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`w-6 h-6 rounded-md ${item.color} text-white flex items-center justify-center text-xs font-bold`}>{item.num}</span>
                        <span className="font-semibold text-foreground text-sm">{item.title}</span>
                        <Badge variant="outline" className="text-[10px] uppercase">{item.tag}</Badge>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <span className={`font-bold tabular-nums ${item.text}`}>{item.pct}%</span>
                        <span className="tabular-nums text-muted-foreground">({item.count} bids)</span>
                        <Button variant="link" className="p-0 h-auto text-primary text-xs font-semibold">Inspect Cohort</Button>
                      </div>
                    </div>
                    <div className="w-full bg-secondary h-2.5 rounded-full overflow-hidden">
                      <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.pct}%` }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                  </div>
                ))}

              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-primary">AI Engine Velocity & SLA</CardTitle>
                    <p className="text-sm text-muted-foreground">Sub-Envelope Pipeline Latency</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" title="Sovereign Cluster Active"></span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-xl my-2 flex flex-col gap-2">
                  <span className="text-xs text-muted-foreground uppercase font-semibold">Evaluation Speedup Factor</span>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Manual TEC Baseline</span>
                      <span className="text-sm font-bold text-foreground">14 Calendar Days</span>
                    </div>
                    <span className="material-symbols-outlined text-primary text-[24px]">electric_bolt</span>
                    <div className="flex flex-col text-right">
                      <span className="text-xs font-semibold text-green-600">Pragati AI Suite</span>
                      <span className="text-sm font-bold text-green-600">3.4 Minutes</span>
                    </div>
                  </div>
                  <div className="w-full bg-secondary h-2 rounded-full overflow-hidden mt-1">
                    <div className="bg-green-600 h-full rounded-full" style={{ width: "98%" }}></div>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-col gap-3">
                  <span className="text-xs text-muted-foreground uppercase font-semibold">Pipeline Tier Distribution</span>
                  
                  <div className="p-3 rounded-lg bg-muted">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-600"></span>
                        <span className="text-sm font-bold text-foreground">Fast-Track Automated</span>
                        <span className="text-xs text-muted-foreground">(&lt; 1 min)</span>
                      </div>
                      <span className="text-sm font-bold text-green-600 tabular-nums">64%</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">All 6 sovereign APIs verified clean without manual intervention. OCR confidence score &gt; 98.4%.</p>
                  </div>

                  <div className="p-3 rounded-lg bg-muted">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="text-sm font-bold text-foreground">Standard Parsing</span>
                        <span className="text-xs text-muted-foreground">(1 - 5 min)</span>
                      </div>
                      <span className="text-sm font-bold text-primary tabular-nums">28%</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Multi-entity holding structures and foreign joint-venture balance sheet normalization.</p>
                  </div>

                  <div className="p-3 rounded-lg bg-muted">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        <span className="text-sm font-bold text-foreground">Human-in-the-Loop</span>
                        <span className="text-xs text-muted-foreground">(&gt; 15 min)</span>
                      </div>
                      <span className="text-sm font-bold text-orange-500 tabular-nums">8%</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Flagged for forensic scan ambiguity, CA seal stamp pixelation, or manual vigilance officer hold.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1 flex flex-col">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-destructive text-[22px]">policy</span>
                    <CardTitle className="text-xl font-bold text-destructive">Collusion Watchlist</CardTitle>
                  </div>
                  <Badge variant="destructive">{flags.length} Active Cases</Badge>
                </div>
                <p className="text-sm text-muted-foreground">Algorithmic cartelization and common-origin cluster detection engine.</p>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto max-h-[460px] pr-1 flex flex-col gap-3">
                {flags.length > 0 ? (
                  flags.map((flag, idx) => (
                    <div key={flag.id || idx} className={`p-3 rounded-xl flex flex-col gap-1.5 ${flag.severity === 'HIGH' ? 'bg-destructive/10' : 'bg-muted'}`}>
                      <div className="flex items-start justify-between">
                        <span className={`text-xs font-bold uppercase tracking-wider ${flag.severity === 'HIGH' ? 'text-destructive' : flag.severity === 'MEDIUM' ? 'text-primary' : 'text-orange-500'}`}>
                          Flag #{flag.id?.slice(-4) || idx} - {flag.flag_type}
                        </span>
                        <Badge variant={flag.severity === 'HIGH' ? 'destructive' : 'secondary'} className="text-[10px] uppercase">
                          {flag.severity} Severity
                        </Badge>
                      </div>
                      <p className="text-sm font-semibold text-foreground leading-snug">
                        {flag.description || "Suspicious activity detected"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Detected in Bid ID: {flag.bid_id} {flag.bid?.tender?.gem_tender_id && `for Tender: ${flag.bid.tender.gem_tender_id}`}
                      </p>
                      <div className="flex items-center justify-between pt-1 mt-1 text-xs text-muted-foreground">
                        <span>Bidder: {flag.bid?.bidder?.entity_name || 'Unknown'}</span>
                        <Button variant="link" className={`p-0 h-auto font-semibold ${flag.severity === 'HIGH' ? 'text-destructive' : 'text-primary'}`}>
                          Review Dossier →
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-3 rounded-xl bg-muted flex flex-col gap-1.5 text-center text-muted-foreground">
                    No active alerts found.
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Table */}
        <Card>
          <CardHeader className="pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-xl font-bold text-primary flex items-center gap-2">
                Cross-Ministry Compliance & Scrutiny Matrix
                <Badge variant="secondary" className="uppercase">Section 4(1)(b) Disclosure Standard</Badge>
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Aggregated institutional compliance ratings, bottleneck indicators, and statutory actions across primary central procuring authorities.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-64">
                <span className="material-symbols-outlined absolute left-2.5 top-2 text-[18px] text-muted-foreground">filter_alt</span>
                <Input placeholder="Filter ministries or bottlenecks..." className="pl-8" />
              </div>
              <Button variant="outline" size="icon" title="Reload Matrix">
                <span className="material-symbols-outlined text-[20px]">refresh</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader className="bg-muted">
                  <TableRow>
                    <TableHead>Ministry / Organization</TableHead>
                    <TableHead className="text-center">Active Tenders</TableHead>
                    <TableHead className="text-center">Bids Screened</TableHead>
                    <TableHead>Clean Pass %</TableHead>
                    <TableHead>Primary Bottleneck Driver</TableHead>
                    <TableHead className="text-center">Avg Velocity</TableHead>
                    <TableHead className="text-center">Vigilance Holds</TableHead>
                    <TableHead className="text-right">Statutory Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    { ministry: "Ministry of Heavy Industries", org: "Automotive & Capital Goods Div", color: "bg-green-600", tenders: 28, bids: 342, passPct: 82.1, bottleneck: "EPFO Challan Gap (41%)", bColor: "bg-destructive", velocity: "2.8 min", holds: 2 },
                    { ministry: "Ministry of Health & Family Welfare", org: "Medical Devices & AIIMS Procurements", color: "bg-destructive", tenders: 42, bids: 518, passPct: 74.5, bottleneck: "ICAI UDIN Expiry (38%)", bColor: "bg-destructive", velocity: "3.9 min", holds: 11 },
                    { ministry: "Ministry of Defence (DDP)", org: "Ordnance & Strategic Avionics Wing", color: "bg-green-600", tenders: 35, bids: 460, passPct: 86.2, bottleneck: "GFR 144(xi) Border Check (52%)", bColor: "bg-orange-500", velocity: "4.1 min", holds: 8 },
                    { ministry: "Ministry of Railways (CRIS)", org: "Signaling & Telecom Infra Grid", color: "bg-destructive", tenders: 24, bids: 312, passPct: 69.8, bottleneck: "EPFO / Subcontracting (46%)", bColor: "bg-destructive", velocity: "3.2 min", holds: 9 },
                    { ministry: "Ministry of Power & New Energy", org: "Solar EPC & Grid Storage Contracts", color: "bg-green-600", tenders: 19, bids: 210, passPct: 81.4, bottleneck: "Udyam MSME NIC Code (29%)", bColor: "bg-slate-500", velocity: "2.9 min", holds: 4 },
                  ].map((row, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="font-semibold text-foreground flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${row.color}`}></span>
                          <span>{row.ministry}</span>
                        </div>
                        <div className="text-xs text-muted-foreground pl-4">{row.org}</div>
                      </TableCell>
                      <TableCell className="text-center font-medium">{row.tenders}</TableCell>
                      <TableCell className="text-center font-medium">{row.bids}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className={`font-bold ${row.passPct < 80 ? 'text-destructive' : 'text-green-600'}`}>{row.passPct}%</span>
                          <div className="w-16 bg-secondary h-1.5 rounded-full overflow-hidden">
                            <div className={`${row.passPct < 80 ? 'bg-destructive' : 'bg-green-600'} h-full`} style={{ width: `${row.passPct}%` }}></div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="gap-1 font-normal">
                          <span className={`w-1.5 h-1.5 rounded-full ${row.bColor}`}></span>
                          {row.bottleneck}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">{row.velocity}</TableCell>
                      <TableCell className="text-center">
                        <Badge variant="secondary">{row.holds} Flags</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="text-primary font-semibold hover:bg-primary/10 hover:text-primary">
                          Review Dossier
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 mt-4 border-t">
              <span className="text-sm text-muted-foreground">
                Showing 5 of 22 active line ministries. All metrics update synchronously via NIC Gateway.
              </span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <span className="text-sm font-bold text-primary px-2">Page 1 of 5</span>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="bg-muted p-6 rounded-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border">
          <div className="flex items-start gap-4 max-w-4xl">
            <span className="material-symbols-outlined text-primary text-[24px] shrink-0 mt-0.5">verified_user</span>
            <div>
              <span className="text-sm font-bold text-foreground block">
                Statutory Governance Citation & Evidence Trail
              </span>
              <p className="text-sm text-muted-foreground mt-1">
                Compiled under Section 4(1)(b) Right to Information Act 2005, CVC Vigilance Framework 2021, and Rule 173 of General Financial Rules (GFR). Analytics rendered from cryptographic append-only audit ledgers. Tamper-evidence verified on MeitY MeghRaj Node.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 shrink-0 w-full md:w-auto justify-between md:justify-end">
            <div className="flex flex-col text-left md:text-right">
              <span className="text-sm text-green-600 font-semibold flex items-center md:justify-end gap-1">
                <span className="w-2 h-2 rounded-full bg-green-600"></span>
                Ledger: Cryptographically Synced
              </span>
              <span className="text-[11px] text-muted-foreground font-mono">
                Export Hash: #CVC-ANL-2026-Q2-88B1
              </span>
            </div>
            <Button className="flex items-center gap-2 font-semibold shadow-sm">
              <span className="material-symbols-outlined text-[16px]">fingerprint</span>
              Verify SHA-256 Ledger
            </Button>
          </div>
        </footer>
      </main>
      </div>
    </ProtectedRoute>
  );
}
