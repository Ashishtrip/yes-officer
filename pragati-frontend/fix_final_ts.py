import re

# --- TEC ---
with open('src/app/tender/[id]/tec/page.tsx', 'r') as f:
    tec = f.read()

tec = tec.replace('  };\n  };\n\n  const selectedBid', '  };\n\n  const selectedBid')
tec = tec.replace('as any', 'as Record<string, unknown>')
tec = tec.replace('setTender(res.data)', 'setTender(res.data as Record<string, unknown>)')

with open('src/app/tender/[id]/tec/page.tsx', 'w') as f:
    f.write(tec)

# --- FINANCIAL ---
with open('src/app/tender/[id]/financial/page.tsx', 'r') as f:
    fin = f.read()

fin = fin.replace('setTender(res.data)', 'setTender(res.data as Record<string, unknown>)')

with open('src/app/tender/[id]/financial/page.tsx', 'w') as f:
    f.write(fin)

# --- COMPLIANCE ---
with open('src/app/tender/[id]/compliance/page.tsx', 'r') as f:
    comp = f.read()

comp = comp.replace("((score_sum || 0) + (doc.status === 'Verified' ? 1 : 0))", "((Number(score_sum) || 0) + (doc.status === 'Verified' ? 1 : 0))")
comp = comp.replace("Number(acc) || 0", "(Number(acc) || 0)")
comp = comp.replace("+ (doc.status === 'Verified'", "+ (doc.status === 'Verified'")

with open('src/app/tender/[id]/compliance/page.tsx', 'w') as f:
    f.write(comp)
