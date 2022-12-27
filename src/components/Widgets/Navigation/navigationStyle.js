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
  paddingLeft: "200px",
  color: "#E5E5E5",
  cursor: "pointer",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "80px",
    fontSize: "26px",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "60px",
    fontSize: "22px",
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
  paddingLeft: "200px",
  color: "#EE6F57",
  cursor: "pointer",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "80px",
    fontSize: "26px",
  },
  [theme.breakpoints.down("md")]: {
    paddingLeft: "60px",
    fontSize: "22px",
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
  paddingLeft: "60px",
  paddingRight: "50px",
  marginBottom: "19px",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
    lineHeight: "17px",
  },
});

export const popoverContentContainer = (theme) => ({
  height: "450px",
  padding: "50px 10px",
  [theme.breakpoints.down("md")]: {
    height: "490px",
    padding: "30px 10px",
  },
});
