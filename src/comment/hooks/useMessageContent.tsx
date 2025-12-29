import { useState } from "react";
import type { Comment, Reply } from "@/comment/type/comment.type";

export function useMessageContent(data: Comment | Reply) {
  const [hasEdited, setHasEdited] = useState(false);
  const [hasReplied, setHasReplied] = useState(false);
  const toggleEdited = () => setHasEdited(!hasEdited);
  const toggleReplied = () => setHasReplied(!hasReplied);
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
    toggleEdited,
    renderMessage,
    hasReplied,
    toggleReplied,
  };
}
