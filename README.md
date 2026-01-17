# Dedi Fardiyanto - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS. Features an AI-powered chatbot for interactive conversations.

## Features

- **Modern Stack**: Next.js 16.1.3 with React 19.0.0
- **Responsive Design**: Optimized for all screen sizes
- **Dark Mode**: System-aware dark mode support
- **AI Chatbot**: Integrated chatbot powered by Groq AI for interactive conversations
- **Performance**: Optimized images, lazy loading, and caching
- **SEO**: Structured data, Open Graph, and sitemap
- **Analytics**: Vercel Analytics integration
- **Error Handling**: Error boundaries for better UX

## Quick Start

### Prerequisites

- Bun >= 1.x (recommended) or Node.js >= 18.x
- Groq API Key (for AI Chatbot)

### Installation

```bash
# Clone the repository
git clone https://github.com/Decade23/profile.git
cd profile

# Install dependencies
bun install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local and add your GROQ_API_KEY

# Run development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

The development server will start at [http://localhost:3006](http://localhost:3006).

## Project Structure

```
├── components/           # React components
│   ├── layouts/         # Layout components (Layout, Seo, NavbarFooter)
│   ├── profile/         # Profile-specific components
│   ├── ChatBot.tsx      # AI Chatbot component (Groq integration)
│   ├── ErrorBoundary.js # Error boundary component
│   ├── Project.js       # Projects showcase
│   ├── Repo.js          # Repository links
│   └── Medsos.js        # Social media links
├── data/                # Static data
│   ├── projects.json    # Projects data
│   └── repos.json       # Repository data
├── pages/               # Next.js pages (Pages Router)
│   ├── api/             # API routes
│   │   └── chat.ts      # Chatbot API endpoint (Groq)
│   ├── _app.tsx         # App wrapper
│   ├── _document.tsx    # Document wrapper
│   ├── index.tsx        # Home page
│   ├── profile.tsx      # Profile page
│   ├── contact.tsx      # Contact page
│   ├── history.tsx      # Work history timeline
│   └── privacy.tsx      # Privacy policy
├── public/              # Static assets
│   ├── assets/          # Images and media
│   │   └── images/porto # Company logos
│   ├── robots.txt       # SEO robots file
│   ├── favicon.svg      # Site favicon (DF icon)
│   └── favicon.ico      # Fallback favicon
├── styles/              # Global styles
│   └── globals.css      # Tailwind imports
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Dependencies and scripts
```

## Available Scripts

- `bun run dev` - Start development server (port 3006)
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint

## Tech Stack

- **Framework**: Next.js 16.1.3 (Pages Router + Turbopack)
- **UI Library**: React 19.0.0
- **Styling**: Tailwind CSS 3.4.17
- **AI Integration**: Groq API (Llama model)
- **Analytics**: Vercel Analytics
- **Theme**: next-themes
- **Runtime**: Bun (recommended)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with default settings

### Other Platforms

Build the project first:

```bash
bun run build
```

Then deploy the `.next` folder and `public` folder.

## Environment Variables

Create a `.env.local` file with the following variables:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Get your Groq API key from [console.groq.com](https://console.groq.com).

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

## About Me

**Dedi Fardiyanto S.Kom** - Tech Lead at Bank Tabungan Negara (BTN)

With 13+ years of experience in software development, I've worked across various companies including:
- Bank BTN (Tech Lead) - 2024-Present
- Adira Finance (Senior Fullstack Developer) - 2021-2024
- Koki Teknologi Indonesia - 2020-2021
- Ellen May Institute - 2019-2020
- Transvision - 2015-2019
- Proxsis - 2013-2015
- ACA Insurance - 2012-2013

## Contact

- Email: dedif15@gmail.com
- Website: [dedi.asia](https://dedi.asia)
- GitHub: [@Decade23](https://github.com/Decade23)
- Phone: +62 856 933 80 123

## Credits

Built with Next.js, Tailwind CSS, and Groq AI.
