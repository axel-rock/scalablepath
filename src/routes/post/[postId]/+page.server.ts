import type { PageServerLoad } from './$types';

export const load = (async ({ params }) => {
    const postData = await fetch(`https://www.scalablepath.com/api/test/test-posts/${params.postId}`);
    const post = await postData.json();

    const authorData = await fetch(`https://www.scalablepath.com/api/test/test-users/${post.userId}`);
    const author = await authorData.json();

    const commentsData = await fetch(`https://www.scalablepath.com/api/test/test-comments/`);
    const allComments = await commentsData.json();

    const comments = allComments.filter((comment) => comment.postId === params.postId);

    console.log({
        author, comments, allComments
    })

    return {
        post
        // posts: fetch('https://www.scalablepath.com/api/test/test-posts')
    };
}) satisfies PageServerLoad;