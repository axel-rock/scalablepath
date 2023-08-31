<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;

    const { post } = data;
</script>

{#if post}
    <article class="flex flex-col md:flex-row items-center justify-center gap-6 md:mt-24">
        <img class="w-48 aspect-square bg-slate-100" src="{post.image}" alt="{post.title} cover image">
        <div class="grid gap-6">
            <h1 class="text-xl capitalize">{post.title}</h1>
            <h2>By: {post.user?.name}</h2>
            <p class="max-w-xl">{post.body}</p>
        </div>
    </article>

    {#if post.comments.length}
        <section class="flex flex-col items-center gap-6">
            <h2 class="max-w-xl text-xl font-bold mt-12">Comments</h2>
            <ul class="max-w-xl flex flex-col gap-3">
                {#each post.comments as comment }
                <li class="rounded-md bg-slate-100 p-3">
                    <span class="text-slate-500 font-semibold text-sm">{comment.email}</span>
                    <h3 class="text-lg font-bold">{comment.name}</h3>
                    <p>{comment.body}</p>
                </li>
                {/each}
            </ul>
        </section>
    {/if}
{:else}
<p>No post to show</p>
{/if}

<nav class="flex justify-center">
    <a href="/" class="button align-self-center">Back</a>
</nav>