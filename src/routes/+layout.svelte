<script lang="ts">
import "uno.css";
import { page } from "$app/stores";
import { links } from "$lib/constants.json";

function scrollToElement(id: string) {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
}

function handleClick(event: Event, id: string) {
	event.preventDefault(); // Prevent the default link behavior

	scrollToElement(id);
}
</script>

<svelte:head>
	<title>
		/home/thrzl{$page.url.pathname}
	</title>
	<link rel="stylesheet" href="inter.css" />
</svelte:head>

<nav
	class="fixed top-0 left-0 h-max w-16 px-2 ml-2 mt-10 flex flex-col items-center justify-center z-999"
>
	<a
		href="#home"
		class="my-4 decoration-none opacity-60 hover:opacity-100 text-white duration-450 write-vertical-left"
		on:click={(event) => handleClick(event, 'home')}
	>
		home
	</a>
	<a
		href="#projects"
		class="my-4 decoration-none opacity-60 hover:opacity-100 text-white duration-450 write-vertical-left"
		on:click={(event) => handleClick(event, 'projects')}
	>
		projects
	</a>
	<a
		href="#music"
		class="my-4 decoration-none opacity-60 hover:opacity-100 text-white duration-450 write-vertical-left"
		on:click={(event) => handleClick(event, 'music')}
	>
		music
	</a>
	{#each links as link}
		<a
			href={link.url}
			class="my-4 decoration-none opacity-60 hover:opacity-100 text-white duration-450 write-vertical-left"
		>
			{link.name}
		</a>
	{/each}
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
