import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description?: string;
  actions?: React.ReactNode;
  statusInfo?: React.ReactNode;
  badges?: { icon: string; label: string; subtext?: string; variant?: string }[];
}

export function PageHeader({ breadcrumbs, title, description, actions, statusInfo, badges }: PageHeaderProps) {
  return (
    <section className="w-full bg-surface-container-lowest px-layout-margin py-space-md shadow-sm border-b">
      <div className="max-w-[1680px] mx-auto flex flex-col gap-4">
        {/* Breadcrumbs & Status Flag */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index === 0 ? (
                  <Link href={crumb.href || "#"} className="hover:text-primary transition-colors flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">home</span>
                    {crumb.label}
                  </Link>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                    {crumb.href ? (
                      <Link href={crumb.href} className="hover:text-primary transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={index === breadcrumbs.length - 1 ? "font-normal text-muted-foreground" : "text-primary font-semibold"}>
                        {crumb.label}
                      </span>
                    )}
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
          {statusInfo && (
            <div className="flex items-center gap-2 bg-secondary/10 px-3 py-1 rounded-full">
              {statusInfo}
            </div>
          )}
        </div>

        {/* Main Section Header */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-primary tracking-tight">{title}</h1>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">
                {description}
              </p>
            )}
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-3">
                {badges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-secondary/10 border border-secondary/20">
                    {badge.icon && <span className="material-symbols-outlined text-[16px] text-secondary">{badge.icon}</span>}
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-secondary">{badge.label}</span>
                      {badge.subtext && <span className="text-[10px] text-muted-foreground">{badge.subtext}</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {actions && (
            <div className="flex flex-wrap items-center gap-3">
              {actions}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
