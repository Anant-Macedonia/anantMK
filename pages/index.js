import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import { Container } from "@mui/material";
import CardsSection from "../components/Widgets/Dashboard/CardsSection/CardsSection";
import CustomCarousel from "../components/Carousel/Carousel";
import PortfolioSection from "../components/Widgets/Dashboard/PortfolioSection/PortfolioSection";
import WhyUs from "../components/Widgets/Dashboard/WhyUsSection/WhyUs";
import BlogSection from "../components/Widgets/Dashboard/BlogSection/BlogSection";

export default function Home({ posts }) {
  return (
    <>
      <CustomCarousel />
      <Container>
        <CardsSection />
        <PortfolioSection />
        <WhyUs buttonText={"LET'S PLAN YOUR PROJECT"} />
        <BlogSection posts={posts} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const result = await client.query({
    query: gql`
      query GetHomeAndPosts {
        posts(first: 3) {
          nodes {
            title
            content
            date
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      posts: result.data.posts.nodes,
    },
  };
}
