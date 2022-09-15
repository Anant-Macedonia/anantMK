import { gql } from "@apollo/client";

export const GET_HOME_DATA = gql`
  query GetHome {
    pageBy(id: "cG9zdDoy") {
      acfHomePageFields {
        cassandraLinkDescription
        cassandraLinkTitle
        clientSectionTitle
        contactDescription
        contactTitle
        enterpriseSectionTitle
        heroDescription
        heroTitle
        testimonialTitle
        serviceSectionImage {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
        cassandraLinkImage {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
        contactImage {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
        heroImage {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
    homecards {
      nodes {
        acfHomeCardFields {
          buttonLink {
            title
            url
            target
          }
          title
          description
        }
      }
    }
    clients(first: 20) {
      nodes {
        clientFields {
          clientLogo {
            sourceUrl
          }
        }
      }
    }
    testimonialCards {
      nodes {
        acfTestimonialCardFields {
          clientJobPosition
          clientName
          testamonialText
          clientImage {
            sourceUrl
          }
        }
      }
    }
    enterpriseCards {
      nodes {
        enterpriseCardFields {
          enterpriseTitle
          enterpriseDescription
          enterpriseImage {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
    testimonialCards {
      nodes {
        acfTestimonialCardFields {
          clientName
          clientJobPosition
          testamonialText
          clientImage {
            sourceUrl
          }
        }
      }
    }
  }
`;
