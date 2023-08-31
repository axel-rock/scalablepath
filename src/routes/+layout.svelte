<script lang="ts">
	import '../app.css'
	// import type { LayoutData } from './$types'
	// export let data: LayoutData
</script>

<header class="flex p-4 justify-between border-b">
	<h1 class="text-xl font-bold">
		<a href="/">My blog</a>
	</h1>
	<nav>
		<a href="/">Home</a>
		<a href="/contact">Contact</a>
	</nav>
</header>

<main class="p-4 flex flex-col justify-center gap-5">
	<slot />
</main>
