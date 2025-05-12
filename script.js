// Yangiliklar ro'yxati
const newsData = [
    {
        title: "Futbol jahon chempionati tugadi",
        content: "Futbol jahon chempionati 2025-yilda ajoyib tugadi. Eng yaxshi jamoa va o'yinchilar aniqlangan.",
        date: "2025-05-12"
    },
    {
        title: "Messi yangi jamoaga o'tdi",
        content: "Lionel Messi yana bir bor transfer bo'ldi va yangi jamoada o'ynashni boshladi.",
        date: "2025-05-10"
    },
    {
        title: "Cristiano Ronaldo rekord qo'ydi",
        content: "Cristiano Ronaldo futbol tarixida yangi rekord o'rnatdi. U eng ko'p gol urgan o'yinchi bo'ldi.",
        date: "2025-05-09"
    }
];

// Yangiliklarni sahifaga qo'shish
const newsContainer = document.getElementById("news-container");

newsData.forEach(news => {
    const newsItem = document.createElement("div");
    newsItem.innerHTML = `
        <h3>${news.title}</h3>
        <p>${news.content}</p>
        <small>${news.date}</small>
    `;
    newsContainer.appendChild(newsItem);
});
