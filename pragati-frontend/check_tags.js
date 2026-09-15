const fs = require('fs');
const content = fs.readFileSync('src/app/tender/[id]/compliance/page.tsx', 'utf-8');

const divStarts = (content.match(/<div[^>]*>/g) || []).length;
const divEnds = (content.match(/<\/div>/g) || []).length;
console.log('div starts:', divStarts, 'div ends:', divEnds);

const mainStarts = (content.match(/<main[^>]*>/g) || []).length;
const mainEnds = (content.match(/<\/main>/g) || []).length;
console.log('main starts:', mainStarts, 'main ends:', mainEnds);
