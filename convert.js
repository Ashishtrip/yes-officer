const fs = require('fs');

function convertHtmlToJsx(html) {
  const mainRegex = /<header[\s\S]*?<\/main>/;
  const match = html.match(mainRegex);
  
  if (!match) return "";
  
  let jsx = match[0];
  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  jsx = jsx.replace(/<img([^>]*?[^\/])>/g, '<img$1 />');
  jsx = jsx.replace(/<input([^>]*?[^\/])>/g, '<input$1 />');
  
  jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    const rules = p1.split(';').filter(Boolean);
    const styleObj = {};
    rules.forEach(rule => {
      let [key, value] = rule.split(':').map(s => s.trim());
      if(!key) return;
      key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      styleObj[key] = value;
    });
    return `style={{${Object.entries(styleObj).map(([k, v]) => `${k}: "${v}"`).join(', ')}}}`;
  });

  jsx = jsx.replace(/checked=""/g, 'defaultChecked');
  jsx = jsx.replace(/disabled=""/g, 'disabled');
  jsx = jsx.replace(/<script[\s\S]*?<\/script>/gi, '');
  
  jsx = jsx.replace(/<pre[\s\S]*?<\/pre>/g, (match) => {
    return match.replace(/\{/g, '{"{"}').replace(/\}/g, '{"}"}');
  });

  return jsx;
}

const args = process.argv.slice(2);
const inputPath = args[0];
const outputPath = args[1];
const componentName = args[2];
const inputHtml = fs.readFileSync(inputPath, 'utf8');
const jsxBody = convertHtmlToJsx(inputHtml);
const finalComponent = `"use client";\nimport Image from "next/image";\nimport Link from "next/link";\nexport default function ${componentName}() {\n  return (\n    <>\n      ${jsxBody}\n    </>\n  );\n}\n`;

fs.writeFileSync(outputPath, finalComponent);
