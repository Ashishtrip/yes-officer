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
    
    content = content.replace('useState<any>({})', 'useState<any>(null)')
    # If the state type is still Record<string, unknown> we should replace it to any
    content = content.replace('useState<Record<string, unknown>>({})', 'useState<any>(null)')
    content = content.replace('useState<Record<string, unknown> | null>(null)', 'useState<any>(null)')

    with open(fpath, 'w') as f:
        f.write(content)

with open('jest.setup.js', 'a') as f:
    f.write("\nimport '@testing-library/jest-dom';\n")

with open('src/components/__tests__/ProtectedRoute.test.tsx', 'r') as f:
    b = f.read()
b = b.replace('import { render, screen } from "@testing-library/react";', 'import { render, screen } from "@testing-library/react";\nimport "@testing-library/jest-dom";')
with open('src/components/__tests__/ProtectedRoute.test.tsx', 'w') as f:
    f.write(b)

