import {
  CommentActionEnum,
  type CommentActionType,
} from "../type/commentActions.type";
import type { CommentsState } from "../type/commentsContext.type";
import { updateCommentScore } from "../utils/commentReducer.utils";

export const commentReducer = (
  state: CommentsState,
  action: CommentActionType
): CommentsState => {
  switch (action.type) {
    case CommentActionEnum.INCREMENT_SCORE: {
      const CommentsUpdated = state.comments.map((c) =>
        updateCommentScore(c, action.payload, 1)
      );

      return {
        ...state,
        comments: CommentsUpdated,
      };
    }

    case CommentActionEnum.DECREMENT_SCORE: {
      const CommentsUpdated = state.comments.map((c) =>
        updateCommentScore(c, action.payload, -1)
      );

      return {
        ...state,
        comments: CommentsUpdated,
      };
    }

    case CommentActionEnum.DELETE_COMMENT: {
      const newComments = state.comments
        .filter((c) => c.id !== action.payload)
        .map((c) => ({
          ...c,
          replies:
            c.replies.length > 0
              ? c.replies.filter((r) => r.id !== action.payload)
              : c.replies,
        }));

      return {
        ...state,
        comments: newComments,
      };
    }

    default:
      return state;
  }
};
