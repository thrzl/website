import { json } from "@sveltejs/kit";
import type {Album} from "$lib/types";

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, setHeaders }) {
	const username = url.searchParams.get("user") || "thrzl";
	if (username === "favicon.ico") return json({ status: 404 });

	const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${username}&api_key=${import.meta.env.VITE_LASTFM_KEY}&period=7day&limit=20&format=json`);

	setHeaders({ "Cache-Control": "max-age=3600" });

	if (res) {
		const albums: {topalbums: {album: Album[]}} = await res.json();
		return json(albums.topalbums.album);
	}
	return json({ status: 500 });
}
