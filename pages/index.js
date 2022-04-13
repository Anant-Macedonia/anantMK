import { client } from "../lib/apollo";
import { gql } from "@apollo/client";

import CardsSection from "../components/Widgets/Dashboard/CardsSection/CardsSection";
import FeaturedSection from "../components/Widgets/Dashboard/FeaturedSection/FeaturedSection";

export default function Home({ posts, title }) {
  return (
    <div>
      <CardsSection />
      <FeaturedSection posts={posts} title={title} />
    </div>
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
