import re

# 1. bidder/[id]/page.tsx
with open('src/app/bidder/[id]/page.tsx', 'r') as f:
    content = f.read()
content = content.replace('useState<Record<string, any>>(null)', 'useState<Record<string, any> | null>(null)')
with open('src/app/bidder/[id]/page.tsx', 'w') as f:
    f.write(content)

# 2. public-procurement/page.tsx
with open('src/app/public-procurement/page.tsx', 'r') as f:
    content = f.read()
content = content.replace('value={true}', 'value="true"')
with open('src/app/public-procurement/page.tsx', 'w') as f:
    f.write(content)

# 3. register/page.tsx
with open('src/app/register/page.tsx', 'r') as f:
    content = f.read()
content = content.replace('onChange={setUserType}', 'onChange={(val) => setUserType(val || "")}')
with open('src/app/register/page.tsx', 'w') as f:
    f.write(content)

# 4. tender/[id]/compliance/page.tsx
with open('src/app/tender/[id]/compliance/page.tsx', 'r') as f:
    content = f.read()
content = content.replace('const [tender, setTender] = useState<Record<string, unknown>>({});', 'const [tender, setTender] = useState<Record<string, any>>({});')
content = content.replace('bids.map((bid: Record<string, unknown>)', 'bids.map((bid: Record<string, any>)')
content = content.replace('tender.bids as Record<string, unknown>[]', 'tender.bids as Record<string, any>[]')
content = content.replace('const generateScores = (bid: Record<string, unknown>)', 'const generateScores = (bid: Record<string, any>)')
content = content.replace('setTender(res.data as Record<string, unknown>)', 'setTender(res.data as Record<string, any>)')
with open('src/app/tender/[id]/compliance/page.tsx', 'w') as f:
    f.write(content)

# 5. tender/[id]/financial/page.tsx
with open('src/app/tender/[id]/financial/page.tsx', 'r') as f:
    content = f.read()
content = content.replace('const [tender, setTender] = useState<Record<string, unknown>>({});', 'const [tender, setTender] = useState<Record<string, any>>({});')
content = content.replace('tender.bids as Record<string, unknown>[]', 'tender.bids as Record<string, any>[]')
content = content.replace('setTender(res.data as Record<string, unknown>)', 'setTender(res.data as Record<string, any>)')
with open('src/app/tender/[id]/financial/page.tsx', 'w') as f:
    f.write(content)

# 6. tender/[id]/ingestion/page.tsx
with open('src/app/tender/[id]/ingestion/page.tsx', 'r') as f:
    content = f.read()
content = content.replace('const [tender, setTender] = useState<Record<string, unknown>>({});', 'const [tender, setTender] = useState<Record<string, any>>({});')
content = content.replace('tender.bids as Record<string, unknown>[]', 'tender.bids as Record<string, any>[]')
content = content.replace('setTender(res.data as Record<string, unknown>)', 'setTender(res.data as Record<string, any>)')
with open('src/app/tender/[id]/ingestion/page.tsx', 'w') as f:
    f.write(content)

# 7. tender/[id]/tec/page.tsx
with open('src/app/tender/[id]/tec/page.tsx', 'r') as f:
    content = f.read()
content = content.replace('const [tender, setTender] = useState<Record<string, unknown>>({});', 'const [tender, setTender] = useState<Record<string, any>>({});')
content = content.replace('bids.map((bid: Record<string, unknown>)', 'bids.map((bid: Record<string, any>)')
content = content.replace('tender.bids as Record<string, unknown>[]', 'tender.bids as Record<string, any>[]')
content = content.replace('const generateScores = (bid: Record<string, unknown>)', 'const generateScores = (bid: Record<string, any>)')
content = content.replace('setTender(res.data as Record<string, unknown>)', 'setTender(res.data as Record<string, any>)')
content = content.replace('Object.entries(tender).map', 'Object.entries(tender as Record<string, any>).map')
with open('src/app/tender/[id]/tec/page.tsx', 'w') as f:
    f.write(content)

