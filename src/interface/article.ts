import { User } from "../../../backend/src/entity/User";

export default interface IArticle {
  id: number;
  image: string;
  createdAt: string;
  title: string;
  author: User;
  content: string;
}
