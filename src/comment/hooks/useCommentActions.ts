import type { Dispatch } from "react";
import {
  CommentActionEnum,
  type CommentActionType,
} from "@/comment/type/commentActions.type";

export function useCommentActions(dispatch: Dispatch<CommentActionType>) {
  return {
    deleteComment: (id: string) =>
      dispatch({ type: CommentActionEnum.DELETE_COMMENT, payload: id }),

    addComment: (content: string) =>
      dispatch({ type: CommentActionEnum.ADD_COMMENT, payload: content }),

    replyComment: (data: { idToReply: string; content: string }) =>
      dispatch({ type: CommentActionEnum.REPLY_COMMENT, payload: data }),

    incrementScore: (id: string) =>
      dispatch({ type: CommentActionEnum.INCREMENT_SCORE, payload: id }),

    decrementScore: (id: string) =>
      dispatch({ type: CommentActionEnum.DECREMENT_SCORE, payload: id }),

    editComment: (data: { id: string; content: string }) =>
      dispatch({ type: CommentActionEnum.EDIT_COMMENT, payload: data }),
  };
}
