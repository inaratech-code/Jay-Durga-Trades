import { Brand, Category, WhyChooseUsItem } from "./types";
import { STOCK_IMAGES } from "./constants/images";

export const BRANDS: Brand[] = [
  {
    id: "beauty-of-joseon",
    name: "Beauty of Joseon",
    category: "Skincare",
    origin: "South Korea",
    description: "Modern skincare formulated with Hanbang (traditional Korean herbal medicine) ingredients for a radiant, balanced complexion.",
    monogram: "BJ",
    highlight: true
  },
  {
    id: "cosrx",
    name: "COSRX",
    category: "Skincare",
    origin: "South Korea",
    description: "Highly effective, ingredient-focused products targeting specific skincare concerns with advanced dermatological backing.",
    monogram: "CX",
    highlight: true
  },
  {
    id: "cerave",
    name: "CeraVe",
    category: "Skincare",
    origin: "USA",
    description: "Dermatologist-developed skincare enriched with essential ceramides to restore and strengthen the natural skin barrier.",
    monogram: "CV",
    highlight: true
  },
  {
    id: "cetaphil",
    name: "Cetaphil",
    category: "Skincare",
    origin: "USA",
    description: "Gentle, soap-free cleansers and continuous hydration moisturizers formulated specifically for sensitive skin types.",
    monogram: "CP"
  },
  {
    id: "dr-althea",
    name: "Dr. Althea",
    category: "Skincare",
    origin: "South Korea",
    description: "Premium clean aesthetic skincare combining scientific research with gentle natural ingredients to deliver visual brilliance.",
    monogram: "DA",
    highlight: true
  },
  {
    id: "skin1004",
    name: "SKIN1004",
    category: "Skincare",
    origin: "South Korea",
    description: "Pure, untouched raw Centella Asiatica harvested from Madagascar to soothe, hydrate, and nurture troubled skin barriers.",
    monogram: "SK"
  },
  {
    id: "im-from",
    name: "I'm From",
    category: "Skincare",
    origin: "South Korea",
    description: "Ingredient transparency featuring premium local agricultural extracts—representing nature and tradition in its purest form.",
    monogram: "IF"
  },
  {
    id: "st-ives",
    name: "St. Ives",
    category: "Skincare",
    origin: "USA",
    description: "Iconic body washes and exfoliators made with 100% natural moisturizers and extracts to reveal fresh, glowing skin.",
    monogram: "SI"
  },
  {
    id: "dove",
    name: "Dove",
    category: "Personal Care",
    origin: "USA",
    description: "Nourishing personal care essentials crafted with signature moisturizing cream to deeply comfort and care for skin and hair.",
    monogram: "DV"
  },
  {
    id: "johnsons",
    name: "Johnson's",
    category: "Personal Care",
    origin: "USA",
    description: "Gentle, clinically-proven formulas trusted by generations for sensitive family and baby skincare needs.",
    monogram: "JB"
  },
  {
    id: "gillette",
    name: "Gillette",
    category: "Personal Care",
    origin: "USA",
    description: "Precision-engineered grooming technology and premium shaving essentials for unparalleled skin comfort.",
    monogram: "GL"
  },
  {
    id: "enchanteur",
    name: "Enchanteur",
    category: "Personal Care",
    origin: "France",
    description: "Exquisite French-perfumed body care, talcum powders, and lotions designed for ultimate romance and elegance.",
    monogram: "EC"
  },
  {
    id: "maybelline",
    name: "Maybelline New York",
    category: "Cosmetics",
    origin: "USA",
    description: "High-performance dynamic cosmetic formulas capturing the fearless vibe, energy, and trends of New York City.",
    monogram: "MN",
    highlight: true
  },
  {
    id: "loreal",
    name: "L'Oréal Paris",
    category: "Cosmetics",
    origin: "France",
    description: "World-leading Parisian beauty innovation delivering luxury formulations, colors, and premium hair treatments.",
    monogram: "LO",
    highlight: true
  },
  {
    id: "mac",
    name: "MAC Cosmetics",
    category: "Cosmetics",
    origin: "Canada",
    description: "Professional-grade color cosmetics and artistry standards trusted worldwide on fashion runways and streets alike.",
    monogram: "MC",
    highlight: true
  },
  {
    id: "rimmel",
    name: "Rimmel London",
    category: "Cosmetics",
    origin: "UK",
    description: "Expressive urban makeup, rich eyeliners, and long-lasting lipsticks celebrating the electric London street spirit.",
    monogram: "RL"
  },
  {
    id: "tirtir",
    name: "TIRTIR",
    category: "Cosmetics",
    origin: "South Korea",
    description: "Celebrated cushion foundations and primers designed to deliver the ultimate glass skin glow with flawless wear.",
    monogram: "TT"
  },
  {
    id: "miss-claire",
    name: "Miss Claire",
    category: "Cosmetics",
    origin: "Europe",
    description: "Sophisticated international makeup selection featuring pigment-rich cream lipsticks and eyeshadow palettes.",
    monogram: "MC"
  },
  {
    id: "swiss-beauty",
    name: "Swiss Beauty",
    category: "Cosmetics",
    origin: "Switzerland",
    description: "Glamorous and high-performance products crafted with international quality standards for a perfect luxury look.",
    monogram: "SB"
  }
];

export const CATEGORIES: Category[] = [
  {
    id: "skincare",
    title: "Skincare",
    description: "Discover curated global skincare brands emphasizing barrier repair, clinical treatment, and traditional Asian herbal formulations.",
    image: STOCK_IMAGES.skincare,
    featuredBrand: "Beauty of Joseon, COSRX, CeraVe",
    tags: ["Moisturizers", "Sera & Ampoules", "Sun Protection", "Cleansers"]
  },
  {
    id: "cosmetics",
    title: "Cosmetics",
    description: "Incorporate confidence with premium makeup collections containing rich pigments, advanced formulas, and flawless long-wear finishes.",
    image: STOCK_IMAGES.cosmeticsMakeup,
    featuredBrand: "MAC, L'Oréal Paris, Maybelline",
    tags: ["Liquid Foundations", "Artistry Lips", "Eye Definition", "Blushes & Glow"]
  },
  {
    id: "haircare",
    title: "Hair Care & Personal Essentials",
    description: "Elevate your salon rituals with rich nutritive shampoos, treatment serums, and world-class personal care toiletries.",
    image: STOCK_IMAGES.haircare,
    featuredBrand: "L'Oréal, Dove, Enchanteur",
    tags: ["Shampoo & Mask", "Hair Oils", "Fragrant Body Care", "Men's Shaving"]
  }
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "authentic",
    title: "100% Authentic Products",
    description: "Every item in our portfolio is sourced directly from manufacturers or official international brand channels, with full batch tracking.",
    iconName: "ShieldCheck"
  },
  {
    id: "partnerships",
    title: "Trusted Retailer Partnerships",
    description: "We work hand-in-hand with supermarkets, beauty centers, and pharmacies across Nepal, establishing unshakeable local distribution networks.",
    iconName: "Handshake"
  },
  {
    id: "portfolio",
    title: "Diverse Global Portfolio",
    description: "From coveted South Korean Hanbang clean beauty to leading clinical American skincare, we span premium demographics beautifully.",
    iconName: "Sparkles"
  },
  {
    id: "quality",
    title: "Rigorous Quality Logistics",
    description: "All products are maintained and stored in our modern climate-controlled Kathmandu warehouse to ensure absolute active-ingredient power.",
    iconName: "Award"
  }
];
