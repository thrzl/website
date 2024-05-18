import { json } from "@sveltejs/kit";

/** @type {import('./$types').RequestHandler} */
export async function GET() {
	const res = await fetch("https://lastfm-py.up.railway.app/thrzl");
	if (res) {
		const albums = await res.json();
		return json(albums);
	}
	return json({ status: 500 });
}
