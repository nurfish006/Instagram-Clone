interface StoryBubbleProps {
  username: string;
  avatar: string;
  size?: number;
}

export default function StoryBubble({ username, avatar, size = 40 }: StoryBubbleProps) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={avatar}
        alt={username}
        className={`rounded-full object-cover`}
        style={{ width: size, height: size }}
      />
      <span className="text-sm font-medium">{username}</span>
    </div>
  );
}
