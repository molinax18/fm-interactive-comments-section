import type { HTMLAttributes } from "react";
import { useModal } from "@/shared/hooks/useModal";
import { Reply, Delete, Edit } from "@/shared/components/svg";
import Modal from "@/shared/components/Modal";
import Button from "@/shared/components/Button";
import MotionButtonTap from "@/shared/components/MotionButtonTap";

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
  const { openModal, onClose, onOpen } = useModal();

  return (
    <>
      <div className={className || ""}>
        {isCurrentUser ? (
          <>
            <MotionButtonTap
              className={`${buttonStyles} text-pink-400`}
              onClick={onOpen}
            >
              <Delete />
              Delete
            </MotionButtonTap>

            <MotionButtonTap
              className={`${buttonStyles} text-purple-600`}
              onClick={onEdit}
            >
              <Edit />
              Edit
            </MotionButtonTap>
          </>
        ) : (
          <MotionButtonTap
            className={`${buttonStyles} text-purple-600`}
            onClick={onReply}
          >
            <Reply />
            Reply
          </MotionButtonTap>
        )}
      </div>

      {openModal && (
        <Modal className="flex flex-col gap-y-4 max-w-[36ch]">
          <h4 className="font-semibold text-grey-800 text-xl">
            Delete comment
          </h4>

          <p className="text-grey-500">
            Are you sure you want to delete this comment? This will remove the
            comment and can&apos;t be undone.
          </p>

          <div className="flex gap-x-4">
            <Button
              className="grow transition bg-grey-500 text-white uppercase py-2 px-3 rounded-lg hover:cursor-pointer hover:bg-grey-500/90"
              onClick={onClose}
            >
              No, cancel
            </Button>

            <Button
              className="grow transition bg-pink-400 text-white uppercase py-2 px-3 rounded-lg hover:cursor-pointer hover:bg-pink-400/90"
              onClick={onDelete}
            >
              Yes, delete
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}
