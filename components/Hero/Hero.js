import { Box, Button, Container, Typography } from "@mui/material";
import classes from "./hero.module.css";

const Hero = ({ heroData }) => {
  return (
    <>
      <Box
        className={classes.heroContainer}
        sx={{
          backgroundImage: `url(${heroData.image.sourceUrl})`,
        }}>
        <Container className={classes.textContainer}>
          <Typography className={classes.heroTitle} variant="h1">
            {heroData.heroTitle}
          </Typography>
          <Typography variant="h5" className={classes.heroDescription}>
            {heroData.heroDescription}
          </Typography>
          <Box className={classes.btnContainer}>
            <Button className={classes.btn} color="primary" variant="contained">
              Playbook
            </Button>
            <Button
              className={classes.btn}
              sx={{ background: "white", color: " black", ml: "40px" }}
              variant="contained">
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
