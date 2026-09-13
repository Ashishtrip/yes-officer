const fs = require('fs');
let content = fs.readFileSync('src/app/integration/page.tsx', 'utf8');
// Fix {"{"{"}"} back to {"{"}
content = content.replace(/\{"\{"\{"\}"\}/g, '{"{"}');
// Fix {"}"} is correct for }, but wait, did it replace the } in {"{"} or did it just replace original } ?
// Original } was replaced by {"}"}, which is correct.
// But {"{"} became {"{"{"}"}. 
// So {"{"{"}"} -> {"{"}
fs.writeFileSync('src/app/integration/page.tsx', content);
