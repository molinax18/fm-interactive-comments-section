import type { Comment } from "../type/comment.type";

function updateScore(score: number, delta: 1 | -1): number {
  return delta === -1 ? Math.max(0, score - 1) : score + 1;
}

export function updateCommentScore(
  comment: Comment,
  id: string,
  delta: 1 | -1
): Comment {
  return {
    ...comment,
    score:
      comment.id === id ? updateScore(comment.score, delta) : comment.score,
    replies: comment.replies.map((r) =>
      r.id === id ? { ...r, score: updateScore(r.score, delta) } : r
    ),
  };
}

export function editComment(
  comment: Comment,
  id: string,
  content: string
): Comment {
  return {
    ...comment,
    content: comment.id === id ? content : comment.content,
    replies: comment.replies.map((r) =>
      r.id === id ? { ...r, content: content } : r
    ),
  };
}
