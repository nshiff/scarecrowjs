import { Route, Routes } from "react-router";
import { useState } from "react";
import { PostList } from "./components/PostList";
import { PostView } from "./components/PostView";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  readingTime: string;
  summary: string;
}

export function App() {
  const [posts] = useState<BlogPost[]>([
    {
      id: 1,
      title: "Why Scarecrows Work",
      date: "2025-05-01",
      readingTime: "3 min",
      summary:
        "Learn about the psychology behind why scarecrows are effective at protecting crops from birds.",
      content:
        "Birds are naturally afraid of human-like figures in fields. This ancient technique has proven effective for centuries by exploiting birds' innate fear of predators. The human shape, combined with moving elements like loose clothing or ribbons, creates an effective deterrent that keeps crops safe from avian visitors. Research shows that birds have excellent memory and pattern recognition, which means they learn to associate these human-like figures with potential danger.",
    },
    {
      id: 2,
      title: "History of Scarecrows",
      date: "2025-04-28",
      readingTime: "4 min",
      summary:
        "A journey through time exploring how scarecrows evolved from ancient Egypt to modern day.",
      content:
        "Ancient civilizations used wooden scarecrows to protect wheat fields. The practice dates back to Egyptian farmers who used wooden frames along the Nile River. In medieval Britain, young children were employed as 'live scarecrows' before being replaced by straw-filled effigies. Japanese farmers created kakashi, elaborate scarecrows that became cultural icons. These traditional methods have persisted for thousands of years, proving their effectiveness across different cultures and agricultural systems.",
    },
    {
      id: 3,
      title: "Modern Scarecrow Tech",
      date: "2025-04-25",
      readingTime: "5 min",
      summary:
        "Discover how modern technology is revolutionizing the ancient practice of crop protection.",
      content:
        "Today's scarecrows might include motion sensors and reflective materials. Some farms use automated systems that combine traditional scarecrow shapes with modern technology like infrared sensors, rotating arms, and even AI-powered recognition systems. These smart scarecrows can detect bird presence and respond with movement or sounds, providing more effective crop protection. The integration of solar panels allows these devices to operate autonomously, while machine learning algorithms help them adapt to different bird species and behaviors.",
    },
  ]);

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
          <Route path="/" element={<PostList posts={posts} />} />
          <Route path="/post/:id" element={<PostView posts={posts} />} />
        </Routes>
      </main>
    </div>
  );
}
