import type { User } from "./user";

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}