<script>
	import Link from '../components/Link.svelte';
	import Music from '../components/Music.svelte';
	import { getProjects, getMusic } from '$lib/api';

	const projects = getProjects();
	const music = getMusic();
</script>

<div class="md:snap-y md:snap-mandatory overflow-auto h-screen md:scroll-smooth" id="container">
	<main
		class="flex flex-col md:flex-row items-center justify-center h-screen bg-black pb-10 snap-center"
		id="home"
	>
		<div class="flex flex-col md:flex-row items-center max-w-3/4">
			<img
				class="w-40 h-40 md:w-50 md:h-50 rounded-full bg-blue-200 mx-8"
				src="/profile.avif"
				alt="profile from github"
			/>
			<div class="text-center md:text-left">
				<h1 class="text-3xl md:text-5xl mt-5 font-bold text-white mb-2">hey, i'm terry</h1>
				<p class="text-gray-200 text-md md:text-lg line-height-tight mb-2 md:mb-0">
					i'm a programmer from pg county, md
				</p>
				<p class="text-gray-200 text-md md:text-lg line-height-tight mt-0">
					currently working
					<b>research + development</b>
					@ <Link href="https://ey3.tech" _class="text-blue-400"><b>ey3.tech</b></Link>
				</p>
			</div>
		</div>
	</main>
	<main class="flex items-center justify-center bg-black pb-10 h-screen snap-center" id="projects">
		<div class="flex flex-col items-center w-screen">
			<h2 class="text-3xl md:text-5xl font-bold text-white mb-3">my best work.</h2>
			<div class="flex items-center max-w-60vw md:w-85vw">
				{#await projects}
					<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
						{#each [...Array(6)] as _, i}
							<div
								class="px-6 block border-white rounded-xl bg-[#111] animate-pulse"
								style="border-width: 2px !important"
							>
								<h3
									class="text-xl font-bold text-white -mb-3 md:-mb-2 mt-0 font-mono rounded-lg w-max invisible"
								>
									yahoo yipee
								</h3>
								<p class="text-gray-300 mb-2 invisible">
									this project doesnt really exist, it's just here for the skeleton
								</p>
								<Link href="" _class="text-white mt-0 invisible">loading</Link>
							</div>
						{/each}
					</div>
				{:then projects}
					<div
						class="grid grid-cols-1 md:grid-cols-2 gap-5 grid-auto-rows-max items-start grid-row-height-4"
					>
						{#each projects.slice(0, 6) as project (project.full_name)}
							<div class="px-6 block rounded-xl animate-fade-in duration-50 relative py-4 md:h-4/5">
								<h3
									class="text-xl font-bold text-white -mb-3 md:-mb-2 mt-0 font-mono rounded-lg w-max"
								>
									{project.full_name.includes('thrzl')
										? project.name.toLowerCase()
										: project.full_name.toLowerCase()}
								</h3>
								<p class="text-gray-300 mb-2 text-md md:text-prose">{project.description}</p>
								<Link href={project.link} _class="text-white mt-1 absolute bottom-0">more info</Link
								>
							</div>
						{/each}
					</div>
				{:catch error}
					<p class="text-white">error: {error.message}</p>
				{/await}
			</div>
		</div>
	</main>
	<main class="flex items-center justify-center bg-black pb-10 h-screen snap-center" id="music">
		<div class="flex flex-col items-center w-screen">
			<h2 class="text-3xl md:text-5xl font-bold text-white mb-3">music.</h2>
			<div class="flex items-center max-w-60vw md:w-85vw">
				<Music albums={music} />
			</div>
		</div>
	</main>
</div>
