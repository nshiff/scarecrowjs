import { Link } from "react-router";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  readingTime: string;
  summary: string;
}

interface PostListProps {
  posts: BlogPost[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <div>
      {posts.map((post) => (
        <article
          key={post.id}
          style={{
            marginBottom: "30px",
            padding: "20px",
            border: "1px solid #eee",
            borderRadius: "8px",
          }}
        >
          <h2>
            <Link
              to={`/post/${post.id}`}
              style={{ color: "#2c5282", textDecoration: "none" }}
            >
              {post.title}
            </Link>
          </h2>
          <div
            style={{ fontSize: "0.9em", color: "#666", marginBottom: "12px" }}
          >
            <span>{post.date}</span>
            <span style={{ margin: "0 8px" }}>•</span>
            <span>{post.readingTime} read</span>
          </div>
          <p style={{ lineHeight: "1.6" }}>{post.summary}</p>
          <Link
            to={`/post/${post.id}`}
            style={{
              color: "#2c5282",
              textDecoration: "none",
              display: "inline-block",
              marginTop: "12px",
              fontSize: "0.9em",
            }}
          >
            Read more →
          </Link>
        </article>
      ))}
    </div>
  );
}
