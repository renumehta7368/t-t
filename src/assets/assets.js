
// Importing all required assets
import bandaana from './bandana.jpeg'; 
import bandana2 from './bandana2.jpeg';
import bandana3 from './bandana3.jpeg'; 
import bandana4 from './bandana4.jpeg';
import bow6 from './bow6.jpeg';
import bow7 from './bow7.jpeg';
import collar5 from './collar5.jpeg';
import collar2 from './collar2.jpeg';
import collar3 from './collar3.jpeg';
import collar4 from './collar4.jpeg';
import frock1 from './frock1.jpeg';
import frock2 from './frock2.jpeg';
import frock5 from './frock5.jpeg';
import sailor1 from './sailor.jpeg'; 
import sailor2 from './sailor2.jpeg';
import sailor3 from './sailor3.jpeg';
import sailor4 from './sailor4.jpeg';
import harness1 from './harness1.jpeg';
import harness2 from './harness2.jpeg';
import harness6 from './harness6.jpeg';
import shirt1 from './shirt1.jpeg';
import shirt2 from './shirt2.jpeg';
import shirt3 from './shirt3.jpeg';
import shirt4 from './shirt4.jpeg';
import walk from './walk.jpeg';
import set from './set.jpeg';
import logo from './logo.jpeg';
import cart_icon from './cart_icon.jpeg';
import contact_img from './contact_img.jpeg';
import dropdown_icon from './dropdown_icon.jpeg';
import exchange_icon from './exchange_icon.jpeg';
import menu_icon from './menu_icon.jpeg';
import profile_icon from './profile_icon.jpeg';
import quality_icon from './quality_icon.jpeg';
import razorpay_logo from './razorpay_logo.jpeg';
import search_icon from './search_icon.jpeg';
import star_dull_icon from './star_dull_icon.jpeg';
import star_icon from './star_icon.jpeg';
import stripe_logo from './stripe_logo.png';

// Organizing assets into a structured object
export const assets = {
  icons: {
    
    search_icon,
    star_dull_icon,
    star_icon,
    stripe_logo,
  },
  logo,
  bandanas: {
    bandana1: bandaana, 
    bandana2,
    bandana3,
    bandana4,
    cart_icon,
    contact_img,
    dropdown_icon,
    exchange_icon,
    menu_icon,
    profile_icon,
    quality_icon,
    razorpay_logo,
  },
  bows: {
    bow6,
    bow7,
  },
  collars: {
    collar5,
    collar2,
    collar3,
    collar4,
  },
  frocks: {
    frock1,
    frock2,
    frock5,
  },
  sailors: {
    sailor1, // Updated to match consistent naming
    sailor2,
    sailor3,
    sailor4,
  },
  harnesses: {
    harness1,
    harness2,
    harness6,
  },
  
 
  shirts: {
    shirt1,
    shirt2,
    shirt3,
    shirt4,
  },
  others: {
    walk,
    set,
  },
};

// Exporting individual product details
export const products = [
  {
    _id: "aaaaa",
    name: "Harness Joy Adjustable Dog Harness - XS, S, M, L, XL",
    description:
      "Designed for safety and comfort, our adjustable harness features soft padding, breathable fabric, and a secure fit, perfect for daily walks or adventures.",
    price: 799,
    image: [harness2, ],
    category: "walk",
    subCategory: "harness",
    sizes: ["XS", "S", "M", "L", "XL"],
    date: 1234567,
    bestseller: true,
  },
  {
  _id: "aaaaa",
  name: "salior bow-  S, M, L",
  description:
    "Designed for safety and comfort, our adjustable harness features soft padding, breathable fabric, and a secure fit, perfect for daily walks or adventures.",
  price: 199,
  image: [sailor3, sailor2],
  category: "cloth",
  subCategory: "bow",
  sizes: ["XS", "S", "M", "L", "XL"],
  date: 1234567,
  bestseller: true,
},
{
  _id: "aaaaa",
  name: "collar - XS, S, M, L, XL",
  description:
    "Designed for safety and comfort, our adjustable harness features soft padding, breathable fabric, and a secure fit, perfect for daily walks or adventures.",
  price: 349,
  image: [collar3, collar4],
  category: "walk",
  subCategory: "collar",
  sizes: ["XS", "S", "M", "L", "XL"],
  date: 1234567,
  bestseller: false,
},
  {
    _id: "aaaax",
    name: " Bandana - XS, S, M, L, XL",
    description:
      "A stylish and lightweight bandana for your pet, perfect for any occasion. Made with soft, breathable fabric to ensure comfort.",
    price: 210,
    image: [bandana4, bandaana, bandana2],
    category: "cloth",
    subCategory: "bandana",
    sizes: ["S", "M", "L", "XL"],
    date: 1716637645448,
    bestseller: true,
  },
  {
    _id: "aaaay",
    name: "collar - XS, S, M, L, XL",
    description:
      "A cute and comfortable frock for your furry friend, designed with premium fabric for durability and charm.",
    price: 349,
    image: [collar5, collar2, collar3, collar4],
    category: "walk",
    subCategory: "collar",
    sizes: ["S", "M", "L", "XL"],
    date: 1716638745448,
    bestseller: false,
  },
  {
    _id: "aaaaz",
    name: " Harness - XS, S, M, L, XL",
    description:
      "A durable and adjustable harness to keep your pet secure and comfortable during walks or outdoor adventures.",
    price: 499,
    image: [harness1, harness2, harness6],
    category: "walk",
    subCategory: "harness",
    sizes: ["S", "M", "L", "XL"],
    date: 1716639845448,
    bestseller: false,
  },
  {
    _id: "aaaba",
    name: " Leash - XS, S, M, L, XL",
    description:
      "A strong and durable leash to ensure your pet's safety while providing you with comfortable handling.",
    price: 1599,
    image: [set, set,set],
    category: "walk",
    subCategory: "leash",
    sizes: ["S", "M", "L", "XL"],
    date: 1716640945448,
    bestseller: false,
  },
  {
    _id: "aaabb",
    name: "Collar - XS, S, M, L, XL",
    description:
      "A stylish and adjustable collar for your pet, made with high-quality material to ensure durability and comfort.",
    price: 349,
    image: [collar4,collar2,collar3],
    category: "walk",
    subCategory: "Collar",
    sizes: ["S", "M", "L", "XL"],
    date: 1716642045448,
    bestseller: false,
  },
  {
    _id: "aaabg",
    name: "Pet Bowtie -  S, M, L",
    description:
      "A charming and stylish bowtie for your pet, ideal for parties and special occasions.",
    price: 199,
    image: [bow6,bow7,bow6, bow7],
    category: "cloth",
    subCategory: "bow",
    sizes: ["S","M","L"],
    date: 1716647545448,
    bestseller: false,
  },
]

