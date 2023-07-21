import { getArtist, getArtists } from "@/sanity/sanity-utils";
import ArtistLayout from "@/components/ArtistLayout";

type Props = {
  params: { artist: string };
};

export default async function ArtistPage({ params }: Props) {
  const slug = params.artist;
  const [artist, artists] = await Promise.all([getArtist(slug), getArtists()]);

  return <ArtistLayout artists={artists} selectedArtist={artist} />;
}
