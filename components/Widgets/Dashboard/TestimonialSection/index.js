import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import classes from "./testimonialSection.module.css";

const TestimonialSection = ({ testimonialData }) => {
  return (
    <Box className={classes.testimonailSectionContainer}>
      <Container>
        <Grid container spacing={6}>
          {testimonialData.map((data, i) => {
            return (
              <Grid
                className={classes.testimonialCardContainer}
                item
                md={6}
                key={i}>
                <Box className={classes.testimonialCardHeader}>
                  <Box className={classes.imageContainer}>
                    <img
                      alt={data.acfTestimonialCardFields.clientName}
                      src={data.acfTestimonialCardFields.clientImage.sourceUrl}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h4" className={classes.clientName}>
                      {data.acfTestimonialCardFields.clientName}
                    </Typography>
                    <Typography
                      variant="h5"
                      className={classes.clientJobPosition}>
                      {data.acfTestimonialCardFields.clientJobPosition}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="body2">
                  {data.acfTestimonialCardFields.testamonialText}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
        <Box className={classes.readBlogContainer}>
          <Typography>Read our blog</Typography>
          <Button className={classes.btn} variant="contained">
            Check Out Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialSection;
