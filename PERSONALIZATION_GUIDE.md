# 🎨 Personalization Guide

This guide will help you customize every aspect of your portfolio website.

---

## 🎬 **0. COVER PAGE (Landing Page)**

### File: `app/components/CoverScene.tsx` (Lines 90-110)

**What to change:**
- **Personal photos array** - Add multiple photos of yourself
- **Number of photos** - Currently set to 20 floating photos

**How to add multiple personal photos:**
1. Add your photos to `public/images/` folder (e.g., `photo1.jpg`, `photo2.jpg`, etc.)
2. Edit the `photoUrls` array in `CoverScene.tsx`:

```tsx
const photoUrls = [
  '/images/portrait.jpeg',
  '/images/photo1.jpg',  // Add your photos here
  '/images/photo2.jpg',
  '/images/photo3.jpg',
  // ... add as many as you want
];
```

**To change number of photos:**
- Edit `numPhotos` variable (Line 72) - currently set to 20

**The cover page features:**
- "AHAB" text elevated in the center (3D effect)
- 20 floating photos around the name
- Click on "AHAB" to zoom in and enter the portfolio
- Smooth transition animation

---

## 📸 **1. YOUR PORTRAIT IMAGE**

### Where to put it:
**Location:** `public/images/portrait.jpg`

### Steps:
1. Take or find a high-quality portrait photo of yourself
2. Name it `portrait.jpg`
3. Place it in the `public/images/` folder
4. The image will automatically appear in the 3D scene!

### Optional (Advanced) - Texture Maps:
If you want enhanced 3D effects, you can also add:

- **`public/images/portrait-displacement.jpg`** - Creates depth/3D effect
  - Convert your portrait to grayscale
  - Adjust brightness: white = raised areas, black = recessed areas
  
- **`public/images/portrait-roughness.jpg`** - Controls surface shine
  - Grayscale image: darker = shiny, lighter = matte
  
- **`public/images/portrait-alpha.jpg`** - Controls transparency
  - Grayscale image: white = visible, black = transparent

> **Note:** Only the main `portrait.jpg` is required. The other maps are optional enhancements.

---

## 🏠 **2. HERO SECTION (Top of Page)**

### File: `app/page.tsx` (Lines 38-62)

**What to change:**
- **Your name/title** (Line 40-42)
- **Your tagline** (Line 44-46)
- **Button text** (Lines 48-59)

**Example:**
```tsx
<h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
  Hi, I'm [YOUR NAME]
  <span className="block text-red-500">[YOUR TITLE]</span>
</h1>
<p className="text-xl md:text-2xl text-white/80 mb-8">
  [Your tagline - e.g., "Full Stack Developer & UI/UX Designer"]
</p>
```

---

## 👤 **3. ABOUT SECTION**

### File: `app/page.tsx` (Lines 64-83)

**What to change:**
- **Section heading** (Line 67-69)
- **About paragraph 1** (Lines 70-75)
- **About paragraph 2** (Lines 76-81)

**Example:**
```tsx
<h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
  About Me
</h2>
<p className="text-lg md:text-xl text-white/80 leading-relaxed mb-6">
  [Write your first paragraph about yourself, your background, skills, etc.]
</p>
<p className="text-lg md:text-xl text-white/80 leading-relaxed">
  [Write your second paragraph - hobbies, interests, what inspires you]
</p>
```

---

## 💼 **4. PROJECTS SECTION**

### File: `app/page.tsx` (Lines 8-31 and 85-108)

**What to change:**
- **Projects array** (Lines 8-31) - Replace with your actual projects
- **Section heading** (Line 91-93)

**Example - Edit the projects array:**
```tsx
const projects = [
  {
    title: 'My Awesome Project',
    description: 'A detailed description of what this project does, the challenges I solved, and the impact it had.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    projectUrl: 'https://myproject.com',
    githubUrl: 'https://github.com/yourusername/project',
  },
  {
    title: 'Another Project',
    description: 'Description of your second project...',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    projectUrl: 'https://anotherproject.com',
    githubUrl: 'https://github.com/yourusername/another-project',
  },
  // Add more projects as needed
];
```

**To add more projects:**
- Just add more objects to the `projects` array
- Each project needs: `title`, `description`, `technologies` (array), `projectUrl`, `githubUrl`

---

## 📧 **5. CONTACT SECTION**

### File: `app/page.tsx` (Lines 110-148)

**What to change:**
- **Email address** (Line 125)
- **GitHub URL** (Line 131)
- **LinkedIn URL** (Line 139)
- **Contact message** (Lines 119-122)

**Example:**
```tsx
<a href="mailto:your.actual.email@gmail.com" ...>
  Send Email
</a>
<a href="https://github.com/your-actual-username" ...>
  GitHub
</a>
<a href="https://linkedin.com/in/your-actual-profile" ...>
  LinkedIn
</a>
```

---

## 🎨 **6. COLORS & BRANDING**

### File: `app/page.tsx` (Throughout the file)

**What to change:**
- **Accent color** - Currently red (`text-red-500`, `bg-red-600`)
- Search for `red-500`, `red-600`, `red-700` and replace with your brand color

**Common color options:**
- Blue: `blue-500`, `blue-600`, `blue-700`
- Green: `green-500`, `green-600`, `green-700`
- Purple: `purple-500`, `purple-600`, `purple-700`
- Orange: `orange-500`, `orange-600`, `orange-700`

**Example:**
```tsx
// Change from:
<span className="block text-red-500">Portfolio</span>
// To:
<span className="block text-blue-500">Portfolio</span>
```

---

## 🚗 **7. F1 CAR (Optional - Remove or Customize)**

### File: `app/components/F1Car.tsx`

**Options:**
- **Keep it** - It's already themed with Ferrari red
- **Remove it** - Delete or comment out `<F1Car />` in `app/components/Scene.tsx` (Line 45)
- **Change color** - Edit the color values in `F1Car.tsx` (search for `#DC143C`)

---

## 📝 **8. PAGE TITLE & META**

### File: `app/layout.tsx`

**What to change:**
- **Page title** (Line 5)
- **Meta description** (Line 6)

**Example:**
```tsx
export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Your professional portfolio showcasing my work and projects",
};
```

---

## 🎯 **QUICK CHECKLIST**

Use this checklist to make sure you've personalized everything:

- [ ] Added portrait image to `public/images/portrait.jpg`
- [ ] Changed hero section name and title in `app/page.tsx`
- [ ] Updated about section with your story in `app/page.tsx`
- [ ] Replaced placeholder projects with your real projects in `app/page.tsx`
- [ ] Updated contact links (email, GitHub, LinkedIn) in `app/page.tsx`
- [ ] Changed colors to match your brand (if desired)
- [ ] Updated page title in `app/layout.tsx`
- [ ] Tested the website to make sure everything looks good!

---

## 📁 **FILE STRUCTURE REFERENCE**

```
Portfolio/
├── public/
│   └── images/
│       ├── portrait.jpg          ← YOUR PORTRAIT HERE
│       ├── portrait-displacement.jpg (optional)
│       ├── portrait-roughness.jpg (optional)
│       └── portrait-alpha.jpg (optional)
│
├── app/
│   ├── layout.tsx                ← Page title & meta
│   ├── page.tsx                 ← Main content (Hero, About, Projects, Contact)
│   └── components/
│       ├── F1Car.tsx            ← F1 car (optional to customize)
│       └── Scene.tsx            ← 3D scene setup
```

---

## 💡 **TIPS**

1. **Image Size:** Keep your portrait under 2MB for best performance
2. **Projects:** Start with 3-6 of your best projects
3. **Colors:** Use a color picker tool to find your exact brand colors
4. **Testing:** After making changes, run `npm run dev` to see updates
5. **Backup:** Make a copy of files before making major changes

---

## 🆘 **NEED HELP?**

- Check the main `README.md` for setup instructions
- All code is well-commented - read the comments in the files
- The structure is modular - each section is clearly separated

---

**Happy customizing! 🚀**
