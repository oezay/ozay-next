'use client'

import Link from 'next/link'
import { Artist } from '@/types/Artist'
import $ from './ArtistList.module.scss'
import clsx from 'clsx'
import { useIsMobile } from '../hooks/mobile'
import ArtistProfile from './ArtistProfile'

export interface ArtistListProps {
  onMouseLeave: () => void
  onHover: (key: string) => void
  content: Artist[]
  defaultSelected?: Artist
  selectedArtist?: Artist
}

export default function ArtistList(props: ArtistListProps) {
  const { content, selectedArtist, defaultSelected, onMouseLeave, onHover } = props

  const isMobile = useIsMobile()
  const artistCount = content.length

  return (
    <nav className={$.nav} onMouseLeave={onMouseLeave}>
      <ul className={$.list} style={{ '--artist-count': artistCount }}>
        {content.map((artist) => {
          const { _id: id } = artist
          const isSelectedArtist = selectedArtist?._id === id
          const isArtistShown = isMobile && !!selectedArtist && selectedArtist._id === id

          return (
            <li
              key={id}
              tabIndex={0}
              onMouseEnter={() => onHover(id)}
              onFocus={() => onHover(id)}
              className={clsx($.listItem, {
                // [$.listItemActive]: isSelectedArtist,
              })}
            >
              <div
                className={clsx($.linkContainer, {
                  [$.linkContainerActive]: isSelectedArtist,
                })}
              >
                <Link href={`/artists/${artist.slug}`} className={$.listItemLink}>
                  {artist.name}
                </Link>
              </div>

              {isArtistShown && (
                <div className={$.artistProfile}>
                  <ArtistProfile artist={selectedArtist} full />
                </div>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
