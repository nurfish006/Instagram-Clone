import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className="text-2xl transition-colors"
      onClick={() => setLiked(!liked)}
    >
      {liked ? (
        <AiFillHeart className="text-red-500" />
      ) : (
        <AiOutlineHeart />
      )}
    </button>
  );
}
