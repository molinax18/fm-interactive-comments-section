import { motion, type HTMLMotionProps } from "framer-motion";

export default function MotionButtonTap({
  ...props
}: HTMLMotionProps<"button">) {
  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      className={props.className || ""}
      {...props}
    >
      {props.children}
    </motion.button>
  );
}
