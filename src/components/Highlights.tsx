import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { highlightsItems } from "../constants";

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4 },
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography variant="h4" gutterBottom>
            HIGHLIGHTS
          </Typography>
          <Typography variant="body1">
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer
            support and precision in every detail.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {highlightsItems.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  {item.icon}
                  <Typography sx={{ fontWeight: "bold" }} gutterBottom>
                    {item.title}
                  </Typography>
                </Box>
                <Typography variant="body2">{item.description}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
