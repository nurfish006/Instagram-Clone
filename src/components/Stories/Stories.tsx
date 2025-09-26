// src/components/Stories/Stories.tsx
import StoryItem from "./StoryItem";

export default function Stories() {
  const stories = [
    { username: "Haile", avatar: "https://i.pravatar.cc/150?img=1" },
    { username: "Yite", avatar: "https://i.pravatar.cc/150?img=2" },
    { username: "Nura", avatar: "https://i.pravatar.cc/150?img=3" },
    { username: "King", avatar: "https://i.pravatar.cc/150?img=4" },
    { username: "Queen", avatar: "https://i.pravatar.cc/150?img=5" },
    { username: "Mecca", avatar: "https://i.pravatar.cc/150?img=6" },
  ];

  return (
    <div className="flex space-x-4 overflow-x-auto scrollbar-hide p-3 bg-white w-full rounded-lg mb-6">
      {stories.map((story, idx) => (
        <StoryItem key={idx} {...story} />
      ))}
    </div>
  );
}
