document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const skillItems = document.querySelectorAll('.skill-item');

    // Initialize AOS
    AOS.init({
        duration: 200,
        once: true,
        offset: 100
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Scroll event for header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Skill progress animation
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress');
                const percentage = progressBar.style.width;
                progressBar.style.width = '0%';
                setTimeout(() => {
                    progressBar.style.width = percentage;
                }, 100);
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => {
        skillObserver.observe(item);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mouse enter animations for nav items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.animation = 'pulse 0.3s ease-in-out';
        });
        item.addEventListener('animationend', () => {
            item.style.animation = '';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const tabLinks = document.querySelectorAll('.tab-link');
  const tabPanels = document.querySelectorAll('.tab-panel');

  tabLinks.forEach(link => {
    link.addEventListener('click', () => {
      const targetTab = link.dataset.tab;

      // Remove active class from all tabs and panels
      tabLinks.forEach(tab => tab.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));

      // Add active class to the clicked tab and corresponding panel
      link.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
    // Animate the subtitle with a typing effect
    const subtitle = document.querySelector('.hero h2');
    const subtitleText = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < subtitleText.length) {
            subtitle.textContent += subtitleText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 2000); // Start typing effect after 2 seconds

    // Animate social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px)';
        setTimeout(() => {
            icon.style.transition = 'all 0.5s ease';
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, 1000 + index * 200);
    });

    // Parallax effect for background
    const heroBg = document.querySelector('.hero-bg');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        heroBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });

    // Add scroll-triggered animations to other sections
    const animatedSections = document.querySelectorAll('.reveal');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedSections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.timeline-item, .skill-item, .project-block');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeIn 0.02s ease-out forwards, fadeInUp 0.02s ease-out forwards`;
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
});
