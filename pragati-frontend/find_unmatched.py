def find_unmatched(file_path):
    with open(file_path, 'r') as f:
        lines = f.readlines()
    
    stack = []
    for line_no, line in enumerate(lines):
        for col_no, char in enumerate(line):
            if char == '{':
                stack.append(('{', line_no + 1))
            elif char == '}':
                if stack and stack[-1][0] == '{':
                    stack.pop()
                else:
                    print(f"Unmatched }} at line {line_no + 1}")
                    return
    
    for un in stack:
        print(f"Unmatched {un[0]} at line {un[1]}")

find_unmatched('src/app/tender/[id]/tec/page.tsx')
