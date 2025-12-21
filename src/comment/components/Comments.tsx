import { useCommentsContext } from "@/comment/contexts/CommentsContext";
import { AnimatePresence, motion } from "motion/react";
import { useMessageComment } from "../hooks/useMessageComment";
import { CommentActionEnum } from "../type/commentActions.type";
import { Fragment } from "react/jsx-runtime";
import type { FormEvent } from "react";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

const MotionCommentCard = motion.create(CommentCard);

export default function Comments() {
  const { state } = useCommentsContext();
  const { dispatch } = useCommentsContext();
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

        <AddComment
          currentUser={state.currentUser}
          onSubmit={onSubmit}
          message={message}
          onChange={onChange}
        />
      </AnimatePresence>
    </section>
  );
}
