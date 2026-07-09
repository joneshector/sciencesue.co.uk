# Deployment

## Current: GitHub Pages

The static site deploys from the repo root of the default branch.

1. Repo → **Settings → Pages** → Source: *Deploy from a branch* → `main` / `/ (root)`.
2. `CNAME` (already in the repo) points Pages at `www.sciencesue.co.uk`.
3. DNS at the domain registrar:
   - `www` → `CNAME` → `<username>.github.io`
   - apex `sciencesue.co.uk` → `A` records → GitHub Pages IPs (185.199.108.153, .109.153, .110.153, .111.153)
4. Tick **Enforce HTTPS** once the certificate is issued.

Every push to `main` redeploys automatically. No build step exists, so there is nothing else to configure.

## Porting to a DigitalOcean Droplet (or any VPS)

The site is plain static files, so migration is copy-and-serve. This removes the GitHub Pages dependency entirely.

### 1. Provision

Smallest Droplet (1 GB) is ample. Ubuntu LTS + nginx:

```bash
apt update && apt install -y nginx
```

### 2. Deploy the files

```bash
rsync -av --delete \
  --exclude app --exclude docs --exclude .git \
  ./ root@your-droplet:/var/www/sciencesue/
```

(Or `git clone` on the server and point nginx at the checkout.)

### 3. nginx config — `/etc/nginx/sites-available/sciencesue`

```nginx
server {
    server_name sciencesue.co.uk www.sciencesue.co.uk;
    root /var/www/sciencesue;
    index index.html;

    error_page 404 /404.html;

    # Cache static assets aggressively; HTML lightly
    location ~* \.(css|js|jpeg|jpg|png|svg|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

```bash
ln -s /etc/nginx/sites-available/sciencesue /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

### 4. DNS + HTTPS

Point the domain's `A`/`AAAA` records at the Droplet IP, then:

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d sciencesue.co.uk -d www.sciencesue.co.uk
```

Certbot auto-renews. Done — identical site, no GitHub dependency.

### Alternatives (even less ops)

- **Netlify / Cloudflare Pages / Vercel**: connect the repo, set no build command, publish directory `/`. Free tiers cover this site comfortably and add form handling (useful — see SCALING.md).

## Deploying the React app (`app/`)

When the business moves to the React codebase:

```bash
cd app && npm ci && npm run build   # → app/dist/
```

`dist/` is again just static files — serve exactly as above, with one nginx addition for client-side routing:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

A GitHub Action can build and deploy `app/dist` to Pages or rsync it to the Droplet on every push; add this when the app becomes the production site.
