import { SectionHeader } from '@/components/SectionHeader'

export function HomeContact() {
  return (
    <section>
      <SectionHeader heading="Discutez avec moi" />

      <p className="relative mt-4 pl-5 text-xs text-tertiary">
        <span className="absolute left-0 top-1/2 size-3.5 -translate-y-1/2 rounded-full bg-green-500 border-4 border-green-100" />
        Disponible pour de nouveaux projets et de nouveaux défis, parlons-en !{' '}
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-2.5 h-6 bg-zinc-100 text-accent underline rounded-full outline-none font-medium text-xs transition-all hover:bg-zinc-200/75 focus:ring-3 focus:ring-zinc-200"
        >
          contactez-moi
        </a>
      </p>
    </section>
  )
}
