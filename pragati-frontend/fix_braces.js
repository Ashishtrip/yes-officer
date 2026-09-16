const fs = require('fs');
let content = fs.readFileSync('src/app/tender/[id]/tec/page.tsx', 'utf-8');

// The unmatched brace is at the end of the file. So it means there is an extra `}` at the end.
content = content.replace(/}\s*$/, '');
fs.writeFileSync('src/app/tender/[id]/tec/page.tsx', content);
