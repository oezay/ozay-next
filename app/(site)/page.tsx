import { getArtist, getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const artists = await getArtist();

  return (
    <div className="flex">
       <div>
          <div className="w-1/2">
        {artists.map((artist) => {
          return (
            <div key={artist._id}>
              <Link href={`/projects/${artist.slug}`} className="">
                <div className="mt-2 font-extrabold text-2xl text-black p-2 hover:bg-gradient-to-r from-violet-400 to-violet-600 transition hover:text-white transition">
                  {artist.name}
                </div>
              </Link>
            </div>
          );
        })}
        </div>
        <div className="w-1/2">
        {/* Replace with your placeholder image */}
        <img src="/placeholder.jpg" alt="Placeholder" />
      </div>
      </div>
    </div>
  );
}
