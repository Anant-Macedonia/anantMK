import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
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
          {clientsData.map((client, i) => {
            return (
              <Grid item md={4} key={i}>
                <Card className={classes.logoContainer}>
                  <Image
                    src={client.clientFields.clientLogo.sourceUrl}
                    width={250}
                    height={250}
                    alt={client.clientFields.clientLogo.sourceUrl}
                  />
                  {/* <CardMedia
                    component="img"
                    height="200px"
                    width="100%"
                    image={client.clientFields.clientLogo.sourceUrl}
                    alt={client.clientFields.clientLogo.sourceUrl}
                  /> */}
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
