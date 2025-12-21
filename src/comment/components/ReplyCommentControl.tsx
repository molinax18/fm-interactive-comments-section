import { useCommentsContext } from "../contexts/CommentsContext";
import { useMessageComment } from "../hooks/useMessageComment";
import { CommentActionEnum } from "../type/commentActions.type";
import type { FormEvent, HTMLAttributes } from "react";
import type { Comment, Reply, User } from "../type/comment.type";
import AddComment from "./AddComment";

interface Props extends HTMLAttributes<HTMLFormElement> {
  replyComment: () => void;
  data: Comment | Reply;
  currentUser: User;
}

export default function ReplyCommentControl({
  replyComment,
  currentUser,
  data,
}: Props) {
  const { dispatch } = useCommentsContext();
  const { message, onChange } = useMessageComment();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({
      type: CommentActionEnum.REPLY_COMMENT,
      payload: {
        idToReply: data.id,
        content: message,
      },
    });

    replyComment();
  };

  return (
    <AddComment
      currentUser={currentUser}
      onSubmit={onSubmit}
      onChange={onChange}
      message={message}
    />
  );
}
