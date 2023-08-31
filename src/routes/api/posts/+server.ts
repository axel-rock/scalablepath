import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit'

export const GET: RequestHandler = async () => {

    const data = await fetch('https://www.scalablepath.com/api/test/test-posts');

    return json(await data.json());
};