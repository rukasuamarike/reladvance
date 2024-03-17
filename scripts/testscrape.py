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
"https://seekingalpha.com/news/4080282-ubs-is-seeking-to-expand-us-wealth-business-through-ma-swiss-news-report",
"https://seekingalpha.com/news/4080281-shift4-ceo-said-to-reject-buyout-bids-as-too-low",
"https://seekingalpha.com/news/4080238-largest-us-grid-could-see-58-gw-of-power-generation-shut-by-2030-report-warns",
"https://seekingalpha.com/news/4080035-earnings-week-ahead-fedex-nike-xpeng-tencent-general-mills-and-more",
"https://seekingalpha.com/news/4080280-boeing-leads-weekly-declines-among-large-cap-industrials"]
for i in urls:
    url=i
    text = scrape_text(url)
    writefile(url,text)
