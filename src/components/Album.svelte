<script lang="ts">
    import type { Artist, Release } from "$lib/types";

    // biome-ignore lint/style/useConst: can't be const as it is defined in the svelte component
    export let album: Release | null = null;

    export let sequence: number;

    import musicImage from "../images/music.avif";

    

function createArtistString(artists: Artist[]) {
    return artists.map(artist => artist.artist_credit_name + artist.join_phrase).join('');
}
function insertFallbackImage(img: HTMLImageElement) {
    img.src = musicImage;
}
function toSemiLowercase(title: string) {
    // is it all caps?
    const allLetters = title.replace(/[^A-Za-z]/g, '');
    const isEntireTitleAllCaps = allLetters === allLetters.toUpperCase() && allLetters.length > 0;

    if (isEntireTitleAllCaps) {
        return title.toLowerCase();
    }

    const parts = title.split(/(\s+)/);

    return parts.map(part => {
        if (/^\s+$/.test(part)) return part;

        const letters = part.replace(/[^A-Za-z]/g, '');
        if (letters.length === 0) return part;

        // check if letters after the first are uppercase
        let hasUppercaseAfterFirst = false;
        for (let i = 1; i < letters.length; i++) {
            if (letters[i] === letters[i].toUpperCase()) {
                hasUppercaseAfterFirst = true;
                break;
            }
        }

        const isAllCaps = letters === letters.toUpperCase();

        // keep if has uppercase after first character or all caps
        if (hasUppercaseAfterFirst || isAllCaps) {
            if (hasUppercaseAfterFirst && /^[A-Z]*$/.test(title[0]) && !isAllCaps) {
                return part.toLowerCase();
            }
            return part;
        }
        return part.toLowerCase();
    }).join('');
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
            class="text-white z-20 absolute pl-8 md:pl-4 text-op-80 inset-2 md:inset-4 flex flex-col justify-center transition duration-500 scale-95 opacity-0"
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
        href={album.release_mbid ? `https://listenbrainz.org/release/${album.release_mbid}` : null}
        target="_blank"
        rel="noopener noreferrer"
        class="group relative mx-8 snap-center snap-always rounded-lg before:absolute max-h-min before:inset-0 before:z-10 before:bg-black before:opacity-0 before:transition before:duration-300 hover:before:opacity-50 max-h-[300px] w-72 h-72 md:w-64 md:h-64 slide-anim animate-fade-in"
        style={`--delay: ${sequence * 100 + 200}ms`}
    >
        <div
            class="bg-slate-900 rounded-lg overflow-hidden max-h-[300px] w-72 h-72 md:w-64 md:h-64"
        >
            <img
                src={`http://coverartarchive.org/release/${album.caa_release_mbid}/front-500/`}
                alt={`${album.release_name} cover art`}
                class="rounded-lg transition duration-500 group-hover:scale-[1.03] group-hover:blur-sm group-hover:brightness-50 w-72 h-72 md:w-64 md:h-64"
                loading="lazy"
                on:error="{(e) => insertFallbackImage(e.target)}"
            />
        </div>
        <div
            class="text-white z-20 absolute items-center text-left text-op-85 inset-2 md:inset-4 flex flex-col justify-center transition duration-500 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100"
        >
            <p class="font-bold text-3xl leading-none mb-0.5 text-left w-4/5">
                {toSemiLowercase(album.release_name)}
            </p>
            <p
                class="text-lg leading-none md:leading-tight opacity-80 mt-0 text-left w-4/5"
            >
                {toSemiLowercase(album.artists ? createArtistString(album.artists) : album.artist_name)}
            </p>
        </div>
    </a>
{/if}
