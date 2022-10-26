import { gql } from "@apollo/client";

export const GET_UX_UI_DATA = gql`
  query UxUiQuery {
    nodeByUri(uri: "/ux-ui-design") {
      ... on Page {
        id
        uiUxFileds {
          heroTitle
          heroDescription
          heroImage {
            sourceUrl
          }
        }
      }
    }
    uxSteps {
      nodes {
        uxStepFields {
          title
          description
        }
      }
    }
  }
`;
