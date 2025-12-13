import type { ColorVariant } from "@/shared/types/variantColor.type";

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
      <button className="flex-initial w-4">+</button>
      <span className="font-semibold">{likes}</span>
      <button className="flex-initial w-4">-</button>
    </div>
  );
}
