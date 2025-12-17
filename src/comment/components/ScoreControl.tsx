import type { HTMLAttributes } from "react";
import { motion } from "motion/react";
import { Minus, Plus } from "@/shared/components/svg/";

interface Props extends HTMLAttributes<HTMLDivElement> {
  score: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const buttonStyles =
  "p-1.5 not-disabled:cursor-pointer disabled:text-purple-200 text-purple-600";

export default function ScoreControl({
  score,
  onIncrement,
  onDecrement,
  className,
}: Props) {
  return (
    <div
      className={`flex justify-between rounded-sm bg-grey-100 py-1 px-2 ${className || ""}`}
    >
      <motion.button
        whileTap={{ scale: 0.7 }}
        className={buttonStyles}
        onClick={onIncrement}
      >
        <Plus />
      </motion.button>

      <span className="font-semibold text-purple-600">{score}</span>

      <motion.button
        whileTap={{ scale: 0.7 }}
        className={buttonStyles}
        disabled={score === 0}
        onClick={onDecrement}
      >
        <Minus />
      </motion.button>
    </div>
  );
}
