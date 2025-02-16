import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import * as React from "react";
import FloatingFollow from "../components/FloatingFollow.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import { socialLinks } from "../constants";
import contactUsImage from "../images/contact.webp";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <Card sx={{ maxWidth: 2000 }}>
        <CardMedia
          sx={{ height: { xs: 400, md: 600 } }}
          image={contactUsImage}
          title="Contact us image"
        />
      </Card>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box textAlign="center" sx={{ mb: 4 }}>
          <Typography variant="h4" color="primary" gutterBottom>
            LET'S <strong>TALK</strong>
          </Typography>

          <Typography variant="h6">
            If you have any queries related to our products or your order,
            kindly Call or Whatsapp us on + 91 89285 88222.
          </Typography>
          <Typography variant="h6">
            Contact hours: Mondays to Saturdays 9.30am to 06.00pm. You can also
            email us on nehachothanilabel@gmail.com.
          </Typography>

          <Divider sx={{ mt: 4, mb: 4 }} />

          <Box sx={{ mt: 2 }}>
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
        </Box>
      </Container>
      <FloatingFollow />
      <Footer />
    </>
  );
}
