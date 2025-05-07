import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Movies from "./pages/movies.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
