import { createPortal } from "react-dom";
import { motion } from "motion/react";
import type { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Modal({ ...props }: Props) {
  return createPortal(
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 grid place-items-center bg-black/50"
    >
      <div
        className={`bg-white w-[90%] p-4 rounded-lg ${props.className || ""}`}
        role="dialog"
        aria-modal="true"
        {...props}
      >
        {props.children}
      </div>
    </motion.div>,
    document.body
  );
}
