// Moved from app-data/things-to-do-data.js
// Things to do data
export const thingsToDo = [
  {
    name: "Mississippi Museum of Natural Science",
    address: "2148 Riverside Dr, Jackson, MS 39202",
    phone: "(601) 576-6000",
    url: "https://www.mdwfp.com/museum/",
    type: "experiences-activities",
    image: "img/musnaturalscience.jpg",
    description: "Located within LeFleur’s Bluff State Park, this museum features living species, aquariums, fossils, nature trails, and the Dinosaur Trail with life-size models."
  },
  {
    name: "Mississippi Wildlife and Parks",
    address: "1505 Eastover Dr, Jackson, MS 39211",
    phone: "(601) 432-2400",
    url: "https://www.mdwfp.com/",
    type: "experiences-activities",
    image:"img/mwfd.png",
    description: "Explore Mississippi’s wildlife, parks, and outdoor recreation opportunities."
  },
  {
    name: "Mississippi Children’s Museum",
    address: "2145 Museum Blvd, Jackson, MS 39202",
    phone: "(601) 981-5469",
    url: "https://mschildrensmuseum.org/",
    type: "family-kid",
    image: "img/mschildrens.jpg",
    description: "A hands-on, interactive museum designed for kids, offering playful, educational exhibits in a dynamic learning environment. Located within LeFleur’s Bluff Education and Tourism Complex."
  },
  {
    name: "Smith Robertson Museum & Cultural Center",
    address: "528 Bloom St, Jackson, MS 39202",
    phone: "(601) 960-1457",
    url: "https://www.jacksonms.gov/smith-robertson-museum",
    type: "arts-culture",
    image: "img/smithroberts.jpg",
    description: "Delve into African American history and culture in Mississippi through thoughtful exhibits and educational programs."
  },
  {
    name: "Old Capitol Museum",
    address: "100 S State St, Jackson, MS 39201",
    phone: "(601) 576-6920",
    url: "https://www.mdah.ms.gov/old-capitol-museum",
    type: "arts-culture",
    image: "img/oldcapitolmuseum.jpg",
    description: "Housed in the historic Old Capitol building, this museum explores Mississippi's political history and legislative legacy through immersive exhibits."
  },
  {
    name: "Mississippi Agriculture & Forestry Museum",
    address: "1150 Lakeland Dr, Jackson, MS 39216",
    phone: "(601) 432-4500",
    url: "https://www.msagmuseum.org/",
    type: "experiences-activities",
    image: "img/agmuseum.jpg",
    description: "Celebrate the state’s agricultural heritage with interactive displays, living history demonstrations, and insights into rural life and forestry practices."
  },
  {
    name: "Medgar and Myrlie Evers Home National Monument",
    address: "2332 Margaret Walker Alexander Dr, Jackson, MS 39213",
    phone: "(601) 965-7100",
    url: "https://www.nps.gov/memy/index.htm",
    type: "arts-culture",
    image: "img/medgarevers.jpg",
    description: "The preserved home of civil rights leader Medgar Evers—a National Historic Landmark turned museum—provides a deeply moving connection to civil rights history."
  },
  {
    name: "LeFleur's Bluff State Park",
    address: "3315 Lakeland Terrace, Jackson, MS 39216",
    phone: "(601) 987-3985",
    url: "https://www.mdwfp.com/parks-destinations/state-parks/lefleurs-bluff/",
    type: "outdoors-recreation",
    image: "img/lefleursbluff.jpg",
    description: "Enjoy hiking, fishing, picnics, playgrounds, and nature trails in a scenic state park."
  },
  {
    name: "Mississippi Museum of Art",
    address: "380 S Lamar St, Jackson, MS 39201",
    phone: "(601) 960-1515",
    url: "https://msmuseumart.org/",
    type: "arts-culture",
    image: "img/msmusofart.jpg",
    description: "Explore regional and national art exhibits in a modern downtown museum."
  },
  {
    name: "Two Mississippi Museums",
    address: "222 North St, Jackson, MS 39201",
    phone: "(601) 576-6800",
    url: "https://twomississippimuseums.com/",
    type: "arts-culture",
    image: "img/twomuseums.jpg",
    description: "Explore the Mississippi Civil Rights Museum and Museum of Mississippi History in one landmark location."
  },
  
  {
    name: "Mississippi Sports Hall of Fame & Museum",
    address: "1152 Lakeland Dr, Jackson, MS 39216",
    phone: "(601) 982-8264",
    url: "https://msfame.com/",
    type: "experiences-activities",
    image: "img/mssportshalloffame.png",
    description: "Celebrate Mississippi's sports legends and history with interactive exhibits."
  },
  // ...add other objects here...
];

export const thingsCategories = [
  {
    category: "Arts & Culture",
    examples: ["Museums", "Galleries", "Theaters", "Historic Sites"],
    description: "Explore Jackson’s rich arts, history, and cultural experiences."
  },
  {
    category: "Family Fun",
    examples: ["Zoos", "Aquariums", "Kids’ Attractions", "Arcades", "Mini-Golf"],
    description: "Fun activities and destinations for families and kids of all ages."
  },
  {
    category: "Outdoors & Recreation",
    examples: ["Parks", "Hiking", "Fishing", "Golf Courses"],
    description: "Enjoy outdoor adventures, nature, and recreational activities."
  },
  {
    category: "Shopping",
    examples: ["Malls", "Boutiques", "Vintage Shops", "Local Markets"],
    description: "Shop local and discover unique finds across Jackson."
  },
  {
    category: "Wellness & Fitness",
    examples: ["Spas", "Yoga Studios", "Gyms", "Wellness Centers"],
    description: "Relax, refresh, and stay fit with Jackson’s wellness spots."
  },
  {
    category: "Entertainment",
    examples: ["Escape Rooms", "Bowling", "Movie Theaters", "Comedy Clubs"],
    description: "Catch a movie, play games, or enjoy live entertainment."
  },
  {
    category: "Community & Learning",
    examples: ["Libraries", "Workshops", "Cultural Centers", "Tours"],
    description: "Connect with community events, education, and cultural learning."
  }
];

// Render things to do cards
// NOTE: This file only exports data arrays. Rendering is handled by page-specific
// carousel or render modules (e.g. `things-to-do-carousel.js`). Removing the
// inline DOMContentLoaded render prevents duplicate UI output when the data
// module is imported as a module by pages.