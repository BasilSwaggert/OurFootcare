## Getting Started

Install the dependencies and run the development server:

```bash
npm install --legacy-peer-deps
NODE_OPTIONS=--openssl-legacy-provider npm run dev
```

On recent Node.js versions, the `NODE_OPTIONS` setting enables the legacy
OpenSSL provider required by this version of Next.js.

## Production export

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

Upload the contents of `out/` to the domain's web root, including the `_next`
directory. The build generates `robots.txt` and `sitemap.xml` for
`https://ourfootcare.org` in `out/`. Image optimization is disabled.