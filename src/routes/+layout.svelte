<script lang="ts">
	import 'uno.css';
	import { page } from '$app/stores';

	function scrollToElement(id) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}

	function handleClick(event, id) {
		event.preventDefault(); // Prevent the default link behavior

		scrollToElement(id);
	}

</script>
<svelte:head>
	<title>
		/home/thrzl{$page.url.pathname}
	</title>
	<link rel="stylesheet" href="inter.css">
</svelte:head>

<nav
	class="fixed top-0 left-0 h-max w-16 px-5 py-10 flex flex-col items-center z-999"
>
	<a
		href="#home"
		class="mt-4 decoration-none opacity-60 hover:opacity-100 text-white duration-450 navlink"
		on:click={(event) => handleClick(event, 'home')}
	>
		<p class="write-vertical-left">home</p>
	</a>
	<a
		href="#projects"
		class="mt-8 decoration-none opacity-60 hover:opacity-100 text-white duration-450 navlink"
		on:click={(event) => handleClick(event, 'projects')}
	>
		<p class="write-vertical-left">projects</p>
	</a>
	<a
		href="#music"
		class="mt-8 decoration-none opacity-60 hover:opacity-100 text-white duration-450 navlink"
		on:click={(event) => handleClick(event, 'music')}
	>
		<p class="write-vertical-left">music</p>
	</a>
</nav>
<slot />

<style>
	:global(body) {
		font-family: 'InterVariable', sans-serif;
		margin: 0 !important;
		padding: 0;
		background-color: #f5f5f5;
	}
	:global(h1) {
		letter-spacing: -0.05rem;
	}

	:global(a) {
		/* color: inherit; */
		--un-text-opacity: 1;
		/* color: rgba(255, 255, 255, var(--un-text-opacity)); */
	}
</style>
