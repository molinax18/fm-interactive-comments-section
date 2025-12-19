import { useCommentsContext } from "../contexts/CommentsContext";
import { useMessageComment } from "../hooks/useMessageComment";
import { useMessageCard } from "../hooks/useMessageCard";
import { CommentActionEnum } from "../type/commentActions.type";
import type { Comment, Reply } from "../type/comment.type";
import type { FormEvent } from "react";
import Button from "@/shared/components/Button";

interface Props {
  hasEdited: boolean;
  editComment: () => void;
  data: Comment | Reply;
  className?: string;
}

export default function CommentMessageControl({
  hasEdited,
  editComment,
  data,
  className,
}: Props) {
  const { dispatch } = useCommentsContext();
  const { message, onChange } = useMessageComment(data.content);
  const { renderMessage } = useMessageCard(data);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({
      type: CommentActionEnum.EDIT_COMMENT,
      payload: {
        id: data.id,
        content: message,
      },
    });

    editComment();
  };

  return hasEdited ? (
    <form onSubmit={onSubmit} className={`flex gap-x-2 ${className || ""}`}>
      <fieldset className="flex-initial w-[80%]">
        <textarea
          className="w-full text-area"
          placeholder="Add a comment..."
          value={message}
          onChange={onChange}
        />
      </fieldset>

      <Button
        type="submit"
        className="col-start-8 grow self-start p-3 btn-fill"
        disabled={!!!message}
      >
        Update
      </Button>
    </form>
  ) : (
    <p className={className || ""}>{renderMessage()}</p>
  );
}
