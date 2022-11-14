export const footerContainer = (theme) => ({
  justifyContent: "space-between",
  marginBottom: "140px",
  marginTop: "65px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "30px",
    marginTop: "30px",
  },
});

export const linkText = {
  fontSize: "20px",
  color: "#FFFFFF",
  fontWeight: "400",
  textDecoration: "underline",
  letterSpacing: "-0.02em",
  lineHeight: "34.7px",
};

export const contactText = (theme) => ({
  fontSize: "22px",
  letterSpacing: "-0.125em",
  lineHeight: "44px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
    letterSpacing: "-0.07em",
    lineHeight: "16px",
    marginBottom: "18px",
  },
});

export const footerContact = (theme) => ({
  marginBottom: "25px",
  fontSize: "22px",
  fontWeight: 600,
  [theme.breakpoints.down("sm")]: {
    marginBottom: "21px",
    fontSize: "16px",
    fontWeight: 600,
    lineHeight: "21px",
    letterSpacing: "-0.02em",
  },
});

export const footerCopyright = (theme) => ({
  fontSize: "18px",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "11px",
    fontWeight: 600,
    lineHeight: "14px",
  },
});

export const footerTrademark = (theme) => ({
  fontSize: "13px",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "8px",
    marginTop: "15px",
    fontWeight: 500,
    lineHeight: "10px",
    letterSpacing: "-0.02em",
  },
});
