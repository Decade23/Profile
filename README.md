# Dedi Fardiyanto - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS.

## Features

- **Modern Stack**: Next.js 16.1.3 with React 19.0.0
- **Responsive Design**: Optimized for all screen sizes
- **Dark Mode**: System-aware dark mode support
- **Performance**: Optimized images, lazy loading, and caching
- **SEO**: Structured data, Open Graph, and sitemap
- **Analytics**: Vercel Analytics integration
- **Error Handling**: Error boundaries for better UX

## Quick Start

### Prerequisites

- Node.js >= 18.x
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Decade23/profile.git
cd profile

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server will start at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
├── components/           # React components
│   ├── layouts/         # Layout components
│   ├── profile/         # Profile-specific components
│   ├── ErrorBoundary.js # Error boundary component
│   ├── Project.js       # Projects showcase
│   ├── Repo.js          # Repository links
│   └── Medsos.js       # Social media links
├── data/               # Static data
│   ├── projects.json    # Projects data
│   └── repos.json      # Repository data
├── pages/              # Next.js pages (Pages Router)
│   ├── _app.js         # App wrapper
│   ├── _document.js    # Document wrapper
│   ├── index.js        # Home page
│   ├── profile.js      # Profile page
│   ├── contact.js      # Contact page
│   ├── history.js      # Work history
│   └── privacy.js      # Privacy policy
├── public/             # Static assets
│   ├── assets/         # Images and media
│   ├── robots.txt      # SEO robots file
│   └── favicon.ico    # Site favicon
├── styles/             # Global styles
│   └── globals.css     # Tailwind imports
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 16.1.3 (Pages Router)
- **UI Library**: React 19.0.0
- **Styling**: Tailwind CSS 3.4.17
- **Analytics**: Vercel Analytics
- **Theme**: next-themes

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

Build the project first:

```bash
npm run build
```

Then deploy the `.next` folder and `public` folder.

## Customization

### Update Profile Information

Edit the following files:

- `pages/profile.js` - Personal details
- `components/layouts/Seo.js` - SEO metadata
- `pages/home.js` - Main content

### Add/Remove Projects

Edit `data/projects.json`:

```json
{
  "label": "Project Name",
  "img": {
    "src": "/path/to/image.png",
    "alt": "Project description"
  },
  "link": "https://project-url.com",
  "shortDesc": "marketing/cms",
  "isActive": true
}
```

### Add/Remove Repositories

Edit `data/repos.json`:

```json
{
  "name": "github",
  "link": "https://github.com/username",
  "color": "text-github",
  "path": "SVG path data",
  "alt": "github",
  "isActive": true
}
```

## SEO Optimization

The site includes:

- Structured data (JSON-LD) for person schema
- Open Graph tags for social sharing
- Twitter Card support
- Dynamic sitemap at `/sitemap.xml`
- Robots.txt configuration

## Performance Optimization

- Image optimization with Next.js Image component
- Lazy loading for components
- CSS optimization with PurgeCSS
- Static generation where possible
- Turbopack for faster builds

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- Email: dedif15@gmail.com
- Website: [dedi.asia](https://dedi.asia)
- GitHub: [@Decade23](https://github.com/Decade23)

## Credits

Built with ❤️ using Next.js and Tailwind CSS.
