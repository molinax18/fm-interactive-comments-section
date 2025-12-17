import { motion, type HTMLMotionProps } from "framer-motion";

interface MotionButtonTapProps extends HTMLMotionProps<"button"> {
  className?: string;
}

export default function MotionButtonTap({
  className,
  children,
  ...props
}: MotionButtonTapProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={className || ""}
      {...props}
    >
      {children}
    </motion.button>
  );
}
