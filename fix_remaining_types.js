const fs = require('fs');
const path = require('path');

const files = [
  'src/app/grievance/page.tsx',
  'src/app/clarifications/page.tsx',
  'src/app/evaluation/page.tsx',
  'src/app/contract-award/page.tsx',
  'src/app/transparency/page.tsx',
  'src/app/investigation/page.tsx',
  'src/app/financial-bid/page.tsx',
  'src/app/integration/page.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/onclick=/g, 'onClick=');
  content = content.replace(/preserveaspectratio=/g, 'preserveAspectRatio=');
  content = content.replace(/viewbox=/g, 'viewBox=');
  content = content.replace(/patternunits=/g, 'patternUnits=');
  content = content.replace(/rows="3"/g, 'rows={3}');
  content = content.replace(/rows="4"/g, 'rows={4}');
  content = content.replace(/rows="5"/g, 'rows={5}');
  content = content.replace(/selected=""/g, 'defaultValue="All Participating Ministries (12)"'); // hacky for option, better to remove
  content = content.replace(/<option defaultValue="All Participating Ministries \(12\)">/g, '<option>');
  content = content.replace(/<option selected="">/g, '<option>'); // Fallback
  fs.writeFileSync(file, content);
});
console.log("Fixed types.");
