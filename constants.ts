import { Category, Restaurant } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Burger', icon: '🍔' },
  { id: '2', name: 'Pizza', icon: '🍕' },
  { id: '3', name: 'Sushi', icon: '🍣' },
  { id: '4', name: 'Asian', icon: '🍜' },
  { id: '5', name: 'Vegan', icon: '🥗' },
  { id: '6', name: 'Dessert', icon: '🍰' },
  { id: '7', name: 'Drinks', icon: '🥤' },
  { id: '8', name: 'Tacos', icon: '🌮' },
];

export const MOCK_RESTAURANTS: Restaurant[] = [
  {
    id: 'r1',
    name: 'Burger Kingpin',
    rating: 4.8,
    deliveryTime: '25-35 min',
    deliveryFee: 1.99,
    tags: ['Burger', 'American', 'Fast Food'],
    image: 'https://picsum.photos/seed/burgerkingpin/400/300',
    menu: [
      {
        id: 'm1',
        name: 'Double Truffle Burger',
        description: 'Two beef patties, truffle mayo, swiss cheese, caramelized onions.',
        price: 14.50,
        image: 'https://picsum.photos/seed/truffleburger/200/200',
        calories: 850,
        rating: 4.9
      },
      {
        id: 'm2',
        name: 'Classic Cheeseburger',
        description: 'The classic fix. Cheddar, lettuce, tomato, pickles.',
        price: 9.99,
        image: 'https://picsum.photos/seed/cheeseburger/200/200',
        calories: 600,
        rating: 4.5
      }
    ]
  },
  {
    id: 'r2',
    name: 'Sushi Zen',
    rating: 4.9,
    deliveryTime: '40-50 min',
    deliveryFee: 3.99,
    tags: ['Sushi', 'Japanese', 'Healthy'],
    image: 'https://picsum.photos/seed/sushizen/400/300',
    menu: [
      {
        id: 'm3',
        name: 'Dragon Roll',
        description: 'Eel, cucumber, topped with avocado and unagi sauce.',
        price: 16.00,
        image: 'https://picsum.photos/seed/dragonroll/200/200',
        calories: 450,
        rating: 4.8
      },
      {
        id: 'm4',
        name: 'Spicy Tuna Bowl',
        description: 'Fresh tuna, spicy mayo, edamame, rice base.',
        price: 18.50,
        image: 'https://picsum.photos/seed/tunabowl/200/200',
        calories: 550,
        rating: 4.7
      }
    ]
  },
  {
    id: 'r3',
    name: 'Green Earth Salad',
    rating: 4.6,
    deliveryTime: '15-25 min',
    deliveryFee: 0.99,
    tags: ['Vegan', 'Healthy', 'Salad'],
    image: 'https://picsum.photos/seed/greenearth/400/300',
    menu: [
      {
        id: 'm5',
        name: 'Kale Caesar',
        description: 'Kale, chickpeas, avocado, cashew caesar dressing.',
        price: 12.99,
        image: 'https://picsum.photos/seed/kalecaesar/200/200',
        calories: 350,
        rating: 4.6
      }
    ]
  },
   {
    id: 'r4',
    name: 'Luigi\'s Pizza',
    rating: 4.2,
    deliveryTime: '30-45 min',
    deliveryFee: 0.00,
    tags: ['Pizza', 'Italian', 'Comfort'],
    image: 'https://picsum.photos/seed/luigis/400/300',
    menu: [
      {
        id: 'm6',
        name: 'Margherita',
        description: 'San Marzano tomato sauce, fresh mozzarella, basil.',
        price: 11.00,
        image: 'https://picsum.photos/seed/margherita/200/200',
        calories: 700,
        rating: 4.5
      },
      {
        id: 'm7',
        name: 'Pepperoni Feast',
        description: 'Double pepperoni, mozzarella, spicy honey drizzle.',
        price: 14.00,
        image: 'https://picsum.photos/seed/pepperoni/200/200',
        calories: 900,
        rating: 4.8
      }
    ]
  }
];
