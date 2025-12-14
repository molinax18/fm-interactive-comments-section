import type { HTMLAttributes, ReactNode } from "react";
import type { ColorVariant } from "@/shared/types/variantColor.type";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  theme?: ColorVariant;
}

export default function Badge({ theme = "primary", ...props }: Props) {
  return (
    <span
      {...props}
      data-theme={theme}
      className={`rounded-sm p-1 ${props.className || ""}`}
    >
      {props.children}
    </span>
  );
}
