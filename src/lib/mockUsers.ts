export interface User {
  id: string;
  name: string;
  age: number;
  county: string;
  town: string;
  bio: string;
  interests: string[];
  photo: string;
  distance?: number;
  lat: number;
  lng: number;
  tribe?: string;
  religion?: string;
}

export const mockUsers: User[] = [
  {
    id: "1",
    name: "Amina",
    age: 26,
    county: "Nairobi",
    town: "Westlands",
    bio: "Love good food, hikes, and Sheng banter. Looking for someone genuine.",
    interests: ["Food", "Hiking", "Music", "Travel"],
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    lat: -1.268,
    lng: 36.811,
    tribe: "Kikuyu",
    religion: "Christian",
  },
  {
    id: "2",
    name: "Kevin",
    age: 29,
    county: "Mombasa",
    town: "Nyali",
    bio: "Beach lover, entrepreneur. Let's grab nyama choma.",
    interests: ["Beach", "Business", "Football", "Cooking"],
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    lat: -4.043,
    lng: 39.668,
    tribe: "Luo",
    religion: "Christian",
  },
  {
    id: "3",
    name: "Faith",
    age: 24,
    county: "Kisumu",
    town: "Milimani",
    bio: "Student mode on. Church on Sundays, fun the rest of the week.",
    interests: ["Church", "Reading", "Dance", "Art"],
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    lat: -0.091,
    lng: 34.768,
    tribe: "Luo",
    religion: "Christian",
  },
  {
    id: "4",
    name: "Brian",
    age: 31,
    county: "Kiambu",
    town: "Thika",
    bio: "Professional in tech. Coffee dates preferred.",
    interests: ["Tech", "Coffee", "Gym", "Podcasts"],
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    lat: -1.039,
    lng: 37.069,
    tribe: "Kikuyu",
    religion: "Christian",
  },
  {
    id: "5",
    name: "Zuri",
    age: 27,
    county: "Nairobi",
    town: "Kilimani",
    bio: "Creative soul. Photography and street food enthusiast.",
    interests: ["Photography", "Food", "Art", "Nightlife"],
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=500&fit=crop",
    lat: -1.292,
    lng: 36.782,
    tribe: "Kamba",
    religion: "Muslim",
  },
];
