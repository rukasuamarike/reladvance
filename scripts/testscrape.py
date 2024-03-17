import requests
from bs4 import BeautifulSoup
import sys
from urllib.parse import urlparse, quote

def extract_subdirectories(url):
    parsed_url = urlparse(url)
    path = parsed_url.path.strip('/')
    subdirectories = path.split('/')
    return subdirectories


def scrape_text(url):
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")
    text_content = text = soup.get_text()
    text_lines = [line.strip() for line in text.splitlines() if line.strip()]
    cleaned_text = "\n".join(text_lines)
    return cleaned_text

def writefile(url,text):
    parsed_url = "-".join(extract_subdirectories(url))

    with open(f"../data/{parsed_url}.txt", "w", encoding="utf-8") as file:
        file.write(text)
    print(f"Text content saved to {parsed_url}.txt")
urls=[
https://finance.yahoo.com/news/germany-france-lead-call-eib-172227489.html,
https://finance.yahoo.com/news/why-under-armour-founder-kevin-plank-is-the-wrong-choice-for-ceo-123012988.html,
https://finance.yahoo.com/news/with-food-inflation-still-hot-consumers-turn-to-buy-now-pay-later-to-buy-groceries-and-takeout-140000942.html,
https://finance.yahoo.com/news/with-food-inflation-still-hot-consumers-turn-to-buy-now-pay-later-to-buy-groceries-and-takeout-140000942.html,
]
for i in urls:
    url=i
    text = scrape_text(url)
    writefile(url,text)
