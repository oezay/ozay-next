import { getPage } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import $ from './page.module.scss'

type Props = {
  params: { slug: string }
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
