export const formTitles = (theme) => ({
  fontFamily: "Montserrat",
  fontWeight: 700,
  fontSize: "40px",
  color: " #EE6F57",
  letterSpacing: "-0.07em",
  marginBottom: "109px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "30px",
  },
});

export const formGrid = (theme) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
});

export const contactContainer = (theme) => ({
  background: "linear-gradient(to bottom, #003049 50%, #145374)",
  paddingTop: "50px",
  paddingBottom: "85px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "0",
    paddingBottom: "30px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "0",
    paddingBottom: "30px",
  },
});

export const formLabel = {
  paddingLeft: "22px",
};

export const formInput = (theme) => ({
  width: "571px",
  height: "69px",
  marginBottom: "35px",
  borderRadius: "26px",
  background: "#145374",
  boxShadow: "7px 10px 7px rgba(0, 0, 0, 0.2)",
  paddingLeft: "22px",
  [theme.breakpoints.down("lg")]: {
    width: "520px",
    height: "65px",
  },
  [theme.breakpoints.down("md")]: {
    marginBottom: "22px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "43px",
  },
});

export const formTextBox = (theme) => ({
  background: "#145374",
  boxShadow: "7px 10px 7px rgba(0, 0, 0, 0.2)",
  borderRadius: "26px",
  width: "571px",
  marginBottom: "47px",
  paddingLeft: "22px",
  paddingTop: "22px",
  [theme.breakpoints.down("lg")]: {
    width: "520px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
});

export const btnContainer = (theme) => ({
  padding: "12px 32px",
  background: "#EE6F57",
  width: "181px",
  height: "42px",
  borderRadius: "20px",
  fontWeight: 800,
  fontSize: "18px",
  fontFamily: "Mulish",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    width: "117px",
    height: "34px",
  },
});
