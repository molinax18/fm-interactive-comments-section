import { useCommentsContext } from "@/comment/contexts/CommentsContext";
import { useMessageComment } from "@/comment/hooks/useMessageComment";
import { CommentActionEnum } from "@/comment/type/commentActions.type";
import type { FormEvent } from "react";
import type { User } from "@/comment/type/comment.type";
import Button from "@/shared/components/Button";

interface Props {
  currentUser: User;
}

export default function AddComment({ currentUser }: Props) {
  const { dispatch } = useCommentsContext();
  const { message, setMessage, onChange } = useMessageComment();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({ type: CommentActionEnum.ADD_COMMENT, payload: message });
    setMessage("");
  };

  return (
    <article className="grid grid-cols-6 gap-2 bg-white rounded-sm p-3 md:p-4 md:grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] md:gap-4">
      <img
        src={currentUser.image.png}
        alt={currentUser.username}
        className="self-center size-8 md:self-start"
      />

      <form
        id="sendMessage"
        className="row-start-1 col-start-1 col-span-full md:col-start-2 md:col-span-4"
        onSubmit={onSubmit}
      >
        <fieldset>
          <textarea
            className="h-20 w-full text-area"
            placeholder="Add a comment..."
            value={message}
            onChange={onChange}
          />
        </fieldset>
      </form>

      <Button
        className="col-start-5 col-span-full p-3 md:row-start-1 md:self-start btn-fill md:col-start-6"
        form="sendMessage"
        disabled={!!!message}
      >
        Send
      </Button>
    </article>
  );
}
