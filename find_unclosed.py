from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.void_elements = ['img', 'input', 'br', 'hr', 'meta', 'link', 'col', 'path', 'line', 'circle', 'stop'] # path, line, circle, stop have closing tags in XML but maybe not here? Wait, SVG tags have closing tags or self-closing in XML. In HTML5 they can be self-closing.
        
    def handle_starttag(self, tag, attrs):
        if tag not in self.void_elements:
            self.stack.append(tag)
            
    def handle_endtag(self, tag):
        if tag in self.void_elements:
            return
        if not self.stack:
            print(f"Extra closing tag: {tag}")
            return
        if self.stack[-1] == tag:
            self.stack.pop()
        else:
            print(f"Mismatched closing tag: expected {self.stack[-1]}, got {tag}")
            self.stack.pop()

with open("pragati-frontend/src/app/vigilance-analytics/page.tsx", "r") as f:
    html = f.read()
start = html.find('return (')
html = html[start:]

parser = MyHTMLParser()
parser.feed(html)
print("Remaining in stack:", parser.stack)
