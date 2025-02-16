import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { colors } from "../constants/colors";

export default function ProductViewDesktop({ product }) {
  const [mainImage, setMainImage] = useState(product.defaultImage);

  return (
    <>
      <Box sx={{ p: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Thumbnails */}
          <Grid size={{ xs: 1.5 }}>
            <Box
              sx={{
                maxHeight: "700px",
                overflowY: "auto",
                borderRadius: "8px",
                border: `1px solid ${colors.gray}`,
                p: 1,
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {product.allImages.map((src, index) => (
                <Grid key={index}>
                  <Box
                    component="img"
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setMainImage(src)}
                    sx={{
                      width: "100%",
                      borderRadius: "8px",
                      cursor: "pointer",
                      border:
                        mainImage === src
                          ? `2px solid ${colors.black}`
                          : "2px solid transparent",
                      "&:hover": { border: `2px solid ${colors.black}` },
                    }}
                  />
                </Grid>
              ))}
            </Box>
          </Grid>

          {/* Main Image */}
          <Grid size={{ xs: 5 }}>
            <Box sx={{ position: "relative" }}>
              <Box
                component="img"
                src={mainImage}
                alt={product.title}
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </Grid>

          {/* Details */}
          <Grid size={{ xs: 5.5 }}>
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
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
