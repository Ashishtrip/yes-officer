import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface KpiCardProps {
  title: React.ReactNode;
  value: React.ReactNode;
  icon: string;
  iconColor?: string;
  valueColor?: string;
  subtext?: React.ReactNode;
  cardClassName?: string;
  titleClassName?: string;
}

export function KpiCard({ 
  title, 
  value, 
  icon, 
  iconColor = "text-muted-foreground", 
  valueColor = "text-foreground", 
  subtext, 
  cardClassName = "",
  titleClassName = ""
}: KpiCardProps) {
  return (
    <Card className={cardClassName}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className={`text-sm font-medium uppercase tracking-wider ${titleClassName || 'text-muted-foreground'}`}>
          {title}
        </CardTitle>
        <span className={`material-symbols-outlined text-[22px] ${iconColor}`}>{icon}</span>
      </CardHeader>
      <CardContent>
        <div className={`text-3xl font-bold ${valueColor}`}>{value}</div>
        {subtext && (
          <div className="text-xs text-muted-foreground mt-1">
            {subtext}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
