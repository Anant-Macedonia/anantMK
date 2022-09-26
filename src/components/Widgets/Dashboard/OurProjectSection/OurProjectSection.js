import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import PrimaryButton from "../../../UI/Buttons/PrimaryButton/PrimaryButton";
import AnantUs from "../../../../../public/anant-us.svg";
import CassandraLink from "../../../../../public/cassandra-link.svg";
import CassandraTools from "../../../../../public/cassandra-tools.svg";
import Image from "next/future/image";
import {
  ourProjectSectionContainer,
  ourProjectSectionTitle,
  ourProjectContainer,
  projectTitle,
  projectDesc,
} from "./ourProjectStyle";

const OurProjectSection = () => {
  const [projectNum, setProjectNum] = useState(0);

  if (projectNum > 2) {
    setProjectNum(0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectNum((prevProjectNum) => prevProjectNum + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Box sx={ourProjectSectionContainer}>
        <Typography sx={ourProjectSectionTitle}>
          Take a look at some of our projects.
        </Typography>
        <Box sx={ourProjectContainer}>
          <Grid container sx={{ padding: "34px 55px" }}>
            <Grid item md={7.5} sx={{ paddingRight: "20px" }}>
              {projectNum === 0 && (
                <>
                  <Typography sx={projectTitle}>
                    Open Source Tools - Cassandra.Tools
                  </Typography>
                  <Typography sx={projectDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <PrimaryButton btnText="View Project" />
                </>
              )}
              {projectNum === 1 && (
                <>
                  <Typography sx={projectTitle}>
                    Corporate Website Design - Anant.US
                  </Typography>
                  <Typography sx={projectDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <PrimaryButton btnText="View Project" />
                </>
              )}
              {projectNum === 2 && (
                <>
                  <Typography sx={projectTitle}>
                    Knowledge Base - Cassandra.Link
                  </Typography>
                  <Typography sx={projectDesc}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  <PrimaryButton btnText="View Project" />
                </>
              )}
            </Grid>
            <Grid item md={4.5}>
              {projectNum === 0 && (
                <Image
                  src={CassandraTools}
                  alt="cassandra tools"
                  quality={100}
                />
              )}
              {projectNum === 1 && (
                <Image src={AnantUs} alt="anant us" quality={100} />
              )}
              {projectNum === 2 && (
                <Image src={CassandraLink} alt="cassandra link" quality={100} />
              )}
            </Grid>
          </Grid>
        </Box>
        <Grid
          container
          sx={{ display: "flex", justifyContent: "center", marginTop: "51px" }}>
          <Box
            sx={{
              width: "18px",
              height: "18px",
              borderRadius: "100%",
              background: `${
                projectNum === 0 ? "#DF6B56" : "rgba(223, 107, 86, 0.88)"
              }`,
              marginRight: "18px",
              transform: `${projectNum === 0 && "scale(1.3)"}`,
              cursor: "pointer",
            }}
            onClick={() => setProjectNum(0)}></Box>
          <Box
            sx={{
              width: "18px",
              height: "18px",
              borderRadius: "100%",
              background: `${
                projectNum === 1 ? "#DF6B56" : "rgba(223, 107, 86, 0.88)"
              }`,
              marginRight: "18px",
              transform: `${projectNum === 1 && "scale(1.3)"}`,
              cursor: "pointer",
            }}
            onClick={() => setProjectNum(1)}></Box>
          <Box
            sx={{
              width: "18px",
              height: "18px",
              borderRadius: "100%",
              background: `${
                projectNum === 2 ? "#DF6B56" : "rgba(223, 107, 86, 0.88)"
              }`,
              transform: `${projectNum === 2 && "scale(1.3)"}`,
              cursor: "pointer",
            }}
            onClick={() => setProjectNum(2)}></Box>
        </Grid>
      </Box>
    </Container>
  );
};

export default OurProjectSection;
