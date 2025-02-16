import Diversity1Icon from "@mui/icons-material/Diversity1";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import * as React from "react";
import { socialLinks } from "../constants";

const actions = [
  {
    icon: <FacebookIcon color="info" />,
    name: "Facebook",
    href: socialLinks.facebook,
  },
  {
    icon: <WhatsAppIcon color="success" />,
    name: "WhatsApp",
    href: socialLinks.whatsApp,
  },
  {
    icon: <InstagramIcon color="error" />,
    name: "Instagram",
    href: socialLinks.instagram,
  },
];

export default function FloatingFollow() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleActionClick = (href) => {
    window.open(href, "_blank");
    handleClose();
  };

  return (
    <Box
      sx={{
        height: 330,
        transform: "translateZ(0px)",
        flexGrow: 1,
        position: "fixed",
        bottom: 0,
        right: 0,
        zIndex: 5,
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<Diversity1Icon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            color="primary"
            onClick={() => handleActionClick(action.href)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
