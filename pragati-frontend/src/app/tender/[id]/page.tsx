'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft } from 'lucide-react';

const mockBidders = [
  { id: 'BDR-001', name: 'ABC Constructions', score: 95, risk: 'LOW', submittedAt: '2023-10-15' },
  { id: 'BDR-002', name: 'XYZ Builders Ltd', score: 65, risk: 'MEDIUM', submittedAt: '2023-10-16' },
  { id: 'BDR-003', name: 'Fake Corp', score: 20, risk: 'CRITICAL', submittedAt: '2023-10-17' },
];

export default function TenderDetail() {
  const router = useRouter();
  const params = useParams();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }
    const userStr = localStorage.getItem('user');
    if (userStr) setUser(JSON.parse(userStr));
  }, [router]);

  if (!user) return <div className="p-8">Loading...</div>;

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
          <h2 className="text-3xl font-bold tracking-tight">Tender: {params.id}</h2>
          <p className="text-slate-500">List of bidders and their compliance overview.</p>
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
                {mockBidders.map((bidder) => (
                  <TableRow key={bidder.id}>
                    <TableCell className="font-medium">{bidder.id}</TableCell>
                    <TableCell>{bidder.name}</TableCell>
                    <TableCell>
                      <span className={`font-bold ${bidder.score >= 80 ? 'text-green-600' : bidder.score >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {bidder.score}/100
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={
                        bidder.risk === 'LOW' ? 'default' : 
                        bidder.risk === 'MEDIUM' ? 'secondary' : 
                        'destructive'
                      }>
                        {bidder.risk}
                      </Badge>
                    </TableCell>
                    <TableCell>{bidder.submittedAt}</TableCell>
                    <TableCell className="text-right">
                      <Link href={`/bidder/${bidder.id}`}>
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
