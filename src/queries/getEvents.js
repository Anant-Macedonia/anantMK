import { gql } from "@apollo/client";

export const GET_EVENTS_PAGE_DATA = gql`
  query GetEventsPage {
    pageBy(id: "cG9zdDoxMTc=") {
      eventsFields {
        heroTitle
        heroDescription
        heroImage {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
        upcomingEventsTitle
      }
    }
  }
`;
