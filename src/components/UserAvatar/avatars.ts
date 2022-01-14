type Avatar = { id: number; url: string; alt: string };

const Avatars: Avatar[] = [
  { id: 0, url: "/avatars/msn-boneco.png", alt: "Boneco" },
  { id: 1, url: "/avatars/ut1.png", alt: "Flower" },
  { id: 2, url: "/avatars/astronaut.png", alt: "Astronaut" },
  { id: 3, url: "/avatars/brown frog.png", alt: "Brown Frog" },
  { id: 4, url: "/avatars/cow.png", alt: "Cow" },
  { id: 5, url: "/avatars/leaves.png", alt: "Leaves" },
  { id: 6, url: "/avatars/pink flower.png", alt: "Pink Flower" },
  { id: 7, url: "/avatars/sunflower.png", alt: "Sunflower" },
  { id: 8, url: "/avatars/sunset.png", alt: "Sunset" },
  { id: 9, url: "/avatars/surfer.png", alt: "Surfer" },
  { id: 10, url: "/avatars/ut2.png", alt: "Ball" },
  { id: 11, url: "/avatars/ut3.png", alt: "Chess" },
  { id: 12, url: "/avatars/ut4.png", alt: "Sun" },
  { id: 13, url: "/avatars/ut5.png", alt: "Space Rocket" },
  { id: 14, url: "/avatars/ut6.png", alt: "Duck" },
  { id: 15, url: "/avatars/ut7.png", alt: "Dog" },
  { id: 16, url: "/avatars/ut8.png", alt: "Bike" },
  { id: 17, url: "/avatars/ut9.png", alt: "Palm" },
  { id: 18, url: "/avatars/ut10.png", alt: "Horse" },
  { id: 19, url: "/avatars/ut11.png", alt: "Skater" },
  { id: 20, url: "/avatars/waves.png", alt: "Waves" },
];

export const getAvatar = (index: string): Avatar => Avatars[<any>index];

export default Avatars;
