import FilteredData from "@/components/filteredData";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar dark />

      {/* HERO */}
      <Image
        src="/hero.jpg"
        alt=""
        width={2000}
        height={2000}
        className="object-cover h-[800px] max-sm:max-h-screen"
      />
      <h1 className="absolute h-screen inset-0 text-white flex items-center justify-center md:pb-20 max-w-screen-lg mx-auto text-center max-sm:p-3 text-4xl sm:text-6xl md:text-8xl font-serif font-bold">
        Rött vin för alla tillfällen
      </h1>

      <div className="bg-white text-black">
        <div className="max-w-screen-xl mx-auto py-10 px-4">
          {/* HEADER */}
          <div className="md:mb-8 font-bold font-serif text-center">
            <h1 className="text-4xl md:text-5xl">Vinkällaren</h1>
            <div>Dokumenterade röda viner och hur de smakar</div>
          </div>

          {/* WINELIST AND SIDEBAR */}
          <FilteredData />
        </div>
      </div>
    </main>
  );
}
