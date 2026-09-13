const fs = require('fs');

function checkTags(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  
  // Basic Regex to find HTML/JSX tags.
  const tagRegex = /<\/?([a-zA-Z0-9]+)([^>]*)>/g;
  let match;
  const stack = [];
  
  // self-closing tags list
  const voidElements = new Set(['img', 'input', 'br', 'hr', 'meta', 'link', 'path', 'circle', 'rect', 'svg']);

  const lines = code.split('\n');

  while ((match = tagRegex.exec(code)) !== null) {
    const isClosing = match[0].startsWith('</');
    const tagName = match[1];
    const attributes = match[2];
    
    // Ignore self-closing tags
    if (attributes.endsWith('/') || voidElements.has(tagName)) {
        continue;
    }

    const lineNo = code.substring(0, match.index).split('\n').length;
    
    if (!isClosing) {
      stack.push({ name: tagName, line: lineNo });
    } else {
      if (stack.length === 0) {
        console.log(`Error: Closing tag </${tagName}> without opening tag at line ${lineNo}`);
      } else {
        const last = stack.pop();
        if (last.name !== tagName) {
          console.log(`Error: Mismatched tag. Expected </${last.name}> (opened at ${last.line}) but found </${tagName}> at line ${lineNo}`);
          // Put it back to let user fix it properly without corrupting the rest of the parsing?
          // Actually let's assume it was an extra closing tag and put `last` back.
          stack.push(last);
        }
      }
    }
  }

  if (stack.length > 0) {
    console.log(`Unclosed tags remaining in ${filePath}:`);
    stack.forEach(tag => console.log(`- <${tag.name}> opened at line ${tag.line}`));
  } else {
    console.log(`All tags balanced in ${filePath}!`);
  }
}

checkTags('src/app/contract-award/page.tsx');
