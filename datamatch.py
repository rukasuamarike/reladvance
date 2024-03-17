import os
import re
# Function to read URLs from a file
def read_urls(file_path):
    with open(file_path, 'r') as file:
        return file.readlines()

# Function to append content to a file
def append_to_file(file_path, content):
    with open(file_path, 'a') as file:
        file.write(content)

# Directory containing the data files
data_directory = "./data"

# List files in the data directory with "news" in their name
files = [f for f in os.listdir(data_directory) if "news" in f]

# Read URLs from the URLs file
urls = read_urls(os.path.join(data_directory, "urls.txt"))

# Iterate over each file
for file_name in files:
    file_path = os.path.join(data_directory, file_name)
    # Open and read content from the file
    with open(file_path, 'r') as file:
        file_content = file.read()
    # Find matching URL for the file
    f1=re.sub(r'-', '/', file_name, 1)
    f2=re.sub(r'-', '/', file_name, 2)
    f1e2= f1[:-4] in file_name
    namespace=re.sub(r'-', ' ', file_name[5:]) if f1e2 else re.sub(r'-', ' ', file_name[13:]) 
    
        
    matching_urls = [url.strip() for url in urls if (f1[:-4] in url or f2[:-4] in url)]
    # Print matched file names and URLs
    for url in matching_urls:
        print((file_name, url))
    # Append matching URLs to the file
    for url in matching_urls:
        append_to_file(file_path, f"date: 2024-03-17\n")
        append_to_file(file_path, f"url: {url}\n")
        append_to_file(file_path, f"title: {namespace[:-4]}\n")
print(matching_urls)

