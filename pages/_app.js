import { ApolloProvider } from "@apollo/client";
import Layout from "../components/Layout/Layout";
import { client } from "../lib/apollo";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
