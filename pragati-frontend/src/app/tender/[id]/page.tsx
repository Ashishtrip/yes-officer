'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft } from 'lucide-react';
import { api } from '@/services/api';

export default function TenderDetail() {
  const router = useRouter();
  const params = useParams();
  const [user, setUser] = useState<any>(null);
  const [tender, setTender] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }
    const userStr = localStorage.getItem('user');
    if (userStr) setUser(JSON.parse(userStr));

    if (params.id) {
      api.getTenderById(params.id as string)
        .then(res => {
          if (res.success) {
            setTender(res.data.tender);
          }
        })
        .catch(err => console.error('Failed to load tender', err))
        .finally(() => setLoading(false));
    }
  }, [router, params.id]);

  if (!user || loading) return <div className="p-8">Loading Tender details...</div>;
  if (!tender) return <div className="p-8 text-red-500">Tender not found.</div>;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Yes, Officer</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-600">Welcome, {user.name}</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        <div>
          <Button variant="ghost" onClick={() => router.push('/')} className="mb-4">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Button>
          <h2 className="text-3xl font-bold tracking-tight">Tender: {tender.gem_tender_id}</h2>
          <p className="text-slate-500">{tender.title} - {tender.category}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Bidders</CardTitle>
            <CardDescription>Review the compliance scores and risk levels for each bidder.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bidder ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Compliance Score</TableHead>
                  <TableHead>Risk Level</TableHead>
                  <TableHead>Submitted At</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tender.bids && tender.bids.map((bid: any) => (
                  <TableRow key={bid.id}>
                    <TableCell className="font-medium">{bid.bidder.entity_name}</TableCell>
                    <TableCell>{bid.bidder.pan} / {bid.bidder.gstin}</TableCell>
                    <TableCell>
                      <span className={`font-bold ${bid.compliance_score >= 80 ? 'text-green-600' : bid.compliance_score >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {bid.compliance_score?.toFixed(1)}/100
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        bid.risk_level === 'LOW' ? 'default' : 
                        bid.risk_level === 'MEDIUM' ? 'secondary' : 
                        'destructive'
                      }>
                        {bid.risk_level}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(bid.created_at).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                      <Link href={`/bidder/${bid.id}`}>
                        <Button variant="outline" size="sm">Review Details</Button>
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
  );
}
