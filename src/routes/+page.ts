/** @type {import('./$types').PageServerLoad} */
export function load({ fetch }) {
	function get(endpoint: string) {
		return fetch(`/api/${endpoint}`).then((res) => res.json());
	}
	return {
		music: get("music"),
		projects: get("projects"),
	};
}
