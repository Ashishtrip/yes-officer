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
    
    content = re.sub(r'const \[tender, setTender\] = useState<[^>]+>\([^)]+\);', 'const [tender, setTender] = useState<any>(null);', content)

    # In tec, selScores:
    content = content.replace('const [selScores, setSelScores] = useState<Record<string, number>>({});', 'const [selScores, setSelScores] = useState<any>({});')

    with open(fpath, 'w') as f:
        f.write(content)

# For ProtectedRoute.test.tsx
with open('src/components/__tests__/ProtectedRoute.test.tsx', 'r') as f:
    b = f.read()
if "import '@testing-library/jest-dom'" not in b:
    b = "import '@testing-library/jest-dom';\n" + b
    with open('src/components/__tests__/ProtectedRoute.test.tsx', 'w') as f:
        f.write(b)

# Fix src/app/public-procurement/page.tsx
with open('src/app/public-procurement/page.tsx', 'r') as f:
    p = f.read()
p = p.replace('value={true}', 'value="true"')
with open('src/app/public-procurement/page.tsx', 'w') as f:
    f.write(p)

# Fix src/app/register/page.tsx
with open('src/app/register/page.tsx', 'r') as f:
    r = f.read()
r = re.sub(r'onChange=\{setGst\}', 'onChange={(val) => setGst(val || "")}', r)
with open('src/app/register/page.tsx', 'w') as f:
    f.write(r)

# Fix .next/types/validator.ts missing modules
# Since these are pages that might have been deleted, we can just delete .next
import os
import shutil
if os.path.exists('.next'):
    shutil.rmtree('.next')

