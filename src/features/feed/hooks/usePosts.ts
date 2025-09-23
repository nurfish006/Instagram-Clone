import { useEffect, useState } from "react";
import type { Post } from "../types";
import { fetchPosts } from "../api/postsApi";

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return { posts, loading };
}
