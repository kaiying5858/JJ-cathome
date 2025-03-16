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
        image: 'images/1.webp'
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
        image: 'images/cat-bed-2.svg'
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
        image: 'images/cat-bed-3.svg'
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
        image: 'images/cat-bed-4.svg'
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
        image: 'images/cat-bed-5.svg'
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
        image: 'images/cat-bed-6.svg'
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
        image: 'images/cat-bed-7.svg'
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
        image: 'images/cat-bed-8.svg'
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
        image: 'images/cat-bed-9.svg'
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
        image: 'images/cat-bed-10.svg'
    }
];

// 用户评价数据库
const reviewsDatabase = [
    {
        name: "Emily Thompson",
        content: "My Persian cat absolutely adores this bed! The memory foam provides perfect support, and the removable cover makes cleaning a breeze. Best purchase I've made for my furry friend this year!",
        avatar: "E",
        date: "2024-03-13",
        rating: 5
    },
    {
        name: "Michael Anderson",
        content: "Bought this for my two Maine Coons, and they fight over who gets to sleep in it! The size is perfect for large cats, and the quality is outstanding. Definitely worth every penny.",
        avatar: "M",
        date: "2024-03-13",
        rating: 5
    },
    {
        name: "Sarah Williams",
        content: "The enclosed design gives my anxious rescue cat the perfect safe space. She's noticeably more relaxed since we got this bed. The ventilation is great too!",
        avatar: "S",
        date: "2024-03-13",
        rating: 4
    },
    {
        name: "James Wilson",
        content: "High-quality materials and excellent craftsmanship. My cats have been using it for months, and it still looks brand new. The thermal regulation is impressive.",
        avatar: "J",
        date: "2024-03-13",
        rating: 5
    },
    {
        name: "Isabella Martinez",
        content: "Perfect for multi-cat households! The spacious design allows both my cats to share comfortably. Love the easy-clean fabric too.",
        avatar: "I",
        date: "2024-03-13",
        rating: 5
    },
    {
        name: "David Brown",
        content: "Skeptical at first due to the price, but the quality is exceptional. My Ragdoll hasn't left it since it arrived. Great investment!",
        avatar: "D",
        date: "2024-03-13",
        rating: 4
    },
    {
        name: "Olivia Davis",
        content: "The portable design is perfect for travel. We take it everywhere, and it helps our cat feel at home no matter where we are.",
        avatar: "O",
        date: "2024-03-13",
        rating: 5
    },
    {
        name: "William Taylor",
        content: "Excellent customer service and fast shipping. The bed exceeds expectations - my Siamese loves the plush interior!",
        avatar: "W",
        date: "2024-03-13",
        rating: 5
    },
    {
        name: "Sophie Miller",
        content: "The eco-friendly materials were a big selling point for me. No chemical smell, and my cats took to it immediately. Great sustainable choice!",
        avatar: "S",
        date: "2024-03-13",
        rating: 4
    },
    {
        name: "Robert Johnson",
        content: "This bed has improved my cat's sleep quality noticeably. She used to be restless at night, but now sleeps soundly. The orthopedic support is fantastic!",
        avatar: "R",
        date: "2024-03-13",
        rating: 5
    }
    // ... 继续添加更多评价 ...
];

// 生成更多评价数据
function generateMoreReviews() {
    const firstNames = [
        "John", "Emma", "Christopher", "Jessica", "Matthew", "Ashley", "Daniel", "Rachel",
        "Andrew", "Lauren", "Joseph", "Jennifer", "Thomas", "Elizabeth", "Kevin", "Victoria",
        "Michael", "Sophia", "David", "Olivia", "James", "Isabella", "William", "Mia",
        "Benjamin", "Charlotte", "Lucas", "Amelia", "Henry", "Harper", "Alexander", "Evelyn"
    ];
    const lastNames = [
        "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
        "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson",
        "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Thompson", "White",
        "Harris", "Clark", "Lewis", "Robinson", "Walker", "Hall", "Young", "King", "Wright"
    ];
    const contents = [
        "This cat bed is exactly what I was looking for! The quality is exceptional, and my cat absolutely loves it. The memory foam provides perfect support.",
        "I was hesitant about the price, but it's worth every penny. My Maine Coon fits perfectly, and the materials are clearly high-quality.",
        "Finally found a cat bed that my picky Siamese actually uses! The design is perfect, and it's so easy to clean.",
        "The bed arrived quickly and exceeded my expectations. My two cats have been taking turns sleeping in it - might need to buy another!",
        "Love how this bed fits with our home decor. More importantly, our cat loves it too. The removable cover is super convenient for washing.",
        "Been using this for three weeks now, and it still looks brand new despite daily use. The construction is really solid.",
        "Perfect size for my adult cat, and she took to it immediately. The thermal regulation is great - she's comfortable regardless of the temperature.",
        "Really impressed with the craftsmanship. The stitching is strong, the materials are premium, and my cat is absolutely in love with it.",
        "This bed has helped my anxious rescue cat feel more secure. She spends hours in it and seems much more relaxed.",
        "The enclosed design provides a perfect hideaway for my shy cat. Plus, the ventilation is excellent - no overheating issues.",
        "Bought this after my vet recommended elevated beds for my senior cat. It's been perfect - she can get in and out easily.",
        "The non-slip bottom is a great feature. The bed stays put even when my energetic kitten jumps in and out.",
        "I appreciate the eco-friendly materials used. No chemical smell, and it's clearly built to last.",
        "Great customer service! Had a question about cleaning, and they responded quickly with helpful advice.",
        "My Persian cat is quite particular, but she took to this bed immediately. The plush interior is just right."
    ];

    const additionalReviews = [];
    const today = new Date();
    let currentDate = new Date(today);
    currentDate.setDate(currentDate.getDate() - 30); // Start from 30 days ago

    // Generate reviews for the past 30 days
    while (currentDate <= today) {
        // Generate 7-8 reviews per day
        const reviewsForDay = Math.floor(Math.random() * 2) + 7; // 7 or 8 reviews
        
        for (let i = 0; i < reviewsForDay; i++) {
            const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
            const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            const content = contents[Math.floor(Math.random() * contents.length)];
            
            // More realistic rating distribution
            const rating = Math.random() < 0.7 ? 5 : // 70% chance of 5 stars
                         Math.random() < 0.8 ? 4 : // 20% chance of 4 stars
                         3; // 10% chance of 3 stars

            additionalReviews.push({
                name: `${firstName} ${lastName}`,
                content: content,
                avatar: firstName[0],
                date: currentDate.toISOString().split('T')[0],
                rating: rating,
                verified: Math.random() < 0.8 // 80% chance of being a verified purchase
            });
        }

        // Move to next day
        currentDate.setDate(currentDate.getDate() + 1);
    }

    // Sort reviews by date, most recent first
    const allReviews = [...reviewsDatabase, ...additionalReviews]
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    return allReviews;
}

// 动态生成产品卡片
function renderProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200?text=猫窝图片'">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <ul class="product-features">
                    ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <p class="product-specs">${product.specifications}</p>
                <div class="product-price-section">
                    <div class="price-container">
                        <span class="current-price">¥${product.price.toFixed(2)}</span>
                        <span class="original-price">¥${product.originalPrice.toFixed(2)}</span>
                    </div>
                    <button class="buy-now" onclick="buyNow(${product.id})">立即购买</button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
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

// 用户评价轮播
document.addEventListener('DOMContentLoaded', function() {
    const allReviews = generateMoreReviews();
    const track = document.querySelector('.testimonials-track');
    const dotsContainer = document.querySelector('.testimonial-dots');
    const itemsPerPage = 10;
    const totalPages = Math.ceil(allReviews.length / itemsPerPage);
    let currentPage = 0;

    // 初始化轮播
    function initializeTestimonials() {
        // 更新当前日期
        const today = new Date().toISOString().split('T')[0];
        allReviews.forEach(review => review.date = today);
        
        // 渲染评价
        renderPage(currentPage);
        
        // 生成导航点
        generateDots();
        
        // 更新页码显示
        updatePageCounter();
    }

    // 渲染单页评价
    function renderPage(page) {
        const start = page * 20;
        const end = start + 20;
        const pageReviews = allReviews.slice(start, end);

        track.innerHTML = `
            <div class="testimonial-card">
                <div class="testimonial-list">
                    ${pageReviews.map(review => `
                        <div class="testimonial-item">
                            <div class="testimonial-content">
                                ${review.content}
                                ${review.verified ? '<span class="verified-badge">✓ Verified Purchase</span>' : ''}
                            </div>
                            <div class="testimonial-author">
                                <div class="author-avatar">${review.avatar}</div>
                                <div class="author-info">
                                    <div class="author-name">${review.name}</div>
                                    <div class="review-date">${formatDate(review.date)}</div>
                                    <div class="rating">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // 生成导航点
    function generateDots() {
        dotsContainer.innerHTML = Array.from({length: totalPages}, (_, i) => `
            <span class="dot ${i === currentPage ? 'active' : ''}" data-page="${i}"></span>
        `).join('');

        // 添加点击事件
        document.querySelectorAll('.dot').forEach(dot => {
            dot.addEventListener('click', () => {
                currentPage = parseInt(dot.dataset.page);
                updateDisplay();
            });
        });
    }

    // 更新页码显示
    function updatePageCounter() {
        const currentPageEl = document.querySelector('.current-page');
        const totalPagesEl = document.querySelector('.total-pages');
        if (currentPageEl && totalPagesEl) {
            currentPageEl.textContent = currentPage + 1;
            totalPagesEl.textContent = totalPages;
        }
    }

    // 更新显示
    function updateDisplay() {
        renderPage(currentPage);
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentPage);
        });
        updatePageCounter();
    }

    // 自动轮播
    let autoplayInterval;
    function startAutoplay() {
        if (autoplayInterval) clearInterval(autoplayInterval);
        autoplayInterval = setInterval(() => {
            currentPage = (currentPage + 1) % totalPages;
            updateDisplay();
        }, 10000); // 每10秒切换一次，因为内容较多
    }

    // 初始化
    initializeTestimonials();
    startAutoplay();

    // 鼠标悬停时暂停自动轮播
    track.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    track.addEventListener('mouseleave', startAutoplay);

    // 触摸事件处理
    let touchStartX = 0;
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        clearInterval(autoplayInterval);
    });

    track.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0 && currentPage < totalPages - 1) {
                currentPage++;
            } else if (diff < 0 && currentPage > 0) {
                currentPage--;
            }
            updateDisplay();
        }
        startAutoplay();
    });

    // 定期更新日期
    setInterval(() => {
        const today = new Date().toISOString().split('T')[0];
        allReviews.forEach(review => review.date = today);
        if (document.visibilityState === 'visible') {
            updateDisplay();
        }
    }, 60000); // 每分钟更新一次
});

// 格式化日期显示
function formatDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (dateString === today.toISOString().split('T')[0]) {
        return 'Today';
    } else if (dateString === yesterday.toISOString().split('T')[0]) {
        return 'Yesterday';
    } else {
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric',
            year: date.getFullYear() !== today.getFullYear() ? 'numeric' : undefined
        });
    }
}

// 倒计时功能
function initCountdown() {
    // 设置倒计时结束时间（这里设置为7天后）
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);

    function updateCountdown() {
        const now = new Date();
        const timeLeft = endDate - now;

        if (timeLeft <= 0) {
            // 倒计时结束，重置为7天
            endDate.setDate(new Date().getDate() + 7);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // 更新显示
        document.getElementById('countdown-days').textContent = String(days).padStart(2, '0');
        document.getElementById('countdown-hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('countdown-minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('countdown-seconds').textContent = String(seconds).padStart(2, '0');
    }

    // 立即更新一次
    updateCountdown();
    // 每秒更新一次
    setInterval(updateCountdown, 1000);
}

// 页面加载完成后初始化倒计时
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
});

// 点击特效
function createClickEffect(event) {
    const effect = document.createElement('div');
    effect.className = 'click-effect';
    effect.style.left = (event.clientX - 25) + 'px';
    effect.style.top = (event.clientY - 25) + 'px';
    
    // 创建猫爪印SVG
    const pawPrint = document.createElement('div');
    pawPrint.className = 'paw-print';
    pawPrint.innerHTML = `
        <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15C60 15 65 25 65 35C65 45 60 50 50 50C40 50 35 45 35 35C35 25 40 15 50 15Z" fill="url(#gradient)"/>
            <path d="M25 40C35 40 40 50 40 60C40 70 35 75 25 75C15 75 10 70 10 60C10 50 15 40 25 40Z" fill="url(#gradient)"/>
            <path d="M75 40C85 40 90 50 90 60C90 70 85 75 75 75C65 75 60 70 60 60C60 50 65 40 75 40Z" fill="url(#gradient)"/>
            <path d="M50 65C60 65 65 75 65 85C65 95 60 100 50 100C40 100 35 95 35 85C35 75 40 65 50 65Z" fill="url(#gradient)"/>
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#FF4D8D;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#FF1A75;stop-opacity:1" />
                </linearGradient>
            </defs>
        </svg>
    `;
    
    // 创建闪光效果
    const sparkles = document.createElement('div');
    sparkles.className = 'sparkles';
    
    // 添加多个闪光点
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // 随机生成闪光点的移动方向
        const angle = (Math.PI * 2 * i) / 8;
        const distance = 20 + Math.random() * 20;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        sparkle.style.setProperty('--tx', `${tx}px`);
        sparkle.style.setProperty('--ty', `${ty}px`);
        
        sparkles.appendChild(sparkle);
    }
    
    effect.appendChild(pawPrint);
    effect.appendChild(sparkles);
    document.body.appendChild(effect);
    
    // 动画结束后移除元素
    effect.addEventListener('animationend', () => {
        effect.remove();
    });
}

// 添加点击事件监听
document.addEventListener('click', createClickEffect);

// 处理图片加载
document.addEventListener('DOMContentLoaded', function() {
    // 处理图片加载错误
    const handleImageError = (img) => {
        img.onerror = null; // 防止循环调用
        img.src = 'https://via.placeholder.com/400x400?text=图片加载中...';
    };

    // 为所有产品图片添加错误处理
    document.querySelectorAll('.product-gallery img').forEach(img => {
        img.onerror = () => handleImageError(img);
    });

    // 图片预加载
    const preloadImages = () => {
        const imageUrls = [
            'images/1-1.webp',
            'images/1-2.webp',
            'images/1-3.webp'
        ];

        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    };

    preloadImages();

    // 图片点击放大功能
    const createImageModal = () => {
        const modal = document.createElement('div');
        modal.className = 'size-chart-modal';
        modal.innerHTML = `
            <span class="close-button">&times;</span>
            <img src="" alt="放大图">
        `;
        document.body.appendChild(modal);
        return modal;
    };

    const modal = createImageModal();

    // 为所有产品图片添加点击放大功能
    document.querySelectorAll('.product-gallery img').forEach(img => {
        img.addEventListener('click', function() {
            const modalImg = modal.querySelector('img');
            modalImg.src = this.src;
            modal.classList.add('active');
        });
    });

    // 关闭弹窗
    modal.querySelector('.close-button').addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // 点击弹窗外部关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // 缩略图点击切换主图
    document.querySelectorAll('.gallery-thumbs img').forEach(thumb => {
        thumb.addEventListener('click', function(e) {
            e.stopPropagation(); // 防止触发放大功能
            const mainImage = this.closest('.product-gallery').querySelector('.main-image');
            mainImage.src = this.src;
            mainImage.alt = this.alt;
        });
    });
});

// 尺寸图模态框功能
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('sizeChartModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');
    const sizeChartLinks = document.querySelectorAll('.view-size-chart');

    // 点击查看尺码图链接
    sizeChartLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const imgSrc = this.getAttribute('data-image');
            if (imgSrc) {
                modalImg.src = imgSrc;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // 防止背景滚动
            }
        });
    });

    // 点击关闭按钮
    closeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        modal.style.display = 'none';
        document.body.style.overflow = ''; // 恢复背景滚动
    });

    // 点击模态框外部关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // 恢复背景滚动
        }
    });

    // 阻止模态框内部点击事件冒泡
    modalImg.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // 恢复背景滚动
        }
    });
}); 