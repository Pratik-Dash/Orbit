import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "000",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
      mediaUrl:"",
    likes: {
      likeCount: 10,
      likedBy: ["pratikdash"],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: 1631125200000,
    updatedAt: formatDate(),
    bookmarked:false
    
  },
  {
    _id: "001",
    content:"This is a test post",
    mediaUrl:"",
    likes: {
      likeCount: 12,
      likedBy: ["rishabhdubey"],
      dislikedBy: ["tanaypratap"],
    },
    username: "pratikdash",
    createdAt: 1638691800000,
    updatedAt: formatDate(),
    bookmarked:false
  },
  {
    _id: "002",
    content:"This is a test post2",
    mediaUrl:"",
    likes: {
      likeCount: 2,
      likedBy: [ "rishabhdubey"],
      dislikedBy: ["tanaypratap"],
    },
    username: "pratikdash",
    createdAt: 1641074700000,
    updatedAt: formatDate(),
    bookmarked:false
  },
  {
    _id: "003",
    content:"This is a test post3",
    mediaUrl:"",
    likes: {
      likeCount: 2,
      likedBy: ["rishabhdubey"],
      dislikedBy: ["tanaypratap"],
    },
    username: "pratikdash",
    createdAt: 1644913200000,
    updatedAt: formatDate(),
    bookmarked:false
  },
  {
    _id: "004",
    content:"This is a test post4",
    mediaUrl:"",
    likes: {
      likeCount: 2,
      likedBy: ["rishabhdubey,pratikdash"],
      dislikedBy: ["tanaypratap"],
    },
    username: "rishabhdubey",
    createdAt: 1644913200000,
    updatedAt: formatDate(),
    bookmarked:false
  },
  
  
];
