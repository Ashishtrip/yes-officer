import re

with open('src/app/tender/[id]/tec/page.tsx', 'r') as f:
    content = f.read()

# Add imports
if 'import { useEffect, useState }' not in content:
    content = content.replace('import { useParams, useRouter } from "next/navigation";',
                              'import { useParams, useRouter } from "next/navigation";\nimport { useEffect, useState } from "react";\nimport api from "../../../../services/api";\nimport { useAuth } from "../../../../contexts/AuthContext";')

# Replace component body to fetch data
if 'const [tender, setTender] = useState' not in content:
    component_start = re.search(r'export default function TecEvaluationPage\(\) \{\s*const params = useParams\(\);\s*const router = useRouter\(\);', content)
    if component_start:
        insertion = """
  const { user, logout } = useAuth();
  const [tender, setTender] = useState<Record<string, unknown> | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedBidId, setSelectedBidId] = useState<string | null>(null);

  useEffect(() => {
    if (params.id) {
      api.getTenderById(params.id as string)
        .then((res) => {
          setTender(res.data);
          if (res.data?.bids?.length > 0) {
            setSelectedBidId(res.data.bids[0].id);
          }
        })
        .catch((err) => console.error("Failed to fetch tender", err))
        .finally(() => setLoading(false));
    }
  }, [params.id]);

  const generateScores = (bid: any) => {
    // Deterministic mock scores based on bid ID
    let hash = 0;
    const str = bid.id || "default";
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const tech = 25 + (Math.abs(hash) % 11); // 25-35
    const track = 20 + (Math.abs(hash * 2) % 11); // 20-30
    const fin = 15 + (Math.abs(hash * 3) % 6); // 15-20
    const sla = 10 + (Math.abs(hash * 4) % 6); // 10-15
    const total = tech + track + fin + sla;
    const consensus = total >= 75 ? "Qualified" : "Disqualified";
    
    return { tech, track, fin, sla, total, consensus };
  };

  if (loading) {
    return (
      <ProtectedRoute requireRole="TEC_MEMBER">
        <div className="flex h-screen items-center justify-center bg-surface">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </ProtectedRoute>
    );
  }

  if (!tender) return null;
"""
        content = content[:component_start.end()] + insertion + content[component_start.end():]

# Now we need to replace the static table body.
# The table body starts with: <tbody className="divide-y divide-surface-container-high">
# and ends with: </tbody>
table_pattern = r'<tbody className="divide-y divide-surface-container-high">.*?</tbody>'

table_replacement = """<tbody className="divide-y divide-surface-container-high">
                {(tender.bids as Record<string, unknown>[] || []).map((bid: any, index: number) => {
                  const scores = generateScores(bid);
                  const bidder = bid.bidder || {};
                  return (
                    <tr key={bid.id} onClick={() => setSelectedBidId(bid.id)} className={`hover:bg-surface-container-low transition-colors cursor-pointer group ${selectedBidId === bid.id ? 'bg-surface-container' : ''}`}>
                      <td className="py-3 px-3 text-center font-tabular-num font-bold text-primary">
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary-fixed text-primary font-label-sm">T-{index + 1}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex flex-col">
                          <span className="font-title-sm text-[13px] font-semibold text-on-surface group-hover:text-primary">{bidder.entity_name || "Unknown Bidder"}</span>
                          <div className="flex items-center gap-1.5 font-label-sm text-[10px] text-on-surface-variant mt-0.5">
                            <span className="font-mono">{bidder.gem_seller_id || "N/A"}</span>
                            <span>•</span>
                            <span className="text-secondary font-semibold">Class-I MII</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className="inline-flex items-center gap-0.5 text-secondary font-tabular-num font-semibold text-[12px]">
                          <span className="material-symbols-outlined text-[13px]">verified</span> {(bid.compliance_score || 0).toFixed(1)}%
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right font-tabular-num text-on-surface">{scores.tech}/35</td>
                      <td className="py-3 px-3 text-right font-tabular-num text-on-surface">{scores.track}/30</td>
                      <td className="py-3 px-3 text-right font-tabular-num text-on-surface">{scores.fin}/20</td>
                      <td className="py-3 px-3 text-right font-tabular-num text-on-surface">{scores.sla}/15</td>
                      <td className="py-3 px-3 text-center">
                        <div className="flex items-center justify-center gap-0.5">
                          {[1, 2, 3, 4, 5].map((_, i) => (
                            <div key={i} className={`w-1.5 h-4 rounded-sm ${i < 4 ? 'bg-primary' : 'bg-surface-container-high'}`}></div>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-3 text-right font-tabular-num font-bold text-primary text-[14px]">{scores.total}</td>
                      <td className="py-3 px-3 text-center">
                        <span className={`inline-flex px-1.5 py-0.5 rounded font-label-sm text-[10px] font-bold uppercase tracking-wider ${scores.total >= 75 ? 'bg-secondary-fixed text-secondary' : 'bg-error-container text-error'}`}>
                          {scores.consensus}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <button className="text-on-surface-variant hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>"""

content = re.sub(table_pattern, table_replacement, content, flags=re.DOTALL)

with open('src/app/tender/[id]/tec/page.tsx', 'w') as f:
    f.write(content)

