/** @type {import('./$types').PageServerLoad} */
export function load({ fetch, setHeaders }) {
	function get(endpoint: string) {
		return fetch(`/api/${endpoint}`).then((res) => res.json());
	}

	setHeaders({ "Cache-Control": "max-age=3600" });

	return {
		music: get("music"),
		projects: get("projects"),
	};
}
