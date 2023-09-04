import { getPage } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import clsx from 'clsx'
import $ from './page.module.scss'

type Props = {
  params: { slug: string }
}

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug)
  const isAboutPage = page.slug === 'about'

  return (
    <div
      className={clsx($.page, {
        [$.about]: isAboutPage,
      })}
    >
      <div
        className={clsx({
          [$.aboutText]: isAboutPage,
        })}
      >
        <PortableText value={page.content} />
      </div>
    </div>
  )
}
