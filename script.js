/**
 * ==========================================================================
 * SALMAN KHAN - PORTFOLIO & BLOG
 * Modern Interactive Vanilla JavaScript
 * Features: Responsive Nav, Active Tracking, Modals, Form Validation & Toast
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ------------------------------------------------------------------------
  // 1. Data Definitions (Projects & Blog Articles)
  // ------------------------------------------------------------------------
  const projectData = {
    'web-design': {
      title: 'Modern Website Design for FinTech Next',
      category: 'UI/UX & Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
      description: 'Redesigned and engineered a high-converting web platform for a growing financial technology SaaS company. Focused on clean typographic hierarchy, sub-second load times, dynamic data dashboards, and a 42% lift in conversion rates within 60 days.',
      client: 'FinTech Next Global',
      timeline: '6 Weeks',
      tools: 'Figma, HTML5/CSS3, JavaScript ES6+, Webpack'
    },
    'branding': {
      title: 'Complete Visual Identity & Brand System',
      category: 'Branding & Logo Design',
      image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80',
      description: 'Crafted a bespoke brand identity system including logo design, color palettes, stationery suites, digital iconography, and comprehensive brand guidelines for an artisanal design studio.',
      client: 'Lumina Studio & Co.',
      timeline: '4 Weeks',
      tools: 'Adobe Illustrator, Photoshop, InDesign'
    },
    'social-media': {
      title: 'Omnichannel Social Media Growth Campaign',
      category: 'Social Media & Growth',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80',
      description: 'Spearheaded an integrated organic and paid social media campaign targeting B2B decision makers. Developed interactive carousel content, video ad scripts, and strategic analytics dashboards resulting in 3.4x audience engagement.',
      client: 'Aura App Tech',
      timeline: '8 Weeks',
      tools: 'Meta Ads Manager, LinkedIn Campaign Manager, Buffer'
    },
    'content-writing': {
      title: 'SEO Content Strategy & Copywriting Suite',
      category: 'Content Writing & SEO',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80',
      description: 'Authored 25+ authoritative pillar guides, whitepapers, and landing page copy that captured top 3 organic search engine rankings for competitive enterprise SaaS keywords, tripling organic inbound traffic.',
      client: 'Vanguard Digital Publications',
      timeline: '5 Weeks',
      tools: 'Ahrefs, Clearscope, Notion, Google Docs'
    }
  };

  const blogData = {
    '1': {
      title: '5 Tips for a Better Website in 2024',
      category: 'Web Design & Performance',
      date: 'March 15, 2024',
      readTime: '4 min read',
      content: `
        <p>Your website is often the very first interaction potential clients or customers have with your business. In an increasingly digital-first economy, first impressions take less than 50 milliseconds to form.</p>
        
        <h4>1. Prioritize Mobile-First Performance</h4>
        <p>Over 60% of all global web traffic originates from handheld mobile devices. Ensure your layout adapts smoothly with flexible grid systems and fluid typography rather than just shrinking desktop assets.</p>

        <h4>2. Clean Visual Hierarchy</h4>
        <p>Guide visitors’ eyes through distinct contrast, generous whitespace, and purposeful focal points. If everything is shouting for attention, nothing gets heard.</p>

        <h4>3. Clear, Benefit-Driven Value Proposition</h4>
        <p>Within the first five seconds on your landing page, users should understand exactly what you do, who you do it for, and how they can get started.</p>

        <h4>4. Sub-Second Load Speeds</h4>
        <p>Optimize images, minimize render-blocking scripts, and leverage modern browser caching. Every second delay in page load time costs up to 7% in customer conversions.</p>

        <h4>5. Direct and Accessible Calls to Action</h4>
        <p>Ensure your contact buttons and navigation links are high-contrast, touch-friendly, and accessible to keyboard and screen-reader users alike.</p>
      `
    },
    '2': {
      title: 'How to Boost Your Brand on Social Media',
      category: 'Digital Strategy',
      date: 'February 28, 2024',
      readTime: '5 min read',
      content: `
        <p>Building a memorable brand presence across social networks isn't about being on every single platform—it's about owning the right platforms with consistent, value-first storytelling.</p>
        
        <h4>Consistency Over Intensity</h4>
        <p>Algorithms and audiences reward creators and brands that show up consistently. Posting 3 high-value, thoughtful pieces every week beats sporadic daily bursts followed by weeks of silence.</p>

        <h4>Focus on Storytelling and Problem Solving</h4>
        <p>Don't just broadcast sales pitches. Share behind-the-scenes insights, real client wins, lessons learned from failures, and actionable tips your target audience can apply right away.</p>

        <h4>Engage in Real Conversations</h4>
        <p>Social media is a two-way street. Reply to comments, ask thought-provoking questions, and take part in community discussions within your niche.</p>
      `
    },
    '3': {
      title: 'The Power of Great Copywriting: Words That Sell',
      category: 'Copywriting & Content',
      date: 'February 10, 2024',
      readTime: '6 min read',
      content: `
        <p>Design grabs attention, but words make the sale. High-performing copy bridges the gap between what you offer and what your customer deeply desires or struggles with.</p>

        <h4>Talk About Benefits, Not Just Features</h4>
        <p>Features explain what your product does; benefits show how it improves the customer's life. Instead of saying "Our software has automated reporting", say "Reclaim 5 hours every Friday with automated reports delivered while you sleep".</p>

        <h4>Write Like You Speak</h4>
        <p>Ditch corporate jargon and convoluted buzzwords. Clear, direct conversational copy builds instant trust and resonates on an emotional level.</p>

        <h4>Remove Friction from Your Call to Action</h4>
        <p>Be explicit about what happens next. A button that reads "Get Your Free 20-Minute Strategy Call" converts substantially higher than a vague "Submit".</p>
      `
    }
  };

  // ------------------------------------------------------------------------
  // 2. Navigation, Sticky Header & Scroll Spy
  // ------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const sections = document.querySelectorAll('section[id], main[id]');

  // Sticky navbar shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile drawer toggle
  mobileToggle.addEventListener('click', () => {
    const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
    mobileToggle.classList.toggle('is-active');
    mobileMenu.classList.toggle('open');
  });

  // Close mobile menu when clicking any link
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('is-active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('open');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && mobileMenu.classList.contains('open')) {
      mobileToggle.classList.remove('is-active');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('open');
    }
  });

  // Active navigation highlight with IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });

        mobileLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => navObserver.observe(section));

  // ------------------------------------------------------------------------
  // 3. Featured Projects Modal Handler
  // ------------------------------------------------------------------------
  const projectCards = document.querySelectorAll('.project-card');
  const projectModal = document.getElementById('projectModal');
  const closeProjectModal = document.getElementById('closeProjectModal');
  const modalImg = document.getElementById('modalImg');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const modalClient = document.getElementById('modalClient');
  const modalTimeline = document.getElementById('modalTimeline');
  const modalTools = document.getElementById('modalTools');
  const modalCta = document.getElementById('modalCta');

  function openProject(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    modalImg.src = data.image;
    modalImg.alt = data.title;
    modalTag.textContent = data.category;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalClient.textContent = data.client;
    modalTimeline.textContent = data.timeline;
    modalTools.textContent = data.tools;

    projectModal.hidden = false;
    // Trigger reflow for CSS opacity transition
    requestAnimationFrame(() => {
      projectModal.classList.add('is-visible');
    });
    document.body.style.overflow = 'hidden';
  }

  function hideProjectModal() {
    projectModal.classList.remove('is-visible');
    setTimeout(() => {
      projectModal.hidden = true;
      document.body.style.overflow = '';
    }, 250);
  }

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projId = card.getAttribute('data-project');
      openProject(projId);
    });
    
    // Keyboard Accessibility (Enter or Space to open)
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const projId = card.getAttribute('data-project');
        openProject(projId);
      }
    });
  });

  closeProjectModal.addEventListener('click', hideProjectModal);
  if (modalCta) {
    modalCta.addEventListener('click', hideProjectModal);
  }

  // ------------------------------------------------------------------------
  // 4. Blog Reading Modal Handler
  // ------------------------------------------------------------------------
  const readBlogButtons = document.querySelectorAll('.read-blog-btn');
  const blogModal = document.getElementById('blogModal');
  const closeBlogModal = document.getElementById('closeBlogModal');
  const closeBlogBtn = document.getElementById('closeBlogBtn');
  const blogModalCategory = document.getElementById('blogModalCategory');
  const blogModalTitle = document.getElementById('blogModalTitle');
  const blogModalDate = document.getElementById('blogModalDate');
  const blogModalReadTime = document.getElementById('blogModalReadTime');
  const blogModalBody = document.getElementById('blogModalBody');

  function openBlog(blogId) {
    const post = blogData[blogId];
    if (!post) return;

    blogModalCategory.textContent = post.category;
    blogModalTitle.textContent = post.title;
    blogModalDate.textContent = post.date;
    blogModalReadTime.textContent = post.readTime;
    blogModalBody.innerHTML = post.content;

    blogModal.hidden = false;
    requestAnimationFrame(() => {
      blogModal.classList.add('is-visible');
    });
    document.body.style.overflow = 'hidden';
  }

  function hideBlogModal() {
    blogModal.classList.remove('is-visible');
    setTimeout(() => {
      blogModal.hidden = true;
      document.body.style.overflow = '';
    }, 250);
  }

  readBlogButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.blog-card');
      const blogId = card.getAttribute('data-blog-id');
      openBlog(blogId);
    });
  });

  closeBlogModal.addEventListener('click', hideBlogModal);
  closeBlogBtn.addEventListener('click', hideBlogModal);

  // Close modals on clicking backdrop
  [projectModal, blogModal].forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        if (modal === projectModal) hideProjectModal();
        if (modal === blogModal) hideBlogModal();
      }
    });
  });

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!projectModal.hidden) hideProjectModal();
      if (!blogModal.hidden) hideBlogModal();
    }
  });

  // ------------------------------------------------------------------------
  // 5. Contact Form Validation & Toast Notification
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const userName = document.getElementById('userName');
  const userEmail = document.getElementById('userEmail');
  const userMessage = document.getElementById('userMessage');
  const submitBtn = document.getElementById('submitBtn');
  const toastNotification = document.getElementById('toastNotification');

  let toastTimer = null;

  function showToast(title, message) {
    const toastTitle = document.getElementById('toastTitle');
    const toastBody = document.getElementById('toastBody');
    if (toastTitle && title) toastTitle.textContent = title;
    if (toastBody && message) toastBody.textContent = message;

    toastNotification.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 4500);
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validateField(input, condition) {
    const group = input.closest('.form-group');
    if (!condition) {
      group.classList.add('has-error');
      return false;
    } else {
      group.classList.remove('has-error');
      return true;
    }
  }

  // Clear errors on input
  [userName, userEmail, userMessage].forEach(input => {
    input.addEventListener('input', () => {
      input.closest('.form-group').classList.remove('has-error');
    });
  });

  contactForm.addEventListener('submit', (e) => {
    const isNameValid = validateField(userName, userName.value.trim().length >= 2);
    const isEmailValid = validateField(userEmail, validateEmail(userEmail.value.trim()));
    const isMessageValid = validateField(userMessage, userMessage.value.trim().length >= 8);

    if (!isNameValid || !isEmailValid || !isMessageValid) {
      e.preventDefault();
      return;
    }

    // Indicate sending state
    submitBtn.style.pointerEvents = 'none';
    submitBtn.style.opacity = '0.85';
    submitBtn.innerHTML = `
      <span>Sending...</span>
      <svg class="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
      </svg>
    `;
    // Do NOT prevent default: let the browser POST directly to https://formsubmit.co/kingkhan121219@gmail.com
  });

  // ------------------------------------------------------------------------
  // 6. Smooth Scrolling for Anchor Links
  // ------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
