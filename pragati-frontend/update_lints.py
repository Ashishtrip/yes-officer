import re
import glob

files = ["src/app/page.tsx", "src/app/tender/[id]/page.tsx", "src/app/bidder/[id]/page.tsx", "src/app/login/page.tsx"]
for file in files:
    try:
        with open(file, 'r') as f:
            content = f.read()
            
        content = content.replace("tender: any", "tender: Record<string, any>")
        content = content.replace("bid: any", "bid: Record<string, any>")
        content = content.replace("<any>", "<Record<string, any>>")
        content = content.replace("const [tender, setTender] = useState<any>", "const [tender, setTender] = useState<Record<string, any>>")
        content = content.replace("const [bid, setBid] = useState<any>", "const [bid, setBid] = useState<Record<string, any>>")
        
        with open(file, 'w') as f:
            f.write(content)
    except FileNotFoundError:
        pass
