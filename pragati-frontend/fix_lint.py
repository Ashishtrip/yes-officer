import re

with open('src/app/tender/[id]/tec/page.tsx', 'r') as f:
    tec = f.read()

# Replace any
tec = re.sub(r'\(b: any\)', '(b: Record<string, unknown>)', tec)
tec = re.sub(r'\(bid: any,', '(bid: Record<string, unknown>,', tec)

# Add alt text to img
tec = tec.replace('<img src="/images/avatar', '<img alt="avatar" src="/images/avatar')

with open('src/app/tender/[id]/tec/page.tsx', 'w') as f:
    f.write(tec)

with open('src/app/tender/[id]/ingestion/page.tsx', 'r') as f:
    ing = f.read()

# Add alt text to img
ing = ing.replace('<img src="/images/avatar', '<img alt="avatar" src="/images/avatar')

with open('src/app/tender/[id]/ingestion/page.tsx', 'w') as f:
    f.write(ing)

