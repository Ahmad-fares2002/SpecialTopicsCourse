import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", py: 6 }}>
      <Box>
        <img
          src="https://cdn-icons-png.flaticon.com/512/833/833314.png"
          alt="movie icon"
          width={120}
          style={{ marginBottom: "1rem" }}
        />
        <Typography variant="h4" gutterBottom>
          Movie Explorer
        </Typography>
        <Typography variant="body1" paragraph>
          Discover and browse popular movies with ease.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/movies"
        >
          Browse Movies
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
