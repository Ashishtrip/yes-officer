const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'app');
const oldUrl = 'https://lh3.googleusercontent.com/aida/AEtjO1XF1PZsUoMowWpDMDKHX4d0Uh2TzyN0ieKoXRAg9eWo0KUOJEYX9ay-0FikqKi6SCy-s2qdnXKKSVBN1U3cGfFxFZF0ukpbfXY2DXXHGRuTayL8HUzuRTRsVXDXLBNUvCkLJ45-5sgvvJPij2xXTdFwemSujw5XjPH5QUdV8NmgQmyup3OjnHPFKO06ETugegA2e_yc3BJ49NnxvbQ_j3UdtcbgijRrC1sPHCXBUxBBvQe1hRNlh5IrYBas';
const newUrl = '/logo.jpg';

function walkDir(currentDir) {
  const files = fs.readdirSync(currentDir);
  for (const file of files) {
    const filePath = path.join(currentDir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      if (content.includes(oldUrl)) {
        content = content.replaceAll(oldUrl, newUrl);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated logo URL in ${filePath}`);
      }
    }
  }
}

walkDir(dir);
console.log('Finished updating logo URLs.');
