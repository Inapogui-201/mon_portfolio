import Image from 'next/image'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'icon/png'

export default function Icon() {
  return (
    <Image
      src="/icon.png"
      alt="Icon"
      width={size.width}
      height={size.height}
      priority
      sizes="(min-width: 1024px) 1024px, (min-width: 768px) 768px, 100vw"
      className="object-contain"
    />
  )
}
