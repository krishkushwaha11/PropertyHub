document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavOverlay = document.createElement('div');
    mobileNavOverlay.className = 'mobile-nav-overlay';
    document.body.appendChild(mobileNavOverlay);
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        mobileNavOverlay.classList.toggle('active');
    });
    
    mobileNavOverlay.addEventListener('click', function() {
        mobileNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
    });
    
    // Search Tab Switching
    const searchTabs = document.querySelectorAll('.search-tab');
    searchTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            searchTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Locality Tab Switching
    const localityTabs = document.querySelectorAll('.locality-tab');
    localityTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            localityTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Image fallback for property items
    const propertyImages = document.querySelectorAll('.property-item img');
    propertyImages.forEach(img => {
        img.onerror = function() {
            this.style.backgroundColor = '#f5f5f5';
            this.style.color = '#666';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.style.fontWeight = 'bold';
            this.innerHTML = 'Property Image';
        };
    });
    
    // Testimonial slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        let isDown = false;
        let startX;
        let scrollLeft;
        
        testimonialSlider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - testimonialSlider.offsetLeft;
            scrollLeft = testimonialSlider.scrollLeft;
        });
        
        testimonialSlider.addEventListener('mouseleave', () => {
            isDown = false;
        });
        
        testimonialSlider.addEventListener('mouseup', () => {
            isDown = false;
        });
        
        testimonialSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - testimonialSlider.offsetLeft;
            const walk = (x - startX) * 2;
            testimonialSlider.scrollLeft = scrollLeft - walk;
        });
    }
});