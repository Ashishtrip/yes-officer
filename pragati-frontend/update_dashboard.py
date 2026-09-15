import re

with open('src/app/page.tsx', 'r') as f:
    content = f.read()

# Replace hardcoded tender.id with dynamic values inside the loop
# Oh, it already has `<Link href={`/tender/${tender.id}`}>Open Compliance Desk</Link>`

# Let's replace the hardcoded tender stats
content = re.sub(r'>24 Bids Total<', r'>{tender._count?.bids || 0} Bids Total<', content)
content = re.sub(r'15-Sept-2026', r'{new Date(tender.bid_end_date).toLocaleDateString()}', content)

with open('src/app/page.tsx', 'w') as f:
    f.write(content)
