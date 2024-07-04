# thrzl.xyz

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
