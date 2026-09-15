'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'gov' | 'sso' | 'dsc'>('gov');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('rajesh.kumar92@nic.in');
  const [password, setPassword] = useState('GovSecure2025*#!');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:4000/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Login failed');
      }

      setTimeout(() => {
        login(data.data.token, data.data.user);
        router.push('/');
      }, 1000);
      
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
      setLoading(false);
    }
  };

  return (
    <>
      {error && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-error text-on-error px-4 py-2 rounded-md shadow-md">
          {error}
        </div>
      )}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-surface-container-high"><div className="h-14 w-full px-layout-gutter flex items-center justify-between gap-space-lg"><div className="flex items-center gap-space-md min-w-[280px]"><img alt="Yes Officer Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1XF1PZsUoMowWpDMDKHX4d0Uh2TzyN0ieKoXRAg9eWo0KUOJEYX9ay-0FikqKi6SCy-s2qdnXKKSVBN1U3cGfFxFZF0ukpbfXY2DXXHGRuTayL8HUzuRTRsVXDXLBNUvCkLJ45-5sgvvJPij2xXTdFwemSujw5XjPH5QUdV8NmgQmyup3OjnHPFKO06ETugegA2e_yc3BJ49NnxvbQ_j3UdtcbgijRrC1sPHCXBUxBBvQe1hRNlh5IrYBas"/><div className="flex flex-col"><span className="font-title-sm text-title-sm text-primary leading-none">Yes Officer</span><span className="font-label-sm text-label-sm text-on-surface-variant leading-tight mt-0.5">GeM Integrated Compliance Suite</span></div></div><nav className="hidden xl:flex items-center h-full gap-space-lg" data-active-classes="text-primary font-title-sm border-b-2 border-primary"><a className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="tenders-bids" href="#">Tenders &amp; Bids</a><a className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="compliance-rules" href="#">Compliance Rules</a><a className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="portal-connectors" href="#">Portal Connectors</a><a className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="audit-logs" href="#">Audit Logs</a></nav><div className="flex items-center gap-space-md ml-auto"><div className="hidden md:flex items-center bg-surface-container-low rounded-xl px-space-md py-1 border border-outline-variant focus-within:border-primary focus-within:bg-surface-container-lowest transition-colors w-72"><span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-space-xs">search</span><input className="bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder-on-surface-variant w-full" placeholder="Search tenders, GSTIN, PAN... (Ctrl+K)" type="text"/></div><button aria-label="Notifications" className="relative p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">notifications</span><span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span></button><button aria-label="Help and Support" className="p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">help</span></button><div className="h-6 w-px bg-surface-container-high mx-space-2xs"></div><div className="flex items-center gap-space-sm pl-space-xs cursor-pointer group"><img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0gElgbgal4gd4SIMy3OwrKEcZe588flOOdKLPMe4KQ8SoeCQsdkrar6ypZ2bugDnd-W1CEEwh6fZA0UeQvpJYK4xZQmhS5NS9VGrL2hCUUlpfTD9A4ONwukYNR9GdwE_uDTQ7SBkE4ZFxXZMguxQxl-QG5ChJzn0KbJqTwPV0WnU1JFroUwLdTwGYDpAy41oufwfBXZlsuDZK3oN7EQKVs24q22rliyszAmfiQaCV5xMLweN3IuNKsQ"/><div className="hidden lg:flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">Rajesh Kumar, IAS</span><span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Senior Procurement Officer</span></div><span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface text-[18px]">expand_more</span></div></div></div></header>
<main className="w-full pt-14 bg-surface min-h-screen">
<div className="flex flex-col w-full font-body-md text-body-md text-on-surface">
{/* Sovereign Top Tricolor Border Strip */}
<div className="w-full h-1.5 flex flex-row">
<div className="flex-1 bg-[#ff9933]"></div>
<div className="flex-1 bg-surface-container-lowest"></div>
<div className="flex-1 bg-[#138808]"></div>
</div>
{/* Government Institutional Identification Banner */}
<aside aria-label="Official Ministry Bar" className="w-full bg-surface-container-low px-layout-gutter py-space-xs border-b border-outline-variant/30 flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-space-md flex-wrap">
<div className="flex items-center gap-space-xs">
<span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="font-semibold text-primary tracking-wide uppercase">भारत सरकार | Government of India</span>
</div>
<span className="text-outline-variant">|</span>
<span>Ministry of Finance &amp; Ministry of Commerce and Industry</span>
<span className="text-outline-variant">|</span>
<span className="text-on-surface font-medium">Government e-Marketplace (GeM) Sovereign Compliance Gateway</span>
</div>
<div className="flex items-center gap-space-lg flex-wrap">
<div className="flex items-center gap-space-xs bg-error-container/40 text-on-error-container px-space-sm py-0.5 rounded">
<span className="material-symbols-outlined text-[14px]">gavel</span>
<span className="tracking-wider uppercase font-semibold">Restricted Access • Authorized Personnel Only</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="text-on-surface-variant cursor-pointer hover:text-primary">A-</span>
<span className="text-on-surface-variant cursor-pointer hover:text-primary">A</span>
<span className="text-on-surface-variant cursor-pointer hover:text-primary font-semibold">A+</span>
<span className="text-outline-variant">|</span>
<span className="cursor-pointer hover:text-primary">English</span>
<span className="text-outline-variant">|</span>
<span className="cursor-pointer hover:text-primary">हिन्दी</span>
</div>
</div>
</aside>
{/* Main Split Layout Container */}
<div className="w-full max-w-7xl mx-auto px-layout-gutter py-space-xl grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/* LEFT COLUMN: Authority, Governance & Institutional Trust Briefing (~42%) */}
<div className="lg:col-span-5 flex flex-col gap-space-lg">
{/* Authority Seal & Platform Title */}
<div className="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm border border-outline-variant/40 relative overflow-hidden">
<div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-primary-container/5 pointer-events-none"></div>
<div className="flex items-center gap-space-md mb-space-md">
<div className="w-12 h-12 rounded bg-primary-container flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-[28px]">verified_user</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-headline-md text-headline-md text-primary font-bold tracking-tight">Yes Officer</span>
<span className="bg-primary/10 text-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded font-semibold uppercase tracking-wider">NIC-GeM v4.2</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Autonomous Public Procurement Scrutiny Architecture</span>
</div>
</div>
<p className="text-on-surface font-body-sm text-body-sm leading-relaxed mb-space-base">
          Statutory computational auditing suite for Central &amp; State Procurement Committees. Integrates live portal verifications against General Financial Rules (GFR 2017), DPIIT guidelines, and forensic anti-collusion checks.
        </p>
{/* Statutory Certifications Pills */}
<div className="grid grid-cols-2 gap-space-xs pt-space-xs border-t border-outline-variant/30">
<div className="flex items-center gap-space-xs p-1.5 bg-surface-container-low rounded">
<span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
<span className="font-label-sm text-label-sm text-on-surface">MeitY MeghRaj Node</span>
</div>
<div className="flex items-center gap-space-xs p-1.5 bg-surface-container-low rounded">
<span className="material-symbols-outlined text-secondary text-[16px]">lock</span>
<span className="font-label-sm text-label-sm text-on-surface">DPDP Act 2023 Shield</span>
</div>
<div className="flex items-center gap-space-xs p-1.5 bg-surface-container-low rounded">
<span className="material-symbols-outlined text-secondary text-[16px]">token</span>
<span className="font-label-sm text-label-sm text-on-surface">Class-3 DSC / FIPS 140</span>
</div>
<div className="flex items-center gap-space-xs p-1.5 bg-surface-container-low rounded">
<span className="material-symbols-outlined text-secondary text-[16px]">fingerprint</span>
<span className="font-label-sm text-label-sm text-on-surface">STQC Audited Engine</span>
</div>
</div>
</div>
{/* Real-Time Automated Statutory Engine Status Cards */}
<div className="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm border border-outline-variant/40 flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<span className="font-title-sm text-title-sm text-on-surface flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[18px]">rule_folder</span>
            Statutory Rule Pipeline Status
          </span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary bg-secondary-container/40 px-2 py-0.5 rounded font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> OPERATIONAL
          </span>
</div>
<div className="space-y-2.5">
{/* Rule 144(xi) */}
<div className="p-space-sm rounded bg-surface-container-low flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px] mt-0.5">shield</span>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-semibold text-on-surface truncate">GFR Rule 144(xi) Border Filter</span>
<span className="text-secondary font-label-sm text-label-sm font-semibold">Active Check</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-tight mt-0.5">
                Automated land-border sharing nation beneficial ownership parsing via CBDT &amp; MCA registries.
              </p>
</div>
</div>
{/* Cross Validation */}
<div className="p-space-sm rounded bg-surface-container-low flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px] mt-0.5">account_balance</span>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-semibold text-on-surface truncate">GSTN / Udyam / PAN Bridges</span>
<span className="text-secondary font-label-sm text-label-sm font-semibold">Sync 0.4s</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-tight mt-0.5">
                Continuous reconciliation of turnover thresholds, MSME reservation, and tax status.
              </p>
</div>
</div>
{/* Document Forensics */}
<div className="p-space-sm rounded bg-surface-container-low flex items-start gap-space-sm">
<span className="material-symbols-outlined text-primary text-[18px] mt-0.5">document_scanner</span>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-semibold text-on-surface truncate">Forensic Metadata &amp; Tamper Scan</span>
<span className="text-secondary font-label-sm text-label-sm font-semibold">SHA-256</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-tight mt-0.5">
                Font forgery, metadata alteration, and digital stamp integrity verified across all bidder submissions.
              </p>
</div>
</div>
</div>
{/* Live Server Infrastructure Status */}
<div className="pt-space-xs border-t border-outline-variant/30 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span>NIC Delhi-North Grid</span>
</div>
<span className="font-tabular-num text-tabular-num">mTLS 1.3 Strict • Zero-Trust ID</span>
<span className="font-tabular-num text-tabular-num">99.98% Latency-Free</span>
</div>
</div>
{/* Legal Warning Section 43/66 IT Act */}
<div className="p-space-md rounded-lg bg-surface-container-low text-on-surface-variant border border-outline-variant/40 flex items-start gap-space-sm">
<span className="material-symbols-outlined text-error text-[20px] mt-0.5 shrink-0">policy</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold tracking-wide">STATUTORY WARNING • IT ACT 2000</span>
<p className="font-body-sm text-body-sm text-[12px] leading-relaxed text-on-surface-variant mt-0.5">
            This platform contains confidential Sovereign Procurement records. Unauthorized attempts to bypass authentication, harvest bidder bids, or forge digital signatures are non-bailable offences punishable under Sections 43, 66 &amp; 72 of the IT Act 2000 with imprisonment up to 3 years and financial penalties.
          </p>
</div>
</div>
</div>
{/* RIGHT COLUMN: Multi-Modal Sovereign Sign-In Card (~58%) */}
<div className="lg:col-span-7">
<div className="bg-surface-container-lowest rounded-lg shadow-sm border border-outline-variant/50 p-space-xl flex flex-col">
{/* Header & Classification */}
<div className="flex items-start justify-between pb-space-md border-b border-outline-variant/30 gap-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<h1 className="font-headline-lg text-headline-lg text-primary font-bold">Officer Secure Sign-In</h1>
<span className="material-symbols-outlined text-primary text-[22px]">security</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Access evaluation workspaces, tender scrutiny workbench, and tender committee ledgers.
            </p>
</div>
<div className="hidden sm:flex flex-col items-end">
<span className="font-label-sm text-label-sm text-on-surface-variant">Clearance Level</span>
<span className="bg-surface-container-high px-2 py-0.5 rounded font-label-sm text-label-sm text-primary font-bold">GOV-CONFIDENTIAL</span>
</div>
</div>
{/* Authentication Tabs Segmented Control */}
<div className="mt-space-lg flex p-1 bg-surface-container-low rounded-lg border border-outline-variant/40 gap-1" role="tablist">
<button aria-selected="true" className={`flex-1 py-2 px-space-sm rounded-md font-label-md text-label-md flex items-center justify-center gap-1.5 transition-all ${activeTab === "gov" ? "bg-surface-container-lowest text-primary shadow-sm font-bold border border-outline-variant/30" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest/60"}`} onClick={() => setActiveTab("gov")}  role="tab">
<span className="material-symbols-outlined text-[16px]">badge</span>
<span>Gov ID / NIC Mail</span>
</button>
<button aria-selected="false" className={`flex-1 py-2 px-space-sm rounded-md font-label-md text-label-md flex items-center justify-center gap-1.5 transition-all ${activeTab === "sso" ? "bg-surface-container-lowest text-primary shadow-sm font-bold border border-outline-variant/30" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest/60"}`} onClick={() => setActiveTab("sso")}  role="tab">
<span className="material-symbols-outlined text-[16px]">hub</span>
<span>Jan Parichay SSO</span>
</button>
<button aria-selected="false" className={`flex-1 py-2 px-space-sm rounded-md font-label-md text-label-md flex items-center justify-center gap-1.5 transition-all ${activeTab === "dsc" ? "bg-surface-container-lowest text-primary shadow-sm font-bold border border-outline-variant/30" : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-lowest/60"}`} onClick={() => setActiveTab("dsc")}  role="tab">
<span className="material-symbols-outlined text-[16px]">usb</span>
<span>DSC Token (Class 3)</span>
</button>
</div>
{/* TAB CONTENT 1: Gov ID / NIC Email (Standard Primary Flow) */}

    {activeTab === 'gov' && (
        <div className="flex flex-col gap-space-base mt-space-lg" >
{/* Fast Access Jan Parichay Callout */}
<div className="p-space-sm rounded-md bg-surface-container-low/70 border border-outline-variant/30 flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">account_balance</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Centralized MeriPehchan / Jan Parichay SSO</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Recommended for Ministry Secretaries, DG, and State Nodal Heads</span>
</div>
</div>
<button className="text-primary hover:text-primary-container font-label-sm text-label-sm font-semibold underline shrink-0"  type="button">
              One-Click SSO
            </button>
</div>
{/* Officer Identifier Input */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between" htmlFor="officer-id">
<span>Government Officer ID / Official Email</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-normal">Format: <code className="font-tabular-num">name@gov.in</code> or <code className="font-tabular-num">GEM-PO-XXXX</code></span>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-outline text-[20px] pointer-events-none">alternate_email</span>
<input className="w-full pl-10 pr-space-md py-2.5 rounded bg-surface-container-lowest border border-outline text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" id="officer-id" placeholder="Enter NIC, Gov.in or Parichay ID" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
<span className="material-symbols-outlined absolute right-3 text-secondary text-[20px]" title="Domain verified as Sovereign NIC node">check_circle</span>
</div>
</div>
{/* Password Input */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between" htmlFor="officer-pass">
<span>Security Password</span>
<a className="font-label-sm text-label-sm text-primary hover:underline" href="#">Forgot Officer Password?</a>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-outline text-[20px] pointer-events-none">lock</span>
<input className="w-full pl-10 pr-10 py-2.5 rounded bg-surface-container-lowest border border-outline text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" id="officer-pass" placeholder="Enter sovereign officer passkey" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}/>
<button className="absolute right-3 text-outline hover:text-on-surface"  type="button">
<span className="material-symbols-outlined text-[20px]" onClick={() => setShowPassword(!showPassword)}>visibility</span>
</button>
</div>
</div>
{/* 2FA Method Selector */}
<div className="flex flex-col gap-1.5 pt-space-xs">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between">
<span>Two-Factor Authentication (2FA Channel)</span>
<span className="font-label-sm text-label-sm text-secondary font-medium">NIC Two-Factor Enforced</span>
</label>
<div className="grid grid-cols-3 gap-space-sm">
<label className="flex items-center gap-2 p-2 rounded border border-primary bg-primary-fixed/30 cursor-pointer">
<input defaultChecked className="accent-primary" name="twofa" type="radio"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-primary">Sandes App</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Gov Instant Net</span>
</div>
</label>
<label className="flex items-center gap-2 p-2 rounded border border-outline-variant/60 bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer">
<input className="accent-primary" name="twofa" type="radio"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Aadhaar OTP</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">UIDAI Mobile</span>
</div>
</label>
<label className="flex items-center gap-2 p-2 rounded border border-outline-variant/60 bg-surface-container-lowest hover:bg-surface-container-low cursor-pointer">
<input className="accent-primary" name="twofa" type="radio"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Official SMS</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">+91-98****4412</span>
</div>
</label>
</div>
</div>
{/* OTP Input Segmented Cells */}
<div className="flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="otp-1">Enter 6-Digit One-Time Password</label>
<div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
<span>Resend OTP in</span>
<span className="font-tabular-num text-tabular-num font-semibold text-primary" id="otp-timer">01:42</span>
</div>
</div>
<div className="grid grid-cols-6 gap-2 sm:gap-3">
<input className="h-11 text-center font-headline-md text-headline-md font-bold rounded bg-surface-container-lowest border border-outline text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" maxLength={1} type="text" value="8"/>
<input className="h-11 text-center font-headline-md text-headline-md font-bold rounded bg-surface-container-lowest border border-outline text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" maxLength={1} type="text" value="4"/>
<input className="h-11 text-center font-headline-md text-headline-md font-bold rounded bg-surface-container-lowest border border-outline text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" maxLength={1} type="text" value="1"/>
<input className="h-11 text-center font-headline-md text-headline-md font-bold rounded bg-surface-container-lowest border border-outline text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" maxLength={1} type="text" value="9"/>
<input className="h-11 text-center font-headline-md text-headline-md font-bold rounded bg-surface-container-lowest border border-outline text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" maxLength={1} placeholder="•" type="text"/>
<input className="h-11 text-center font-headline-md text-headline-md font-bold rounded bg-surface-container-lowest border border-outline text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" maxLength={1} placeholder="•" type="text"/>
</div>
<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
<span>Didn&apos;t receive code?</span>
<div className="flex items-center gap-space-md">
<button className="text-primary hover:underline font-semibold" type="button">Request Sandes Push</button>
<span>•</span>
<button className="text-primary hover:underline font-semibold flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">phone_in_talk</span> Voice Call OTP
                </button>
</div>
</div>
</div>
{/* Captcha Section */}
<div className="p-space-md bg-surface-container-low rounded border border-outline-variant/50 flex flex-col sm:flex-row items-center gap-space-md">
<div className="flex items-center gap-2">
<div className="relative bg-surface-container-highest px-4 py-2 rounded select-none tracking-widest text-primary font-headline-md text-headline-md font-bold italic line-through decoration-primary/40 shadow-inner">
                7 N K 9 M 2
              </div>
<div className="flex flex-col gap-1">
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant" title="Refresh Captcha" type="button">
<span className="material-symbols-outlined text-[18px]">cached</span>
</button>
<button className="p-1 rounded hover:bg-surface-container-high text-on-surface-variant" title="Audio Captcha Challenge" type="button">
<span className="material-symbols-outlined text-[18px]">volume_up</span>
</button>
</div>
</div>
<div className="flex-1 w-full">
<input className="w-full px-space-md py-2 rounded bg-surface-container-lowest border border-outline font-body-sm text-body-sm uppercase tracking-wider focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" placeholder="Enter characters seen above" type="text"/>
</div>
</div>
{/* Terms & Sovereign Confirmation Checkbox */}
<div className="flex items-start gap-space-sm pt-space-2xs">
<input defaultChecked className="mt-1 accent-primary rounded" id="audit-ack" type="checkbox"/>
<label className="font-body-sm text-body-sm text-on-surface-variant text-[12px] leading-snug" htmlFor="audit-ack">
              I acknowledge that I am accessing this portal strictly within my official capacity under Rule 144 of the General Financial Rules (GFR 2017). My IP address <code className="font-tabular-num text-on-surface">10.118.24.89 (NIC-VPN)</code> and session actions are recorded in immutable SHA-256 audit trails.
            </label>
</div>
{/* Sign-In CTA Button */}
<button className="w-full py-3 px-space-lg rounded-md bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold tracking-wide flex items-center justify-center gap-space-sm transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"  type="button" onClick={handleLogin} disabled={loading}>
<span className="material-symbols-outlined text-[20px]">encrypted</span>
<span>{loading ? "Authenticating..." : "Authenticate & Launch Scrutiny Desk"}</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>

    )}
    {activeTab === 'sso' && (
        <div className="flex flex-col gap-space-lg mt-space-lg" >
<div className="text-center p-space-lg bg-surface-container-low rounded-lg border border-outline-variant/40 flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-surface-container-lowest shadow-sm flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[36px]">verified_user</span>
</div>
<h2 className="font-title-sm text-title-sm text-on-surface font-bold">Jan Parichay (National Single Sign-On)</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mt-1 mb-space-lg">
              Authenticate via the unified sovereign identity engine supporting Central Government, State Nodal Officers, and Public Sector Enterprises with mapped role rights.
            </p>
<button className="w-full max-w-sm py-3 px-space-md rounded bg-[#1e3a8a] hover:bg-[#172554] text-white font-label-md text-label-md font-bold flex items-center justify-center gap-space-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">login</span>
<span>Proceed to Jan Parichay Sovereign Portal</span>
</button>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-space-sm">Redirects to auth.meripehchan.gov.in (TLS 1.3 Certified)</span>
</div>
<div className="border-t border-outline-variant/30 pt-space-md grid grid-cols-3 gap-space-sm text-center">
<div className="p-space-sm bg-surface-container-low rounded">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Integrated With</span>
<span className="font-label-md text-label-md font-semibold text-primary">e-Office v7</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Single Sign-On</span>
<span className="font-label-md text-label-md font-semibold text-primary">MeriPehchan</span>
</div>
<div className="p-space-sm bg-surface-container-low rounded">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Compliance Ledger</span>
<span className="font-label-md text-label-md font-semibold text-secondary">Synchronized</span>
</div>
</div>
</div>

    )}
    {activeTab === 'dsc' && (
        <div className="flex flex-col gap-space-base mt-space-lg" >
<div className="p-space-md rounded bg-surface-container-low border border-outline-variant/40 flex items-start gap-space-md">
<span className="material-symbols-outlined text-primary text-[28px] mt-0.5">token</span>
<div className="flex-1">
<h2 className="font-title-sm text-title-sm text-on-surface font-semibold">Class-3 Digital Signature Certificate (DSC)</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant text-[13px] mt-0.5">
                Physical cryptographic USB token required for Final Financial Bid Evaluation and Committee Recommendation signing.
              </p>
</div>
</div>
{/* Token Detection Widget */}
<div className="p-space-md rounded-lg border border-secondary/40 bg-secondary-container/20 flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-3 h-3 rounded-full bg-secondary animate-ping"></span>
<div>
<span className="font-label-md text-label-md font-bold text-on-surface block">Token Attached: ePass2003 Auto</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Serial: PKI-NIC-IN-88921-99 • CCA India Certified</span>
</div>
</div>
<span className="bg-secondary/15 text-secondary font-label-sm text-label-sm px-2 py-1 rounded font-bold uppercase">Ready</span>
</div>
{/* DSC User Info */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold" htmlFor="dsc-cert-select">Select Digital Certificate</label>
<select className="w-full px-space-md py-2.5 rounded bg-surface-container-lowest border border-outline text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary" id="dsc-cert-select">
<option>RAJESH KUMAR (CCA ID: 2023-88190-IN, Valid Till: Nov 2026)</option>
<option disabled={true}>DIRECTOR GENERAL PROCUREMENT (Token Detached)</option>
</select>
</div>
{/* Token PIN */}
<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface font-semibold flex items-center justify-between" htmlFor="token-pin">
<span>Token Hardware User PIN</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">3 Attempts Remaining</span>
</label>
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-outline text-[20px] pointer-events-none">password</span>
<input className="w-full pl-10 pr-space-md py-2.5 rounded bg-surface-container-lowest border border-outline text-on-surface font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" id="token-pin" placeholder="Enter 6-8 digit crypto token PIN" type={showPassword ? "text" : "password"}/>
</div>
</div>
<button className="w-full py-3 px-space-lg rounded-md bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold tracking-wide flex items-center justify-center gap-space-sm transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">fingerprint</span>
<span>Sign Challenge &amp; Open Secured Session</span>
</button>
</div>

    )}
    {/* Helpdesk & Session Rules Footer */}
<div className="mt-space-lg pt-space-md border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-space-sm text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-primary">support_agent</span>
<span>GeM Officer Desk: <strong className="text-on-surface font-tabular-num font-semibold">1800-419-3436</strong> (Ext: 402)</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-outline">timer</span>
<span>Auto-logout after <strong className="text-on-surface font-tabular-num font-semibold">15 mins</strong> idle</span>
</div>
</div>
</div>
</div>
</div>
{/* Sovereign Verification & Portal Metadata Strip */}

</div>

<footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 py-space-md px-layout-gutter mt-auto">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-body-sm text-[12px]">
<div className="flex items-center gap-space-md flex-wrap justify-center md:justify-start">
<span>© 2025 Yes Officer Compliance Systems • Integrated with GeM SPV</span>
<span>•</span>
<a className="hover:text-primary underline" href="#">DPDP 2023 Compliance Matrix</a>
<span>•</span>
<a className="hover:text-primary underline" href="#">GFR 2017 Rules Compendium</a>
<span>•</span>
<a className="hover:text-primary underline" href="#">CERT-In Procurement Circulars</a>
</div>
<div className="flex items-center gap-space-md">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-[16px]">cloud_done</span>
<span>NIC MeghRaj Tier-IV Sovereign Cloud</span>
</span>
<span>•</span>
<span className="font-tabular-num">Build ID: 2025.04-STQC-PROD</span>
</div>
</div>
</footer>
</main>
    </>
  );
}
