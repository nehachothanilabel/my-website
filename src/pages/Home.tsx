import * as React from "react";
import Favorite from "../components/Favorites.tsx";
import FloatingFollow from "../components/FloatingFollow.tsx";
import Footer from "../components/Footer.tsx";
import HeroImage from "../components/HeroImage.tsx";
import Highlights from "../components/Highlights.tsx";
import MonthSpecial from "../components/MonthSpecial.tsx";
import Navbar from "../components/Navbar.tsx";
import Testimonials from "../components/Testimonials.tsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroImage />
      <Favorite />
      <MonthSpecial />
      <Testimonials />
      <Highlights />
      <FloatingFollow />
      <Footer />
    </>
  );
}
