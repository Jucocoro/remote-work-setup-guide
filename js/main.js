document.addEventListener('DOMContentLoaded', () => {
    const toolGrid = document.getElementById('product-grid');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');

    const categoryMap = {
        'all': 'All',
        'monitor': '모니터',
        'desk': '책상',
        'chair': '의자',
        'keyboard': '키보드',
        'mouse': '마우스',
        'accessory': '액세서리',
        'audio': '오디오'
    };

    function displayProducts(productsToDisplay) {
        toolGrid.innerHTML = '';
        if (productsToDisplay.length === 0) {
            toolGrid.innerHTML = '<p class="no-results">검색 결과가 없습니다.</p>';
            return;
        }
        
        productsToDisplay.forEach(product => {
            const productCardContainer = document.createElement('div');
            productCardContainer.className = 'masonry-item';

            const productNameForURL = encodeURIComponent(product.name);

            productCardContainer.innerHTML = `
                <a href="review.html?product=${productNameForURL}" class="tool-card-link">
                    <div class="tool-card">
                        <div class="card-header">
                            <h3 class="tool-name">${product.name}</h3>
                            <span class="card-category">${categoryMap[product.category]}</span>
                        </div>
                        <div class="card-content">
                            <p class="tool-description">${product.description}</p>
                            <p class="product-price">${product.price}</p>
                            <span class="review-link">자세히 보기 &rarr;</span>
                        </div>
                    </div>
                </a>
            `;
            toolGrid.appendChild(productCardContainer);
        });
    }

    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeCategory = document.querySelector('.filter-btn.active').dataset.category;

        const filteredProducts = products.filter(product => {
            const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchTerm) || product.description.toLowerCase().includes(searchTerm);
            return matchesCategory && matchesSearch;
        });

        displayProducts(filteredProducts);
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProducts();
        });
    });

    searchInput.addEventListener('input', filterProducts);

    displayProducts(products);
});
