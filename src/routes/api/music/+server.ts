import { json } from "@sveltejs/kit";
import type { Release } from "$lib/types";

/** @type {import('./$types').RequestHandler} */
export async function GET({ url, setHeaders }) {
  const username = url.searchParams.get("user") || "thrizzle";
  if (username === "favicon.ico") return json({ status: 404 });

  const res = await fetch(
    `https://api.listenbrainz.org/1/stats/user/${username}/releases?range=this_week&count=20`,
  );

  setHeaders({ "Cache-Control": "max-age=3600" });

  if (!res) {
    // there's an error, so act as such
    return json({ status: 500 });
  }

  const raw_listens: { payload: { releases: Release[] } } = await res.json();
  return json(raw_listens.payload.releases);
}
