import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Robe d\'été fleurie',
    price: 6000,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=500&fit=crop',
    category: 'Robes',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Robe légère et élégante parfaite pour l\'été. Imprimé floral délicat sur tissu fluide.',
    inStock: true
  },
  {
    id: '2',
    name: 'Blouse en soie rose',
    price: 7000,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
    category: 'Hauts',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Blouse en soie naturelle avec finitions délicates. Coupe moderne et féminine.',
    inStock: true
  },
  {
    id: '3',
    name: 'Jean taille haute',
    price: 8999,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop',
    category: 'Pantalons',
    sizes: ['26', '28', '30', '32', '34'],
    description: 'Jean en denim de qualité supérieure avec coupe taille haute flatteuse.',
    inStock: true
  },
  {
    id: '4',
    name: 'Cardigan en laine',
    price: 9400,
    image: 'https://images.pexels.com/photos/7679478/pexels-photo-7679478.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Vestes',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Cardigan doux en laine mérinos. Parfait pour les mi-saisons.',
    inStock: true
  },
  {
    id: '5',
    name: 'Jupe plissée midi',
    price: 5500,
    image: 'https://images.pexels.com/photos/7679469/pexels-photo-7679469.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Jupes',
    sizes: ['XS', 'S', 'M', 'L'],
    description: 'Jupe midi élégante avec plis délicats. Matière fluide et confortable.',
    inStock: true
  },
  {
    id: '6',
    name: 'Veste blazer rose poudré',
    price: 12000,
    image: 'https://images.pexels.com/photos/6311394/pexels-photo-6311394.jpeg?auto=compress&cs=tinysrgb&w=500',
    category: 'Vestes',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Blazer structuré dans une teinte rose poudré sophistiquée. Coupe ajustée.',
    inStock: false
  }
];