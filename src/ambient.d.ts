interface Album {
	artist: Artist;
	image: Image[];
	mbid: string;
	name: string;
	url: string;
}

interface Artist {
	mbid: string;
	name: string;
	url: string;
}

interface Image {
	"#text": string;
	size: string;
}
