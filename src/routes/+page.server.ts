import type { PageServerLoad } from './$types';

export const load = (async (event) => {

    const postsData = await fetch('https://www.scalablepath.com/api/test/test-posts');
    let posts = await postsData.json();

    const authorsData = await fetch('https://www.scalablepath.com/api/test/test-users');
    const authors = await authorsData.json();
    
    posts = posts.map((post) => {
        post.author = authors.find((user) => user.id === post.userId);
        return post
    });

    return {
        posts
    };
}) satisfies PageServerLoad;