export const heroContainer = (theme) => ({
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "-75px",
    paddingTop: "215px",
    paddingBottom: "180px",
  },
  [theme.breakpoints.down("md")]: {
    paddingBottom: "85px",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "37px",
    paddingBottom: "53px",
  },
});

export const heroImageContainer = {
  position: "absolute",
  top: "-45px",
  right: "-3%",
  zIndex: "-10",
};

export const heroTitle = (theme) => ({
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "50px",
  lineHeight: "128%",
  letterSpacing: "-0.035em,",
  color: "#EE6F57",
  marginBottom: "30px",
  [theme.breakpoints.down("md")]: {
    fontSize: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "23px",
    fontWeight: 600,
    letterSpacing: "-0.02em",
    lineHeight: "32px",
  },
});

export const heroSubtitle = (theme) => ({
  color: "#2161FF",
  marginBottom: "10px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "23px",
    fontWeight: 600,
    letterSpacing: "-0.02em",
    lineHeight: "32px",
  },
});

export const heroDesc = (theme) => ({
  fontFamily: "Montserrat",
  fontSize: "18px",
  lineHeight: "23px",
  letterSpacing: "-0.07em",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontWeight: 500,
    fontSize: "13px",
    lineHeight: "17px",
  },
});

export const contactInfoText = {
  fontFamily: "Montserrat",
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "36px",
  textDecoration: "underline",
  display: "flex",
  alignItems: "center",
};

export const btnContainer = (theme) => ({
  [theme.breakpoints.up("sm")]: {
    marginTop: "128px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "35px",
  },
});

export const imageContainer = (theme) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    marginTop: "50px",
  },
});
