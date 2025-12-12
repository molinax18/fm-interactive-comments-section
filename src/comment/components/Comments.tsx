import { useCommentsContext } from "@/comment/contexts/CommentsContext";
import CommentCard from "./CommentCard";

export default function Comments() {
  const { state } = useCommentsContext();

  return (
    <section className="flex flex-col gap-y-4 w-[90%] max-w-3xl mx-auto py-4">
      {state.map((c) => (
        <CommentCard key={c.id} data={c} />
      ))}
    </section>
  );
}
