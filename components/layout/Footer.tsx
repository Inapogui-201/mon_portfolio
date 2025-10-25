import { Github, Linkedin } from 'lucide-react'
import { cn } from '@/utils/css'

export function Footer({ className }: { className?: string }) {
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/votre-profil',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/votre-profil',
      label: 'GitHub',
    },
  ]
  return (
    <footer
      className={cn(
        'sticky top-[100vh] flex flex-col items-center gap-3 mx-auto pt-6 pb-10 border-t border-layout-primary sm:flex-row sm:justify-between sm:gap-8 sm:pt-8 sm:pb-6 sm:border-none',
        className
      )}
    >
      <p className="group flex items-center gap-1.5 text-sm text-tertiary sm:text-xs">
        <span>&copy; {new Date().getFullYear()} Michel Inapogui. Tous droits réservés.</span>
      </p>

      <div className="flex items-center gap-2 sm:gap-3">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary/10 transition-all hover:scale-105"
          >
            <Icon className="w-4 h-4 text-gray-700" />
          </a>
        ))}
      </div>
    </footer>
  )
}
