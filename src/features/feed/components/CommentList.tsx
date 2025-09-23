// feed/components/CommentList.tsx
import type { Comment } from "../types";

type Props = { comments: Comment[] };

export default function CommentList({ comments }: Props) {
  return (
    <div className="space-y-1">
      {comments.map((comment) => (
        <p key={comment.id} className="text-sm">
          <span className="font-semibold">{comment.user.username}</span>{" "}
          {comment.text}
        </p>
      ))}
    </div>
  );
}
