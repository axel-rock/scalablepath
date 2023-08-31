import type { FullPost } from '$lib/post';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ fetch }) => {
    return {
        posts: (await fetch('/api/posts')).json() as Promise<FullPost[]>,
    }
}) satisfies LayoutServerLoad;