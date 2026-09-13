const fs = require('fs');
const cheerio = require('cheerio');

const args = process.argv.slice(2);
const inputPath = args[0];
const outputPath = args[1];
const componentName = args[2];

const inputHtml = fs.readFileSync(inputPath, 'utf8');
const $ = cheerio.load(inputHtml, { xmlMode: false });

// Extract header and main, and optionally footer if it exists.
let jsx = '';
$('header').each((i, el) => { jsx += $.html(el); });
$('main').each((i, el) => { jsx += $.html(el); });
$('footer').each((i, el) => { jsx += $.html(el); });

// Strip all script tags
jsx = jsx.replace(/<script[\s\S]*?<\/script>/gi, '');

// Fix class to className, for to htmlFor
jsx = jsx.replace(/class=/g, 'className=');
jsx = jsx.replace(/for=/g, 'htmlFor=');

// Fix inline styles
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

// Boolean attributes
jsx = jsx.replace(/checked=""/g, 'defaultChecked');
jsx = jsx.replace(/disabled=""/g, 'disabled');
jsx = jsx.replace(/readonly=""/g, 'readOnly');

// Close unclosed self-closing tags
jsx = jsx.replace(/<img([^>]*?[^\/])>/g, '<img$1 />');
jsx = jsx.replace(/<input([^>]*?[^\/])>/g, '<input$1 />');
jsx = jsx.replace(/<hr([^>]*?[^\/])>/g, '<hr$1 />');
jsx = jsx.replace(/<br([^>]*?[^\/])>/g, '<br$1 />');
jsx = jsx.replace(/<meta([^>]*?[^\/])>/g, '<meta$1 />');

// Remove SVG errors
jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
jsx = jsx.replace(/fill-opacity=/g, 'fillOpacity=');
jsx = jsx.replace(/preserveaspectratio=/g, 'preserveAspectRatio=');
jsx = jsx.replace(/viewbox=/g, 'viewBox=');
jsx = jsx.replace(/stroke-dasharray=/g, 'strokeDasharray=');

// Escape { and } in text
jsx = jsx.replace(/\{/g, '{"{"}').replace(/\}/g, '{"}"}');
// Wait, escaping { and } everywhere breaks style={{}} and {/* */} comments.
// Instead, just fix the style and let's not blindly escape all { and }.
// We'll revert `{` -> `{"{"}` for style=
jsx = jsx.replace(/style=\{"\{"\}\{"\{"\}(.*?)\{"\}"\}\{"\}"\}/g, 'style={{$1}}');
// Fix comments
jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

const finalComponent = `"use client";

import Image from "next/image";
import Link from "next/link";

export default function ${componentName}() {
  return (
    <>
      ${jsx}
    </>
  );
}
`;

const path = require('path');
const outDir = path.dirname(outputPath);
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outputPath, finalComponent);
console.log(`Smart Conversion successful: ${outputPath}`);
