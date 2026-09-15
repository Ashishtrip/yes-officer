import re

with open('src/app/tender/[id]/tec/page.tsx', 'r') as f:
    content = f.read()

# Replace right column
right_col_pattern = r'\{\/\* RIGHT COLUMN: Inspection & Consensus Drawer \/ Panel \(4 cols on lg\/xl\) \*\/\}.*?\{\/\* SECTION 5: Statutory Compliance Footer & Regulatory Authorities \*\/\}'

right_col_replacement = """{/* RIGHT COLUMN: Inspection & Consensus Drawer / Panel (4 cols on lg/xl) */}
            <div className="lg:col-span-4 flex flex-col gap-space-sm">
              <div className="bg-surface-container-lowest rounded-xl border border-surface-container-high shadow-md overflow-hidden flex flex-col">
                {/* Inspection Card Header */}
                <div className="bg-surface-container-low p-space-sm border-b border-surface-container-high flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]">assignment_turned_in</span>
                    <h3 className="font-title-sm text-title-sm text-on-surface font-semibold">Bidder Evaluation Deep Dive</h3>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-tabular-num font-bold text-label-sm">
                    {selectedBidId ? 'Selected' : 'None'}
                  </span>
                </div>
                {selectedBid ? (
                  <div className="p-space-md flex flex-col gap-space-sm">
                    {/* Selected Bidder Header Info */}
                    <div className="flex flex-col gap-1 pb-3 border-b border-surface-container-high">
                      <div className="flex items-center justify-between">
                        <span className="font-headline-md text-[17px] font-bold text-on-surface">{selBidder.entity_name || "Unknown Bidder"}</span>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-label-sm text-[11px] font-bold uppercase ${selScores?.total >= 75 ? 'bg-secondary-container text-on-secondary-container' : 'bg-error-container text-error'}`}>
                          {selScores?.consensus}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                        <span>GSTIN: {selBidder.gstin || "N/A"}</span>
                        <span>•</span>
                        <span>GeM ID: {selBidder.gem_seller_id || "N/A"}</span>
                      </div>
                    </div>

                    {/* Parameter Sub-score Breakdown with Progress Bars */}
                    <div className="flex flex-col gap-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Consolidated Sub-Parameters</span>
                      <div className="space-y-2 text-body-sm font-body-sm">
                        <div>
                          <div className="flex justify-between font-label-sm text-[11px] mb-0.5">
                            <span className="text-on-surface font-medium">OEM Specifications Compliance (Max 35)</span>
                            <span className="font-tabular-num font-bold text-primary">{selScores?.tech} / 35.0</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${(selScores?.tech / 35) * 100}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between font-label-sm text-[11px] mb-0.5">
                            <span className="text-on-surface font-medium">Past Performance & Indian Deployments (Max 30)</span>
                            <span className="font-tabular-num font-bold text-primary">{selScores?.track} / 30.0</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${(selScores?.track / 30) * 100}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between font-label-sm text-[11px] mb-0.5">
                            <span className="text-on-surface font-medium">Financial Standing & Solvency Ratio (Max 20)</span>
                            <span className="font-tabular-num font-bold text-primary">{selScores?.fin} / 20.0</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${(selScores?.fin / 20) * 100}%` }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between font-label-sm text-[11px] mb-0.5">
                            <span className="text-on-surface font-medium">Service Network & Mean Time to Repair (Max 15)</span>
                            <span className="font-tabular-num font-bold text-primary">{selScores?.sla} / 15.0</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
                            <div className="h-full bg-primary rounded-full" style={{ width: `${(selScores?.sla / 15) * 100}%` }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Digital Seal & SHA-256 Merkle Ledger */}
                    <div className="bg-surface-container-low rounded-lg p-2.5 border border-surface-container-high font-mono text-[10px] text-on-surface-variant flex flex-col gap-1 mt-4">
                      <div className="flex items-center justify-between text-on-surface font-semibold">
                        <span className="flex items-center gap-1 font-label-sm"><span className="material-symbols-outlined text-[13px] text-primary">fingerprint</span> Cryptographic Seal</span>
                        <span className="text-secondary">SHA-256 Validated</span>
                      </div>
                      <div className="truncate text-on-surface" title={selectedBid.id}>
                        Merkle Root: {selectedBid.id}
                      </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="flex flex-col gap-2 pt-2 border-t border-surface-container-high mt-4">
                      <button className="w-full h-9 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors shadow" type="button">
                        <span className="material-symbols-outlined text-[17px]">lock</span>
                        Confirm & Lock Bidder Qualification
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-space-md text-center text-on-surface-variant font-body-sm">
                    Select a bidder to view details.
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* SECTION 5: Statutory Compliance Footer & Regulatory Authorities */}"""

content = re.sub(right_col_pattern, right_col_replacement, content, flags=re.DOTALL)

with open('src/app/tender/[id]/tec/page.tsx', 'w') as f:
    f.write(content)

