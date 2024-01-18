import { getPage } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import $ from './page.module.scss'

export default async function Page() {
  const page = await getPage('impressum')

  return (
    <div className={$.page}>
      <div className={$.textPane}>
        <div className={$.text}>Impressum</div>
      </div>
      <article className={$.messagePane}>
        <div className={$.impressumContent}>
          <PortableText value={page.content} />
        </div>
      </article>
    </div>
  )
}

export const fetchCache = 'force-no-store'
export const dynamic = 'force-dynamic'
