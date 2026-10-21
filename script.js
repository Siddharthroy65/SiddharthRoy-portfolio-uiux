document.addEventListener('DOMContentLoaded', () => {
  const mobileProjects = [
    { title: 'Glowbar — Salon & Beautician Booking App', summary: 'Salon booking experience for beauty and grooming services, with account creation, app onboarding and appointment-slot selection.', tags: ['Mobile App', 'Beauty & Wellness', 'Appointment Booking'], role: 'UI/UX Design', platform: 'Mobile app', images: ['Splash glowbar.png', 'Sign up glowbar.png', 'Slotglowbar.png'], views: ['Splash screen', 'Sign up', 'Choose appointment slot'] },
    { title: 'Care24 — Care & Wellness App', summary: 'Care-focused mobile experience with a calm welcome screen and clear sign-up and sign-in flows.', tags: ['Mobile App', 'Healthcare', 'Onboarding'], images: ['care24-splash.png', 'care24-login.png', 'care24-signup.png'], views: ['Welcome', 'Sign in', 'Create account'] },
    { title: 'CookDekho — Recipe Discovery', summary: 'Food discovery app with a welcoming entry point and a browsable recipe dashboard.', tags: ['Mobile App', 'Food & Recipes', 'Discovery'], images: ['cookdekho-splash.png', 'cookdekho-dashboard.png', 'cookdekho-login.png'], views: ['Welcome', 'Recipe dashboard', 'Sign in'] },
    { title: 'Houzeo — Real Estate App', summary: 'Property app that brings secure account access and real-estate browsing into one dashboard.', tags: ['Mobile App', 'Real Estate', 'Property Search'], images: ['houzeo-splash.png', 'houzeo-dashboard.png', 'houzeo-login.png'], views: ['Welcome', 'Property dashboard', 'Sign in'] },
    { title: 'Kayadapothi — Legal Reference App', summary: 'Gujarati-first legal reference app with branded onboarding, secure sign-in and an easy-to-scan list of legal topics.', tags: ['Mobile App', 'LegalTech', 'Localization'], images: ['kayadapothi-dashboard.png', 'kayadapothi-list.png', 'kayadapothi-login.png'], views: ['Splash', 'Topic list', 'Sign in'] },
    { title: 'Physical Inventory — Stock Management App', summary: 'Mobile inventory workflow for signing in, reviewing inventory dashboards, choosing actions and managing physical stock checks.', tags: ['Mobile App', 'Inventory', 'Retail Operations'], role: 'UI/UX Design', platform: 'Mobile app', images: ['physical-login.png', 'physical-dashboard.png', 'physical inventory.png', 'pi-options.png'], views: ['Login', 'Dashboard', 'Physical inventory', 'Options'] },
    { title: 'Ziksu — Payment Application', summary: 'Payment app concept with a branded splash screen, home experience and secure sign-in flow.', tags: ['Mobile App', 'FinTech', 'Payments'], role: 'UI/UX Design', platform: 'Mobile app', images: ['Splashziksu.png', 'Homeziksu.png', 'Loginziksu.png'], views: ['Splash screen', 'Home', 'Login'] },
    { title: 'NEOS — Asset Finder', summary: 'Asset-management flow for signing in and quickly locating equipment with search.', tags: ['Mobile App', 'Asset Management', 'Search'], images: ['neos-splash.png', 'neos-asset-search.png', 'neos-login.png'], views: ['Welcome', 'Asset search', 'Sign in'] },
    { title: 'PI Tasks — Work Planning', summary: 'Task app that connects onboarding, task lists and detailed work items for field teams.', tags: ['Mobile App', 'Productivity', 'Task Management'], images: ['pi-get-started.png', 'pi-task-list.png', 'pi-task-details.png'], views: ['Get started', 'Task list', 'Task details'] },
    { title: 'eAuction — Live Bidding', summary: 'Streamlined auction experience for browsing live events and placing bids on mobile.', tags: ['Mobile App', 'Auctions', 'Bidding'], images: ['eauction-login.png', 'eauction-events.png', 'eauction-bid.png'], views: ['Sign in', 'Auction events', 'Place a bid'] },
    { title: 'Shipment Tracker — Delivery App', summary: 'Delivery companion app designed around secure access, at-a-glance status and shipment details.', tags: ['Mobile App', 'Logistics', 'Tracking'], images: ['shipment-login.png', 'shipment-dashboard.png', 'shipment-details.png'], views: ['Sign in', 'Dashboard', 'Shipment details'] },
    { title: 'Warehouse WMS — Mobile', summary: 'Handheld warehouse companion with a branded welcome, secure access and a fulfilment overview.', tags: ['Mobile App', 'Warehouse', 'Logistics'], images: ['wms-splash.png', 'wms-dashboard.png', 'wms-login.png'], views: ['Welcome', 'Dashboard', 'Sign in'] },
    { title: 'Time & Attendance — Workforce App', summary: 'Workforce app for clocking in, reviewing attendance records and checking daily status.', tags: ['Mobile App', 'Workforce', 'Attendance'], images: ['time-login.png', 'time-attendance.png', 'time-dashboard.png'], views: ['Sign in', 'Attendance', 'Dashboard'] },
    { title: 'True — Order Management', summary: 'Order management app with an activity overview and individual order tracking.', tags: ['Mobile App', 'Orders', 'Operations'], images: ['true-login.png', 'true-orders.png', 'true-dashboard.png'], views: ['Sign in', 'Orders', 'Dashboard'] },
    { title: 'NurseryNow — Plant Discovery App', summary: 'Plant nursery mobile experience featuring a welcome screen, a dashboard and plant browsing screens.', tags: ['Mobile App', 'Plants & Gardening', 'Discovery'], role: 'UI/UX Design', platform: 'Mobile app', images: ['nursarynowwelcome.jpg', 'nusarynow dash.jpg', 'nusarynow plant.jpg'], views: ['Welcome', 'Dashboard', 'Plant details'] },
    { title: 'EVRide — EV Ride & Charging App', summary: 'Electric vehicle ride booking app that pairs trips with charging-station discovery so riders and drivers never run out of range.', tags: ['Mobile App', 'Mobility', 'Electric Vehicles'], role: 'UI/UX Design', platform: 'iOS & Android', highlights: ['Book rides and see live vehicle battery range', 'Find, filter and reserve nearby charging stations', 'Transparent fare breakdown and trip history', 'Eco impact summary after every ride'], images: ['evride-1.png', 'evride-2.png', 'evride-3.png'], views: ['Book a ride', 'Live trip', 'Charging stations'] },
    { title: 'Kirana Store — Neighbourhood Grocery App', summary: 'Hyperlocal grocery app that digitises the corner kirana store with quick reordering, store credit and doorstep delivery.', tags: ['Mobile App', 'Retail', 'Hyperlocal'], role: 'UI/UX Design', platform: 'Android', highlights: ['One-tap reorder of regular household items', 'Search by product or aisle with vernacular labels', 'Digital khata for store credit and payments', 'Delivery slots and live order status'], images: ['kiranastore-1.png', 'kiranastore-2.png', 'kiranastore-3.png'], views: ['Home', 'Product list', 'Checkout'] },
    { title: 'NyayaConnect — Legal Help on Demand', summary: 'Legal services app that connects citizens with verified advocates for consultations, document help and case tracking.', tags: ['Mobile App', 'LegalTech', 'Consultation'], role: 'UI/UX Design', platform: 'iOS & Android', highlights: ['Home with legal categories: family, property, criminal, corporate, tax and more', 'Search lawyers or describe your legal issue in plain words', 'Verified advocates with ratings, experience, languages and fees', 'Book video consultations with next-available slots and clear pricing'], images: ['nyayaconnect-splash.jpg', 'nyayaconnect-home.jpg', 'nyayaconnect-lawyers.jpg'], views: ['Splash', 'Home', 'Find a lawyer'] }
  ].map(project => ({ ...project, category: 'mobile', device: 'phone' }));

  const desktopProjects = [
    { category: 'web', device: 'laptop', title: 'Trade & More — Product Marketplace', summary: 'Marketplace storefront spanning product discovery, hero merchandising and editorial reviews.', tags: ['Web Platform', 'Marketplace', 'E-commerce'], images: ['tradeandmore-hero.png', 'tradeandmore-products.png', 'tradeandmore-news-reviews.png'], views: ['Storefront', 'Products', 'News & reviews'] },
    { category: 'web dashboard', device: 'laptop', title: 'Reliance Buyer First — Procurement', summary: 'Procurement workspace for buyer operations, secure sign-in and OTP verification.', tags: ['Dashboard', 'Procurement', 'Enterprise'], images: ['reliance-buyer-dashboard.png', 'reliance-buyer-login.png', 'reliance-buyer-otp.png'], views: ['Buyer dashboard', 'Sign in', 'Verification'] },
    { category: 'web', device: 'laptop', title: 'Roy Brothers — Equipment Commerce', summary: 'Heavy-equipment website connecting a bold storefront, a detailed catalog and order information.', tags: ['Web Platform', 'B2B Commerce', 'Equipment'], images: ['roybrothers-hero.png', 'roybrothers-catalog.png', 'roybrothers-order.png'], views: ['Storefront', 'Equipment catalog', 'Order details'] },
    { category: 'web dashboard', device: 'laptop', title: 'Control Tower — Operations Map', summary: 'Operations workspace combining a central dashboard with a live geographic overview.', tags: ['Dashboard', 'Operations', 'Data Visualization'], images: ['control-tower-dashboard.png', 'control-tower-map.png', 'control-tower-login.png'], views: ['Dashboard', 'Operations map', 'Sign in'] },
    { category: 'web', device: 'laptop', title: 'Chezuba — Volunteer Platform', summary: 'Volunteer portal connecting project discovery, participation and application status across desktop and mobile.', tags: ['Web Platform', 'Responsive', 'Volunteer Network'], images: ['chezuba-dashboard.png'], phones: ['chezuba-project-list.png', 'chezuba-application-status.png'], views: ['Dashboard', 'Project list', 'Application status'] },
    { category: 'web dashboard', device: 'laptop', title: 'Shipment Connect — Logistics Portal', summary: 'Shipment portal with secure sign-in, OTP verification and a consolidated delivery dashboard.', tags: ['Dashboard', 'Logistics', 'Tracking'], images: ['shipment-connect-dashboard.png', 'shipment-connect-login.png', 'shipment-connect-otp.png'], views: ['Dashboard', 'Sign in', 'Verification'] },
    { category: 'web', device: 'laptop', title: 'Reliance Gift Vouchers — Admin Portal', summary: 'Gift card and voucher process portal with master data tables, bulk upload and a friendly sign-in.', tags: ['Web Platform', 'Retail', 'Data Tables'], images: ['gift-dashboard.png', 'gift-login.png', 'gift-otp.png'], views: ['Voucher dashboard', 'Sign in', 'OTP verification'] },
    { category: 'web dashboard', device: 'laptop', title: 'Shipment PO — Purchase Orders', summary: 'Purchase-order portal connecting order tracking with server selection and account access.', tags: ['Dashboard', 'Supply Chain', 'Purchase Orders'], images: ['shipment-po-dashboard.png', 'shipment-po-server-selection.png', 'shipment-po-login.png'], views: ['Dashboard', 'Server selection', 'Sign in'] },
    { category: 'web', device: 'tablet', title: 'IronTrac — Asset Tracking', summary: 'Tablet-first asset tracking tool for serial-number search, certification status and recent lookups.', tags: ['Web Platform', 'Tablet', 'Asset Tracking'], images: ['irontrac-login.png', 'irontrac-dashboard.png', 'irontrac-search.png'], views: ['Sign in', 'Search', 'Results'] },
    { category: 'web dashboard', device: 'laptop', title: 'ZPack — Production Workflow', summary: 'Production workspace presenting an operational overview and clear process steps.', tags: ['Dashboard', 'Manufacturing', 'Workflow'], images: ['zpack-dashboard.png', 'zpack-process.png', 'zpack-login.png'], views: ['Dashboard', 'Process', 'Sign in'] },
    { category: 'web dashboard', device: 'laptop', title: 'Swift — Payment Operations', summary: 'Payment operations workspace for reviewing transactions and service information.', tags: ['Dashboard', 'Payments', 'Operations'], images: ['swift-dashboard.png', 'swift-prv.png', 'swift-login.png'], views: ['Dashboard', 'Payment review', 'Sign in'] }
  ];

  const palettes = [
    ['#06b6d4', '#8b5cf6'], ['#ec4899', '#6366f1'], ['#f59e0b', '#ef4444'], ['#10b981', '#06b6d4'],
    ['#8b5cf6', '#ec4899'], ['#3b82f6', '#22d3ee']
  ];

  const interleave = (a, b) => Array.from({ length: Math.max(a.length, b.length) }, (_, i) => [a[i], b[i]]).flat().filter(Boolean);
  const additionalProjects = interleave(mobileProjects, desktopProjects);

  const projectGrid = document.getElementById('projectGrid');
  const createElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };
  const createImage = (file, alt) => {
    const image = createElement('img');
    image.src = `images/${encodeURI(file)}`;
    image.alt = alt;
    image.loading = 'lazy';
    image.decoding = 'async';
    image.addEventListener('error', () => {
      image.hidden = true;
      image.parentElement.classList.add('img-missing');
      if (!image.parentElement.querySelector('.image-fallback')) {
        const fallback = createElement('div', 'image-fallback', alt || 'Project preview');
        image.parentElement.append(fallback);
      }
    });
    return image;
  };

  const createDevices = project => {
    if (project.device === 'phone' || project.device === 'tablet') {
      const devices = createElement('div', `device-mobile-triad tilt-target${project.device === 'tablet' ? ' is-tablet' : ''}`);
      project.images.forEach((file, index) => {
        const position = index === 1 ? 'main-phone' : `side-phone ${index === 0 ? 'left' : 'right'}`;
        const phone = createElement('div', `phone-item ${position}`);
        phone.append(createImage(file, `${project.title} — ${project.views[index]}`));
        devices.append(phone);
      });
      return devices;
    }

    const stage = createElement('div', 'laptop-stage tilt-target');
    const laptop = createElement('div', 'laptop');
    const screen = createElement('div', 'laptop-screen');
    const bar = createElement('div', 'window-bar');
    const dots = createElement('div', 'window-dots');
    ['red', 'yellow', 'green'].forEach(color => dots.append(createElement('span', `dot ${color}`)));
    bar.append(dots, createElement('div', 'window-address', project.title.split(' — ')[0].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.app'));
    const body = createElement('div', 'window-body');
    body.append(createImage(project.images[0], `${project.title} — ${project.views[0]}`));
    screen.append(bar, body);
    laptop.append(screen, createElement('div', 'laptop-base'));
    stage.append(laptop);

    (project.phones || []).forEach((file, index) => {
      const phone = createElement('div', `stage-phone stage-phone-${index + 1}`);
      phone.append(createImage(file, `${project.title} — ${project.views[index + 1]}`));
      stage.append(phone);
    });
    if (!project.phones) {
      project.images.slice(1, 3).forEach((file, index) => {
        const shot = createElement('div', `float-shot float-shot-${index + 1}`);
        shot.append(createImage(file, `${project.title} — ${project.views[index + 1]}`));
        stage.append(shot);
      });
    }
    return stage;
  };

  const createProjectCard = (project, index) => {
    const card = createElement('article', 'project-card reveal');
    card.dataset.category = project.category;
    const [from, to] = palettes[index % palettes.length];
    card.style.setProperty('--g1', from);
    card.style.setProperty('--g2', to);

    const media = createElement('div', 'project-media-wrap');
    media.append(createDevices(project));
    card.append(media);

    const info = createElement('div', 'project-info');
    const tags = createElement('div', 'project-tags');
    project.tags.forEach(tag => tags.append(createElement('span', 'tag', tag)));
    info.append(tags, createElement('h3', 'project-heading', project.title), createElement('p', 'project-summary', project.summary));

    if (project.highlights) {
      const features = createElement('ul', 'project-features');
      project.highlights.forEach(item => features.append(createElement('li', '', item)));
      info.append(features);
    }

    const details = createElement('div', 'project-meta-list');
    const deviceLabel = { phone: 'Mobile app', tablet: 'Tablet app', laptop: 'Desktop web' }[project.device];
    const screens = (project.phones ? project.images.length + project.phones.length : project.images.length);
    details.append(
      createElement('div', 'meta-item', project.platform || deviceLabel),
      createElement('div', 'meta-item', `${screens} key screens`)
    );
    if (project.role) details.append(createElement('div', 'meta-item', project.role));
    info.append(details);
    card.append(info);
    return card;
  };

  if (projectGrid) {
    const firstStaticCard = projectGrid.firstElementChild;
    additionalProjects.forEach((project, index) => projectGrid.insertBefore(createProjectCard(project, index), firstStaticCard));
  }

  // Skill pill icons (first matching keyword wins)
  const skillIcons = [
    ['figma', '🎨'], ['figjam', '🧩'], ['design system', '🧱'], ['information', '🗂️'], ['wirefram', '📐'],
    ['prototyp', '🕹️'], ['micro', '✨'], ['flow', '🔀'], ['usability', '🧪'], ['token', '🪙'], ['framer', '🌀'],
    ['protopie', '🥧'], ['html', '🌐'], ['responsive', '📱'], ['css', '🎛️'], ['wcag', '♿'], ['audit', '🔍'],
    ['state', '🔘'], ['dev mode', '🛠️'], ['storybook', '📚'], ['javascript', '⚡'], ['git &', '🌿'], ['devtools', '🧰'],
    ['lottie', '🎞️'], ['midjourney', '🖼️'], ['lovable', '💜'], ['bolt', '⚡'], ['uizard', '🪄'], ['relume', '🗺️'],
    ['attention', '👁️'], ['stitch', '🧵'], ['v0', '▲'], ['galileo', '🔭'], ['visily', '📝'], ['chatgpt', '💬'],
    ['claude', '🤖'], ['copilot', '🧑‍✈️'], ['cursor', '🖱️'], ['magic', '🔮'], ['firefly', '🔥'], ['runway', '🎬']
  ];
  document.querySelectorAll('.skill-pill').forEach(pill => {
    const label = pill.textContent.toLowerCase();
    const match = skillIcons.find(([key]) => label.includes(key));
    const icon = document.createElement('span');
    icon.className = 'skill-pill-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = match ? match[1] : '◆';
    pill.prepend(icon);
  });

  // 1. Interactive Scroll Progress Bar
  const progressBar = document.getElementById('progressBar');
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${progress}%`;
  }, { passive: true });

  // 2. Custom Cursor Follower
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorGlow = document.querySelector('.cursor-glow');

  if (cursorDot && cursorGlow) {
    window.addEventListener('pointermove', (e) => {
      const { clientX: x, clientY: y } = e;
      cursorDot.style.left = `${x}px`;
      cursorDot.style.top = `${y}px`;
      
      cursorGlow.animate({
        left: `${x}px`,
        top: `${y}px`
      }, { duration: 250, fill: 'forwards' });
    });
  }

  // 3. Header Scroll State & Scrollspy
  const header = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = Array.from(document.querySelectorAll('section[id]'));

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    const scrollPos = window.scrollY + 140;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { passive: true });

  // 4. Project Category Filtering with Smooth Transition
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat.split(' ').includes(filter)) {
          card.classList.remove('is-hidden');
          setTimeout(() => card.classList.add('in-view'), 30);
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });

  // 5. Intersection Observer for Scroll Reveal
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealElements.forEach(el => observer.observe(el));

  // 6. 3D Tilt Card Interaction for Mockups
  document.querySelectorAll('.tilt-target').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(1000px) rotateX(${-y * 10}deg) rotateY(${x * 12}deg) scale(1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // 7. Magnetic Button Micro-interactions
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('pointermove', e => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      btn.style.transform = `translate(${x * 8}px, ${y * 8}px)`;
    });
    btn.addEventListener('pointerleave', () => {
      btn.style.transform = '';
    });
  });

  // 8. Theme Switcher (Dark / Light with LocalStorage)
  const themeToggle = document.getElementById('themeToggle');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light') {
    root.classList.add('light');
    if (themeToggle) themeToggle.querySelector('.theme-icon').textContent = '🌞';
  }

  themeToggle?.addEventListener('click', () => {
    const isLight = root.classList.toggle('light');
    themeToggle.querySelector('.theme-icon').textContent = isLight ? '🌞' : '🌙';
    localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
  });

  // 9. Mobile Navigation Menu Toggle
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  navToggle?.addEventListener('click', () => {
    const isOpen = siteNav.style.display === 'flex';
    siteNav.style.display = isOpen ? 'none' : 'flex';
    navToggle.setAttribute('aria-expanded', !isOpen);
  });
});