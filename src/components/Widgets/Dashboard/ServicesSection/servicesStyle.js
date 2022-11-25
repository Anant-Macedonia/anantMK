export const servicesSectionContainer = (theme) => ({
  paddingTop: "110px",
  paddingBottom: "100px",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "35px",
    paddingBottom: "35px",
  },
});

export const sectionTitle = (theme) => ({
  color: "#EE6F57",
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: "50px",
  lineHeight: "63px",
  letterSpacing: "-0.035em",
  marginBottom: "70px",
  [theme.breakpoints.down("sm")]: {
    fontWight: 600,
    fontSize: "23px",
    marginBottom: "30px",
  },
});

export const cardLine = {
  backgroundColor: "#EE6F57",
  maxWidth: "470px",
  height: "10px",
  borderRadius: "10px",
  marginBottom: "16px",
};

export const servicesCard = (theme) => ({
  [theme.breakpoints.up("sm")]: {
    maxWidth: "470px",
    background: " #124F70",
    boxShadow: "7px 10px 7px rgba(0, 0, 0, 0.2)",
    borderRadius: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "225px",
    background: " #124F70",
    boxShadow: "7px 10px 7px rgba(0, 0, 0, 0.2)",
    borderRadius: "20px",
    paddingBottom: "23px",
  },
});

export const imageContainer = (theme) => ({
  [theme.breakpoints.up("sm")]: {
    background: "#EE6F57",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "185px",
  },
  [theme.breakpoints.down("sm")]: {
    background: "#EE6F57",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "120px",
  },
});

export const cardTitle = (theme) => ({
  fontFamily: "Montserrat",
  fontWeight: 700,
  fontSize: "30px",
  lineHeight: "39px",
  textAlign: "center",
  letterSpacing: "-0.07em",
  color: "#EE6F57",
  margin: "30px 0",
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    letterSpacing: "-0.015em",
    lineHeight: "33px",
    margin: "0 0 10px 0",
  },
});

export const cardDescription = (theme) => ({
  fontFamily: "Montserrat",
  fontSize: "18px",
  lineHeight: "23px",
  textAlign: "justify",
  letterSpacing: "-0.07em",
  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
    fontWeight: 400,
    lineHeight: "16px",
    letterSpacing: "-0.04em",
  },
});
