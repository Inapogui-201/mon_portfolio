import React from 'react'
import { HomeTechStack } from '@/components/pages/home/HomeTechStack'
import Experience from '@/components/pages/home/WorkExperience'

const page = () => {
  return (
    <div className="mx-auto pt-6 pb-12 max-w-160 space-y-12 sm:py-10">
      <section>
        <div className="mb-8 text-lg leading-relaxed space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">À propos de moi</h1>

          <p className="text-gray-700">
            Développeur web full-stack avec une expertise approfondie dans la conception et la
            réalisation d&apos;applications web modernes, performantes et évolutives. Passionné par
            les technologies émergentes et les meilleures pratiques de développement.
          </p>

          <p className="text-gray-700">
            Mon approche combine rigueur technique et créativité pour transformer des concepts
            complexes en solutions digitales intuitives. Je m&apos;engage à livrer du code de haute
            qualité, maintenable et optimisé pour les performances.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Ce que vous trouverez ici</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">+</span>
                <span>Mon stack technique complet et les technologies que je maîtrise</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">+</span>
                <span>Mon parcours professionnel et mes réalisations significatives</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-500 mr-2">+</span>
                <span>Les compétences et expériences qui font ma valeur ajoutée</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <HomeTechStack />
      <Experience />
    </div>
  )
}

export default page
