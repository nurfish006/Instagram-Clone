import PostCard from "./components/PostCard";
import { usePosts } from "./hooks/usePosts";
import Stories from "../../components/Stories/Stories";

export default function Feed() {
  const { posts, loading } = usePosts();

  console.log("Feed rendering", { posts, loading });

  if (loading) return <p className="p-4 text-red-500">Loading feed...</p>;

  return (
    <div>
    <Stories />
    <main className="max-w-xl mx-auto p-4">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
    </div>
  );
}
