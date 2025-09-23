import type { Post } from "../types";

type Props = { post: Post };

export default function PostCard({ post }: Props) {
  return (
    <article className="bg-white rounded-2xl shadow-sm mb-6">
      {/* Header */}
      <header className="flex items-center gap-3 p-4">
        <img
          src={post.user.avatar}
          alt={post.user.username}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-semibold text-sm">{post.user.username}</p>
          <span className="text-xs text-gray-500">{post.time}</span>
        </div>
      </header>

      {/* Image */}
      <img
        src={post.image}
        alt={post.caption}
        className="w-full object-cover max-h-[640px]"
        loading="lazy"
      />

      {/* Footer */}
      <div className="p-4">
        <p className="mt-2 text-sm">
          <span className="font-semibold">{post.user.username}</span>{" "}
          {post.caption}
        </p>
        <p className="text-sm font-semibold mt-2">
          {post.likes.toLocaleString()} likes
        </p>
      </div>
    </article>
  );
}
