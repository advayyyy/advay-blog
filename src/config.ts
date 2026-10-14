export interface NavItem {
  label: string
  icon: string
  to?: string
  href?: string
}

export interface SocialItem {
  label: string
  href: string
  icon: string
}

export const site = {
  brand: 'advay',
  title: "advay's Blog",
  // TODO: change this to the URL Cloudflare Pages gives you once the project
  // is created (usually https://<project-name>.pages.dev, or your own domain).
  url: 'https://advay-blog.pages.dev',
  lang: 'en',
  taglines: [
    'Read(); Think(); Try(); Repeat();',
    'Notes, learnings and half-baked ideas.',
  ],
  copyright: '© 2026 advay. All rights reserved.',
  nav: [
    { label: 'Home', to: '/', icon: 'home' },
    { label: 'Resources', to: '/resources', icon: 'archive' },
    { label: 'Friends', to: '/friends', icon: 'users' },
    { label: 'About', to: '/about', icon: 'user' },
    // Add more nav items here. Use `to:` for an internal page and `href:` for
    // an external link, e.g.:
    // { label: 'Resume', href: 'https://example.com/resume', icon: 'file' },
  ] as NavItem[],
  social: [
    // TODO: replace these with your own links (or delete the ones you don't use).
    { label: 'Email', href: 'mailto:advayyyyyyy@gmail.com', icon: 'envelope' },
    { label: 'GitHub', href: 'https://github.com/advayyyy', icon: 'github' },
  ] as SocialItem[],
}
