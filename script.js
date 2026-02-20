// script.js - الملف المحدث مع فلتر كامل وعملي
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
            backToTop.classList.add('active');
        } else {
            navbar.classList.remove('scrolled');
            backToTop.classList.remove('active');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
            
            // Update active nav link
            document.querySelectorAll('.nav-links a').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Back to top button
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Portfolio data
    const portfolioItems = [
        {
            id: 1,
            title: "Hames Brand Identity",
            category: "branding",
            image: "images/branding.jpeg",
            description: "Complete brand identity for a Hames boutique"
        },
        {
            id: 2,
            title: "Cosmetics Packaging",
            category: "packaging",
            image: "images/hames-t-shirt.jpeg",
            description: "Elegant packaging design for luxury cosmetics"
        },
                {
            id: 2,
            title: "Cosmetics Packaging",
            category: "packaging",
            image: "images/hames-t-shirt2.jpeg",
            description: "Elegant packaging design for luxury cosmetics"
        },
                        {
            id: 2,
            title: "Cosmetics Packaging",
            category: "packaging",
            image: "images/hames-t-shirt3.jpeg",
            description: "Elegant packaging design for luxury cosmetics"
        },
        // {
        //     id: 3,
        //     title: "Wedding Invitation Set",
        //     category: "print",
        //     image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        //     description: "Custom wedding invitation suite with floral motifs"
        // },
        // {
        //     id: 4,
        //     title: "Fashion Brand Website",
        //     category: "digital",
        //     image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        //     description: "Website UI/UX design for a fashion brand"
        // },
        {
            id: 5,
            title: "Organic Food Logo",
            category: "branding",
            image: "images/mix.jpeg",
            description: "Logo design for organic food company"
        },
        {
            id: 6,
            title: "Botanical Illustrations",
            category: "illustration",
            image: "images/card.jpeg",
            description: "Series of feminine botanical illustrations"
        },
                {
            id: 6,
            title: "Botanical Illustrations",
            category: "illustration",
            image: "images/cebha3la.jpeg",
            description: "Series of feminine botanical illustrations"
        },
                {
            id: 6,
            title: "Botanical Illustrations",
            category: "illustration",
            image: "images/cairo.jpeg",
            description: "Series of feminine botanical illustrations"
        },
        {
            id: 7,
            title: "Jewelry Brand Identity",
            category: "branding",
            image: "images/in-solution.jpeg",
            description: "Luxury brand identity for jewelry brand"
        },
                {
            id: 7,
            title: "Jewelry Brand Identity",
            category: "branding",
            image: "images/coderatech.jpeg",
            description: "Luxury brand identity for jewelry brand"
        },
                {
            id: 7,
            title: "Jewelry Brand Identity",
            category: "branding",
            image: "images/oa.jpeg",
            description: "Luxury brand identity for jewelry brand"
        },
                {
            id: 7,
            title: "Jewelry Brand Identity",
            category: "branding",
            image: "images/techne.jpeg",
            description: "Luxury brand identity for jewelry brand"
        },
                {
            id: 7,
            title: "Jewelry Brand Identity",
            category: "branding",
            image: "images/mia.jpeg",
            description: "Luxury brand identity for jewelry brand"
        },
                {
            id: 7,
            title: "Jewelry Brand Identity",
            category: "branding",
            image: "images/t-peer.jpeg",
            description: "Luxury brand identity for jewelry brand"
        },
                {
            id: 7,
            title: "Jewelry Brand Identity",
            category: "branding",
            image: "images/la-nuit.jpeg",
            description: "Luxury brand identity for jewelry brand"
        },
                {
            id: 7,
            title: "Jewelry Brand Identity",
            category: "branding",
            image: "images/global.jpeg",
            description: "Luxury brand identity for jewelry brand"
        },
        // {
        //     id: 8,
        //     title: "Book Cover Design",
        //     category: "print",
        //     image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        //     description: "Book cover design for romantic novel"
        // },
        {
            id: 9,
            title: "Social Media Campaign",
            category: "digital",
            image: "images/borad.jpeg",
            description: "Complete social media campaign visuals"
        },
                {
            id: 9,
            title: "Social Media Campaign",
            category: "digital",
            image: "images/borad.jpeg",
            description: "Complete social media campaign visuals"
        },
                {
            id: 9,
            title: "Social Media Campaign",
            category: "digital",
            image: "images/markting.jpeg",
            description: "Complete social media campaign visuals"
        },
                {
            id: 9,
            title: "Social Media Campaign",
            category: "digital",
            image: "images/presentaiton.jpeg",
            description: "Complete social media campaign visuals"
        },
                {
            id: 9,
            title: "Social Media Campaign",
            category: "digital",
            image: "images/multimedia.jpeg",
            description: "Complete social media campaign visuals"
        }
    ];
    
    // Services data
    const services = [
        {
            icon: "fas fa-palette",
            title: "Brand Identity",
            description: "Logo design, color palettes, typography, and brand guidelines to create a cohesive visual identity."
        },
        {
            icon: "fas fa-print",
            title: "Print Design",
            description: "Business cards, brochures, flyers, posters, and other printed materials with attention to detail."
        },
        {
            icon: "fas fa-box-open",
            title: "Packaging Design",
            description: "Creative packaging solutions that make products stand out on shelves and create memorable unboxing experiences."
        },
        {
            icon: "fas fa-laptop",
            title: "Digital Design",
            description: "Website UI/UX, social media graphics, banners, and digital advertisements optimized for online platforms."
        },
        {
            icon: "fas fa-pencil-alt",
            title: "Illustration",
            description: "Custom illustrations, icons, and hand-drawn elements that add a unique feminine touch to your projects."
        },
        {
            icon: "fas fa-th-large",
            title: "Layout Design",
            description: "Magazine layouts, annual reports, catalogs, and other multi-page documents with elegant typography and composition."
        }
    ];
    
    // Testimonials data
    const testimonials = [
        {
            name: "Mona Ahmed",
            role: "Founder, Bloom Boutique",
            text: "Leyla transformed my small floral shop into a recognizable brand. Her attention to detail and feminine touch perfectly captured our essence.",
            image: "https://randomuser.me/api/portraits/women/32.jpg"
        },
        {
            name: "Sarah Hassan",
            role: "Marketing Director, Luxe Cosmetics",
            text: "The packaging design Leyla created for our new product line exceeded all expectations. Sales increased by 40% after the redesign!",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Yasmine El-Sayed",
            role: "Author & Publisher",
            text: "Leyla's book cover designs are simply breathtaking. She has a unique ability to capture the soul of a story in a single visual.",
            image: "https://randomuser.me/api/portraits/women/68.jpg"
        }
    ];
    
    // Initialize portfolio
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Function to render portfolio items
    function renderPortfolioItems(filter = 'all') {
        portfolioGrid.innerHTML = '';
        
        let filteredItems = portfolioItems;
        
        if (filter !== 'all') {
            filteredItems = portfolioItems.filter(item => item.category === filter);
        }
        
        filteredItems.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = `portfolio-item ${item.category}`;
            portfolioItem.setAttribute('data-category', item.category);
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <div class="portfolio-category">${item.category.toUpperCase()}</div>
                </div>
            `;
            portfolioGrid.appendChild(portfolioItem);
        });
    }
    
    // Initialize portfolio with all items
    renderPortfolioItems();
    
    // Add category badges to portfolio items
    const style = document.createElement('style');
    style.textContent = `
        .portfolio-category {
            display: inline-block;
            background-color: var(--primary-color);
            color: white;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            margin-top: 10px;
        }
        
        .branding .portfolio-category { background-color: #e84393; }
        .packaging .portfolio-category { background-color: #a29bfe; }
        .print .portfolio-category { background-color: #00cec9; }
        .digital .portfolio-category { background-color: #fd79a8; }
        .illustration .portfolio-category { background-color: #6c5ce7; }
    `;
    document.head.appendChild(style);
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Render filtered items
            renderPortfolioItems(filterValue);
            
            // Add animation to new items
            setTimeout(() => {
                const items = document.querySelectorAll('.portfolio-item');
                items.forEach(item => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                });
            }, 10);
        });
    });
    
    // Initialize services
    const servicesGrid = document.querySelector('.services-grid');
    
    services.forEach(service => {
        const serviceItem = document.createElement('div');
        serviceItem.className = 'service-item';
        serviceItem.innerHTML = `
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesGrid.appendChild(serviceItem);
    });
    
    // Initialize testimonials slider (for future enhancement)
    function initTestimonialsSlider() {
        // This can be extended to create a testimonial slider
        console.log('Testimonials ready for slider implementation');
    }
    
    initTestimonialsSlider();
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelectorAll('input[type="text"]')[1].value;
        const message = this.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // In a real application, you would send this data to a server
        // For demo purposes, we'll just show a success message
        alert(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon.`);
        
        // Reset form
        this.reset();
    });
    
    // Update active nav link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Add hover effect to portfolio items
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.portfolio-item')) {
            const portfolioItem = e.target.closest('.portfolio-item');
            portfolioItem.style.zIndex = '10';
        }
    });
    
    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.portfolio-item')) {
            const portfolioItem = e.target.closest('.portfolio-item');
            portfolioItem.style.zIndex = '1';
        }
    });
    
    // Add loading animation for portfolio items
    function addLoadingAnimation() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Call loading animation after initial render
    setTimeout(addLoadingAnimation, 500);
    
    // Add counter animation for statistics (optional enhancement)
    function initCounters() {
        // This can be added to show statistics like projects completed, clients served, etc.
        console.log('Counters ready for implementation');
    }
    
    initCounters();
});