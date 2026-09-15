const fs = require('fs');
const content = fs.readFileSync('src/app/tender/[id]/tec/page.tsx', 'utf-8');

let braceCount = 0;
for (let i=0; i<content.length; i++) {
  if (content[i] === '{') braceCount++;
  if (content[i] === '}') braceCount--;
}
console.log('Braces net count:', braceCount);

let parenCount = 0;
for (let i=0; i<content.length; i++) {
  if (content[i] === '(') parenCount++;
  if (content[i] === ')') parenCount--;
}
console.log('Parens net count:', parenCount);

