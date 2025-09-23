import type { Post } from "../types";

// Import your local images
import avatar1 from "../../../assets/images/avatar1.jpg";
import avatar2 from "../../../assets/images/avatar2.png";
import postImage1 from "../../../assets/images/post1.jpg";
import postImage2 from "../../../assets/images/post2.jpg";

const mockPosts: Post[] = [
  {
    id: 1,
    user: { 
      username: "nurahmed", 
      avatar: avatar1  
    },
    image: postImage1,  
    caption: "we upload we create different thumbnails... For every video",
    likes: 741368,
    comments: [
      { id: 1, user: { username: "f1fan" }, text: "Legend 👑" },
      { id: 2, user: { username: "speedster" }, text: "Goat 🐐" },
    ],
    time: "5h",
  },
  {
    id: 2,
    user: {  
      username: "momi", 
      avatar: avatar2   
    },
    image: postImage2,  
    caption: "For every video we upload we create different thumbnails...",
    likes: 6724,
    comments: [],
    time: "8h",
  },
];

export function fetchPosts(): Promise<Post[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockPosts), 500);
  });
}