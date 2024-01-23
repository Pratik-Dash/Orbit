import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    about:'QA Enginner | front-end developer. Exploring new domains in tech everyday.',
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Pratik",
    lastName: "Dash",
    about:'QA Enginner | front-end developer. Exploring new domains in tech everyday.',
    username: "pratikdash",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Rishabh",
    lastName: "Dubey",
    about:'',
    username: "rishabhdubey",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
