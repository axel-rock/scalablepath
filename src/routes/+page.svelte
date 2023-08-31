<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
    const { posts } = data;
</script>

<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
  {#if posts}
    {#each posts as post }
      <article class="grid place-items-center gap-6">
        <img class="w-48 aspect-square bg-slate-200" src="{post.image}" alt="{post.title} cover image">
        <h2 class="text-xl text-center font-bold capitalize max-w-50 text-ellipsis">{post.title}</h2>
        <span>{post.user?.name}</span>
        <a href="/post/{post.id}" class="button">Read more</a>
      </article>
    {/each}
  {:else}
    <p>No posts to show</p>
  {/if}
</section>

<style>
  /* I don't think Tailwind supports subgrid yet. This aligns the text correctly between each article on supported browsers */
  @supports(grid-template-rows: subgrid) {
    section {
      grid-template-rows: subgrid;
    }
  }
</style>