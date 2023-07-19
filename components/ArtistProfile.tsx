import { PortableText } from "@portabletext/react";
import { Artist } from "../types/Artist";

export interface ArtistProfileProps {
  artist: Artist;
  full?: boolean;
}

export default function ArtistProfile(props: ArtistProfileProps) {
  return (
    <section
      className="h-full bg-cover flex flex-col"
      style={{ backgroundImage: `url("${props.artist.image}")` }}
    >
      <h1 className="text-white mt-auto text-4xl m-2">{props.artist.name}</h1>
      {props.full && (
        <div className="h-2/4 p-2 text-white bg-gray-800">
          <PortableText value={props.artist.bio} />
        </div>
      )}
    </section>
  );
}
