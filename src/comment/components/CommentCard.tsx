import { useCommentsContext } from "@/comment/contexts/CommentsContext";
import { useMessageContent } from "@/comment/hooks/useMessageContent";
import { formatTimeComment } from "@/comment/utils/commentDate";
import type { Comment, Reply as TReply } from "@/comment/type/comment.type";
import { type HTMLAttributes, forwardRef } from "react";
import UserProfile from "./UserProfile";
import ScoreControl from "./ScoreControl";
import ActionControl from "./ActionControl";
import CommentMessageControl from "./CommentMessageControl";
import ReplyCommentControl from "./ReplyCommentControl";
import { useCommentActions } from "@/comment/hooks/useCommentActions";

interface Props extends HTMLAttributes<HTMLDivElement> {
  data: Comment | TReply;
  ref: React.Ref<HTMLDivElement>;
}

const CommentCard: React.FC<Props> = forwardRef(({ data, className }, ref) => {
  const {
    state: { currentUser },
    dispatch,
  } = useCommentsContext();
  const {
    replyComment,
    incrementScore,
    decrementScore,
    deleteComment,
    editComment,
  } = useCommentActions(dispatch);
  const { toggleEdited, hasEdited, hasReplied, toggleReplied } =
    useMessageContent(data);
  const { createdAt, score, user, id } = data;
  const isCurrentUser = currentUser.username === user.username;

  return (
    <div ref={ref} className={`flex flex-col gap-y-3 ${className || ""}`}>
      <article
        className={`grid grid-cols-12 gap-y-3 p-3 rounded-md bg-white text-grey-500 md:gap-x-3 md:p-4`}
      >
        <header className="col-span-full flex items-center gap-x-3 md:row-start-1 md:col-start-2 md:col-span-8">
          <UserProfile user={user} isCurrentUser={isCurrentUser} />

          <time dateTime={createdAt}>{formatTimeComment(createdAt)}</time>
        </header>

        <ScoreControl
          score={score}
          className="row-start-3 col-span-4 md:min-h-30 md:col-start-1 md:col-span-1 md:row-start-1 md:row-span-3 md:flex-col md:items-center md:py-3"
          onIncrement={() => incrementScore(id)}
          onDecrement={() => decrementScore(id)}
        />

        <CommentMessageControl
          data={data}
          hasEdited={hasEdited}
          editComment={editComment}
          toggleEdited={toggleEdited}
          className="row-start-2 col-span-full md:col-start-2"
        />

        <ActionControl
          isCurrentUser={isCurrentUser}
          className={`${isCurrentUser ? "flex gap-x-4 col-start-7" : "col-start-10"} row-start-3 col-span-full self-center ml-auto md:row-start-1`}
          onDelete={() => deleteComment(id)}
          onEdit={toggleEdited}
          onReply={toggleReplied}
        />
      </article>

      {hasReplied && (
        <ReplyCommentControl
          idToReply={id}
          toggleReplied={toggleReplied}
          replyComment={replyComment}
          currentUser={currentUser}
        />
      )}
    </div>
  );
});

export default CommentCard;
