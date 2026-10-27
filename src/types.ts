export type Currency = 'NGN' | 'USD' | 'GBP';

export type WeaveCategory = 'all' | 'bridal' | 'groom' | 'couples' | 'children' | 'raw-loom';

export type TraditionalWeaveType = 
  | 'alaari'   // Rich royal magenta/crimson weave
  | 'sanyan'   // Traditional khaki raw silk
  | 'etu'      // Deep indigo / dark geometric
  | 'lurex'    // Metallic shimmer & gold thread modern
  | 'beaded';  // Heavily embellished & pearl-studded

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: WeaveCategory;
  weaveType: TraditionalWeaveType;
  priceNGN: number;
  image: string;
  additionalImages?: string[];
  description: string;
  features: string[];
  piecesIncluded: string[];
  leadTimeWeeks: string;
  popular?: boolean;
  featured?: boolean;
  tags: string[];
}

export interface CustomLoomSelection {
  weaveType: TraditionalWeaveType;
  garmentType: 'bridal-full' | 'groom-agbada' | 'couple-twinning' | 'aso-ebi-set' | 'children-occasion';
  baseColor: string;
  secondaryColor: string;
  embellishment: 'pure-classic' | 'embroidered-neckline' | 'hand-beaded' | 'crystal-stone-royal';
  headwearIncluded: boolean;
  measurementsProvided: 'standard-size' | 'custom-tailoring' | 'fabric-only';
  notes: string;
  clientName: string;
  clientPhone: string;
}

export interface WeddingPackage {
  id: string;
  name: string;
  tier: 'Royalty' | 'Signature' | 'Heritage';
  tagline: string;
  priceNGN: number;
  image: string;
  brideOutfit: string;
  groomOutfit: string;
  accessories: string[];
  leadTime: string;
  popular?: boolean;
}

export interface OrderItem {
  id: string;
  title: string;
  category: string;
  priceNGN: number;
  image: string;
  details: string;
  quantity: number;
}
