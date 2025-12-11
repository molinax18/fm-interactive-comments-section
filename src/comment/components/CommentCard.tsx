import type { Comment } from "@/type/comment.type";

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
      <button className="row-start-3">Reply</button>
      <p className="row-start-2 col-span-full">{content}</p>
      <button className="row-start-3 col-start-11">
        Like button ({score})
      </button>
    </article>
  );
}
