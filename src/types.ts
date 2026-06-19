export interface Brand {
  id: string;
  name: string;
  category: "Skincare" | "Cosmetics" | "Hair Care" | "Personal Care" | "All";
  origin: string; // e.g., "USA", "South Korea", "France"
  description: string;
  monogram: string; // e.g., "CV" for CeraVe
  highlight?: boolean;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  image: string; // Beautiful descriptive premium beauty image URL
  featuredBrand: string;
  tags: string[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // lucide icon identifier
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
