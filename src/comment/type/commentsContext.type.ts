import type { ActionDispatch, ReactNode } from "react";
import type { Comment, User } from "./comment.type";

export interface State {
  currentUser: User;
  comments: Comment[];
}

export interface CommentsContextProps {
  state: State;
  dispatch: ActionDispatch<[action: State]>;
}

export interface CommentsProviderProps {
  children: ReactNode;
}
