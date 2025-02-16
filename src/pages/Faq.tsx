import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import * as React from "react";
import FloatingFollow from "../components/FloatingFollow.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import { faqItems } from "../constants.js";
import { colors } from "../constants/colors";

export default function Faq() {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(
        isExpanded
          ? [...expanded, panel]
          : expanded.filter((item) => item !== panel)
      );
    };

  return (
    <>
      <Navbar />
      <Container
        id="faq"
        sx={{
          pt: { xs: 4, sm: 8 },
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          Frequently asked questions
        </Typography>
        <Box sx={{ width: "100%" }}>
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded.includes(item.title)}
              onChange={handleChange(item.title)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon sx={{ color: `${colors.vanDykeBrown}` }} />
                }
                aria-controls={`${item.title}-content`}
                id={`${item.title}-header`}
              >
                <Typography variant="h6">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {item.faq.map((info, newIndex) => (
                  <Box sx={{ py: 1 }} key={newIndex}>
                    <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                      {info.question}
                    </Typography>
                    <Typography gutterBottom>{info.answer}</Typography>
                    <Divider sx={{ mt: 2 }} />
                  </Box>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
      <FloatingFollow />
      <Footer />
    </>
  );
}
