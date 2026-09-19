"use client";

import React, { useState, useEffect } from "react";
import { api } from "@/services/api";
import Link from "next/link";
import PageHeader from '@/components/PageHeader';
import KpiCard from '@/components/KpiCard';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function UserManagementPage() {
  const [selectedUser, setSelectedUser] = useState<string | null>("rajesh");
  const [searchQuery, setSearchQuery] = useState('');
  
  // @ts-nocheck
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await api.getUsers();
        if (data && data.success) {
          const apiUsers = data.data.users.map((u: any) => ({
            id: u.id,
            name: u.name,
            initials: u.name.substring(0, 2).toUpperCase(),
            initialsTheme: "bg-primary/10 text-primary border-primary/20",
            verified: true,
            empId: `GOI-${u.id.substring(0, 5)}`,
            email: u.email,
            department: "Dynamic Department",
            role: u.role,
            roleDesc: "Dynamic Role",
            clearance: "Level-1",
            clearanceIcon: "shield",
            clearanceTheme: "bg-surface-container text-primary",
            dsc: "Class-3",
            dscExp: "Exp: 2027",
            status: "Active",
            statusTheme: "bg-secondary-container/40 text-on-secondary-container",
            statusDot: "bg-secondary",
            selected: false,
          }));
          setUsers(apiUsers);
          if (apiUsers.length > 0) {
            setSelectedUser(apiUsers[0].id);
          }
        }
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };
    fetchUsers();
  }, []);

  const displayUsers = users.filter(user => 
    !searchQuery || 
    user.name?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.email?.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.empId?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const currentUser = users.find(u => u.id === selectedUser) || users[0] || {};

  return (
    <ProtectedRoute>
      <main className="w-full pt-14 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          
          <PageHeader
            breadcrumbs={[
              { label: 'Portal Desk', href: '/' },
              { label: 'Role-Based Access Control (RBAC) & Sovereign Identity Fleet' }
            ]}
            title="User & Sovereign Access Control Ledger (RBAC)"
            badges={[
              { icon: 'gavel', label: 'GFR 2017 & CERT-In Compliant', variant: 'default' }
            ]}
            actions={
              <div className="flex items-center gap-space-sm flex-wrap self-start lg:self-center">
                <Button variant="outline" size="sm">
                  <span className="material-symbols-outlined text-[16px] text-primary mr-1">sync</span>
                  Sync NIC / Jan Parichay (API)
                </Button>
                <Button variant="outline" size="sm">
                  <span className="material-symbols-outlined text-[16px] text-secondary mr-1">picture_as_pdf</span>
                  Audit Access Matrix (PDF)
                </Button>
                <Button size="sm">
                  <span className="material-symbols-outlined text-[18px] mr-1">person_add</span>
                  + Provision Sovereign User
                </Button>
              </div>
            }
          />
          <div className="px-layout-gutter py-space-sm mb-4">
             <div className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-high text-primary font-label-sm font-semibold border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                NIC-IAM & Jan Parichay Federation v3.8
             </div>
             <p className="font-body-sm text-body-sm text-on-surface-variant max-w-4xl mt-2">
               Statutory identity federation, role assignment, DSC token binding, and granular access delegation for Procurement Officers, TEC Members, and CAG/CVC Vigilance Auditors under Digital India sovereign guidelines.
             </p>
          </div>

          {/* Executive Telemetry Ribbon (KPI Matrix) */}
          <div className="w-full px-layout-gutter pb-space-base">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-base">
              <KpiCard
                title="Total Provisioned Fleet"
                value="342"
                icon="badge"
                subtext="Sovereign Users"
                trend="28 Active Today"
                variant="primary"
              />
              <KpiCard
                title="Role Tier Distribution"
                value="4"
                icon="account_tree"
                subtext="Statutory Tiers"
                trend="48 PO • 164 TEC • 38 CAG/CVC"
                variant="default"
              />
              <KpiCard
                title="MFA & FIPS Assurance"
                value="100%"
                icon="security"
                subtext="Enforced"
                trend="15m Idle Cutoff"
                variant="secondary"
              />
              <KpiCard
                title="Pending Re-Validations"
                value="05"
                icon="history_edu"
                subtext="Transfers / Expiries"
                trend="3 Expiring <72h"
                variant="error"
              />
            </div>
          </div>

          {/* Primary Workspace Canvas (12-Col Split Workbench) */}
          <div className="w-full px-layout-gutter py-space-lg flex-1">
            <div className="flex flex-col xl:flex-row gap-space-lg items-start">
              
              {/* Left / Center Heavy Panel: Search, Filters, Master Table */}
              <div className="w-full xl:w-[68%] 2xl:w-[72%] flex flex-col gap-space-md">
                
                {/* Filter & Search Administration Control Toolbar */}
                <div className="bg-surface-container-lowest rounded-lg border border-surface-container-high p-space-md flex flex-col gap-space-md shadow-sm">
                  <div className="flex flex-col md:flex-row items-center gap-space-sm justify-between">
                    <div className="w-full md:flex-1 relative">
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
                      <Input
                        className="pl-9"
                        placeholder="Search officer name, Gov Email, Employee ID..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center gap-space-xs w-full md:w-auto">
                      <select className="bg-surface-container-low border border-outline-variant rounded px-space-sm py-2 text-body-sm text-on-surface focus:outline-none focus:border-primary">
                        <option value="">All Ministries / Wings</option>
                        <option value="heavy">Ministry of Heavy Industries</option>
                        <option value="health">Ministry of Health & Family Welfare</option>
                        <option value="railways">Ministry of Railways</option>
                      </select>
                      <select className="bg-surface-container-low border border-outline-variant rounded px-space-sm py-2 text-body-sm text-on-surface focus:outline-none focus:border-primary">
                        <option value="">All Security Clearances</option>
                        <option value="tier1">Secret / GFR 144(xi)</option>
                        <option value="confidential">Technical Confidential</option>
                        <option value="cag">Sovereign Oversight</option>
                      </select>
                      <Button variant="outline" size="icon" title="Export Current Filter Matrix">
                        <span className="material-symbols-outlined text-[18px]">file_download</span>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs border-t border-surface-container">
                    <div className="flex items-center gap-space-xs flex-wrap" role="tablist">
                      <Badge variant="default" className="cursor-pointer">All Fleet (342)</Badge>
                      <Badge variant="outline" className="cursor-pointer">Procurement Officers (48)</Badge>
                      <Badge variant="outline" className="cursor-pointer">TEC Evaluators (164)</Badge>
                      <Badge variant="outline" className="cursor-pointer">Statutory Auditors (38)</Badge>
                      <Badge variant="outline" className="cursor-pointer">System Custodians (12)</Badge>
                    </div>
                    <div className="flex items-center gap-space-xs text-label-sm text-on-surface-variant">
                      <span className="font-medium">Filter By State:</span>
                      <Badge variant="secondary">Active: 326</Badge>
                      <Badge variant="destructive">Suspended: 11</Badge>
                      <Badge variant="outline">Pending Re-bind: 5</Badge>
                    </div>
                  </div>
                </div>

                {/* Master Sovereign Identity & RBAC Ledger Table */}
                <div className="bg-surface-container-lowest rounded-lg border border-surface-container-high overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-surface-container-low">
                        <TableRow>
                          <TableHead className="w-10 text-center">
                            <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-0 cursor-pointer" />
                          </TableHead>
                          <TableHead>Officer / Sovereign Identity</TableHead>
                          <TableHead>Assigned Statutory Role</TableHead>
                          <TableHead>Clearance Jurisdiction</TableHead>
                          <TableHead>DSC & 2FA Attestation</TableHead>
                          <TableHead>Ledger Status</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {displayUsers.map((user) => (
                          <TableRow 
                            key={user.id} 
                            className={`cursor-pointer transition-colors ${selectedUser === user.id ? 'bg-surface-container-low/40 border-l-4 border-l-primary' : ''}`} 
                            onClick={() => setSelectedUser(user.id)}
                          >
                            <TableCell className="text-center align-top">
                              <input type="checkbox" className="rounded border-outline-variant text-primary focus:ring-0 cursor-pointer" checked={selectedUser === user.id} readOnly />
                            </TableCell>
                            <TableCell className="align-top">
                              <div className="flex items-center gap-space-sm">
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-title-sm font-bold border ${user.initialsTheme}`}>
                                  {user.initials}
                                </div>
                                <div className="flex flex-col min-w-0">
                                  <div className="flex items-center gap-1.5">
                                    <span className="font-title-sm text-on-surface font-semibold truncate">{user.name}</span>
                                    {user.verified && <span className="material-symbols-outlined text-primary text-[15px]" title="Government Verified Sovereign Identity">verified</span>}
                                  </div>
                                  <span className="font-label-sm text-on-surface-variant truncate">Emp: {user.empId} • {user.email}</span>
                                  <span className={`font-label-sm font-medium truncate ${selectedUser === user.id ? 'text-primary' : 'text-on-surface-variant'}`}>{user.department}</span>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell className="align-top">
                              <div className="flex flex-col">
                                <span className="font-semibold text-on-surface">{user.role}</span>
                                <span className="font-label-sm text-on-surface-variant">{user.roleDesc}</span>
                              </div>
                            </TableCell>
                            <TableCell className="align-top">
                              <Badge variant="outline" className={user.clearanceTheme}>
                                <span className="material-symbols-outlined text-[13px] mr-1">{user.clearanceIcon}</span> {user.clearance}
                              </Badge>
                            </TableCell>
                            <TableCell className="align-top">
                              <div className="flex flex-col gap-0.5">
                                <div className={`flex items-center gap-1 font-label-sm font-medium ${user.dsc === 'Revoked' ? 'text-error' : 'text-secondary'}`}>
                                  <span className="material-symbols-outlined text-[13px]">{user.dsc === 'Revoked' ? 'key_off' : 'lock'}</span> {user.dsc}
                                </div>
                                <span className="font-label-sm text-on-surface-variant">{user.dscExp}</span>
                              </div>
                            </TableCell>
                            <TableCell className="align-top">
                              <Badge variant={user.status === 'Active' ? 'secondary' : 'destructive'} className="uppercase">
                                <span className={`w-1.5 h-1.5 rounded-full ${user.statusDot} mr-1`}></span> {user.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right align-top">
                              <div className="flex items-center justify-end gap-1">
                                <Button variant="ghost" size="sm" className="h-8 px-2">Edit</Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8"><span className="material-symbols-outlined text-[18px]">history</span></Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8"><span className="material-symbols-outlined text-[18px]">more_vert</span></Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="bg-surface-container-low px-space-md py-space-sm border-t border-surface-container flex items-center justify-between text-on-surface-variant font-label-sm">
                    <span>Showing 1 to {displayUsers.length} of 342 Identities</span>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" disabled>Previous</Button>
                      <Button variant="outline" size="sm">Next</Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Panel: Identity Inspector & Policy Modeler (Dynamic based on selection) */}
              <div className="w-full xl:w-[32%] 2xl:w-[28%] flex flex-col gap-space-md" id="inspector-panel">
                {currentUser && currentUser.id ? (
                  <Card className="flex flex-col h-full sticky top-[5.5rem] border-surface-container-high shadow-sm overflow-hidden">
                    {/* Header */}
                    <CardHeader className="bg-surface-container-low border-b border-surface-container py-3 px-4 flex flex-row items-center justify-between">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-primary text-[20px]">manage_accounts</span>
                        <CardTitle className="text-title-sm font-bold uppercase tracking-tight m-0">Identity Inspector</CardTitle>
                      </div>
                      <span className="font-mono text-[10px] text-on-surface-variant">LEDGER-LOCK: ON</span>
                    </CardHeader>

                    <CardContent className="p-0 flex-1 overflow-y-auto flex flex-col">
                      <div className="p-4 flex flex-col gap-4">
                        {/* Identity Profile Badge */}
                        <div className="flex flex-col items-center text-center pb-4 border-b border-surface-container">
                          <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-headline-lg font-bold border-2 border-primary/20 mb-3 relative">
                            {currentUser.initials}
                            <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-secondary border-2 border-surface-container-lowest"></span>
                          </div>
                          <h3 className="font-headline-md text-headline-md text-on-surface font-bold">{currentUser.name}</h3>
                          <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{currentUser.email}</span>
                          <div className="mt-2 inline-flex flex-wrap items-center justify-center gap-1.5">
                            <Badge variant="secondary">{currentUser.empId}</Badge>
                            <Badge variant="outline">{currentUser.role}</Badge>
                          </div>
                        </div>

                        {/* Cryptographic & Binding Status */}
                        <div className="flex flex-col gap-space-xs">
                          <h4 className="font-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Authentication & Key Binding</h4>
                          <div className="p-space-sm bg-surface-container-low rounded border border-surface-container">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-1.5 text-secondary font-label-md">
                                <span className="material-symbols-outlined text-[16px]">fingerprint</span>
                                Class-3 DSC Active
                              </div>
                              <span className="font-mono text-[10px] text-on-surface-variant">e-Mudhra Ltd</span>
                            </div>
                            <div className="flex flex-col gap-1 font-label-sm text-on-surface">
                              <div className="flex justify-between">
                                <span className="text-on-surface-variant">Serial</span>
                                <span className="font-mono">7A 89 B2 14 F0 9C</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-on-surface-variant">Valid Till</span>
                                <span>14-Oct-2027</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-on-surface-variant">Hardware</span>
                                <span>USB Crypto Token (FIPS 140-2)</span>
                              </div>
                            </div>
                            <Button variant="outline" className="w-full mt-3 h-8 text-primary">Re-Validate Certificate Chain</Button>
                          </div>
                        </div>

                        {/* Active Jurisdiction Matrix */}
                        <div className="flex flex-col gap-space-xs">
                          <div className="flex items-center justify-between">
                            <h4 className="font-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Active Jurisdiction Vectors</h4>
                            <span className="text-[10px] bg-primary-container text-on-primary-container px-1.5 rounded font-bold">144(xi) Enabled</span>
                          </div>
                          <ul className="flex flex-col gap-1.5 font-label-sm">
                            <li className="flex items-start gap-2 p-1.5 rounded hover:bg-surface-container-low">
                              <span className="material-symbols-outlined text-primary text-[16px]">account_balance</span>
                              <div className="flex flex-col">
                                <span className="text-on-surface font-semibold">Financial Bid Decryption</span>
                                <span className="text-on-surface-variant font-body-sm text-[11px]">Threshold: Uncapped (Tier-1)</span>
                              </div>
                            </li>
                            <li className="flex items-start gap-2 p-1.5 rounded hover:bg-surface-container-low">
                              <span className="material-symbols-outlined text-primary text-[16px]">gavel</span>
                              <div className="flex flex-col">
                                <span className="text-on-surface font-semibold">Contract Award & LoA Issuance</span>
                                <span className="text-on-surface-variant font-body-sm text-[11px]">Requires Dual-Signature (Finance)</span>
                              </div>
                            </li>
                            <li className="flex items-start gap-2 p-1.5 rounded hover:bg-surface-container-low">
                              <span className="material-symbols-outlined text-primary text-[16px]">block</span>
                              <div className="flex flex-col">
                                <span className="text-on-surface font-semibold">Bidder Suspension (L1/L2)</span>
                                <span className="text-on-surface-variant font-body-sm text-[11px]">Temporary Debarment (Up to 6 Months)</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Critical Actions Footer */}
                      <div className="p-4 border-t border-surface-container-high bg-surface-container-low flex flex-col gap-2 mt-auto">
                        <Button className="w-full flex items-center justify-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px]">edit_document</span> Modify Access Policies
                        </Button>
                        <Button variant="destructive" className="w-full flex items-center justify-center gap-1.5">
                          <span className="material-symbols-outlined text-[18px]">emergency</span> Suspend Identity & Token
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="flex flex-col h-full sticky top-[5.5rem] items-center justify-center p-space-lg text-center text-on-surface-variant border-surface-container-high">
                    <span className="material-symbols-outlined text-[48px] text-surface-container-highest mb-4">account_box</span>
                    <h3 className="font-title-sm text-title-sm font-semibold mb-2">Select a Sovereign Identity</h3>
                    <p className="font-body-sm text-body-sm max-w-[250px]">Choose an officer from the ledger to view their DSC bindings, active jurisdiction matrix, and security clearance details.</p>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </ProtectedRoute>
  );
}
