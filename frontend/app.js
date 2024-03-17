// let selectedTicks = [];
// const dummyData = [
//     {
//         "summary": "Tech giant XYZ reports a groundbreaking innovation in AI, leading to a surge in stock prices.",
//         "url": "https://example.com/news/xyz-ai-innovation",
//         "ticks": ["XYZ"],
//         "updown": "up",
//         "date": "2024-03-17",
//         "paragraph": "In a stunning development, XYZ has unveiled a new AI technology that's set to revolutionize the industry. Stocks soared as investors rushed to get a piece of XYZ, marking a significant shift in the tech landscape.",
//         "image": "https://via.placeholder.com/150",
//         "prediction": "up 15%"
//     },
//     {
//         "summary": "Automobile manufacturer ABC faces a recall scandal, affecting its stock negatively.",
//         "url": "https://example.com/news/abc-recall-scandal",
//         "ticks": ["ABC"],
//         "updown": "down",
//         "date": "2024-03-17",
//         "paragraph": "ABC Automobile has announced a massive recall of its flagship model due to safety concerns, leading to a significant drop in stock value as the market reacts.",
//         "image": "https://via.placeholder.com/150",
//         "prediction": "down 8%"
//     },
//     {
//         "summary": "Retail giant MNO's quarterly earnings surpass expectations, driving up its stock.",
//         "url": "https://example.com/news/mno-earnings-surprise",
//         "ticks": ["MNO"],
//         "updown": "up",
//         "date": "2024-03-17",
//         "paragraph": "MNO has once again defied analysts' expectations with its quarterly earnings report, indicating a robust retail sector and sending its stocks climbing.",
//         "image": "https://via.placeholder.com/150",
//         "prediction": "up 10%"
//     }
// ];


// function addTick() {
//     const tickInput = document.getElementById('tickInput');
//     const tick = tickInput.value.toUpperCase().trim();
//     if (tick && !selectedTicks.includes(tick)) {
//         selectedTicks.push(tick);
//         fetchAndDisplayNews();
//         updateSelectedTicksDisplay();
//     }
//     tickInput.value = ''; // Clear the input field
// }

// function removeTick(tickToRemove) {
//     selectedTicks = selectedTicks.filter(tick => tick !== tickToRemove);
//     fetchAndDisplayNews();
//     updateSelectedTicksDisplay();
// }

// function updateSelectedTicksDisplay() {
//     const container = document.getElementById('selectedTicksContainer');
//     container.innerHTML = ''; // Clear the current list
//     selectedTicks.forEach(tick => {
//         const tickElement = document.createElement('span');
//         tickElement.classList.add('selectedTick');
//         tickElement.textContent = tick;
//         const removeButton = document.createElement('button');
//         removeButton.textContent = 'Remove';
//         removeButton.onclick = () => removeTick(tick);
//         tickElement.appendChild(removeButton);
//         container.appendChild(tickElement);
//     });
// }


// function fetchAndDisplayNews() {
//     const filteredNews = dummyData.filter(newsItem => 
//         newsItem.ticks.some(tick => selectedTicks.includes(tick))
//     );

//     // Sort by tick and then by date
//     const sortedNews = filteredNews.sort((a, b) => {
//         const tickCompare = a.ticks[0].localeCompare(b.ticks[0]);
//         if (tickCompare !== 0) return tickCompare; // Prioritize tick comparison
//         return new Date(b.date) - new Date(a.date); // Then by date, newest first
//     });

//     displayNews(sortedNews);
// }


// function displayNews(newsItems) {
//     const newsContainer = document.getElementById('newsContainer');
//     newsContainer.innerHTML = ''; // Clear current news

//     newsItems.forEach(item => {
//         const newsElement = document.createElement('div');
//         newsElement.className = 'newsItem';
//         const updownClass = item.updown === 'up' ? 'upArrow' : 'downArrow';
//         const updownSymbol = item.updown === 'up' ? '&#x25B2;' : '&#x25BC;';
//         newsElement.innerHTML = `
//             <div class="newsSummary">${item.summary}</div>
//             <img src="${item.image}" alt="News Image" class="newsImage">
//             <p class="newsParagraph">${item.paragraph}</p>
//             ${item.ticks.map(tick => `<span class="newsTick">Related to: ${tick}</span>`).join(' ')}
//             <div class="newsDetails">
//                 <span class="${updownClass}">${updownSymbol} ${item.prediction}</span>
//                 <span class="newsDate">${item.date}</span>
//             </div>
//             <a href="${item.url}" target="_blank" class="newsLink">Read full article</a>
//         `;
//         newsContainer.appendChild(newsElement);
//     });
// }


let selectedTicks = [];
const dummyData = [
    {'date': '2024-03-17', 'url': 'https://seekingalpha.com/news/4080282-ubs-is-seeking-to-expand-us-wealth-business-through-ma-swiss-news-report', 'title': 'ubs is seeking to expand us wealth business through ma swiss news report', 'summary': 'Swiss financial giant UBS is seeking merger and acquisition opportunities in the United States in the coming years, according to a report by Swiss newspaper NZZ', 'related_symbols': 'UBS (UBS) and Morgan Stanley (MS)', 'industry': 'Financial Services, Wealth Management, Investment Banking', 'sentiment': '{"UBS": {"sentiment": "positive", "severity": "medium"}, "MS": {"sentiment": "neutral", "severity": "low"}}'},
{'date': 'url: https://finance.yahoo.com/news/with-food-inflation-still-hot-consumers-turn-to-buy-now-pay-later-to-buy-groceries-and-takeout-140000942.html', 'url': 'title: with food inflation still hot consumers turn to buy now pay later to buy groceries and takeout', 'title': '', 'summary': 'The article discusses how food inflation has led to an increase in the use of buy now, pay later (BNPL) options for purchasing groceries and takeout', 'related_symbols': 'TGT, MCD', 'industry': 'Retail, Food & Beverage', 'sentiment': '{"TGT": {"sentiment": "negative", "severity": "medium"}, "MCD": {"sentiment": "negative", "severity": "medium"}}'},
{'date': '2024-03-17', 'url': 'https://seekingalpha.com/news/4080281-shift4-ceo-said-to-reject-buyout-bids-as-too-low', 'title': 'shift4 ceo said to reject buyout bids as too low', 'summary': 'Shift4 Payments CEO Jared Isaacman has reportedly rejected buyout offers for the company, stating that they did not adequately value the payments firm', 'related_symbols': 'NYSE:FOUR, FI, AMADF, AMADY', 'industry': 'Payments, Financial Services, Technology', 'sentiment': '{"NYSE:FOUR": {"sentiment": "positive", "severity": "medium"}, "FI": {"sentiment": "negative", "severity": "low"}, "AMADF": {"sentiment": "negative", "severity": "low"}, "AMADY": {"sentiment": "negative", "severity": "low"}}'},
{'date': '2024-03-17', 'url': 'https://seekingalpha.com/news/4080280-boeing-leads-weekly-declines-among-large-cap-industrials', 'title': 'boeing leads weekly declines among large cap industrials', 'summary': 'Boeing led weekly declines among large-cap industrials as stocks fell for a second straight week amid investor worries about inflation data', 'related_symbols': 'Boeing (BA), United Airlines (UAL), Airbus (EADSY), Deere (DE), General Electric (GE), Caterpillar (CAT), Uber Technologies (UBER), Union Pacific Corp (UNP), RTX (RTX), Honeywell International (HON), Eaton (ETN), United Parcel Service (UPS), Automatic Data Processing (ADP), Lockheed Martin (LMT), Waste Management (WM), CSX (CSX), Illinois Tool Works (ITW)', 'industry': 'Aerospace, Airlines, Manufacturing, Technology, Transportation, Logistics', 'sentiment': '{\n"BA": {"sentiment": "negative", "severity": "high"},\n"UAL": {"sentiment": "negative", "severity": "medium"},\n"EADSY": {"sentiment": "positive", "severity": "medium"},\n"DE": {"sentiment": "negative", "severity": "medium"},\n"GE": {"sentiment": "negative", "severity": "low"},\n"CAT": {"sentiment": "negative", "severity": "low"},\n"UBER": {"sentiment": "negative", "severity": "low"},\n"UNP": {"sentiment": "negative", "severity": "low"},\n"RTX": {"sentiment": "negative", "severity": "low"},\n"HON": {"sentiment": "negative", "severity": "low"},\n"ETN": {"sentiment": "negative", "severity": "low"},\n"UPS": {"sentiment": "negative", "severity": "low"},\n"ADP": {"sentiment": "negative", "severity": "low"},\n"LMT": {"sentiment": "negative", "severity": "low"},\n"WM": {"sentiment": "negative", "severity": "low"},\n"CSX": {"sentiment": "negative", "severity": "low"},\n"ITW": {"sentiment": "negative", "severity": "low"}\n}'},
{'date': '2024-03-17', 'url': 'https://finance.yahoo.com/news/germany-france-lead-call-eib-172227489.html', 'title': 'germany france lead call eib', 'summary': 'Germany and France have joined 12 other European Union countries in calling for the European Investment Bank (EIB) to enhance its financing for defense', 'related_symbols': 'There are no specific publicly traded companies mentioned in this article.', 'industry': 'Defense, Finance, European Union', 'sentiment': '{"tick": "N/A", "sentiment": "neutral", "severity": "low"}'},
{'date': '2024-03-17', 'url': 'https://seekingalpha.com/news/4080035-earnings-week-ahead-fedex-nike-xpeng-tencent-general-mills-and-more', 'title': 'earnings week ahead fedex nike xpeng tencent general mills and more', 'summary': 'Earnings week ahead: FedEx, Nike, XPeng, Tencent, General Mills and more (NYSE:FDX) | Seeking Alpha', 'related_symbols': 'The article discusses upcoming earnings reports from FedEx (FDX), Nike (NKE), XPeng (XPEV), Tencent, General Mills (GIS), and other companies.', 'industry': 'Package delivery services, consumer brands, technology, financial technology, software solutions, electric vehicles, memory chips, retail, and food and beverage.', 'sentiment': '{\n"FDX": {"sentiment": "negative", "severity": "medium"},\n"NKE": {"sentiment": "negative", "severity": "medium"},\n"XPEV": {"sentiment": "negative", "severity": "high"},\n"GIS": {"sentiment": "positive", "severity": "low"}\n}'},
{'date': '2024-03-17', 'url': 'https://finance.yahoo.com/news/why-under-armour-founder-kevin-plank-is-the-wrong-choice-for-ceo-123012988.html', 'title': 'why under armour founder kevin plank is the wrong choice for ceo ', 'summary': 'Under Armour founder Kevin Plank is set to return as CEO, replacing Stephanie Linnartz who had been leading the company since early 2023', 'related_symbols': 'UAA, ANF, DECK, LULU, NKE, MAR', 'industry': 'Retail, Apparel, Footwear, Sports, Hospitality, Consumer Goods', 'sentiment': '{\n"UAA": {"sentiment": "negative", "severity": "high"},\n"ANF": {"sentiment": "positive", "severity": "medium"},\n"DECK": {"sentiment": "positive", "severity": "medium"},\n"LULU": {"sentiment": "positive", "severity": "medium"},\n"NKE": {"sentiment": "positive", "severity": "medium"},\n"MAR": {"sentiment": "neutral", "severity": "low"}\n}'},
{'date': '2024-03-17', 'url': 'https://seekingalpha.com/news/4080238-largest-us-grid-could-see-58-gw-of-power-generation-shut-by-2030-report-warns', 'title': 'largest us grid could see 58 gw of power generation shut by 2030 report warns', 'summary': 'The largest U', 'related_symbols': 'XLU', 'industry': 'Energy, Utilities', 'sentiment': '{"XLU": {"sentiment": "negative", "severity": "high"}}'}

];

function addTick() {
    const tickInput = document.getElementById('tickInput');
    const tick = tickInput.value.toUpperCase().trim();
    if (tick && !selectedTicks.includes(tick)) {
        selectedTicks.push(tick);
        fetchAndDisplayNews();
        updateSelectedTicksDisplay();
    }
    tickInput.value = ''; // Clear the input field
}

function removeTick(tickToRemove) {
    selectedTicks = selectedTicks.filter(tick => tick !== tickToRemove);
    fetchAndDisplayNews();
    updateSelectedTicksDisplay();
}

function updateSelectedTicksDisplay() {
    const container = document.getElementById('selectedTicksContainer');
    container.innerHTML = ''; // Clear the current list
    selectedTicks.forEach(tick => {
        const tickElement = document.createElement('span');
        tickElement.classList.add('selectedTick');
        tickElement.textContent = tick;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeTick(tick);
        tickElement.appendChild(removeButton);
        container.appendChild(tickElement);
    });
}

function fetchAndDisplayNews() {
    const filteredNews = dummyData.filter(newsItem => 
        newsItem.ticks.some(tick => selectedTicks.includes(tick))
    );

    // Sort by tick and then by date
    const sortedNews = filteredNews.sort((a, b) => {
        const tickCompare = a.ticks[0].localeCompare(b.ticks[0]);
        if (tickCompare !== 0) return tickCompare; // Prioritize tick comparison
        return new Date(b.date) - new Date(a.date); // Then by date, newest first
    });

    displayNews(sortedNews);
}

function displayNews(newsItems) {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = ''; // Clear current news

    newsItems.forEach(item => {
        const newsElement = document.createElement('div');
        newsElement.className = 'newsItem';
        const updownClass = item.updown === 'up' ? 'upArrow' : 'downArrow';
        const updownSymbol = item.updown === 'up' ? '&#x25B2;' : '&#x25BC;';
        newsElement.innerHTML = `
            <div class="newsSummary">${item.title}</div>
            <img src="${item.image}" alt="News Image" class="newsImage">
            <p class="newsParagraph">${item.summary}</p>
            ${item.ticks.map(tick => `<span class="newsTick">Related to: ${tick}</span>`).join(' ')}
            <div class="newsDetails">
                <span class="${updownClass}">${updownSymbol} ${item.prediction}</span>
                <span class="newsDate">${item.date}</span>
            </div>
            <a href="${item.url}" target="_blank" class="newsLink">Read full article</a>
        `;
        newsContainer.appendChild(newsElement);
    });
}

// function fetchAndDisplayNews() {
//     // This might need to change if you want to filter news based on sentiment
//     // For example, if you want to display only news with a positive sentiment for a tick:
//     const filteredNews = dummyData.filter(newsItem => 
//         Object.keys(newsItem.sentiment).some(tick => 
//             selectedTicks.includes(tick) && newsItem.sentiment[tick].sentiment === "positive"
//         )
//     );
    
//     // Assuming no sorting by tick is required as there's no `ticks` array in the new data
//     // Sorting by date (assuming all entries have the same date)
//     const sortedNews = filteredNews.sort((a, b) => new Date(b.date) - new Date(a.date));

//     displayNews(sortedNews);
// }

// function displayNews(newsItems) {
//     const newsContainer = document.getElementById('newsContainer');
//     newsContainer.innerHTML = ''; // Clear current news

//     newsItems.forEach(item => {
//         // Extract and format the sentiment information
//         const sentiments = Object.entries(item.sentiment).map(([symbol, data]) => {
//             const sentimentSymbol = data.sentiment === "positive" ? '&#x25B2;' : '&#x25BC;';
//             return `${symbol} ${sentimentSymbol} (${data.sentiment}, ${data.severity})`;
//         }).join(', ');

//         const newsElement = document.createElement('div');
//         newsElement.className = 'newsItem';
//         newsElement.innerHTML = `
//             <div class="newsSummary">${item.title}</div>
//             <p class="newsParagraph">${item.summary}</p>
//             <div class="newsSentiments">Sentiment: ${sentiments}</div>
//             <div class="newsDetails">
//                 <span class="newsDate">${item.date}</span>
//             </div>
//             <a href="${item.url}" target="_blank" class="newsLink">Read full article</a>
//         `;
//         newsContainer.appendChild(newsElement);
//     });
// }

// // Initialization
// document.addEventListener('DOMContentLoaded', function() {
//     updateSelectedTicksDisplay();
//     fetchAndDisplayNews(); // If you want to display news on initial load
// });

// Initialization
// document.addEventListener('DOMContentLoaded', function() {
//     updateSelectedTicksDisplay();
//     fetchAndDisplayNews(); // If you want to display news on initial load
// });


