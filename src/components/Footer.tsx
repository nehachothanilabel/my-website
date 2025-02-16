import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { socialLinks } from "../constants";
import { useTheme } from "@mui/material/styles";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ mt: 1 }}>
      {"Copyright © "}
      <Link
        sx={{ color: "text.secondary" }}
        href="https://nehachothanilabel.com/"
        target="_blank"
      >
        NCL
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
    >
      <Divider sx={{ mt: 6 }} />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 2 },
          py: { xs: 2, sm: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row" },
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {/* FOR PHASE 2 */}
          {/* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            NCL
            <Typography
              variant="body2"
              gutterBottom
              sx={{ fontWeight: 600, mt: 2 }}
            >
              Join the newsletter
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
              Subscribe for weekly updates. No spams ever!
            </Typography>
            <InputLabel htmlFor="phone-newsletter">Phone number</InputLabel>
            <Stack direction="row" spacing={1} useFlexGap>
              <TextField
                id="phone-newsletter"
                hiddenLabel
                size="small"
                variant="outlined"
                fullWidth
                aria-label="Enter your phone number"
                placeholder="Your phone number"
                slotProps={{
                  htmlInput: {
                    autoComplete: "off",
                    "aria-label": "Enter your phone number",
                  },
                }}
                sx={{ width: "250px" }}
                required
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ flexShrink: 0 }}
              >
                Subscribe
              </Button>
            </Stack>
          </Box>
        </Box> */}
          <Box
            sx={{
              display: { xs: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              Product
            </Typography>
            <Link color="text.secondary" variant="body2" href="/men">
              Men
            </Link>
            <Link color="text.secondary" variant="body2" href="/women">
              Women
            </Link>
            <Link color="text.secondary" variant="body2" href="/faq">
              FAQs
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              Company
            </Typography>
            <Link color="text.secondary" variant="body2" href="/about">
              About us
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "flex" },
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "medium" }}>
              Legal
            </Typography>
            <Link color="text.secondary" variant="body2" href="/contact">
              Contact
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pt: { xs: 2 },
            width: "100%",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <div>
            <Copyright />
          </div>
          <Stack direction="row" spacing={1}>
            <IconButton
              size="small"
              target="_blank"
              href={socialLinks.facebook}
              aria-label="Facebook"
              sx={{
                alignSelf: "center",
                color: theme.palette.text.secondary,
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              size="small"
              target="_blank"
              href={socialLinks.whatsApp}
              aria-label="Whatsapp"
              sx={{ alignSelf: "center", color: theme.palette.text.secondary }}
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              size="small"
              target="_blank"
              href={socialLinks.instagram}
              aria-label="Instagram"
              sx={{ alignSelf: "center", color: theme.palette.text.secondary }}
            >
              <InstagramIcon />
            </IconButton>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
