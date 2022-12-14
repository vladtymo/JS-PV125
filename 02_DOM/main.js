// add content to the end of the html
document.write("<p class='m-3 text-center'>The end!</p>");

// get element
const tableBody = document.getElementById('table-body');
const createBtn = document.getElementById('create-btn');
const deleteBtn = document.getElementById('delete-btn');

let products = [];

// add event handler
deleteBtn.onclick = () => {
    products = [];
    tableBody.innerHTML = "";
}

createBtn.onclick = () => {
    console.log("On click hadnler from JS...");

    // get new product object
    const newProduct = getProductFromForm();
    products.push(newProduct);

    // add content to the elemnt
    addProductToTable(newProduct);
}

function getProductFromForm() {
    const modelBtn = document.getElementById('model-input');
    const descBtn = document.getElementById('desc-input');
    const priceBtn = document.getElementById('price-input');

    return {
        id: products.length + 1,
        model: modelBtn.value,
        description: descBtn.value,
        price: +priceBtn.value
    }
}

function addProductToTable(product) {
    tableBody.innerHTML += `<tr class="table-light"><th scope="row">${product.id}</th>
                                <td>${product.model}</td>
                                <td>${product.description}</td>
                                <td>${product.price}$</td>
                            </tr>`
}

const themeBtn = document.getElementById('theme-btn');
const nav = document.getElementById('navbar');

themeBtn.onclick = () => {
    console.log("Theme button clicked!");

    if (themeBtn.innerHTML == 'Dark') {

        // delete dark classes
        nav.classList.remove('navbar-light');
        nav.classList.remove('bg-light');

        // add light classes
        nav.classList.add('navbar-dark');
        nav.classList.add('bg-primary');

        themeBtn.innerHTML = "Light";
    }
    else {

        // delete dark classes
        nav.classList.remove('navbar-dark');
        nav.classList.remove('bg-primary');

        // add light classes
        nav.classList.add('navbar-light');
        nav.classList.add('bg-light');

        themeBtn.innerHTML = "Dark";
    }
}