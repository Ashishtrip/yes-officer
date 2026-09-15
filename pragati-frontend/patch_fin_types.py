import re

with open('src/app/tender/[id]/financial/page.tsx', 'r') as f:
    content = f.read()

# Fix imports
content = content.replace('import api from "../../../../services/api";', 'import { api } from "../../../../services/api";')
content = content.replace('import { useAuth } from "../../../../contexts/AuthContext";', 'import { useAuth } from "../../../../context/AuthContext";')

# Fix types in .then((res) => ...)
content = content.replace('.then((res) => {', '.then((res: any) => {')
content = content.replace('.catch((err) => {', '.catch((err: any) => {')

# Define an interface for FinancialBid
financial_bid_interface = """
interface FinancialBid extends Record<string, unknown> {
  id: string;
  bidder: Record<string, unknown>;
  evaluated: number;
  baseQuoted: number;
  gst: number;
  compliance_score?: number;
}
"""

# Insert interface before Page
content = re.sub(r'export default function Page\(\) \{', financial_bid_interface + '\nexport default function Page() {', content)

# Replace (selectedBid.evaluated as number) with ((selectedBid as FinancialBid).evaluated)
content = re.sub(r'\(selectedBid\.evaluated as number\)', '((selectedBid as FinancialBid).evaluated)', content)
content = re.sub(r'selectedBid\.evaluated', '(selectedBid as FinancialBid).evaluated', content)
content = re.sub(r'selectedBid\.bidder', '(selectedBid as FinancialBid).bidder', content)
content = re.sub(r'selectedBid\.id', '(selectedBid as FinancialBid).id', content)
content = re.sub(r'bid\.bidder', '(bid as FinancialBid).bidder', content)
content = re.sub(r'bid\.evaluated', '(bid as FinancialBid).evaluated', content)
content = re.sub(r'bid\.baseQuoted', '(bid as FinancialBid).baseQuoted', content)
content = re.sub(r'bid\.gst', '(bid as FinancialBid).gst', content)
content = re.sub(r'bid\.compliance_score', '(bid as FinancialBid).compliance_score', content)

with open('src/app/tender/[id]/financial/page.tsx', 'w') as f:
    f.write(content)
