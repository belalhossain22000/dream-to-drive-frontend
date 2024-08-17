import { StaticImageData } from "next/image";

export interface ProductDataTypes {
  id: string;
  productName: string;
  singleImage: string; // Assuming it's a URL or path to the image
  keyFacts: string;
  equepmentAndFeature: string; // Ensure spelling correction: should be "equipmentAndFeature"
  condition: string;
  serviceHistory: string;
  summary: string;
  youtubeVideo: string;
  galleryImage: string[]; // Array of image URLs or paths
  exteriorImage: string[]; // Array of image URLs or paths
  interiorImage: string[]; // Array of image URLs or paths
  othersImage: string[]; // Array of image URLs or paths
  auctionStartDate: Date;
  auctionEndDate: Date;
  brandId: string;
  brand: Brand; // Assuming `Brand` is another interface representing the brand
  speed: number;
  price: number;
  gear: string;
  drivingSide: DrivingSide; // Enum representing left-hand or right-hand drive
  color: string;
  interior: string;
  engine: string;
  vin: string;
  country: string;
  isDeleted: boolean;
  featured: boolean;
  status: ProductStatus; // Enum representing product status (e.g., live, sold, etc.)
  wishlist: Wishlist[]; // Assuming `Wishlist` is another interface representing wishlist items
  reviews: Review[]; // Assuming `Review` is another interface representing product reviews
  biddings: Bidding[]; // Assuming `Bidding` is another interface representing bidding information
  createdAt: Date;
  updatedAt: Date;
}

// Example Enums and Interfaces used in TProducts

export enum DrivingSide {
  LHD = "LHD", // Left-hand drive
  RHD = "RHD", // Right-hand drive
}

export enum ProductStatus {
  LIVE = "live",
  SOLD = "sold",
  PENDING = "pending",
  INACTIVE = "inactive",
  COMMINGSOON="commingSoon"
}

export interface Brand {
  id: string;
  name: string;
  logo: string; // URL or path to the logo
}

export interface Wishlist {
  id: string;
  userId: string;
  productId: string;
  addedAt: Date;
}

export interface Review {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface Bidding {
  id: string;
  userId: string;
  productId: string;
  bidAmount: number;
  bidTime: Date;
}

export type categroyDataTypes = {
  id: number;
  name: string;
  image: StaticImageData;
  icon: StaticImageData;
};
