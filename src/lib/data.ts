import { images } from "./images";

export const site = {
  name: "UMAMI.",
  tagline: "A modern tasting-menu restaurant rooted in seasonal, local craft.",
  phone: "(555) 214-0176",
  email: "hello@umami-restaurant.com",
};

// ---------- Navigation ----------
export const nav = [
  { label: "Home", href: "/" },
  {
    label: "Our Story",
    href: "/our-story",
    children: [
      { label: "Meet the Chefs", href: "/our-story/chefs" },
      { label: "Sourcing Philosophy", href: "/our-story/sourcing" },
      { label: "Architecture & Atmosphere", href: "/our-story/architecture" },
    ],
  },
  {
    label: "Culinary Menus",
    href: "/menus",
    children: [
      { label: "Lunch Menu", href: "/menus/lunch" },
      { label: "Dinner & Tasting Menu", href: "/menus/dinner" },
      { label: "Wine & Spirits", href: "/menus/wine" },
    ],
  },
  {
    label: "Reservations",
    href: "/reservations",
    children: [
      { label: "Book a Table", href: "/reservations" },
      { label: "Private Events", href: "/reservations/private-events" },
      { label: "Policies & Dietary Guidelines", href: "/reservations/policies" },
    ],
  },
  {
    label: "Umami At Home",
    href: "/shop",
    children: [
      { label: "Premium Takeout", href: "/shop/takeout" },
      { label: "Gift Cards", href: "/shop/gift-cards" },
      { label: "Pantry Goods", href: "/shop/pantry" },
    ],
  },
  { label: "Locations", href: "/locations" },
  { label: "Careers", href: "/careers" },
];

// ---------- Menu filter tags ----------
export type MenuTag = "Starter" | "Main" | "Dessert" | "Vegetarian" | "Chef's Choice";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  tags: MenuTag[];
  image: string;
}

// Curated preview shown on the homepage (interactive filter grid)
export const featuredMenu: MenuItem[] = [
  {
    id: "hero-sashimi",
    name: "Hamachi Crudo",
    description: "Yellowtail, citrus ponzu, charred jalapeño oil, micro shiso.",
    price: "$24",
    tags: ["Starter", "Chef's Choice"],
    image: images.dishes.sashimi,
  },
  {
    id: "hero-noodle",
    name: "Cold Sesame Noodles",
    description: "Hand-pulled noodles, roasted chili crisp, pickled mustard greens.",
    price: "$19",
    tags: ["Starter", "Vegetarian"],
    image: images.dishes.noodleSalad,
  },
  {
    id: "hero-aspic",
    name: "Heirloom Tomato Terrine",
    description: "Slow-set consommé, basil oil, aged sherry vinegar pearls.",
    price: "$21",
    tags: ["Starter", "Vegetarian"],
    image: images.dishes.aspic,
  },
  {
    id: "hero-friedrice",
    name: "Smoked Duck Fried Rice",
    description: "Charred scallion, preserved lemon, crispy duck skin, quail egg.",
    price: "$32",
    tags: ["Main", "Chef's Choice"],
    image: images.dishes.friedRice,
  },
  {
    id: "hero-pannacotta",
    name: "Yuzu Panna Cotta",
    description: "Candied kumquat, matcha crumble, honeycomb tuile.",
    price: "$14",
    tags: ["Dessert"],
    image: images.dishes.pannaCotta,
  },
  {
    id: "hero-mousse",
    name: "Blueberry Mousse",
    description: "Lemon verbena sable, blueberry compression, crème fraîche foam.",
    price: "$15",
    tags: ["Dessert", "Vegetarian"],
    image: images.dishes.mousse,
  },
  {
    id: "hero-sorbet",
    name: "Stone Fruit Sorbet Trio",
    description: "Seasonal sorbets, candied pistachio, elderflower syrup.",
    price: "$13",
    tags: ["Dessert", "Vegetarian", "Chef's Choice"],
    image: images.dishes.sorbet,
  },
  {
    id: "hero-icecream",
    name: "Charcoal Ice Cream Sundae",
    description: "Black sesame ice cream, raspberry gastrique, cacao nib brittle.",
    price: "$16",
    tags: ["Dessert"],
    image: images.dishes.iceCreamRaspberry,
  },
];

export const menuFilters: MenuTag[] = ["Starter", "Main", "Dessert", "Vegetarian", "Chef's Choice"];

// ---------- Lunch Menu ----------
export const lunchMenu = {
  intro:
    "A brisker, sunlit expression of the Umami pantry — served Tuesday to Friday, 11:30am – 2:30pm.",
  courses: [
    {
      section: "Small Plates",
      items: [
        {
          id: "l1",
          name: "Hamachi Crudo",
          description: "Yellowtail, citrus ponzu, charred jalapeño oil.",
          price: "$22",
          tags: ["Starter", "Chef's Choice"] as MenuTag[],
          image: images.dishes.sashimi,
        },
        {
          id: "l2",
          name: "Market Green Salad",
          description: "Shaved fennel, watermelon radish, umami vinaigrette.",
          price: "$16",
          tags: ["Starter", "Vegetarian"] as MenuTag[],
          image: images.farm.tray,
        },
        {
          id: "l3",
          name: "Cold Sesame Noodles",
          description: "Hand-pulled noodles, roasted chili crisp, pickled greens.",
          price: "$18",
          tags: ["Starter", "Vegetarian"] as MenuTag[],
          image: images.dishes.noodleSalad,
        },
      ],
    },
    {
      section: "Midday Mains",
      items: [
        {
          id: "l4",
          name: "Umami Fried Rice Bowl",
          description: "Charred scallion, soy-cured egg yolk, crispy shallots.",
          price: "$24",
          tags: ["Main", "Vegetarian"] as MenuTag[],
          image: images.dishes.friedRice,
        },
        {
          id: "l5",
          name: "Miso-Glazed Black Cod",
          description: "Braised bok choy, forbidden rice, yuzu kosho butter.",
          price: "$29",
          tags: ["Main", "Chef's Choice"] as MenuTag[],
          image: images.dishes.aspic,
        },
        {
          id: "l6",
          name: "Grilled Short Rib Sando",
          description: "Milk bread, pickled daikon, garlic aioli, kettle chips.",
          price: "$26",
          tags: ["Main"] as MenuTag[],
          image: images.dishes.noodleSalad,
        },
      ],
    },
    {
      section: "Sweet Finish",
      items: [
        {
          id: "l7",
          name: "Yuzu Panna Cotta",
          description: "Candied kumquat, honeycomb tuile.",
          price: "$12",
          tags: ["Dessert"] as MenuTag[],
          image: images.dishes.pannaCotta,
        },
        {
          id: "l8",
          name: "Stone Fruit Sorbet",
          description: "Seasonal sorbet trio, elderflower syrup.",
          price: "$11",
          tags: ["Dessert", "Vegetarian"] as MenuTag[],
          image: images.dishes.sorbet,
        },
      ],
    },
  ],
};

// ---------- Dinner & Tasting Menu ----------
export const tastingPackages = [
  {
    id: "seasons",
    name: "The Seasons Tasting",
    price: "$95 / guest",
    courses: 5,
    description:
      "Our approachable introduction to Umami — five courses tracing the current harvest, paired with a chef's amuse-bouche and mignardises.",
    highlights: [
      "Hamachi Crudo",
      "Heirloom Tomato Terrine",
      "Miso-Glazed Black Cod",
      "Smoked Duck Fried Rice",
      "Yuzu Panna Cotta",
    ],
    winePairing: "+$55 for a 4-glass sommelier pairing",
    image: images.candlelitTable,
  },
  {
    id: "umami-signature",
    name: "The Umami Signature",
    price: "$145 / guest",
    courses: 8,
    description:
      "Our most-booked experience: eight courses spanning raw, fire, and slow-braised techniques, finished tableside with a live dessert course.",
    highlights: [
      "Hamachi Crudo",
      "Charcoal-Grilled Octopus",
      "Foie Gras Torchon",
      "48-Hour Short Rib",
      "Smoked Duck Fried Rice",
      "Cheese Course",
      "Charcoal Ice Cream Sundae",
      "Mignardises",
    ],
    winePairing: "+$85 for a 6-glass sommelier pairing",
    image: images.wineTable,
    signature: true,
  },
  {
    id: "chefs-table",
    name: "Chef's Table Omakase",
    price: "$225 / guest",
    courses: 12,
    description:
      "A twelve-course, counter-side journey guided in real time by our executive chef — limited to 6 guests per seating, reservation required 72 hours ahead.",
    highlights: [
      "Live seafood butchery",
      "Rare seasonal ingredients",
      "Custom wine & sake pairing available",
      "Personalized menu keepsake",
    ],
    winePairing: "+$120 for a reserve pairing flight",
    image: images.barGlow,
  },
];

export const alaCarteDinner = [
  {
    section: "To Start",
    items: [
      { id: "d1", name: "Hamachi Crudo", description: "Citrus ponzu, charred jalapeño oil.", price: "$24", tags: ["Starter", "Chef's Choice"] as MenuTag[], image: images.dishes.sashimi },
      { id: "d2", name: "Heirloom Tomato Terrine", description: "Slow-set consommé, basil oil.", price: "$21", tags: ["Starter", "Vegetarian"] as MenuTag[], image: images.dishes.aspic },
      { id: "d3", name: "Charcoal-Grilled Octopus", description: "Smoked paprika romesco, fingerling confit.", price: "$27", tags: ["Starter", "Chef's Choice"] as MenuTag[], image: images.dishes.noodleSalad },
    ],
  },
  {
    section: "Main Course",
    items: [
      { id: "d4", name: "Smoked Duck Fried Rice", description: "Preserved lemon, crispy duck skin, quail egg.", price: "$34", tags: ["Main", "Chef's Choice"] as MenuTag[], image: images.dishes.friedRice },
      { id: "d5", name: "48-Hour Short Rib", description: "Charred cipollini, black garlic jus, potato mille-feuille.", price: "$46", tags: ["Main"] as MenuTag[], image: images.dishes.aspic },
      { id: "d6", name: "Miso-Glazed Black Cod", description: "Braised bok choy, yuzu kosho butter.", price: "$41", tags: ["Main", "Chef's Choice"] as MenuTag[], image: images.dishes.sashimi },
      { id: "d7", name: "Roasted Cauliflower Steak", description: "Romesco, brown butter hazelnuts, herb oil.", price: "$28", tags: ["Main", "Vegetarian"] as MenuTag[], image: images.dishes.noodleSalad },
    ],
  },
  {
    section: "Sweet Finish",
    items: [
      { id: "d8", name: "Charcoal Ice Cream Sundae", description: "Black sesame ice cream, raspberry gastrique.", price: "$16", tags: ["Dessert"] as MenuTag[], image: images.dishes.iceCreamRaspberry },
      { id: "d9", name: "Blueberry Mousse", description: "Lemon verbena sable, crème fraîche foam.", price: "$15", tags: ["Dessert", "Vegetarian"] as MenuTag[], image: images.dishes.mousse },
      { id: "d10", name: "Dark Chocolate Tart", description: "Sea salt caramel, cocoa nib crunch.", price: "$15", tags: ["Dessert", "Vegetarian"] as MenuTag[], image: images.dishes.chocolateCake },
    ],
  },
];

// ---------- Wine & Spirits ----------
export const wineList = [
  {
    section: "Sommelier's Selections",
    description: "Rotating by-the-glass picks curated weekly by our head sommelier, Elena Roux.",
    items: [
      { id: "w1", name: "Domaine Chèze, Condrieu", type: "White · Rhône, France", price: "$22 / $88", note: "Peach, honeysuckle, wet stone" },
      { id: "w2", name: "Kumeu River Chardonnay", type: "White · New Zealand", price: "$19 / $76", note: "Citrus zest, toasted almond" },
      { id: "w3", name: "Bodega Catena Malbec", type: "Red · Mendoza, Argentina", price: "$18 / $72", note: "Blackberry, cedar, cocoa" },
      { id: "w4", name: "Produttori del Barbaresco", type: "Red · Piedmont, Italy", price: "$26 / $104", note: "Rose petal, tar, red cherry" },
    ],
  },
  {
    section: "Champagne & Sparkling",
    description: "For the celebratory moments, poured tableside.",
    items: [
      { id: "w5", name: "Billecart-Salmon Brut Rosé", type: "Champagne, France", price: "$32 / $150", note: "Wild strawberry, brioche" },
      { id: "w6", name: "Schramsberg Blanc de Blancs", type: "Sparkling · California", price: "$21 / $95", note: "Green apple, lemon curd" },
    ],
  },
  {
    section: "Sake & Spirits",
    description: "A tight, thoughtful back bar built around Japanese whisky and artisanal sake.",
    items: [
      { id: "w7", name: "Dassai 23 Junmai Daiginjo", type: "Sake · Yamaguchi", price: "$28 / glass", note: "Delicate, floral, polished 23%" },
      { id: "w8", name: "Hibiki Harmony", type: "Japanese Whisky", price: "$24 / pour", note: "Honey, orange peel, sandalwood" },
      { id: "w9", name: "Umami Old Fashioned", type: "Signature Cocktail", price: "$18", note: "Miso caramel bitters, bourbon, smoked orange" },
    ],
  },
];

// ---------- Testimonials / editorial critiques ----------
export const testimonials = [
  {
    id: "t1",
    quote:
      "Umami distills fine dining down to its most essential, joyful parts — bold flavor, honest sourcing, and a room that makes you want to linger.",
    source: "The Culinary Post",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "The Signature tasting menu is the best eight courses I've eaten this year. The duck fried rice alone is worth the reservation wait.",
    source: "City & Table Magazine",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "A rare restaurant that treats its farmers like co-authors of the menu. Every plate tells you exactly where it came from.",
    source: "Harvest & Home Journal",
    rating: 4.5,
  },
  {
    id: "t4",
    quote:
      "Warm, unfussy service and a wine list that punches well above the room's size. Umami is a genuine neighborhood gem with big-city ambition.",
    source: "Eater Local",
    rating: 5,
  },
];

// ---------- Chefs ----------
export const chefs = [
  {
    id: "chef-mika",
    name: "Mika Tanaka",
    role: "Executive Chef & Co-Founder",
    bio: "Trained in Kyoto's kaiseki tradition and later at a three-Michelin-star kitchen in Copenhagen, Mika founded Umami to marry Japanese precision with the produce of her adopted home. She leads the Chef's Table Omakase every Friday and Saturday.",
    image: images.chefs.chefTwo,
  },
  {
    id: "chef-daniel",
    name: "Daniel Ortiz",
    role: "Chef de Cuisine",
    bio: "A native of Oaxaca who spent a decade cooking across California's farm-to-table scene, Daniel runs the day-to-day kitchen and designs the seasonal tasting menus with an eye for smoke, char, and citrus.",
    image: images.chefs.chefOne,
  },
  {
    id: "chef-priya",
    name: "Priya Nair",
    role: "Pastry Chef",
    bio: "Formerly of a celebrated Michelin-starred pastry program in New York, Priya builds Umami's dessert program around whole-fruit technique and low-waste fermentation, changing the mignardise selection weekly.",
    image: images.chefs.chefThree,
  },
  {
    id: "chef-team",
    name: "The Umami Kitchen Team",
    role: "Sous Chefs & Culinary Team",
    bio: "A twelve-person kitchen brigade drawn from six countries, united by a shared obsession with ingredient integrity, mentorship, and a genuinely fun place to work.",
    image: images.chefs.chefTeam,
  },
];

// ---------- Sourcing partners ----------
export const sourcingPartners = [
  {
    id: "s1",
    name: "Hollow Creek Micro-Farm",
    focus: "Heirloom vegetables & edible flowers",
    distance: "8 miles from the restaurant",
    image: images.farm.basket,
  },
  {
    id: "s2",
    name: "Redwood Ridge Apiary & Orchard",
    focus: "Raw honey, stone fruit, citrus",
    distance: "14 miles from the restaurant",
    image: images.farm.tray,
  },
  {
    id: "s3",
    name: "Blue Tide Day-Boat Collective",
    focus: "Line-caught fish & shellfish",
    distance: "Delivered daily from the coast",
    image: images.farm.handsBasket,
  },
  {
    id: "s4",
    name: "Amaranth Grain Mill",
    focus: "Stone-milled grains & heritage rice",
    distance: "22 miles from the restaurant",
    image: images.farm.arranging,
  },
];

export const sourcingPrinciples = [
  {
    title: "Radically Seasonal",
    description: "Our menu is rewritten every six to eight weeks around what our partner farms are actually harvesting — never the other way around.",
  },
  {
    title: "Regenerative First",
    description: "We prioritize farms practicing regenerative and organic methods, and we pay above market rate to keep them in business long-term.",
  },
  {
    title: "Nose-to-Tail, Root-to-Stem",
    description: "Kitchen scraps become stocks, ferments, and staff meal. Less than 3% of our food purchases end up in the waste stream.",
  },
  {
    title: "Full Transparency",
    description: "Every seasonal menu lists the farm of origin for its headline ingredient — because provenance should never be a secret.",
  },
];

// ---------- Architecture & atmosphere ----------
export const architectureSections = [
  {
    title: "A Room Built Around Fire and Wood",
    description:
      "Designed by Studio Ren in 2019, the dining room is anchored by a reclaimed elm communal table and an open hearth visible from every seat. Warm brass fixtures and hand-plastered walls soften the industrial bones of the century-old building.",
    image: images.interior.dining,
  },
  {
    title: "The Counter Experience",
    description:
      "Our eight-seat chef's counter wraps the open kitchen, letting guests watch every stage of plating under a canopy of hanging copper pots sourced from a family foundry in Kyoto.",
    image: images.interior.bar,
  },
  {
    title: "The Living Wall",
    description:
      "A two-story vertical garden of edible herbs and micro-greens greets guests at the entry — many of the same plants make their way onto that evening's tasting menu.",
    image: images.interior.lounge,
  },
  {
    title: "Private Hearth Room",
    description:
      "Tucked behind a rotating bookshelf, our 14-seat private room features its own wood-fired oven and skylight, available for buyouts and tasting dinners.",
    image: images.interior.hallway,
  },
];

// ---------- Gift cards ----------
export const giftCards = [
  { id: "gc1", amount: "$50", description: "A starter gift for a first Umami visit — enough for two shared plates and a glass of wine.", image: images.dishes.sashimi },
  { id: "gc2", amount: "$100", description: "Covers a lunch for two or a great head start on the dinner tasting menu.", image: images.wine.bottles },
  { id: "gc3", amount: "$200", description: "Our most popular gift — comfortably covers The Seasons Tasting for two.", image: images.candlelitTable, popular: true },
  { id: "gc4", amount: "$350", description: "The full Umami Signature experience for two, wine pairing included.", image: images.wineTable },
];

// ---------- Pantry goods ----------
export const pantryGoods = [
  {
    id: "p1",
    name: "Umami House Chili Oil",
    description: "Small-batch, hand-toasted chili crisp finished with roasted garlic and shallot.",
    price: "$18",
    image: images.pantry.spices,
    category: "Pantry",
  },
  {
    id: "p2",
    name: "Reserve Cold-Pressed Olive Oil",
    description: "Single-orchard oil from our partner grove, bottled exclusively for Umami.",
    price: "$34",
    image: images.pantry.pastaIngredients,
    category: "Pantry",
  },
  {
    id: "p3",
    name: "Umami Signature Knife Set",
    description: "Three-piece forged carbon steel set with a walnut block, designed with Tanaka Cutlery.",
    price: "$285",
    image: images.pantry.knife,
    category: "Tools",
  },
  {
    id: "p4",
    name: "Waxed Canvas Chef's Apron",
    description: "Cross-back apron in forest green waxed canvas with brass hardware and leather ties.",
    price: "$68",
    image: images.pantry.apron,
    category: "Apparel",
  },
  {
    id: "p5",
    name: "Hand-Thrown Ceramic Plate Set",
    description: "Set of four dinner plates hand-thrown by a local ceramicist, as seen on our tasting menu.",
    price: "$120",
    image: images.pantry.ceramics,
    category: "Tableware",
  },
  {
    id: "p6",
    name: "Umami Spice & Ferment Kit",
    description: "House koji, shio kombu, and smoked chili blend for building umami at home.",
    price: "$42",
    image: images.pantry.butcher,
    category: "Pantry",
  },
];

// ---------- Takeout menu ----------
export const takeoutMenu = [
  {
    id: "to1",
    name: "Umami Fried Rice Family Box",
    description: "Serves 3-4. Smoked duck fried rice, crispy shallots, chili oil on the side.",
    price: "$58",
    image: images.dishes.friedRice,
  },
  {
    id: "to2",
    name: "Tasting Menu at Home (4 Course)",
    description: "Chilled crudo, cold noodles, braised short rib, panna cotta — reheat instructions included.",
    price: "$110 / two guests",
    image: images.takeout.boxes,
  },
  {
    id: "to3",
    name: "Weekend Brunch Box",
    description: "Miso-butter pancakes, smoked salmon, seasonal fruit, pastry basket.",
    price: "$36",
    image: images.takeout.pizzaBox,
  },
  {
    id: "to4",
    name: "Celebration Dessert Box",
    description: "Chef Priya's tasting box: chocolate tart, panna cotta, mousse, mignardises.",
    price: "$48",
    image: images.takeout.giftBox,
  },
];

// ---------- Locations ----------
export const locations = [
  {
    id: "loc-flagship",
    name: "Umami — Flagship, Hillcrest",
    address: "214 Maple Grove Ave, Hillcrest",
    phone: "(555) 214-0176",
    hours: [
      { day: "Tue – Fri", time: "11:30am – 2:30pm & 5:30pm – 10:00pm" },
      { day: "Sat", time: "5:00pm – 11:00pm" },
      { day: "Sun – Mon", time: "Closed" },
    ],
    image: images.exterior.cafeFrontage,
    mapQuery: "214+Maple+Grove+Ave+Hillcrest",
  },
  {
    id: "loc-riverside",
    name: "Umami — Riverside Terrace",
    address: "88 Riverside Walk, Old Mill District",
    phone: "(555) 908-4432",
    hours: [
      { day: "Wed – Sun", time: "5:00pm – 11:00pm" },
      { day: "Mon – Tue", time: "Closed" },
    ],
    image: images.exterior.taproom,
    mapQuery: "88+Riverside+Walk+Old+Mill+District",
  },
  {
    id: "loc-market",
    name: "Umami At Home — Market Counter",
    address: "12 Union Market Hall, Booth 6",
    phone: "(555) 641-2290",
    hours: [
      { day: "Thu – Sun", time: "10:00am – 6:00pm" },
      { day: "Mon – Wed", time: "Closed" },
    ],
    image: images.exterior.signage,
    mapQuery: "12+Union+Market+Hall",
  },
];

// ---------- Careers ----------
export const careers = [
  {
    id: "job1",
    title: "Line Cook, Garde Manger",
    department: "Culinary",
    location: "Hillcrest Flagship",
    type: "Full-time",
    description: "Own the cold station across crudo, salads, and terrines within the tasting menu rotation. 2+ years fine dining experience preferred.",
  },
  {
    id: "job2",
    title: "Pastry Cook",
    department: "Culinary",
    location: "Hillcrest Flagship",
    type: "Full-time",
    description: "Support Chef Priya on daily mignardises, plated desserts, and bread program. Fermentation experience a plus.",
  },
  {
    id: "job3",
    title: "Sommelier",
    department: "Front of House",
    location: "Riverside Terrace",
    type: "Full-time",
    description: "Manage a 300-label cellar, build seasonal pairing flights, and lead guest-facing wine service and staff education.",
  },
  {
    id: "job4",
    title: "Reservationist / Host",
    department: "Front of House",
    location: "Hillcrest Flagship",
    type: "Part-time",
    description: "First point of contact for guests by phone, email, and in person. Evening and weekend availability required.",
  },
  {
    id: "job5",
    title: "Private Events Coordinator",
    department: "Events",
    location: "Both Locations",
    type: "Full-time",
    description: "Manage buyouts, corporate dinners, and the Private Hearth Room calendar from inquiry through post-event follow-up.",
  },
  {
    id: "job6",
    title: "Market Counter Associate",
    department: "Retail",
    location: "Union Market Hall",
    type: "Part-time",
    description: "Sell and package Umami At Home pantry goods, gift cards, and takeout boxes at our market counter.",
  },
];

// ---------- Private events ----------
export const eventTypes = [
  {
    title: "Private Hearth Room Buyout",
    description: "Up to 14 guests around our wood-fired hearth, with a dedicated server and custom tasting menu.",
    capacity: "Up to 14 guests",
  },
  {
    title: "Full Restaurant Buyout",
    description: "Reserve the entire Hillcrest flagship for weddings, corporate milestones, or celebrations.",
    capacity: "Up to 80 guests",
  },
  {
    title: "Chef's Table Group Experience",
    description: "Book all 8 counter seats for an immersive, chef-narrated omakase for your group.",
    capacity: "Up to 8 guests",
  },
  {
    title: "Riverside Terrace Reception",
    description: "An open-air terrace ideal for cocktail-style receptions with passed seasonal bites.",
    capacity: "Up to 120 guests",
  },
];

// ---------- Reservation policies ----------
export const reservationPolicies = [
  "Reservations can be booked up to 60 days in advance and are held for 15 minutes past the booking time.",
  "Parties of 7 or more are automatically enrolled in our prix-fixe group menu.",
  "A credit card is required to hold tasting menu reservations; cancellations within 24 hours are subject to a $50/guest fee.",
  "Children are welcome at lunch service; dinner tasting menus are best suited to guests 12 and older.",
  "Smart casual attire is requested. We kindly ask that guests avoid strong fragrances near our open kitchen.",
];

export const dietaryGuidelines = [
  "Please note all dietary restrictions and allergies in your reservation notes at least 48 hours ahead of dinner service.",
  "Our kitchen prepares dedicated vegetarian and pescatarian tasting menus nightly.",
  "We proudly accommodate gluten-sensitive and shellfish-free requests; please note that our kitchen is not a certified allergen-free facility.",
  "Vegan tasting menus are available with 72 hours' notice to allow our chefs to source accordingly.",
];

export const timeSlots = [
  "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM",
  "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
];

export const lunchTimeSlots = ["11:30 AM", "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM"];
