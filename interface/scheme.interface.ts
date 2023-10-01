export interface ProductScheme {
  id: number;
  images: {
    image: string;
    isDefault: boolean;
  }[];
  name: string;
  category: number;
  price: number;
  slug: string;
  description?: string;
}

export interface CategoryScheme {
  id: number;
  parentId: number;
  name: string;
  slug: string;
  image?: string;
  children: CategoryScheme[] | [];
}
