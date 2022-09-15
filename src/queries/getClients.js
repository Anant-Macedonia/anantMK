import { gql } from "@apollo/client";

export const GET_CLIENTS_DATA = gql`
  query GetClients {
    clients(first: 20) {
      nodes {
        clientFields {
          clientLogo {
            sourceUrl
          }
        }
      }
    }
  }
`;
