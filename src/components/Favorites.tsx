import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { favoriteItems } from "../constants";
import { rgbaColors } from "../constants/colors";

export default function Favorite() {
  return (
    <Box
      sx={{
        mx: { xs: 2, sm: 4 },
        mt: { xs: 4 },
        textAlign: { sm: "left", md: "center" },
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }} color="primary.main">
        OUR FAVORITES
      </Typography>
      <Grid container spacing={2} columns={12}>
        {favoriteItems.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
            <Card sx={{ height: "100%" }}>
              <CardActionArea
                href={item.href}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.img}
                  alt={item.title}
                  sx={{ flexGrow: 1 }}
                />
                <Box
                  color="text.secondary"
                  sx={{
                    padding: 1,
                    position: "absolute",
                    zIndex: 0,
                    bottom: 0,
                    width: "100%",
                    backgroundColor: `rgba(${rgbaColors.black},.4)`,
                  }}
                >
                  {item.title}
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
