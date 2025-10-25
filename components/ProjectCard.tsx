import { cn } from '@/utils/css'

interface ProjectCardProps {
  name: string
  description: string
  link?: string
}

export function ProjectCard({ name, description, link }: ProjectCardProps) {
  const Component = link ? 'a' : 'div'

  return (
    <Component
      className={cn(
        'block p-3 bg-layout-secondary-active border border-layout-primary rounded-lg',
        link &&
          'group relative ring-3 ring-transparent outline-none cursor-pointer transition-all duration-300 hover:border-zinc-300 hover:ring-zinc-100 focus-visible:border-zinc-300 focus-visible:ring-zinc-100'
      )}
      href={link}
      target={link ? '_blank' : undefined}
    >
      <div className="flex items-center gap-2 mb-2">
        <h3 className="font-medium text-md">{name}</h3>
      </div>

      <p className="text-sm text-tertiary">{description}</p>
    </Component>
  )
}
