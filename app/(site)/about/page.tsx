import { getPage } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import $ from './page.module.scss'
import { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export const metadata: Metadata = {
  title: 'About - CURA Berlin',
}

export default async function Page({ params }: Props) {
  const page = await getPage('about')

  return (
    <div className={$.aboutPage}>
      <div className={$.aboutText}>
        <PortableText value={page.content} />
      </div>
    </div>
  )
}

export const fetchCache = 'force-no-store'
export const dynamic = 'force-dynamic'
