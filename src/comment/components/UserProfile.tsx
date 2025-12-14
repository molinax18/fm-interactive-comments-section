import type { User } from "../type/comment.type";
import Badge from "@/shared/components/Badge";

interface Props {
  user: User;
  className?: string;
  isCurrentUser: boolean;
}

export default function UserProfile({ user, className, isCurrentUser }: Props) {
  const { image, username } = user;

  return (
    <div className={className || ""}>
      <img className="size-8" src={image.png} alt={username} />
      <span className="font-semibold text-gray-800">{username}</span>
      {isCurrentUser && <Badge>you</Badge>}
    </div>
  );
}
