import type { ActionDispatch, ReactNode } from "react";
import type { Comment } from "./comment.type";

export interface CommentsContextProps {
  state: Comment[];
  dispatch: ActionDispatch<[action: Comment[]]>;
}

export interface CommentsProviderProps {
  children: ReactNode;
}
