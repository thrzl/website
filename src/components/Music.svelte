<script lang="ts">
import type { Release } from "$lib/types";
export let releases: Promise<Release[]>;

import AlbumComponent from "./Album.svelte";

</script>
<style>
    .no-scrollbar {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
</style>

<div class="w-3/4 mx-auto">
	{#await releases}
        <div class="w-3/4 mx-auto">
            <div
                class="relative w-screen ml-[calc(-50vw)] left-1/2 mb-12 mt-2 before:z-10" style="-webkit-mask-image: linear-gradient(to right,#0000 0%,#000 25%,#000 75%,#0000 100%);"
            >
                <div
                    class="lg:px-[calc(50vw-400px)] md:px-[calc(50vw-350px)] px-8 lg:scroll-pl-[calc(50vw-400px)] md:scroll-pl-[calc(50vw-350px)] scroll-pl-8 grid md:grid-rows-2 grid-cols-[repeat(10,calc(9rem))] md:grid-cols-[repeat(10,calc(12rem))] lg:grid-cols-[repeat(10,calc(14rem))] grid-flow-col gap-4 gap-x-40 md:gap-x-20 lg:gap-x-12 overflow-x-scroll no-scrollbar snap-x snap-mandatory slide-wrapper"
                >
                    {#each [...Array(20)] as _, i}
                        <AlbumComponent sequence={i}/>
                    {/each}
                </div>
            </div>
        </div>
	{:then releases}
    {console.log("done", releases)}
        <div class="w-3/4 mx-auto">
            <div
                class="relative w-screen ml-[calc(-50vw)] left-1/2 mb-12 mt-2 before:z-10" style="-webkit-mask-image: linear-gradient(to right,#0000 0%,#000 25%,#000 75%,#0000 100%);"
            >
                <div
                    class="lg:px-[calc(50vw-400px)] md:px-[calc(50vw-350px)] px-8 lg:scroll-pl-[calc(50vw-400px)] md:scroll-pl-[calc(50vw-350px)] scroll-pl-8 grid md:grid-rows-2 grid-cols-[repeat(10,calc(9rem))] md:grid-cols-[repeat(10,calc(12rem))] lg:grid-cols-[repeat(10,calc(14rem))] grid-flow-col gap-4 gap-x-40 md:gap-x-20 lg:gap-x-12 overflow-x-scroll no-scrollbar snap-x snap-mandatory slide-wrapper"
                >
                    {#each releases as release, i}
                        <AlbumComponent album={release} sequence={i}/>
                    {/each}
                </div>
            </div>
        </div>
	{/await}
</div>
