import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  name: string
  description: string
  technologies: string[]
  image: string
  link?: string
}

export function ProjectCard({ name, description, technologies, image, link }: ProjectCardProps) {
  const CardWrapper = link ? Link : 'div'
  const cardProps = link ? { href: link, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <CardWrapper
      {...cardProps}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gray-300 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={image}
          alt={`${name} project screenshot`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {link && (
          <div className="absolute top-3 right-3 rounded-full bg-white/90 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-gray-900/90">
            <ArrowUpRight className="h-4 w-4 text-gray-900 dark:text-white" />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{name}</h3>

        <p className="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-300">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent transition-colors duration-300 group-hover:border-blue-500/50" />
    </CardWrapper>
  )
}
