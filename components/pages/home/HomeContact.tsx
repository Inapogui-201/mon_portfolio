import { SectionHeader } from '@/components/SectionHeader'
import { links } from '@/data/links'

export function HomeContact() {
  return (
    <section>
      <SectionHeader heading="Discutez avec moi" />

      <p className="mb-1.5">
        Vous pouvez me joindre <span className="hidden xs:inline">toujours</span> par email:{' '}
        <a
          className="group inline-flex items-center gap-1 font-medium text-primary"
          href={`mailto:${links.email}`}
        >
          <span className="relative inline-block after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-accent after:transition-all after:duration-300 group-hover:after:h-0.5">
            contact@inapogui.com
          </span>
        </a>
      </p>
    </section>
  )
}
