# Deployment Guide

This guide covers multiple deployment options for the Adarsh Naidu portfolio website.

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest and recommended deployment platform for Next.js applications.

### Option 1: Deploy via Git

1. Push your code to GitHub, GitLab, or Bitbucket:
```bash
git init
git add .
git commit -m "Initial commit: Executive portfolio website"
git remote add origin <your-repo-url>
git push -u origin main
```

2. Visit [vercel.com](https://vercel.com)
3. Sign up or log in
4. Click "New Project"
5. Import your Git repository
6. Vercel will auto-detect Next.js - click "Deploy"
7. Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be live!

## Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

Or connect via Git at [netlify.com](https://netlify.com) with these settings:
- Build command: `npm run build`
- Publish directory: `.next`

## Deploy to AWS Amplify

1. Push code to GitHub
2. Visit [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
3. Click "New app" > "Host web app"
4. Connect your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
6. Click "Save and deploy"

## Deploy to Custom Server

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

The app will run on port 3000 by default.

### Using PM2 for production:
```bash
npm install -g pm2
pm2 start npm --name "adarsh-portfolio" -- start
pm2 save
pm2 startup
```

## Environment Variables

If you add any environment variables in the future, create a `.env.local` file:

```bash
# Example
NEXT_PUBLIC_API_URL=https://api.example.com
```

For production deployments, add these through your hosting platform's dashboard.

## Custom Domain

### Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify:
1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration instructions

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify all contact information is correct
- [ ] Check responsiveness on mobile devices
- [ ] Test contact form/email links
- [ ] Verify LinkedIn link works
- [ ] Check page load performance
- [ ] Test on different browsers
- [ ] Verify SEO meta tags
- [ ] Set up analytics (Google Analytics, Vercel Analytics, etc.)
- [ ] Configure custom domain (if applicable)

## Performance Optimization

The website is already optimized with:
- ✅ Next.js automatic code splitting
- ✅ Image optimization ready
- ✅ Tailwind CSS purging
- ✅ TypeScript for type safety
- ✅ Modern ES6+ features

## Monitoring

Consider adding:
- **Vercel Analytics**: Built-in, zero-config
- **Google Analytics**: Track visitor behavior
- **Sentry**: Error tracking and monitoring

## Support

For deployment issues:
- Vercel: [vercel.com/docs](https://vercel.com/docs)
- Netlify: [docs.netlify.com](https://docs.netlify.com)
- Next.js: [nextjs.org/docs](https://nextjs.org/docs)

## Continuous Deployment

Once connected to Git:
- Every push to `main` branch automatically deploys
- Pull requests create preview deployments
- Rollback to any previous deployment with one click
