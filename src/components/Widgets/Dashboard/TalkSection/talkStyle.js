export const talkContainer = (theme) => ({
  background: "linear-gradient(#003049, #145374)",
  paddingTop: "110px",
  paddingBottom: "85px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "20px",
    paddingBottom: "65px",
  },
});

export const talkSectionContainer = (theme) => ({
  marginBottom: "130px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "20px",
  },
});

export const talkContentContainer = (theme) => ({
  display: "flex",
  justifyContent: "space-between",
});

export const titleAndDescContainer = (theme) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export const talkSectionTitle = (theme) => ({
  color: "#EE6F57",
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: "50px",
  lineHeight: "63px",
  letterSpacing: " -0.035em",
  marginBottom: "43px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "23px",
    lineHeight: "32px",
    letterSpacing: " -0.02em",
  },
});

export const talkSectionDesc = (theme) => ({
  fontFamily: "Montserrat",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "26px",
  letterSpacing: "-0.07em",
  marginBottom: "65px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "36px",
    fontWeight: 500,
    fontSize: "13px",
    lineHeight: "17px",
    letterSpacing: "-0.02em",
  },
});

export const talkImageContainer = (theme) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "46px",
  },
});
