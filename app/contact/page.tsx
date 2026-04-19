'use client'

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Github, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import { links } from '@/data/links'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Configuration EmailJS (remplacez avec vos vraies valeurs)
      const SERVICE_ID = 'service_bw773ci'
      const TEMPLATE_ID = 'template_341kvze'
      const PUBLIC_KEY = 'hjD9xGeyh_5G0298q'

      // Paramètres pour EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: links.email, // Votre email de destination
        date: new Date().toLocaleDateString('fr-FR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      }

      // Debug : afficher les variables envoyées
      console.log('Variables envoyées à EmailJS:', templateParams)

      // Envoi avec EmailJS
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)

      if (response.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error("Erreur lors de l'envoi")
      }
    } catch (error) {
      console.error('Erreur:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <div className="mx-auto pt-6 pb-12 max-w-160 space-y-12 sm:py-10">
      {/* Header */}
      <section>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Contactez-moi</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Vous avez un projet en tête ou souhaitez simplement discuter ? Je suis toujours ouvert aux
          nouvelles opportunités et collaborations. N'hésitez pas à me contacter !
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulaire de contact */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Envoyez un message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="Sujet de votre message"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-700 font-medium">✅ Message envoyé avec succès !</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 font-medium">
                  ❌ Erreur lors de l'envoi. Veuillez réessayer.
                </p>
              </div>
            )}
          </form>
        </section>

        {/* Informations de contact */}
        <section className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Informations directes</h2>

            <div className="space-y-4">
              <a
                href={`mailto:${links.email}`}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                    Email
                  </p>
                  <p className="text-sm text-gray-600">{links.email}</p>
                </div>
              </a>

              <a
                href={`tel:${links.phone}`}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
              >
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                    Téléphone
                  </p>
                  <p className="text-sm text-gray-600">{links.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Localisation</p>
                  <p className="text-sm text-gray-600">Disponible pour missions en remote</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Réseaux sociaux</h2>

            <div className="flex gap-4">
              <a
                href={links.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors group"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>

              <a
                href={links.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </a>
            </div>
          </div>

          <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Disponibilité</h3>
            <p className="text-gray-700">
              Je suis actuellement disponible pour de nouveaux projets et collaborations. N'hésitez
              pas à me contacter pour discuter de vos besoins !
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
