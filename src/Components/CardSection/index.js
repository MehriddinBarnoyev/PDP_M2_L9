import React from "react";
import { Box, Button, Card, Grid, Typography, useTheme } from "@mui/material";

export default function CardSection() {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default, width: "100%", py: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        {[...Array(6)].map((_, index) => (
          <Grid item key={index}>
            <Card sx={{ backgroundColor: theme.palette.background.paper }}>
              <Box display="flex" padding="20px">
                <Box overflow="hidden" width="250px">
                  <img
                    src="https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1907862843.jpg"
                    alt="Example"
                    style={{ width: "100%", display: "block" }}
                  />
                  <Box padding={2}>
                    <Typography variant="h5" gutterBottom color="textPrimary">
                      Heading
                    </Typography>
                    <Typography variant="body2" style={{ wordWrap: "break-word" }} color="textSecondary">
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                    <Button variant="text" color="primary">View</Button>
                    <Button variant="text" color="primary">Edit</Button>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
