import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import * as React from "react";
import FloatingFollow from "../components/FloatingFollow.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import aboutUsImage from "../images/about.webp";

export default function About() {
  return (
    <>
      <Navbar />

      {/* About Neha Chothani Label */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ mx: { xs: 2, sm: 4 }, mt: { xs: 2, sm: 4 } }}
      >
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardMedia
              component="img"
              image={aboutUsImage}
              alt="Fashion Boutique"
              sx={{ objectFit: "cover", height: "100%" }}
            />
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Designed to Celebrate You
                {/* Style for Every Body"
                  "Empowering You, One Stitch at a Time"
                  "Fashion That Celebrates You"
                  "Feel Beautiful, Be Comfortable"
                  "Confidence Woven Into Every Thread"
                  "Redefining Style, Embracing You"
                  "Timeless Fashion for Real People"
                  "Where Elegance Feels Effortless"
                  "Designed to Celebrate You"
                  "Wear Your Confidence"
                */}
              </Typography>
              <Typography variant="body1">
                Welcome to Neha Chothani label—where fashion meets comfort, and
                every body is celebrated. We believe that style isn’t just about
                what you wear; it’s about how it makes you feel. That’s why
                we’ve created a collection designed for real people with real
                lives, embracing every curve, edge, and unique shape along the
                way. Whether you're dressing up for a special occasion or
                slipping into something effortless for a casual day out, our
                pieces are made to make you feel as comfortable as they are
                stunning. At Neha Chothani label, we don’t believe in
                one-size-fits-all beauty standards. We celebrate diversity and
                design for every body type because everyone deserves to feel
                confident and beautiful in what they wear. Our approach to
                fashion is rooted in inclusivity, quality, and timeless
                style—pieces that not only fit well but feel like they were made
                just for you. We source premium fabrics that feel luxurious
                against your skin, crafting garments that move with you
                throughout your day. Every stitch is thoughtfully placed to
                highlight your natural beauty and ensure all-day comfort. From
                wardrobe staples to statement pieces, our collections are
                designed to empower you to embrace your personal style, radiate
                confidence, and feel amazing—no matter the occasion. Here’s to a
                world where everyone feels seen, celebrated, and stylish.
                Welcome to the Neha Chothani label family.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* FROM THE FOUNDER */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ mx: { xs: 2, sm: 4 }, mt: { xs: 4, sm: 8 } }}
      >
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          <Card>
            <CardMedia
              component="img"
              image={aboutUsImage}
              alt="Fashion Boutique"
              sx={{ objectFit: "cover", height: "100%" }}
            />
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                From the founder
              </Typography>
              <Typography variant="body1">
                Fashion has always been more than just clothing to me—it’s a
                powerful form of self-expression, a way to tell stories without
                words. As a designer, my journey has been shaped by my deep
                passion for art, craftsmanship, and the belief that every
                individual deserves to feel confident and beautiful in what they
                wear. I founded this brand with a vision to create timeless
                pieces that celebrate the uniqueness of every body, every style,
                and every occasion. For me, fashion isn't about trends; it’s
                about designing pieces that make you feel like your best
                self—pieces that empower you to embrace who you are, inside and
                out. Our collections are born from a commitment to quality,
                sustainability, and inclusivity. I strive to create designs that
                not only capture elegance and innovation but are also accessible
                and comfortable for all. Every fabric, every stitch, every
                silhouette is carefully considered to ensure it reflects our
                dedication to both artistry and functionality. I believe that
                fashion should be as diverse as the people who wear it. That’s
                why our pieces are made to fit all body types, making you feel
                seen and celebrated, regardless of size or shape. Whether you're
                dressing for a special event or for everyday moments, my aim is
                for each piece to bring you joy and confidence. Thank you for
                being part of this journey with me. It’s an honor to create for
                you, and I can’t wait to continue designing for your
                ever-evolving style.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <Card>
            <CardMedia
              component="img"
              image={aboutUsImage}
              alt="Fashion Boutique"
              sx={{ objectFit: "cover", height: "100%" }}
            />
          </Card>
        </Grid>
      </Grid>
      <FloatingFollow />
      <Footer />
    </>
  );
}
