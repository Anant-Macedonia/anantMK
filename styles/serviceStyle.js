export const uxContainer = (theme) => ({
  backgroundImage: `url(../public/design.svg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  background:
    "linear-gradient(to bottom, #003049, #015887), url(../public/design.svg)",
  backgroundBlendMode: "multiply",
  height: "500px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.5s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    height: "350px",
  },
});

export const uxNoHoverContainer = (theme) => ({
  height: "500px",
  backgroundColor: "#145374",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: "350px",
  },
});

export const developmentNoHoverContainer = (theme) => ({
  height: "500px",
  backgroundColor: "#145374",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    height: "350px",
  },
});

export const developmentContainer = (theme) => ({
  height: "500px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.5s ease-in-out",
  [theme.breakpoints.down("sm")]: {
    height: "350px",
  },
});

export const smallContainer = (theme) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  writingMode: "vertical-rl",
  transform: "rotate(-180deg)",
  fontWeight: "700",
  fontSize: "56px",
  letterSpacing: "-0.02em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
});

export const smallUxContainer = {
  height: "500px",
  background: "#145374",
  color: "#E5E5E5",
  transition: "all 0.5s ease-in-out",
};

export const smallDevelopmentContainer = {
  height: "500px",
  background: "#145374",
  color: "#E5E5E5 ",
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

export const title = (theme) => ({
  fontWeight: "700",
  fontSize: "80px",
  letterSpacing: "-0.02em",
  marginTop: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "35px",
    lineHeight: "51px",
  },
});

export const uxTitle = {
  background: "linear-gradient(to bottom, #EE6F57, #E5E5E5)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

export const developTitle = {
  background: "linear-gradient(to bottom, #E5E5E5, #EE6F57)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
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
