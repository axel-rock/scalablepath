import type { PageServerLoad } from './$types';

export const load = (async ({ parent }) => {
    const { posts } = await parent();

    return {
        posts
    };
}) satisfies PageServerLoad;