# Deployment Guide

This guide covers deploying the Dedi Fardiyanto portfolio website to various platforms.

## Prerequisites

- Bun >= 1.x (recommended) or Node.js >= 18.x
- Git
- Groq API Key (for AI Chatbot feature)

## Build Process

### 1. Install Dependencies

```bash
bun install
```

### 2. Run Build

```bash
bun run build
```

This creates an optimized `.next` folder ready for deployment.

### 3. Test Production Build

```bash
bun run start
```

## Deployment Platforms

### Vercel (Recommended)

Vercel is the creator of Next.js and provides the best integration.

#### Automatic Deployment

1. Push code to GitHub/GitLab/Bitbucket
2. Import project in [Vercel Dashboard](https://vercel.com/dashboard)
3. Vercel automatically detects Next.js
4. Click Deploy

#### Manual Deployment

1. Install Vercel CLI:

```bash
bun add -g vercel
```

2. Login:

```bash
vercel login
```

3. Deploy:

```bash
vercel --prod
```

#### Environment Variables

Set the following environment variables in Vercel Dashboard:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Get your Groq API key from [console.groq.com](https://console.groq.com).

#### Vercel Analytics

Already integrated in `_app.js`. No additional setup needed.

### Netlify

#### Using Netlify CLI

1. Install CLI:

```bash
bun add -g netlify-cli
```

2. Login:

```bash
netlify login
```

3. Deploy:

```bash
netlify deploy --prod
```

#### Using Git Integration

1. Connect repository in Netlify Dashboard
2. Configure build settings:
   - **Build command**: `bun run build`
   - **Publish directory**: `.next`
3. Add environment variables: `GROQ_API_KEY`
4. Click Deploy

**Note**: Add this to `netlify.toml` for Pages Router:

```toml
[[plugins]]
package = "@netlify/plugin-nextjs"
```

### AWS Amplify

1. Connect repository in Amplify Console
2. Configure build settings:
   - **Build command**: `bun run build`
   - **Output directory**: `.next`
3. Add environment variables: `GROQ_API_KEY`
4. Click Deploy

### Docker

#### Build Docker Image

Create `Dockerfile`:

```dockerfile
FROM oven/bun:1 AS base

WORKDIR /app

FROM base AS deps
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

FROM base AS runner
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV GROQ_API_KEY=""
CMD ["bun", "server.js"]
```

Update `next.config.js` for standalone output:

```js
module.exports = {
  output: 'standalone',
  // ... other config
}
```

Build and run:

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

### Traditional VPS

1. Build project locally:

```bash
bun run build
```

2. Install dependencies on server:

```bash
bun install
bun add -g pm2
```

3. Upload `.next`, `public`, `package.json`, `bun.lockb`

4. Set environment variables:

```bash
export GROQ_API_KEY=your_groq_api_key_here
```

4. Start with PM2:

```bash
pm2 start npm --name "portfolio" -- start
pm2 save
pm2 startup
```

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Check responsive design on mobile
- [ ] Verify SEO metadata
- [ ] Test contact form (if implemented)
- [ ] Check Analytics integration
- [ ] Verify dark mode functionality
- [ ] Test navigation links
- [ ] Check page loading speed
- [ ] Verify sitemap.xml accessible

## Environment-Specific Notes

### Production

- Ensure `NODE_ENV=production` is set
- Enable compression in server
- Configure proper caching headers
- Use CDN for static assets

### Staging

- Use different base URL for API calls
- Disable analytics in staging
- Add `staging` prefix to URLs if needed

## Troubleshooting

### Build Errors

**Error**: `Module not found`

**Solution**: Run `bun install` again

**Error**: `Out of memory`

**Solution**: Increase memory limit:

```bash
NODE_OPTIONS="--max-old-space-size=4096" bun run build
```

### Runtime Errors

**Error**: 404 on page load

**Solution**: Check `next.config.js` and ensure routing is correct

**Error**: Static assets not loading

**Solution**: Ensure `public` folder is deployed and paths are correct

### Performance Issues

**Issue**: Slow page load

**Solutions**:
- Enable gzip compression
- Optimize images
- Check bundle size with `bun run build`
- Consider CDN for static assets

## CI/CD

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: oven-sh/setup-bun@v1
        with:
          bun-version: latest
      - run: bun install
      - run: bun run build
      - run: bun test
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## Monitoring

### Vercel Analytics

Check [Vercel Dashboard](https://vercel.com/dashboard) for:
- Page views
- Real users
- Core Web Vitals

### Custom Analytics

Add Google Analytics to `_app.js`:

```jsx
import Script from 'next/script';

function MyApp() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  );
}
```

## Backup & Recovery

### Database Backup (if applicable)

```bash
# Backup
mysqldump -u user -p database > backup.sql

# Restore
mysql -u user -p database < backup.sql
```

### Code Backup

```bash
# Backup to tar
tar -czf backup-$(date +%Y%m%d).tar.gz .

# Restore
tar -xzf backup-YYYYMMDD.tar.gz
```

## Rollback Strategy

### Vercel

1. Go to Deployments tab
2. Find previous successful deployment
3. Click "Promote to Production"

### Other Platforms

```bash
# Git revert
git revert HEAD
git push

# Or checkout previous commit
git checkout <commit-hash>
git push
```

## Security

1. **HTTPS**: Always use HTTPS
2. **Headers**: Add security headers:

```js
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}
```

3. **Rate Limiting**: Add rate limiting to API routes

4. **Input Validation**: Validate all form inputs

## Support

For deployment issues:

1. Check [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
2. Check platform-specific documentation
3. Check error logs in platform dashboard
4. Search existing issues on GitHub

---

Last updated: January 2025
