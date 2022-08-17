import * as React from "react";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, Grid } from "@mui/material";
import Link from "next/link";
import classes from "./card.module.css";
import { Box } from "@mui/system";

const CustomCard = ({ title, content, link }) => {
  return (
    <Box container className={classes.card}>
      <Box className={classes.cardHeaderContainer}></Box>
      <Box className={classes.cardContentContainer}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography>{content}</Typography>

        <Button className={classes.btn} variant="contained">
          Click Here
        </Button>
      </Box>
    </Box>
  );
};

export default CustomCard;
