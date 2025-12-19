import type { HTMLAttributes } from "react";
import type { User } from "@/comment/type/comment.type";
import Badge from "@/shared/components/Badge";

interface Props extends HTMLAttributes<HTMLDivElement> {
  user: User;
  isCurrentUser: boolean;
}

export default function UserProfile({ user, isCurrentUser, className }: Props) {
  const { image, username } = user;

  return (
    <div className={`flex items-center gap-x-3 ${className || ""}`}>
      <img className="size-8" src={image.png} alt={username} />

      <span className="font-semibold text-gray-800">{username}</span>

      {isCurrentUser && (
        <Badge className="bg-purple-600 text-white text-sm px-3 py-0.5">
          you
        </Badge>
      )}
    </div>
  );
}
