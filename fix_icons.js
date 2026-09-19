const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'app');
const files = [
  'page.tsx',
  'clarifications/page.tsx',
  'contract-award/page.tsx',
  'dashboard/page.tsx',
  'evaluation/page.tsx',
  'financial-bid/page.tsx',
  'grievance/page.tsx',
  'integration/page.tsx',
  'investigation/page.tsx',
  'tenders/page.tsx',
  'transparency/page.tsx'
];

let replacedFiles = 0;

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  const target1 = '<button aria-label="Notifications" className="relative p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button">';
  const replacement1 = '<button onClick={() => alert("You have 3 pending notifications.")} aria-label="Notifications" className="relative p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button">';
  
  const target2 = '<button aria-label="Help and Support" className="p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button">';
  const replacement2 = '<button onClick={() => alert("Redirecting to GeM Support Desk...")} aria-label="Help and Support" className="p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button">';

  let updated = false;
  if (content.includes(target1)) {
    content = content.replaceAll(target1, replacement1);
    updated = true;
  }
  if (content.includes(target2)) {
    content = content.replaceAll(target2, replacement2);
    updated = true;
  }
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    replacedFiles++;
    console.log(`Updated ${file}`);
  }
});

console.log(`Total files updated: ${replacedFiles}`);
