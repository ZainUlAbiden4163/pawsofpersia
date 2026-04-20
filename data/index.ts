export type StudCat = {
  id: string;
  name: string;
  color: string;
  age: string;
  lineage: string;
  servicePrice: number;
  description: string;
  image: string;
  achievements: string[];
};

export const studCats: StudCat[] = [
  {
    id: "s001",
    name: "Shah Rukh",
    color: "Silver Chinchilla",
    age: "3 years",
    lineage: "Imported Persian — Grand Champion bloodline",
    servicePrice: 15000,
    description:
      "Our flagship stud. Shah Rukh is a silver chinchilla male with an exceptionally dense coat, flat face, and champion genetics. His offspring consistently produce show-quality kittens with strong bone structure and brilliant eye colour.",
    image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=600&q=80",
    achievements: ["Grand Champion lineage", "Health tested", "DNA certified", "3 champion litters"],
  },
  {
    id: "s002",
    name: "Qaisar",
    color: "White Persian",
    age: "2.5 years",
    lineage: "Pure Persian — verified 5-generation pedigree",
    servicePrice: 12000,
    description:
      "Qaisar is a stunning pure-white stud with copper eyes and an ultra-flat Persian profile. His pedigree is verified across five generations. Paired with queens of any colour, he reliably produces long-coated, flat-faced kittens.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=600&q=80",
    achievements: ["5-gen pedigree", "Health tested", "FIV/FeLV negative", "Excellent temperament"],
  },
];

export type FAQ = { question: string; answer: string };

export const faqs: FAQ[] = [
  {
    question: "What vaccinations do your kittens receive?",
    answer:
      "All kittens receive their first FVRCP (feline distemper combo) vaccination at 8 weeks and a booster at 12 weeks before leaving our cattery. A full vaccination record is provided with every kitten.",
  },
  {
    question: "Do you deliver across Pakistan?",
    answer:
      "Yes. We arrange safe transport to Lahore, Islamabad, Karachi, and other major cities via trusted pet courier. Delivery charges vary by distance. Contact us for a quote.",
  },
  {
    question: "At what age do kittens leave the cattery?",
    answer:
      "Our kittens leave at a minimum of 12 weeks. This ensures they are fully weaned, socialised, vaccinated, and emotionally ready for their new home.",
  },
  {
    question: "Can I visit the cattery before purchasing?",
    answer:
      "Absolutely. We welcome visits by appointment in Rawalpindi. Seeing our environment and meeting the parents in person is something we encourage.",
  },
  {
    question: "What documents come with the kitten?",
    answer:
      "Each kitten comes with a health certificate, vaccination record, deworming record, pedigree certificate (where applicable), and a care guide booklet.",
  },
  {
    question: "Do you offer stud services to outside queens?",
    answer:
      "Yes. We offer stud services for registered Persian queens after a mandatory health screening. Please contact us at least two weeks before your queen's expected heat cycle.",
  },
];

export type Testimonial = {
  name: string;
  city: string;
  text: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Fatima A.",
    city: "Lahore",
    text: "We got our silver chinchilla Sultan from Paws of Persia and he is absolutely breathtaking. The breeder was transparent, professional, and clearly loves these animals. Sultan was healthy, socialised, and came with all his papers. 10/10.",
    rating: 5,
  },
  {
    name: "Usman K.",
    city: "Karachi",
    text: "I had been searching for a genuine Persian breeder in Pakistan for months. Most were selling mixed breeds at inflated prices. Paws of Persia is the real deal — genuine pedigrees, excellent temperaments, immaculate cattery.",
    rating: 5,
  },
  {
    name: "Sana R.",
    city: "Islamabad",
    text: "Our golden Persian Noor arrived safe and healthy. She settled in within two days. The care guide they provided was incredibly detailed. This is how a professional breeder should operate.",
    rating: 5,
  },
  {
    name: "Ali M.",
    city: "Rawalpindi",
    text: "Used their stud service for my Persian queen. The process was smooth, professional, and the litter was stunning. Shah Rukh is clearly a top-tier male. Will use again.",
    rating: 5,
  },
];

export type CareSection = {
  title: string;
  icon: string;
  content: string[];
};

export const careSections: CareSection[] = [
  {
    title: "Grooming",
    icon: "✦",
    content: [
      "Brush your Persian's coat daily with a wide-tooth metal comb to prevent matting.",
      "Bathe every 4–6 weeks using a tearless, cat-safe shampoo. Dry thoroughly to avoid chill.",
      "Wipe the eye area gently with a damp cotton pad daily — flat-faced Persians are prone to tear staining.",
      "Trim nails every 2–3 weeks and check ears weekly for wax buildup.",
    ],
  },
  {
    title: "Diet & Nutrition",
    icon: "◆",
    content: [
      "Feed a high-protein, grain-free diet — wet food is preferred to keep Persians hydrated.",
      "Avoid fish-heavy diets long term; poultry and lamb are better primary proteins.",
      "Fresh water must always be available. Many Persians prefer a water fountain over a bowl.",
      "Supplement with omega-3 fish oil capsules for coat shine and skin health.",
    ],
  },
  {
    title: "Health Care",
    icon: "◈",
    content: [
      "Schedule annual veterinary checkups and keep vaccinations current (FVRCP + Rabies).",
      "Persians are predisposed to PKD (Polycystic Kidney Disease) — always buy from DNA-tested parents.",
      "Dental hygiene is important; brush teeth weekly or use dental treats.",
      "Watch for signs of breathing difficulty — flat-faced Persians can develop respiratory sensitivities.",
    ],
  },
  {
    title: "New Owner Checklist",
    icon: "◉",
    content: [
      "Set up a quiet, warm room before your kitten arrives. Avoid overwhelming them on day one.",
      "Stock up: stainless steel food bowl, water fountain, clumping litter, wide litter box.",
      "Book a vet appointment within 72 hours of arrival for a new-kitten health check.",
      "Purchase a metal wide-tooth comb and slicker brush before pickup day.",
      "Keep a kitten-proof zone — no exposed wires, toxic plants, or escape routes.",
    ],
  },
];
