import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BrushIcon from "@mui/icons-material/Brush";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import HandymanIcon from "@mui/icons-material/Handyman";
import StyleIcon from "@mui/icons-material/Style";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import Avatar from "@mui/material/Avatar";
import { colors } from "./constants/colors";
import blueDressGoldenFlower4 from "./images/dress/blueDressGoldenFlower4.JPG";
import goldenAccentsDress4 from "./images/dress/goldenAccentsDress4.JPG";
import greenDressGoldAccents3 from "./images/dress/greenDressGoldAccents3.JPG";
import redGoldenBlouseDress3 from "./images/dress/redGoldenBlouseDress3.JPG";

export const socialLinks = {
  facebook: "https://www.facebook.com/nehachothanilabel",
  whatsApp:
    "https://api.whatsapp.com/send?phone=918928588222&text=Hi!%20I%20want%20to%20shop%20on%20the%Neha%20Chothani%20website,%20and%20have%20a%20question",
  instagram: "https://www.instagram.com/nehachothanilabel",
};

export const navItems = [
  { title: "Men", href: "/men" },
  { title: "Women", href: "/women" },
  // { title: "Kids", href: "/kids" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const pageNotFoundItems = [
  { title: "Men", href: "/men" },
  { title: "Women", href: "/women" },
  // { title: "Kids", href: "/kids" },
];

export const comingSoonItems = [
  // { title: "Men", href: "/men" },
  { title: "Women", href: "/women" },
  // { title: "Kids", href: "/kids" },
];

export const favoriteItems = [
  {
    img: redGoldenBlouseDress3,
    title: "Scarlet Radiance",
    href: "/product/w13",
  },
  {
    img: goldenAccentsDress4,
    title: "Elysian Glow",
    href: "/product/w8",
  },
  {
    img: greenDressGoldAccents3,
    title: "Emerald Majesty",
    href: "/product/w10",
  },
  {
    img: blueDressGoldenFlower4,
    title: "Golden Bloom",
    href: "/product/w7",
  },
];

export const faqItems = [
  {
    title: "General Information",
    faq: [
      { question: "Where is Neha Chothani label located?", answer: "Answer" },
      { question: "What are your store hours?", answer: "Answer" },
      { question: "How can I contact the boutique?", answer: "Answer" },
      { question: "Do you have parking available?", answer: "Answer" },
      {
        question: "Do you offer any personalized shopping services?",
        answer: "Answer",
      },
    ],
  },
  {
    title: "Product Information",
    faq: [
      {
        question: "What kind of clothing and accessories do you sell?",
        answer: "Answer",
      },
      {
        question: "Are all items in-store displayed on your website?",
        answer: "Answer",
      },
      {
        question: "Do you carry plus sizes or petite sizes?",
        answer: "Answer",
      },
    ],
  },
  {
    title: "Shopping Policies",
    faq: [
      {
        question: "Can I place an order online or over the phone?",
        answer: "Answer",
      },
      {
        question: "Do you allow holds or reservations for items?",
        answer: "Answer",
      },
      { question: "What is your return or exchange policy?", answer: "Answer" },
      { question: "Can I request alterations for clothing?", answer: "Answer" },
    ],
  },
  {
    title: "Miscellaneous",
    faq: [
      {
        question: "Can I request a specific item to be stocked?",
        answer: "Answer",
      },
      {
        question: "Do you collaborate with designers or offer custom designs?",
        answer: "Answer",
      },
    ],
  },
  {
    title: "Customer Care",
    faq: [
      {
        question: "How do I get in touch with your Customer Care Team?",
        answer:
          "Call or Whatsapp us on + 91 89285 88222. Contact hours: Mondays to Saturdays 9.30am to 06.00pm. You can also email us on nehachothanilabel@gmail.com.",
      },

      {
        question: "When will the Customer Care Team respond to my query?",
        answer:
          "Our Customer Care Team, will get in touch with you within 24 hours to help you resolve your query.",
      },
    ],
  },
];

export const userTestimonials = [
  {
    avatar: (
      <Avatar
        alt="Praty Paidikondala"
        src=""
        sx={{ bgcolor: colors.vanDykeBrown }}
      />
    ),
    name: "Praty Paidikondala",
    testimonial:
      "This boutique is a hidden gem! Not only do they have a stunning collection of ready-to-wear outfits, but their personalized clothing service is truly exceptional. Neha worked closely with me to design a custom dress for a special event, and it turned out perfect. I’ve never felt so stylish and unique!",
  },
  {
    avatar: (
      <Avatar alt="Pari Parmar" src="" sx={{ bgcolor: colors.vanDykeBrown }} />
    ),
    name: "Pari Parmar",
    testimonial:
      "This boutique goes above and beyond! The personalized service makes me feel like royalty. They crafted a gorgeous evening gown for me that perfectly matched my vision. It’s rare to find a place that combines style, quality, and impeccable customer care like this.",
  },
  {
    avatar: (
      <Avatar alt="Vishal Rao" src="" sx={{ bgcolor: colors.vanDykeBrown }} />
    ),
    name: "Vishal Rao",
    testimonial:
      "I absolutely love shopping here! The staff is incredibly helpful, and the personalized clothing options are a dream come true. I had a custom suit tailored for me, and it fits like a glove. I always get compliments when I wear their creations. Highly recommend!",
  },
  {
    avatar: (
      <Avatar
        alt="Mansi Ghorpade"
        src=""
        sx={{ bgcolor: colors.vanDykeBrown }}
      />
    ),
    name: "Mansi Ghorpade",
    testimonial:
      "I cannot praise this boutique enough! The service was absolutely amazing—friendly, attentive, and so professional. On top of that, their prices were surprisingly reasonable for such exceptional quality. I bought a gorgeous dress here, and the craftsmanship and attention to detail are unmatched. I’ll definitely be coming back for more!",
  },
  {
    avatar: (
      <Avatar
        alt="Hitesh Kulkarni"
        src=""
        sx={{ bgcolor: colors.vanDykeBrown }}
      />
    ),
    name: "Hitesh Kulkarni",
    testimonial:
      "This boutique truly delivers on every front! The staff went out of their way to make sure I found exactly what I was looking for, all while staying within my budget. The quality of their clothing is phenomenal—luxurious fabrics and perfect stitching. For the price, it’s an absolute steal. Highly recommended!",
  },
  {
    avatar: (
      <Avatar
        alt="Hetal Deshpande"
        src=""
        sx={{ bgcolor: colors.vanDykeBrown }}
      />
    ),
    name: "Hetal Deshpande",
    testimonial:
      "The boutique is my go-to place for unique and personalized clothing. I had a traditional outfit made for a family event, and it exceeded my expectations. The team is so talented and friendly, making the entire process enjoyable. This place is a fashion lover’s paradise!",
  },
];

export const highlightsItems = [
  {
    icon: <DesignServicesIcon />,
    title: "Exquisite Personalized Clothing",
    description:
      "Crafting custom outfits tailored to your unique style and measurements.",
  },
  {
    icon: <StyleIcon />,
    title: "Elegant Off-the-Rack Styles",
    description:
      "A stunning range of pre-designed outfits for every occasion, ready to wear.",
  },
  {
    icon: <HandymanIcon />,
    title: "Exceptional Craftsmanship",
    description:
      "Premium fabrics and meticulous attention to detail in every piece.",
  },
  {
    icon: <AttachMoneyIcon />,
    title: "Affordable Luxury",
    description:
      "Fashion-forward styles crafted with high-quality materials, all at prices that fit your budget.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Outstanding Customer Service",
    description:
      "A friendly, knowledgeable team dedicated to making your shopping experience seamless.",
  },
  {
    icon: <BrushIcon />,
    title: "Exclusive Designer Collaborations",
    description:
      "Featuring limited-edition pieces and collaborations with talented designers.",
  },
];
