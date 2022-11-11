export const talkContainer = {
  background: "linear-gradient(#003049, #145374)",
  paddingTop: "110px",
  paddingBottom: "85px",
};

export const talkSectionContainer = { marginBottom: "130px" };

export const talkContentContainer = {
  display: "flex",
  justifyContent: "space-between",
};

export const titleAndDescContainer = (theme) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export const talkSectionTitle = {
  color: "#EE6F57",
  fontFamily: "Poppins",
  fontWeight: 600,
  fontSize: "50px",
  lineHeight: "63px",
  letterSpacing: " -0.035em",
  marginBottom: "43px",
};

export const talkSectionDesc = (theme) => ({
  fontFamily: "Montserrat",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "26px",
  letterSpacing: "-0.07em",
  maxWidth: "490px",
  marginBottom: "65px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "36px",
  },
});
