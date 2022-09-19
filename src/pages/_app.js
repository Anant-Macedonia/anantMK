import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { deepOrange, grey } from "@mui/material/colors";
import Layout from "../components/Layout/Layout";

import "../../styles/global.css";

const darkTheme = createTheme({
  palette: {
    background: {
      default: "#003049",
      paper: "#003049",
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StyledEngineProvider>
    </ApolloProvider>
  );
}

export default MyApp;
