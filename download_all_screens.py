import json
import urllib.request
import os

os.makedirs('design_htmls', exist_ok=True)

with open('/Users/ashishdeotripathi/.gemini/antigravity-ide/brain/34db1852-b4d0-4f54-9978-197ac0606cb2/.system_generated/steps/303/output.txt', 'r') as f:
    data = json.load(f)

for screen in data['screens']:
    title = screen.get('title', 'untitled').replace(' ', '_').replace('&', 'and').replace(',', '').replace('-', '_').replace('(', '').replace(')', '').replace('/', '_').replace('__', '_').lower()
    
    html_info = screen.get('htmlCode', {})
    download_url = html_info.get('downloadUrl')
    
    if download_url:
        filename = f"design_htmls/{title}.html"
        print(f"Downloading {title}...")
        try:
            urllib.request.urlretrieve(download_url, filename)
        except Exception as e:
            print(f"Failed to download {title}: {e}")
