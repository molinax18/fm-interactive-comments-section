import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CommentsProvider } from "@/comment/contexts/CommentsContext.tsx";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CommentsProvider>
      <App />
    </CommentsProvider>
  </StrictMode>
);
