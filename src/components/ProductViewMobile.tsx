import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import Button from "@mui/material/Button";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { colors } from "../constants/colors";

const ProductViewMobile = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next and previous buttons
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === product.allImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.allImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        maxWidth: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        {/* Images */}
        <Box
          sx={{
            display: "flex",
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {product.allImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Product ${index + 1}`}
              style={{
                width: "100%",
              }}
            />
          ))}
        </Box>

        {/* Left Arrow */}
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
          }}
          onClick={handlePrev}
        >
          <KeyboardDoubleArrowLeftIcon color="primary" fontSize="large" />
        </IconButton>

        {/* Right Arrow */}
        <IconButton
          sx={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
          }}
          onClick={handleNext}
        >
          <KeyboardDoubleArrowRightIcon color="primary" fontSize="large" />
        </IconButton>
      </Box>

      {/* Pagination Dots */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 3 }}>
        {product.allImages.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor:
                currentIndex === index ? colors.vanDykeBrown : colors.gray,
              margin: "0 5px",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </Box>

      <Box
        sx={{ mx: { xs: 2, sm: 4 }, my: { xs: 2, sm: 4 }, textAlign: "left" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: 2,
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            {product.title}
          </Typography>
          {/* TODO PRICE FOR LATER */}
          {/* <Typography variant="h6" fontWeight="bold">
            {product.price}
          </Typography> */}
        </Box>

        <Box sx={{ my: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Size:
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {product.sizes.map((size) => (
              <Button
                key={size}
                variant="outlined"
                disabled={!product.availableSizes.includes(size)}
              >
                {size}
              </Button>
            ))}
          </Box>
        </Box>

        {product.moreInfo.map((info, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: `${colors.vanDykeBrown}` }} />
              }
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {info.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">{info.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default ProductViewMobile;
