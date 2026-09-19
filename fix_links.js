const fs = require('fs');
const path = require('path');

const mapping = {
  'Tenders &amp; Bids': '/tenders',
  'Compliance Rules': '/evaluation',
  'Portal Connectors': '/integration',
  'Audit Logs': '/transparency',
  'Vigilance &amp; Analytics': '/investigation',
  'Contract Award &amp; PBG': '/contract-award',
  'Grievance &amp; IEM Appeals': '/grievance',
  'Public RTI Disclosures': '/transparency',
  'Developer Gateway': '/integration',
  'Admin': '/dashboard',
  'User &amp; Access / Admin': '/dashboard'
};

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;
            
            for (const key of Object.keys(mapping)) {
                const route = mapping[key];
                const escapeKey = key.replace(/&/g, '&amp;'); // Just in case
                // Pattern matches href="#" followed by anything inside the a tag, then the specific text
                // Alternatively, simpler: replace all href="#" in lines that contain the key
                const lines = content.split('\n');
                for (let i=0; i<lines.length; i++) {
                    if (lines[i].includes('href="#"') && (lines[i].includes(key) || lines[i].includes(key.replace('&amp;', '&')))) {
                        lines[i] = lines[i].replace('href="#"', `href="${route}"`);
                        changed = true;
                    }
                }
                content = lines.join('\n');
            }
            
            if (changed) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated ' + fullPath);
            }
        }
    }
}

processDir('src/app');
console.log('Done mapping links.');
