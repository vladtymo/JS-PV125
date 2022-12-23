// const list = document.getElementById('color-list');
// const addBtn = document.getElementById('add-btn');
// const clearBtn = document.getElementById('clear-btn');

// clearBtn.onclick = (event) => {
//     event.preventDefault();
//     list.innerHTML = "";
// }
// addBtn.onclick = (event) => {
//     event.preventDefault();
//     const newItem = document.createElement('li');
//     newItem.innerHTML = "New";
//     newItem.classList.add('styled-item');
//     list.appendChild(newItem);
// }

// ---------- using jQuery

// get element
$('#add-btn').on('click', (e) => {
    e.preventDefault();

    const $newItem = $("<li></li>")
        .text("New")
        .addClass('styled-item')
        .on('click', () => {
            alert("Clicked!");
        });

    $('#color-list').append($newItem);
})

$('#clear-btn').click((e) => {
    e.preventDefault();
    $('#color-list').empty();
})