// 产品数据
const products = [
    {
        id: 1,
        name: '豪华猫窝套装',
        price: 299.00,
        originalPrice: 499.00,
        description: '高级面料猫窝 | 可拆洗内垫',
        features: [
            '超大空间设计',
            '优质绒毛内里',
            '防滑底部',
            '可机洗'
        ],
        specifications: '尺寸：60×50×35cm',
        image: '../images/cat-bed-1.jpg'
    },
    {
        id: 2,
        name: '温暖猫窝',
        price: 199.00,
        originalPrice: 359.00,
        description: '保暖猫窝 | 加厚绒毛内衬',
        features: [
            '保暖性能出众',
            '适合冬季使用',
            '柔软舒适',
            '易清洁'
        ],
        specifications: '尺寸：50×40×30cm',
        image: '../images/cat-bed-2.jpg'
    },
    {
        id: 3,
        name: '双层猫窝',
        price: 399.00,
        originalPrice: 699.00,
        description: '双层猫窝 | 适合多猫家庭',
        features: [
            '上下两层设计',
            '承重力强',
            '防抓耐磨',
            '稳固结构'
        ],
        specifications: '尺寸：80×60×100cm',
        image: '../images/cat-bed-3.jpg'
    },
    {
        id: 4,
        name: '便携式猫窝',
        price: 159.00,
        originalPrice: 259.00,
        description: '便携猫窝 | 折叠收纳设计',
        features: [
            '轻便易携',
            '快速折叠',
            '透气网面',
            '附赠收纳袋'
        ],
        specifications: '尺寸：45×35×25cm（展开）',
        image: '../images/cat-bed-4.jpg'
    },
    {
        id: 5,
        name: '豪华猫别墅',
        price: 599.00,
        originalPrice: 999.00,
        description: '多功能猫别墅 | 带猫抓板',
        features: [
            '三层空间',
            '内置猫抓板',
            '豪华躺卧区',
            '观景平台'
        ],
        specifications: '尺寸：100×60×150cm',
        image: '../images/cat-bed-5.jpg'
    },
    {
        id: 6,
        name: '圆形温暖窝',
        price: 139.00,
        originalPrice: 229.00,
        description: '圆形猫窝 | 360°包裹设计',
        features: [
            '360°环绕设计',
            '加厚海绵垫',
            '防水底部',
            '舒适绒面'
        ],
        specifications: '尺寸：直径45cm',
        image: '../images/cat-bed-6.jpg'
    },
    {
        id: 7,
        name: '四季通用猫窝',
        price: 249.00,
        originalPrice: 399.00,
        description: '四季猫窝 | 可拆卸设计',
        features: [
            '冬暖夏凉',
            '可拆卸清洗',
            '透气网布',
            '加厚底垫'
        ],
        specifications: '尺寸：55×45×32cm',
        image: '../images/cat-bed-7.jpg'
    },
    {
        id: 8,
        name: '吊床式猫窝',
        price: 189.00,
        originalPrice: 299.00,
        description: '吊床猫窝 | 悬挂式设计',
        features: [
            '安全挂钩',
            '承重性强',
            '舒适面料',
            '简易安装'
        ],
        specifications: '尺寸：60×40cm',
        image: '../images/cat-bed-8.jpg'
    },
    {
        id: 9,
        name: '太空舱猫窝',
        price: 329.00,
        originalPrice: 529.00,
        description: '太空舱猫窝 | 封闭式设计',
        features: [
            '私密空间',
            '透气窗口',
            '防滑底座',
            '高档面料'
        ],
        specifications: '尺寸：50×50×60cm',
        image: '../images/cat-bed-9.jpg'
    },
    {
        id: 10,
        name: '多功能猫树窝',
        price: 459.00,
        originalPrice: 759.00,
        description: '猫树猫窝 | 集成式设计',
        features: [
            '多层设计',
            '带猫抓柱',
            '休息平台',
            '稳固底座'
        ],
        specifications: '尺寸：60×45×120cm',
        image: '../images/cat-bed-10.jpg'
    }
];

// 用户评价数据
const testimonials = [
    {
        name: '张女士',
        content: '我家的猫咪特别喜欢这个猫窝，整天都赖在里面不出来！',
        rating: 5
    },
    {
        name: '李先生',
        content: '材质非常好，做工精细，性价比很高。',
        rating: 5
    },
    {
        name: '王小姐',
        content: '客服很贴心，快递很快，猫窝质量没得说。',
        rating: 4
    }
];

// 为每个产品生成推荐理由
const getRecommendReason = (product) => {
    const reasons = {
        1: '双层豪华设计，给爱宠VIP般的享受',
        2: '加厚保暖材质，让猫咪温暖过冬',
        3: '双层空间设计，多猫家庭的理想选择',
        4: '便携折叠设计，出行住宿必备选择',
        5: '三层豪华空间，让猫咪享受城堡般的生活',
        6: '360°包裹设计，给猫咪最安全的感觉',
        7: '四季适用设计，一年四季都舒适',
        8: '悬挂式设计，节省空间还能玩耍',
        9: '封闭式太空舱，给猫咪私密休息空间',
        10: '多功能组合设计，集休息和娱乐于一体'
    };
    return reasons[product.id] || '精选优质材料，让您的猫咪享受舒适生活';
};

// 获取产品颜色选项
const getProductColors = (product) => {
    const colors = {
        1: [
            { name: '米白色', code: '#F5E6D3' },
            { name: '浅灰色', code: '#E0E0E0' },
            { name: '粉色', code: '#FFD1DC' }
        ],
        2: [
            { name: '深灰色', code: '#A9A9A9' },
            { name: '咖啡色', code: '#8B4513' },
            { name: '藏青色', code: '#1B1B3A' }
        ],
        3: [
            { name: '米白色', code: '#F5E6D3' },
            { name: '灰色', code: '#808080' },
            { name: '棕色', code: '#8B4513' }
        ],
        4: [
            { name: '浅蓝色', code: '#ADD8E6' },
            { name: '粉色', code: '#FFD1DC' },
            { name: '米色', code: '#F5E6D3' }
        ],
        5: [
            { name: '米白色', code: '#F5E6D3' },
            { name: '灰色', code: '#808080' },
            { name: '深棕色', code: '#654321' }
        ],
        6: [
            { name: '粉色', code: '#FFD1DC' },
            { name: '灰色', code: '#808080' },
            { name: '米色', code: '#F5E6D3' }
        ],
        7: [
            { name: '浅灰色', code: '#E0E0E0' },
            { name: '米色', code: '#F5E6D3' },
            { name: '浅蓝色', code: '#ADD8E6' }
        ],
        8: [
            { name: '米白色', code: '#F5E6D3' },
            { name: '灰色', code: '#808080' },
            { name: '藏青色', code: '#1B1B3A' }
        ],
        9: [
            { name: '太空灰', code: '#4A4A4A' },
            { name: '白色', code: '#FFFFFF' },
            { name: '粉色', code: '#FFD1DC' }
        ],
        10: [
            { name: '米白色', code: '#F5E6D3' },
            { name: '深灰色', code: '#A9A9A9' },
            { name: '棕色', code: '#8B4513' }
        ]
    };
    return colors[product.id] || [];
};

// 渲染产品详细介绍
function renderProductDetails(productGrid) {
    const productDetails = document.createElement('div');
    productDetails.className = 'product-details';
    productDetails.innerHTML = `
        <h3>产品详细介绍</h3>
        ${products.map(product => `
            <div class="product-detail-card">
                <div class="product-detail-header">
                    <div class="product-detail-image">
                        <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x400?text=猫窝'">
                    </div>
                    <div class="product-detail-info">
                        <div class="product-detail-left">
                            <h4 class="product-detail-title">${product.name}</h4>
                            <div class="product-detail-features">
                                ${product.features.map(feature => `
                                    <div class="feature-item">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        <span>${feature}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="product-detail-price">
                            <span class="detail-current-price">¥${product.price.toFixed(2)}</span>
                            ${product.originalPrice ? `<span class="detail-original-price">¥${product.originalPrice.toFixed(2)}</span>` : ''}
                            <div class="detail-buttons">
                                <button class="buy-now" onclick="buyNow(${product.id})">立即下单</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-detail-description">
                    <p>${product.description}</p>
                    <p>${getRecommendReason(product)}</p>
                </div>
                <div class="size-reference">
                    <h5>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M2 12h20M12 2v20M4 4l16 16M20 4L4 20" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        尺寸参考
                    </h5>
                    <img src="images/size-reference-${product.id}.jpg" alt="尺寸参考图" onerror="this.src='https://via.placeholder.com/600x300?text=尺寸参考图'">
                </div>
                <div class="product-specifications">
                    <h5 class="spec-title">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        产品规格
                    </h5>
                    <div class="spec-list">
                        <div class="spec-item">
                            <span class="spec-label">可选颜色</span>
                            <div class="color-options">
                                ${getProductColors(product).map(color => `
                                    <div class="color-option">
                                        <span class="color-dot" style="background-color: ${color.code}"></span>
                                        <span>${color.name}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">材质</span>
                            <span class="spec-value">${product.specifications.material || '优质面料'}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">适用体型</span>
                            <span class="spec-value">${product.specifications.suitableFor || '所有体型'}</span>
                        </div>
                        <div class="spec-item">
                            <span class="spec-label">承重</span>
                            <span class="spec-value">${product.specifications.maxWeight || '15kg'}</span>
                        </div>
                    </div>
                </div>
            </div>
        `).join('')}
    `;

    productGrid.parentNode.insertBefore(productDetails, productGrid.nextSibling);
}

// 动态生成产品卡片
function renderProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) {
        console.error('找不到产品容器元素');
        return;
    }

    // 渲染产品列表
    productGrid.innerHTML = products.map(product => `
        <div class="product-row">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/100x100?text=猫窝'">
            </div>
            <div class="product-info-left">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
            </div>
            <div class="product-reason">
                ${getRecommendReason(product)}
            </div>
            <div class="product-price-section">
                <div class="price-container">
                    <span class="current-price">¥${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<span class="original-price">¥${product.originalPrice.toFixed(2)}</span>` : ''}
                </div>
                <button class="buy-now" onclick="buyNow(${product.id})">立即下单</button>
            </div>
        </div>
    `).join('');

    // 渲染产品详细介绍
    renderProductDetails(productGrid);
}

// 动态生成用户评价
function renderTestimonials() {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (!testimonialSlider) return;

    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.innerHTML = `
            <div class="rating">
                ${'★'.repeat(testimonial.rating)}${'☆'.repeat(5-testimonial.rating)}
            </div>
            <p>${testimonial.content}</p>
            <div class="testimonial-author">${testimonial.name}</div>
        `;
        testimonialSlider.appendChild(testimonialCard);
    });
}

// 购物车功能
let cart = [];

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        showNotification('已添加到购物车');
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// 添加立即下单功能
function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart = [product];
        updateCartCount();
        showNotification('即将跳转到结算页面...');
        // TODO: 跳转到结算页面
    }
}

// 事件监听
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderTestimonials();
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 