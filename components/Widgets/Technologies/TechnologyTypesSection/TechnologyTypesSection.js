import { Grid, Typography } from "@mui/material";
import classes from "./technologyTypesSection.module.css";

const TechnologyTypesSection = ({ technology, technologyImages }) => {
  return (
    <Grid container className={classes.technologiesSection}>
      <Grid item xs={2} className={classes.technologiesSectionHeading}>
        <Typography>{technology}</Typography>
      </Grid>
      <Grid item xs={9} className={classes.technologiesImagesContainer}>
        {technologyImages.map((image) => {
          return (
            <img
              key={image.title}
              src={image.url}
              alt={image.title}
              className={classes.technologiesImage}
            />
          );
        })}
      </Grid>
    </Grid>
  );
};

export default TechnologyTypesSection;
