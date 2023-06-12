import { getArtists, getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const artists = await getArtists();

  return (
    <div className="">
       <div>
          <div>
        {artists.map((artist) => {
          return (
            <div key={artist._id}>
              <Link href={`/projects/${artist.slug}`} className="">
                <div className="mt-2 font-extrabold text-2xl text-transparent text-black p-2 hover:bg-gradient-to-r from-violet-400 to-violet-600 transition hover:text-white transition">
                  {artist.name}
                </div>
              </Link>
              <div>
              {artist.image && (
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={1920}
                  height={1080}
                  className="object-cover rounded-lg border border-gray-500"/>
              )}
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
