import asyncio
from playwright.async_api import async_playwright
import sys
async def scrape_content(url):
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto(url)
        content = await page.inner_html("body")  # Get the inner HTML content of the body
        await browser.close()
        return content

async def write_to_file(content, filename):
    with open(filename, 'w', encoding='utf-8') as file:
        file.write(content)
    print(f"Content written to '{filename}'")

# Example usage:
url = str(sys.argv[1])
output_filename = 'scraped_content.html'
loop = asyncio.get_event_loop()
content = loop.run_until_complete(scrape_content(url))
loop.run_until_complete(write_to_file(content, output_filename))
