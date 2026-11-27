## Getting Started

Install the dependencies and run the development server:

```bash
npm install --legacy-peer-deps
NODE_OPTIONS=--openssl-legacy-provider npm run dev
```

On recent Node.js versions, the `NODE_OPTIONS` setting enables the legacy
OpenSSL provider required by this version of Next.js.

## GoDaddy cPanel deployment

Download `cpanel-deploy.zip` from the master branch (use GitHub's download raw
file button). In cPanel File Manager, upload it to your domain's document root
(usually `public_html`) and extract it there. `index.html`, `_next/`, and
`favicon.ico` must be directly in that directory, not inside another folder.
The package is for a domain served from the web root, not a subdirectory. It
includes the images used by the page; no Node.js server is needed on GoDaddy.

GitHub's "Download ZIP" adds a top-level repository folder and includes source
files; use `cpanel-deploy.zip` instead.

To regenerate the export and deployment archive after changing the site, use
Node.js 16.7 or newer, install the system `zip` utility and run:

```bash
NODE_OPTIONS=--openssl-legacy-provider npm run build
```

The build refreshes the static files at the repository root and creates
`cpanel-deploy.zip` from `out/`. Commit the refreshed files and archive together.
It also generates `robots.txt` and `sitemap.xml` for `https://ourfootcare.org`.
Image optimization is disabled.