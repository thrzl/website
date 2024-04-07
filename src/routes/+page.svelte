<script>
  import {scrollRef} from "svelte-scrolling"
	import Link from '../components/Link.svelte';
  import Music from '../components/Music.svelte';

	async function getProjects() {
		const res = await fetch('/api/projects');
		const data = await res.json();
		return data;
	}
	const projects = getProjects();

  async function getMusic() {
		const res = await fetch('/api/music');
		const data = await res.json();
		return data;
	}
	const music = getMusic();
	// make request to https://pinned.thrzl.xyz/thrzl
	// onMount(() => {
	//   fetch('https://pinned.thrzl.xyz/thrzl').then(res => res.json()).then(data => {
	//       projects = data;
	//     });
	// })
	// let projects = fetch('https://pinned.thrzl.xyz/thrzl').then(res => res.json())
</script>

<div class="snap-y snap-mandatory overflow-auto h-screen scroll-smooth" id="container">
	<main class="flex flex-col md:flex-row items-center justify-center h-screen bg-black pb-10 snap-center" id="home">
		<div class="flex flex-col md:flex-row items-center">
			<img
				class="w-40 h-40 md:w-50 md:h-50 rounded-full bg-blue-200 mx-8"
				src="https://github.com/thrzl.png"
				alt="profile from github"
			/>
			<div class="text-center md:text-left">
				<h1 class="text-3xl md:text-5xl font-bold text-white mb-2">hey, i'm terry</h1>
				<p class="text-gray-300">
					i'm a programmer from pg county, maryland<br />currently working
					<b>research + development</b>
					@ <Link href="https://ey3.tech" _class="text-blue-400"><b>ey3.tech</b></Link>
				</p>
			</div>
		</div>
	</main>
	<main class="flex items-center justify-center bg-black pb-10 h-screen snap-center" id="projects">
		<div class="flex flex-col items-center w-screen">
			<h2 class="text-3xl font-bold text-white mb-3">my best work.</h2>
			<div class="flex items-center max-w-60vw md:w-85vw">
				{#await projects}
					<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
						{#each [...Array(6)] as _, i}
							<div
								class="py-2 pb-4 px-6 block border-white rounded-xl bg-[#111] animate-pulse"
								style="border-width: 2px !important"
							>
								<h3 class="text-xl font-bold text-white -mb-2 font-mono rounded-lg w-max invisible">
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
					<div class="grid grid-cols-1 md:grid-cols-2 gap-5 grid-auto-rows-max">
						{#each projects.repos.slice(0, 6) as project (project.full_name)}
							<div
								class="py-2 pb-4 px-6 block border-white rounded-xl bg-[#111] animate-fade-in duration-50"
								style="border-width: 2px !important"
							>
								<h3 class="text-xl font-bold text-white -mb-2 font-mono rounded-lg w-max">
									{project.full_name.includes('thrzl')
										? project.name.toLowerCase()
										: project.full_name.toLowerCase()}
								</h3>
								<p class="text-gray-300 mb-2">{project.description}</p>
								<Link href={project.link} _class="text-white mt-0">more info</Link>
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
			<h2 class="text-3xl font-bold text-white mb-3">music.</h2>
			<div class="flex items-center max-w-60vw md:w-85vw">
				<Music albums={music} />
			</div>
		</div>
	</main>
</div>