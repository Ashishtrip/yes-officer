import re

files = [
    'src/app/tender/[id]/compliance/page.tsx',
    'src/app/tender/[id]/financial/page.tsx',
    'src/app/tender/[id]/ingestion/page.tsx',
    'src/app/tender/[id]/tec/page.tsx'
]

for fpath in files:
    with open(fpath, 'r') as f:
        content = f.read()
    
    content = content.replace('useState<Record<string, any>>({})', 'useState<any>(null)')
    content = content.replace('useState<Record<string, unknown>>({})', 'useState<any>(null)')
    
    with open(fpath, 'w') as f:
        f.write(content)

