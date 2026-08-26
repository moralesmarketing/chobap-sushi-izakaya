export const business = {
  name: "Chobap Sushi & Izakaya",
  tagline: "Sushi & Izakaya",
  city: "Chino Hills",
  address: {
    line1: "2593 Chino Hills Pkwy, Ste E",
    line2: "Chino Hills, CA 91709",
  },
  phone: "(909) 393-1073",
  phoneHref: "tel:+19093931073",
  email: null as string | null,
  orderUrl: "https://chobapsushiizakaya.menu11.com/chinohills/order",
  instagramUrl: "https://www.instagram.com/masonsando/",
  yelpUrl: "https://www.yelp.com/biz/chobap-sushi-and-izakaya-chino-hills",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Chobap+Sushi+%26+Izakaya+2593+Chino+Hills+Pkwy+Ste+E+Chino+Hills+CA+91709",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Chobap+Sushi+%26+Izakaya,+2593+Chino+Hills+Pkwy+Ste+E,+Chino+Hills,+CA+91709&output=embed",
  hours: [
    { day: "Monday", time: "11:30 AM – 3:00 PM, 5:00 PM – 10:00 PM" },
    { day: "Tuesday", time: "11:30 AM – 3:00 PM, 5:00 PM – 10:00 PM" },
    { day: "Wednesday", time: "11:30 AM – 3:00 PM, 5:00 PM – 10:00 PM" },
    { day: "Thursday", time: "11:30 AM – 3:00 PM, 5:00 PM – 10:00 PM" },
    { day: "Friday", time: "11:30 AM – 3:00 PM, 5:00 PM – 10:00 PM" },
    { day: "Saturday", time: "11:30 AM – 3:00 PM, 5:00 PM – 10:00 PM" },
    { day: "Sunday", time: "12:00 PM – 9:00 PM" },
  ],
  rating: {
    yelp: { score: 4.8, count: 207 },
  },
};

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "combos",
    title: "Sushi / Sashimi Combo",
    items: [
      { name: "Sushi Combo 12 Pieces", price: "$42.00" },
      { name: "Sushi Combo 24 Pieces", price: "$67.00" },
      { name: "Sashimi Combo 12 Pieces", price: "$52.00" },
      { name: "Sashimi Combo 24 Pieces", price: "$86.00" },
    ],
  },
  {
    id: "salad",
    title: "Salad",
    items: [
      { name: "Poke Salad", price: "$21.00" },
      { name: "Sashimi Salad", price: "$21.00" },
      { name: "Salmon Skin Salad", price: "$19.00" },
      { name: "Seaweed Salad", price: "$9.00" },
      { name: "Cucumber Salad", price: "$9.00" },
    ],
  },
  {
    id: "noodles",
    title: "Udon / Ramen / Yakisoba",
    items: [
      { name: "Regular Udon", price: "$14.00" },
      { name: "Beef Udon", price: "$15.00" },
      { name: "Grilled Chicken Udon", price: "$15.00" },
      { name: "Tempura Udon", price: "$18.00" },
      { name: "Regular Ramen", price: "$13.00" },
      { name: "Miso (Pork Base) Ramen", price: "$16.00" },
      { name: "Donkatsu Ramen", price: "$16.00" },
      { name: "Seafood Ramen", price: "$20.00" },
      { name: "Spicy Regular Ramen", price: "$14.00" },
      { name: "Spicy Miso (Pork Base) Ramen", price: "$17.00" },
      { name: "Spicy Donkatsu Ramen", price: "$17.00" },
      { name: "Spicy Seafood Ramen", price: "$18.00" },
      { name: "Beef Yakisoba", price: "$17.00" },
      { name: "Chicken Yakisoba", price: "$17.00" },
      { name: "Seafood Yakisoba", price: "$20.00" },
      { name: "Vegetable Yakisoba", price: "$15.00" },
    ],
  },
  {
    id: "katsu-teriyaki",
    title: "Katsu / Teriyaki Plate",
    items: [
      { name: "Pork Katsu", price: "$19.00" },
      { name: "Chicken Katsu", price: "$18.00" },
      { name: "Beef Teriyaki", price: "$17.00" },
      { name: "Chicken Teriyaki", price: "$17.00" },
      { name: "Salmon Teriyaki", price: "$17.00" },
    ],
  },
  {
    id: "bento",
    title: "Bento Special",
    note: "Included: Salad, Rice, Miso Soup",
    items: [
      { name: "2 Item Combo", price: "$22.00" },
      { name: "3 Item Combo", price: "$25.00" },
    ],
  },
  {
    id: "premium-rolls",
    title: "Premium Rolls",
    items: [
      { name: "Rippin Ribeye Roll", price: "$22.00" },
      { name: "Volcano Roll", price: "$21.00" },
      { name: "Beef Teriyaki Roll", price: "$21.00" },
      { name: "Tonado Roll", price: "$22.00" },
      { name: "Fireball Roll", price: "$22.00" },
    ],
  },
  {
    id: "premium-sushi",
    title: "Premium Sushi",
    items: [
      { name: "Bluefin Tuna (Hon Maguro) Sushi", price: "$15.00" },
      { name: "Toro (Bluefin Tuna Belly) Sushi", price: "$19.00" },
      { name: "Halibut (Hirame) Sushi", price: "$12.00" },
      { name: "Madai (Japanese Red Snapper) Sushi", price: "$12.00" },
      { name: "Branzino (European Sea Bass) Sushi", price: "$9.50" },
      { name: "Salmon Roe (Ikura) Sushi", price: "$14.00" },
      { name: "Sea Urchin (Uni) Sushi", price: "$16.00" },
      { name: "Sweet Shrimp (Ama Ebi) Sushi", price: "$22.00" },
      { name: "Seared Giant Scallop (Hotategai) Sushi", price: "$11.00" },
      { name: "Fresh Wasabi", price: "$4.00" },
    ],
  },
  {
    id: "premium-sashimi",
    title: "Premium Sashimi",
    items: [
      { name: "Bluefin Tuna (Hon Maguro) Sashimi", price: "$28.00" },
      { name: "Toro (Bluefin Tuna Belly) Sashimi", price: "$43.00" },
      { name: "Halibut (Hirame) Sashimi", price: "$25.00" },
      { name: "Madai (Japanese Sea Bream) Sashimi", price: "$28.00" },
      { name: "Branzino (European Sea Bass) Sashimi", price: "$22.00" },
      { name: "Salmon Roe (Ikura) Sashimi", price: "$25.00" },
      { name: "Sea Urchin (Uni) Sashimi", price: "$43.00" },
      { name: "Sweet Shrimp (Ama Ebi) Sashimi", price: "$43.00" },
      { name: "Seared Giant Scallop (Hotategai) Sashimi", price: "$28.00" },
      { name: "Black Snapper (Kurodai)", price: "$28.00" },
      { name: "Fresh Wasabi", price: "$4.00" },
    ],
  },
  {
    id: "sushi",
    title: "Sushi",
    items: [
      { name: "Tuna (Maguro) Sushi", price: "$8.00" },
      { name: "Salmon (Sake) Sushi", price: "$7.50" },
      { name: "Yellowtail (Hamachi) Sushi", price: "$10.00" },
      { name: "Albacore (Shiro Maguro) Sushi", price: "$7.00" },
      { name: "Escolar (Aburasokomutsu) Sushi", price: "$8.00" },
      { name: "Mackerel (Shime Saba) Sushi", price: "$6.50" },
      { name: "Squid (Ika) Sushi", price: "$7.50" },
      { name: "Egg (Tamago) Sushi", price: "$6.50" },
      { name: "Surf Clam (Hokkigai) Sushi", price: "$6.00" },
      { name: "Octopus (Tako) Sushi", price: "$7.50" },
      { name: "Shrimp (Ebi) Sushi", price: "$8.00" },
      { name: "Scallop (Kobashira) Sushi", price: "$6.00" },
      { name: "Smelt Roe (Masago) Sushi", price: "$7.50" },
      { name: "Freshwater Eel (Unagi) Sushi", price: "$9.00" },
      { name: "Salmon Belly Sushi", price: "$9.00" },
      { name: "Yellowtail Belly Sushi", price: "$12.00" },
      { name: "Fresh Wasabi", price: "$4.00" },
    ],
  },
  {
    id: "sashimi",
    title: "Sashimi",
    items: [
      { name: "Tuna (Maguro) Sashimi", price: "$20.00" },
      { name: "Salmon (Sake) Sashimi", price: "$19.00" },
      { name: "Yellowtail (Hamachi) Sashimi", price: "$23.00" },
      { name: "Albacore (Shiro Maguro) Sashimi", price: "$19.00" },
      { name: "Escolar (Aburasokomutsu) Sashimi", price: "$18.00" },
      { name: "Mackerel (Shime Saba) Sashimi", price: "$15.00" },
      { name: "Squid (Ika) Sashimi", price: "$16.00" },
      { name: "Egg (Tamago) Sashimi", price: "$18.00" },
      { name: "Surf Clam (Hokkigai) Sashimi", price: "$16.00" },
      { name: "Octopus (Tako) Sashimi", price: "$19.00" },
      { name: "Shrimp (Ebi) Sashimi", price: "$15.00" },
      { name: "Scallop (Kobashira) Sashimi", price: "$20.00" },
      { name: "Smelt Roe (Masago) Sashimi", price: "$19.00" },
      { name: "Freshwater Eel (Unagi) Sashimi", price: "$22.00" },
      { name: "Salmon Belly Sashimi", price: "$22.00" },
      { name: "Yellowtail Belly Sashimi", price: "$25.00" },
      { name: "Fresh Wasabi", price: "$4.00" },
    ],
  },
  {
    id: "chef-special",
    title: "Chef Special",
    items: [
      { name: "Poke Inari (1 Pc)", price: "$6.00" },
      { name: "Beef Teriyaki Inari (1 Pc)", price: "$6.00" },
      { name: "3 Inari (Poke or Beef)", price: "$15.00" },
      { name: "Salmon Carpaccio", price: "$16.00" },
      { name: "Yellowtail Carpaccio", price: "$20.00" },
      { name: "Tuna Carpaccio", price: "$16.00" },
      { name: "Albacore Carpaccio", price: "$16.00" },
      { name: "Truffle Salmon (8 Pcs)", price: "$30.00" },
      { name: "Truffle Halibut (8 Pcs)", price: "$31.00" },
      { name: "Chirashi Bowl", price: "$38.00", description: "12 pcs sashimi, seaweed salad, spicy tuna, rice" },
      { name: "Unagi Bowl", price: "$28.00" },
      { name: "Korean Chirashi Bowl", price: "$23.00" },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      { name: "Edamame", price: "$6.00" },
      { name: "Garlic Edamame", price: "$7.00" },
      { name: "Egg Roll (3 Pcs)", price: "$7.00" },
      { name: "Gyoza (6 Pcs)", price: "$7.00" },
      { name: "Shrimp Tempura", price: "$10.00" },
      { name: "Vegetable Tempura", price: "$7.00" },
      { name: "Mixed Tempura", price: "$8.00" },
      { name: "Agedashi Tofu", price: "$9.00" },
      { name: "Chobap Fries", price: "$15.00" },
      { name: "Baked Mussels (5 Pcs)", price: "$9.00" },
      { name: "Chicken Wing (5 Pcs)", price: "$12.00" },
      { name: "Calamari", price: "$12.00" },
      { name: "Shishito Peppers", price: "$10.00" },
      { name: "Heart Attack (4 Pcs)", price: "$9.00" },
      { name: "Yellowtail Collar", price: "$19.00" },
      { name: "Salmon Collar", price: "$15.00" },
      { name: "Crispy Rice Spicy Tuna (4 Pcs)", price: "$16.00" },
      { name: "Popcorn Chicken", price: "$11.00" },
    ],
  },
  {
    id: "side",
    title: "Side",
    items: [
      { name: "Rice", price: "$4.00" },
      { name: "Salad", price: "$4.00" },
      { name: "Miso Soup", price: "$4.00" },
    ],
  },
  {
    id: "basic-rolls",
    title: "Basic Roll / Handroll",
    items: [
      { name: "California Roll", price: "$7.00" },
      { name: "Spicy Tuna Roll", price: "$8.00" },
      { name: "Crunch Roll", price: "$9.00" },
      { name: "Salmon Roll", price: "$8.00" },
      { name: "Yellowtail Roll", price: "$11.00" },
      { name: "Tuna Roll", price: "$8.00" },
      { name: "Avocado Roll", price: "$6.00" },
      { name: "Cucumber Roll", price: "$6.00" },
      { name: "Vegetable Roll", price: "$7.00" },
      { name: "Salmon Skin Roll", price: "$8.00" },
      { name: "Freshwater Eel Roll", price: "$10.00" },
    ],
  },
  {
    id: "baked-rolls",
    title: "Baked Rolls",
    items: [
      { name: "Dynamite Roll", price: "$17.00", description: "Cali roll, onion, carrot, mussel, scallop, shrimp on top" },
      { name: "Kickin Roll", price: "$15.00", description: "Cali roll, baked crawfish on top" },
      { name: "Dragon Roll", price: "$16.00", description: "Crunch roll, baked unagi, avocado on top" },
      { name: "Super Dragon Roll", price: "$17.00", description: "Spicy tuna, shrimp tempura, unagi, avocado on top" },
      { name: "Salmon On Fire Roll", price: "$18.00", description: "Cali roll, baked salmon on top" },
      { name: "Scallopin Roll", price: "$17.00", description: "Cali roll, baked scallop on top" },
      { name: "Eel Special Roll", price: "$18.00", description: "Crab meat, spicy tuna, unagi on top" },
      { name: "Pink Lady Roll", price: "$18.00", description: "Spicy tuna, shrimp tempura, cream cheese, salmon on top" },
    ],
  },
  {
    id: "special-rolls",
    title: "Special Rolls",
    items: [
      { name: "Any 2 Roll", price: "$30.00" },
      { name: "Chobap Special", price: "$23.00", description: "1 roll & 4 sushi or sashimi" },
      { name: "Alaska Roll", price: "$17.00", description: "California roll, cream cheese, salmon, avocado on top" },
      { name: "Orange Roll", price: "$15.00", description: "California roll, salmon on top" },
      { name: "Hawaiian Roll", price: "$16.00", description: "California roll, tuna, avocado on top" },
      { name: "Rainbow Roll", price: "$17.00", description: "Cali roll, tuna, salmon, albacore, ebi, escolar on top" },
      { name: "Caliente Roll", price: "$18.00", description: "Spicy crab, cilantro, avocado, yellowtail, jalapeño on top" },
      { name: "Honeymoon Roll", price: "$17.00", description: "Cali roll, poke on top" },
      { name: "Aloha Roll", price: "$18.00", description: "Spicy tuna roll, albacore, jalapeño, purple onion on top" },
      { name: "Caterpillar Roll", price: "$18.00", description: "Cali roll, unagi, avocado on top" },
      { name: "Red Dragon Roll", price: "$18.00", description: "Spicy tuna, shrimp tempura, tuna, avocado on top" },
      { name: "Philadelphia Roll", price: "$16.00", description: "Cali roll with cream cheese, salmon on top" },
      { name: "Ono Ono Roll", price: "$17.00", description: "Spicy tuna roll, escolar, onion on top" },
      { name: "Oishi Roll", price: "$16.00", description: "Spicy tuna roll, salmon, escolar on top" },
      { name: "Superman Roll", price: "$17.00", description: "Crunch roll, cream cheese, salmon, escolar, sea salt" },
      { name: "Super Albacore Roll", price: "$17.00", description: "Spicy albacore roll, albacore, jalapeño, onion" },
      { name: "Chino Hills Roll", price: "$19.00", description: "Crunch roll, salmon, yellowtail, truffle oil, onion" },
      { name: "Lemon Fresh Roll", price: "$18.00", description: "Cali roll, spicy tuna, salmon, lemon on top" },
      { name: "Rock N Roll", price: "$18.00", description: "Cali roll, spicy tuna, tuna, salmon, deep fried garlic on top" },
      { name: "Mexican Roll", price: "$15.00", description: "Spicy crab meat, avocado, jalapeño on top" },
      { name: "Seared Salmon Roll", price: "$16.00", description: "Cali roll, seared salmon on top" },
      { name: "Blooming Roll", price: "$17.00", description: "Spicy tuna roll, avocado, albacore, deep fried onion" },
      { name: "Butterfly Roll", price: "$18.00", description: "Cali roll, tuna, garlic butter on top" },
      { name: "Geisha Roll", price: "$18.00", description: "Spicy tuna, crab meat, shrimp tempura, ebi, salmon on top" },
      { name: "Tropical Roll", price: "$18.00", description: "Mango, avocado, crab meat, salmon on top" },
      { name: "Tiger Roll", price: "$17.00", description: "Crunch roll, ebi, avocado on top" },
    ],
  },
  {
    id: "tempura-rolls",
    title: "Tempura Rolls",
    items: [
      { name: "Golden California Roll", price: "$17.00", description: "Deep fried Cali roll" },
      { name: "Golden Spicy Tuna Roll", price: "$15.00", description: "Deep fried spicy tuna roll" },
      { name: "Golden Philadelphia Roll", price: "$16.00", description: "Deep fried Philly roll" },
      { name: "Crunchy Albacore Roll", price: "$17.00", description: "Cali roll, spicy tuna, deep fried albacore on top" },
      { name: "Hot Night Roll", price: "$18.00", description: "Crunch roll, spicy tuna, deep fried unagi on top" },
      { name: "Popcorn Lobster Roll", price: "$17.00", description: "Cali roll, fried lobster on top" },
      { name: "Popcorn Scallop Roll", price: "$18.00", description: "Cali roll, fried scallop on top" },
      { name: "Giant Spider Roll", price: "$18.00", description: "Gobo, crab meat, avocado, fried soft shell crab" },
      { name: "Calamari Roll", price: "$18.00", description: "Gobo, crab meat, avocado, fried calamari" },
    ],
  },
  {
    id: "no-rice-rolls",
    title: "No Rice Roll",
    items: [
      { name: "Green Monster Roll (5 Pcs)", price: "$18.00", description: "Tuna, salmon, escolar, albacore, asparagus, avocado, cucumber wrap" },
      { name: "White Lotus Roll (8 Pcs)", price: "$16.00", description: "Crab meat, spicy tuna, cream cheese, shrimp tempura, soy paper" },
      { name: "Cherry Blossom Roll (4 Pcs)", price: "$16.00", description: "Spicy tuna, sprout, avocado, salmon wrap" },
      { name: "Burrito Roll (2 Pcs)", price: "$11.00", description: "Crab meat, spicy tuna, cucumber, avocado, soy paper" },
    ],
  },
];

export type Review = {
  quote: string;
  name: string;
  location?: string;
  source: "Yelp";
};

export const reviews: Review[] = [
  {
    quote:
      "If you're looking for the best sushi in Chino Hills, Chobap is it. Chef Mason consistently delivers some of the freshest and most delicious sushi around. The service is just as exceptional as the food — everyone is welcoming and attentive.",
    name: "Vanessa S.",
    location: "Diamond Bar, CA",
    source: "Yelp",
  },
  {
    quote:
      "The sushi was incredibly fresh, and you could really taste the quality of every piece. We ordered the 12-piece sushi set and they pleasantly surprised us by serving 14 pieces instead. If you're looking for fresh, high-quality sushi with outstanding customer service, I highly recommend Chobap.",
    name: "Amy T.",
    location: "Burbank, CA",
    source: "Yelp",
  },
  {
    quote:
      "Every roll slapped. The Volcano Roll came out literally on fire like it was auditioning for a Vegas magic show — easily the main character of the night. Still a fun spot for sushi and a side of pyrotechnics.",
    name: "Faye A.",
    location: "San Gabriel, CA",
    source: "Yelp",
  },
  {
    quote:
      "If I'm craving sushi and a drink, this is always our first choice. The seafood is always incredibly fresh, and the sushi rice is consistently cooked to perfection. Every visit is such an enjoyable experience.",
    name: "Anita T.",
    location: "Lakewood, CO",
    source: "Yelp",
  },
];

export type FanFavorite = {
  name: string;
  price: string;
  description?: string;
};

/** Chobap's most-reviewed/most-photographed dishes on Yelp, cross-referenced to current menu pricing. */
export const fanFavorites: FanFavorite[] = [
  { name: "Chino Hills Roll", price: "$19.00", description: "Crunch roll, salmon, yellowtail, truffle oil, onion — the house signature" },
  { name: "Volcano Roll", price: "$21.00", description: "Served flaming tableside" },
  { name: "Dragon Roll", price: "$16.00", description: "Crunch roll, baked unagi, avocado on top" },
  { name: "Geisha Roll", price: "$18.00", description: "Spicy tuna, crab meat, shrimp tempura, ebi, salmon on top" },
  { name: "Caliente Roll", price: "$18.00", description: "Spicy crab, cilantro, avocado, yellowtail, jalapeño on top" },
  { name: "Golden Spicy Tuna Roll", price: "$15.00", description: "Deep fried spicy tuna roll" },
];

export const faqs = [
  {
    q: "What are you known for?",
    a: "Fresh-cut sushi and sashimi alongside a curated izakaya small-plates menu — edamame, gyoza, tempura, and yakitori-style appetizers. The Chino Hills Roll and the tableside-flaming Volcano Roll are our most-ordered dishes.",
  },
  {
    q: "Do you take reservations?",
    a: "Yes, we take reservations and welcome walk-ins. For larger groups, call ahead at (909) 393-1073 and we'll do our best to seat you.",
  },
  {
    q: "Is it all-you-can-eat?",
    a: "No — Chobap is an à la carte sushi bar and izakaya, not an AYCE restaurant.",
  },
  {
    q: "Do you offer takeout or delivery?",
    a: "Both. Order pickup directly through our online ordering system, or call us at (909) 393-1073.",
  },
  {
    q: "Where are you located?",
    a: "2593 Chino Hills Pkwy, Ste E, Chino Hills, CA 91709.",
  },
] as const;
