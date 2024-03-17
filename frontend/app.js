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
    {
        "date": "2024-03-17",
        "url": "https://seekingalpha.com/news/4080282-ubs-is-seeking-to-expand-us-wealth-business-through-ma-swiss-news-report",
        "title": "UBS is seeking to expand US wealth business through M&A, Swiss news report",
        "summary": "Swiss financial giant UBS is seeking merger and acquisition opportunities in the United States in the coming years, according to a report by Swiss newspaper NZZ.",
        "related_symbols": ["UBS", "MS"],
        "industry": "Financial Services, Banking, Wealth Management",
        "image": "https://via.placeholder.com/150",
        "prediction": "up 15%"
    },
    {
        "date": "2024-03-17",
        "url": "https://finance.yahoo.com/news/with-food-inflation-still-hot-consumers-turn-to-buy-now-pay-later-to-buy-groceries-and-takeout-140000942.html",
        "title": "With food inflation still hot, consumers turn to buy now, pay later to buy groceries and takeout",
        "summary": "The article discusses how food inflation has led to an increase in the use of buy now, pay later (BNPL) options for purchasing groceries and takeout.",
        "related_symbols": ["TGT", "MCD"],
        "industry": "Retail, Food and Beverage",
        "image": "https://via.placeholder.com/150",
        "prediction": "up 10%"
    },
    {
        "date": "2024-03-17",
        "url": "https://seekingalpha.com/news/4080281-shift4-ceo-said-to-reject-buyout-bids-as-too-low",
        "title": "Shift4 CEO said to reject buyout bids as too low",
        "summary": "Shift4 Payments CEO Jared Isaacman has reportedly rejected buyout offers for the company, stating that they did not adequately value the payments firm.",
        "related_symbols": ["NYSE:FOUR", "FI", "AMADF", "AMADY"],
        "industry": "Financial Services, Technology",
        "image": "https://via.placeholder.com/150",
        "prediction": "steady"
    },
    {
        "date": "2024-03-17",
        "url": "https://seekingalpha.com/news/4080280-boeing-leads-weekly-declines-among-large-cap-industrials",
        "title": "Boeing leads weekly declines among large-cap industrials",
        "summary": "Boeing led weekly declines among large-cap industrials as stocks fell for a second straight week amid investor worries about inflation data.",
        "related_symbols": ["BA", "UAL", "EADSY", "DE", "GE", "CAT", "UBER", "UNP", "RTX", "HON", "ETN", "UPS", "ADP", "LMT", "WM", "CSX", "ITW"],
        "industry": "Aerospace, Airlines, Manufacturing, Technology, Transportation, Logistics",
        "image": "https://via.placeholder.com/150",
        "prediction": "down 5%"
    },
    {
        "date": "2024-03-17",
        "url": "https://finance.yahoo.com/news/germany-france-lead-call-eib-172227489.html",
        "title": "Germany, France lead call for EIB to step up defense financing",
        "summary": "Germany and France have joined 12 other European Union countries in calling for the European Investment Bank (EIB) to enhance its financing for defense.",
        "related_symbols": [],
        "industry": "Defense, Finance, European Union",
        "image": "https://via.placeholder.com/150",
        "prediction": "steady"
    },
    {
        "date": "2024-03-17",
        "url": "https://seekingalpha.com/news/4080035-earnings-week-ahead-fedex-nike-xpeng-tencent-general-mills-and-more",
        "title": "Earnings week ahead: FedEx, Nike, XPeng, Tencent, General Mills, and more",
        "summary": "Earnings week ahead: FedEx, Nike, XPeng, Tencent, General Mills, and more (NYSE:FDX) | Seeking Alpha",
        "related_symbols": ["FDX", "NKE", "XPEV", "Tencent", "GIS"],
        "industry": "Package delivery services, consumer brands, technology, financial technology, software solutions, electric vehicles, memory chips, retail, and food and beverage.",
        "image": "https://via.placeholder.com/150",
        "prediction": "up 5%"
    },
    {
        "date": "2024-03-17",
        "url": "https://finance.yahoo.com/news/why-under-armour-founder-kevin-plank-is-the-wrong-choice-for-ceo-123012988.html",
        "title": "Why Under Armour founder Kevin Plank is the wrong choice for CEO",
        "summary": "Under Armour founder Kevin Plank is set to return as CEO, replacing Stephanie Linnartz who had been leading the company since early 2023.",
        "related_symbols": ["UAA", "ANF", "DECK", "LULU", "NKE", "MAR"],
        "industry": "Retail, Apparel, Footwear, Sportswear, Hospitality, Consumer Goods",
        "image": "https://via.placeholder.com/150",
        "prediction": "down 10%"
    },
    {
        "date": "2024-03-17",
        "url": "https://seekingalpha.com/news/4080238-largest-us-grid-could-see-58-gw-of-power-generation-shut-by-2030-report-warns",
        "title": "Largest US grid could see 58 GW of power generation shut by 2030, report warns",
        "summary": "The largest US grid could see 58 GW of power generation shut by 2030, according to a report.",
        "related_symbols": ["XLU"],
        "industry": "Energy, Utilities",
        "image": "https://via.placeholder.com/150",
        "prediction": "steady"
    }
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

function fetchAndDisplayNews() {
    const filteredNews = dummyData.filter(newsItem => 
        newsItem.related_symbols.some(symbol => selectedTicks.includes(symbol))
    );

    displayNews(filteredNews);
}

function displayNews(newsItems) {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = ''; // Clear current news

    newsItems.forEach(item => {
        const newsElement = document.createElement('div');
        newsElement.className = 'newsItem';
        newsElement.innerHTML = `
            <div class="newsSummary">${item.title}</div>
            <img src="${item.image || 'https://via.placeholder.com/150'}" alt="News Image" class="newsImage">
            <p class="newsParagraph">${item.summary}</p>
            <div class="newsDetails">
                <span class="newsDate">${item.date}</span>
                <div>Related Symbols: ${item.related_symbols.join(', ')}</div>
            </div>
            <a href="${item.url}" target="_blank" class="newsLink">Read full article</a>
        `;
        newsContainer.appendChild(newsElement);
    });
}



// function displayNews(newsItems) {
//     const newsContainer = document.getElementById('newsContainer');
//     newsContainer.innerHTML = ''; // Clear current news

//     newsItems.forEach(item => {
//         const newsElement = document.createElement('div');
//         newsElement.className = 'newsItem';
//         const updownClass = item.updown === 'up' ? 'upArrow' : 'downArrow';
//         const updownSymbol = item.updown === 'up' ? '&#x25B2;' : '&#x25BC;';
//         newsElement.innerHTML = `
//             <div class="newsSummary">${item.title}</div>
//             <img src="${item.image}" alt="News Image" class="newsImage">
//             <p class="newsParagraph">${item.summary}</p>
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

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    updateSelectedTicksDisplay();
    fetchAndDisplayNews(); // If you want to display news on initial load
});


