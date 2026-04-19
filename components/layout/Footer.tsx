import { cn } from '@/utils/css'

export function Footer({ className }: { className?: string }) {
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
    </footer>
  )
}
