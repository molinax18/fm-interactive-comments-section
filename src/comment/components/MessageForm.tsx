import type { ChangeEvent, FormEvent } from "react";

interface Props {
  id: string;
  message: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  children: React.ReactNode;
  className?: string;
}

export default function MessageForm({
  id,
  onSubmit,
  children,
  className,
}: Props) {
  return (
    <form id={id} className={className || ""} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
