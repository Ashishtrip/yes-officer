import re
with open("src/app/tender/[id]/ingestion/page.tsx", "r") as f:
    text = f.read()

def count_tags(tag):
    open_pattern = rf"<{tag}[ >]"
    close_pattern = rf"</{tag}>"
    open_count = len(re.findall(open_pattern, text))
    close_count = len(re.findall(close_pattern, text))
    print(f"{tag}: open={open_count}, close={close_count}, diff={open_count - close_count}")

tags = ["img", "input", "br", "hr"]
for tag in tags:
    open_pattern = rf"<{tag}[^>]*[^/]>|<{tag}>"
    # Wait, simple regex for unclosed void elements:
    unclosed = len(re.findall(rf"<{tag}(?!\s*/>)[^>]*>(?!\s*</{tag}>)", text))
    print(f"{tag} unclosed elements: {unclosed}")
