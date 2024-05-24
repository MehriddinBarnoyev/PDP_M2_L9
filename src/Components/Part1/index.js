import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

export default function Part1() {
  const theme = useTheme();
  console.log(theme);

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "60vh" }}
        sx={{
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Box textAlign="center">
            <Typography variant="h2" color="textPrimary">
              Album layout
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don't simply skip over it entirely.
            </Typography>
            <Box display="flex" justifyContent="center" mt={2}>
              <Button variant="contained" sx={{ marginRight: 2 }}>
                Main Call To Action
              </Button>
              <Button variant="outlined" sx={{ marginLeft: 2 }}>
                Secondary Action
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
