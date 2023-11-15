import { PortableText } from '@portabletext/react'
import { Artist } from '@/types/Artist'
import imageUrlBuilder from '@sanity/image-url'
import $ from './ArtistProfile.module.scss'
import { client as sanityClient } from '@/sanity/sanity-utils'

export interface ArtistProfileProps {
  artist: Artist
  full?: boolean
}

const builder = imageUrlBuilder(sanityClient)

export default function ArtistProfile(props: ArtistProfileProps) {
  const baseImage = builder.image(props.artist.image).auto('format')
  const srcSet = `${baseImage.width(320).url()} 320w, ${baseImage
    .width(640)
    .url()} 640w, ${baseImage.width(960).url()} 960w, ${baseImage
    .width(1280)
    .url()} 1280w, ${baseImage.width(1920).url()} 1920w`

  return (
    <section className={$.container}>
      <div className={$.contentContainer}>
        <div className={$.titleContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className={$.image}
            src={baseImage.width(960).url()}
            srcSet={srcSet}
            alt={`${props.artist.name} cover photo`}
          />
          <h1 className={$.title}>{props.artist.name}</h1>
        </div>
        {props.full && (
          <div className={$.bio}>
            <PortableText value={props.artist.bio} />

            <ul className={$.socialLinks}>
              {(props.artist.socials || []).map((social, i) => {
                let platform = social.platform

                if (
                  ![
                    'beatport',
                    'hor',
                    'instagram',
                    'ra',
                    'soundcloud',
                    'spotify',
                    'youtube',
                  ].includes(platform)
                ) {
                  platform = 'web'
                }

                return (
                  <li key={`${social.platform}_${i}`} className={$.socialItem}>
                    <a
                      className={$.socialLink}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      title={platform}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className={$.socialIcon}
                        src={`/social/${platform}.svg`}
                        alt={`link to ${social.platform}`}
                        width="48"
                        height="48"
                      />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
