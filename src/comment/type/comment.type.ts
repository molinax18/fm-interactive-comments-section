export type User = {
  image: {
    png: string;
    webp: string;
  };
  username: string;
};

export interface Comment {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies: Reply[];
}

export type Reply = Omit<Comment, "replies"> & {
  replyingTo?: string;
};
