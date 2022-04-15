import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import CardsSection from "../components/Widgets/Dashboard/CardsSection/CardsSection";
import FeaturedSection from "../components/Widgets/Dashboard/FeaturedSection/FeaturedSection";
import CustomCarousel from "../components/Carousel/Carousel";
import PortfolioSection from "../components/Widgets/Dashboard/portfolioSection/portfolioSection";

export default function Home({ posts, title }) {
  return (
    <>
      <CustomCarousel />
      <Container>
        <CardsSection />
        <PortfolioSection />
        {/* <FeaturedSection posts={posts} title={title} /> */}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query GetHomeAndPosts {
        pageBy(uri: "/") {
          title
        }

        posts {
          nodes {
            title
            date
            slug
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: result.data.posts.nodes,
      title: result.data.pageBy.title,
    },
  };
}
