import { useMessageComment } from "@/comment/hooks/useMessageComment";
import { useMessageContent } from "@/comment/hooks/useMessageContent";
import type { Comment, Reply } from "@/comment/type/comment.type";
import type { FormEvent, HTMLAttributes } from "react";
import Button from "@/shared/components/Button";

interface Props extends HTMLAttributes<HTMLFormElement> {
  hasEdited: boolean;
  toggleEdited: () => void;
  editComment: (data: { id: string; content: string }) => void;
  data: Comment | Reply;
}

export default function CommentMessageControl({
  hasEdited,
  toggleEdited,
  editComment,
  data,
  className,
}: Props) {
  const { message, onChange } = useMessageComment(data.content);
  const { renderMessage } = useMessageContent(data);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    editComment({ id: data.id, content: message });
    toggleEdited();
  };

  return hasEdited ? (
    <form
      onSubmit={onSubmit}
      className={`flex flex-col gap-y-1 md:gap-x-3 md:flex-row ${className || ""}`}
    >
      <fieldset className="md:flex-initial md:w-[80%]">
        <textarea
          className="w-full text-area"
          placeholder="Add a comment..."
          value={message}
          onChange={onChange}
        />
      </fieldset>

      <Button
        type="submit"
        className="col-start-8 grow btn-fill p-2 md:p-3 md:self-start"
        disabled={!!!message}
      >
        Update
      </Button>
    </form>
  ) : (
    <p className={className || ""}>{renderMessage()}</p>
  );
}
