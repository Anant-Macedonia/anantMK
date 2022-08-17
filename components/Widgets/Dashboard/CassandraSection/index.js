import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import classes from "./cassandraSection.module.css";

const CassandraSection = ({ cassandraData }) => {
  return (
    <>
      <Box className={classes.cassandraSectionContainer}>
        <Container>
          <Grid container>
            <Grid item md={7}>
              <Typography className={classes.cassandraTitle} variant="h2">
                {cassandraData.cassandraLinkTitle}
              </Typography>
              <Typography className={classes.cassandraDescription}>
                {cassandraData.cassandraLinkDescription}
              </Typography>
              <Button className={classes.btnCassandra} variant="contained">
                Check Out Now
              </Button>
            </Grid>

            <Grid item md={5}>
              <Box className={classes.cassandraImageContainer}>
                <Image
                  src={cassandraData.cassandraLinkImage.sourceUrl}
                  width={279}
                  height={187}
                  alt="Cassandra Logo"
                />
              </Box>

              {/* <Box
                className={classes.cassandraImageContainer}
                sx={{
                  backgroundImage: `url(${cassandraData.cassandraLinkImage.sourceUrl})`,
                }}></Box> */}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CassandraSection;
