const PRODUCTS = [
  {
    id: 100,
    name: 'Boneless Wings and Skins Sampler',
    price: 7.99,
    image: require('../images/bonelesswings.png'),
    description:
      'Boneless buffalo Wings (chose from garlic, bbq, or spicy) and made to order Potato Skins.',
  },
  {
    id: 101,
    name: 'Three Cheese Nachos',
    price: 7.99,
    image: require('../images/nachos.jpeg'),
    description:
      'A mountain of crisp tortilla chips smothered in Monterey Jack, mozzarella, and cheddar cheeses then topped with red onions, jalapenos, fresh cilantro, salsa, and sour cream.',
  },
  {
    id: 102,
    name: 'Spinach Artichoke Dip',
    price: 6.99,
    image: require('../images/artichoke.jpeg'),
    description:
      'Made with tender artichoke hearts and creamy Parmesan cheese. Served with unlimited crisp tortilla chips.',
  },
  {
    id: 103,
    name: 'Santa Fe Chicken Quesadilla',
    price: 7.99,
    image: require('../images/SantaFeChicken.jpeg'),
    description:
      'Seasoned chicken with grilled peppers and onions, feta, and Swiss cheese. Grilled then topped with our Chile sauce.',
  },
  {
    id: 104,
    name: 'Three Eggs Any Style',
    price: 6.59,
    image: require('../images/threeEggs.jpeg'),
    description:
      'With hash browns, ham, 2 bacon and 2 sausage links or 1 patty.',
  },
  {
    id: 105,
    name: 'Plain Omelette',
    price: 4.99,
    image: require('../images/omelette.jpeg'),
    description:
      'Add any of the following items .99 each: Bacon, Sausage, Ham, Mushroom, Broccoli. Add Swiss or American cheese, .60 ',
  },
  {
    id: 106,
    name: 'Farmers Omelette',
    price: 7.29,
    image: require('../images/farmersOmelette.jpeg'),
    description:
      'Made with bacon, ham, onions, cheese and the hashbrowns inside.',
  },
  {
    id: 107,
    name: 'Pastrami Sandwich',
    price: 8.99,
    image: require('../images/pastrami.png'),
    description:
      'Sliced pastrami with Swiss cheese, dijon mustard, and cole slaw.',
  },
  {
    id: 108,
    name: 'Super Club Sandwich',
    price: 7.39,
    image: require('../images/superclub.png'),
    description:
      'Triple decker on white or wheat toast with ham, bacon, turkey, lettuce, tomato, and American cheese with mayo.',
  },
  {
    id: 109,
    name: 'Grilled Reuben Sandwich',
    price: 6.99,
    image: require('../images/reubensandwich.jpeg'),
    description:
      'Corned beef, sauerkraut, Swiss cheese and Thousand Island dressing grilled on rye.',
  },
  {
    id: 110,
    name: 'Special Coney Hot Dog',
    price: 2.99,
    image: require('../images/coneyhotdog.jpeg'),
    description:
      'Spiced ground beef covering a coney dog topped with chili, mustard and onions in a steamed bun.',
  },
  {
    id: 111,
    name: 'Coney Combo',
    price: 7.09,
    image: require('../images/coneycombo.png'),
    description: 'Our famous coney island, fries and a mini Greek salad.',
  },
  {
    id: 112,
    name: 'Pastitsio',
    price: 7.69,
    image: require('../images/pastitsio.png'),
    description:
      'Made with layers of macaroni, ground beef, eggs, milk and seasonings. Served with rice.',
  },
  {
    id: 113,
    name: 'Cheese Quesadilla',
    price: 5.39,
    image: require('../images/cheesequesadilla.jpeg'),
    description:
      'Warm tortilla filled with green peppers, onions and Cheddar cheese. Served with guacamole and salsa.',
  },
];
export function getProducts() {
  return PRODUCTS;
}
export function getProduct(id) {
  return PRODUCTS.find(product => product.id === id);
}
