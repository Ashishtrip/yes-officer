import glob
import re

files = glob.glob('pragati-frontend/src/app/**/*.tsx', recursive=True)
for file in files:
    with open(file, 'r') as f:
        content = f.read()

    # Fix onclick -> onClick
    content = content.replace('onclick=', 'onClick=')
    
    # Fix patternunits -> patternUnits
    content = content.replace('patternunits=', 'patternUnits=')
    
    # Fix "background-image" -> "backgroundImage"
    content = content.replace('"background-image"', '"backgroundImage"')
    
    # Fix style={{"backgroundImage": "url('...')"}} etc.
    # Wait, the error is object literal may only specify known properties, and '"background-image"' does not exist
    # the replace above should handle it
    
    # Fix disabled="disabled" -> disabled={true}
    content = re.sub(r'disabled="[^"]*"', 'disabled={true}', content)
    content = re.sub(r'readonly="[^"]*"', 'readOnly={true}', content)
    content = re.sub(r'readonly\b(?!=")', 'readOnly={true}', content)

    # Fix checked="checked" -> defaultChecked={true}
    content = re.sub(r'checked="[^"]*"', 'defaultChecked={true}', content)
    
    with open(file, 'w') as f:
        f.write(content)

print("Done fixing TS errors")
