export const primaryBtn = (theme) => ({
  backgroundColor: "#EE6F57",
  color: "#ffffff",
  fontFamily: "Mulish !important",
  fontSize: "17px",
  fontWeight: 800,
  width: "180px",
  height: "40px",
  borderRadius: "20px",
  letterSpacing: "1px",
  marginRight: "40px",
  textTransform: "capitalize",
  transition: "all 350ms ease-in-out",
  "&:hover": {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: "15px",
    width: "156px",
    height: "34px",
  },
});
