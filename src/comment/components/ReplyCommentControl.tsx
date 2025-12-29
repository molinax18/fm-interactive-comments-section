import { useMessageComment } from "@/comment/hooks/useMessageComment";
import type { FormEvent, HTMLAttributes } from "react";
import type { User } from "@/comment/type/comment.type";
import MessageComment from "./MessageComment";
import Button from "@/shared/components/Button";
import MessageForm from "./MessageForm";

interface Props extends HTMLAttributes<HTMLFormElement> {
  toggleReplied: () => void;
  replyComment: (data: { idToReply: string; content: string }) => void;
  idToReply: string;
  currentUser: User;
}

export default function ReplyCommentControl({
  toggleReplied,
  replyComment,
  currentUser,
  idToReply,
}: Props) {
  const { message, onChange } = useMessageComment();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    replyComment({ idToReply, content: message });
    toggleReplied();
  };

  return (
    <MessageComment
      currentUser={currentUser}
      className="grid grid-cols-6 gap-2 bg-white rounded-sm p-3 md:p-4 md:grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] md:gap-4"
    >
      <MessageForm
        id="replyMessage"
        message={message}
        onChange={onChange}
        onSubmit={onSubmit}
        className="row-start-1 col-start-1 col-span-full md:col-start-2 md:col-span-4"
      >
        <textarea
          className="h-20 w-full text-area"
          placeholder="Add a comment..."
          value={message}
          onChange={onChange}
        />
      </MessageForm>

      <Button
        className="col-start-5 col-span-full p-3 md:row-start-1 md:self-start btn-fill md:col-start-6"
        form="replyMessage"
        disabled={!!!message}
      >
        Reply
      </Button>
    </MessageComment>
  );
}
