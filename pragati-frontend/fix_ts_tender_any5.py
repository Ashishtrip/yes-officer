import re
import os

files = [
    'src/app/tender/[id]/compliance/page.tsx',
    'src/app/tender/[id]/financial/page.tsx',
    'src/app/tender/[id]/ingestion/page.tsx',
    'src/app/tender/[id]/tec/page.tsx'
]

for fpath in files:
    with open(fpath, 'r') as f:
        lines = f.readlines()
    
    for i, line in enumerate(lines):
        if 'const [tender, setTender] =' in line:
            lines[i] = '  const [tender, setTender] = useState<any>(null);\n'
        elif 'const [selScores, setSelScores] =' in line:
            lines[i] = '  const [selScores, setSelScores] = useState<any>(null);\n'
    
    content = "".join(lines)
    # Also fix tender.bids to tender?.bids just to be safe
    content = content.replace('tender.bids', 'tender?.bids')
    content = content.replace('tender?.bids as Record<string, any>[]', 'tender?.bids')
    content = content.replace('tender?.bids as Record<string, unknown>[]', 'tender?.bids')

    with open(fpath, 'w') as f:
        f.write(content)

