export type Kitten = {
  id: string;
  name: string;
  gender: "Male" | "Female";
  age: string;
  color: string;
  price: number;
  status: "Available" | "Reserved" | "Sold";
  description: string;
  vaccinated: boolean;
  dewormed: boolean;
  image: string;
  traits: string[];
};

export const kittens: Kitten[] = [
  {
    id: "k001",
    name: "Sultan",
    gender: "Male",
    age: "10 weeks",
    color: "Silver Chinchilla",
    price: 35000,
    status: "Available",
    description:
      "An exceptionally silky silver chinchilla male with emerald-green eyes and a cloud-like coat. Sultan carries himself with quiet dignity — a true aristocrat from the first day.",
    vaccinated: true,
    dewormed: true,
    image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=600&q=80",
    traits: ["Calm", "Affectionate", "Show quality"],
  },
  {
    id: "k002",
    name: "Layla",
    gender: "Female",
    age: "12 weeks",
    color: "White",
    price: 40000,
    status: "Available",
    description:
      "Pure snow-white with copper eyes that glow like embers. Layla is playful yet gentle, already socialised with children and other pets.",
    vaccinated: true,
    dewormed: true,
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80",
    traits: ["Playful", "Social", "Purebred"],
  },
  {
    id: "k003",
    name: "Mirza",
    gender: "Male",
    age: "8 weeks",
    color: "Blue Persian",
    price: 38000,
    status: "Reserved",
    description:
      "A rare blue Persian with a dense, plush coat and steel-grey eyes. Mirza has an old-soul temperament — peaceful, regal, and deeply bonded to his humans.",
    vaccinated: true,
    dewormed: false,
    image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=600&q=80",
    traits: ["Gentle", "Regal", "Indoor-perfect"],
  },
  {
    id: "k004",
    name: "Noor",
    gender: "Female",
    age: "11 weeks",
    color: "Golden Persian",
    price: 45000,
    status: "Available",
    description:
      "Our most coveted golden Persian, Noor's warm honey coat and expressive amber eyes make her impossible to ignore. Champion bloodline.",
    vaccinated: true,
    dewormed: true,
    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=600&q=80",
    traits: ["Champion line", "Golden coat", "Rare"],
  },
  {
    id: "k005",
    name: "Shahzad",
    gender: "Male",
    age: "9 weeks",
    color: "Cream Tabby",
    price: 32000,
    status: "Available",
    description:
      "Cream tabby with subtle classic markings and a thick, cottony coat. Shahzad is the most curious of the litter — always exploring, always charming.",
    vaccinated: true,
    dewormed: true,
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=600&q=80",
    traits: ["Curious", "Energetic", "Tabby markings"],
  },
  {
    id: "k006",
    name: "Zara",
    gender: "Female",
    age: "13 weeks",
    color: "Black Persian",
    price: 36000,
    status: "Available",
    description:
      "Jet black with a coat so dense it absorbs light like velvet. Zara is mysterious, elegant, and surprisingly vocal — she will tell you exactly what she wants.",
    vaccinated: true,
    dewormed: true,
    image: "https://images.unsplash.com/photo-1555009393-f20bdb245c4d?w=600&q=80",
    traits: ["Vocal", "Mysterious", "Velvet coat"],
  },
];
