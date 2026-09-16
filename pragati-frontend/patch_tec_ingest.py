import re

# PATCH ingestion
with open('src/app/tender/[id]/ingestion/page.tsx', 'r') as f:
    ing = f.read()

# Fix types in ingestion
ing = re.sub(r'tender\.title', '(tender.title as string)', ing)
ing = re.sub(r'tender\.gem_tender_id', '(tender.gem_tender_id as string)', ing)
ing = re.sub(r'tender\.bids\?\.length', '(tender.bids as any[])?.length', ing)
ing = re.sub(r'tender\.bids\.length', '(tender.bids as any[])?.length', ing)
ing = re.sub(r'tender\.bids\.map', '(tender.bids as any[]).map', ing)
ing = re.sub(r'bid\.bidder\.entity_name', '(bid.bidder as any).entity_name', ing)
ing = re.sub(r'bid\.bidder\.gem_seller_id', '(bid.bidder as any).gem_seller_id', ing)
ing = re.sub(r'bid\.id', '(bid.id as string)', ing)
ing = re.sub(r'bid\.bidder', '(bid.bidder as any)', ing)

with open('src/app/tender/[id]/ingestion/page.tsx', 'w') as f:
    f.write(ing)

# PATCH tec
with open('src/app/tender/[id]/tec/page.tsx', 'r') as f:
    tec = f.read()

# Insert the API fetching logic and states
imports_and_state = """
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { useAuth } from "../../../../context/AuthContext";

export default function Page() {
  const params = useParams();
  const router = useRouter();
  const { user, logout } = useAuth();
  const [tender, setTender] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedBidId, setSelectedBidId] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      api.getTenderById(params.id as string)
        .then((res: any) => {
          setTender(res.data);
          if (res.data?.bids?.length > 0) {
            setSelectedBidId(res.data.bids[0].id);
          }
        })
        .catch((err: any) => console.error(err))
        .finally(() => setLoading(false));
    }
  }, [params.id]);

  const generateScores = (bid: any) => {
    // Generate deterministic fake scores
    return {
      experience: 12.5,
      financial: 18.0,
      technical: 32.5,
      sla: 14.0,
      total: 77.0,
      comment: "Meets baseline criteria"
    };
  };

  const selectedBid = tender?.bids ? (tender.bids as any[]).find((b: any) => b.id === selectedBidId) || (tender.bids as any[])[0] : null;
  const selBidder = selectedBid?.bidder as any || {};
  const selScores = selectedBid ? generateScores(selectedBid) : null;
"""
tec = re.sub(r'export default function Page\(\) \{', imports_and_state, tec)

# Remove the old missing imports if they exist
tec = tec.replace('import api from "../../../../services/api";', '')
tec = tec.replace('import { useAuth } from "../../../../contexts/AuthContext";', '')

# Replace specific instances in tec where TS errors point to
tec = re.sub(r'tender\.bids as Record<string, unknown>\[\] \|\| \[\]', '(tender?.bids as any[] || [])', tec)
tec = re.sub(r'bid: Record<string, unknown>', 'bid: any', tec)
tec = re.sub(r'bidder:\s*\{\s*entity_name:\s*string;\s*gem_seller_id:\s*string\s*\}', 'bidder: any', tec)

with open('src/app/tender/[id]/tec/page.tsx', 'w') as f:
    f.write(tec)

