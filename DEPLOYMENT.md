# 🚀 Deployment Guide for IX Support Website

## GitHub Pages Deployment Setup

This guide will help you deploy the IX Support website to GitHub Pages with your custom domain `ixsupports.com`.

---

## ✅ Pre-Deployment Checklist

The following files have been configured for deployment:

1. ✅ **Vite Config** (`vite.config.ts`) - Set base path to "/"
2. ✅ **GitHub Actions Workflow** (`.github/workflows/deploy.yml`) - Auto-deployment on push
3. ✅ **CNAME File** (`public/CNAME`) - Custom domain configuration
4. ✅ **Build Test** - Production build completed successfully
5. ✅ **.nojekyll** - Prevents Jekyll processing

---

## 📋 Step-by-Step Deployment Instructions

### Step 1: Push Code to GitHub

```bash
# Navigate to your project directory
cd "d:\Campaign website\ix support\independent-ix-support-main"

# Add all files
git add .

# Commit changes
git commit -m "Deploy IX Support website to GitHub Pages"

# Push to main branch
git push origin main
```

### Step 2: Enable GitHub Pages in Repository Settings

1. Go to your GitHub repository: https://github.com/ixsupprtt77/IXsupport
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. Click **Save**

### Step 3: Configure Custom Domain

In the same **Pages** settings:

1. Under **Custom domain**, enter: `ixsupports.com`
2. Click **Save**
3. Wait for DNS check (may take a few minutes)
4. Check **Enforce HTTPS** once DNS is verified

### Step 4: Configure Your Domain DNS

You need to add DNS records at your domain registrar:

#### A Records (Add all four):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

#### CNAME Record (for www subdomain):
```
Type: CNAME
Host: www
Value: ixsupprtt77.github.io
```

### Step 5: Wait for Deployment

1. Go to **Actions** tab in your GitHub repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 1-2 minutes)
4. Once completed with a green checkmark ✅, your site is live!

---

## 🌐 Accessing Your Website

After deployment is complete, your website will be available at:
- **Custom Domain**: https://ixsupports.com
- **GitHub Pages URL**: https://ixsupprtt77.github.io/IXsupport

---

## 🔧 Troubleshooting White Screen Issues

If you encounter a white screen after deployment:

### Fix 1: Check Browser Console
1. Open browser Developer Tools (F12)
2. Check Console tab for errors
3. Look for 404 errors on assets

### Fix 2: Verify Base Path
Ensure `vite.config.ts` has:
```typescript
base: "/",
```

### Fix 3: Clear Cache
1. Hard refresh the page: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Clear browser cache completely
3. Try incognito/private browsing mode

### Fix 4: Check GitHub Actions
1. Go to **Actions** tab
2. Click on the latest workflow run
3. Check for any errors in the build or deploy steps

### Fix 5: Verify Repository Settings
1. Check that GitHub Pages is enabled
2. Verify Source is set to "GitHub Actions"
3. Ensure custom domain is correctly configured

---

## 🔄 Updating the Website

After the initial deployment, any changes you push to the `main` branch will automatically trigger a new deployment:

```bash
# Make your changes, then:
git add .
git commit -m "Update website content"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Build the project
2. Deploy to GitHub Pages
3. Update your live website

---

## 📊 Monitoring Deployments

### View Deployment Status:
1. Go to **Actions** tab in your repository
2. Click on any workflow run to see details
3. Green checkmark ✅ = successful deployment
4. Red X ❌ = failed deployment (click to see logs)

### View Live Site:
- Check your custom domain: https://ixsupports.com
- Or the GitHub Pages URL: https://ixsupprtt77.github.io/IXsupport

---

## 📝 Important Notes

1. **First Deployment**: May take 10-15 minutes for DNS to propagate worldwide
2. **Subsequent Deployments**: Usually live within 1-2 minutes
3. **HTTPS**: Will be automatically enabled once DNS is verified
4. **Cache**: Users may need to clear cache to see updates

---

## ✨ Features Included

Your deployed website includes:
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Custom IX Support branding and favicon
- ✅ SEO-optimized meta tags
- ✅ Progressive Web App (PWA) support
- ✅ Scroll-to-top functionality
- ✅ Animated sections and hover effects
- ✅ Contact forms and service categories
- ✅ Policy pages (Privacy, Terms, Warranty, etc.)

---

## 🆘 Need Help?

If you encounter any issues:

1. **Check GitHub Actions logs** for build errors
2. **Verify DNS settings** at your domain registrar
3. **Wait for DNS propagation** (up to 24-48 hours in some cases)
4. **Test with GitHub Pages URL first** before custom domain

---

## 🎉 Deployment Complete!

Once you complete these steps, your IX Support website will be live and accessible at https://ixsupports.com!
