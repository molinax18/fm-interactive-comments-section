import type { Comment, Reply, User } from "@/comment/type/comment.type";

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
    content: comment.id === id ? `${content} (edited)` : comment.content,
    replies: comment.replies.map((r) =>
      r.id === id ? { ...r, content: `${content} (edited)` } : r
    ),
  };
}

export function replyComment(
  comment: Comment,
  idToReply: string,
  content: string,
  currentUser: User
): Comment {
  const targetUser =
    comment.id === idToReply
      ? comment.user.username
      : comment.replies.find((r) => r.id === idToReply)?.user.username;

  if (targetUser) {
    const newReply: Reply = {
      id: crypto.randomUUID(),
      content: content,
      createdAt: new Date().toISOString(),
      score: 0,
      replyingTo: targetUser || comment.user.username,
      user: { ...currentUser },
    };

    return {
      ...comment,
      replies: [...comment.replies, newReply],
    };
  }

  return comment;
}
