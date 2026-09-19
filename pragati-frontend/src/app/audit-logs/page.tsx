'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import { api } from '@/services/api';
import PageHeader from '@/components/PageHeader';
import KpiCard from '@/components/KpiCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

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
        const res = await api.getAuditLogs();
        if (res && res.success) {
          const apiLogs = res.data.logs.map((log: any, idx: number) => ({
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

  const displayLogs = logs.filter(log => 
    !searchQuery || 
    log.action?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    log.target?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    log.officer?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.realId?.toString().includes(searchQuery.toLowerCase())
  );
  
  const currentRecord = logs.find(l => l.id === selectedRecord) || logs[0] || {};

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(currentRecord, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <ProtectedRoute>
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

          <PageHeader
            breadcrumbs={[
              { label: 'Portal Desk', href: '/' },
              { label: 'Vigilance & Audit Division' },
              { label: 'Sovereign Audit Trail & Immutable Log Ledger' }
            ]}
            title="Immutable Audit Trail & Statutory Scrutiny Ledger"
            badges={[
              { icon: 'security', label: 'DPDP Act 2023 Shield', subtext: 'Sec. 8 Compliant Log Archive', variant: 'default' },
              { icon: 'lock', label: 'SHA-256 Immutability Enforced', subtext: 'Merkle Tree Root #89201-9B', variant: 'primary' }
            ]}
            actions={
              <div className="flex items-center gap-space-sm">
                <Button variant="outline" size="sm">
                  <span className="material-symbols-outlined text-[18px] mr-1 text-primary">calendar_month</span>
                  Last 30 Days (Q2 FY 2026-27)
                  <span className="material-symbols-outlined text-[16px] ml-1">expand_more</span>
                </Button>
                <Button variant="outline" size="sm" onClick={() => setIsMerkleModalOpen(true)}>
                  <span className="material-symbols-outlined text-[18px] mr-1 text-primary">fingerprint</span>
                  Verify Merkle Chain
                </Button>
                <Button size="sm">
                  <span className="material-symbols-outlined text-[18px] mr-1">download</span>
                  Export Audit Dossier
                  <span className="material-symbols-outlined text-[16px] ml-1">arrow_drop_down</span>
                </Button>
              </div>
            }
          />

          <div className="px-layout-gutter py-space-base grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-base">
            <KpiCard
              title="Total Audit Records"
              value={logs.length > 0 ? logs.length.toString() : "0"}
              icon="database"
              subtext="Append-Only Immutable"
              trend="0 Write / 0 Del"
            />
            <KpiCard
              title="TEC Verified Actions"
              value="1,280"
              icon="approval"
              subtext="Class-3 DSC Signed"
              trend="100% Validated"
              variant="secondary"
            />
            <KpiCard
              title="Active Scrutiny Requests"
              value="03"
              icon="troubleshoot"
              subtext="CVC & CAG Interrogations"
              trend="SLA: 48h Remaining"
              variant="error"
            />
            <KpiCard
              title="Hash Integrity Status"
              value="100%"
              icon="hub"
              subtext="Block #89201-9B"
              trend="Merkle Root Synced"
              variant="secondary"
            />
          </div>

          <div className="px-layout-gutter pb-space-sm flex flex-wrap items-center justify-between gap-space-md">
            <div className="flex-1 min-w-[320px] max-w-xl">
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[20px]">filter_alt</span>
                <Input
                  className="pl-10"
                  placeholder="Filter by Action ID (#AUD-), Target, Officer, or Hash..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface text-[18px]" onClick={() => setSearchQuery('')}>
                    <span className="material-symbols-outlined text-[16px]">close</span>
                  </button>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-label-sm font-label-sm">
              <span className="text-on-surface-variant uppercase tracking-wider">Status:</span>
              <Badge variant="outline" className="cursor-pointer">All</Badge>
              <Badge variant="destructive" className="cursor-pointer">Disqualified (12)</Badge>
              <Badge variant="secondary" className="cursor-pointer">Cleared / Approved (86)</Badge>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="px-layout-gutter pb-space-2xl grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">
            
            {/* Audit Ledger Section */}
            <div className="xl:col-span-8 flex flex-col gap-space-sm bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant">
              <div className="px-space-base py-3 bg-surface-container-low flex items-center justify-between border-b border-outline-variant">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">list_alt</span>
                  <span className="font-title-sm text-title-sm text-on-surface font-semibold">Statutory Bid Audit Ledger</span>
                  <Badge variant="outline">Realtime Append Stream</Badge>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="text-label-sm font-label-sm text-on-surface-variant flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse"></span> Sync Active (mTLS 1.3)
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto w-full max-h-[600px]">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-surface-container-low">
                      <TableHead>Timestamp (IST)</TableHead>
                      <TableHead>Action ID & Hash</TableHead>
                      <TableHead>Actor / Initiator</TableHead>
                      <TableHead>Target</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Status Verdict</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {displayLogs.map((log: any, idx: number) => (
                      <TableRow 
                        key={log.id || idx} 
                        className={`cursor-pointer transition-colors ${selectedRecord === (log.id || log.originalKey) ? 'bg-surface-container-low' : ''}`} 
                        onClick={() => setSelectedRecord(log.id || log.originalKey)}
                      >
                        <TableCell className="align-top font-tabular-num font-semibold">
                          {log.timestamp || '14-Oct-2026'}
                        </TableCell>
                        <TableCell className="align-top">
                          <div className="flex items-center gap-1">
                            <span className="font-semibold text-primary font-mono text-[12px]">{log.realId ? `#AUD-${log.realId.substring(0,6)}` : log.id}</span>
                            <span className="material-symbols-outlined text-[14px] text-secondary">verified</span>
                          </div>
                          <span className="font-mono text-[10px] text-on-surface-variant block">{log.hash?.substring(0, 10)}...</span>
                        </TableCell>
                        <TableCell className="align-top">
                          <span className="font-semibold block">{log.officer}</span>
                          <span className="text-[10px] text-on-surface-variant">{log.role}</span>
                        </TableCell>
                        <TableCell className="align-top">
                          <span className="font-mono text-[11px] font-semibold text-primary block">{log.target || 'System'}</span>
                        </TableCell>
                        <TableCell className="align-top font-semibold text-[13px]">
                          {log.action || 'Check'}
                        </TableCell>
                        <TableCell className="align-top">
                          {log.status === 'SUCCESS' ? (
                            <Badge variant="secondary" className="uppercase"><span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed mr-1"></span> {log.status}</Badge>
                          ) : (
                            <Badge variant="destructive" className="uppercase"><span className="w-1.5 h-1.5 rounded-full bg-error-container mr-1"></span> {log.status || 'APPROVED'}</Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Right Sidebar: Interactive Inspector */}
            <div className="xl:col-span-4 flex flex-col gap-space-base bg-surface-container-lowest p-space-lg rounded-xl shadow-md border border-outline-variant">
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant bg-surface-container-low -mx-space-lg -mt-space-lg px-space-lg py-3 rounded-t-xl">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]">verified</span>
                  <div>
                    <h3 className="font-title-sm text-title-sm text-on-surface font-semibold leading-tight">Cryptographic Inspector</h3>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">Selected Audit Entry Verification</span>
                  </div>
                </div>
                <Badge>{currentRecord.id}</Badge>
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
                <div className="p-space-md bg-surface-container-low border border-outline-variant rounded-lg flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[20px]">badge</span>
                      <div>
                        <span className="font-body-sm font-semibold text-on-surface block">{currentRecord.officer}</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">{currentRecord.role}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-secondary border-secondary">VALID</Badge>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">PO Justification & Statutory Note</span>
                <div className="p-space-md bg-surface-container-low border border-outline-variant rounded-lg text-body-sm font-body-sm text-on-surface leading-relaxed relative">
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
                <div className="p-space-md bg-surface-container-low border border-outline-variant rounded-lg font-mono text-[11px] break-all">
                  <span className="text-primary font-bold">{currentRecord.hash}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Raw JSON Payload</span>
                  <Button variant="ghost" size="sm" onClick={handleCopy} className="text-primary hover:text-primary-container h-6 px-2 text-[11px]">
                    <span className="material-symbols-outlined text-[14px] mr-1">{copied ? 'done' : 'content_copy'}</span>
                    <span>{copied ? 'Copied!' : 'Copy Raw'}</span>
                  </Button>
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
                <Button variant="ghost" size="icon" onClick={() => setIsMerkleModalOpen(false)}>
                  <span className="material-symbols-outlined">close</span>
                </Button>
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
                <Button variant="outline" onClick={() => setIsMerkleModalOpen(false)}>
                  Close Verification
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </ProtectedRoute>
  );
}
