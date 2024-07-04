<script lang="ts">
import type { Image, Album } from "$lib/types";
export let albums: Promise<Album[]>;

import AlbumComponent from "./Album.svelte";
import musicImage from "../images/music.avif";

function filterAlbumImages(images: Image[]) {
	let filteredImages = images.filter((image) => image.size === "extralarge");
	if (filteredImages.length > 0) {
		return filteredImages[0]["#text"].replace("300x300", "600x600");
	}
	filteredImages = images.filter((image) => image.size === "large");
	if (filteredImages.length > 0) {
		return filteredImages[0]["#text"].replace("300x300", "600x600");
	}
	return musicImage;
}
</script>
<style>
    .no-scrollbar {
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
</style>

<div class="w-3/4 mx-auto">
	{#await albums}
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
	{:then albums}
        <div class="w-3/4 mx-auto">
            <div
                class="relative w-screen ml-[calc(-50vw)] left-1/2 mb-12 mt-2 before:z-10" style="-webkit-mask-image: linear-gradient(to right,#0000 0%,#000 25%,#000 75%,#0000 100%);"
            >
                <div
                    class="lg:px-[calc(50vw-400px)] md:px-[calc(50vw-350px)] px-8 lg:scroll-pl-[calc(50vw-400px)] md:scroll-pl-[calc(50vw-350px)] scroll-pl-8 grid md:grid-rows-2 grid-cols-[repeat(10,calc(9rem))] md:grid-cols-[repeat(10,calc(12rem))] lg:grid-cols-[repeat(10,calc(14rem))] grid-flow-col gap-4 gap-x-40 md:gap-x-20 lg:gap-x-12 overflow-x-scroll no-scrollbar snap-x snap-mandatory slide-wrapper"
                >
                    {#each albums as album, i}
                        <AlbumComponent album={album} sequence={i}/>
                    {/each}
                </div>
            </div>
        </div>
	{/await}
</div>
