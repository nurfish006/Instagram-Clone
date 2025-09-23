export type User = {
  username: string;
  avatar?: string; // optional because not all users (like comment ones) need it
};

export type Comment = {
  id: number;
  user: User;
  text: string;
};

export type Post = {
  id: number;
  user: User;
  time: string;
  image: string;
  caption: string;
  likes: number;
  comments: Comment[];
};
