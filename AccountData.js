import Account from "../../Models/AccountPattern";
import Category from "../../Models/Category";

export const CATEGORIES = [
  new Category("c1", "Extrovert", "#f5428d"),
  new Category("c2", "Introvert", "#f54242"),
  new Category("c3", "Optimistic", "#f5a442"),
  new Category("c4", "Pessimistic", "#f5d142"),
  new Category("c5", "Open-Minded", "#368dff"),
  new Category("c6", "Closed-Minded", "#41d95d"),
  new Category("c7", "Organized", "#9eecff"),
  new Category("c8", "Spontaneous", "#b9ffb0"),
  new Category("c9", "Analytical", "#ffc7ff"),
  new Category("c10", "Creative", "#47fced"),
];

export const ACCOUNTS = [
  new Account(
    "#A01",
    ["c1", "c3"],
    "Nigel Ling",
    26,
    "Male",
    "Hi there! 😊 I'm Amy, 23 years old 🎉 and currently studying at the University of the Arts London 🎨📚. I absolutely love hiking 🥾🌿—exploring nature always gives me so much energy! I also enjoy going out and meeting new people 🤝✨ to learn about different cultures, stories, and perspectives 🌍💡. Can't wait to connect with you! 🌟",
    ["Drinking", "Party", "Music"],
    "North London",
    ["Chinese", "Cantonese", "English", "Italian"],
    ["Explorer Hiker", "Diving Lover"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg"
  ),

  new Account(
    "#A02",
    ["c1", "c4"],
    "Alex Morgan",
    21,
    "Female",
    "Hey! 🌟 I'm Alex, a 28-year-old travel enthusiast 🗺️✈️ with a passion for photography 📸 and storytelling 🖋️. I’ve traveled to 15 countries so far, and I’m always on the lookout for my next adventure! 🏞️🏖️ If you're into discovering hidden gems and trying out unique cuisines 🍜🍣, let's connect!",
    ["Travel", "Photography", "Cooking"],
    "Central London",
    ["English", "Spanish", "French"],
    ["World Explorer", "Culinary Adventurer"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/A_view_of_Grand_Canyon.jpg/800px-A_view_of_Grand_Canyon.jpg"
  ),
  new Account(
    "#A03",
    ["c2", "c4"],
    "Ryan Smith",
    29,
    "Male",
    "Hi there! 👋 I'm Ryan, 31 years old and a tech enthusiast by profession 💻. In my free time, I love to backpack across mountain ranges 🏔️, camp under the stars ✨, and read sci-fi novels 📚. Nature is my escape, and I’d love to share some travel tips or even go on a hike together!",
    ["Hiking", "Camping", "Books"],
    "East London",
    ["English", "German"],
    ["Mountain Wanderer", "Star Gazer"],
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Camping_in_a_forest.jpg/800px-Camping_in_a_forest.jpg"
  ),
];
