import { gql } from "@apollo/client";

export const GET_CLIENTS_PAGE_DATA = gql`
  query GetClientPage {
    pageBy(id: "cG9zdDoxMTg=") {
      acfClientPageFields {
        heroTitle
        heroDescription
        clientSectionTitle
        heroImage {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }
`;
