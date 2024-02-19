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
      "Hi Orbit!",
      mediaUrl:"https://cff2.earth.com/uploads/2020/08/12212148/satellite-1757979_1920-960x640.jpg",
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
    content:"Pinapple on pizza is underrated. Change my mind",
    mediaUrl:"https://static01.nyt.com/images/2023/03/29/multimedia/23HAMREX2-pineapple-ham-pizza-qwct/HAMREX2-pineapple-ham-pizza-qwct-superJumbo.jpg",
    likes: {
      likeCount: 12,
      likedBy: ["rishabhdubey"],
      dislikedBy: [""],
    },
    username: "rishabhdubey",
    createdAt: 1638691800000,
    updatedAt: formatDate(),
    bookmarked:false
  },
  {
    _id: "002",
    content:"Pinapple does not belong on Pizza",
    mediaUrl:"",
    likes: {
      likeCount: 2,
      likedBy: [ "adarshbalika"],
      dislikedBy: ["rishabhdubey"],
    },
    username: "pratikdash",
    createdAt: 1641074700000,
    updatedAt: formatDate(),
    bookmarked:false
  },
  {
    _id: "003",
    content:"Starting my journey to become a web dev, wish me luck :)",
    mediaUrl:"",
    likes: {
      likeCount: 2,
      likedBy: ["pratikdash","rishabhdubey","adarshbalika"],
      dislikedBy: [],
    },
    username: "pratikdash",
    createdAt: 1644913200000,
    updatedAt: formatDate(),
    bookmarked:false
  },
  {
    _id: "004",
    content:"Recently started learning cypress, I have to say its much better some of the other test automation frameworks (I am looking at you Selenium)",
    mediaUrl:"https://testomat.io/wp-content/uploads/2022/12/Cypress_architecture.png",
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
