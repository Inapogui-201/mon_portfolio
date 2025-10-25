import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeader } from '@/components/SectionHeader'
import { links } from '@/data/links'

interface Project {
  name: string
  description: string
  link?: string
}

const projects: Array<Project> = [
  {
    name: 'Etando',
    description: 'Application de reservation de logement pour étudiant au Maroc.',
    link: links.projects.etando,
  },
  {
    name: 'Troveur',
    description: 'Plateforme de mise en relation des voyageurs et des acheteurs.',
    link: links.projects.troveur,
  },
  {
    name: 'Mr code',
    description: 'Agence informatique et Marketing digital, créer des solutions web sur mesure.',
    link: links.projects.mrCode,
  },
  {
    name: 'Lamergo Group',
    description:
      'Site d’une boite dans le domaine informatique, formation professionnelle et accompagnement.',
    link: links.projects.lamergogroup,
  },
]

export function HomeProjects() {
  return (
    <section className="@container/projects">
      <SectionHeader heading="Projects" text="Voici quelques projets que j'ai réalisés" />

      <ul className="grid gap-3 @lg/projects:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  )
}
