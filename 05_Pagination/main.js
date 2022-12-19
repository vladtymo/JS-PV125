const list = document.getElementById('quote-list');
const moreBtn = document.getElementById('more-btn');

const api = 'https://dummyjson.com/quotes';

let limit = 20;
let skip = 0;
let total = null;

async function loadQuotes() {

    if (total != null && skip >= total) {
        console.warn("There are no elements!");
        alert("There are no elements!");
        return;
    }

    let query = `${api}/?limit=${limit}&skip=${skip}`;

    let res = await fetch(query);
    console.log("Status: " + res.status);

    let data = await res.json();
    console.log(data);

    total = data.total;

    for (const q of data.quotes) {
        list.innerHTML += `<dt>[${q.id}] - ${q.author}</dt>`
        list.innerHTML += `<dd>${q.quote}</dd>`
    }

    skip += limit;
}

loadQuotes();

moreBtn.onclick = () => {
    loadQuotes();
}