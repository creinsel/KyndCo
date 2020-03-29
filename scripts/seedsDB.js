const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/KyndCo");

const kindSeed = [
  {
    task: "Hold a door open for someone",
    description:
      "Whether entering or leaving...be nice and hold the door open for the person in front or behind you.",
    category: ["Others"],
    tier: 1,
    points: 1
  },
  {
    task: "Give someone a compliment",
    description: "An unexpected kind word can really make someone's day.",
    category: ["Others"],
    tier: 1,
    points: 1
  },
  {
    task: "Find out something new about a coworker",
    description:
      "We all get in the habit of breezing past content on social media, though it’s actually worth the effort of making the Internet a positive and constructive place.",
    category: ["Others"],
    tier: 1,
    points: 1
  },
  {
    task: "Plant a tree",
    description: "Make a difference in your environment and life!",
    category: ["World"],
    tier: 1,
    points: 1
  },
  {
    task: "Leave quarters at the laundromat",
    description:
      "Doing laundry can be expensive. Surprise someone and leave extra quarters next to a washer and dryer.",
    category: ["Others"],
    tier: 1,
    points: 1
  },
  {
    task: "Write a positive comment on a website or blog",
    description:
      "Read an awesome article or blog post? Send a little love to the author.",
    category: ["Others", "World"],
    tier: 1,
    points: 1
  },
  {
    task: "Text someone good morning or good night",
    description:
      "Kick-start someone’s day and/or make sure it ends on the right note.",
    category: ["Others"],
    tier: 1,
    points: 1
  },
  {
    task: "Reply to a post you enjoy",
    description:
      "We all get in the habit of breezing past content on social media, though it’s actually worth the effort of making the Internet a positive and constructive place.",
    category: ["Others", "World"],
    tier: 1,
    points: 1
  },
  {
    task: "Turn your computer off overnight",
    description:
      "Not only does this help the planet, but your bank account too",
    category: ["World"],
    tier: 1,
    points: 1
  },
  {
    task: "Lower the thermostat in your home",
    description:
      "Changing the temperature by just one degree can save you 10% on your energy use in a year.",
    category: ["World"],
    tier: 1,
    points: 1
  },
  {
    task: "Water your plants",
    description:
      "Think of your plants like you do your pets - they need nutrients to survive!",
    category: ["Self", "World"],
    tier: 1,
    points: 1
  },
  {
    task: "Take a hot bath",
    description:
      "Soaking in a hot tub, preferably with Epsom salt and aromatherapy oils, can do wonders for sore muscles and a worn-out spirit. Light a candle and turn on some relaxing music to add to the experience.",
    category: ["Self"],
    tier: 1,
    points: 1
  },
  {
    task: "Go for a walk",
    description:
      "Ideally, this will be in a favorite park or neighborhood. But it could be as simple as a walk around the block. Moving your legs, breathing the outside air, and taking in the sights and sounds will naturally increase blood flow and endorphins, thereby warming your body and bettering your mood.",
    category: ["Self"],
    tier: 1,
    points: 1
  },
  {
    task: "Buy a special treat",
    description:
      "Candles, jewelry, a good book, a trinket from an antique or thrift store, a bar of chocolate, flowers, a latte from a local coffee shop—there are so many small purchases that can make a big difference in how you feel, if only for a few moments.",
    category: ["Self"],
    tier: 1,
    points: 1
  },
  {
    task: "Meditate",
    description:
      "Setting aside the time to simply be—for a few minutes or a few hours—tells your inner taskmaster to simmer down and be still. Use candles, soft music, dim lights, and comfy cushions during meditation to help set the mood, and slow, rhythmic breathing will guide you into a relaxed state.",
    category: ["Self"],
    tier: 1,
    points: 1
  },
  {
    task: "Schedule a massage",
    description:
      "Touch is a powerful form of pain relief and endorphin release. Giving yourself permission to make an appointment with a massage therapist sends the message that you are worthy of tenderness, care, and relaxation. Your body, mind, and spirit will thank you.",
    category: ["Self"],
    tier: 1,
    points: 1
  },
  {
    task: "Let someone merge into traffic with a wave & a smile",
    description:
      "Driving can be rough enough, be kind on the roads.  It's safer too!",
    category: ["World"],
    tier: 1,
    points: 1
  },
  {
    task: "Ride your bike or walk",
    description:
      "Multi-task like a champion: get some exercise on your errands run or daily commute.",
    category: ["World"],
    tier: 1,
    points: 1
  },
  {
    task: "Organize a Clean Up Day",
    description:
      "We live in a beautiful world! Let’s work together to keep it that way.",
    category: ["World"],
    tier: 1,
    points: 1
  },
  {
    task: "Drink more water",
    description:
      "When you’re healthy and energetic, it is much easier to be kind.",
    category: ["Self"],
    tier: 1,
    points: 1
  },
  {
    task: "Donate used books to a library",
    description: "Give the gift of literacy",
    category: ["World"],
    tier: 1,
    points: 1
  },
  {
    task: "Foster a pet up for adoption",
    description:
      "If you’re not prepared to make the leap of adopting a pet, give fostering a try! There are so many animals waiting to be placed, and your kindness can help a lot with their transition.",
    category: ["World"],
    tier: 1,
    points: 1
  },
  {
    task: "Tutor someone",
    description:
      "Helping someone learn can be beneficial to both teacher and student!",
    category: ["Others"],
    tier: 1,
    points: 1
  }
];

db.KindActs.remove({})
  .then(() => db.KindActs.collection.insertMany(kindSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
