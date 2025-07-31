export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  sizes: string[];
  description: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface OrderData {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  items: CartItem[];
  total: number;
}