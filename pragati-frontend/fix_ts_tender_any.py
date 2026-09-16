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
    
    # Use any instead of Record<string, any>
    content = content.replace('useState<Record<string, any>>({})', 'useState<any>(null)')
    
    # Sometimes it's useState<Record<string, any>>(null) ? Let's check
    content = content.replace('tender as Record<string, any>', 'tender')
    content = content.replace('tender.bids as Record<string, any>[]', 'tender?.bids')
    content = content.replace('res.data as Record<string, any>', 'res.data')
    
    # In ingestion and tec, there's mapping over empty object issue if tender is null initially
    # If we made it null, we need to ensure we don't map over tender when it's null.
    # The components usually have `if (!tender) return <div>Loading...</div>;`
    # Let's verify that. Most of them have `if (!tender) return <Loader/>;` or similar.
    # Actually wait, if we used `useState<any>({})`, it was an empty object.
    # I'll just change it back to `useState<any>({})`.
    content = content.replace('useState<any>(null)', 'useState<any>({})')
    
    with open(fpath, 'w') as f:
        f.write(content)

# Fix bidder/[id]/page.tsx
with open('src/app/bidder/[id]/page.tsx', 'r') as f:
    b = f.read()
b = b.replace('const [bid, setBid] = useState<Record<string, any> | null>(null);', 'const [bid, setBid] = useState<any>({});')
with open('src/app/bidder/[id]/page.tsx', 'w') as f:
    f.write(b)

