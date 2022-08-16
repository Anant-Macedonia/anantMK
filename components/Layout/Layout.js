import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "../Widgets/Footer/Footer";
import Navigation from "../Widgets/Navigation/Navigation";

const theme = createTheme({
  MuiButton: {
    styleOverrides: {
      // Name of the slot
      root: {
        // Some CSS
        fontSize: "3rem",
        backgroundColor: {
          primary: "#fff",
        },
      },
    },
  },
  typography: {
    fontFamily: "Lato",
    h1: {
      fontSize: "3.125rem",
      fontWeight: 700,
      fontFamily: "Montserrat",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      fontFamily: "Montserrat",
    },
    h3: {
      fontFamily: "Montserrat",
    },
    h4: {
      fontFamily: "Montserrat",
    },
    h5: {
      fontSize: "1.1rem",
      fontFamily: "Montserrat",
    },
  },
});

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
