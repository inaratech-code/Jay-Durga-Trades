export const STOCK_IMAGES = {
  skincare: "/images/stock/skincare.jpg",
  cosmeticsMakeup: "/images/stock/cosmetics-makeup.jpg",
  cosmeticsLuxe: "/images/stock/cosmetics-luxe.jpg",
  haircare: "/images/stock/haircare.jpg",
  aboutTrade: "/images/stock/about-trade.jpg",
} as const;

export const CATEGORY_STOCK_IMAGES: Record<string, string> = {
  Skincare: STOCK_IMAGES.skincare,
  Cosmetics: STOCK_IMAGES.cosmeticsMakeup,
  "Personal Care": STOCK_IMAGES.haircare,
};
