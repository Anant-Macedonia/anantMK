import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import classes from "./enterpriseSection.module.css";

const EnterpriseSection = ({ enterpriseData, enterpriseCardData }) => {
  console.log(enterpriseCardData);
  return (
    <Box className={classes.enterpriseContainer}>
      <Typography className={classes.enterpriseSectionTitle} variant="h1">
        {enterpriseData.enterpriseSectionTitle}
      </Typography>
      <Grid container>
        {enterpriseCardData.map((data, i) => {
          return (
            <Grid
              item
              md={4}
              key={i}
              className={classes.enterpriseCardContainer}>
              <img
                className={classes.enterpriseImage}
                src={data.enterpriseCardFields.enterpriseImage.sourceUrl}
                alt={data.enterpriseCardFields.enterpriseTitle}></img>
              <Typography variant="h5" className={classes.enterpriseTitle}>
                {data.enterpriseCardFields.enterpriseTitle}
              </Typography>
              <Typography className={classes.enterpriseDescription}>
                {data.enterpriseCardFields.enterpriseDescription}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default EnterpriseSection;
