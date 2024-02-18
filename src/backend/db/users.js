import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "001",
    profilePic:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Adarsh",
    lastName: "Balika",
    bio:'QA Enginner | front-end developer. Exploring new domains in tech everyday.',
    username: "adarshbalika",
    password: "adarshBalika123",
    portfolio:"",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "002",
    profilePic:"https://64.media.tumblr.com/afb5e1630f56263598af6d1d4b1d23d4/tumblr_pp1pbfEx931ssqbqy_1280.jpg",
    
    firstName: "Pratik",
    lastName: "Dash",
    bio:'QA Enginner | front-end developer. Exploring new domains in tech everyday.',
    username: "pratikdash",
    password: "adarshBalika123",
    portfolio:"",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "003",
    profilePic:"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Rishabh",
    lastName: "Dubey",
    bio:'',
    username: "rishabhdubey",
    password: "adarshBalika123",
    portfolio:"",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
