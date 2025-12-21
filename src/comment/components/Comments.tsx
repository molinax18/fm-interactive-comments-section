import { useCommentsContext } from "@/comment/contexts/CommentsContext";
import { AnimatePresence, motion } from "motion/react";
import { Fragment } from "react/jsx-runtime";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

const MotionCommentCard = motion.create(CommentCard);

export default function Comments() {
  const { state } = useCommentsContext();

  return (
    <section className="flex flex-col gap-y-4 w-[90%] max-w-3xl mx-auto py-4">
      <AnimatePresence initial={false}>
        {state.comments.map((c) => {
          return (
            <Fragment key={c.id}>
              <MotionCommentCard
                data={c}
                isCurrentUser={state.currentUser.username === c.user.username}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
              />

              <AnimatePresence initial={false}>
                {c.replies.map((r) => (
                  <MotionCommentCard
                    key={r.id}
                    data={r}
                    isCurrentUser={
                      state.currentUser.username === r.user.username
                    }
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

        <AddComment currentUser={state.currentUser} />
      </AnimatePresence>
    </section>
  );
}
