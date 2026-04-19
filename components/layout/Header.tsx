'use client'

import { useState } from 'react'
import { Braces, Github, Linkedin, Menu, X } from 'lucide-react'
import { links } from '@/data/links'
import { cn } from '@/utils/css'

export function Header({ className }: { className?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

  const navigationLinks = [
    {
      href: '/',
      label: 'Accueil',
    },
    {
      href: '/resume',
      label: 'Résumé',
    },
    {
      href: '/projects',
      label: 'Projets',
    },
    {
      href: '/contact',
      label: 'Contact',
    },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header
        className={cn(
          'flex justify-between items-center mx-auto h-16 px-3 sm:px-4 md:px-6 lg:px-8 w-full max-w-7xl relative z-50',
          className
        )}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex items-center gap-1 overflow-hidden select-none">
            <span className="relative shrink-0 bg-white">
              <Braces className="size-5 sm:size-6 fill-accent" />
            </span>

            <span className="font-bold text-[0.9375rem] sm:text-[1.0625rem] leading-5 tracking-[0.025em] text-secondary uppercase">
              MI
            </span>
          </div>
        </div>

        {/* Desktop Navigation + Social Links */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <nav className="flex items-center gap-4 lg:gap-6">
            {navigationLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Social Links */}
          <div className="flex items-center gap-2 lg:gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border border-gray-200 flex items-center justify-center hover:bg-orange-50 transition-all hover:scale-105"
              >
                <Icon className="w-4 h-4 text-gray-700 hover:text-orange-500" />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5 text-gray-700" />
          ) : (
            <Menu className="w-5 h-5 text-gray-700" />
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed top-16 right-0 w-72 sm:w-80 bg-white shadow-xl rounded-l-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="p-6 space-y-6">
          {/* Navigation Links */}
          <div className="space-y-4">
            {navigationLinks.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                onClick={closeMobileMenu}
                className="block text-base font-medium text-gray-700 hover:text-orange-500 transition-colors py-2 px-3 rounded-lg hover:bg-orange-50"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm font-medium text-gray-500 mb-3">Suivez-moi</p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  onClick={closeMobileMenu}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-orange-50 transition-all hover:scale-105"
                >
                  <Icon className="w-5 h-5 text-gray-700 hover:text-orange-500" />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
