<script>
	import Link from "../components/Link.svelte";
	import Music from "../components/Music.svelte";
	import Project from "../components/Project.svelte";

	import profile from "../images/profile.avif";

	function getRandomColor() {
		const letters = "0123456789ABCDEF";
		let color = "#";
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	function getRandomGradient() {
		const color1 = getRandomColor();
		const color2 = getRandomColor();
		return `linear-gradient(45deg, ${color1}, ${color2})`;
	}

	// Generate the gradient for use in the style attribute
	export let data;
</script>

<div
	class="md:snap-y md:snap-mandatory overflow-auto h-screen md:scroll-smooth"
	id="container"
>
	<main
		class="flex flex-col md:flex-row items-center justify-center h-screen bg-black pb-10 snap-center"
		id="home"
	>
		<div class="flex flex-col md:flex-row items-center max-w-3/4">
			<img
				class="w-40 h-40 md:w-50 md:h-50 rounded-full bg-blue-200 mx-8"
				src={profile}
				alt="profile from github"
			/>
			<div class="text-center md:text-left">
				<h1
					class="text-3xl md:text-5xl mt-5 font-bold text-white mb-0 pb-2"
				>
					hey, i'm <span class="transition-250" style={`background: ${getRandomGradient()}; -webkit-background-clip: text; color: transparent;`}>terry</span>
				</h1>
				<p
					class="text-gray-200 text-md md:text-lg line-height-tight mb-2 md:mb-0"
				>
					i'm a programmer from pg county, md
				</p>
				<p
					class="text-gray-200 text-md md:text-lg line-height-tight mt-0"
				>
					currently working
					<b>research + development</b>
					@ <Link href="https://ey3.tech" _class="text-blue-400"
						><b>ey3.tech</b></Link
					>
				</p>
			</div>
		</div>
	</main>
	<main
		class="flex items-center justify-center bg-black pb-10 min-h-screen snap-center"
		id="projects"
	>
		<div class="flex flex-col items-center w-screen">
			<h2 class="text-3xl md:text-5xl font-bold text-white mb-3">
				my best work.
			</h2>
			<div class="flex items-center max-w-60vw md:w-85vw">
				<div
					class="grid grid-cols-1 md:grid-cols-2 gap-5 grid-auto-rows-max items-start grid-row-height-4"
				>
					{#await data.projects}
						{#each [...Array(6)] as _, i}
							<Project />
						{/each}
					{:then projects}
						{#each projects.slice(0, 6) as project (project.full_name)}
							<Project {project} />
						{/each}
					{:catch error}
						<p class="text-white">error: {error.message}</p>
					{/await}
				</div>
			</div>
		</div>
	</main>
	<main
		class="flex items-center justify-center bg-black pb-10 h-screen snap-center"
		id="music"
	>
		<div class="flex flex-col items-center w-screen">
			<h2 class="text-3xl md:text-5xl font-bold text-white mb-3">
				music.
			</h2>
			<div class="flex items-center max-w-60vw md:w-85vw">
				<Music albums={data.music} />
			</div>
		</div>
	</main>
</div>
