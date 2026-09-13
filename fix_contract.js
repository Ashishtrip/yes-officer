const fs = require('fs');
let content = fs.readFileSync('src/app/contract-award/page.tsx', 'utf-8');
// Let's just use prettier to fix it if it's a minor thing, or manually remove the extra </div>.
// We have 6 </div>s before </main>. Let's remove 2 of them so we have 4.
content = content.replace(/<\/div>\n<\/div>\n<\/main>/, '</main>');
fs.writeFileSync('src/app/contract-award/page.tsx', content);
