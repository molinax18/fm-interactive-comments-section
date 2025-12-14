import type { HTMLAttributes } from "react";
import { Reply, Delete, Edit } from "@/shared/components/svg";
import { motion } from "motion/react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isCurrentUser: boolean;
  onReply?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const buttonStyles =
  "flex gap-x-2 items-center font-semibold hover:cursor-pointer";

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
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`${buttonStyles} text-pink-400`}
            onClick={onDelete}
          >
            <Delete />
            Delete
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className={`${buttonStyles} text-purple-600`}
            onClick={onEdit}
          >
            <Edit />
            Edit
          </motion.button>
        </>
      ) : (
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={`${buttonStyles} text-purple-600`}
          onClick={onReply}
        >
          <Reply />
          Reply
        </motion.button>
      )}
    </div>
  );
}
