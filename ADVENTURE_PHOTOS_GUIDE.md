# 📸 Adventure Photos Setup Guide

This guide will help you add your adventure photos to the website.

## 📁 Step 1: Create the Adventure Folder

The folder already exists at:
```
public/images/adventure/
```

## 📷 Step 2: Add Your Photos

Place your adventure photos in the `public/images/adventure/` folder with these exact names:

1. **skydiving.jpg** - Your skydiving photo
2. **paragliding.jpg** - Your paragliding photo
3. **rock-climbing.jpg** - Your rock climbing photo
4. **scuba-diving.jpg** - Your scuba diving photo
5. **mountain-biking.jpg** - Your mountain biking photo
6. **surfing.jpg** - Your surfing photo

### Supported Formats:
- `.jpg` or `.jpeg`
- `.png`
- `.webp`

### Recommended Image Size:
- **Width:** 1200px - 2000px
- **Aspect Ratio:** 4:3 (width:height)
- **File Size:** Under 500KB per image (optimize for web)

## 🎨 Step 3: Customize Activities (Optional)

If you want to change the activities or add different ones, edit `app/page.tsx`:

**Location:** Around line 50-80

**Find this code:**
```tsx
const adventurePhotos = useMemo(() => [
  {
    src: '/images/adventure/skydiving.jpg',
    alt: 'Skydiving',
    activity: 'Skydiving',
    location: 'Switzerland',
  },
  // ... more activities
], []);
```

**Edit to match your photos:**
```tsx
const adventurePhotos = useMemo(() => [
  {
    src: '/images/adventure/skydiving.jpg',  // Your photo filename
    alt: 'Skydiving',                        // Alt text for accessibility
    activity: 'Skydiving',                   // Activity name (shown on photo)
    location: 'Switzerland',                 // Location (optional)
  },
  {
    src: '/images/adventure/my-adventure.jpg',
    alt: 'My Adventure',
    activity: 'Bungee Jumping',
    location: 'New Zealand',
  },
  // Add more as needed
], []);
```

## ✅ Step 4: Verify Your Photos

1. Make sure your photos are in `public/images/adventure/`
2. Check that filenames match exactly (case-sensitive)
3. Refresh your browser to see the photos

## 🖼️ Quick Example

**Folder Structure:**
```
public/
  images/
    adventure/
      skydiving.jpg      ← Your skydiving photo
      paragliding.jpg    ← Your paragliding photo
      rock-climbing.jpg  ← Your rock climbing photo
      scuba-diving.jpg   ← Your scuba diving photo
      mountain-biking.jpg ← Your mountain biking photo
      surfing.jpg        ← Your surfing photo
```

## 💡 Tips

1. **Optimize Images:** Use tools like [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress images
2. **Naming:** Keep filenames lowercase with hyphens (e.g., `rock-climbing.jpg`)
3. **Quality:** Use high-quality photos but keep file sizes small for fast loading
4. **Aspect Ratio:** 4:3 works best, but the component will crop to fit

## 🐛 Troubleshooting

**Photo not showing?**
- Check the filename matches exactly (including extension)
- Make sure the file is in `public/images/adventure/`
- Check browser console for errors
- Verify the image path in `app/page.tsx` matches your filename

**Want different activities?**
- Edit the `adventurePhotos` array in `app/page.tsx`
- Add/remove items as needed
- Update the `src` path to match your photo filename

---

**That's it!** Your adventure photos will automatically appear with smooth scroll animations! 🚀
