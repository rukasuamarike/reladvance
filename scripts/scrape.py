import requests
from bs4 import BeautifulSoup

URL = "https://realpython.github.io/fake-jobs/"
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")
text_content = text = soup.get_text()
text_lines = [line.strip() for line in text.splitlines() if line.strip()]
cleaned_text = "\n".join(text_lines)
print(cleaned_text)
