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
import { api } from '@/services/api';

export default function BidderDetail() {
  const router = useRouter();
  const params = useParams();
  const [user, setUser] = useState<any>(null);
  const [bid, setBid] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [remarks, setRemarks] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }
    const userStr = localStorage.getItem('user');
    if (userStr) setUser(JSON.parse(userStr));

    if (params.id) {
      api.getBidDetails(params.id as string)
        .then(res => {
          if (res.success) {
            setBid(res.data.bid);
          }
        })
        .catch(err => console.error('Failed to fetch bid details', err))
        .finally(() => setLoading(false));
    }
  }, [router, params.id]);

  const handleDecision = async (decision: 'APPROVED' | 'REJECTED') => {
    if (!remarks.trim()) {
      alert('Please enter remarks/justification for your decision.');
      return;
    }
    setSubmitting(true);
    try {
      await api.submitPoDecision(bid.id, decision, remarks);
      alert(`Decision submitted successfully! Bidder is ${decision}.`);
      router.back();
    } catch (error) {
      console.error('Failed to submit decision', error);
      alert('Failed to submit decision. Check console.');
      setSubmitting(false);
    }
  };

  if (!user || loading) return <div className="p-8">Loading Bidder details...</div>;
  if (!bid) return <div className="p-8 text-red-500">Bid not found.</div>;

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
              <h2 className="text-3xl font-bold tracking-tight">Bidder: {bid.bidder?.entity_name}</h2>
              <p className="text-slate-500">PAN: {bid.bidder?.pan} | GSTIN: {bid.bidder?.gstin}</p>
              {bid.po_decision && (
                 <p className="mt-2 font-medium text-slate-800">
                   Decision: {bid.po_decision} (Remarks: {bid.po_comments})
                 </p>
              )}
            </div>
            <Badge variant={bid.risk_level === 'CRITICAL' || bid.risk_level === 'HIGH' ? 'destructive' : bid.risk_level === 'MEDIUM' ? 'secondary' : 'default'} className="text-lg py-1 px-4">
              Score: {bid.compliance_score?.toFixed(1)}/100 ({bid.risk_level})
            </Badge>
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
                {bid.ai_recommendation || 'No specific AI recommendation available.'}
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
              {bid.verificationChecks?.map((check: any) => (
                <Alert key={check.id} variant={check.status === 'VERIFIED' ? 'default' : check.match_result === 'MISMATCH' ? 'default' : 'destructive'} 
                       className={check.status === 'VERIFIED' ? 'border-green-500 text-green-900 bg-green-50' : check.match_result === 'MISMATCH' ? 'border-yellow-500 text-yellow-900 bg-yellow-50' : ''}>
                  {check.status === 'VERIFIED' && <CheckCircle2 className="h-4 w-4 text-green-600" />}
                  {check.match_result === 'MISMATCH' && <AlertTriangle className="h-4 w-4 text-yellow-600" />}
                  {check.status === 'FAILED' && <XCircle className="h-4 w-4 text-red-600" />}
                  <AlertTitle className="font-semibold">{check.check_type} ({check.portal_source})</AlertTitle>
                  <AlertDescription>{check.discrepancy_detail || 'Verified successfully'}</AlertDescription>
                </Alert>
              ))}
              {(!bid.verificationChecks || bid.verificationChecks.length === 0) && (
                <p className="text-slate-500 text-sm">No verification checks found.</p>
              )}
            </CardContent>
          </Card>

          {/* PO Action Panel */}
          {!bid.po_decision && (
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
                    <Button variant="destructive" disabled={submitting} onClick={() => handleDecision('REJECTED')}>Confirm Disqualify</Button>
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
                      Are you sure you want to approve this bidder? You should ensure you have provided justification for overriding any risk alerts.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="default" disabled={submitting} onClick={() => handleDecision('APPROVED')}>Confirm Approve</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
          )}
        </div>
      </main>
    </div>
  );
}
