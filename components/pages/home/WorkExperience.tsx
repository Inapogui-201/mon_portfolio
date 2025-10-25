import { Briefcase, Calendar, MapPin } from 'lucide-react'

const WorkExperience = () => {
  const experiences = [
    {
      title: 'Stage en Maintenance Informatique',
      company: 'Agence PRESMOGUI-SALL',
      location: 'Guinée',
      period: '2022',
      responsibilities: [
        'Diagnostic et réparation de matériels informatiques.',
        'Entretien préventif et curatif des équipements.',
        'Assistance technique aux utilisateurs.',
        'Gestion des incidents et résolution de problèmes techniques.',
        'Documentation des interventions et suivi des équipements.',
      ],
    },
    {
      title: 'Chef de Projet Technique',
      company: 'Projet Professionnel',
      location: 'Maroc',
      period: '2024',
      responsibilities: [
        "Direction d'une équipe de 5 développeurs pour une application web de réservation pour les étudiants étrangers (Etando.ma).",
        "Responsable de l'architecture front-end avec React.js.",
        "Coordination et gestion de l'équipe de développement.",
        'Supervision de la qualité du code et des bonnes pratiques.',
        'Planification et suivi des sprints de développement.',
      ],
    },
    {
      title: 'Développeur Freelance',
      company: 'Freelance',
      location: 'Maroc',
      period: '2024 - Présent',
      responsibilities: [
        "Conception d'applications web modernes pour différents clients.",
        'Utilisation de React, Node.js, MongoDB, Express.js et TailwindCSS.',
        'Développement de solutions personnalisées selon les besoins des clients.',
        'Gestion complète des projets de la conception à la livraison.',
      ],
    },
  ]

  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-400 mb-4">
            Expériences Professionnelles
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Voici un aperçu de mon parcours professionnel et des projets sur lesquels j&apos;ai Si
            vous souhaitez plus de détails, vous pouvez{' '}
            <a
              href="/cv.pdf" // Remplacez par le chemin de votre fichier CV
              download
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group"
            >
              <span className="relative">
                télécharger mon CV
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
            .
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent to-transparent hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-0 md:pl-8">
                {/* Dot */}
                <div className="absolute left-0 top-2 w-2 h-2 bg-primary rounded-full -translate-x-[3px] hidden md:block" />

                {/* Card */}
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4 text-primary" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-700 text-sm">
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
