const fs = require('fs');
let content = fs.readFileSync('src/app/tender/[id]/compliance/page.tsx', 'utf-8');

// Replace any array cast
content = content.replace(/as any\[\]/g, 'as Record<string, unknown>[]');

// Replace bid: any and c: any
content = content.replace(/bid: any/g, 'bid: Record<string, unknown>');
content = content.replace(/c: any/g, 'c: Record<string, unknown>');

fs.writeFileSync('src/app/tender/[id]/compliance/page.tsx', content);
