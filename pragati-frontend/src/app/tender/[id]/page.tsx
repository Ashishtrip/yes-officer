'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { api } from '@/services/api';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Button } from '@/components/ui/button';
import { PageHeader } from '@/components/PageHeader';
import { KpiCard } from '@/components/KpiCard';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function TenderDetail() {
  const router = useRouter();
  const params = useParams();
  const { user, logout } = useAuth();
  const [tender, setTender] = useState<Record<string, any> | null>(null);
  const [loadingTender, setLoadingTender] = useState(true);

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

  if (loadingTender) return <div className="p-8">Loading Tender details...</div>;
  if (!tender) return <div className="p-8 text-red-500">Tender not found.</div>;

  const totalBidders = tender.bids?.length || 0;
  const fullyVerified = tender.bids?.filter((b: any) => b.risk_level === 'LOW').length || 0;
  const flaggedIssues = tender.bids?.filter((b: any) => ['HIGH', 'CRITICAL'].includes(b.risk_level)).length || 0;
  const pendingVerification = tender.bids?.filter((b: any) => b.status === 'PENDING').length || 0;

  const avgScore = totalBidders > 0 
    ? (tender.bids.reduce((acc: number, b: any) => acc + (b.compliance_score || 0), 0) / totalBidders).toFixed(1)
    : "0.0";
  const complianceRate = totalBidders > 0
    ? ((fullyVerified / totalBidders) * 100).toFixed(1)
    : "0.0";

  return (
    <ProtectedRoute>
      <main className="w-full pt-14 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <PageHeader
            breadcrumbs={[
              { label: 'Home', href: '#' },
              { label: 'Tenders', href: '#' },
              { label: tender.gem_tender_id || 'GEM/2026/B/489201' },
              { label: 'Bidder Compliance Evaluation' }
            ]}
            title={`Tender: ${tender.gem_tender_id}`}
            description={tender.title}
            statusInfo={
              <>
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-xs text-muted-foreground">
                  Status: <strong className="text-foreground font-semibold">{tender.status}</strong>
                </span>
                <span className="text-outline-variant px-2">•</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="material-symbols-outlined text-[14px]">category</span>
                  Procurement Category: {tender.category}
                </span>
                <span className="text-outline-variant px-2">•</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="material-symbols-outlined text-[14px]">schedule</span>
                  Due: {tender.bid_end_date ? new Date(tender.bid_end_date).toLocaleDateString() : 'N/A'}
                </span>
                <span className="text-outline-variant px-2">•</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="material-symbols-outlined text-[14px]">account_balance</span>
                  Ministry of Heavy Industries &amp; Public Enterprises
                </span>
              </>
            }
            actions={
              <>
                <Button variant="outline" className="gap-2">
                  <span className="material-symbols-outlined text-[18px]">download</span>
                  Export to PDF
                </Button>
                <Button className="gap-2">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  Finalize Evaluation
                </Button>
              </>
            }
          />

          <div className="w-full px-layout-margin py-8 max-w-[1680px] mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <KpiCard
                title="Total Bidders"
                value={tender.bids?.length || 0}
                icon="group"
                iconColor="text-primary"
                valueColor="text-foreground"
                subtext={
                  <div className="flex justify-between w-full">
                    <span className="text-secondary font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">trending_up</span>
                      +4 from previous round
                    </span>
                    <span className="text-muted-foreground font-medium">Round 2 Open</span>
                  </div>
                }
              />

              <KpiCard
                title="Fully Verified"
                value={fullyVerified}
                icon="verified"
                iconColor="text-secondary"
                valueColor="text-secondary"
                subtext={
                  <div className="flex justify-between w-full">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <span className="font-semibold text-secondary">{complianceRate}%</span> compliance rate
                    </span>
                    <span className="text-muted-foreground font-medium">Avg Score: {avgScore}</span>
                  </div>
                }
              />

              <KpiCard
                title="Flagged Issues"
                value={flaggedIssues}
                icon="warning"
                iconColor="text-destructive"
                valueColor="text-destructive"
                subtext={
                  <div className="flex justify-between w-full">
                    <span className="text-destructive font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-destructive"></span>
                      Requires PO manual review
                    </span>
                    <span className="text-muted-foreground font-medium">GST/Udyam alert</span>
                  </div>
                }
              />

              <KpiCard
                title="Pending Verification"
                value={pendingVerification}
                icon="sync"
                iconColor="text-muted-foreground animate-spin"
                valueColor="text-foreground"
                subtext={
                  <div className="flex justify-between w-full">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">hourglass_top</span>
                      EPFO/API queue active
                    </span>
                    <span className="text-muted-foreground font-medium">Est: ~3m</span>
                  </div>
                }
              />
            </div>

            <Card>
              <div className="p-4 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2 flex-1">
                  <div className="relative min-w-[280px] flex-1 max-w-md">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-muted-foreground">search</span>
                    <Input className="pl-10" placeholder="Filter bidder name, GSTIN or PAN..." />
                  </div>
                  <div className="flex items-center gap-2 overflow-x-auto">
                    <Button variant="default" className="rounded-full gap-2 h-8">
                      All Bidders
                      <Badge variant="secondary" className="px-1.5 py-0 rounded-full">{totalBidders}</Badge>
                    </Button>
                    <Button variant="ghost" className="rounded-full gap-2 h-8 text-muted-foreground">
                      Fully Verified
                      <Badge variant="outline" className="px-1.5 py-0 rounded-full">{fullyVerified}</Badge>
                    </Button>
                    <Button variant="ghost" className="rounded-full gap-2 h-8 text-muted-foreground">
                      Flagged
                      <Badge variant="outline" className="px-1.5 py-0 rounded-full">{flaggedIssues}</Badge>
                    </Button>
                    <Button variant="ghost" className="rounded-full gap-2 h-8 text-muted-foreground">
                      Pending
                      <Badge variant="outline" className="px-1.5 py-0 rounded-full">{pendingVerification}</Badge>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 text-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-medium">
                    Connected to APIs • Real-time Sync Active
                  </span>
                </div>
              </div>

              <div className="border-t">
                <Table>
                  <TableHeader className="bg-muted/50">
                    <TableRow>
                      <TableHead>Bidder Name & Identifiers</TableHead>
                      <TableHead className="min-w-[180px]">Compliance Score</TableHead>
                      <TableHead>Risk Level</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="min-w-[280px]">Check Summary</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tender.bids && tender.bids.map((bid: Record<string, any>) => (
                      <TableRow key={bid.id} className="group">
                        <TableCell>
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-foreground">{bid.bidder.entity_name}</span>
                              <Badge variant="secondary" className="text-[10px]">L-1 Bidder</Badge>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <span>GSTIN: {bid.bidder.gstin}</span>
                              <span>•</span>
                              <span>PAN: {bid.bidder.pan}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col gap-1.5">
                            <div className="flex items-center justify-between">
                              <span className={`font-semibold ${bid.compliance_score >= 80 ? 'text-emerald-600' : bid.compliance_score >= 50 ? 'text-amber-600' : 'text-rose-600'}`}>
                                {bid.compliance_score?.toFixed(1)} / 100
                              </span>
                              <span className={`text-xs ${bid.compliance_score >= 80 ? 'text-emerald-700' : bid.compliance_score >= 50 ? 'text-amber-700' : 'text-rose-700'}`}>
                                {bid.compliance_score >= 80 ? 'Excellent' : bid.compliance_score >= 50 ? 'Fair' : 'Poor'}
                              </span>
                            </div>
                            <div className="w-full bg-muted h-1.5 rounded-full overflow-hidden">
                              <div className={`${bid.compliance_score >= 80 ? 'bg-emerald-500' : bid.compliance_score >= 50 ? 'bg-amber-500' : 'bg-rose-500'} h-full rounded-full transition-all`} style={{ width: `${bid.compliance_score || 0}%` }}></div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant={bid.risk_level === 'LOW' ? 'default' : bid.risk_level === 'MEDIUM' ? 'secondary' : 'destructive'} className="gap-1.5">
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              bid.risk_level === 'LOW' ? 'bg-emerald-500' : 
                              bid.risk_level === 'MEDIUM' ? 'bg-amber-500' : 'bg-white'
                            }`}></span>
                            {bid.risk_level}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center gap-1 font-medium text-sm ${
                            bid.status === 'ACCEPTED' ? 'text-emerald-600' : 
                            bid.status === 'REJECTED' ? 'text-rose-600' : 'text-muted-foreground'
                          }`}>
                            <span className="material-symbols-outlined text-[16px]">
                              {bid.status === 'ACCEPTED' ? 'check_circle' : bid.status === 'REJECTED' ? 'cancel' : 'pending'}
                            </span>
                            {bid.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-start gap-1.5 text-sm">
                            <span className={`material-symbols-outlined text-[16px] shrink-0 mt-0.5 ${
                              bid.verificationChecks?.every((c: any) => c.status === 'VERIFIED') ? 'text-emerald-600' : 'text-amber-600'
                            }`}>
                              {bid.verificationChecks?.every((c: any) => c.status === 'VERIFIED') ? 'verified_user' : 'warning'}
                            </span>
                            <span className="text-muted-foreground line-clamp-2" title={bid.ai_recommendation || 'No recommendation'}>
                              {bid.ai_recommendation || `${bid.verificationChecks?.filter((c: any) => c.status === 'VERIFIED').length || 0} checks passed.`}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm" onClick={() => router.push(`/bidder/${bid.id}`)}>
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    {(!tender.bids || tender.bids.length === 0) && (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                          No bids found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </Card>

            <div className="bg-muted rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[20px]">policy</span>
                <span>
                  Statutory Verification Engine compliant with <strong>General Financial Rules (GFR) 2017</strong> &amp; <strong>Public Procurement (Preference to Make in India) Order 2017</strong>.
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span>Audit Ref: <span className="font-mono">AUD-2026-99281-EVAL</span></span>
                <span>Cryptographic Hash: <span className="font-mono">SHA256:7f4c8...19b</span></span>
              </div>
            </div>

          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
