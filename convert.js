const fs = require('fs');

function convertHtmlToJsx(html) {
  // Extract content between <header> and </main> (inclusive)
  const mainRegex = /<header[\s\S]*?<\/main>/;
  const match = html.match(mainRegex);
  
  if (!match) {
    console.error("Could not find <header>...</main>");
    return "";
  }
  
  let jsx = match[0];
  
  // Replace class= with className=
  jsx = jsx.replace(/class=/g, 'className=');
  // Replace for= with htmlFor=
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  
  // Convert HTML comments to JSX comments
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  
  // Close unclosed tags (img, input)
  jsx = jsx.replace(/<img([^>]*?[^\/])>/g, '<img$1 />');
  jsx = jsx.replace(/<input([^>]*?[^\/])>/g, '<input$1 />');
  
  // Handle some specific inline styles if they exist (style="width: 75%;")
  jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    // Basic conversion for width: 75%; -> style={{ width: '75%' }}
    const rules = p1.split(';').filter(Boolean);
    const styleObj = {};
    rules.forEach(rule => {
      let [key, value] = rule.split(':').map(s => s.trim());
      // Convert dash to camelCase
      key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      styleObj[key] = value;
    });
    return `style={{${Object.entries(styleObj).map(([k, v]) => `${k}: "${v}"`).join(', ')}}}`;
  });

  // Handle boolean attributes
  jsx = jsx.replace(/checked=""/g, 'defaultChecked');
  jsx = jsx.replace(/disabled=""/g, 'disabled');
  
  return jsx;
}

const inputHtml = fs.readFileSync('design_htmls/tenders_bids_management.html', 'utf8');
const jsxBody = convertHtmlToJsx(inputHtml);

const finalComponent = `"use client";

import Image from "next/image";
import Link from "next/link";

export default function TendersManagement() {
  return (
    <>
      ${jsxBody}
    </>
  );
}
`;

fs.mkdirSync('src/app/tenders', { recursive: true });
fs.writeFileSync('src/app/tenders/page.tsx', finalComponent);

console.log("Conversion successful");
