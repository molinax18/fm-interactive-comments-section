import type { HTMLAttributes } from "react";
import { Minus, Plus } from "@/shared/components/svg/";
import Button from "@/shared/components/Button";

interface Props extends HTMLAttributes<HTMLDivElement> {
  score: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

export default function ScoreControl({
  score,
  onIncrement,
  onDecrement,
  className,
  ...props
}: Props) {
  return (
    <div
      {...props}
      className={`flex justify-between rounded-sm bg-grey-100 py-1 px-2 ${className || ""}`}
    >
      <Button className="text-purple-200" onClick={onIncrement}>
        <Plus />
      </Button>

      <span className="font-semibold text-purple-600">{score}</span>

      <Button className="text-purple-200" onClick={onDecrement}>
        <Minus />
      </Button>
    </div>
  );
}
