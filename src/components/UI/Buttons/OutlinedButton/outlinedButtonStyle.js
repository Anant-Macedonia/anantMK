export const outlinedBtn = (theme) => ({
  color: "#EE6F57",
  fontFamily: "Mulish !important",
  fontSize: "18px",
  fontWeight: 800,
  width: "180px",
  height: "40px",
  border: "1px solid #EE6F57",
  borderRadius: "30px",
  textTransform: "capitalize",
  letterSpacing: "1px",
  "&:hover": {
    color: "#BAB6B6",
    backgroundColor: "transparent",
    borderColor: "#ffffff",
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: "15px",
    width: "156px",
    height: "34px",
    letterSpacing: "-0.01em",
    fontSize: "14px",
  },
});
