import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const OurWork = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "564px",
          height: "540px",
          padding: "83px 83px 30px 83px",
          backgroundColor: "#D9D9D9",
          borderRadius: "30px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.06,
            rotate: -10,
            fontSize: "25px",
            fontWeight: 700,
          }}
        >
          <Box
            sx={{
              height: "370px",
              width: "400px",
              backgroundColor: "#4B454552",
              borderRadius: "30px",
            }}
          ></Box>
          <Box sx={{ color: "#2F2E2E", fontSize: "22px", marginTop: "20px" }}>
            Project Name
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default OurWork;
