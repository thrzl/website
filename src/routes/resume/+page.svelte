<svelte:head>
	<title>terry</title>
	<style>
		#spotify,
		#presence {
			display: none !important;
		}
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-family: Satoshi, sans-serif !important;
			font-weight: 800;
		}
	</style>
</svelte:head>

<div class="bg-black text-white print:text-black lowercase">
	<h1 class="mx-auto my-12 text-3xl max-w-max font-bold">📄 my resume</h1>
	<div
		class="p-6 mx-auto page max-w-3xl print:max-w-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 bg-neutral-800 rounded-xl my-2 rise-wrapper mb-0 rounded-b-none"
	>
		<header class="mb-8 md:mb-11 py-7 px-10 mx-auto bg-neutral-700 rounded-lg md:flex align-middle">
			<div class="md:mr-5 h-min w-fit m-auto">
				<img
					src={'/resume.webp'}
					alt="shot of me at niagara falls"
					class="rounded-full w-28 h-28 mb-3 md:mb-0"
					style="--delay: 200ms"
				/>
			</div>
			<p class="mx-auto  md:w-3/4 align-middle text-center md:text-left">
				hey, i'm terry, and i love tech! i first became interested in coding for game development,
				and quickly expanded from scratch to python, go, javascript, and rust. something i pride
				myself on is my ability to write performant, typed, and well-formatted python code.
			</p>
		</header>

		<div
			class="md:col-count-2 print:col-count-2 col-gap-md md:h-letter-col print:h-letter-col col-fill-auto"
		>
			<section class="mt-8 first:mt-0">
				<div class="break-inside-avoid">
					<h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
						EXPERIENCE
					</h2>
					<section class="mb-4 break-inside-avoid">
						<header>
							<h3 class="text-lg font-semibold my-0">EY3 TECHNOLOGIES</h3>
							<p class="leading-normal text-md text-gray-650 mt-0">
								September 2017 – Present | Research and Development
							</p>
						</header>
						<p class="mt-2 text-md leading-normal ">
							I have experience in researching advanced technological concepts and formulating plans
							to use this technology in the real world. as well as this, i work as a general IT
							agent and help to optimize and repair the office computers. I also worked on the <a
								href="https://ey3.tech"
								class="print:border-none group text-white font-bold"
								>company's website <span
									class="inline-block print:hidden text-gray-550 print:text-black font-normal group-hover:-translate-y-[0.125rem] group-hover:translate-x-[0.125rem] transition duration-500 ease-in-out"
									>↗</span
								></a
							>.
						</p>
					</section>
				</div>

				<section class="mb-4 break-inside-avoid">
					<header>
						<h3 class="text-lg font-semibold my-0">PHOTON</h3>
						<p class="leading-normal text-md text-gray-650 mt-0">August 2019 – May 2020 | Creator</p>
					</header>
					<ul>
						<li class="mt-2 text-md leading-normal">
							<span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
							offered a total of 8 services, including Ransomware/Corruption Protection. My services
							involved the cleaning and optimization of Windows computers.
						</li>
						<li class="mt-2 text-md leading-normal">
							<span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
							only ever received positive remarks from customers.
						</li>
					</ul>
				</section>

				<section class="mb-4 break-inside-avoid">
					<header>
						<h3 class="text-lg font-semibold my-0">OFFSCRIPT ZION CHURCH</h3>
						<p class="leading-normal text-md text-gray-650 mt-0">
							May 2015 – Dec 2016 | Creatives Team Volunteer
						</p>
					</header>
					<ul>
						<li class="mt-2 text-md leading-normal">
							<span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
							Worked on events and the online church experience.
						</li>
						<li class="mt-2 text-md leading-normal">
							<span class="absolute -ml-3 sm:-ml-3.2 select-none transform -translate-y-px">›</span>
							Collected and distributed feedback and input to improve the experience for new attendees.
						</li>
					</ul>
				</section>
			</section>
			<section class="mt-8 first:mt-0">
				<div class="break-inside-avoid">
					<h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
						AWARDS
					</h2>

					<section class="mb-4 break-inside-avoid">
						<header>
							<h3 class="text-2xl font-semibold my-0">
								<a href="https://hack.indigitous.org/" class="group text-[#ef4e25]">
									#hack2022
									<span
										class="inline-block text-gray-550 print:text-black font-normal group-hover:-translate-y-[0.125rem] group-hover:translate-x-[0.125rem] transition duration-500 ease-in-out"
										>↗</span
									>
								</a>
							</h3>
							<p class="leading-normal text-md text-gray-650 my-0">October 2022 | 1st place</p>
						</header>
						<p class="mt-2 text-md leading-normal">
							The first hackathon I ever participated in, my church's #hack2022 project involved creating the designs for an app that would guide people through starting their own churches. This was the first time using Figma in an actual project, which was definitely an interesting experience for me, but I picked it up pretty quickly. we ended up winning first place!
						</p>
					</section>
			</section>
			<section class="mt-8 first:mt-0">
				<div class="break-inside-avoid">
					<h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
						PROJECTS
					</h2>

					<section class="mb-4 break-inside-avoid">
						<header>
							<h3 class="text-2xl font-semibold my-0">
								<a href="https://github.com/thrzl/pinned" class="group text-white">
									pinned
									<span
										class="inline-block text-gray-550 print:text-black font-normal group-hover:-translate-y-[0.125rem] group-hover:translate-x-[0.125rem] transition duration-500 ease-in-out"
										>↗</span
									>
								</a>
							</h3>
							<p class="leading-normal text-md text-gray-650 my-0">Since 2022 | Rust</p>
						</header>
						<p class="mt-2 text-md leading-normal">
							One of my first Rust projects, pinned is a simple API that allows you to get a Github
							user's pinned repositories. It was created based on the fact that I was dissatisfied
							with the speed of other pinned repository APIs. pinned can scrape a user's pinned
							repos in >1 second, while others take multiple.
						</p>
					</section>

					<section class="mb-4 break-inside-avoid">
						<header>
							<h3 class="text-2xl font-semibold my-0">
								<a href="https://github.com/thrzl/repltable" class="group text-white">
									repltable
									<span
										class="inline-block text-gray-550 print:text-black font-normal group-hover:-translate-y-[0.125rem] group-hover:translate-x-[0.125rem] transition duration-500 ease-in-out"
										>↗</span
									>
								</a>
							</h3>
							<p class="leading-normal text-md text-gray-650 my-0">Since 2021 | Python</p>
						</header>
						<p class="mt-2 text-md leading-normal">
							I absolutely hated the Repl.it database wrapper for python. It felt slow, and wouldn't
							work a lot of the time. So, I decided to make my own. It caches and mutates all keys
							in the database and supports nested keys. It's strongly typed and is far faster than
							replit-py. It has approximately 10k total downloads on PyPI.
						</p>
					</section>
				</div>

				<section class="mb-4 break-inside-avoid">
					<header>
						<h3 class="text-2xl font-semibold my-0">
							<a href="https://github.com/thrzl/reqwest.py" class="group text-white">
								reqwest.py
								<span
									class="inline-block text-gray-550 print:text-black font-normal group-hover:-translate-y-[0.125rem] group-hover:translate-x-[0.125rem] transition duration-500 ease-in-out"
									>↗</span
								>
							</a>
						</h3>
						<p class="leading-normal text-md text-gray-650 my-0">Since 2022 | Rust & Python</p>
					</header>
					<p class="mt-2 text-md leading-normal">
						Made in Rust, reqwest.py is my attempt to create much faster Python requests. It still
						struggles to beat urllib3, but it still uses less resources and beats out most other
						HTTP request libraries. It doesn't have a lot of features at the moment, but I've been
						working on it as a side project to help me learn rust.
					</p>
				</section>
			</section>

			<section class="mt-8 first:mt-0">
				<div class="break-inside-avoid">
					<h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
						SKILLS
					</h2>
					<div class="p-8 bg-neutral-900 rounded-lg mb-4">
						<p class="mb-2 font-bold">Python</p>
						<div class="w-full rounded-full bg-blue-900 h-2 mb-6">
							<div class="bg-blue-500 h-2 w-full rounded-full" style="width: 90%" />
						</div>
						<p class="mb-2 font-bold">Svelte</p>
						<div class="w-full rounded-full bg-orange-900 h-2 mb-6">
							<div class="bg-red-500 h-2 w-full rounded-full" style="width: 75%" />
						</div>
						<p class="mb-2 font-bold">Javascript</p>
						<div class="w-full rounded-full bg-yellow-900 h-2 mb-6">
							<div class="bg-yellow-500 h-2 w-full rounded-full" style="width: 40%" />
						</div>
						<p class="mb-2 font-bold">Rust</p>
						<div class="w-full rounded-full bg-[#57372a] h-2 mb-6">
							<div class="bg-[#c98d76] h-2 w-full rounded-full" style="width: 20%" />
						</div>
						<p class="mb-2 font-bold">Go</p>
						<div class="w-full rounded-full bg-sky-900 h-2 ">
							<div class="bg-sky-400 h-2 w-full rounded-full" style="width: 10%" />
						</div>
					</div>
				</div>

				<section class="mb-4 break-inside-avoid">
					<header>
						<h3 class="text-lg font-semibold">Other Skills</h3>
					</header>
					<div class="my-3.2 last:pb-1.5">
						<ul class="flex flex-wrap text-md leading-relaxed p-0 -mr-1.6 -mb-1.6 list-none">
							<li
								class="px-2.5 mr-1.6 mb-3 text-base print:bg-neutral-400 print:border-inset bg-neutral-600 rounded-full mr-1"
							>
								TailwindCSS
							</li>
							<li
								class="px-2.5 mr-1.6 mb-3 text-base print:bg-neutral-400 print:border-inset bg-neutral-600 rounded-full mx-1"
							>
								Rust
							</li>
							<li
								class="px-2.5 mr-1.6 mb-3 text-base print:bg-neutral-400 print:border-inset bg-neutral-600 rounded-full mx-1"
							>
								Git
							</li>
							<li
								class="px-2.5 mr-1.6 mb-3 text-base print:bg-neutral-400 print:border-inset bg-neutral-600 rounded-full mx-1"
							>
								Go
							</li>
							<li
								class="px-2.5 mr-1.6 mb-3 text-base print:bg-neutral-400 print:border-inset bg-neutral-600 rounded-full mx-1"
							>
								Linux Server
							</li>
							<li
								class="px-2.5 mr-1.6 mb-3 text-base print:bg-neutral-400 print:border-inset bg-neutral-600 rounded-full mx-1"
							>
								Photoshop
							</li>
							<li
								class="px-2.5 mr-1.6 mb-3 text-base print:bg-neutral-400 print:border-inset bg-neutral-600 rounded-full mx-1"
							>
								Illustrator
							</li>
							<li
								class="px-2.5 mr-1.6 mb-3 text-base print:bg-neutral-400 print:border-inset bg-neutral-600 rounded-full mx-1"
							>
								Figma
							</li>
						</ul>
					</div>
				</section>
			</section>

			<section class="mt-8 first:mt-0">
				<div class="break-inside-avoid">
					<h2 class="mb-4 font-bold tracking-widest text-sm2 text-gray-550 print:font-normal">
						CONTACT
					</h2>

					<section class="mb-4 break-inside-avoid">
						<ul class="list-inside pr-7 list-none pl-0">
							<li class="mt-1.5 leading-normal text-md">
								<a href="//thrzl.xyz" class="group text-white font-bold">
									thrzl.xyz
									<span
										class="inline-block text-gray-550 print:text-black font-normal transition duration-500 ease-in-out group-hover:-translate-y-[0.125rem] group-hover:translate-x-[0.125rem]"
										>↗</span
									>
								</a>
							</li>
							<li class="mt-1.5 leading-normal text-md">
								<a href="//github.com/thrzl" class="group text-white font-bold">
									github.com/thrzl
									<span
										class="inline-block text-gray-550 print:text-black font-normal transition duration-500 ease-in-out group-hover:-translate-y-[0.125rem] group-hover:translate-x-[0.125rem]"
										>↗</span
									>
								</a>
							</li>
							<li class="mt-1.5 leading-normal text-md">
								<a href="mailto:thrizzle@skiff.com?subject=Hey!" class="group text-white font-bold"
									>thrizzle@skiff.com <span
										class="inline-block text-gray-550 print:text-black font-normal transition duration-500 ease-in-out group-hover:-translate-y-[0.125rem] group-hover:translate-x-[0.125rem]"
										>↗</span
									></a
								>
							</li>
						</ul>
					</section>
				</div>
			</section>
		</div>
	</div>
</div>
