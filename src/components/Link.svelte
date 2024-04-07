<script lang="ts">
	export let href;
	// export let color = 'red';
	export let _class = '';
</script>

<a {href} class={`group ${_class}`}
	><slot /><span
		class="extern text-sm ml-0.25 inline-block font-normal group-hover:translate-x-1 transition duration-500 ease-out"
		>→</span
	></a
>
