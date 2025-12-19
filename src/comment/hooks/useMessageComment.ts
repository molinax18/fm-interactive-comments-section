import { useState } from "react";

export function useMessageComment(value?: string) {
  const [message, setMessage] = useState(value || "");
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(event.target.value);

  return {
    message,
    setMessage,
    onChange,
  };
}
