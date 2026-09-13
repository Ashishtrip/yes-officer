'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { api } from '@/services/api';
import { useAuth } from '@/context/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const [tenders, setTenders] = useState<any[]>([]);
  const [loadingTenders, setLoadingTenders] = useState(true);

  useEffect(() => {
    // Fetch tenders
    api.getTenders()
      .then(res => {
        if (res.success) {
          setTenders(res.data.tenders);
        }
      })
      .catch(err => {
        console.error('Failed to load tenders', err);
      })
      .finally(() => {
        setLoadingTenders(false);
      });
  }, []);

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-slate-50">
        <header className="bg-white border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Yes, Officer</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-600">Welcome, {user?.name} ({user?.role})</span>
              <Button variant="outline" size="sm" onClick={logout}>Logout</Button>
            </div>
          </div>
        </header>
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-slate-500">Overview of active tenders and bids.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Tenders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bids Processed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">High Risk Bidders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">3</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Tenders</CardTitle>
            <CardDescription>Manage and review bids for recent tenders.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tender ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tenders.map((tender) => (
                  <TableRow key={tender.id}>
                    <TableCell className="font-medium">{tender.gem_tender_id}</TableCell>
                    <TableCell>{tender.title}</TableCell>
                    <TableCell>{tender.category}</TableCell>
                    <TableCell>
                      <Badge variant={tender.status === 'ACTIVE' ? 'default' : 'secondary'}>
                        {tender.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link href={`/tender/${tender.id}`}>
                        <Button variant="ghost" size="sm">View {tender._count?.bids || 0} Bidders</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
    </ProtectedRoute>
  );
}
