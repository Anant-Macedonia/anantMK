import { gql } from "@apollo/client";

export const GET_TALK_SECTION_DATA = gql`
  query TalkSectionQuery {
    nodeByUri(uri: "talk-section") {
      ... on Page {
        id
        talkFields {
          talkSectionTitle
          talkSectionDescription
          talkSectionImage {
            sourceUrl
          }
        }
      }
    }
  }
`;
