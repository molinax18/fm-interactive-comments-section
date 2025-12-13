import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { ColorVariant } from "@/shared/types/variantColor.type";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme?: ColorVariant;
}

export default function Button({ theme = "primary", ...props }: Props) {
  return (
    <button {...props} data-theme={theme}>
      {props.children}
    </button>
  );
}
