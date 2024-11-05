import "dotenv/config.js";
import "../../config/dataBase.js";
import Itinerary from "../Itinerary.js";


let itineraries = [
  {
    photo:
      "https://images.unsplash.com/photo-1712750438045-bfc52257d309?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 100, currency: "YEN", amount: 2 },
    name: "Callejera",
    duration: 2,
    likes: 0,
    hashtags: "#explore #adventure",
    city: 2
  },
  {
    photo:
      "https://images.unsplash.com/photo-1710005631991-09fc168c0dda?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 120, currency: "YEN", amount: 2 },
    name: "lake of love",
    duration: 3,
    likes: 0,
    hashtags: "#sightseeing #fun",
    city: 2
  },
  {
    photo:
      "https://images.unsplash.com/photo-1706782804418-a791eb8dc8e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 150, currency: "YEN", amount: 3 },
    name: "radio tower",
    duration: 1,
    likes: 0,
    hashtags: "#walkingtour #culture",
    city: 5
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1683120756391-5eded4fd1718?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 90, currency: "EUR", amount: 1 },
    name: "Eiffel Tower",
    duration: 2,
    likes: 0,
    hashtags: "#historic #fun",
    city: 3
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1661914097200-65469aa701d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 110, currency: "EUR", amount: 2 },
    name: "courthouse",
    duration: 3,
    likes: 0,
    hashtags: "#adventure #foodie",
    city: 7
  },
  {
    photo:
      "https://images.unsplash.com/photo-1683918891920-f8ac52b6a03e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 75, currency: "EUR", amount: 1 },
    name: "Tuileries Garden",
    duration: 1,
    likes: 0,
    hashtags: "#relax #sightseeing",
    city: 4
  },
  {
    photo:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=1499&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 85, currency: "USE", amount: 1 },
    name: "Statue of Liberty",
    duration: 2,
    likes: 0,
    hashtags: "#outdoor #adventure",
    city: 1
  },
  {
    photo:
      "https://images.unsplash.com/photo-1617105488205-25f93b4aff36?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 115, currency: "USE", amount: 2 },
    name: "dock",
    duration: 3,
    likes: 0,
    hashtags: "#culture #photography",
    city: 9
  },
  {
    photo:
      "https://images.unsplash.com/photo-1605785511309-35b2c56f4e14?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 95, currency: "USE", amount: 1 },
    name: "Brooklyn Bridge",
    duration: 1,
    likes: 0,
    hashtags: "#sightseeing #walking",
    city: 11
  },
  {
    photo:
      "https://images.unsplash.com/photo-1719601398911-4181da5f1d7b?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 130, currency: "EGP", amount: 2 },
    name: "Sofitel Cairo Nile El Gezirah",
    duration: 4,
    likes: 0,
    hashtags: "#luxury #experience",
    city: 11
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1694475193074-914ee0eb7308?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 95, currency: "EGP", amount: 1 },
    name: "South Sinai Governorate",
    duration: 2,
    likes: 0,
    hashtags: "#walkingtour #explore",
    city: 15
  },
  {
    photo:
      "https://plus.unsplash.com/premium_photo-1697729501403-fdb0b267a027?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 60, currency: "EGP", amount: 1 },
    name: "Al Bujairi Heritage Park",
    duration: 1,
    likes: 0,
    hashtags: "#nature #relax",
    city: 15
  },
  {
    photo:
      "https://images.unsplash.com/photo-1707684600350-7e681de42724?q=80&w=1371&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: { worth: 70, currency: "AUD", amount: 1 },
    name: "Ópera de Sídney",
    duration: 2,
    likes: 0,
    hashtags: "#food #culture",
    city: 17
  }
];


Itinerary.insertMany(itineraries);