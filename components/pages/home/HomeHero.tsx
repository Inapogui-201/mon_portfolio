import Image from 'next/image'
import { LogoReact } from '@/components/logos/tech/LogoReact'
import { links } from '@/data/links'

export function HomeHero() {
  return (
    <section>
      <Image
        className="mb-4 size-11 rounded-full"
        src="/profile.jpg"
        alt="Michel Inapogui"
        width={44}
        height={44}
        draggable={false}
      />

      <h1 className="mb-4 font-sans font-semibold text-[1.375rem] leading-7 tracking-[0.02em]">
        Salut, je suis{' '}
        <span className="border-b-[0.09375rem] border-current text-accent">Michel Inapogui</span>!
      </h1>

      <div className="mb-5 text-md leading-[1.75] space-y-1.75">
        <p>
          <span className="sm:inline-block sm:mb-1.75">
            Développeur web full-stack passionné, spécialisé dans la création d&apos;applications
            web modernes, performantes et intuitives.{' '}
          </span>
          <br className="hidden sm:block" />
          Maitrise des technologies modernes et une approche innovante des projets en{' '}
          <span className="inline-block bg-[#58C4DC]/10 rounded-md px-1.75">
            <LogoReact className="inline-block mr-1.75 -mt-0.75 size-3.5" />
            React
          </span>{' '}
          ecosystem. Curieux et polyvalent, je m&apos;adapte à toute nouvelle technologie en
          fonction des besoins spécifiques du projet.
        </p>
      </div>

      <p className="relative mt-4 pl-5 text-xs text-tertiary">
        <span className="absolute left-0 top-1/2 size-3.5 -translate-y-1/2 rounded-full bg-green-500 border-4 border-green-100" />
        Disponible pour de nouveaux projets, parlons-en !{' '}
        <a href={`mailto:${links.email}`} className="underline text-accent">
          contact@inapogui.com
        </a>
      </p>
    </section>
  )
}
