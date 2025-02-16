import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import vdayImage from "../images/vDay.webp";
import { rgbaColors } from "../constants/colors";

export default function MonthSpecial() {
  return (
    <Box sx={{ mt: { xs: 2, sm: 4 } }}>
      <Card sx={{ maxWidth: 2000 }}>
        <CardActionArea href="/women?color=red">
          <CardMedia
            sx={{ height: { xs: 400, md: 600 } }}
            image={vdayImage}
            title="Hero image"
          />
          <Box
            py={2}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              right: 0,
              textAlign: "center",
              transform: "translate(-50%, -50%)",
              backgroundColor: `rgba(${rgbaColors.white},.75)`,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  lg: 30,
                  xs: 20,
                },
              }}
              mb={2}
            >
              Valentine's Day Special
            </Typography>
            <Button variant="outlined" size="large">
              {/* TODO CHECK WITH NEHA */}
              {/* <Button variant="contained" size="large" color="secondary"> */}
              Shop now
            </Button>
          </Box>
        </CardActionArea>
      </Card>
    </Box>
  );
}
