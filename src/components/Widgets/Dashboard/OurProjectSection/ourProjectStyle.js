export const ourProjectSectionContainer = (theme) => ({
  marginTop: "60px",
  marginBottom: "155px",
  fontSize: "36px",
  [theme.breakpoints.down("sm")]: {
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
  [theme.breakpoints.down("sm")]: {
    fontSize: "23px",
    lineHeight: "32px",
  },
});

export const ourProjectContainer = (theme) => ({
  height: "460px",
  background: "#145374",
  boxShadow: "7px 10px 7px rgba(0, 0, 0, 0.2)",
  borderRadius: "26px",
  marginTop: "58px",
  padding: "34px 50px",
  // [theme.breakpoints.down("sm")]: {
  //   background: "none",
  // },
});

export const ourProjectMobileContainer = (theme) => ({
  margin: "0 auto",
});

export const projectTitle = {
  fontFamily: "Montserrat",
  fontWeight: 700,
  fontSize: "36px",
  lineHeight: "47px",
  letterSpacing: " -0.07em",
  marginTop: "25px",
  marginBottom: "30px",
};

export const projectDesc = {
  fontFamily: "Montserrat",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "20px",
  letterSpacing: "-0.04em",
  maxWidth: "590px",
  marginBottom: "50px",
};
