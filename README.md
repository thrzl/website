# thrzl.xyz

## apis
### lastfm (top albums of the past week)
`/api/music/:username`
<details>
<summary><b>example response</b></summary>
<br>

```json
[
    {
        "name": "Graduation",
        "artist": {
            "url": "https://www.last.fm/music/Kanye+West",
            "name": "Kanye West",
            "mbid": ""
        },
        "image": [
            {
                "size": "small", // also has medium, large, extralarge
                "#text": "https://lastfm.freetls.fastly.net/i/u/34s/8ddd1959a2bef460a5149b3e0cf5e18a.png"
            },
            ...
        ],
        "mbid": "06a81817-093d-40f0-aef2-90673fa550ae",
        "url": "https://www.last.fm/music/Kanye+West/Graduation",
        "playcount": "14",
        "@attr": {
            "rank": "1"
        },
    },
  ...
]
```
</details>

### github (pinned repositories)
`/api/projects/:username`

<details>
<summary><b>example response</b></summary>
<br>

```json
[
    {
        "full_name": "thrzl/antivanguard",
        "name": "antivanguard",
        "description": "simple tray application to kill valorant vanguard automatically when it's not needed",
        "link": "https://github.com/thrzl/antivanguard",
        "stars": 2,
        "forks": 0,
        "language_color": "#dea584",
        "language": "Rust"
    },
    ...
]
```
</details>

## developing

this project uses **bun** to manage dependencies.

```bash
bun install
bun dev
```

## adapting for your own use
be sure to change the usernames in `src/routes/api` to be your own.

additionally, add an environment variable called `VITE_LASTFM_KEY` containing your lastfm api key.

## building

to build for production:

```bash
bun run build
# NOT bun build.
```

preview your build with `bun preview`.
