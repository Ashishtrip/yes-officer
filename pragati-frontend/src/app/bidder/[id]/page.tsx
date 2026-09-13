'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ChevronLeft, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

const mockChecks = [
  { id: 1, type: 'MCA_STATUS', status: 'VERIFIED', details: 'Company is ACTIVE.' },
  { id: 2, type: 'GST_FILING', status: 'MISMATCH', details: 'No GST return filed for last 2 months.' },
  { id: 3, type: 'EPFO_COMPLIANCE', status: 'FAILED', details: 'EPFO challan not found for given PAN.' },
];

export default function BidderDetail() {
  const router = useRouter();
  const params = useParams();
  const [user, setUser] = useState<any>(null);
  const [remarks, setRemarks] = useState('');

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

  const handleDecision = (decision: 'APPROVED' | 'REJECTED') => {
    // In real app, call API
    alert(`Bidder ${params.id} has been ${decision}.\nRemarks: ${remarks}`);
    router.back();
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
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
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back to Tender
          </Button>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Bidder: {params.id}</h2>
              <p className="text-slate-500">Comprehensive compliance report and AI recommendation.</p>
            </div>
            <Badge variant="destructive" className="text-lg py-1 px-4">Score: 20/100 (CRITICAL)</Badge>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* AI Recommendation */}
          <Card className="border-blue-200 shadow-sm md:col-span-2">
            <CardHeader className="bg-blue-50/50">
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" /> AI Recommendation
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-slate-700 text-lg">
                Critical compliance failures detected (1 failures, 1 mismatches). Proceed with caution or disqualify.
              </p>
            </CardContent>
          </Card>

          {/* Verification Checks */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Verification Checks</CardTitle>
              <CardDescription>Cross-validation results from external portals (MCA, GST, EPFO, etc.)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockChecks.map((check) => (
                <Alert key={check.id} variant={check.status === 'VERIFIED' ? 'default' : check.status === 'MISMATCH' ? 'default' : 'destructive'} 
                       className={check.status === 'MISMATCH' ? 'border-yellow-500 text-yellow-900 bg-yellow-50' : check.status === 'VERIFIED' ? 'border-green-500 text-green-900 bg-green-50' : ''}>
                  {check.status === 'VERIFIED' && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                  {check.status === 'MISMATCH' && <AlertTriangle className="h-4 w-4 text-yellow-600" />}
                  {check.status === 'FAILED' && <XCircle className="h-4 w-4 text-red-600" />}
                  <AlertTitle className="font-semibold">{check.type}</AlertTitle>
                  <AlertDescription>{check.details}</AlertDescription>
                </Alert>
              ))}
            </CardContent>
          </Card>

          {/* PO Action Panel */}
          <Card className="md:col-span-2 border-slate-300">
            <CardHeader>
              <CardTitle>Procurement Officer Action</CardTitle>
              <CardDescription>Make a final decision based on the evidence above.</CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea 
                placeholder="Enter remarks or justification for your decision..." 
                className="min-h-[100px]"
                value={remarks}
                onChange={(e) => setRemarks(e.target.value)}
              />
            </CardContent>
            <CardFooter className="flex justify-end gap-4">
              <Dialog>
                <DialogTrigger render={<Button variant="destructive" />}>
                  Disqualify Bidder
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirm Disqualification</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to disqualify this bidder? This action will be recorded in the audit trail.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="destructive" onClick={() => handleDecision('REJECTED')}>Confirm Disqualify</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger render={<Button variant="default" className="bg-green-600 hover:bg-green-700" />}>
                  Approve Bidder
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Confirm Approval</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to approve this bidder? You should ensure you have provided justification for overriding the CRITICAL risk alert.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="default" onClick={() => handleDecision('APPROVED')}>Confirm Approve</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  );
}
