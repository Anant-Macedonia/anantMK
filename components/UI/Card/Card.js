import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import classes from "./card.module.css";
import { Box } from "@mui/system";

const CustomCard = ({ title, content, link, buttonText, target }) => {
  return (
    <Grid container className={classes.card}>
      <Box
        className={
          buttonText === "Contact Us"
            ? `${classes.cardHeaderContainerBlue}`
            : `${classes.cardHeaderContainer}`
        }></Box>
      <Box className={classes.cardContentContainer}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography>{content}</Typography>
        <Box className={classes.btnContainer}>
          <Button
            href={link}
            className={
              buttonText === "Contact Us"
                ? `${classes.btnBlue}`
                : `${classes.btn}`
            }
            variant="contained">
            {buttonText}
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default CustomCard;
