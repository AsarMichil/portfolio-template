# No Name Style Portfolio Template

A SvelteKit-based portfolio template inspired by Canada's No Name brand aesthetic, designed for minimal setup and maximum impact. Users can clone, configure, and deploy with minimal technical knowledge.

## ✨ Features

- **Minimalist brutalism** with clean, bold typography
- **Configurable color themes** (yellow, blue, red, green, purple, orange)
- **Responsive design** with Tailwind CSS v4+
- **Markdown-based content management** for easy updates
- **Dynamic project pages** with case studies
- **Contact form** with simple submission handling
- **SEO-friendly** with proper meta tags
- **Performance optimized** for fast loading

## 🚀 Quick Start

### 1. Clone and Install
```bash
git clone <your-repo-url>
cd portfolio-template
npm install
```

### 2. Configure Your Site
Edit `config.js` with your information:

```javascript
export const siteConfig = {
  // Personal Information
  name: "jane doe",
  tagline: "designer and developer",
  email: "jane@example.com",
  location: "toronto, canada",
  
  // Theme (yellow, blue, red, green, purple, orange)
  primaryColor: "yellow",
  
  // Social Links (optional)
  social: {
    github: "janedoe",
    linkedin: "janedoe",
    twitter: "janedoe",
    instagram: "janedoe"
  },
  
  // SEO
  siteUrl: "https://janedoe.com",
  description: "designer and developer creating meaningful digital experiences"
}
```

### 3. Add Your Content

#### About Page
Edit `content/about.md` with your personal story:

```markdown
# About Me

Hello! I'm a designer and developer who believes in creating meaningful digital experiences...
```

#### Projects
Add project files to `content/projects/`:

```markdown
---
title: my awesome project
description: brief description of what this project does
date: 2024-01-15
tags: [web design, branding, ui/ux]
featured: true
thumbnail: project-hero.jpg
images: 
  - project-detail-1.jpg
  - project-detail-2.jpg
link: https://project-url.com
github: https://github.com/user/project
---

# The Challenge
What problem were you solving?

# The Process
How did you approach it?

# The Solution
What did you build/create?

# Results
What was the impact?
```

#### Images
Add your images to:
- `content/images/` - General images
- `content/images/projects/` - Project images

### 4. Development
```bash
npm run dev
```

### 5. Build and Deploy
```bash
npm run build
```

Deploy to Vercel, Netlify, or any static hosting service.

## 🎨 Customization

### Color Themes
The template includes 6 predefined color themes. Change the `primaryColor` in `config.js`:

- `yellow` - No Name classic
- `blue` - Professional blue
- `red` - Bold red
- `green` - Fresh green
- `purple` - Creative purple
- `orange` - Energetic orange

### Typography
Uses Helvetica Neue font stack with custom typography classes:

- `.font-semibold` - Hero text
- `.text-section-heading` - Section headings
- `.text-project-title` - Project titles
- `.text-body` - Body text
- `.text-description` - Small descriptions

### Layout Classes
Custom container and spacing classes:

- `.container-sm`, `.container-md`, `.container-lg` - Different container sizes
- `.section-padding` - Standard section spacing
- `.portfolio-grid` - Project grid layout

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/
│   │   ├── Header.svelte          # Site navigation
│   │   ├── Footer.svelte          # Site footer
│   │   ├── ProjectCard.svelte     # Project preview card
│   │   └── ContactForm.svelte     # Contact form
│   └── utils/
│       └── content.ts             # Content loading utilities
├── routes/
│   ├── +layout.svelte             # Main layout
│   ├── +page.svelte               # Home page
│   ├── portfolio/
│   │   ├── +page.svelte           # Portfolio listing
│   │   └── [slug]/
│   │       └── +page.svelte       # Individual project pages
│   ├── about/
│   │   └── +page.svelte           # About page
│   └── contact/
│       └── +page.svelte           # Contact page
└── app.css                        # Global styles

content/
├── about.md                       # About page content
├── projects/                      # Project markdown files
│   ├── project-1.md
│   └── project-2.md
└── images/                        # Image assets
    └── projects/
        ├── project-1-hero.jpg
        └── project-1-detail-1.jpg
```

## 🛠 Advanced Customization

### Custom CSS Classes
Add your own utility classes in `src/app.css`:

```css
/* Custom spacing */
.section-xl { @apply py-24 md:py-32 lg:py-40; }

/* Custom components */
.my-custom-card { 
  @apply bg-white border-2 border-gray-200 p-6 hover:border-primary;
}
```

### New Color Theme
Add a new color theme by updating `src/app.css`:

```css
[data-theme="pink"] {
  --color-primary: theme('colors.pink.500');
  --color-primary-light: theme('colors.pink.300');
  --color-primary-dark: theme('colors.pink.700');
}
```

### Contact Form Integration
The contact form is set up for easy integration with services like:
- Formspree
- Netlify Forms
- EmailJS
- Custom backend

Update the form submission logic in `ContactForm.svelte`.

## 📱 Responsive Design

The template is mobile-first with these breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: 768px - 1024px
- **Large**: 1024px+

All components are fully responsive with appropriate scaling.

## 🔍 SEO Features

- Proper meta tags on all pages
- Dynamic titles based on content
- Structured data ready
- Fast loading times
- Semantic HTML structure

## 📦 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Deploy automatically on push

### Netlify
1. Push your code to GitHub
2. Connect your repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Other Platforms
The template generates static files that can be deployed anywhere:
- GitHub Pages
- AWS S3 + CloudFront
- DigitalOcean App Platform
- Any static hosting service

## 🤝 Contributing

Feel free to submit issues and pull requests to improve the template.

## 📄 License

This template is free to use for personal and commercial projects.

---

**Made with ❤️ using SvelteKit and Tailwind CSS**
