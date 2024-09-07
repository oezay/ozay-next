import { notFound } from 'next/navigation'
import { getPage } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import $ from './page.module.scss'

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug)

  if (!page) {
    notFound()
  }

  return (
    <div className={$.genericPage}>
      <div className={$.genericText}>
        <PortableText value={page.content} />
      </div>
    </div>
  )
}

export const fetchCache = 'force-no-store'
export const dynamic = 'force-dynamic'
