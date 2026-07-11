export type Category =
  | 'all'
  | 'products'
  | 'static'
  | 'dynamic'
  | 'ecommerce'
  | 'erp'
  | 'mobile'
  | 'software';

export interface Project {
  id: string;
  name: string;
  logo: string;
  category: Exclude<Category, 'all'>;
  description: string;
  url: string;
  featured?: boolean;
}

export const categories: { id: Category; label: string; emoji: string }[] = [
  { id: 'all', label: 'All Projects', emoji: '✦' },
  { id: 'products', label: 'Products', emoji: '📦' },
  { id: 'static', label: 'Static Websites', emoji: '🌐' },
  { id: 'dynamic', label: 'Dynamic Websites', emoji: '⚡' },
  { id: 'ecommerce', label: 'E-Commerce', emoji: '🛍️' },
  { id: 'erp', label: 'ERP Solutions', emoji: '🏢' },
  { id: 'mobile', label: 'Mobile Applications', emoji: '📱' },
  { id: 'software', label: 'Custom Software', emoji: '💻' },
];

export const projects: Project[] = [
  // ─── PRODUCTS ───────────────────────────────────────────────────
  {
    id: 'p-myoutlet',
    name: 'My Outlet',
    logo: '/clients/Myoutlet logo-01.png',
    category: 'products',
    description: 'A feature-rich multi-vendor marketplace app connecting buyers and sellers across categories with seamless checkout and real-time inventory.',
    url: 'https://myoutlet.app',
    featured: true,
  },

  // ─── STATIC WEBSITES ────────────────────────────────────────────
  {
    id: 's-rayan',
    name: 'Rayan',
    logo: '/clients/rayan-removebg-preview.png',
    category: 'static',
    description: 'Professional corporate website for Rayan Real Estate — elegant layouts, property listings, and contact integration.',
    url: 'https://rayan-rho.vercel.app/',
  },
  {
    id: 's-zain',
    name: 'Zain Careers',
    logo: '/clients/zain logo2.png',
    category: 'static',
    description: 'Career portal and corporate showcase for Zain, featuring job listings, company culture pages, and application flows.',
    url: 'https://www.zaincareers.in',
  },
  {
    id: 's-milemakers',
    name: 'Milemakers',
    logo: '/clients/milemakers.png',
    category: 'static',
    description: 'Clean, high-performance business website for Milemakers — showcasing services, team, and client success stories.',
    url: 'https://milemakers.in',
  },
  {
    id: 's-danush',
    name: 'Danush Group',
    logo: '/clients/danush-removebg-preview.png',
    category: 'static',
    description: 'Professional multi-division corporate website for Danush Group with service showcases and responsive design.',
    url: 'https://www.danushgroup.com',
  },
  {
    id: 's-gclife',
    name: 'GC Life',
    logo: '/clients/Gc 2.png',
    category: 'static',
    description: 'Vibrant lifestyle brand website with rich imagery, product showcases, and immersive storytelling sections.',
    url: '#',
  },
  {
    id: 's-empower',
    name: 'Empower',
    logo: '/clients/Empower.png',
    category: 'static',
    description: 'Institute website for Empower — course listings, faculty profiles, enrollment CTAs, and mobile-first layout.',
    url: '#',
  },
  {
    id: 's-tweaki',
    name: 'Tweaki',
    logo: '/clients/tweaki.png',
    category: 'static',
    description: 'Minimalist, modern brand site for Tweaki — clean grid layouts, portfolio pages, and conversion-focused CTAs.',
    url: '#',
  },
  {
    id: 's-zendoksa',
    name: 'Zendo KSA',
    logo: '/clients/zendo-arabic-black-logo.png',
    category: 'ecommerce',
    description: 'Bilingual Arabic–English corporate site for Zendo KSA with RTL support and polished brand identity.',
    url: 'https://www.zendoksa.com',
  },
  {
    id: 's-shawarma',
    name: 'Shawarma Fusion',
    logo: '/clients/Shawarma_Fusion_logo_design__1__2-removebg-preview.png',
    category: 'static',
    description: 'Delicious restaurant brand site with menu showcases, location maps, and online reservation functionality.',
    url: '#',
  },
  {
    id: 's-sunbird',
    name: 'Sunbird Solars',
    logo: '/clients/sunbird-removebg-preview.png',
    category: 'static',
    description: 'Professional solar energy company website with product catalogues, ROI calculators, and inquiry forms.',
    url: 'https://www.sunbirdsolars.com',
  },
  {
    id: 's-modern-biotech',
    name: 'Modern Biotech',
    logo: '/clients/modern.png',
    category: 'static',
    description: 'Clean and professional website for Modern Biotech — lab-grade product catalogues, research highlights, and inquiry management.',
    url: 'https://www.modern-biotech.in',
    featured: true,
  },
  {
    id: 's-capture-survey',
    name: 'Capture Survey',
    logo: '/clients/capture.png',
    category: 'static',
    description: 'Professional website for Capture Survey, showcasing Dual-Frequency DGPS receivers and advanced digital surveying technology for mapping contours, layouts, and land contours.',
    url: 'https://www.capturesurvey.in',
    featured: true,
  },
  {
    id: 's-noorleen',
    name: 'Noorleen',
    logo: '/clients/noor.png',
    category: 'static',
    description: 'Elegant fashion brand website for Noorleen Clothings — lookbook, size guides, and social media integration.',
    url: '#',
  },
  {
    id: 's-tokyo',
    name: 'Tokyo',
    logo: '/clients/Tokyo__2-removebg-preview.PNG',
    category: 'static',
    description: 'Clean, bold lifestyle brand website for Tokyo with editorial photography and minimal, premium UX.',
    url: '#',
  },

  // ─── DYNAMIC WEBSITES ───────────────────────────────────────────
  {
    id: 'd-cosmotech',
    name: 'Cosmotech',
    logo: '/clients/cosmotech-removebg-preview.png',
    category: 'dynamic',
    description: 'Full-featured engineering solutions website for Cosmotech with dynamic project portfolios, client case studies, and CMS-driven content.',
    url: 'https://www.cosmoteches.com',
    featured: true,
  },
  {
    id: 'd-nicetools',
    name: 'Nice Tools',
    logo: '/clients/logo-removebg-preview (1).png',
    category: 'dynamic',
    description: 'Dynamic product showcase platform for Nice Tools with live inventory, category filters, and detailed tool specification pages.',
    url: 'https://nicetool.vercel.app',
    featured: true,
  },
  {
    id: 'd-codeverse',
    name: 'Codeverse Business',
    logo: '/clients/codeverse.PNG',
    category: 'dynamic',
    description: 'Tech-forward business platform for Codeverse with dynamic service pages, blog, and client dashboard portal.',
    url: '#',
  },
  {
    id: 'd-friends',
    name: 'Friends Enterprises',
    logo: '/clients/friends logo (1) 2.png',
    category: 'dynamic',
    description: 'Multi-branch enterprise website with admin-controlled product listings, branch finders, and lead management.',
    url: '#',
  },

  // ─── E-COMMERCE ─────────────────────────────────────────────────
  {
    id: 'e-newdelmon',
    name: 'Newdelmon',
    logo: '/clients/delmon_logo_bg-removebg-preview.png',
    category: 'ecommerce',
    description: 'Scalable e-commerce platform for Newdelmon with full product management, payment gateways, and order tracking.',
    url: 'https://newdelmon.com',
    featured: true,
  },
  {
    id: 'e-aquapool',
    name: 'Aqua Pool',
    logo: '/clients/aquapool-removebg-preview.png',
    category: 'ecommerce',
    description: 'Premium e-commerce storefront for Acapole featuring curated product collections, smooth checkout, and customer reviews.',
    url: 'https://aquapools.in',
    featured: true,
  },
  {
    id: 'e-srflames',
    name: 'SR Flames',
    logo: '/clients/SRFlames-removebg-preview.png',
    category: 'ecommerce',
    description: 'Premium e-commerce platform for SR Flames luxury burner appliances with catalog management and payment integration.',
    url: 'https://srflames.com',
    featured: true,
  },
  {
    id: 'd-branday',
    name: 'Branday',
    logo: '/clients/branday.png',
    category: 'dynamic',
    description: 'Premium e-commerce platform for SR Flames luxury burner appliances with catalog management and payment integration.',
    url: 'https://thebranday.com',
    featured: true,
  },


  // ─── ERP SOLUTIONS ──────────────────────────────────────────────
  {
    id: 'd-atom',
    name: 'Atom Institute',
    logo: '/clients/Atom.png',
    category: 'dynamic',
    description: 'Comprehensive ERP for Atom Entrance Coaching — student records, batch management, online tests, and performance analytics.',
    url: 'https://www.atominstitute.co.in/',
    featured: true,
  },

  // ─── MOBILE APPLICATIONS ────────────────────────────────────────
  {
    id: 'm-movex',
    name: 'Movex',
    logo: '/clients/movexlogo.png', // placeholder — user will share actual logo
    category: 'mobile',
    description: 'AI-powered fitness tracking mobile application with personalized workout plans, progress analytics, and social challenges.',
    url: 'www.movexfitness.com',
    featured: true,
  },

  // ─── CUSTOM SOFTWARE ────────────────────────────────────────────
  {
    id: 'sw-sunbird-proposal',
    name: 'Sunbird Proposal Tool',
    logo: '/clients/sunbird-removebg-preview.png',
    category: 'software',
    description: 'Custom solar proposal generation tool for Sunbird Solars — automated quotes, system sizing, ROI breakdowns, and branded PDF export.',
    url: 'https://proposal.sunbirdsolars.com',
    featured: true,
  },
  {
    id: 'sw-crevion-receipt',
    name: 'CrevionAds Receipt',
    logo: '/images/crevionads_logod.png',
    category: 'software',
    description: 'Internal billing and receipt management system for CrevionAds — generate, track, and share client invoices and payment receipts.',
    url: 'https://crevionads-reciept.vercel.app',
    featured: true,
  },
];
