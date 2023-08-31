import type { User }  from './user';
import type { Comment }  from './comment';

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
    image: string;
}

export type FullPost = Post &{
  comments: Comment[];
  user?: User;
}