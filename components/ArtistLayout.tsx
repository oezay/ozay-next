"use client";

import { useState } from "react";
import { Artist } from "../types/Artist";
import ArtistList from "./ArtistList";
import ArtistProfile from "./ArtistProfile";

export interface ArtistListProps {
  artists: Artist[];
  selectedArtist?: Artist;
}

export default function ArtistLayout(props: ArtistListProps) {
  const { artists, selectedArtist } = props;

  const [selected, setHovered] = useState<Artist | null>(null);

  const setHoveredItem = (key: Artist["_id"]) => {
    const artist = artists.find((artist) => artist._id === key);
    if (artist) setHovered(artist);
  };

  const setDefaultContent = () => {
    setHovered(null);
  };

  const isHoveringSelectedArtist =
    selected && selectedArtist?._id === selected._id;

  return (
    <>
      <ArtistList
        content={artists}
        onHover={(name) => setHoveredItem(name)}
        onMouseLeave={setDefaultContent}
        defaultSelected={selectedArtist}
      />
      <main className="h-full">
        {selected && !isHoveringSelectedArtist ? (
          <ArtistProfile artist={selected} />
        ) : selectedArtist ? (
          <ArtistProfile artist={selectedArtist} full />
        ) : (
          <section
            className="h-full bg-cover bg-center flex flex-col"
            style={{
              backgroundImage: `url(https://picsum.photos/seed/cura2/650/650?grayscale&blur=2)`,
            }}
          />
        )}
      </main>
    </>
  );
}
