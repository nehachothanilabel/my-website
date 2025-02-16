import menImage from "../images/men1.jpg";
import womenImage from "../images/women1.jpg";
import kidsImage from "../images/kids1.jpg";

export const kidsCollection = [
  {
    id: "k1",
    title: "Pajama Set",
    price: "$88",
    defaultImage: kidsImage,
    allImages: [menImage, womenImage, kidsImage],
    moreInfo: [
      {
        title: "Fit & Fabric",
        description: "Details about the fit and fabric of this product.",
      },
      {
        title: "Description",
        description: "This pajama set is made with premium cotton for comfort.",
      },
    ],
  },
  {
    id: "k2",
    title: "Pajama Short Set",
    price: "$78",
    defaultImage: kidsImage,
    allImages: [menImage, womenImage, kidsImage],
    moreInfo: [
      {
        title: "Fit & Fabric",
        description: "Details about the fit and fabric of this product.",
      },
      {
        title: "Description",
        description: "This pajama set is made with premium cotton for comfort.",
      },
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
  },
  {
    id: "k3",
    title: "Lounge Robe",
    price: "$88",
    defaultImage: kidsImage,
    allImages: [menImage, womenImage, kidsImage],
    moreInfo: [
      {
        title: "Fit & Fabric",
        description: "Details about the fit and fabric of this product.",
      },
      {
        title: "Description",
        description: "This pajama set is made with premium cotton for comfort.",
      },
    ],
  },
  {
    id: "k4",
    title: "The Straight",
    price: "$138",
    defaultImage: kidsImage,
    allImages: [menImage, womenImage, kidsImage],
    moreInfo: [
      {
        title: "Fit & Fabric",
        description: "Details about the fit and fabric of this product.",
      },
      {
        title: "Description",
        description: "This pajama set is made with premium cotton for comfort.",
      },
    ],
  },
];
