import { useCommentsContext } from "@/comment/contexts/CommentsContext";
import { Fragment } from "react/jsx-runtime";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

export default function Comments() {
  const { state } = useCommentsContext();

  return (
    <section className="flex flex-col gap-y-4 w-[90%] max-w-3xl mx-auto py-4">
      {state.comments.map((c) => {
        return (
          <Fragment key={c.id}>
            <CommentCard
              data={c}
              isCurrentUser={state.currentUser.username === c.user.username}
            />

            {c.replies.map((r) => (
              <CommentCard
                key={r.id}
                data={r}
                isCurrentUser={state.currentUser.username === r.user.username}
                className="relative ml-5 before:absolute before:-left-4 before:w-0.5 before:h-full before:bg-gray-200 before:rounded-sm"
              />
            ))}
          </Fragment>
        );
      })}

      <AddComment currentUser={state.currentUser} />
    </section>
  );
}
