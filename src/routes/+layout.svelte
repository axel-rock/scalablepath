<script lang="ts">
	import '../app.css'
	// import type { LayoutData } from './$types'
	// export let data: LayoutData
</script>

<header class="flex p-4 justify-between border-b">
	<h1 class="text-xl font-bold">
		<a href="/">My blog</a>
	</h1>
	<nav class="flex gap-4">
		<a href="/">Home</a>
		<a href="/contact">Contact</a>
		<a href="/about">About</a>
	</nav>
</header>

<main class="p-4 flex flex-col justify-center gap-6 max-w-7xl w-full justify-self-center">
	<slot />
</main>
