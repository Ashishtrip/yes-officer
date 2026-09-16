const fs = require('fs');
let content = fs.readFileSync('src/app/tender/[id]/compliance/page.tsx', 'utf-8');
content = content.replace('</div></main>', '</main>');
fs.writeFileSync('src/app/tender/[id]/compliance/page.tsx', content);
