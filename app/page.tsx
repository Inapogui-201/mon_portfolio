import { HomeContact } from '@/components/pages/home/HomeContact'
import { HomeHero } from '@/components/pages/home/HomeHero'
import { HomeProjects } from '@/components/pages/home/HomeProjects'
import { HomeSocials } from '@/components/pages/home/HomeSocials'
import { HomeTechStack } from '@/components/pages/home/HomeTechStack'
import Experience from '@/components/pages/home/WorkExperience'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Michel Inapogui - Portfolio',
  description: `Portfolio professionnel de Michel Inapogui, développeur passionné`,
  alternates: {
    canonical: '/',
  },
}

export default function Page() {
  return (
    <div className="mx-auto pt-6 pb-12 max-w-160 space-y-12 sm:py-10">
      <HomeHero />
      <HomeTechStack />
      <Experience />
      <HomeProjects />
      <HomeSocials />
      <HomeContact />
    </div>
  )
}
