// function fetchAndDisplayNews() {
//     // ... existing logic to fetch and filter news based on selected ticks
//     displayNews(sortedNews);
// }

// function displayNews(newsItems) {
//     const newsContainer = document.getElementById('newsContainer');
//     newsContainer.innerHTML = '';

//     newsItems.forEach(item => {
//         const newsElement = document.createElement('div');
//         newsElement.className = 'newsItem';
//         const sentimentSummary = createSentimentSummary(item.sentiment);
//         newsElement.innerHTML = `
//             <div class="newsSummary">${item.title}</div>
//             <p class="newsParagraph">${item.summary}</p>
//             ${item.ticks.map(tick => `<span class="newsTick">Related to: ${tick}</span>`).join(' ')}
//             <div class="newsSentiment">${sentimentSummary}</div>
//             <span class="newsDate">${item.date}</span>
//             <a href="${item.url}" target="_blank" class="newsLink">Read full article</a>
//         `;
//         newsContainer.appendChild(newsElement);
//     });
// }

// function createSentimentSummary(sentimentData) {
//     return Object.entries(sentimentData).map(([symbol, data]) => {
//         const sentimentIcon = data.sentiment === "positive" ? "&#x25B2;" : "&#x25BC;";
//         return `<div>
//                     <span class="sentimentIcon">${sentimentIcon}</span>
//                     <span>${symbol}: ${data.sentiment.charAt(0).toUpperCase() + data.sentiment.slice(1)} (${data.severity})</span>
//                 </div>`;
//     }).join('');
// }
