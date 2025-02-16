import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Faq from "./pages/Faq.tsx";
import Home from "./pages/Home.tsx";
import Kids from "./pages/Kids.tsx";
import customTheme from "./customTheme.tsx";
import ComingSoon from "./pages/ComingSoon.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import Product from "./pages/Product.tsx";
import Women from "./pages/Women.tsx";

const theme = customTheme;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="men" element={<ComingSoon />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="faq" element={<Faq />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
