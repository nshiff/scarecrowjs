import { Route, Routes } from "react-router";
import { PostList } from "./components/PostList";
import { PostView } from "./components/PostView";

export function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <header
        style={{
          marginBottom: "40px",
          borderBottom: "1px solid #eee",
          paddingBottom: "20px",
        }}
      >
        <h1 style={{ color: "#1a365d" }}>ScarecrowJS Blog</h1>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostView />} />
        </Routes>
      </main>
    </div>
  );
}
