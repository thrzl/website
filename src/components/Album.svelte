<script lang="ts">
    import type { Album } from "$lib/types";

    // biome-ignore lint/style/useConst: can't be const as it is defined in the svelte component
    export let album: Album | undefined = undefined;

    export let sequence: number;

    import musicImage from "../images/music.avif";

    function filterAlbumImages(images: Image[]) {
        let filteredImages = images.filter(
            (image) => image.size === "extralarge",
        );
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

{#if !album}
    <span
        class="border-0 group relative mx-8 snap-start snap-always rounded-lg before:absolute max-h-min before:inset-0 before:z-10 before:bg-black before:opacity-0 before:transition before:duration-300 hover:before:opacity-50 max-h-[300px] w-72 h-72 md:w-64 md:h-64 slide-anim animate-pulse"
        style={`--delay: ${sequence * 100 + 200}ms`}
    >
        <div
            class="bg-neutral-900 rounded-lg overflow-hidden max-h-[300px] w-72 h-72 md:w-64 md:h-64"
        >
            <img
                src={musicImage}
                alt={`placeholder`}
                class="rounded-lg transition duration-500 group-hover:scale-[1.03] group-hover:blur-sm group-hover:brightness-50 w-72 h-72 md:w-64 md:h-64"
                loading="lazy"
            />
        </div>
        <div
            class="text-white z-20 absolute pl-8 md:pl-4 text-op-80 inset-2 md:inset-4 flex flex-col justify-center transition duration-500 scale-95 opacity-0 lowercase"
        >
            <p
                class="font-bold text-3xl md:text-2xl leading-none mb-0 invisible"
            >
                filler album
            </p>
            <p
                class="text-lg md:text-base leading-none md:leading-tight opacity-80 mt-1 invisible"
            >
                filler artist
            </p>
        </div>
    </span>
{:else}
    <a
        href={album.url}
        target="_blank"
        rel="noopener noreferrer"
        class="border-0 group relative mx-8 snap-center snap-always rounded-lg before:absolute max-h-min before:inset-0 before:z-10 before:bg-black before:opacity-0 before:transition before:duration-300 hover:before:opacity-50 max-h-[300px] w-72 h-72 md:w-64 md:h-64 slide-anim animate-fade-in"
        style={`--delay: ${sequence * 100 + 200}ms`}
    >
        <div
            class="bg-slate-900 rounded-lg overflow-hidden max-h-[300px] w-72 h-72 md:w-64 md:h-64"
        >
            <img
                src={filterAlbumImages(album.image) || musicImage}
                alt={`${album.name} cover art`}
                class="rounded-lg transition duration-500 group-hover:scale-[1.03] group-hover:blur-sm group-hover:brightness-50 w-72 h-72 md:w-64 md:h-64"
                loading="lazy"
            />
        </div>
        <div
            class="text-white z-20 absolute items-center text-left text-op-85 inset-2 md:inset-4 flex flex-col justify-center transition duration-500 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 lowercase"
        >
            <p class="font-bold text-3xl leading-none mb-0.5 text-left w-4/5">
                {album.name}
            </p>
            <p
                class="text-lg leading-none md:leading-tight opacity-80 mt-0 text-left w-4/5"
            >
                {album.artist.name}
            </p>
        </div>
    </a>
{/if}
