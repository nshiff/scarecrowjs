import { useParams, Link } from "react-router";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  readingTime: string;
  summary: string;
}

interface PostViewProps {
  posts: BlogPost[];
}

export function PostView({ posts }: PostViewProps) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>Post not found</h2>
        <Link
          to="/"
          style={{
            color: "#2c5282",
            display: "inline-block",
            marginTop: "20px",
          }}
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <article style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "16px" }}>{post.title}</h1>
      <div
        style={{
          fontSize: "0.9em",
          color: "#666",
          marginBottom: "24px",
          padding: "12px 0",
          borderBottom: "1px solid #eee",
        }}
      >
        <span>{post.date}</span>
        <span style={{ margin: "0 8px" }}>•</span>
        <span>{post.readingTime} read</span>
      </div>
      <p
        style={{
          fontSize: "1.1em",
          fontStyle: "italic",
          color: "#4a5568",
          marginBottom: "24px",
        }}
      >
        {post.summary}
      </p>
      <div
        style={{
          lineHeight: "1.8",
          fontSize: "1.1em",
        }}
      >
        {post.content}
      </div>
      <Link
        to="/"
        style={{
          color: "#2c5282",
          display: "block",
          marginTop: "40px",
          padding: "20px 0",
          borderTop: "1px solid #eee",
        }}
      >
        ← Back to Home
      </Link>
    </article>
  );
}
