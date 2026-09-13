const fs = require('fs');

function autoCloseTags(jsx) {
  const tagRegex = /<\/?([a-zA-Z0-9]+)([^>]*)>/g;
  let match;
  const stack = [];
  const voidElements = new Set(['img', 'input', 'br', 'hr', 'meta', 'link', 'path', 'circle', 'rect', 'svg']);

  // We only want to balance tags inside the jsx string.
  while ((match = tagRegex.exec(jsx)) !== null) {
    const isClosing = match[0].startsWith('</');
    const tagName = match[1];
    const attributes = match[2];
    
    if (attributes.endsWith('/') || voidElements.has(tagName)) {
        continue;
    }
    
    if (!isClosing) {
      stack.push(tagName);
    } else {
      if (stack.length > 0 && stack[stack.length - 1] === tagName) {
        stack.pop();
      } else {
        // If it's a mismatch, we might have an extra closing tag. We could ignore it.
        // For simplicity, let's just pop until we find it.
        const idx = stack.lastIndexOf(tagName);
        if (idx !== -1) {
            stack.splice(idx, stack.length - idx); // close all up to this
        }
      }
    }
  }

  // Whatever is left in the stack needs to be closed.
  while (stack.length > 0) {
    const tagName = stack.pop();
    jsx += `</${tagName}>\n`;
  }
  return jsx;
}

const file = process.argv[2];
let content = fs.readFileSync(file, 'utf8');

// We should run this specifically on the jsx body, but we can run it on the file since the file just wraps it.
// Let's replace the whole file content by just parsing and auto-closing.
// Wait, the file has `export default function... return ( <> ... </> ); }`.
// Let's strip the wrapper, fix the jsx, then re-wrap.
let bodyMatch = content.match(/<>\n([\s\S]*?)<\/>\n  \);\n}/);
if (bodyMatch) {
    let body = bodyMatch[1];
    
    // First, let's just use a simple regex to count divs
    // Actually, we can use the tag balancing logic.
    body = autoCloseTags(body);
    
    content = content.replace(bodyMatch[1], body);
    fs.writeFileSync(file, content);
    console.log("Auto-closed tags for", file);
} else {
    console.log("Could not find body in", file);
}
