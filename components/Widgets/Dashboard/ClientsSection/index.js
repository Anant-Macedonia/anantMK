import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import classes from "./clientsSection.module.css";

const ClientsSection = ({ clientsData, clientsTitle }) => {
  return (
    <Box className={classes.clientsContainer}>
      <Typography className={classes.clientsSectionTitle} variant="h1">
        {clientsTitle.clientSectionTitle}
      </Typography>
      <Container className={classes.clientsLogoContainer}>
        <Grid container spacing={6}>
          {clientsData.map((client) => {
            return (
              <Grid item md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200px"
                    width="100%"
                    image={client.clientFields.clientLogo.sourceUrl}
                    alt={client.clientFields.clientLogo.sourceUrl}
                  />
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ClientsSection;
