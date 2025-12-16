import type { ActionDispatch, ReactNode } from "react";
import type { Comment, User } from "./comment.type";
import type { CommentActionType } from "./commentActions.type";

export interface CommentsState {
  currentUser: User;
  comments: Comment[];
}

export interface CommentsContextProps {
  state: CommentsState;
  dispatch: ActionDispatch<[action: CommentActionType]>;
}

export interface CommentsProviderProps {
  children: ReactNode;
}
