<script lang="ts">
export let href: string;
//biome-ignore lint/style/useConst: can't be const as it is defined in the svelte component
export let _class: string = "";
</script>

<a {href} class={`group ${_class}`}
	><slot /><span
		class="extern text-sm ml-0.25 inline-block font-normal group-hover:translate-x-1 transition duration-500 ease-out"
		>→</span
	></a
>
