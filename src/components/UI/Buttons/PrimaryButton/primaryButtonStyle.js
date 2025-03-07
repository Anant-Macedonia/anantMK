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
  "&:last-child": {
    marginRight: "0px",
  },

  [theme.breakpoints.down("sm")]: {
    marginRight: "15px",
    height: "34px",
    width: "165px",
    lineHeight: "24px",
    letterSpacing: "-0.02em",
    borderRadius: "16px",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
});
