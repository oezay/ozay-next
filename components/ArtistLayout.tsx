"use client";

import { useState } from "react";
import { Artist } from "../types/Artist";
import ArtistList from "./ArtistList";
import ArtistProfile from "./ArtistProfile";

export interface ArtistListProps {
  artists: Artist[];
}

export default function ArtistLayout(props: ArtistListProps) {
  const [selected, setHovered] = useState(null);

  const setHoveredItem = (key: Artist["_id"]) => {
    setHovered(props.artists.find((artist) => artist._id === key));
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
            className="h-full bg-cover flex flex-col"
            style={{
              backgroundImage: `url(https://picsum.photos/seed/cura2/650/650?grayscale&blur=2)`,
            }}
          />
        )}
      </main>
    </>
  );
}
