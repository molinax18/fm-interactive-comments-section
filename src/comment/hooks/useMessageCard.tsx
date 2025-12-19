import { useState } from "react";
import type { Comment, Reply } from "@/comment/type/comment.type";

export function useMessageCard(data: Comment | Reply) {
  const [hasEdited, setHasEdited] = useState(false);
  const editComment = () => setHasEdited(!hasEdited);
  const renderMessage = () => {
    if ("replyingTo" in data) {
      return (
        <>
          <span className="font-semibold text-purple-600">
            @{data.replyingTo}
          </span>{" "}
          {data.content}
        </>
      );
    }

    return data.content;
  };

  return {
    hasEdited,
    editComment,
    renderMessage,
  };
}
