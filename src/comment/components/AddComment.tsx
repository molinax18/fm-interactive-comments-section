import type { User } from "../type/comment.type";
import Button from "@/shared/components/Button";

interface Props {
  currentUser: User;
}

export default function AddComment({ currentUser }: Props) {
  return (
    <div className="grid grid-cols-6 gap-2 bg-white rounded-sm p-3 md:p-4 md:grid-cols-[auto_1fr_1fr_1fr_1fr_1fr] md:gap-4">
      <img
        src={currentUser.image.png}
        alt={currentUser.username}
        className="self-center size-8 md:self-start"
      />

      <form
        id="sendMessage"
        className="row-start-1 col-start-1 col-span-full md:col-start-2 md:col-span-4"
      >
        <textarea
          name="message"
          id="message"
          className="h-20 p-2 w-full border border-grey-100 outline-none resize-none"
          placeholder="Add a comment..."
        />
      </form>

      <Button
        className="col-start-5 col-span-full p-3 rounded-lg cursor-pointer hover:opacity-90 focus:opacity-90 transition bg-purple-600 uppercase text-white md:row-start-1 md:self-start md:col-start-6"
        form="sendMessage"
      >
        Send
      </Button>
    </div>
  );
}
