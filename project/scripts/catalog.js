const grid = document.querySelector('#belle-product-display');
const filterBtns = document.querySelectorAll('.filter-btn');
let allProducts = [];

async function getProducts() {
    try {
        const response = await fetch('data/catalog.json');
        allProducts = await response.json();
        displayProducts(allProducts);
    } catch (error) {
        console.error("Error loading products:", error);
    }
}

function displayProducts(products) {
    const container = document.querySelector('.belle-product-display');
    if (!container) return; 
    container.innerHTML = ""; 

    products.forEach(product => {
        const card = document.createElement('section');
        card.className = 'product-card';

        card.innerHTML = `
            <img src="${product.image}" 
                 alt="${product.name}" 
                 loading="lazy" 
                 width="300" 
                 height="450">
            <h3>${product.name}</h3> 
            <p class="price">₱${product.price}</p>
            <button class="belle-btn-outline" onclick="showDetails('${product.id}')">View Details</button>
        `;
        container.appendChild(card);
    });
}

window.showDetails = (id) => {
    const modal = document.querySelector('#item-modal');
    const modalContent = document.querySelector('#modal-content');
    
    const item = allProducts.find(p => String(p.id) === String(id));
    
    if (item) {
        modalContent.innerHTML = `
            <h2>${item.name}</h2>
            <p><strong>Size:</strong> ${item.size}</p>
            <p><strong>Condition:</strong> ${item.condition}</p>
            <p><strong>Category:</strong> ${item.category}</p>
            <p class="price">₱${item.price}</p>
        `;
        modal.showModal();
    }
};

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
document.querySelector('#close-modal').addEventListener('click', () => modal.close());

getProducts();