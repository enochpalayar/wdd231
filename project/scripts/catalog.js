const grid = document.querySelector('#catalog-grid');
const filterBtns = document.querySelectorAll('.filter-btn');
let allProducts = [];

async function getProducts() {
    const response = await fetch('data/catalog.json');
    allProducts = await response.json();
    displayProducts(allProducts);
}

function displayProducts(products) {
    grid.innerHTML = "";
    products.forEach(item => {
        const card = document.createElement('section');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <h3>${item.name}</h3>
            <p class="price">₱${item.price}</p>
            <button class="btn-secondary" onclick="showDetails(${item.id})">View Details</button>
        `;
        grid.appendChild(card);
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        const filter = e.target.dataset.filter;
        const filtered = filter === 'all' 
            ? allProducts 
            : allProducts.filter(item => item.category === filter);
        displayProducts(filtered);
    });
});

const modal = document.querySelector('#item-modal');
const modalContent = document.querySelector('#modal-content');

window.showDetails = (id) => {
    const item = allProducts.find(p => p.id === id);
    modalContent.innerHTML = `
        <h2>${item.name}</h2>
        <p><strong>Size:</strong> ${item.size}</p>
        <p><strong>Condition:</strong> ${item.condition}</p>
        <p><strong>Category:</strong> ${item.category}</p>
        <p class="price">₱${item.price}</p>
    `;
    modal.showModal();
};

document.querySelector('#close-modal').addEventListener('click', () => modal.close());

getProducts();