import re

file_path = "src/app/tender/[id]/ingestion/page.tsx"
with open(file_path, "r") as f:
    content = f.read()

import_replacement = """\"use client\";
import React, { useEffect, useState } from \"react\";
import Link from \"next/link\";
import { useParams } from \"next/navigation\";
import { api } from \"@/services/api\";

export default function Page() {
  const params = useParams();
  const { id } = params as { id: string };
  const [tender, setTender] = useState<any>(null);

  useEffect(() => {
    if (id) {
      api.getTenderById(id).then(res => setTender(res.data.tender)).catch(console.error);
    }
  }, [id]);

  if (!tender) {
    return (
      <div className="bg-surface font-sans text-on-surface min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }
"""
content = re.sub(
    r'\"use client\";\nimport React from \"react\";\nimport Link from \"next/link\";\n\nexport default function Page\(\) \{',
    import_replacement,
    content
)

# 2. Update dynamic tender title/id in header
content = content.replace("Procurement of 500 High-Compute AI Workstations", "{tender.title || 'Tender Details'}")
content = content.replace("GEM/2026/B/489201", "{tender.gem_tender_id || tender.id}")
content = content.replace("Tender GEM/2026/B/489201", "Tender {tender.gem_tender_id || tender.id}")
content = content.replace("Showing 4 of 24 bids staged for Tender {tender.gem_tender_id || tender.id}", "Showing {tender.bids?.length || 0} bids staged for Tender {tender.gem_tender_id || tender.id}")

# Try to find exactly where the bidders list starts and ends
start_marker = "{/* Bidder 1:"
end_marker = "{/* Table Footer / Pagination */}"

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx != -1 and end_idx != -1:
    bid_map_code = """
            {tender.bids?.map((bid: any, idx: number) => {
              const isCompleted = bid.status === 'UNDER_EVALUATION' || bid.status === 'ACCEPTED' || bid.is_compliant;
              return (
                <div key={bid.id} className={`p-space-base hover:bg-surface-container-low/40 transition-colors flex flex-col gap-space-sm ${isCompleted ? 'bg-surface-container-lowest' : ''}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                    <div className="flex items-start gap-space-sm">
                      <div className={`w-10 h-10 rounded ${isCompleted ? 'bg-secondary-container/40 text-on-secondary-container' : 'bg-primary-fixed/60 text-primary'} flex items-center justify-center font-bold font-mono text-sm shrink-0`}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <div className="flex items-center gap-space-sm">
                          <span className="font-title-sm text-title-sm text-on-surface font-semibold">{bid.bidder?.name || 'Unknown Bidder'}</span>
                          <span className="font-mono text-label-sm text-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">{bid.bidder?.gem_vendor_id || bid.bidder_id}</span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-label-sm font-label-sm bg-surface-container-high text-primary">
                            {bid.bidder?.type || 'Standard Vendor'}
                          </span>
                        </div>
                        <div className="flex items-center gap-space-md text-on-surface-variant font-body-sm text-body-sm mt-1">
                          <span>Envelope: {tender.procurement_category === 'SERVICES' ? 'Technical + Commercial' : '2-Cover'}</span>
                          <span>•</span>
                          <span>Submitted: {new Date(bid.submission_date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    {/* Status Badge */}
                    <div className="flex items-center gap-space-sm self-end md:self-auto">
                      {isCompleted ? (
                        <>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-secondary-container text-on-secondary-fixed font-label-sm text-label-sm uppercase font-semibold">
                            <span className="material-symbols-outlined text-[15px] text-secondary">verified</span>
                            Completed • Ready for Evaluation
                          </span>
                          <Link href={`/tender/${tender.id}/tec`} passHref legacyBehavior>
                            <button type="button" className="px-3 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-all">
                              Open Dossier
                            </button>
                          </Link>
                        </>
                      ) : (
                        <>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            LayoutLMv3 NER (Processing)
                          </span>
                          <button className="p-1.5 rounded hover:bg-surface-container text-on-surface-variant hover:text-primary transition-colors" title="Inspect Raw OCR tokens">
                            <span className="material-symbols-outlined text-[18px]">find_in_page</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  {/* Ingestion Progress Bar */}
                  <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden mt-1">
                    <div className={`h-2 rounded-full transition-all duration-500 ${isCompleted ? 'bg-secondary' : 'bg-primary'}`} style={{width: isCompleted ? "100%" : "75%"}}></div>
                  </div>
                </div>
              );
            })}
          </div>
          """
    content = content[:start_idx] + bid_map_code + content[end_idx:]
    with open(file_path, "w") as f:
        f.write(content)
    print("Patched successfully")
else:
    print(f"Could not find markers. start_idx: {start_idx}, end_idx: {end_idx}")

