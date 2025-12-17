export enum CommentActionEnum {
  INCREMENT_SCORE = "INCREMENT_SCORE",
  DECREMENT_SCORE = "DECREMENT_SCORE",
  ADD_COMMENT = "ADD_COMMENT",
  REPLY_COMMENT = "REPLY_COMMENT",
  EDIT_COMMENT = "EDIT_COMMENT",
  DELETE_COMMENT = "DELETE_COMMENT",
}

export type CommentActionType =
  | { type: CommentActionEnum.INCREMENT_SCORE; payload: string }
  | { type: CommentActionEnum.DECREMENT_SCORE; payload: string }
  | { type: CommentActionEnum.ADD_COMMENT; payload: string }
  | { type: CommentActionEnum.REPLY_COMMENT; payload: string }
  | { type: CommentActionEnum.EDIT_COMMENT; payload: string }
  | { type: CommentActionEnum.DELETE_COMMENT; payload: string };
