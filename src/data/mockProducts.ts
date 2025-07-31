import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Robe d\'été fleurie',
    price: 6000,
    image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Robes',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Robe légère et élégante parfaite pour l\'été. Imprimé floral délicat sur tissu fluide.',
    inStock: true
  },
  {
    id: '2',
    name: 'Blouse en soie rose',
    price: 7000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
    category: 'Hauts',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Blouse en soie naturelle avec finitions délicates. Coupe moderne et féminine.',
    inStock: true
  },
  {
    id: '3',
    name: 'Jean taille haute',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=500&h=500&fit=crop',
    category: 'Pantalons',
    sizes: ['26', '28', '30', '32', '34'],
    description: 'Jean en denim de qualité supérieure avec coupe taille haute flatteuse.',
    inStock: true
  },
  {
    id: '4',
    name: 'Cardigan en laine',
    price: 9400,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&h=500&fit=crop',
    category: 'Vestes',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Cardigan doux en laine mérinos. Parfait pour les mi-saisons.',
    inStock: true
  },
  {
    id: '5',
    name: 'Jupe plissée midi',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
    category: 'Jupes',
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Jupe midi élégante avec plis délicats. Matière fluide et confortable.',
    inStock: true
  },
  {
    id: '6',
    name: 'Veste blazer rose poudré',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop',
    category: 'Vestes',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Blazer structuré dans une teinte rose poudré sophistiquée. Coupe ajustée.',
    inStock: false
  }
];