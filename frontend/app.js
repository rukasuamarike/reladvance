let selectedTicks = [];
const dummyData = [
    {
        "summary": "Tech giant XYZ reports a groundbreaking innovation in AI, leading to a surge in stock prices.",
        "url": "https://example.com/news/xyz-ai-innovation",
        "ticks": ["XYZ"],
        "updown": "up",
        "date": "2024-03-17",
        "paragraph": "In a stunning development, XYZ has unveiled a new AI technology that's set to revolutionize the industry. Stocks soared as investors rushed to get a piece of XYZ, marking a significant shift in the tech landscape.",
        "image": "https://via.placeholder.com/150",
        "prediction": "up 15%"
    },
    {
        "summary": "Automobile manufacturer ABC faces a recall scandal, affecting its stock negatively.",
        "url": "https://example.com/news/abc-recall-scandal",
        "ticks": ["ABC"],
        "updown": "down",
        "date": "2024-03-17",
        "paragraph": "ABC Automobile has announced a massive recall of its flagship model due to safety concerns, leading to a significant drop in stock value as the market reacts.",
        "image": "https://via.placeholder.com/150",
        "prediction": "down 8%"
    },
    {
        "summary": "Retail giant MNO's quarterly earnings surpass expectations, driving up its stock.",
        "url": "https://example.com/news/mno-earnings-surprise",
        "ticks": ["MNO"],
        "updown": "up",
        "date": "2024-03-17",
        "paragraph": "MNO has once again defied analysts' expectations with its quarterly earnings report, indicating a robust retail sector and sending its stocks climbing.",
        "image": "https://via.placeholder.com/150",
        "prediction": "up 10%"
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
            <div class="newsSummary">${item.summary}</div>
            <img src="${item.image}" alt="News Image" class="newsImage">
            <p class="newsParagraph">${item.paragraph}</p>
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



