function displayNews(title, text) {
    document.getElementById('newTitle').innerHTML = title
    document.getElementById('newText').innerHTML = text
    console.log(title + ": " + text)
    return;
}

let news = [
    { id: 1, title: 'News1', content: "bla" },
    { id: 2, title: 'News2', content: "ble" },
    { id: 3, title: 'News3', content: "blu" }
];



function delayedForEach(arr, callback, delay) {
    let index = 0;
    const intervalId = setInterval(() => {
        callback(arr[index].title, arr[index].content);
        index++;
        if (index === arr.length) {
            clearInterval(intervalId);
        }
    }, delay);
}

// Usage
delayedForEach(news, displayNews, 5000);

document.getElementById("submit").addEventListener("click", buttonClick);

function buttonClick() {
    const newsId = news.length + 1;
    const newsTitle = document.getElementById("newsTitle").value;
    const newsContent = document.getElementById("newsContent").value;
    news.push({ id: newsId, title: newsTitle, content: newsContent });
    console.log(news.length);

    delayedForEach(news, displayNews, 5000);
}


