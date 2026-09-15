import re
import os
import sys

def convert_html_to_tsx(input_html, output_tsx):
    print(f"Converting {input_html} to {output_tsx}")
    with open(input_html, "r") as f:
        html = f.read()

    start_match = re.search(r'<body[^>]*>', html)
    if not start_match:
        print("No body tag found")
        return
    start = start_match.end()
    
    end_match = html.rfind('</body>')
    if end_match == -1:
        end_match = len(html)
        
    body = html[start:end_match]
    body = '\n'.join([line for line in body.split('\n') if line.strip() != ''])

    body = body.replace('class="', 'className="')

    body = re.sub(r'style="([^"]+)"', lambda m: 'style={{' + ', '.join([f'"{k.strip()}": "{v.strip()}"' for k, v in [x.split(':', 1) for x in m.group(1).split(';') if x.strip()]]) + '}}', body)

    void_elements = ['img', 'input', 'br', 'hr', 'meta', 'link', 'col']
    for tag in void_elements:
        body = re.sub(f'<{tag}([^>]*?)(?<!/)>', f'<{tag}\\1 />', body)
        body = re.sub(f'</{tag}>', '', body)

    body = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', body, flags=re.DOTALL)

    standard_header = """
      <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-surface-container-high shadow-sm">
        <div className="h-14 w-full px-layout-gutter flex items-center justify-between gap-space-lg">
          <div className="flex items-center gap-space-md min-w-[280px]">
            <div className="flex flex-col">
              <div className="flex items-center gap-space-xs">
                <span className="font-title-sm text-title-sm text-primary leading-none font-bold">Yes Officer</span>
                <span className="px-1.5 py-0.5 rounded bg-surface-container text-primary font-label-sm text-[10px] uppercase font-bold tracking-wider">Gov Portal</span>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight mt-0.5">GeM Integrated Compliance & Statutory Audit</span>
            </div>
          </div>
          <nav className="hidden xl:flex items-center h-full gap-space-lg" aria-label="Main Navigation">
            <Link href="/" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Tenders &amp; Bids</Link>
            <Link href="/vigilance-analytics" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Vigilance &amp; Analytics</Link>
            <Link href="/statutory-rules" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Compliance Rules</Link>
            <Link href="/portal-connectors" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Portal Connectors</Link>
            <Link href="/audit-logs" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">Audit Logs</Link>
            <Link href="/user-management" className="h-full flex items-center px-space-xs font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">User &amp; Access / Admin</Link>
          </nav>
          <div className="flex items-center gap-space-md ml-auto">
            <div className="hidden md:flex items-center bg-surface-container-low rounded-xl px-space-md py-1 border border-outline-variant focus-within:border-primary focus-within:bg-surface-container-lowest transition-colors w-64">
              <span className="material-symbols-outlined text-on-surface-variant text-[18px] mr-space-xs">search</span>
              <input type="text" className="bg-transparent border-none outline-none font-body-sm text-body-sm text-on-surface placeholder-on-surface-variant w-full" placeholder="Search tenders, GSTIN, PAN..." />
            </div>
            <button type="button" className="relative p-space-xs rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" aria-label="Notifications">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-error ring-2 ring-surface-container-lowest"></span>
            </button>
            <div className="h-6 w-px bg-surface-container-high mx-space-2xs"></div>
            <div className="flex items-center gap-space-sm pl-space-xs cursor-pointer group">
              <div className="hidden lg:flex flex-col text-left">
                <span className="font-label-md text-label-md text-on-surface leading-tight font-semibold">Rajesh Kumar, IAS</span>
                <span className="font-label-sm text-label-sm text-on-surface-variant leading-tight">Senior Procurement Officer</span>
              </div>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface text-[18px]">expand_more</span>
            </div>
          </div>
        </div>
      </header>
"""
    body = re.sub(r'<header.*?</header>', standard_header, body, flags=re.DOTALL)

    body = re.sub(r'<script.*?</script>', '', body, flags=re.DOTALL)

    svg_attrs = [
        'preserveAspectRatio', 'viewBox', 'linearGradient', 'stroke-linecap', 
        'stroke-width', 'stroke-opacity', 'fill-opacity', 'stroke-dasharray',
        'stop-color', 'stop-opacity', 'clip-rule', 'fill-rule', 'clip-path'
    ]
    for attr in svg_attrs:
        lower = attr.lower()
        if '-' in attr:
            parts = attr.split('-')
            camel = parts[0] + ''.join(word.capitalize() for word in parts[1:])
            body = body.replace(attr, camel)
            body = body.replace(lower, camel)
        else:
            body = body.replace(lower, attr)

    body = body.replace('for="', 'htmlFor="')
    body = re.sub(r'<a\b([^>]*)>', r'<Link\1>', body)
    body = body.replace('</a>', '</Link>')
    
    body = body.replace('checked=""', 'defaultChecked')
    body = body.replace('selected=""', 'defaultValue')
    body = re.sub(r'<script.*?>', '', body)

    final_code = f'''"use client";
import React from "react";
import Link from "next/link";

export default function Page() {{
  return (
    <div className="bg-surface font-sans text-on-surface min-h-screen flex flex-col">
{body}
    </div>
  );
}}
'''
    os.makedirs(os.path.dirname(output_tsx), exist_ok=True)
    with open(output_tsx, "w") as f:
        f.write(final_code)
    print("Done")

if __name__ == "__main__":
    if len(sys.argv) == 3:
        convert_html_to_tsx(sys.argv[1], sys.argv[2])
    else:
        print("Usage: python3 convert.py <input.html> <output.tsx>")
