import type { HTMLAttributes } from "react";
import { Reply, Delete, Edit } from "@/shared/components/svg";
import Button from "@/shared/components/Button";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isCurrentUser: boolean;
  onReply?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const buttonStyles = "flex gap-x-2 items-center font-semibold";

export default function ActionControl({
  isCurrentUser,
  className,
  onReply,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className={className || ""}>
      {isCurrentUser ? (
        <>
          <Button
            className={`${buttonStyles} text-pink-400`}
            onClick={onDelete}
          >
            <Delete />
            Delete
          </Button>

          <Button
            className={`${buttonStyles} text-purple-600`}
            onClick={onEdit}
          >
            <Edit />
            Edit
          </Button>
        </>
      ) : (
        <Button className={`${buttonStyles} text-purple-600`} onClick={onReply}>
          <Reply />
          Reply
        </Button>
      )}
    </div>
  );
}
