import { CommentsProvider } from "@/comment/contexts/CommentsContext.tsx";
import Comments from "@/comment/components/Comments";

export default function App() {
  return (
    <main>
      <CommentsProvider>
        <Comments />
      </CommentsProvider>
    </main>
  );
}
