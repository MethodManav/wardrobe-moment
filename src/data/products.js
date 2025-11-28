// src/data/products.js

const products = [
  // MEN – SUITS / BLAZERS / FORMAL
  {
    id: "m1",
    name: "Classic Black Suit",
    category: "men",
    type: "suits",
    pricePerDay: 799,
    image:
      "https://images.pexels.com/photos/3758054/pexels-photo-3758054.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/3758054/pexels-photo-3758054.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3758053/pexels-photo-3758053.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3758049/pexels-photo-3758049.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/3758041/pexels-photo-3758041.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
    description:
      "Sharp, tailored black suit perfect for formal events, interviews, and receptions.",
    tags: ["formal", "office", "wedding"],
    rating: 4.8,
    reviewsCount: 32,
    colors: ["Black", "Charcoal"],
    sizes: ["S", "M", "L", "XL"],
  },

  {
    id: "m4",
    name: "Navy Two-Button Blazer",
    category: "men",
    type: "blazers",
    pricePerDay: 549,
    image:
      "https://images.pexels.com/photos/7671256/pexels-photo-7671256.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Structured navy blazer that pairs well with chinos or denim for smart-casual looks.",
    tags: ["semi-formal", "office"],
    rating: 4.5,
    reviewsCount: 21,
    colors: ["Navy"],
    sizes: ["M", "L", "XL"],
  },
  {
    id: "m5",
    name: "Ivory Wedding Sherwani",
    category: "men",
    type: "ethnic",
    pricePerDay: 1199,
    image:
      "https://images.pexels.com/photos/3758053/pexels-photo-3758053.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Heavy embroidered sherwani set for grooms and close family at weddings.",
    tags: ["wedding", "festive", "traditional"],
    rating: 4.9,
    reviewsCount: 18,
    colors: ["Ivory", "Gold"],
    sizes: ["M", "L", "XL"],
  },

  // MEN – SHIRTS / T-SHIRTS / BOTTOMS / CASUAL
  {
    id: "m2",
    name: "Casual Linen Shirt",
    category: "men",
    type: "shirts",
    pricePerDay: 299,
    image:
      "https://images.pexels.com/photos/769730/pexels-photo-769730.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Breathable linen shirt for day outings, brunches, and vacations.",
    tags: ["casual", "summer"],
    rating: 4.4,
    reviewsCount: 19,
    colors: ["White", "Sky Blue"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "m6",
    name: "Everyday Cotton T-shirt",
    category: "men",
    type: "t-shirts",
    pricePerDay: 199,
    image:
      "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Soft crew-neck tee that works with joggers, denim or shorts.",
    tags: ["casual", "basic"],
    rating: 4.2,
    reviewsCount: 11,
    colors: ["Black", "Olive", "Rust"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "m3",
    name: "Indigo Slim Jeans",
    category: "men",
    type: "trousers-jeans",
    pricePerDay: 349,
    image:
      "https://images.pexels.com/photos/769732/pexels-photo-769732.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Comfortable slim-fit jeans with a clean indigo wash.",
    tags: ["casual", "denim"],
    rating: 4.6,
    reviewsCount: 27,
    colors: ["Indigo"],
    sizes: ["30", "32", "34", "36"],
  },
  {
    id: "m7",
    name: "Beige Chino Trousers",
    category: "men",
    type: "trousers-jeans",
    pricePerDay: 329,
    image:
      "https://images.pexels.com/photos/3250369/pexels-photo-3250369.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Slim-tapered chinos that can be dressed up with a shirt or down with a tee.",
    tags: ["smart-casual", "office"],
    rating: 4.3,
    reviewsCount: 15,
    colors: ["Beige Tones"],
    sizes: ["30", "32", "34", "36"],
  },

  // MEN – TRADITIONAL / FESTIVE
  {
    id: "m8",
    name: "Mustard Festive Kurta Set",
    category: "men",
    type: "ethnic",
    pricePerDay: 599,
    image:
      "https://images.pexels.com/photos/6546939/pexels-photo-6546939.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Straight-cut kurta with churidar, ideal for mehendi, pujas and family get-togethers.",
    tags: ["festive", "traditional"],
    rating: 4.5,
    reviewsCount: 22,
    colors: ["Mustard", "Olive"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "m9",
    name: "Pastel Kurta with Nehru Jacket",
    category: "men",
    type: "ethnic",
    pricePerDay: 699,
    image:
      "https://images.pexels.com/photos/6546969/pexels-photo-6546969.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Pastel kurta-pyjama set paired with a printed Nehru jacket for weddings and festivals.",
    tags: ["sangeet", "reception", "traditional"],
    rating: 4.7,
    reviewsCount: 17,
    colors: ["Sky Blue", "Cream"],
    sizes: ["M", "L", "XL"],
  },

  // WOMEN – WESTERN / DRESSES / BLAZERS / CASUAL
  {
    id: "w1",
    name: "Floral Evening Gown",
    category: "women",
    type: "dresses",
    pricePerDay: 999,
    image:
      "https://images.pexels.com/photos/6311658/pexels-photo-6311658.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Elegant flowy gown with floral patterns for parties and receptions.",
    tags: ["party", "evening"],
    rating: 4.9,
    reviewsCount: 41,
    colors: ["Blush Pink", "Navy"],
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: "w2",
    name: "Chic Blazer Dress",
    category: "women",
    type: "blazers",
    pricePerDay: 899,
    image:
      "https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Modern blazer dress ideal for events, conferences, and dinners.",
    tags: ["formal", "modern"],
    rating: 4.7,
    reviewsCount: 23,
    colors: ["Black", "Olive"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "w3",
    name: "Soft Knit Sweater",
    category: "women",
    type: "casual",
    pricePerDay: 249,
    image:
      "https://images.pexels.com/photos/3738084/pexels-photo-3738084.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Cozy knit sweater perfect for cool evenings and coffee dates.",
    tags: ["casual", "cozy"],
    rating: 4.3,
    reviewsCount: 14,
    colors: ["Cream", "Rust"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "w7",
    name: "Black Co-ord Set",
    category: "women",
    type: "co-ords",
    pricePerDay: 549,
    image:
      "https://images.pexels.com/photos/7671165/pexels-photo-7671165.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Tailored co-ord set that works for both parties and evening dinners.",
    tags: ["party", "modern"],
    rating: 4.6,
    reviewsCount: 20,
    colors: ["Black"],
    sizes: ["XS", "S", "M", "L"],
  },

  // WOMEN – TRADITIONAL: SAREES / LEHENGAS / KURTA SETS
  {
    id: "w4",
    name: "Classic Red Silk Saree",
    category: "women",
    type: "sarees",
    pricePerDay: 799,
    image:
      "https://images.pexels.com/photos/6311579/pexels-photo-6311579.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Pure silk saree with zari border – ideal for weddings, festivals and receptions.",
    tags: ["traditional", "wedding"],
    rating: 4.8,
    reviewsCount: 35,
    colors: ["Red", "Gold"],
    sizes: ["Free Size"],
  },
  {
    id: "w5",
    name: "Pastel Embroidered Lehenga",
    category: "women",
    type: "lehengas",
    pricePerDay: 1299,
    image:
      "https://images.pexels.com/photos/6311577/pexels-photo-6311577.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Heavily embroidered lehenga set with dupatta for sangeet and reception nights.",
    tags: ["wedding", "sangeet", "reception"],
    rating: 4.9,
    reviewsCount: 29,
    colors: ["Blush Pink", "Beige Tones"],
    sizes: ["S", "M", "L"],
  },
  {
    id: "w6",
    name: "Cotton Kurta Set",
    category: "women",
    type: "kurta-sets",
    pricePerDay: 449,
    image:
      "https://images.pexels.com/photos/6311568/pexels-photo-6311568.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Printed straight kurta with matching pants and dupatta for everyday ethnic wear.",
    tags: ["festive", "daytime", "traditional"],
    rating: 4.4,
    reviewsCount: 16,
    colors: ["Sky Blue", "Navy"],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "w8",
    name: "Anarkali Suit with Dupatta",
    category: "women",
    type: "dresses",
    pricePerDay: 699,
    image:
      "https://images.pexels.com/photos/6311592/pexels-photo-6311592.jpeg?auto=compress&cs=tinysrgb&w=800",
    description:
      "Floor-length Anarkali with subtle gota work, perfect for family functions and festivals.",
    tags: ["festive", "traditional"],
    rating: 4.6,
    reviewsCount: 24,
    colors: ["Olive", "Gold"],
    sizes: ["S", "M", "L", "XL"],
  },
];

export default products;
