import type { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

export default function Badge({ ...props }: Props) {
  return (
    <span {...props} className={`rounded-sm p-1 ${props.className || ""}`}>
      {props.children}
    </span>
  );
}
