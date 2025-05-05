import re

def add_two_newlines_before_em_dash(input_file, output_file=None):
    with open(input_file, 'r', encoding='utf-8') as file:
        content = file.read()

    # Replace any spaces/tabs + em dash with two newlines + em dash
    updated_content = re.sub(r'[ \t]*—', r'\n\n—', content)

    if output_file:
        with open(output_file, 'w', encoding='utf-8') as file:
            file.write(updated_content)
        print(f"✅ Updated file saved as: {output_file}")
    else:
        with open(input_file, 'w', encoding='utf-8') as file:
            file.write(updated_content)
        print(f"✅ Original file updated: {input_file}")
        
# Example usage
add_two_newlines_before_em_dash('O_Banqueiro_Anarquista.js')  # Overwrites the original file
# Or
# add_newline_before_dash('yourfile.js', 'updated_file.js')  # Saves to a new file
