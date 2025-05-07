import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ mt: 4, py: 2, textAlign: "center", bgcolor: "#f0f0f0" }}
    >
      <Typography variant="body2" color="textSecondary">
        © 2025 Movie Explorer By Ahmad AbuHajeer. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
