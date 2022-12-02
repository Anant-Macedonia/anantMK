export const ourApproachContainer = (theme) => ({
  backgroundColor: "#145374",
  paddingTop: "110px",
  paddingBottom: "115px",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "55px",
    paddingBottom: "55px",
  },
});

export const ourApproachTitle = (theme) => ({
  color: "#EE6F57",
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: "50px",
  marginBottom: "70px",
  letterSpacing: "-0.015em",
  lineHeight: "63px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "40px",
    lineHeight: "50px",
    marginBottom: "50px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "23px",
    letterSpacing: "-0.02em",
    lineHeight: "32px",
    marginBottom: "20px",
  },
});

export const ourApproachSubtitle = (theme) => ({
  fontFamily: "Montserrat",
  fontSize: "30px",
  fontWeight: 700,
  color: "#FFFFFF",
  marginBottom: "30px",
  lineHeight: "39px",
  letterSpacing: "-0.03em",
  [theme.breakpoints.down("lg")]: {
    fontSize: "25px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "28px",
    letterSpacing: "-0.02em",
    marginBottom: "20px",
  },
});

export const ourApproachDesc = (theme) => ({
  fontFamily: "Montserrat",
  fontSize: "18px",
  marginBottom: "70px",
  lineHeight: "23px",
  letterSpacing: "-0.03em",
  [theme.breakpoints.down("sm")]: {
    fontWeight: 500,
    fontSize: "13px",
    lineHeight: "17px",
  },
});

export const imageContainer = {
  marginTop: "30px",
};
