import { WeddingPackage } from '../types';

export const WEDDING_PACKAGES: WeddingPackage[] = [
  {
    id: 'royalty-tier',
    name: 'The Crown Monarch (Oba & Olori)',
    tier: 'Royalty',
    tagline: 'The ultimate royal presentation for the couple who commands the stage.',
    priceNGN: 560000,
    image: '/images/groom-agbada-portrait.jpg',
    brideOutfit: 'Heavily beaded & stone-studded Alaari / Lurex Bridal Buba, Iro with scalloped crystal fringe, towering structured Gele & ceremonial Ipele.',
    groomOutfit: 'Flowing 4-Piece Grand Agbada with multi-thread bullion crest embroidery, inner buba, tailored kembe, and matching high-crown royal Fila.',
    accessories: [
      'Authentic Benin / Yoruba Royal Coral Bead Neckpiece & Wristlets Set',
      'Matching Embroidered Bride Purse / Envelope Clutch',
      'Dual Luxury Keepsake Presentation Chests with Couple Monogram',
      'Priority Loom Production Slot with Video Proof of Weaving'
    ],
    leadTime: '4 - 5 weeks',
    popular: true
  },
  {
    id: 'signature-tier',
    name: 'The Signature Heritage Duo',
    tier: 'Signature',
    tagline: 'Ancestral elegance with modern tailoring and refined silhouettes.',
    priceNGN: 390000,
    image: '/images/bride-grey-gold.jpg',
    brideOutfit: 'Bespoke handwoven Aso Oke Iro, Buba, Gele, and Ipele with delicate golden threadwork and satin trim lining.',
    groomOutfit: '3-Piece Tailored Agbada and matching Fila with geometric thread embroidery.',
    accessories: [
      'Matching Groom Pocket Square & Bride Handfan Fabric Accent',
      'Luxury Breathable Garment Storage Bags',
      'Swatches sent for makeup and shoes color-matching'
    ],
    leadTime: '3 - 4 weeks',
    popular: false
  },
  {
    id: 'contemporary-tier',
    name: 'The Contemporary Minimalist',
    tier: 'Heritage',
    tagline: 'Clean lines, featherlight weave tension, and timeless subtle hues.',
    priceNGN: 280000,
    image: '/images/bride-striped-gown.jpg',
    brideOutfit: 'Modern Aso Oke Gown or Iro/Buba set with subtle metallic thread shimmer and pleated modern Gele.',
    groomOutfit: 'Classic Agbada or Kaftan with Aso Oke yoke and matching embroidered Fila.',
    accessories: [
      'Complimentary Head-tie styling tutorial video from Jesutofunmi',
      'Fabric Care & Preservation Kit'
    ],
    leadTime: '2 - 3 weeks',
    popular: false
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    id: '1',
    name: 'Dr. & Mrs. Adebayo Ogunlesi',
    event: 'Traditional Engagement, Victoria Island, Lagos',
    quote: 'Jesutofunmi outdid herself! Our crimson Alaari Agbada and bridal Gele stopped the entire hall. The weave had such regal weight and didn’t crease once. Even our photographer said the golden threads reflected the strobe lighting like royalty.',
    avatar: '/images/groom-agbada-portrait.jpg',
    rating: 5,
    package: 'The Crown Monarch (Oba & Olori)'
  },
  {
    id: '2',
    name: 'Folashade & Michael Davies',
    event: 'Diaspora Wedding (London, UK)',
    quote: 'Ordering from the UK was seamless. Jesutofunmi sent videos from the loom every step of the way, and the DHL package arrived in London in under 5 days, perfectly steamed and folded. The quality put high-end London fashion houses to shame.',
    avatar: '/images/bride-grey-gold.jpg',
    rating: 5,
    package: 'Signature Heritage Duo'
  },
  {
    id: '3',
    name: 'Chief (Mrs.) Bimbo Alabi',
    event: 'Daughter’s 100-Guest Aso Ebi Coordinator (Ibadan)',
    quote: 'Coordinating 100 guests is usually a nightmare with uneven colors, but Threads of Heritage delivered 100 bundles with 100% consistent dye tones and exact yardage. All our guests were praising the softness and prestige of the cloth.',
    avatar: '/images/bride-striped-gown.jpg',
    rating: 5,
    package: 'Aso Ebi 100-Bundle Custom Order'
  }
];

export const WEAVING_PROCESS_STEPS = [
  {
    step: '01',
    title: 'Thread Selection & Color Blending',
    desc: 'Pure combed organic cotton and silk fibers are hand-selected, combed, and naturally dyed in small batches to achieve exact royal pantones.'
  },
  {
    step: '02',
    title: 'Loom Warping & Pattern Geometry',
    desc: 'Jesutofunmi measures hundreds of individual warp threads on traditional wooden pegs, mapping out intricate stripes, perforations (Eya), and metallic lurex spacings.'
  },
  {
    step: '03',
    title: 'Narrow-Loom Hand Weaving',
    desc: 'Using pedal and shuttle rhythmic handcraft, 4-inch strips are woven centimetre by centimetre with high warp-density, giving the cloth its iconic royal drape.'
  },
  {
    step: '04',
    title: 'Joining, Embroidery & Finishing',
    desc: 'Strips are invisibly hand-joined, steam-calendered, and embellished with gold bullion threadwork, Swarovski crystals, or bead fringes before luxury delivery.'
  }
];
