import { createContext, useContext, useReducer } from "react";
import { commentReducer } from "@/comment/reducers/CommentsReducer";
import type {
  CommentsContextProps,
  CommentsProviderProps,
} from "@/comment/type/commentsContext.type";
import INITIAL_STATE from "@/data.json";

const CommentsContext = createContext<CommentsContextProps | null>(null);

export const CommentsProvider = ({ children }: CommentsProviderProps) => {
  const [state, dispatch] = useReducer(commentReducer, INITIAL_STATE);

  return (
    <CommentsContext value={{ state, dispatch }}>{children}</CommentsContext>
  );
};

export const useCommentsContext = () =>
  useContext(CommentsContext) as CommentsContextProps;
