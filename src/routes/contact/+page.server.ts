import type { Actions } from "@sveltejs/kit";

export const actions = {
    default: async ({request}) => {
        const formData = await request.formData()
        const message = formData.get('message')
        console.log('Here is where you send your message to the server');
        console.log(message);
    }
} satisfies Actions