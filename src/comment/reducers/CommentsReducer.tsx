import type { CommentsState } from "../type/commentsContext.type";
import {
  CommentActionEnum,
  type CommentActionType,
} from "../type/commentActions.type";

export const commentReducer = (
  state: CommentsState,
  action: CommentActionType
): CommentsState => {
  switch (action.type) {
    case CommentActionEnum.INCREMENT_SCORE: {
      const CommentsUpdated = state.comments.map((c) => {
        let newCom = c;

        if (c.replies.length > 0) {
          const replies = c.replies.map((r) =>
            r.id === action.payload ? { ...r, score: r.score + 1 } : r
          );

          newCom = { ...newCom, replies };
        }

        if (c.id === action.payload) {
          newCom = { ...newCom, score: newCom.score + 1 };
        }

        return newCom;
      });

      return {
        ...state,
        comments: CommentsUpdated,
      };
    }

    case CommentActionEnum.DECREMENT_SCORE: {
      const CommentsUpdated = state.comments.map((c) => {
        let newCom = c;

        if (c.replies.length > 0) {
          const replies = c.replies.map((r) => {
            if (r.id !== action.payload) return r;

            return r.score > 0 ? { ...r, score: r.score - 1 } : r;
          });

          newCom = { ...newCom, replies };
        }

        if (c.id === action.payload) {
          newCom = {
            ...newCom,
            score: newCom.score > 0 ? newCom.score - 1 : newCom.score,
          };
        }

        return newCom;
      });

      return {
        ...state,
        comments: CommentsUpdated,
      };
    }

    default:
      return state;
  }
};
