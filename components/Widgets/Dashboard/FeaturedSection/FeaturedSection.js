import Link from "next/link";

const FeaturedSection = ({ posts, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {posts.map((post) => {
        return (
          <div key={post.slug}>
            <Link href={`/category/blog/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedSection;
