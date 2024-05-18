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