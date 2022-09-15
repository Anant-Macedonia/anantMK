import { gql } from "@apollo/client";

export const GET_COMPANY_PAGE_DATA = gql`
  query GetCompanyPage {
    pageBy(id: "cG9zdDoxMDQ=") {
      id
      title
      companyFields {
        heroTitle
        heroDescription
        heroImage {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
        ourMissionTitle
        ourMissionDescription
        ourMissionImage {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
        ourTeamTitle
        ourTeamDescription
        ourTeamImages {
          sourceUrl
        }
        partOfOurTeamTitle
        partOfOurTeamDescription
        partOfOurTeamImage {
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
