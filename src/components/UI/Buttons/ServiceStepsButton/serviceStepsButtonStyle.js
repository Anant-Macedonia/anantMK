export const serviceStepsButton = (theme) => ({
  backgroundColor: "#EE6F57",
  color: "#f6f5f5",
  fontFamily: "Mulish !important",
  fontSize: "16px",
  fontWeight: 800,
  lineHeight: "24px",
  width: "180px",
  height: "40px",
  borderRadius: "20px",
  letterSpacing: "0.02em",
  textTransform: "capitalize",
  transition: "all 350ms ease-in-out",
  "&:hover": {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90px",
    height: "23px",
    lineHeight: "24px",
    letterSpacing: "0.02em",
    borderRadius: "16px",
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
});
