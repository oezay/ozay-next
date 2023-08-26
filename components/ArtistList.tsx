'use client'

import Link from 'next/link'
import { Artist } from '@/types/Artist'
import $ from './ArtistList.module.scss'
import clsx from 'clsx'

export interface ArtistListProps {
  defaultSelected?: Artist
  onMouseLeave: () => void
  onHover: (key: string) => void
  content: Artist[]
}

export default function ArtistList(props: ArtistListProps) {
  const { content, defaultSelected, onMouseLeave, onHover } = props

  return (
    <nav className={$.nav} onMouseLeave={onMouseLeave}>
      <ul className={$.list}>
        {content.map((artist) => {
          const { _id: id } = artist

          return (
            <li
              key={id}
              tabIndex={0}
              onMouseEnter={() => onHover(id)}
              onFocus={() => onHover(id)}
              className={clsx($.listItem, {
                [$.listItemActive]: defaultSelected?._id === id,
              })}
            >
              <Link href={`/artists/${artist.slug}`} className={$.listItemLink}>
                {artist.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
