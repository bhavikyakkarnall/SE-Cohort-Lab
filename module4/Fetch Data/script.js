
async function fetchData(limit) {
    var response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);

    var data = await response.json();
    return data

}
async function test_DisplayRecords() {
    var twoRecords = await fetchData(2);
    console.log(twoRecords);
}

async function DisplayRecords() {
    var records = await fetchData(10);

    records.forEach((e) => addCard(e.title, e.body))

    data.forEach((e) => addCard(e.name, e.age,));
}

window.onload = async () => {
    await DisplayRecords();
}

function addCard(title, text) {
    const template =
        document.getElementById("card-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = title;
    template.querySelector('.card-text').innerText = text;
    document.getElementById('col').appendChild(template);

    return;
}

