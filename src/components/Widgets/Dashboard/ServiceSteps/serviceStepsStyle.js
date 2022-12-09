import { createTheme } from "@mui/material";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
});

export const stepsSectionContainer = (theme) => ({
  // marginBottom: "160px",
  marginTop: "20px",

  [theme.breakpoints.down("sm")]: {
    marginBottom: "35px",
    marginTop: "0px",
  },
});

export const serviceStepsContainer = (theme) => ({
  marginInline: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    width: "225px",
    height: "320px",
  },
});

export const stepsNumberMainContainer = (theme) => ({
  background: "#EE6F57",
  height: "150px",
  display: "flex",
  alignItems: "center",
  borderRadius: "18px 18px 0 0",
  [theme.breakpoints.down("sm")]: {
    height: "120px",
  },
});

export const stepsNumberContainer = {
  width: "80px",
  height: "80px",
  margin: "20px 0",
  backgroundColor: "#145374",
  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.2)",
  borderRadius: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginInline: "auto",
  transition: "0.4s",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#db9d90",
  },
};

export const activeStepsNumberContainer = {
  width: "80px",
  height: "80px",
  backgroundColor: "#EE6F57",
  boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.2)",
  borderRadius: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginInline: "auto",
};

export const stepsNumber = {
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "50px",
  lineHeight: "64px",
  letterSpacing: "-0.02em",
  color: "#EE6F57",
};

export const activeStepNumber = {
  fontFamily: "Poppins",
  fontWeight: "700",
  fontSize: "50px",
  lineHeight: "64px",
  letterSpacing: "-0.02em",
  color: "#145374",
};

export const cardInformationContainer = (theme) => ({
  backgroundColor: "#145374",
  padding: "3px 0 20px 0",
  borderRadius: "0 0 18px 18px",
  [theme.breakpoints.down("sm")]: {
    height: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export const stepsTextContainer = (theme) => ({
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    marginTop: "15px",
    padding: "0 15px",
  },
});

export const stepsTitle = (theme) => ({
  marginBottom: "36px",
  color: "#EE6F57",
  fontWeight: 700,
  fontSize: "30px",
  lineHeight: "39px",
  letterSpacing: "-0.07em",
  fontFamily: "Montserrat",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    lineHeight: "33px",
    letterSpacing: "-0.015em",
    marginBottom: "0px",
  },
});

export const cardDescription = (theme) => ({
  fontFamily: "Montserrat",
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "23px",
  letterSpacing: "-0.07em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
    lineHeight: "16px",
    letterSpacing: "-0.04em",
  },
});

export const servicesPopup = () => ({
  zIndex: "10000",
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "600px",
  width: "clamp(30rem, 6.7411rem + 62.0238vw, 62.5625rem)",
  background: "#145374",
  border: "10px solid #EE6F57",
  borderRadius: "26px",
  [theme.breakpoints.up("xl")]: {
    height: "600px",
    top: "20%",
  },
  [theme.breakpoints.down("xl")]: {
    height: "clamp(30rem, 15rem + 18.75vw, 37.5rem)",
    top: "15%",
  },
  [theme.breakpoints.down("lg")]: {
    top: "15%",
    height: "clamp(25rem, 13.1579rem + 21.0526vw, 30rem)",
  },
  [theme.breakpoints.down("md")]: {
    top: "20%",
    height: "400px",
  },
});

export const popupText = () => ({
  paddingLeft: "80px",
  paddingRight: "60px",
  fontFamily: "Montserrat",
  fontSize: "20px",
  fontWeight: 400,
  letterSpacing: "-0.07em",
  lineHeight: "26px",
  [theme.breakpoints.down("xl")]: {
    fontSize: "18px",
    paddingLeft: "40px",
    paddingRight: "30px",
    lineHeight: "24px",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "clamp(0.8125rem, 0.3684rem + 0.7895vw, 1rem)",
    paddingLeft: "30px",
    paddingRight: "25px",
    lineHeight: "22px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "13px",
    paddingLeft: "15px",
    paddingRight: "10px",
    lineHeight: "18px",
  },
});

export const btnContainer = { display: "flex", justifyContent: "center" };
