import { Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { kidsCollection } from "../collectionData/kidsCollection.tsx";
import { mensCollection } from "../collectionData/mensCollection.tsx";
import { womensCollection } from "../collectionData/womensCollection.tsx";
import FloatingFollow from "../components/FloatingFollow.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import ProductViewDesktop from "../components/ProductViewDesktop.tsx";
import ProductViewMobile from "../components/ProductViewMobile.tsx";
import PageNotFound from "../pages/PageNotFound.tsx";

export default function Product() {
  const { id } = useParams();

  const allCollections = [
    ...mensCollection,
    ...womensCollection,
    ...kidsCollection,
  ];

  // Find the product by ID
  const product = allCollections.find((item) => item.id === id);

  if (!product) {
    return <PageNotFound />;
  }

  return (
    <>
      <Navbar />
      {/* TODO DECIDE IF DISPLAY SHOULD BE SM OR MD */}
      <Box
        sx={{
          display: {
            md: "none",
          },
        }}
      >
        <ProductViewMobile product={product} />
      </Box>

      {/* TODO DECIDE IF DISPLAY SHOULD BE SM OR MD */}
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <ProductViewDesktop product={product} />
      </Box>

      <FloatingFollow />
      <Footer />
    </>
  );
}
