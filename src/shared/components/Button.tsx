import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Variant } from "@/shared/types/variantColor.type";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme?: Variant;
}

export default function Button({ theme = Variant.Primary, ...props }: Props) {
  return (
    <button {...props} data-theme={theme}>
      {props.children}
    </button>
  );
}
