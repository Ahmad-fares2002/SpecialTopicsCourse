import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const API_KEY = import.meta.env.VITE_TMDB_MOVIES_API_KEY;
const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h5" gutterBottom textAlign="center">
        Popular Movies
      </Typography>
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={6} sm={4} md={3}>
            <Card
              component={Link}
              to={`/movies/${movie.id}`}
              sx={{ width: "100%", textDecoration: "none" }}
            >
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                sx={{ width: "200px", height: 300, objectFit: "cover" }}
              />
              <CardContent>
                <Typography
                  variant="body1"
                  component="div"
                  textAlign="center"
                  noWrap
                >
                  {movie.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Movies;
