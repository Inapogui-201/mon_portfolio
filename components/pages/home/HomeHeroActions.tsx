'use client'

import { useHotkeys } from 'react-hotkeys-hook'
import { BaseButton } from '@/components/ui/BaseButton'
import { links } from '@/data/links'

export function HomeHeroActions() {
  useHotkeys('e', () => {
    const a = document.createElement('a')
    a.href = `mailto:${links.email}`
    a.style.display = 'none'

    document.body.appendChild(a)

    a.click()
    a.remove()
  })

  return (
    <div className="flex items-center gap-4">
      <BaseButton className="min-w-33" hotkey="A" variant="primary" asChild>
        <a href={`tel:${links.phone}`} target="_blank">
          joindre par appel
        </a>
      </BaseButton>

      <BaseButton hotkey="E" variant="secondary" asChild>
        <a href={`mailto:${links.email}`}>Envoyer un email</a>
      </BaseButton>
    </div>
  )
}
