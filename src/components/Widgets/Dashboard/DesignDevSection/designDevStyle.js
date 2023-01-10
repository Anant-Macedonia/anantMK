export const designDevContainer = (theme) => ({
  background: "#003049",
  paddingTop: "80px",
  paddingBottom: "60px",
  [theme.breakpoints.down("md")]: {
    paddingTop: "20px",
    paddingBottom: "25px",
  },
});

export const sectionContainer = { padding: "40px 0" };

export const imageTitleContainer = {
  height: "170px",
  width: "360px",
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  marginBottom: "35px",
};

export const sectionTitle = {
  fontFamily: "Poppins",
  fontWeight: 700,
  fontSize: "50px",
  color: "#E5E5E5",
  letterSpacing: "-0.035em",
  lineHeight: "63px",
  marginBottom: "40px",
};

export const sectionDescription = {
  fontFamily: "Lato",
  fontWeight: 400,
  fontSize: "24px",
  color: "#FFFFFF",
  lineHeight: "28px",
};

export const itemsContainer = {
  width: "100%",
  height: "110px",
  background: "linear-gradient(180deg, #145374 0%, #145374 100%);",
  borderRadius: "30px",
  marginBottom: "12px",
  paddingLeft: "25px",
  paddingTop: "15px",
  paddingBottom: "10px",
  cursor: "pointer",
  "&:hover": {
    background: "#1a6c97",
  },
};

export const itemTitle = {
  color: "#EE6F57",
  fontFamily: "Lato",
  fontWeight: 600,
  fontSize: "30px",
};

export const itemDescription = {
  color: "#E5E5E5",
  fontFamily: "Lato",
  fontWeight: 400,
  fontSize: "12px",
  maxWidth: "311px",
  letterSpacing: "-0.035em",
};
