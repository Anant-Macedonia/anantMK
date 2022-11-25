export const uxContainer = (theme) => ({
  height: "700px",
  // paddingBottom: "147px",
  // paddingTop: "147px",
  backgroundColor: "#EE6F57",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.5s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    height: "350px",
    // paddingTop: "120px",
    // paddingBottom: "120px",
  },
});

export const developmentContainer = (theme) => ({
  height: "700px",
  // paddingBottom: "147px",
  // paddingTop: "147px",
  backgroundColor: "#145374",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.5s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    height: "350px",
    // paddingTop: "120px",
    // paddingBottom: "120px",
  },
});

export const smallContainer = (theme) => ({
  writingMode: "vertical-rl",
  transform: "rotate(-180deg)",
  fontWeight: "700",
  fontSize: "80px",
  letterSpacing: "-0.02em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
});

export const smallUxContainer = {
  color: "#145374",
  transition: "all 0.5s ease-in-out",
};

export const smallDevelopmentContainer = {
  color: "#EE6F57 ",
  transition: "all 0.5s ease-in-out",
};

export const imageContainer = {
  marginTop: "93px",
  animation: "show 1s ease-in",
  "@keyframes show": {
    "0%": {
      opacity: 0,
    },
    "50%": {
      opacity: 0.2,
    },
    "100%": {
      opacity: 1,
    },
  },
};

// export const noImage = { opacity: "0" };

export const title = (theme) => ({
  fontWeight: "700",
  fontSize: "80px",
  letterSpacing: "-0.02em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "35px",
    lineHeight: "51px",
  },
});

export const uxTitle = {
  color: "#145374",
};

export const developTitle = {
  color: "#EE6F57",
};

export const hoveredTitle = (theme) => ({
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "100px",
  letterSpacing: "-0.02em",
  lineHeight: "128px",
  marginBottom: "40px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "50px",
    lineHeight: "64px",
  },
});

export const uxHoveredTitle = {
  color: "#145374",
};

export const developmentHoveredTitle = {
  color: "#EE6F57 ",
};

export const subTitle = {
  fontFamily: "Poppins",
  fontWeight: "300",
  fontSize: "25px",
  lineHeight: "32px",
  letterSpacing: "-0.02em",
  color: "#003049",
};

export const developmentSubTitle = {
  fontFamily: "Poppins",
  fontWeight: "300",
  fontSize: "25px",
  lineHeight: "32px",
  letterSpacing: "-0.02em",
  color: "#EE6F57",
};
