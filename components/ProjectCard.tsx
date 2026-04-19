import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/utils/css'

interface ProjectCardProps {
  name: string
  description: string
  link: string
  image: string
  technologies: string[]
}

export function ProjectCard({ name, description, link, image, technologies }: ProjectCardProps) {
  const Component = link ? 'a' : 'div'

  return (
    <Component
      className={cn(
        'block bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group',
        link && 'cursor-pointer hover:scale-[1.02] hover:border-orange-200'
      )}
      href={link}
      target={link ? '_blank' : undefined}
      rel={link ? 'noopener noreferrer' : undefined}
    >
      {/* Image du projet */}
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`Capture d'écran du projet ${name}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-gray-400 text-center">
              <div className="w-16 h-16 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
                <ExternalLink className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-sm">Aperçu non disponible</p>
            </div>
          </div>
        )}

        {/* Overlay au survol */}
        {link && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white rounded-full p-2 transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <ExternalLink className="w-5 h-5 text-gray-700" />
            </div>
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition-colors">
            {name}
          </h3>
          {link && <ExternalLink className="w-4 h-4 text-gray-400 flex-shrink-0 ml-2" />}
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-md border border-orange-100"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Component>
  )
}
