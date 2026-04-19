import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const iconPath = path.join(process.cwd(), 'public', 'icon.png')
    const iconBuffer = fs.readFileSync(iconPath)

    return new NextResponse(iconBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    return new NextResponse('Icon not found', { status: 404 })
  }
}
