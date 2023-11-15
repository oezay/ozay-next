import { getArtists } from '@/sanity/sanity-utils'
import ArtistLayout from '@/components/ArtistLayout'

export default async function Home() {
  const artists = await getArtists()

  return <ArtistLayout artists={artists} />
}

export const fetchCache = 'force-no-store'
