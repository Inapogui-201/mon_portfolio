import { LogoExpress } from '@/components/logos/tech/LogoExpress'
import { LogoGithub } from '@/components/logos/tech/LogoGithub'
import { LogoMongodb } from '@/components/logos/tech/LogoMongodb'
import { LogoNextjs } from '@/components/logos/tech/LogoNextjs'
import { LogoNode } from '@/components/logos/tech/LogoNode'
import { LogoPostgres } from '@/components/logos/tech/LogoPostgres'
import { LogoPostman } from '@/components/logos/tech/LogoPostman'
import { LogoPrisma } from '@/components/logos/tech/LogoPrisma'
import { LogoReact } from '@/components/logos/tech/LogoReact'
import { LogoShadcnUi } from '@/components/logos/tech/LogoShadcnUi'
import { LogoTailwind } from '@/components/logos/tech/LogoTailwind'
import { LogoTypescript } from '@/components/logos/tech/LogoTypescript'
import { SectionHeader } from '@/components/SectionHeader'

const techStack = [
  {
    label: 'React',
    icon: LogoReact,
  },
  {
    label: 'Next.js',
    icon: LogoNextjs,
  },
  {
    label: 'TypeScript',
    icon: LogoTypescript,
  },
  {
    label: 'Node.js',
    icon: LogoNode,
  },
  {
    label: 'Postgres',
    icon: LogoPostgres,
  },
  {
    label: 'Prisma',
    icon: LogoPrisma,
  },
  {
    label: 'shadcn/ui',
    icon: LogoShadcnUi,
  },
  {
    label: 'Tailwind',
    icon: LogoTailwind,
  },
  {
    label: 'MongoDB',
    icon: LogoMongodb,
  },
  {
    label: 'Express',
    icon: LogoExpress,
  },
  {
    label: 'Postman',
    icon: LogoPostman,
  },
  {
    label: 'Github',
    icon: LogoGithub,
  },
]

export function HomeTechStack() {
  return (
    <section>
      <SectionHeader
        heading="Stacks et outils"
        text="Les stacks et outils que j'utilise pour mon travail personnel et pour mes clients :"
      />

      <ul className="flex flex-wrap items-center gap-2.5">
        {techStack.map((item) => (
          <li
            className="inline-flex items-center gap-2 px-2.5 h-6 bg-zinc-100 rounded-full outline-none font-[450] text-xs text-secondary"
            key={item.label}
          >
            <item.icon className="shrink-0 size-3.5" />
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  )
}
