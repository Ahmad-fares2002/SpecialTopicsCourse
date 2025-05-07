import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const API_KEY = import.meta.env.VITE_TMDB_MOVIES_API_KEY;

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!movie) {
    return (
      <Typography variant="h6" textAlign="center">
        Movie not found.
      </Typography>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: "center" }}>
        <img
          src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
          alt={movie.title}
          width="100%"
          style={{
            borderRadius: "12px",
            marginBottom: "1.5rem",
            maxHeight: "450px",
            objectFit: "cover",
          }}
        />
        <Typography variant="h3" gutterBottom>
          {movie.title}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          {movie.overview}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          Rating: {movie.vote_average}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 4 }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="secondary"
            href={`https://www.themoviedb.org/movie/${movie.id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on TMDb
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default MovieDetails;
