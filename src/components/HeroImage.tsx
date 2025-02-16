import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import heroImage from "../images/dress.jpeg";

export default function HeroImage() {
  return (
    <Box sx={{ mx: { xs: 2, sm: 4 }, mt: { xs: 2, sm: 4 } }}>
      <Card sx={{ maxWidth: 2000 }}>
        <CardActionArea href="/product/w9">
          <CardMedia
            sx={{ height: { xs: 400, sm: 700 } }}
            image={heroImage}
            title="Hero image"
          />
        </CardActionArea>
      </Card>
    </Box>
  );
}
