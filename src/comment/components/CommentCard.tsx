import type { Comment } from "@/comment/type/comment.type";
import Button from "@/shared/components/Button";
import LikeButton from "./LikeButton";
import Reply from "@/shared/components/svg/Reply";

interface Props {
  data: Comment;
}

export default function CommentCard({ data }: Props) {
  const {
    content,
    createdAt,
    score,
    user: { image, username },
  } = data;

  return (
    <article className="grid grid-cols-12 gap-y-3 p-3 rounded-md bg-white text-grey-500">
      <div className="col-span-full flex items-center gap-x-3">
        <img className="size-8" src={image.png} alt={username} />
        <span className="font-semibold text-gray-800">{username}</span>
        <span>{createdAt}</span>
      </div>
      <LikeButton likes={score} className="row-start-3 col-span-4 py-1 px-2" />
      <p className="row-start-2 col-span-full">{content}</p>
      <Button className="row-start-3 col-start-10 col-span-full flex gap-x-2 items-center font-semibold">
        <Reply />
        Reply
      </Button>
    </article>
  );
}
