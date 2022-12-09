export const ourProjectSectionContainer = (theme) => ({
  zIndex: "-1",
  marginTop: "160px",
  marginBottom: "155px",
  fontSize: "36px",
  [theme.breakpoints.down("md")]: {
    marginTop: "35px",
    marginBottom: "45px",
  },
});

export const ourProjectSectionTitle = (theme) => ({
  color: "#EE6F57",
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: "50px",
  lineHeight: "63px",
  letterSpacing: "0.035em",
  [theme.breakpoints.down("md")]: {
    fontSize: "40px",
    marginBottom: "45px",
    display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "23px",
    lineHeight: "32px",
    marginBottom: "15px",
  },
});

export const ourProjectContainer = (theme) => ({
  height: "460px",
  background: "#145374",
  boxShadow: "7px 10px 7px rgba(0, 0, 0, 0.2)",
  borderRadius: "26px",
  marginTop: "58px",
  padding: "34px 50px",
});

export const ourProjectMobileContainer = (theme) => ({
  margin: "0 auto",
});

export const projectTitle = (theme) => ({
  fontFamily: "Montserrat",
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "47px",
  letterSpacing: " -0.07em",
  marginTop: "25px",
  marginBottom: "30px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "30px",
    lineHeight: "40px",
    marginBottom: "25px",
  },
});

export const projectDesc = (theme) => ({
  fontFamily: "Montserrat",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "20px",
  letterSpacing: "-0.04em",
  maxWidth: "570px",
  marginBottom: "50px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "16px",
    lineHeight: "18px",
    maxWidth: "410px",
    marginBottom: "30px",
  },
});
