import { wines } from "@/data";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="font-extrabold text-4xl">Vin & Mat</h1>
      <h2 className="font-bold text-xl mb-10">Vinlista</h2>

      <div className="flex flex-wrap gap-20">
        {/* WINES */}
        {wines.map((wine) => (
          <div key={wine.id} className="flex flex-col text-center justify-center items-center">
            <Image
              src={`/${wine.id}.webp`}
              alt=""
              width={500}
              height={500}
              className="h-96 w-auto object-contain mb-4"
            />
            <h2 className="font-bold">{wine.brand}</h2>
            <h2 className="mb-2">{wine.label}</h2>
            {wine.review === 1 && <FaStar />}
            {wine.review === 2 && (
              <div className="flex gap-1">
                <FaStar />
                <FaStar />
              </div>
            )}
            {wine.review === 3 && (
              <div className="flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            )}
            {wine.review === 4 && (
              <div className="flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            )}
            {wine.review === 5 && (
              <div className="flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
