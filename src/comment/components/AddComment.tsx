import { useState, type FormEvent } from "react";
import { useCommentsContext } from "../contexts/CommentsContext";
import { CommentActionEnum } from "../type/commentActions.type";
import type { User } from "../type/comment.type";
import Button from "@/shared/components/Button";

interface Props {
  currentUser: User;
}

export default function AddComment({ currentUser }: Props) {
  const { dispatch } = useCommentsContext();
  const [message, setMessage] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({ type: CommentActionEnum.ADD_COMMENT, payload: message });
    setMessage("");
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(event.target.value);

  return (
    <div className="grid grid-cols-6 gap-2 bg-white rounded-sm p-3 md:p-4 md:grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] md:gap-4">
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
            name="message"
            id="message"
            className="h-20 p-2 w-full border border-grey-100 outline-purple-600 resize-none"
            placeholder="Add a comment..."
            value={message}
            onChange={onChange}
          />
        </fieldset>
      </form>

      <Button
        className="col-start-5 col-span-full p-3 transition rounded-lg uppercase bg-purple-600 text-white hover:opacity-90 focus:opacity-90 not-disabled:cursor-pointer disabled:bg-grey-500 disabled:hover:opacity-100 disabled:focus:opacity-100 md:row-start-1 md:self-start md:col-start-6"
        form="sendMessage"
        disabled={!!!message}
      >
        Send
      </Button>
    </div>
  );
}
