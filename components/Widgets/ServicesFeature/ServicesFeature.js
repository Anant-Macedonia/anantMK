import { Grid, Typography } from "@mui/material";
import Link from "next/link";
import classes from "./servicesFeature.module.css";

const ServicesFeature = ({ title, description, links, imageUrl }) => {
  return (
    <Grid container className={classes.serviceContainer}>
      <Grid item xs={6} className={classes.image}>
        <img className={classes.image} src={imageUrl} />
      </Grid>
      <Grid item xs={6} className={classes.serviceContent}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography gutterBottom>{description}</Typography>
        <Typography component="ul">
          {links.map((link, index) => {
            return (
              <Typography key={index} component="li">
                <Link href={link.url}>{link.name}</Link>
              </Typography>
            );
          })}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ServicesFeature;
