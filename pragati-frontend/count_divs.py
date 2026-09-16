import re
with open("src/app/tender/[id]/ingestion/page.tsx", "r") as f:
    text = f.read()

def count_tags(tag):
    open_pattern = rf"<{tag}[ >]"
    close_pattern = rf"</{tag}>"
    open_count = len(re.findall(open_pattern, text))
    close_count = len(re.findall(close_pattern, text))
    print(f"{tag}: open={open_count}, close={close_count}, diff={open_count - close_count}")

count_tags("div")
count_tags("main")
count_tags("header")
count_tags("nav")
count_tags("span")
