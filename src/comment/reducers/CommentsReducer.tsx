import {
  updateCommentScore,
  editComment,
  replyComment,
} from "@/comment/utils/commentReducer.utils";
import {
  CommentActionEnum,
  type CommentActionType,
} from "@/comment/type/commentActions.type";
import type { Comment } from "@/comment/type/comment.type";
import type { CommentsState } from "@/comment/type/commentsContext.type";

export const commentReducer = (
  state: CommentsState,
  action: CommentActionType
): CommentsState => {
  switch (action.type) {
    case CommentActionEnum.INCREMENT_SCORE: {
      const commentsUpdated = state.comments.map((c) =>
        updateCommentScore(c, action.payload, 1)
      );

      return {
        ...state,
        comments: commentsUpdated,
      };
    }

    case CommentActionEnum.DECREMENT_SCORE: {
      const commentsUpdated = state.comments.map((c) =>
        updateCommentScore(c, action.payload, -1)
      );

      return {
        ...state,
        comments: commentsUpdated,
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

    case CommentActionEnum.ADD_COMMENT: {
      const newComment: Comment = {
        id: crypto.randomUUID(),
        content: action.payload,
        createdAt: new Date(Date.now()).toISOString(),
        replies: [],
        score: 0,
        user: { ...state.currentUser },
      };

      return {
        ...state,
        comments: [...state.comments, newComment],
      };
    }

    case CommentActionEnum.EDIT_COMMENT: {
      const { id, content } = action.payload;
      const commentsUpdated = state.comments.map((c) =>
        editComment(c, id, content)
      );

      return {
        ...state,
        comments: commentsUpdated,
      };
    }

    case CommentActionEnum.REPLY_COMMENT: {
      const { idToReply, content } = action.payload;
      const commentsUpdated = state.comments.map((c) =>
        replyComment(c, idToReply, content, state.currentUser)
      );

      return {
        ...state,
        comments: commentsUpdated,
      };
    }
  }
};
