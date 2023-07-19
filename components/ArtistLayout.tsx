"use client";

import { useState } from "react";
import { Artist } from "../types/Artist";
import ArtistList from "./ArtistList";
import ArtistProfile from "./ArtistProfile";

export interface ArtistListProps {
  artists: Artist[];
}

export default function ArtistLayout(props: ArtistListProps) {
  const [selected, setHovered] = useState<Artist | null>(null);

  const setHoveredItem = (key: Artist["_id"]) => {
    const artist = props.artists.find((artist) => artist._id === key);
    if (artist) setHovered(artist);
  };

  const setDefaultContent = () => {
    setHovered(null);
  };

  return (
    <>
      <ArtistList
        content={props.artists}
        onHover={(name) => setHoveredItem(name)}
        onMouseLeave={setDefaultContent}
      />
      <main className="h-full">
        {selected ? (
          <ArtistProfile artist={selected} />
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
