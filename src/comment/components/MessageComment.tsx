import type { User } from "@/comment/type/comment.type";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  currentUser: User;
  children: React.ReactNode;
}

export default function MessageComment({ ...props }: Props) {
  return (
    <article {...props}>
      <img
        src={props.currentUser.image.png}
        alt={props.currentUser.username}
        className="self-center size-8 md:self-start"
      />

      {props.children}
    </article>
  );
}
