'use client'

import { Braces, Github, Linkedin } from 'lucide-react'
import { links } from '@/data/links'
import { cn } from '@/utils/css'

export function Header({ className }: { className?: string }) {
  const socialLinks = [
    {
      icon: Linkedin,
      href: links.social.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: links.social.github,
      label: 'GitHub',
    },
  ]

  return (
    <header
      className={cn(
        'flex justify-between items-center mx-auto h-16 px-4 sm:px-6 lg:px-8 w-full max-w-7xl',
        className
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-1 overflow-hidden select-none">
        <span className="relative shrink-0 bg-white">
          <Braces className="size-6 fill-accent" />
        </span>

        <span className="font-bold text-[1.0625rem] leading-5 tracking-[0.025em] text-secondary uppercase">
          MI
        </span>
      </div>

      {/* Right side: Contact + Socials */}
      <div className="flex items-center gap-3 sm:gap-4">
        <a
          href="#contact"
          className="hidden sm:inline text-sm font-medium text-gray-700 hover:text-primary transition-colors relative group"
        >
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
        </a>

        {/* Social Links */}
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
      </div>
    </header>
  )
}
