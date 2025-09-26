import PostCard from "./components/PostCard";
import { usePosts } from "./hooks/usePosts";
import Stories from "../../components/Stories/Stories";
import Suggestions from "./components/Suggestions/Suggestions";

export default function Feed() {
  const { posts, loading } = usePosts();

  console.log("Feed rendering", { posts, loading });

  if (loading) return <p className="p-4 text-red-500">Loading feed...</p>;

  return (
    <div className="w-full">
      <Stories />
      <main className="max-w-xl mx-auto p-4">
        {posts.map((post, idx) => (
          <div key={post.id}>
            <PostCard post={post} />
            {idx === 1 && <Suggestions />}
          </div>
        ))}
      </main>
    </div>
  );
}