// Moved from app-data/events-data.js
export const events = [
  {
    name: "Downtown Farmers Market",
    address: "352 E Woodrow Wilson Ave, Jackson, MS 39216",
    date: "2025-09-07",
    recurring: true,
    recurrence: "weekly", // options: weekly, monthly, etc.
    url: "https://jacksonfarmersmarket.com/",
    category: ["community", "kid-friendly", "festivals"],
    descriptionText: "Fresh produce, crafts, and food vendors every Sunday morning.",
    description: "<a href='https://jacksonfarmersmarket.com/' target='_blank'>Fresh produce, crafts, and food vendors every Sunday morning.</a>"
  },
  {
    name: "First Thursday Art Walk",
    address: "Fondren District, Jackson, MS",
    date: "2025-09-04",
    recurring: true,
    recurrence: "monthly", // occurs every first Thursday
    url: "https://fondrendistrict.com/artwalk",
    category: ["festivals", "music", "community"],
    descriptionText: "Monthly art walk featuring galleries, live music, and food trucks.",
    description: "<a href='https://fondrendistrict.com/artwalk' target='_blank'>Monthly art walk featuring galleries, live music, and food trucks.</a>"
  },
  {
    name: "Family Movie Night",
    address: "LeFleur's Bluff State Park, 3315 Lakeland Terrace, Jackson, MS 39216",
    date: "2025-09-12",
    recurring: false,
    url: "https://www.mdwfp.com/parks-destinations/state-parks/lefleurs-bluff/",
    category: ["kid-friendly", "community"],
    descriptionText: "Outdoor movie screening for families. Bring blankets and snacks!",
    description: "<a href='https://www.mdwfp.com/parks-destinations/state-parks/lefleurs-bluff/' target='_blank'>Outdoor movie screening for families. Bring blankets and snacks!</a>"
  },
  {
    name: "Sunday Morning at The District",
    address: "The District at Eastover, 1250 Eastover Dr, Jackson, MS 39211",
    date: "2025-09-07", // first occurrence (Sunday)
    time: "09:00",
    recurring: true,
    recurrence: "weekly",
    recurrenceDay: "Sunday",
    sponsoredBy: "Jackson Run Club",
    url: "https://thedistrictateastover.com/",
    descriptionText: "Weekly Sunday morning event at The District of Eastover starting at 9am, sponsored by Jackson Run Club.",
    description: "<a href='https://thedistrictateastover.com/' target='_blank'>Weekly Sunday morning event at The District of Eastover starting at 9am, sponsored by Jackson Run Club.</a>"
  },
  {
    name: "R&B Wednesday at Names & Faces",
    address: "Names & Faces, Jackson, MS",
    date: "2025-09-03", // first occurrence (Wednesday)
    time: "Evening",
    recurring: true,
    recurrence: "weekly",
    recurrenceDay: "Wednesday",
    url: "https://www.instagram.com/namesandfacesjackson/",
    descriptionText: "The DJ spins the best in classic and contemporary R&B hits while the crowd sings every word. From smooth throwbacks to today’s chart-toppers, it’s the perfect blend of music, energy, and soul. Whether you’re out to vibe with friends, sip on cocktails, or just let the music carry you, R&B Wednesdays is where Jackson comes alive.",
    description: "<a href='https://www.instagram.com/namesandfacesjackson/' target='_blank'>The DJ spins the best in classic and contemporary R&B hits while the crowd sings every word. From smooth throwbacks to today’s chart-toppers, it’s the perfect blend of music, energy, and soul. Whether you’re out to vibe with friends, sip on cocktails, or just let the music carry you, R&B Wednesdays is where Jackson comes alive.</a>"
  }
  ,
  {
    name: "JSU Football vs. Hampton",
    address: "Mississippi Veterans Memorial Stadium, 2531 N State St, Jackson, MS 39216",
    date: "2025-08-30",
    time: "14:00",
    category: ["sports"],
    url: "https://gojsutigers.com/sports/football/schedule",
    descriptionText: "Jackson State University Tigers take on Hampton. Season opener!",
    description: "<a href='https://gojsutigers.com/sports/football/schedule' target='_blank'>Jackson State University Tigers take on Hampton. Season opener!</a>"
  },
  {
    name: "JSU Football vs. Tuskegee",
    address: "Mississippi Veterans Memorial Stadium, 2531 N State St, Jackson, MS 39216",
    date: "2025-09-13",
    time: "14:00",
    category: ["sports"],
    url: "https://gojsutigers.com/sports/football/schedule",
    descriptionText: "Jackson State University Tigers face Tuskegee. Red Out!",
    description: "<a href='https://gojsutigers.com/sports/football/schedule' target='_blank'>Jackson State University Tigers face Tuskegee. Red Out!</a>"
  },
  {
    name: "JSU Football vs. Alabama State (Homecoming)",
    address: "Mississippi Veterans Memorial Stadium, 2531 N State St, Jackson, MS 39216",
    date: "2025-10-11",
    time: "14:30",
    category: ["sports"],
    url: "https://gojsutigers.com/sports/football/schedule",
    descriptionText: "JSU Homecoming! Tigers vs. Alabama State.",
    description: "<a href='https://gojsutigers.com/sports/football/schedule' target='_blank'>JSU Homecoming! Tigers vs. Alabama State.</a>"
  },
  {
    name: "JSU Football vs. Bethune-Cookman",
    address: "Mississippi Veterans Memorial Stadium, 2531 N State St, Jackson, MS 39216",
    date: "2025-11-15",
    time: "12:00",
    category: ["sports"],
    url: "https://gojsutigers.com/sports/football/schedule",
    descriptionText: "Jackson State University Tigers take on Bethune-Cookman. Black Out!",
    description: "<a href='https://gojsutigers.com/sports/football/schedule' target='_blank'>Jackson State University Tigers take on Bethune-Cookman. Black Out!</a>"
  },
  {
    name: "JSU Football vs. Alcorn State",
    address: "Mississippi Veterans Memorial Stadium, 2531 N State St, Jackson, MS 39216",
    date: "2025-11-22",
    time: "14:30",
    category: ["sports"],
    url: "https://gojsutigers.com/sports/football/schedule",
    descriptionText: "Senior Day! JSU Tigers vs. Alcorn State.",
    description: "<a href='https://gojsutigers.com/sports/football/schedule' target='_blank'>Senior Day! JSU Tigers vs. Alcorn State.</a>"
  },
  // Events from VisitJackson.com (October-January)
  {
    name: "Mississippi State Fair",
    address: "1200 Mississippi Street, Jackson, MS 39202",
    date: "2025-10-11",
    endDate: "2025-10-13",
    category: ["festivals", "kid-friendly"],
    url: "https://www.visitjackson.com/events/mississippi-state-fair/",
    descriptionText: "Annual Mississippi State Fair with rides, games, exhibits, and entertainment.",
    description: "<a href='https://www.visitjackson.com/events/mississippi-state-fair/' target='_blank'>Annual Mississippi State Fair with rides, games, exhibits, and entertainment.</a>"
  },
  {
    name: "Pumpkin Adventure",
    address: "Mississippi Agriculture & Forestry Museum, 1150 Lakeland Dr., Jackson, MS 39216",
    date: "2025-10-11",
    endDate: "2025-10-25",
    category: ["kid-friendly", "festivals"],
    url: "https://www.visitjackson.com/events/pumpkin-adventure/",
    descriptionText: "Fall festival with pumpkin patch, hayrides, and family activities.",
    description: "<a href='https://www.visitjackson.com/events/pumpkin-adventure/' target='_blank'>Fall festival with pumpkin patch, hayrides, and family activities.</a>"
  },
  {
    name: "Melody Golding Signs Hometown Mississippi",
    address: "Lemuria Books, 4465 I-55 North, Jackson, MS 39206",
    date: "2025-10-11",
    category: ["community"],
    url: "https://www.visitjackson.com/events/melody-golding-signs-hometown-mississippi/",
    descriptionText: "Book signing event with photographer Melody Golding.",
    description: "<a href='https://www.visitjackson.com/events/melody-golding-signs-hometown-mississippi/' target='_blank'>Book signing event with photographer Melody Golding.</a>"
  },
  {
    name: "Melvins with Special Guest Red Kross",
    address: "Duling Hall, 622 Duling Avenue, Jackson, MS 39216",
    date: "2025-10-11",
    category: ["music"],
    url: "https://www.visitjackson.com/events/melvins-with-red-kross/",
    descriptionText: "Live rock concert featuring The Melvins and Red Kross.",
    description: "<a href='https://www.visitjackson.com/events/melvins-with-red-kross/' target='_blank'>Live rock concert featuring The Melvins and Red Kross.</a>"
  },
  {
    name: "Sunday Screening: The American Revolution",
    address: "Two Mississippi Museums, 222 North St., Jackson, MS 39201",
    date: "2025-10-12",
    category: ["community", "kid-friendly"],
    url: "https://www.visitjackson.com/events/sunday-screening-american-revolution/",
    descriptionText: "Free Sunday film screening of The American Revolution documentary.",
    description: "<a href='https://www.visitjackson.com/events/sunday-screening-american-revolution/' target='_blank'>Free Sunday film screening of The American Revolution documentary.</a>"
  },
  {
    name: "Blue Monday",
    address: "Hal & Mal's, 200 Commerce Street, Jackson, MS 39201",
    date: "2025-10-13",
    recurring: true,
    recurrence: "weekly",
    recurrenceDay: "Monday",
    category: ["music"],
    url: "https://www.visitjackson.com/events/blue-monday/",
    descriptionText: "Weekly blues night featuring live music.",
    description: "<a href='https://www.visitjackson.com/events/blue-monday/' target='_blank'>Weekly blues night featuring live music.</a>"
  },
  {
    name: "Jere Nash Signs Reconstruction in Mississippi",
    address: "Lemuria Books, 4465 I-55 North, Jackson, MS 39206",
    date: "2025-10-14",
    category: ["community"],
    url: "https://www.visitjackson.com/events/jere-nash-signs/",
    descriptionText: "Book signing with author Jere Nash discussing Reconstruction era Mississippi.",
    description: "<a href='https://www.visitjackson.com/events/jere-nash-signs/' target='_blank'>Book signing with author Jere Nash discussing Reconstruction era Mississippi.</a>"
  },
  {
    name: "Jazz Night at Hal & Mal's",
    address: "Hal & Mal's, 200 Commerce Street, Jackson, MS 39201",
    date: "2025-10-14",
    recurring: true,
    recurrence: "weekly",
    recurrenceDay: "Tuesday",
    category: ["music"],
    url: "https://www.visitjackson.com/events/jazz-night/",
    descriptionText: "Weekly Tuesday night jazz performances.",
    description: "<a href='https://www.visitjackson.com/events/jazz-night/' target='_blank'>Weekly Tuesday night jazz performances.</a>"
  },
  {
    name: "Welty Wednesdays",
    address: "Eudora Welty House & Garden, 1109 Pinehurst Street, Jackson, MS 39202",
    date: "2025-10-15",
    recurring: true,
    recurrence: "weekly",
    recurrenceDay: "Wednesday",
    category: ["community"],
    url: "https://www.visitjackson.com/events/welty-wednesdays/",
    descriptionText: "Weekly tours of Eudora Welty's historic home and gardens.",
    description: "<a href='https://www.visitjackson.com/events/welty-wednesdays/' target='_blank'>Weekly tours of Eudora Welty's historic home and gardens.</a>"
  },
  {
    name: "Around the World Wednesdays",
    address: "Smith Park, Yazoo Street, Jackson, MS 39201",
    date: "2025-10-15",
    recurring: true,
    recurrence: "weekly",
    recurrenceDay: "Wednesday",
    category: ["food", "community"],
    url: "https://www.visitjackson.com/events/around-the-world-wednesdays/",
    descriptionText: "Weekly food truck gathering featuring international cuisine.",
    description: "<a href='https://www.visitjackson.com/events/around-the-world-wednesdays/' target='_blank'>Weekly food truck gathering featuring international cuisine.</a>"
  },
  {
    name: "History is Lunch: Melody Golding",
    address: "Two Mississippi Museums, 222 North St., Jackson, MS 39201",
    date: "2025-10-15",
    category: ["community"],
    url: "https://www.visitjackson.com/events/history-is-lunch-melody-golding/",
    descriptionText: "Lunchtime talk by Melody Golding on Mississippi Voices from Hurricane Katrina.",
    description: "<a href='https://www.visitjackson.com/events/history-is-lunch-melody-golding/' target='_blank'>Lunchtime talk by Melody Golding on Mississippi Voices from Hurricane Katrina.</a>"
  },
  {
    name: "New Bourbon Street Jazz Band",
    address: "Hal & Mal's, 200 Commerce Street, Jackson, MS 39201",
    date: "2025-10-15",
    recurring: true,
    category: ["music"],
    url: "https://www.visitjackson.com/events/new-bourbon-jazz-band/",
    descriptionText: "Live jazz performance featuring New Bourbon Street Jazz Band.",
    description: "<a href='https://www.visitjackson.com/events/new-bourbon-jazz-band/' target='_blank'>Live jazz performance featuring New Bourbon Street Jazz Band.</a>"
  },
  {
    name: "Building Resilient Gardens: Adapting to Climate Change",
    address: "Mississippi Museum of Art, 380 S Lamar Street, Jackson, MS 39201",
    date: "2025-10-16",
    category: ["community"],
    url: "https://www.visitjackson.com/events/building-resilient-gardens/",
    descriptionText: "Workshop on sustainable gardening practices.",
    description: "<a href='https://www.visitjackson.com/events/building-resilient-gardens/' target='_blank'>Workshop on sustainable gardening practices.</a>"
  },
  {
    name: "Samyak Shertok Signs No Rhododendron",
    address: "Lemuria Books, 4465 I-55 North, Jackson, MS 39206",
    date: "2025-10-16",
    category: ["community"],
    url: "https://www.visitjackson.com/events/samyak-shertok-signs/",
    descriptionText: "Book signing with author Samyak Shertok.",
    description: "<a href='https://www.visitjackson.com/events/samyak-shertok-signs/' target='_blank'>Book signing with author Samyak Shertok.</a>"
  },
  {
    name: "Live Music in the Courtyard",
    address: "Highland Village, 4500 I-55 North, Jackson, MS 39211",
    date: "2025-10-16",
    recurring: true,
    category: ["music"],
    url: "https://www.visitjackson.com/events/live-music-in-the-courtyard/",
    descriptionText: "Weekly live music in Highland Village courtyard.",
    description: "<a href='https://www.visitjackson.com/events/live-music-in-the-courtyard/' target='_blank'>Weekly live music in Highland Village courtyard.</a>"
  },
  {
    name: "Lagers and Joggers",
    address: "Fertile Ground Beer Co., 800 Manship St, Jackson, MS 39202",
    date: "2025-10-16",
    recurring: true,
    category: ["sports", "community"],
    url: "https://www.visitjackson.com/events/lagers-and-joggers/",
    descriptionText: "Weekly running group followed by craft beer.",
    description: "<a href='https://www.visitjackson.com/events/lagers-and-joggers/' target='_blank'>Weekly running group followed by craft beer.</a>"
  },
  {
    name: "Oktoberfest",
    address: "Fertile Ground Beer Co., 800 Manship Street, Jackson, MS 39202",
    date: "2025-10-17",
    endDate: "2025-10-18",
    category: ["festivals", "food"],
    url: "https://www.visitjackson.com/events/oktoberfest/",
    descriptionText: "German-style beer festival with food, music, and celebration.",
    description: "<a href='https://www.visitjackson.com/events/oktoberfest/' target='_blank'>German-style beer festival with food, music, and celebration.</a>"
  },
  {
    name: "Sunrise Shape-Up",
    address: "Pinnacle Green, Capitol Street, Jackson, MS 39201",
    date: "2025-10-17",
    recurring: true,
    category: ["sports", "community"],
    url: "https://www.visitjackson.com/events/sunrise-shape-up/",
    descriptionText: "Early morning outdoor fitness class.",
    description: "<a href='https://www.visitjackson.com/events/sunrise-shape-up/' target='_blank'>Early morning outdoor fitness class.</a>"
  },
  {
    name: "Life Shards Revisited: Mississippi Remembers Katrina",
    address: "Mississippi Museum of Art, 380 S Lamar St, Jackson, MS 39201",
    date: "2025-10-17",
    category: ["community"],
    url: "https://www.visitjackson.com/events/life-shards-revisited/",
    descriptionText: "Hurricane Katrina remembrance event with documentary screening.",
    description: "<a href='https://www.visitjackson.com/events/life-shards-revisited/' target='_blank'>Hurricane Katrina remembrance event with documentary screening.</a>"
  },
  {
    name: "Sip and Slither",
    address: "MS Museum of Natural Science, 2148 Riverside Dr, Jackson, MS 39202",
    date: "2025-10-17",
    category: ["community"],
    url: "https://www.visitjackson.com/events/sip-and-slither/",
    descriptionText: "Evening at the natural science museum with reptile exhibits and refreshments.",
    description: "<a href='https://www.visitjackson.com/events/sip-and-slither/' target='_blank'>Evening at the natural science museum with reptile exhibits and refreshments.</a>"
  },
  {
    name: "Hangnail Ripoff",
    address: "Hal & Mal's, 200 Commerce Street, Jackson, MS 39201",
    date: "2025-10-17",
    category: ["music"],
    url: "https://www.visitjackson.com/events/hangnail-ripoff/",
    descriptionText: "Live music performance.",
    description: "<a href='https://www.visitjackson.com/events/hangnail-ripoff/' target='_blank'>Live music performance.</a>"
  },
  {
    name: "Belhaven Hills Classic",
    address: "Belhaven Town Center, 800 Manship Street, Jackson, MS 39202",
    date: "2025-10-18",
    category: ["sports"],
    url: "https://www.visitjackson.com/events/belhaven-hills-classic/",
    descriptionText: "Annual running race through Belhaven neighborhood.",
    description: "<a href='https://www.visitjackson.com/events/belhaven-hills-classic/' target='_blank'>Annual running race through Belhaven neighborhood.</a>"
  },
  {
    name: "Boo!seum",
    address: "Mississippi Children's Museum, 2145 Museum Boulevard, Jackson, MS 39202",
    date: "2025-10-18",
    category: ["kid-friendly", "festivals"],
    url: "https://www.visitjackson.com/events/booseum/",
    descriptionText: "Halloween-themed children's museum event.",
    description: "<a href='https://www.visitjackson.com/events/booseum/' target='_blank'>Halloween-themed children's museum event.</a>"
  },
  {
    name: "Wild Wonders Painting Class: Fantastic Fossils",
    address: "Mississippi Museum of Natural Science, 2148 Riverside Drive, Jackson, MS 39202",
    date: "2025-10-18",
    category: ["kid-friendly", "community"],
    url: "https://www.visitjackson.com/events/wild-wonders-fantastic-fossils/",
    descriptionText: "Family-friendly painting workshop focused on fossils.",
    description: "<a href='https://www.visitjackson.com/events/wild-wonders-fantastic-fossils/' target='_blank'>Family-friendly painting workshop focused on fossils.</a>"
  },
  {
    name: "Pumpkins & Prosecco",
    address: "Hal & Mal's, 200 Commerce Street, Jackson, MS 39201",
    date: "2025-10-18",
    category: ["food", "community"],
    url: "https://www.visitjackson.com/events/pumpkins-prosecco/",
    descriptionText: "Fall-themed cocktail and dining event.",
    description: "<a href='https://www.visitjackson.com/events/pumpkins-prosecco/' target='_blank'>Fall-themed cocktail and dining event.</a>"
  },
  {
    name: "Belhaven vs Greensboro College",
    address: "Belhaven Bowl Stadium, 1500 Peachtree Street, Jackson, MS 39202",
    date: "2025-10-18",
    category: ["sports"],
    url: "https://www.visitjackson.com/events/belhaven-vs-greensboro-college/",
    descriptionText: "Belhaven University football game.",
    description: "<a href='https://www.visitjackson.com/events/belhaven-vs-greensboro-college/' target='_blank'>Belhaven University football game.</a>"
  },
  {
    name: "Millsaps vs Maryville College (Homecoming)",
    address: "1701 North State Street, Jackson, MS 39202",
    date: "2025-10-18",
    category: ["sports"],
    url: "https://www.visitjackson.com/events/millsaps-vs-maryville-college-tn-homecoming/",
    descriptionText: "Millsaps College homecoming football game.",
    description: "<a href='https://www.visitjackson.com/events/millsaps-vs-maryville-college-tn-homecoming/' target='_blank'>Millsaps College homecoming football game.</a>"
  },
  {
    name: "Landon Bryant Signing Event",
    address: "Lemuria Books, 4465 I-55 North, Jackson, MS 39206",
    date: "2025-10-18",
    category: ["community"],
    url: "https://www.visitjackson.com/events/landon-bryant-signing/",
    descriptionText: "Book signing with author Landon Bryant.",
    description: "<a href='https://www.visitjackson.com/events/landon-bryant-signing/' target='_blank'>Book signing with author Landon Bryant.</a>"
  },
  {
    name: "Celebrating 50 Years in Glass",
    address: "Pearl River Glass Studio, 142 Millsaps Avenue, Jackson, MS 39202",
    date: "2025-10-18",
    category: ["community"],
    url: "https://www.visitjackson.com/events/celebrating-50-years-in-glass/",
    descriptionText: "Anniversary celebration of Pearl River Glass Studio.",
    description: "<a href='https://www.visitjackson.com/events/celebrating-50-years-in-glass/' target='_blank'>Anniversary celebration of Pearl River Glass Studio.</a>"
  },
  {
    name: "Cross to Bear",
    address: "Two Mississippi Museums, 222 North St., Jackson, MS 39201",
    date: "2025-10-18",
    category: ["community"],
    url: "https://www.visitjackson.com/events/cross-to-bear/",
    descriptionText: "Cultural event and discussion at Two Mississippi Museums.",
    description: "<a href='https://www.visitjackson.com/events/cross-to-bear/' target='_blank'>Cultural event and discussion at Two Mississippi Museums.</a>"
  },
  {
    name: "Sabir & Jones",
    address: "Coffee Prose Midtown, 1619 North West Street, Jackson, MS 39202",
    date: "2025-10-18",
    category: ["music"],
    url: "https://www.visitjackson.com/events/sabir-jones/",
    descriptionText: "Live acoustic performance at Coffee Prose.",
    description: "<a href='https://www.visitjackson.com/events/sabir-jones/' target='_blank'>Live acoustic performance at Coffee Prose.</a>"
  },
  {
    name: "Boo at the Zoo",
    address: "Jackson Zoo, 2918 West Capitol Street, Jackson, MS 39209",
    date: "2025-10-18",
    category: ["kid-friendly", "festivals"],
    url: "https://www.visitjackson.com/events/boo-at-the-zoo/",
    descriptionText: "Halloween event at Jackson Zoo with trick-or-treating and activities.",
    description: "<a href='https://www.visitjackson.com/events/boo-at-the-zoo/' target='_blank'>Halloween event at Jackson Zoo with trick-or-treating and activities.</a>"
  },
  {
    name: "Mississippi Symphony Orchestra: Quad Fusion",
    address: "Duling Hall, 622 Duling Avenue, Jackson, MS 39216",
    date: "2025-10-18",
    category: ["music"],
    url: "https://www.visitjackson.com/events/quad-fusion/",
    descriptionText: "Mississippi Symphony Orchestra performance.",
    description: "<a href='https://www.visitjackson.com/events/quad-fusion/' target='_blank'>Mississippi Symphony Orchestra performance.</a>"
  },
  {
    name: "Toast Mimosa Festival",
    address: "The Plant Venue, 133 Commerce Park Drive, Jackson, MS 39213",
    date: "2025-10-19",
    category: ["food", "festivals"],
    url: "https://www.visitjackson.com/events/toast-mimosa-festival/",
    descriptionText: "Mimosa festival benefiting Briarwood Arts Center.",
    description: "<a href='https://www.visitjackson.com/events/toast-mimosa-festival/' target='_blank'>Mimosa festival benefiting Briarwood Arts Center.</a>"
  },
  {
    name: "Lemuria's 50th Birthday",
    address: "Lemuria Books, 4465 I-55 North, Jackson, MS 39206",
    date: "2025-10-20",
    category: ["community"],
    url: "https://www.visitjackson.com/events/lemurias-50th-birthday/",
    descriptionText: "Celebrating 50 years of Lemuria Books.",
    description: "<a href='https://www.visitjackson.com/events/lemurias-50th-birthday/' target='_blank'>Celebrating 50 years of Lemuria Books.</a>"
  },
  {
    name: "History is Lunch: Jay Wesley and Eddie Johnson",
    address: "Two Mississippi Museums, 222 North St., Jackson, MS 39201",
    date: "2025-10-22",
    category: ["community"],
    url: "https://www.visitjackson.com/events/history-is-lunch-jay-wesley-eddie-johnson/",
    descriptionText: "Lunchtime talk on Life and Tradition of the Mississippi Choctaw.",
    description: "<a href='https://www.visitjackson.com/events/history-is-lunch-jay-wesley-eddie-johnson/' target='_blank'>Lunchtime talk on Life and Tradition of the Mississippi Choctaw.</a>"
  },
  {
    name: "Park After Dark",
    address: "Mississippi Museum of Natural Science, 2148 Riverside Drive, Jackson, MS 39202",
    date: "2025-10-24",
    category: ["kid-friendly", "community"],
    url: "https://www.visitjackson.com/events/park-after-dark/",
    descriptionText: "Evening nature event at the natural science museum.",
    description: "<a href='https://www.visitjackson.com/events/park-after-dark/' target='_blank'>Evening nature event at the natural science museum.</a>"
  },
  {
    name: "Emo Night Karaōke",
    address: "Hal & Mal's, 200 Commerce Street, Jackson, MS 39201",
    date: "2025-10-24",
    category: ["music"],
    url: "https://www.visitjackson.com/events/emo-night-karaoke/",
    descriptionText: "Emo-themed karaoke night.",
    description: "<a href='https://www.visitjackson.com/events/emo-night-karaoke/' target='_blank'>Emo-themed karaoke night.</a>"
  },
  {
    name: "Candlelight: A Haunted Evening of Halloween Classics",
    address: "Old Capitol Museum, 100 State Street, Jackson, MS 39201",
    date: "2025-10-25",
    category: ["music", "festivals"],
    url: "https://www.visitjackson.com/events/candlelight-haunted-evening/",
    descriptionText: "Candlelit classical music performance of Halloween favorites.",
    description: "<a href='https://www.visitjackson.com/events/candlelight-haunted-evening/' target='_blank'>Candlelit classical music performance of Halloween favorites.</a>"
  },
  {
    name: "Trick or Treat and Day of the Dead",
    address: "Two Mississippi Museums, 222 North St., Jackson, MS 39201",
    date: "2025-10-25",
    category: ["kid-friendly", "festivals"],
    url: "https://www.visitjackson.com/events/trick-or-treat-and-day-of-the-dead/",
    descriptionText: "Halloween trick-or-treating and Day of the Dead celebration.",
    description: "<a href='https://www.visitjackson.com/events/trick-or-treat-and-day-of-the-dead/' target='_blank'>Halloween trick-or-treating and Day of the Dead celebration.</a>"
  },
  {
    name: "Wyatt Waters Signs 2026 Calendar",
    address: "Lemuria Books, 4465 I-55 North, Jackson, MS 39206",
    date: "2025-10-25",
    category: ["community"],
    url: "https://www.visitjackson.com/events/wyatt-waters-signs/",
    descriptionText: "Artist Wyatt Waters signs his 2026 calendar.",
    description: "<a href='https://www.visitjackson.com/events/wyatt-waters-signs/' target='_blank'>Artist Wyatt Waters signs his 2026 calendar.</a>"
  },
  {
    name: "BankPlus Red Beans & BBQ Festival",
    address: "Belhaven Town Center, 800 Manship St, Jackson, MS 39202",
    date: "2025-10-25",
    category: ["food", "festivals"],
    url: "https://www.visitjackson.com/events/bankplus-red-beans-bbq-festival/",
    descriptionText: "Annual red beans and BBQ food festival.",
    description: "<a href='https://www.visitjackson.com/events/bankplus-red-beans-bbq-festival/' target='_blank'>Annual red beans and BBQ food festival.</a>"
  },
  {
    name: "Belhaven vs Methodist (Homecoming)",
    address: "Belhaven Bowl Stadium, 1500 Peachtree Street, Jackson, MS 39202",
    date: "2025-10-25",
    category: ["sports"],
    url: "https://www.visitjackson.com/events/belhaven-vs-methodist-homecoming/",
    descriptionText: "Belhaven University homecoming football game.",
    description: "<a href='https://www.visitjackson.com/events/belhaven-vs-methodist-homecoming/' target='_blank'>Belhaven University homecoming football game.</a>"
  },
  {
    name: "Paella on the Patio",
    address: "Hal & Mal's, 200 Commerce Street, Jackson, MS 39201",
    date: "2025-10-25",
    category: ["food"],
    url: "https://www.visitjackson.com/events/paella-on-the-patio/",
    descriptionText: "Traditional Spanish paella dining event.",
    description: "<a href='https://www.visitjackson.com/events/paella-on-the-patio/' target='_blank'>Traditional Spanish paella dining event.</a>"
  },
  {
    name: "Fondren Fright",
    address: "Brook Drive, Jackson, MS 39206",
    date: "2025-10-25",
    category: ["kid-friendly", "festivals"],
    url: "https://www.visitjackson.com/events/fondren-fright/",
    descriptionText: "Halloween festivities in Fondren neighborhood.",
    description: "<a href='https://www.visitjackson.com/events/fondren-fright/' target='_blank'>Halloween festivities in Fondren neighborhood.</a>"
  },
  {
    name: "Nick Shoulders",
    address: "Hal & Mal's, 200 Commerce Street, Jackson, MS 39201",
    date: "2025-10-25",
    category: ["music"],
    url: "https://www.visitjackson.com/events/nick-shoulders/",
    descriptionText: "Live country music performance by Nick Shoulders.",
    description: "<a href='https://www.visitjackson.com/events/nick-shoulders/' target='_blank'>Live country music performance by Nick Shoulders.</a>"
  },
  {
    name: "National Folk Festival",
    address: "Downtown Jackson, MS",
    date: "2025-11-07",
    endDate: "2025-11-09",
    category: ["festivals", "music"],
    url: "https://www.visitjackson.com/nationalfolkfestival/",
    descriptionText: "Three free days of music, craft, dance, and food celebrating traditional arts.",
    description: "<a href='https://www.visitjackson.com/nationalfolkfestival/' target='_blank'>Three free days of music, craft, dance, and food celebrating traditional arts.</a>"
  }
];

export const eventCategories = [
  {
    category: "Music",
    examples: ["Concerts", "Live Bands", "Open Mic Nights"],
    description: "Jackson’s music scene from local artists to touring headliners."
  },
  {
    category: "Festivals",
    examples: ["Food Festivals", "Cultural Celebrations", "Seasonal Events"],
    description: "Big gatherings that bring the community together to celebrate food, culture, and fun."
  },
  {
    category: "Sports",
    examples: ["Games", "Tournaments", "Fitness Events"],
    description: "From pro games to local leagues and fitness challenges."
  },
  {
    category: "Community",
    examples: ["Fundraisers", "Block Parties", "Local Gatherings"],
    description: "Neighborhood and citywide events that bring people together."
  },
  {
    category: "Kid Friendly",
    examples: ["Family Events", "Children’s Activities"],
    description: "Fun and safe events for kids and families."
  }
];