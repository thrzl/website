export interface Project {
	full_name: string;
	name: string;
	description: string;
	link: string;
	stars: number;
	forks: number;
	language_color: string;
	language: string;
}

export interface Artist {
	artist_credit_name: string
	artist_mbid: string
	join_phrase: string
}

export interface Release {
    artist_mbids:     string[];
    artist_name:      string;
    artists:          Artist[];
    caa_id:           number;
    caa_release_mbid: string;
    listen_count:     number;
    release_mbid:     string;
    release_name:     string;
}

