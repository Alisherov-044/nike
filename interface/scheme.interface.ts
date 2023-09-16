export interface ProductScheme {
  id: number;
  images: {
    image: string;
    isDefault: boolean;
  }[];
  name: string;
  category: number;
  price: number;
  description?: string;
}
