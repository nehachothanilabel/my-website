import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import FloatingFollow from "../components/FloatingFollow.tsx";
import { pageNotFoundItems, socialLinks } from "../constants";
import Typography from "@mui/material/Typography";

export default function PageNotFound() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 376px)",
          textAlign: "center",
          mx: 2,
        }}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Page Not Found
        </Typography>
        <Typography sx={{ mb: 2 }}>
          The page you're looking for doesn't exist. Try visiting one of these
          sections:
        </Typography>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 3,
            mb: 2,
          }}
        >
          {pageNotFoundItems.map((item) => (
            <Button
              key={item.title}
              href={item.href}
              size="large"
              sx={{ fontWeight: "bold" }}
              variant="outlined"
            >
              {item.title}
            </Button>
          ))}
        </Toolbar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <IconButton
              color="info"
              target="_blank"
              href={socialLinks.facebook}
              aria-label="Facebook"
              sx={{ alignSelf: "center" }}
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton
              color="success"
              target="_blank"
              href={socialLinks.whatsApp}
              aria-label="Whatsapp"
              sx={{ alignSelf: "center" }}
            >
              <WhatsAppIcon fontSize="large" />
            </IconButton>
            <IconButton
              color="error"
              target="_blank"
              href={socialLinks.instagram}
              aria-label="Instagram"
              sx={{ alignSelf: "center" }}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </Box>
      <FloatingFollow />
      <Footer />
    </>
  );
}
