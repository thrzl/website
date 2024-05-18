export interface Image {
    size: string;
    "#text": string;
}

export interface Album {
    name: string;
    artist: {
        url: string;
        name: string;
        mbid: string;
    };
    image: Image[];
    mbid: string;
    url: string;
}

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