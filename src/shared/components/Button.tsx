import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  ref?: Ref<HTMLButtonElement>;
}

export default function Button({ ...props }: Props) {
  return (
    <button {...props} ref={props.ref}>
      {props.children}
    </button>
  );
}
