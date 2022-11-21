export const nav = {
  backgroundColor: "transparent",
  boxShadow: "none",
  height: "75px",
  paddingTop: "55px",
};

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
