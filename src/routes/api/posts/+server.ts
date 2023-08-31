import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit'
import type { Post, FullPost } from '$lib/post';
import type { User } from '$lib/user';
import type { Comment } from '$lib/comment';

export const GET: RequestHandler = async () => {    
    const [posts, users, comments]: [Post[], User[], Comment[]] = await Promise.all([
        (await fetch('https://www.scalablepath.com/api/test/test-posts')).json(),
        (await fetch('https://www.scalablepath.com/api/test/test-users')).json(),
        (await fetch('https://www.scalablepath.com/api/test/test-comments')).json(),
    ])

    return json(
        posts.map((post) => {
            const fullPost: FullPost = {
                ...post,
                user: users.find((user) => user.id === post.userId),
                comments: comments.filter((comment) => comment.postId === post.id)
            };
            return fullPost;
        })
    );
};