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
      'Production timing and progress updates discussed during consultation'
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
    id: 'oguntuase',
    name: 'Mr & Mrs Oguntuase',
    event: 'Traditional Wedding · Dark Grey Aso Oke',
    quote: 'Heritage Thread delivered our desired dark grey colour for our traditional wedding. It was a 10/10 experience: neatly knitted, well ironed, and beautifully packaged. Thank you for making our day bright and royal.',
    avatar: '/images/bride-grey-gold.jpg',
    rating: 5,
    package: 'Custom Dark Grey Wedding Commission',
    fabric: 'Dark grey Aso Oke'
  },
  {
    id: 'ola',
    name: 'Mr & Mrs Òlà',
    event: 'Traditional Wedding · Wine Aso Oke',
    quote: 'Thanks so much for the Aso Oke. It is really nice and elegant. My wife loves it, and we are so glad we chose you.',
    avatar: '/images/groom-agbada-portrait.jpg',
    rating: 5,
    package: 'Custom Wine Aso Oke Wedding Commission',
    fabric: 'Wine Aso Oke'
  },
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
    desc: 'Strips are joined, pressed, and finished with the selected embroidery, stone, metallic or bead details before delivery.'
  }
];
