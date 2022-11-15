export const secondaryButton = (theme) => ({
  transition: "all 350ms ease-in-out",
  background: "#F5F5F5",
  borderRadius: "20px",
  width: "180px",
  height: "42px",
  fontFamily: "Mulish",
  fontWeight: "800",
  fontSize: "18px",
  lineHeight: "24px",
  letterSpacing: "0.02",
  color: "#003049",
  "&:hover": {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  [theme.breakpoints.down("sm")]: {
    marginRight: "15px",
    width: "156px",
    height: "34px",
    fontSize: "14px",
  },
});
