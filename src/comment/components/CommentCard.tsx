import type { HTMLAttributes } from "react";
import type { Comment, Reply as TReply } from "@/comment/type/comment.type";
import UserProfile from "./UserProfile";
import ScoreControl from "./ScoreControl";
import ActionControl from "./ActionControl";

interface Props extends HTMLAttributes<HTMLDivElement> {
  data: Comment | TReply;
  isCurrentUser: boolean;
}

export default function CommentCard({ data, isCurrentUser, className }: Props) {
  const { content, createdAt, score, user } = data;
  const renderMessage = () => {
    if ("replyingTo" in data) {
      return (
        <>
          <span className="font-semibold text-purple-600">
            @{data.replyingTo}
          </span>{" "}
          {content}
        </>
      );
    }

    return content;
  };

  return (
    <article
      className={`grid grid-cols-12 gap-y-3 p-3 rounded-md bg-white text-grey-500 ${className || ""}`}
    >
      <header className="col-span-full flex items-center gap-x-3">
        <UserProfile user={user} isCurrentUser={isCurrentUser} />

        <time>{createdAt}</time>
      </header>

      <ScoreControl score={score} className="row-start-3 col-span-4" />

      <p className="row-start-2 col-span-full">{renderMessage()}</p>

      <ActionControl
        isCurrentUser={isCurrentUser}
        className={`${isCurrentUser ? "flex gap-x-4 col-start-8" : "col-start-10"} row-start-3 col-span-full ml-auto`}
      />
    </article>
  );
}
