import Image from 'next/image'
import { SectionHeader } from '@/components/SectionHeader'
import { links } from '@/data/links'

const socialLinks = [
  {
    label: 'LinkedIn',
    image: '/linkedin.svg',
    href: links.social.linkedin,
    fill: 'fill-primary',
  },
  {
    label: 'Instagram',
    image: '/instagram-icon.svg',
    href: links.social.instagram,
    fill: 'fill-[#0a66c2]',
  },
  {
    label: 'Telegram',
    image: '/telegram.svg',
    href: links.social.telegram,
    fill: 'fill-[#0a66c2]',
  },
]

export function HomeSocials() {
  return (
    <section>
      <SectionHeader
        heading="Rejoignez-moi sur mes réseaux"
        text="Vous pouvez me trouver sur les plateformes sociales suivantes :"
      />

      <ul className="flex flex-wrap items-center gap-2.5">
        {socialLinks.map((link) => (
          <li className="group" key={link.label}>
            <a
              className="inline-flex items-center gap-2 px-2.5 h-6 bg-zinc-100 rounded-full outline-none font-medium text-xs text-secondary transition-all hover:bg-zinc-200/75 focus:ring-3 focus:ring-zinc-200"
              href={link.href}
              target="_blank"
            >
              <Image src={link.image} alt={link.label} width={14} height={18} />
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
