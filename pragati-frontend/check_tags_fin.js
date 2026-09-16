const fs = require('fs');
const content = fs.readFileSync('src/app/tender/[id]/financial/page.tsx', 'utf-8');
const divStarts = (content.match(/<div(\s|>)/g) || []).length;
const divEnds = (content.match(/<\/div>/g) || []).length;
const mainStarts = (content.match(/<main(\s|>)/g) || []).length;
const mainEnds = (content.match(/<\/main>/g) || []).length;
console.log(`div starts: ${divStarts} div ends: ${divEnds}`);
console.log(`main starts: ${mainStarts} main ends: ${mainEnds}`);
