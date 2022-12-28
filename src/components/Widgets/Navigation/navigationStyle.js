export const nav = {
  backgroundColor: "transparent",
  boxShadow: "none",
  height: "75px",
  paddingTop: "55px",
};

export const navToolbar = (theme) => ({
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "row-reverse",
  },
});

export const navLogo = (theme) => ({
  marginRight: "auto",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    margin: "0px auto",
  },
});

export const navigationMobile = { width: "273px", paddingLeft: "34px" };

export const menuIcon = { color: "white" };

export const link = (theme) => ({
  position: "relative",
  zIndex: "1000",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  marginRight: "30px",
  textTransform: "capitalize",
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    fontWeight: 600,
    fontSize: "23px",
    lineHeight: "32px",
    letterSpacing: "-0.02em",
    color: "#E5E5E5",
  },
});

export const activeLink = (theme) => ({
  position: "relative",
  zIndex: "1000",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  marginRight: "30px",
  textTransform: "capitalize",
  cursor: "pointer",
  color: "#EE6F57",
  [theme.breakpoints.down("sm")]: {
    fontWeight: 600,
    fontSize: "23px",
    lineHeight: "32px",
    letterSpacing: "-0.02em",
  },
});

export const service = (theme) => ({
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: "30px",
  lineHeight: "38px",
  letterSpacing: "-0.035em",
  marginBottom: "24px",
  paddingLeft: "10%",

  color: "#E5E5E5",
  cursor: "pointer",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "7%",
    fontSize: "22px",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "5%",
    fontSize: "18px",
    lineHeight: "15px",
    marginBottom: "24px",
  },
});

export const activeService = (theme) => ({
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: "30px",
  lineHeight: "38px",
  letterSpacing: "-0.035em",
  marginBottom: "24px",
  paddingLeft: "10%",
  color: "#EE6F57",
  cursor: "pointer",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "7%",
    fontSize: "22px",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "5%",
    fontSize: "18px",
    lineHeight: "15px",
  },
});

export const hoveredSectionTitle = (theme) => ({
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: "24px",
  lineHeight: "30px",
  letterSpacing: "-0.035em",
  color: "#EE6F57",
  paddingLeft: "48px",
  marginBottom: "4px",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
    lineHeight: "25px",
  },
});

export const rightHoveredSectionDescription = (theme) => ({
  fontFamily: "Lato",
  fontWeight: 400,
  fontSize: "12px",
  lineHeight: "14px",
  letterSpacing: "-0.035em",
  color: "#FFFFFF",
  paddingLeft: "48px",
  marginBottom: "19px",
});

export const middleHoveredSectionDescription = (theme) => ({
  fontFamily: "Lato",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#FFFFFF",
  paddingLeft: "50px",
  paddingRight: "40px",
  marginTop: "39px",
  marginBottom: "19px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "14px",
    lineHeight: "17px",
    paddingLeft: "30px",
    paddingRight: "20px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    lineHeight: "17px",
    paddingLeft: "10px",
    paddingRight: "5px",
  },
});

export const popoverContentContainer = (theme) => ({
  height: "440px",
  paddingTop: "50px",
  paddingLeft: "10px",
  paddingRight: "10px",
  paddingBottom: "10px",
  [theme.breakpoints.down("lg")]: {
    height: "470px",
  },
  [theme.breakpoints.down("md")]: {
    height: "510px",
    paddingTop: "30px",
  },
});
