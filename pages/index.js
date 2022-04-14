import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import Link from "next/link";
import CustomCarousel from "../components/Carousel/Carousel";

export default function Home({ posts, title }) {
  return (
    <div>
      <CustomCarousel />
      <h1>{title}</h1>
      {posts.map((post) => {
        return (
          <div key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.date}</p>
          </div>
        );
      })}
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
