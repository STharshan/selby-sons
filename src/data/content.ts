import { ServiceItem, ProjectItem, ReviewItem } from '../types';

import heroImg from '../assets/images/hero_glazing_ext_1784732152054.jpg';
import frameDetailImg from '../assets/images/glazing_frame_det_1784732164394.jpg';
import windowsImg from '../assets/images/service_windows_1784732208620.jpg';
import doorsImg from '../assets/images/service_doors_1784732222240.jpg';
import bifoldImg from '../assets/images/service_bifold_doors_1784732178729.jpg';
import conservatoryImg from '../assets/images/service_conservatory_1784732191746.jpg';
import repairsImg from '../assets/images/service_repairs_1784732236781.jpg';

export const ASSETS = {
  hero: heroImg,
  frameDetail: frameDetailImg,
  windows: windowsImg,
  doors: doorsImg,
  bifold: bifoldImg,
  conservatory: conservatoryImg,
  repairs: repairsImg,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'windows',
    title: 'Windows',
    description: 'Stylish, secure and energy efficient.',
    image: windowsImg,
    fullDetails: {
      longDescription: 'Engineered to achieve maximum thermal insulation and A+ energy ratings, our uPVC and Aluminium windows blend high security multi-point locks with classic British architectural design.',
      features: [
        'A+ Energy Efficiency Rating with double or triple glazing',
        'High-security shootbolt multi-point locking systems',
        'Wide choice of finishes: Anthracite Grey, Chartwell Green, Oak, & White',
        'Noise reduction acoustic glass options'
      ],
      specifications: [
        'Frame Depth: 70mm - 85mm uPVC / Aluminium',
        'U-Value down to 0.8 W/m²K',
        'PAS 24 Security Certification',
        'BS 6375 Weather Resistance Rating'
      ],
      guarantee: '10-Year Insurance-Backed Guarantee & FENSA Certificate'
    }
  },
  {
    id: 'doors',
    title: 'Doors',
    description: 'Security and style for modern living.',
    image: doorsImg,
    fullDetails: {
      longDescription: 'Make an unforgettable entrance with our high-density composite, uPVC, and architectural aluminium entrance doors designed to withstand severe weather and keep your home safe.',
      features: [
        'Solid timber core composite construction for maximum strength',
        '3-star Ultion diamond-rated anti-snap cylinder lock',
        'Precision weather seals to prevent cold drafts and water ingress',
        'Custom handles, letterboxes, and decorative glass glazing options'
      ],
      specifications: [
        'Door Thickness: 48mm solid core composite',
        'Police Approved Secured by Design accredited',
        'Toughened safety glass as standard',
        'Thermally broken aluminium threshold options'
      ],
      guarantee: '10-Year Guarantee on Frame, Glass & Locking Mechanism'
    }
  },
  {
    id: 'bifold-doors',
    title: 'Bi-fold Doors',
    description: 'Open your space with seamless indoor-outdoor flow.',
    image: bifoldImg,
    fullDetails: {
      longDescription: 'Transform living spaces with ultra-slim aluminium bi-folding and sliding doors. Stainless steel rollers provide effortless finger-touch gliding and panoramic garden views.',
      features: [
        'Ultra-slim sightlines (from 107mm profile width)',
        'Seamless flush threshold options for level floor transitions',
        'Custom configuration from 2 up to 8 opening door leafs',
        'Solar control thermal glass to keep rooms cool in summer and warm in winter'
      ],
      specifications: [
        'Heavy duty stainless steel roller mechanism',
        'Thermally broken aluminium frames',
        'Child safety finger-safe gaskets',
        'Shootbolt locking between each opening panel'
      ],
      guarantee: '10-Year Structural Guarantee & FENSA Compliance'
    }
  },
  {
    id: 'conservatories',
    title: 'Conservatories',
    description: 'Beautiful spaces to enjoy all year round.',
    image: conservatoryImg,
    fullDetails: {
      longDescription: 'Expand your home footprint with bespoke glazed extensions, conservatories, and tiled warm roofs. Designed for year-round usability without extreme seasonal temperature spikes.',
      features: [
        'Self-cleaning temperature regulating glass roof technology',
        'Insulated roof tile replacement conversions for existing conservatories',
        'Custom styles: Victorian, Edwardian, Lean-to, and Gable End',
        'Integrated LED perimeter pelmet lighting and roof lanterns'
      ],
      specifications: [
        'High-density thermal structural base building',
        'Ultraframe engineered roof structural systems',
        'A-Rated double glazing panels throughout',
        'Building regulations compliance managed for you'
      ],
      guarantee: '10-Year Comprehensive Structural & Glass Guarantee'
    }
  },
  {
    id: 'repairs-maintenance',
    title: 'Repairs & Maintenance',
    description: 'Fast, reliable glazing repairs.',
    image: repairsImg,
    fullDetails: {
      longDescription: 'Restore your existing windows and doors with expert local glass replacements, misty double glazing units fix, broken window handle/hinge replacement, and draught-proofing.',
      features: [
        'Failed misted double glazing unit replacement without replacing frames',
        'Emergency door mechanism & locking gearbox repair',
        'Window handle, friction stay hinge, and gasket rubber seal replacement',
        'Patio door roller & track alignment service'
      ],
      specifications: [
        'Rapid local callout service across Loughborough & Leicestershire',
        'Matching glass tint and acoustic specifications',
        'Quality British-manufactured hardware replacements',
        'No hidden call-out fees'
      ],
      guarantee: '5-Year Guarantee on New Replacement Glass Units'
    }
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Modern Extension Bi-Fold Doors',
    category: 'Bi-fold Doors',
    location: 'Loughborough',
    image: bifoldImg,
    description: 'Installation of anthracite grey 5-panel aluminium bi-folding doors with flush threshold stone patio integration.'
  },
  {
    id: 'p2',
    title: 'Georgian Sash Window Restoration',
    category: 'Windows',
    location: 'Quorn',
    image: windowsImg,
    description: 'A-rated uPVC vertical slider windows installed into a classic period property matching original heritage proportions.'
  },
  {
    id: 'p3',
    title: 'Bespoke Glass Conservatory & Lantern',
    category: 'Conservatories',
    location: 'Rothley',
    image: conservatoryImg,
    description: 'Custom sunroom extension featuring self-cleaning thermal solar glass and modern white uPVC side frames.'
  },
  {
    id: 'p4',
    title: 'Composite Front Entrance Door',
    category: 'Doors',
    location: 'Shepshed',
    image: doorsImg,
    description: 'Solid timber core composite door in Anthracite Grey with long vertical chrome pull handle and sandblasted glass.'
  },
  {
    id: 'p5',
    title: 'High-Performance Window Replacement',
    category: 'Windows',
    location: 'Barrow upon Soar',
    image: frameDetailImg,
    description: 'Complete residence glazing upgrade featuring flush sash uPVC windows in smooth Matt Black finish.'
  },
  {
    id: 'p6',
    title: 'Full Glazing & Bifold Installation',
    category: 'Full House',
    location: 'Mountsorrel',
    image: heroImg,
    description: 'Comprehensive modern architectural project including bi-folds, slimline windows, and roof lantern glazing.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    quote: 'Fantastic service from start to finish. The quality of the windows is brilliant and the team were so professional.',
    author: 'Sarah',
    location: 'Loughborough',
    rating: 5,
    date: '2 weeks ago'
  },
  {
    id: 'r2',
    quote: 'Highly recommend! The whole process was smooth, tidy and the results look amazing.',
    author: 'Mark',
    location: 'Shepshed',
    rating: 5,
    date: '1 month ago'
  },
  {
    id: 'r3',
    quote: "Excellent workmanship and great attention to detail. Wouldn't go anywhere else.",
    author: 'Emma',
    location: 'Quorn',
    rating: 5,
    date: '2 months ago'
  },
  {
    id: 'r4',
    quote: 'Replaced all our draughty timber windows with anthracite uPVC sash windows. House is so much warmer and quieter now!',
    author: 'David & Helen',
    location: 'Rothley',
    rating: 5,
    date: '3 months ago'
  }
];

export const WHY_CHOOSE_US = [
  { title: 'Energy efficient', desc: 'A+ rated double & triple glazing keeping heat in and bills down.' },
  { title: 'Competitive prices', desc: 'Direct, honest local pricing with no high-pressure sales tactics.' },
  { title: 'Expert installation', desc: 'Installed by time-served master glaziers to exacting standards.' },
  { title: 'Clean, respectful service', desc: 'We protect your home with dust sheets and clean thoroughly.' },
  { title: 'Quality assured', desc: 'FENSA registered installations with 10-year insurance guarantees.' },
  { title: 'Long lasting results', desc: 'Premium British hardware & frames built to resist weather for decades.' }
];

export const STATS = [
  { value: '10+', label: 'Years Experience', sub: 'In Glazing Industry' },
  { value: "100's", label: 'Happy Customers', sub: 'Across Leicestershire' },
  { value: '5★', label: 'Rated Service', sub: 'On Google Reviews' },
  { isBadge: true, label: 'FENSA Registered', sub: 'Company #38912' }
];
