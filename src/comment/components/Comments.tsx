import type { FormEvent } from "react";
import { useCommentsContext } from "@/comment/contexts/CommentsContext";
import { AnimatePresence, motion } from "motion/react";
import { useMessageComment } from "@/comment/hooks/useMessageComment";
import { CommentActionEnum } from "@/comment/type/commentActions.type";
import { Fragment } from "react/jsx-runtime";
import CommentCard from "./CommentCard";
import MessageComment from "./MessageComment";
import MessageForm from "./MessageForm";
import Button from "@/shared/components/Button";

const MotionCommentCard = motion.create(CommentCard);

export default function Comments() {
  const { state, dispatch } = useCommentsContext();
  const { message, setMessage, onChange } = useMessageComment();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({ type: CommentActionEnum.ADD_COMMENT, payload: message });
    setMessage("");
  };

  return (
    <section className="flex flex-col gap-y-4 w-[90%] max-w-3xl mx-auto py-4">
      <AnimatePresence initial={false}>
        {state.comments.map((c) => {
          return (
            <Fragment key={c.id}>
              <MotionCommentCard
                data={c}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
              />

              <AnimatePresence initial={false}>
                {c.replies.map((r) => (
                  <MotionCommentCard
                    key={r.id}
                    data={r}
                    className="relative ml-5 before:absolute before:-left-4 before:w-0.5 before:h-full before:bg-gray-200 before:rounded-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                  />
                ))}
              </AnimatePresence>
            </Fragment>
          );
        })}

        <MessageComment
          currentUser={state.currentUser}
          className="grid grid-cols-6 gap-2 bg-white rounded-sm p-3 md:p-4 md:grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] md:gap-4"
        >
          <MessageForm
            id="addMessage"
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
            form="addMessage"
            disabled={!!!message}
          >
            Send
          </Button>
        </MessageComment>
      </AnimatePresence>
    </section>
  );
}
