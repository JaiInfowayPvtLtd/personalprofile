# How to Add Your Profile Photo

The Hero section now includes a professional profile photo on the left side. Follow these steps to add your photo:

## Step 1: Prepare Your Photo

1. Use a professional headshot photo (preferably square format)
2. Recommended size: At least 800x800 pixels
3. Supported formats: JPG, PNG, WebP
4. File size: Keep it under 500KB for optimal loading

## Step 2: Add the Photo to Your Project

### Option A: Using the provided photo

1. Save the profile image as `profile.jpg`
2. Place it in the `public` folder of your project:
   ```
   adarsh-naidu-portfolio/
   └── public/
       └── profile.jpg
   ```

### Option B: Using a different filename

1. Save your photo in the `public` folder with any name (e.g., `adarsh-photo.jpg`)
2. Update the image source in `components/Hero.tsx`:
   ```typescript
   // Change this line (around line 34):
   src="/profile.jpg"

   // To:
   src="/adarsh-photo.jpg"  // or whatever your filename is
   ```

## Step 3: Verify the Photo

1. The photo should automatically appear in the Hero section
2. It will be displayed in a circular frame with a gold border
3. If the photo doesn't load, a fallback with initials "AN" will be shown

## Current Photo Features

✓ Circular frame with executive gold border
✓ Decorative glow effects
✓ Responsive sizing (adapts to screen size)
✓ Automatic fallback if image is not found
✓ Professional presentation with hover effects

## Fallback Behavior

If the photo file is not found, the component will automatically display:
- The initials "AN" (Adarsh Naidu)
- In a gold color against a dark background
- This ensures the page always looks professional

## Testing

After adding your photo:
1. Refresh the page
2. Check both desktop and mobile views
3. Ensure the photo is centered and clear
4. Verify the gold border appears correctly

## Troubleshooting

**Photo not showing?**
- Check the filename matches exactly (case-sensitive)
- Ensure the photo is in the `public` folder
- Try clearing your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors

**Photo looks blurry?**
- Use a higher resolution image
- Ensure the photo is at least 800x800 pixels

**Photo is too large (slow loading)?**
- Compress the image using tools like TinyPNG or ImageOptim
- Target file size: 200-500KB
