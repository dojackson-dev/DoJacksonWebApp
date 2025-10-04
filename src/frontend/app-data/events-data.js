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