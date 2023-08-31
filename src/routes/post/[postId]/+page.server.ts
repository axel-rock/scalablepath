import type { PageServerLoad } from './$types';

export const load = (async ({ parent, params }) => {
    const { posts } = await parent();
    const post = posts.find((post) => post.id === +params.postId);
    return {
        post
    };
}) satisfies PageServerLoad;