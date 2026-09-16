const fs = require('fs');
let content = fs.readFileSync('src/app/tender/[id]/tec/page.tsx', 'utf-8');
content = content.replace(/\(bid: any, index: number\)/g, '(bid: Record<string, unknown>, index: number)');
content = content.replace(/bid: any/g, 'bid: Record<string, unknown>');
fs.writeFileSync('src/app/tender/[id]/tec/page.tsx', content);
