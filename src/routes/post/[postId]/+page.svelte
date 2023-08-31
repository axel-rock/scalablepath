<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    const { post } = data;
</script>

<article class="grid md:grid-cols-2 self-center gap-5">
    <img class="w-48 aspect-square" src="{post.image}" alt="{post.title} cover image">
    <div class="grid gap-5">
        <h1 class="text-xl capitalize">{post.title}</h1>
        <p>{post.body}</p>
    </div>
</article>

<a href="/" class="bg-gray-400 p-2">Back</a>