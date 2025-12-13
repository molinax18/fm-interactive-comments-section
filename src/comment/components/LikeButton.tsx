import type { ColorVariant } from "@/shared/types/variantColor.type";
import Minus from "@/shared/components/svg/Minus";
import Plus from "@/shared/components/svg/Plus";

interface Props {
  theme?: ColorVariant;
  likes: number;
  className?: string;
  // addLike: () => void;
  // removeLike: () => void;
}

export default function LikeButton({
  theme = "primary",
  likes,
  className,
  // addLike,
  // removeLike,
}: Props) {
  return (
    <div
      data-theme={theme}
      className={`flex justify-between rounded-sm bg-grey-100 ${className || ""}`}
    >
      <button className="text-purple-200">
        <Plus />
      </button>
      <span className="font-semibold">{likes}</span>
      <button className="text-purple-200">
        <Minus />
      </button>
    </div>
  );
}
