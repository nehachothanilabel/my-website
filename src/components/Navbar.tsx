import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";
import { useLocation } from "react-router-dom";
import { navItems } from "../constants";
import Logo from "../images/logo.png";

const drawerWidth = 240;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();
  const theme = useTheme();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/">
        <img
          src={Logo}
          alt="Logo"
          height={35}
          style={{ backgroundColor: theme.palette.primary.main }}
        />
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }} href={item.href}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        mt: { xs: "56px", sm: "64px" },
      }}
    >
      <AppBar component="nav">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            NCL
          </Typography> */}
          <Link
            href="/"
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          >
            <img src={Logo} alt="Logo" height={64} />
          </Link>
          {/* ALL THE MENU ITEMS */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.title}
                href={item.href}
                variant="outlined"
                sx={{
                  fontWeight: "bold",
                  color: theme.palette.primary.contrastText,
                  borderColor:
                    location.pathname === item.href
                      ? theme.palette.primary.contrastText
                      : theme.palette.primary.main,
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          {/* 3 Line icon (only for mobile) */}
          <IconButton
            sx={{
              color: theme.palette.primary.contrastText,
              mr: 2,
              display: { sm: "none" },
            }}
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          {/* SEARCH AND WHATSAPP */}
          <div>
            {/* <IconButton color="inherit" aria-label="Search">
              <SearchIcon />
            </IconButton> */}

            <IconButton
              aria-label="fingerprint"
              target="_blank"
              href={
                "https://api.whatsapp.com/send?phone=918928588222&text=Hi!%20I%20want%20to%20shop%20on%20the%Neha%20Chothani%20website,%20and%20have%20a%20question"
              }
            >
              <WhatsAppIcon
                sx={{
                  color: theme.palette.primary.contrastText,
                  ml: 1,
                }}
              />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="left"
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
