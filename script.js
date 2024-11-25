document.addEventListener("DOMContentLoaded", function () {
    const bannerWrapper = document.querySelector(".banner-wrapper");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");
    const slides = document.querySelectorAll(".banner-slide");
    const totalSlides = slides.length;

    let currentIndex = 0;

    // Scroll to a specific slide
    function scrollToSlide(index) {
        const slideWidth = slides[0].offsetWidth; // Get current width
        const targetScroll = index * slideWidth;
        bannerWrapper.scrollTo({
            left: targetScroll,
            behavior: "smooth",
        });

    // Health conditions cards horizontal scroll
    const conditionCards = document.querySelector('.condition-cards');
    let isDown = false;
    let startX;
    let scrollLeft;

    conditionCards.addEventListener('mousedown', (e) => {
        isDown = true;
        conditionCards.style.cursor = 'grabbing';
        startX = e.pageX - conditionCards.offsetLeft;
        scrollLeft = conditionCards.scrollLeft;
    });

    conditionCards.addEventListener('mouseleave', () => {
        isDown = false;
        conditionCards.style.cursor = 'grab';
    });

    conditionCards.addEventListener('mouseup', () => {
        isDown = false;
        conditionCards.style.cursor = 'grab';
    });

    conditionCards.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - conditionCards.offsetLeft;
        const walk = (x - startX) * 2;
        conditionCards.scrollLeft = scrollLeft - walk;
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            conditionCards.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        }
        if (e.key === 'ArrowRight') {
            conditionCards.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
    });
    }

    // Handle button clicks
    function handleButtonClick(direction) {
        currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
        scrollToSlide(currentIndex);
    }

    // Scroll right
    rightBtn.addEventListener("click", () => handleButtonClick(1));

    // Scroll left
    leftBtn.addEventListener("click", () => handleButtonClick(-1));
});

// Health conditions cards scrolling
document.addEventListener("DOMContentLoaded", function () {
        const bannerWrapper = document.querySelector(".banner-wrapper");
        const leftBtn = document.querySelector(".left-btn");
        const rightBtn = document.querySelector(".right-btn");
        const slides = document.querySelectorAll(".banner-slide");
        const totalSlides = slides.length;

        let currentIndex = 0;

        // Scroll to a specific slide
        function scrollToSlide(index) {
            const slideWidth = slides[0].offsetWidth; // Get current width
            const targetScroll = index * slideWidth;
            bannerWrapper.scrollTo({
                left: targetScroll,
                behavior: "smooth",
            });
        }

        // Scroll right
        rightBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % totalSlides; // Loop to the start
            scrollToSlide(currentIndex);
        });

        // Scroll left
        leftBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop to the end
            scrollToSlide(currentIndex);
        });
    });

// Product Card functionality
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            
            // Add animation effect
            button.textContent = 'Added!';
            button.style.backgroundColor = '#28a745';
            
            // Reset button after 1 second
            setTimeout(() => {
                button.textContent = 'Add to Cart';
                button.style.backgroundColor = '#134d4c';
            }, 1000);
            
            // Here you can add logic to actually add the item to a shopping cart
            console.log(`Added ${productName} to cart`);
        });
    });
});

// Product Card functionality
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            
            // Add animation effect
            button.textContent = 'Added!';
            button.style.backgroundColor = '#28a745';
            
            // Reset button after 1 second
            setTimeout(() => {
                button.textContent = 'Add to Cart';
                button.style.backgroundColor = '#134d4c';
            }, 1000);
            
            // Here you can add logic to actually add the item to a shopping cart
            console.log(`Added ${productName} to cart`);
        });
    });
});