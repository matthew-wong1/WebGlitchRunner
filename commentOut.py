import re
import sys

def comment_out(js_file_path):
    try: 
        with open(js_file_path, 'r') as file:
            lines = file.readlines()
    except:
        print(f"Error: File '{js_file_path}' not found.")
        return
    
    pattern_start = re.compile(r'\.addEventListener\("uncapturederror"')
    
    in_block = False
    
    with open(js_file_path, 'w') as file:
        for line in lines:
            if pattern_start.search(line):
                in_block = True
                file.write(f"// {line}")  # Comment out the first line
            elif in_block:
                file.write(f"// {line}")
                if '});' in line:
                    in_block = False
            else:
                # If we're not in a block, write the line as is
                file.write(line)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python commentOut.py <js_file_to_parse>")
    else:
        comment_out(sys.argv[1])
