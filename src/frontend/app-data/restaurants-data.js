// app-data/restaurants-data.js
export const restaurants = [
  // ===== Your originals (unchanged) =====
  {
    name: "BRAVO! Italian Restaurant & Bar",
    address: "4500 I-55 N #244, Jackson, MS 39211",
    phone: "(601) 982-8111",
    url: "https://bravorestaurant.com/",
    type: "fine-dining",
    image: "img/bravos.png",
    description: "Upscale Italian cuisine, wine bar, and elegant atmosphere in Highland Village."
  },
  {
    name: "The Manship Wood Fired Kitchen",
    address: "1200 N State St #100, Jackson, MS 39202",
    phone: "(601) 398-4562",
    url: "https://www.themanshipjackson.com/",
    type: "casual",
    image: "img/manship.png",
    description: "Southern Mediterranean-inspired fare, wood-fired pizzas, and craft cocktails."
  },
  {
    name: "Saltine Restaurant",
    address: "622 Duling Ave, Jackson, MS 39216",
    phone: "(601) 982-2899",
    url: "https://saltinerestaurant.com/",
    type: "happy-hour",
    image: "img/saltines.jpg",
    description: "Modern oyster bar with Southern seafood, creative drinks, and lively happy hour."
  },
  {
    name: "Martin's Downtown",
    address: "214 S State St, Jackson, MS 39201",
    phone: "(601) 354-9712",
    url: "https://martinsdowntownjxn.com/",
    type: "bar-food",
    image: "img/martins.jpg",
    description: "Classic bar and grill serving burgers, sandwiches, and hosting live music."
  },
  {
    name: "Kiefer's Restaurant",
    address: "120 N State St, Jackson, MS 39201",
    phone: "(601) 353-4976",
    url: "https://www.kiefersrestaurant.com/",
    type: "casual",
    image: "img/kiefers.jpg",
    description: "Downtown Jackson staple serving Mediterranean-inspired wraps, gyros, and salads with a rooftop patio."
  },
  {
    name: "Johnny T's Bistro & Blues",
    address: "538 N Farish St, Jackson, MS 39202",
    phone: "(601) 362-6387",
    url: "https://johnnytsbistroandblues.com/",
    type: "casual",
    image: "img/johnnyT.jpg",
    description: "Soul food, cocktails, and live blues in a historic Farish Street venue."
  },
  {
    name: "Names and Faces Lounge",
    address: "224 E Capitol St, Jackson, MS 39201",
    phone: "(601) 398-0909",
    url: "https://www.facebook.com/namesandfaceslounge/",
    type: "bar-food",
    image: "img/namesandfaces.png",
    description: "Downtown lounge offering drinks, food, and a vibrant nightlife scene."
  },
  {
    name: "The Pig & Pint",
    address: "3139 N State St, Jackson, MS 39216",
    phone: "(601) 982-9463",
    url: "https://www.thepigandpint.com/",
    type: "casual",
    image: "img/pigpint.jpg",
    description: "BBQ joint and craft beer bar with a laid-back atmosphere and outdoor seating."
  },
  {
    name: "Sal & Mookie's New York Pizza & Ice Cream Joint",
    address: "565 Taylor St, Jackson, MS 39202",
    phone: "(601) 368-1919",
    url: "https://www.salvmookies.com/",
    type: "family-friendly",
    image: "img/salandmookies.png",
    description: "Lively spot for New York-style pizza, homemade ice cream, and a fun, casual atmosphere."
  },
  {
    name: "Hen & Egg",
    address: "401 N. Lamar Street, Jackson, MS 39201",
    phone: "(601) 487-6082",
    url: "https://www.henandeggjxn.com/",
    type: "casual",
    image: "img/henandegg.jpg",
    description: "Breakfast and brunch spot serving classic Southern comfort food in downtown Jackson."
  },
  {
    name: "Hal & Mal's",
    address: "200 Commerce Street, Jackson, MS 39201",
    phone: "(601) 948-0888",
    url: "https://halandmals.com/",
    type: "casual",
    image: "img/halandmals.jpg",
    description: "Jackson's most iconic music venue and restaurant since 1984, serving classics with a twist, live music, and comedy shows."
  },

  // ===== Additions (non-chain, deduped) =====
  {
    name: "Big Apple Inn (Farish St.)",
    address: "509 N Farish St, Jackson, MS 39202",
    phone: "(601) 354-9371",
    url: "https://www.visitjackson.com/directory/big-apple-inn-farish-street/",
    type: "casual",
    image: "img/bigappleinn.jpg",
    description: "Historic counter spot famous for 'smokes & ears' sandwiches since the 1930s."
  },
  {
    name: "Walker's Drive-In",
    address: "3016 N State St, Jackson, MS 39216",
    phone: "(601) 982-2633",
    url: "https://walkersdrivein.com/",
    type: "fine-dining",
    image: "img/walkers.jpg",
    description: "Beloved Fondren staple for Gulf-southern fine dining (Redfish Anna!)."
  },
  {
    name: "Mayflower Cafe",
    address: "123 W Capitol St, Jackson, MS 39201",
    phone: "(601) 355-4122",
    url: "https://www.themayflowercafe.com/",
    type: "casual",
    image: "img/mayflower.jpg",
    description: "Jackson classic (since 1935) for seafood & Greek-Southern plates downtown."
  },
  {
    name: "The Iron Horse Grill",
    address: "320 W Pearl St, Jackson, MS 39203",
    phone: "(601) 398-0151",
    url: "https://www.theironhorsegrill.com/",
    type: "casual",
    image: "img/ironhorse.jpg",
    description: "Live-music friendly Tex-Mex & Southern spot in a restored landmark."
  },
  {
    name: "Brent's Drugs",
    address: "655 Duling Ave, Jackson, MS 39216",
    phone: "(601) 366-3427",
    url: "https://www.brentsdrugs.com/",
    type: "casual",
    image: "img/brents.jpg",
    description: "Iconic 1946 soda fountain & diner in Fondren."
  },
  {
    name: "The Apothecary at Brent's Drugs",
    address: "655 Duling Ave, Jackson, MS 39216",
    phone: "(601) 366-3427",
    url: "https://www.apothecaryjackson.com/",
    type: "cocktail-bar",
    image: "img/apocathery.jpg",
    description: "Speakeasy cocktail bar tucked behind Brent's."
  },
  {
    name: "Broad Street Baking Company & Cafe",
    address: "4465 I-55 N, Ste 101, Jackson, MS 39206",
    phone: "(601) 362-2900",
    url: "https://www.broadstbakery.com/",
    type: "bakery-cafe",
    image: "img/broadstreet.jpg",
    description: "Banner Hall bakery for breads, pastries, breakfast & lunch."
  },
  {
    name: "Bully's Soul Food Restaurant",
    address: "3118 Livingston Rd, Jackson, MS 39213",
    phone: "(601) 362-0484",
    url: "https://www.visitjackson.com/directory/bullys-restaurant/",
    type: "southern",
    image: "img/bullys.jpg",
    description: "James Beard America's Classics winner for true Mississippi soul food."
  },
  {
    name: "Campbell's Bakery",
    address: "3013 N State St, Jackson, MS 39216",
    phone: "(601) 362-4628",
    url: "https://www.campbellsbakes.com/",
    type: "bakery",
    image: "img/campbells.jpg",
    description: "Fondren bakery famous for petit fours & tea cakes since 1962."
  },
  {
    name: "Elvie's",
    address: "809 Manship St, Jackson, MS 39202",
    phone: "(601) 863-8828",
    url: "https://www.elviesrestaurant.com/",
    type: "brunch",
    image: "img/elvies.jpg",
    description: "Belhaven bistro for thoughtful, chef-driven Southern fare."
  },
  {
    name: "Estelle Southern Table",
    address: "407 S Congress St, Jackson, MS 39201",
    phone: "(769) 235-8400",
    url: "https://www.estellejackson.com/",
    type: "fine-dining",
    image: "img/estelle.jpg",
    description: "Modern Southern in The Westin Jackson (dinner, brunch, cocktails)."
  },
  {
    name: "Fondren Public",
    address: "2765 Old Canton Rd, Jackson, MS 39216",
    phone: "(769) 216-2589",
    url: "https://www.facebook.com/fondrenpublic",
    type: "bar-food",
    image: "img/fondrenpublic.jpg",
    description: "Neighborhood bar with 24 taps, bocce & pub bites."
  },
  {
    name: "Highball Lanes",
    address: "3019 N State St, Jackson, MS 39216",
    phone: "(601) 487-9520",
    url: "https://www.visitjackson.com/directory/highball-lanes/",
    type: "eat-play",
    image: "img/highball.jpg",
    description: "Restaurant-first bowling alley with from-scratch Southern menu."
  },
  {
    name: "Library Lounge at Fairview Inn",
    address: "734 Fairview St, Jackson, MS 39202",
    phone: "(601) 948-3429",
    url: "https://www.visitjackson.com/directory/library-lounge-at-fairview-inn/",
    type: "cocktail-bar",
    image: "img/librarylounge.jpg",
    description: "Book-lined, literary-themed lounge for cocktails & small plates."
  },
  {
    name: "Little Tokyo Sushi & Hibachi",
    address: "3009 N State St, Jackson, MS 39216",
    phone: "(601) 867-7020",
    url: "https://www.littletokyofondren.com/",
    type: "casual",
    image: "img/littletokyo.jpeg",
    description: "Fondren favorite for sushi, hibachi & bento."
  },
  {
    name: "Nissan Cafe by Nick Wallace (Two Mississippi Museums)",
    address: "222 North St, Jackson, MS 39201",
    phone: "(601) 576-6814",
    url: "https://www.nickwallaceculinary.com/restaurants",
    type: "casual",
    image: "img/nissancafe.jpg",
    description: "Modern Mississippi comfort food inside the museum complex."
  },
  {
    name: "Old Capitol Inn — The Sunroom Cafe & Bar",
    address: "226 N State St, Jackson, MS 39201",
    phone: "(601) 359-9000",
    url: "https://www.oldcapitolinn.com/sunroom/",
    type: "lunch",
    image: "img/oldcapitolinn.jpg",
    description: "Hidden-gem lunch TuesdayΓÇôFriday with koi-pond patio."
  },
  {
    name: "Sambou's African Kitchen",
    address: "1625 E County Line Rd, Ste 150, Jackson, MS 39211",
    phone: "(601) 665-4881",
    url: "https://www.visitmississippi.org/things-to-do/food-drink/sambous-african-kitchen/",
    type: "international",
    image: "img/sambou.jpg",
    description: "Family-run West African spot; nationally acclaimed."
  },
  {
    name: "Stamps Super Burgers",
    address: "1801 Dalton St, Jackson, MS 39204",
    phone: "(601) 352-4555",
    url: "https://www.visitjackson.com/directory/stamps-super-burgers/",
    type: "burgers",
    image: "img/stamps.jpg",
    description: "Legendary, extra-thick burgers ΓÇö call ahead!"
  },
  {
    name: "The Station JXN",
    address: "3025 N State St, Jackson, MS 39216",
    phone: "", // not listed
    url: "https://www.theblockatfondren.com/venues/the-station/",
    type: "casual",
    image: "img/station.jpg",
    description: "Wood-fired pizzas & shareables beside the historic Capri."
  },
  {
    name: "Wing Mouth",
    address: "807 Manship St, Jackson, MS 39202",
    phone: "(601) 210-7888",
    url: "https://www.wingmouth.com/",
    type: "bar-food",
    image: "img/wingmouth.jpg",
    description: "Belhaven Town Center wing shop with house sauces."
  },
  {
    name: "Zundo Ramen & Sake Bar",
    address: "3100 N State St, Unit 102, Jackson, MS 39216",
    phone: "(601) 914-9908",
    url: "https://zundoramenms.com/",
    type: "international",
    image: "img/zundo.jpg",
    description: "From-scratch ramen & donburi, sake & small plates."
  },
  {
    name: "Bettina's Soulfood Kitchen",
    address: "503 S Gallatin St, Jackson, MS 39203",
    phone: "(769) 572-7987",
    url: "https://www.visitjackson.com/directory/bettinas-soulfood-kitchen/",
    type: "southern",
    image: "img/bettinas.jpg",
    description: "West Jackson soul food plates & Sunday specials."
  },
  {
    name: "Capitol Grill",
    address: "5050 I-55 N Frontage Rd, Ste F, Jackson, MS 39211",
    phone: "(601) 899-8845",
    url: "https://www.capitolgrillofjackson.com/",
    type: "bar-food",
    image: "img/capitolgrill.jpg",
    description: "Locally owned sports bar with full menu & late hours."
  },
  {
    name: "Big John's Restaurant",
    address: "3399 Medgar Evers Blvd, Jackson, MS 39213",
    phone: "(601) 981-6953",
    url: "https://restaurantguru.com/Big-Johns-Restaurant-Jackson",
    type: "casual",
    image: "img/bigjohns.jpg",
    description: "Old-school plates: burgers, catfish, pig-ear & pork chop sandwiches."
  },
  {
    name: "Aladdin Mediterranean Grill",
    address: "730 Lakeland Dr, Jackson, MS 39216",
    phone: "(601) 366-6033",
    url: "https://aladdininjackson.com/",
    type: "international",
    image: "img/aladdin.jpg",
    description: "Longtime local go-to for kebabs, shawarma & mezze."
  },
  {
    name: "Aladdin Mediterranean Express",
    address: "125 S Congress St, Ste 106, Jackson, MS 39201",
    phone: "(769) 572-4555",
    url: "https://downtown-jackson.com/listing/aladdin-mediterranean-express/",
    type: "fast-casual",
    image: "img/aladdin-express.jpg",
    description: "Downtown quick-serve offshoot for wraps, plates & baklava."
  },
  {
    name: "Crazy Cat Eat Up",
    address: "1491 Canton Mart Rd, Ste 12, Jackson, MS 39211",
    phone: "(601) 957-1441",
    url: "https://crazycateatup.net/",
    type: "casual",
    image: "img/crazycat.jpg",
    description: "Neighborhood cafe for lunch, weekend brunch & scratch desserts."
  },
  {
    name: "1908 Provisions (Fairview Inn)",
    address: "734 Fairview St, Jackson, MS 39202",
    phone: "(601) 948-3429",
    url: "https://www.visitjackson.com/directory/1908-provisions/",
    type: "fine-dining",
    image: "img/1908.png",
    description: "Southern-rooted dinner service and Sunday brunch inside the historic inn."
  }
];

export const restaurantCategories = [
  {
    category: "Casual Dining",
    examples: ["Diners", "Cafes", "Family Restaurants"],
    description: "Easy, everyday spots for a relaxed meal with friends or family."
  },
  {
    category: "Fine Dining",
    examples: ["Upscale Restaurants", "Chef-Driven Menus"],
    description: "Elegant dining experiences with gourmet menus and top service."
  },
  {
    category: "Bar Food & Grills",
    examples: ["Wings", "Burgers", "Pub-Style Eats"],
    description: "Classic American bar fare, great for game nights and hangouts."
  },
  {
    category: "Southern & Soul Food",
    examples: ["Fried Chicken", "Collard Greens", "Catfish"],
    description: "Authentic Mississippi comfort food and soulful flavors."
  },
  {
    category: "BBQ & Smokehouses",
    examples: ["Ribs", "Brisket", "Pulled Pork"],
    description: "Slow-cooked barbecue served with all the fixings."
  },
  {
    category: "Seafood",
    examples: ["Oysters", "Shrimp", "Fish Fries"],
    description: "Fresh Gulf Coast seafood and Jackson's favorite fish houses."
  },
  {
    category: "International Flavors",
    examples: ["Mexican", "Italian", "Asian", "Mediterranean"],
    description: "Global cuisines bringing flavors from around the world."
  },
  {
    category: "Vegan & Vegetarian",
    examples: ["Plant-Based Menus", "Healthy Bowls"],
    description: "Fresh, creative plant-based options for healthy eating."
  },
  {
    category: "Brunch & Breakfast",
    examples: ["Pancake Houses", "Brunch Cafes"],
    description: "Morning favorites and brunch hotspots across the city."
  },
  {
    category: "Late Night Eats",
    examples: ["24-Hour Diners", "After-Party Food"],
    description: "Restaurants and food joints serving well past midnight."
  }
];
