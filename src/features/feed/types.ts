export type User = {
  id: string;
  username: string;
  avatar: string;
};

export type Post = {
  id: string;
  user: User;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  time: string;
};
