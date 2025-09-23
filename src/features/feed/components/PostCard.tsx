import { useState } from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";

import type { Post } from "../types";
import CommentList from "./CommentList";
import LikeButton from "./LikeButton";

type Props = { post: Post };

export default function PostCard({ post }: Props) {
  // 🔹 Keep comments in local state
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      user: { username: "you" }, // fake logged-in user
      text: newComment.trim(),
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <article className="bg-white rounded-2xl shadow-sm mb-6 border">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={post.user.avatar}
            alt={post.user.username}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">{post.user.username}</p>
            <span className="text-xs text-gray-500">{post.time}</span>
          </div>
        </div>
        <button className="text-xl text-gray-600 hover:text-black">
          <FiMoreHorizontal />
        </button>
      </header>

      {/* Image */}
      <img
        src={post.image}
        alt={post.caption}
        className="w-full object-cover max-h-[640px]"
        loading="lazy"
      />

      {/* Actions */}
      <div className="px-4 pt-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <LikeButton />
          <button className="text-2xl hover:opacity-70">
            <FaRegComment />
          </button>
          <button className="text-2xl hover:opacity-70">
            <FiSend />
          </button>
        </div>
        <button className="text-2xl hover:opacity-70">
          <BsBookmark />
        </button>
      </div>

      {/* Likes */}
      <div className="px-4 mt-2 text-sm font-semibold">
        {post.likes.toLocaleString()} likes
      </div>

      {/* Caption */}
      <div className="px-4 mt-1 text-sm">
        <span className="font-semibold">{post.user.username}</span>{" "}
        {post.caption}
      </div>

      {/* Comments */}
      <div className="px-4 mt-2">
        <CommentList comments={comments} />
      </div>

      {/* Add Comment */}
      <div className="px-4 py-3 flex items-center border-t text-sm text-gray-500">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
          placeholder="Add a comment..."
          className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
        />
        <button
          onClick={handleAddComment}
          className={`font-semibold text-sm ${
            newComment.trim()
              ? "text-blue-500 hover:opacity-70"
              : "text-gray-300 cursor-default"
          }`}
        >
          Post
        </button>
      </div>
    </article>
  );
}
