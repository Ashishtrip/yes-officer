'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-surface-container-high shadow-sm">
      <div className="h-14 w-full px-layout-gutter flex items-center justify-between gap-space-lg">
        <div className="flex items-center gap-space-md min-w-[280px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-title-sm text-title-sm text-primary leading-none font-bold">Pragati</span>
              <span className="px-1.5 py-0.5 rounded bg-surface-container text-primary font-label-sm text-[10px] uppercase font-bold tracking-wider">Gov Portal</span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight mt-0.5">GeM Integrated Compliance & Statutory Audit</span>
          </div>
        </div>
        <nav className="hidden xl:flex items-center h-full gap-space-lg" aria-label="Main Navigation">
          <Link href="/" className="h-full flex items-center px-space-xs font-title-sm text-title-sm text-primary border-b-2 border-primary transition-colors">Tenders &amp; Bids</Link>
          <Link href="/vigilance-analytics" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Vigilance &amp; Analytics</Link>
          <Link href="/compliance-rules" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Compliance Rules</Link>
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
          <div className="flex items-center gap-space-sm pl-space-xs cursor-pointer group" onClick={logout}>
            <div className="hidden lg:flex flex-col text-left">
              <span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">{user?.name || 'Officer'}</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">{user?.role || 'Procurement Officer'}</span>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface text-[18px] ml-1" title="Logout">logout</span>
          </div>
        </div>
      </div>
    </header>
  );
}
