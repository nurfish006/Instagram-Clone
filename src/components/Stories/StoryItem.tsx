// src/components/Stories/StoryItem.tsx
interface StoryItemProps {
  username: string;
  avatar: string;
  seen?: boolean;
}

export default function StoryItem({ username, avatar, seen }: StoryItemProps) {
  return (
    <div className="flex flex-col items-center w-16">
      {/* Avatar with gradient ring */}
      <div
        className={`p-[2px] rounded-full ${
          seen
            ? "bg-gray-300" // seen → gray border
            : "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600"
        }`}
      >
        <img
          src={avatar}
          alt={username}
          className="w-14 h-14 rounded-full border-2 border-white object-cover"
        />
      </div>

      {/* Username */}
      <p className="text-xs text-gray-700 mt-1 truncate w-full text-center">
        {username}
      </p>
    </div>
  );
}
