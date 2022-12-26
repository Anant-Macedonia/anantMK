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
  [theme.breakpoints.down("sm")]: {},
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
  [theme.breakpoints.down("sm")]: {},
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
});
