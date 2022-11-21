export const teamSectionContainer = (theme) => ({
  marginTop: "150px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "35px",
  },
});

export const teamSectionTitle = (theme) => ({
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: "50px",
  lineHeight: "64px",
  letterSpacing: "-0.02em",
  color: "#EE6F57",
  [theme.breakpoints.down("sm")]: {
    fontSize: "23px",
    lineHeight: "32px",
  },
});

export const teamSectionDescription = (theme) => ({
  fontFamily: "Montserrat",
  fontWeight: 400,
  fontSize: "18px",
  lineHeight: "23px",
  marginBottom: "120px",
  letterSpacing: "-0.01em",
});

export const teamCardContainerActive = (theme) => ({
  transform: "scale(1.2)",
  borderRadius: "20px",
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    transform: "scale(1)",
  },
});

export const teamCardContainerNoActive = (theme) => ({
  width: "300px",
  height: "446px",
  borderRadius: "20px",
  overflow: "hidden",
  marginBottom: "110px",
  background: "rgba(20, 83, 116, 0.2)",
  opacity: 0.6,
  [theme.breakpoints.down("sm")]: {
    width: "210px",
    height: "300px",
    margin: "0 auto",
  },
});

export const imageContainer = (theme) => ({
  height: "336px",
  width: "300px",
  [theme.breakpoints.down("sm")]: {
    height: "232px",
    width: "210px",
    margin: "0 auto",
    borderTopLeftRadius: "20px",
    overflow: "hidden",
  },
});

export const imageContainerActive = {};

export const nameContainer = (theme) => ({
  height: "110px",
  width: "300px",
  backgroundColor: "#D36B5B",
  borderBottomRightRadius: "20px",
  [theme.breakpoints.down("sm")]: {
    height: "64px",
    width: "210px",
    margin: "0 auto",
    overflow: "hidden",
    borderBottomLeftRadius: "20px",
  },
});

export const teamCardTitle = (theme) => ({
  fontFamily: "Montserrat",
  fontWeight: 700,
  fontSize: "30px",
  lineHeight: "38px",
  letterSpacing: "-0.07em",
  paddingTop: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "17px",
    lineHeight: "22px",
    letterSpacing: "-0.07em",
  },
});
