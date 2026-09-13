const fs = require('fs');

const files = [
  'src/app/clarifications/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Strip onClick="anything"
  content = content.replace(/onClick="[^"]*"/g, '');
  fs.writeFileSync(file, content);
});
console.log("Fixed onClick.");
