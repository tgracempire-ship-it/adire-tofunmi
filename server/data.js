// Backend API data store for Threads of Heritage

export const PRODUCTS = [
  {
    id: 'ade-oba-crimson-agbada',
    name: 'Ade-Oba Royal Crimson Agbada Set',
    category: 'groom',
    weaveType: 'alaari',
    image: '/images/groom-agbada-portrait.jpg',
    description: 'A sovereign statement of prestige and royal masculinity. Handwoven from premium Alaari crimson threads with intricate geometric hexagonal chest embroidery in champagne-gold thread.',
    piecesIncluded: [
      'Grand 3-Piece Flowing Agbada Robe',
      'Tailored Inner Buba Tunic',
      'Comfort-fit Sokoto / Kembe Trousers',
      'Matching Embroidered Royal Fila (Cap)'
    ],
    leadTimeWeeks: '3 - 4 weeks',
    tags: ['Groom', 'Agbada', 'Alaari', 'Royal', 'Wedding']
  },
  {
    id: 'olori-silver-gold-bridal',
    name: 'Olori Charcoal & Gold Embellished Bridal Gele & Ensemble',
    category: 'bridal',
    weaveType: 'lurex',
    image: '/images/bride-grey-gold.jpg',
    description: 'A breathtaking bridal statement in shimmering pewter-grey with raised metallic gold circular motifs and dangling golden tassel beadwork along the hemlines.',
    piecesIncluded: [
      'Tailored Bridal Buba Blouse with Bell Sleeves',
      'Matching Pleated Iro (Wrap Skirt)',
      'Luxury Structured Bridal Gele (Head-tie)',
      'Ceremonial Shoulder Ipele'
    ],
    leadTimeWeeks: '4 weeks',
    tags: ['Bridal', 'Gele', 'Lurex', 'Engagement', 'Luxury']
  },
  {
    id: 'asake-regal-striped-gown',
    name: 'Asake Heritage Striped Aso Oke Gown',
    category: 'bridal',
    weaveType: 'etu',
    image: '/images/bride-striped-gown.jpg',
    description: 'Traditional narrow-strip weaving reimagined for contemporary haute couture. Features ancestral linear pinstripes running vertically to elongate the silhouette.',
    piecesIncluded: [
      'Floor-length Bespoke Striped Gown',
      'Matching High-Crown Striped Gele',
      'Optional Matching Envelope Clutch Fabric Wrap'
    ],
    leadTimeWeeks: '3 - 4 weeks',
    tags: ['Bridal', 'Couture', 'Contemporary', 'Stripes', 'Gown']
  },
  {
    id: 'bashiro-royal-toddler-wrap',
    name: 'Omowunmi Little Monarch Dedication Set',
    category: 'children',
    weaveType: 'sanyan',
    image: '/images/child-traditional-wrap.jpg',
    description: 'Created with extra-soft, baby-safe natural combed cotton for naming ceremonies and milestone first birthday portraits.',
    piecesIncluded: [
      'Baby/Toddler Soft Aso Oke Wrap',
      'Matching Mini Buba or Cape',
      'Miniature Coral-Accent Headband / Fila'
    ],
    leadTimeWeeks: '2 weeks',
    tags: ['Children', 'Dedication', 'Birthday', 'Keepsake', 'Baby']
  },
  {
    id: 'etu-sapphire-handloom-roll',
    name: 'Etu Imperial Sapphire Striped Loom Roll',
    category: 'raw-loom',
    weaveType: 'etu',
    image: '/images/fabric-blue-stripes.jpg',
    description: 'Ancestral Etu weaving featuring vibrant shades of royal blue, cobalt, sky blue, and golden khaki pinstripes.',
    piecesIncluded: ['Full 5-Yard Loom Roll', 'Care Guide'],
    leadTimeWeeks: '2 weeks',
    tags: ['Raw Loom', 'Etu', 'Fabric Roll', 'Blue']
  },
  {
    id: 'sanyan-chocolate-bronze-roll',
    name: 'Sanyan Earth Bronze & Wine Roll',
    category: 'raw-loom',
    weaveType: 'sanyan',
    image: '/images/fabric-chocolate-roll.jpg',
    description: 'Warm earth tones of roasted cocoa, aged mahogany, and dark plum wine.',
    piecesIncluded: ['Full 5-Yard Handloom Roll'],
    leadTimeWeeks: '2 - 3 weeks',
    tags: ['Raw Loom', 'Sanyan', 'Chocolate']
  }
];

export const WEDDING_PACKAGES = [
  {
    id: 'royalty-tier',
    name: 'The Crown Monarch (Oba & Olori)',
    tier: 'Royalty',
    tagline: 'The ultimate royal presentation for the couple who commands the stage.',
    brideOutfit: 'Heavily beaded & stone-studded Alaari / Lurex Bridal Buba, Iro, Gele & Ipele.',
    groomOutfit: 'Flowing 4-Piece Grand Agbada, inner buba, kembe, and matching royal Fila.',
    leadTime: '4 - 5 weeks'
  },
  {
    id: 'signature-tier',
    name: 'The Signature Heritage Duo',
    tier: 'Signature',
    tagline: 'Ancestral elegance with modern tailoring and refined silhouettes.',
    brideOutfit: 'Bespoke handwoven Aso Oke Iro, Buba, Gele, and Ipele.',
    groomOutfit: '3-Piece Tailored Agbada and matching Fila.',
    leadTime: '3 - 4 weeks'
  },
  {
    id: 'contemporary-tier',
    name: 'The Contemporary Minimalist',
    tier: 'Heritage',
    tagline: 'Clean lines, featherlight weave tension, and timeless subtle hues.',
    brideOutfit: 'Modern Aso Oke Gown or Iro/Buba set.',
    groomOutfit: 'Classic Agbada or Kaftan with Aso Oke yoke and matching Fila.',
    leadTime: '2 - 3 weeks'
  }
];

export const ATELIER_INFO = {
  brandName: 'Threads of Heritage',
  masterWeaver: 'Jesutofunmi',
  tagline: 'Purveyor of Luxurious Aso Oke',
  motto: 'Timeless Elegance. Order Now.',
  phone: '09062121042',
  phoneInternational: '+2349062121042',
  email: 'heritage0806@gmail.com',
  instagram: '@threadsofheritage_1234',
  location: 'Lagos & Ibadan, Nigeria'
};
