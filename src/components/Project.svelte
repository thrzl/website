<script lang="ts">
    import Link from './Link.svelte';
    
    interface Project {
        name: string;
        description: string;
        link: string;
    }

    // biome-ignore lint/style/useConst: can't be const as it is defined in the svelte component
    export let project: Project | undefined = undefined;
</script>

{#if !project}
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
{:else}
    <div
        class="px-6 block rounded-xl animate-fade-in duration-50 relative py-4 md:h-4/5"
    >
        <h3
            class="text-xl font-bold text-white -mb-3 md:-mb-2 mt-0 font-mono rounded-lg text-wrap w-2/3"
        >
            {project.name.toLowerCase()}
        </h3>
        <p class="text-gray-300 mb-2 text-md md:text-prose">
            {project.description}
        </p>
        <Link href={project.link} _class="text-white mt-1 absolute bottom-0"
            >more info</Link
        >
    </div>
{/if}
