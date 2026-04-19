import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeader } from '@/components/SectionHeader'
import { links } from '@/data/links'

interface Project {
  name: string
  description: string
  link?: string
  image?: string
  technologies?: string[]
}

const projects: Array<Project> = [
  {
    name: 'Etando',
    description: 'Application de reservation de logement pour étudiant au Maroc.',
    link: links.projects.etando,
    image: '/etando.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    name: 'Troveur',
    description: 'Plateforme de mise en relation des voyageurs et des acheteurs.',
    link: links.projects.troveur,
    image: '/troveur.png',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    name: 'Bel Abidjan',
    description:
      "Un site internet qui offre des expériences de découvertes uniques et personnalisées en Côte d'Ivoire entre authenticité et découvertes inoubliables.",
    link: links.projects.belabidjan,
    image: '/bel.png',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
]

export function HomeProjects() {
  return (
    <section className="@container/projects">
      {/* Header descriptif */}
      <div className="mb-8">
        <SectionHeader heading="Projets" text="Découvrez mes réalisations" />

        <div className="mt-6 p-6 bg-gray-50 rounded-lg border-l-4 border-orange-500">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Mon approche de développement
          </h2>
          <p className="text-gray-700 mb-4">
            Chaque projet que je réalise est une opportunité d&apos;innover et de repousser les
            limites techniques. Je m&apos;engage à créer des solutions web modernes, performantes et
            adaptées aux besoins spécifiques de chaque client.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-3">
              <div className="text-2xl font-bold text-orange-500 mb-1">4+</div>
              <div className="text-sm text-gray-600">Projets livrés</div>
            </div>
            <div className="text-center p-3">
              <div className="text-2xl font-bold text-orange-500 mb-1">100%</div>
              <div className="text-sm text-gray-600">Satisfaction client</div>
            </div>
            <div className="text-center p-3">
              <div className="text-2xl font-bold text-orange-500 mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support technique</div>
            </div>
          </div>
        </div>
      </div>

      {/* Grille de projets */}
      <ul className="grid gap-6 @lg/projects:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  )
}
