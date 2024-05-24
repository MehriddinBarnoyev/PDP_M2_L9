import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, py: 5, pt: 4, width: "100%" }}>
      <Box display="flex" justifyContent="center">
        <Typography variant="h4" color="textPrimary">
          Footer
        </Typography>
      </Box>
      <Typography variant="body2" align="center" color="textSecondary">
        Something here to give the footer a purpose! <br />
        Copyright © Your Website 2024.
      </Typography>
    </Box>
  );
}
