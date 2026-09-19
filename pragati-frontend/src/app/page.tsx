'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { api } from '@/services/api';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PageHeader } from '@/components/PageHeader';
import { KpiCard } from '@/components/KpiCard';
export default function Dashboard() {
  const { user, logout } = useAuth();
  const [tenders, setTenders] = useState<any[]>([]);
  const [vigilanceFlags, setVigilanceFlags] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    Promise.all([
      api.getTenders(),
      api.getVigilanceStats()
    ])
      .then(([tendersRes, vigilanceRes]) => {
        if (tendersRes.success) {
          setTenders(tendersRes.data.tenders);
        }
        if (vigilanceRes.success) {
          setVigilanceFlags(vigilanceRes.data);
        }
      })
      .catch(err => {
        console.error('Failed to load dashboard data', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const totalBidsCount = tenders.reduce((acc, t) => acc + (t._count?.bids || 0), 0);
  const riskAlertsCount = Array.isArray(vigilanceFlags) ? vigilanceFlags.length : 0;

  return (
    <ProtectedRoute>
      <main className="w-full pt-14 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          {/* Top Command & Action Bar */}
          <PageHeader
            breadcrumbs={[
              { label: 'Portal Desk', href: '#' },
              { label: 'Tenders & Bids Management' },
              { label: 'Active Procurement Fleet' }
            ]}
            title="Active Tenders & Bidder Submissions Fleet"
            description="Real-time multi-ministerial bid ingestion, automated statutory verification (GFR 144(xi), DPIIT PPO), and technical compliance gate controls."
            statusInfo={
              <>
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                <span className="text-xs text-muted-foreground">
                  GeM Gateway API Sync: <strong className="text-foreground font-semibold">12 mins ago</strong>
                </span>
                <span className="material-symbols-outlined text-[16px] text-muted-foreground ml-1 cursor-pointer hover:text-primary" title="Refresh Live Feeds">sync</span>
              </>
            }
            actions={
              <>
                <Button variant="outline" className="gap-2">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Import GeM Tender
                </Button>
                <Button variant="outline" className="gap-2 text-primary border-primary/20">
                  <span className="material-symbols-outlined text-[18px]">analytics</span>
                  Compliance Digest
                </Button>
                <Button className="gap-2">
                  <span className="material-symbols-outlined text-[18px]">add_circle</span>
                  Create Evaluation
                </Button>
              </>
            }
          />

          {/* Main Workstation Layout */}
          <div className="w-full px-layout-margin py-8 max-w-[1680px] mx-auto flex flex-col gap-8">
            {/* KPI Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <KpiCard
                title="Active In-Flight Tenders"
                value={tenders.length}
                icon="folder_special"
                iconColor="text-primary"
                valueColor="text-primary"
                subtext={
                  <>
                    <span className="font-medium text-foreground">6 High-Value (&gt; ₹10 Cr)</span> · 8 Standard Tier
                  </>
                }
              />

              <KpiCard
                title="Total Ingested Bids"
                value={totalBidsCount}
                icon="inventory_2"
                iconColor="text-muted-foreground"
                subtext={
                  <>
                    <span className="font-medium text-foreground">28 Portfolios / Depts</span> · <span className="text-secondary font-semibold">98.4% OCR Parsed</span>
                  </>
                }
              />

              <KpiCard
                cardClassName="border-destructive/50"
                title={
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-destructive"></span>
                    Statutory Risk Alerts
                  </span>
                }
                titleClassName="text-destructive"
                value={riskAlertsCount}
                icon="policy"
                iconColor="text-destructive"
                valueColor="text-destructive"
                subtext={
                  <div className="flex justify-between bg-destructive/10 px-2 py-1 rounded w-full">
                    <span className="font-semibold text-destructive">11 Land Border 144(xi)</span>
                    <span className="font-medium text-destructive">8 GSTN Cancelled</span>
                  </div>
                }
              />

              <KpiCard
                title={
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Audit Turnaround Velocity
                  </span>
                }
                titleClassName="text-secondary"
                value={
                  <>
                    1.8 <span className="text-sm text-muted-foreground font-normal">Days / Tender</span>
                  </>
                }
                icon="speed"
                iconColor="text-secondary"
                valueColor="text-secondary"
                subtext={
                  <div className="flex justify-between w-full">
                    <span>Baseline: 14.0 days</span>
                    <span className="text-secondary font-semibold">87.1% Accelerated</span>
                  </div>
                }
              />
            </div>

            {/* Filter, Search & Status Navigation Section */}
            <Card>
              <div className="p-4 flex flex-col gap-4">
                {/* Upper Filter Row: Search & Select Pickers */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
                  <div className="lg:col-span-5 relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-[20px] text-muted-foreground pointer-events-none">search</span>
                    <Input className="pl-10" placeholder="Search by GeM Tender ID (e.g., GEM/2026/B/...), Ministry, Keyword, PAN, GSTIN..." />
                  </div>
                  
                  <div className="lg:col-span-2">
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Procurement Types</SelectItem>
                        <SelectItem value="supply">Supply of Goods</SelectItem>
                        <SelectItem value="services">Non-Consulting Services</SelectItem>
                        <SelectItem value="works">Major Works &amp; EPC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="lg:col-span-3">
                    <Select defaultValue="all">
                      <SelectTrigger>
                        <SelectValue placeholder="Ministry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Ministries (Heavy Ind, Def, Rail, Health)</SelectItem>
                        <SelectItem value="heavy">Ministry of Heavy Industries</SelectItem>
                        <SelectItem value="defence">Ministry of Defence</SelectItem>
                        <SelectItem value="railways">Ministry of Railways</SelectItem>
                        <SelectItem value="health">Ministry of Health &amp; Family Welfare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="lg:col-span-2 flex items-center justify-end gap-2">
                    <Select defaultValue="due">
                      <SelectTrigger className="w-[140px]">
                        <SelectValue placeholder="Sort" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="due">Due Date</SelectItem>
                        <SelectItem value="value">Value (High to Low)</SelectItem>
                        <SelectItem value="count">Submissions Count</SelectItem>
                        <SelectItem value="risk">Compliance Risk</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Lower Filter Row: Workflow Status Tabs */}
                <div className="flex items-center justify-between overflow-x-auto border-t pt-4">
                  <div className="flex items-center gap-2">
                    <Button variant="default" className="rounded-full gap-2 h-8">
                      All Active Tenders
                      <Badge variant="secondary" className="px-1.5 py-0 rounded-full">{tenders.length}</Badge>
                    </Button>
                    <Button variant="ghost" className="rounded-full gap-2 h-8 text-muted-foreground">
                      Under Technical Evaluation
                      <Badge variant="outline" className="px-1.5 py-0 rounded-full">6</Badge>
                    </Button>
                    <Button variant="ghost" className="rounded-full gap-2 h-8 text-muted-foreground">
                      Statutory Verification Queue
                      <Badge variant="outline" className="px-1.5 py-0 rounded-full">4</Badge>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Data Table */}
              {loading ? (
                <div className="p-8 text-center text-muted-foreground flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined animate-spin">progress_activity</span> Loading Tenders...
                </div>
              ) : (
                <div className="border-t">
                  <Table>
                    <TableHeader className="bg-muted/50">
                      <TableRow>
                        <TableHead className="w-12 text-center">
                          <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                        </TableHead>
                        <TableHead>Tender Reference</TableHead>
                        <TableHead>Procuring Authority</TableHead>
                        <TableHead>Timeline &amp; Status</TableHead>
                        <TableHead>Bids</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tenders.map((tender: any) => (
                        <TableRow key={tender.id} className="group">
                          <TableCell className="text-center align-top">
                            <input type="checkbox" className="mt-1 rounded border-gray-300 text-primary focus:ring-primary" />
                          </TableCell>
                          <TableCell className="align-top">
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <Link href={`/tender/${tender.id}/ingestion`} className="font-semibold text-primary hover:underline">{tender.gem_tender_id}</Link>
                                <Badge variant="outline" className="text-[10px] uppercase">High-Value EPC</Badge>
                                <Badge variant="secondary" className="text-[10px] uppercase">PPO MII: Cl-I (50%)</Badge>
                              </div>
                              <span className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                                {tender.title}
                              </span>
                              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                                <span className="flex items-center gap-1">
                                  <span className="material-symbols-outlined text-[14px]">category</span> {tender.category}
                                </span>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="align-top">
                            <div className="flex flex-col">
                              <span className="text-sm font-semibold text-foreground">Ministry of Heavy Industries</span>
                              <span className="text-xs text-muted-foreground">Dept of Public Enterprises</span>
                            </div>
                          </TableCell>
                          <TableCell className="align-top">
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-2 text-sm">
                                <span className="text-muted-foreground">Due: <strong>{new Date(tender.bid_end_date).toLocaleDateString()}</strong></span>
                                <Badge variant={tender.status === 'PUBLISHED' ? 'default' : 'secondary'} className="text-[10px]">
                                  {tender.status}
                                </Badge>
                              </div>
                              <div className="text-xs text-muted-foreground">
                                Created: {new Date(tender.created_at).toLocaleDateString()}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="align-top">
                            <div className="flex flex-col gap-1.5">
                              <div className="flex items-center justify-between text-sm">
                                <span className="font-semibold text-foreground">{tender._count?.bids || 0} Bids</span>
                              </div>
                              <div className="w-full h-1.5 rounded-full bg-muted overflow-hidden">
                                <div className="h-full bg-secondary w-full"></div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="align-top text-right">
                            <div className="flex flex-col items-end gap-1.5">
                              <Link href={`/tender/${tender.id}/ingestion`}>
                                <Button variant="outline" size="sm" className="h-8 gap-1 w-full justify-start max-w-[140px]">
                                  <span className="material-symbols-outlined text-[16px]">cloud_sync</span>
                                  Ingestion Queue
                                </Button>
                              </Link>
                              <Link href={`/tender/${tender.id}/compliance`}>
                                <Button variant="default" size="sm" className="h-8 gap-1 w-full justify-start max-w-[140px]">
                                  <span className="material-symbols-outlined text-[16px]">gavel</span>
                                  Compliance Desk
                                </Button>
                              </Link>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      {tenders.length === 0 && !loading && (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                            No tenders found.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              )}
            </Card>

            {/* Bottom Section: Split Two-Column Utility & Governance Console */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Ingestion Pipeline & Telemetry */}
              <Card className="lg:col-span-6 flex flex-col justify-between">
                <CardHeader className="pb-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">hub</span>
                      </div>
                      <div>
                        <CardTitle className="text-base text-primary">Real-Time Bid Ingestion &amp; OCR Telemetry</CardTitle>
                        <CardDescription>Live LayoutLMv3 Document Neural Pipeline</CardDescription>
                      </div>
                    </div>
                    <Badge variant="secondary" className="animate-pulse bg-secondary/20 text-secondary border-none">
                      Daemon Active
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-muted p-3 rounded-xl">
                      <span className="text-xs text-muted-foreground block">GSTN Verifier</span>
                      <span className="text-xl font-bold mt-0.5">42 <span className="text-xs font-normal">/ 100 rpm</span></span>
                    </div>
                    <div className="bg-muted p-3 rounded-xl">
                      <span className="text-xs text-muted-foreground block">EPFO Compliance</span>
                      <span className="text-xl font-bold mt-0.5">18 <span className="text-xs font-normal">/ 60 rpm</span></span>
                    </div>
                    <div className="bg-muted p-3 rounded-xl">
                      <span className="text-xs text-muted-foreground block">Udyam Registry</span>
                      <span className="text-xl font-bold text-primary mt-0.5">95 <span className="text-xs font-normal">/ 100 rpm</span></span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between p-2 rounded bg-muted/50">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-green-500">check_circle</span>
                        <span className="font-medium">Batch OCR #89201-P2</span>
                      </div>
                      <span className="text-xs text-muted-foreground">0.42s latency</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/50">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px] text-primary animate-spin">progress_activity</span>
                        <span className="font-medium">Sanctions Screener Daemon</span>
                      </div>
                      <span className="text-xs text-primary font-semibold">Evaluating...</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right Column: Statutory Rule Gate Auto-Enforcement Summary */}
              <Card className="lg:col-span-6 flex flex-col justify-between">
                <CardHeader className="pb-4 border-b">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[20px]">gavel</span>
                      </div>
                      <div>
                        <CardTitle className="text-base text-primary">Statutory Rule Gate Enforcement</CardTitle>
                        <CardDescription>Mandatory Sovereign Audits Applied</CardDescription>
                      </div>
                    </div>
                    <Badge variant="default" className="text-[10px]">DSC L-3</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-muted flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold">GFR 144(xi)</span>
                        <Badge variant="destructive" className="text-[10px]">11 Breaches</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Land border restriction compliance evaluation.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-muted flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold">DPIIT PPO Order</span>
                        <Badge variant="secondary" className="text-[10px] bg-secondary/20 text-secondary">100% Audited</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Make in India local content verification.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-muted flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold">MSME / Udyam</span>
                        <Badge variant="outline" className="text-[10px]">34 Exemptions</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Real-time Udyam API handshake for exemptions.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-muted flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold">Debarment Matrix</span>
                        <Badge variant="secondary" className="text-[10px] bg-secondary/20 text-secondary">Synced Today</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Incident Management &amp; CVC blacklists.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
