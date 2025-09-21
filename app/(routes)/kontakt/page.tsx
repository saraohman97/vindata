import Navbar from "@/components/navbar";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { PiMapPinSimpleFill } from "react-icons/pi";

const AboutPage = () => {
  return (
    <div className="relative bg-white">
      <Navbar dark />

      {/* HERO */}
      <div className="h-[800px] bg-black/70 w-full absolute" />
      <Image
        src="/vasteras.jpg"
        alt=""
        width={2000}
        height={2000}
        className="object-cover h-[800px]"
      />
      <div className="absolute top-36 left-0 right-0 flex flex-col items-center justify-center max-w-screen-lg mx-auto text-center">
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mb-10">
          Bakom kuliserna
        </h1>

        {/* ABOUT SECTION */}
        <div className="p-10 grid grid-cols-2 gap-10 max-w-screen-md mx-auto text-start bg-white rounded-xl">
          <div>
            <h3 className="text-red-900 text-2xl font-serif font-bold mb-4">
              Om mig
            </h3>
            <p>
              Välkommen till min webbsida om vin och mat. Jag söker ständigt
              kulinarisk insikt i traditionella- och nya upplevelser. <br /><br />
              Året 2025 börjar jag kockskola och kommer ständigt dokumentera min utveckling här. 
            </p>
            <div className="text-red-900 text-sm text-start flex flex-col items-start mt-6">
              <div className="flex gap-1 mb-1 items-center">
                <PiMapPinSimpleFill /> Västerås, Sverige
              </div>
              <div className="flex gap-1 mb-1 items-center">
                <IoIosSchool /> Tranellska skolan
              </div>
              <div className="flex gap-1 mb-1 items-center">
                <MdEmail /> saraohman97@gmail.com
              </div>
              <div className="flex gap-1 mb-1 items-center">
                <FaPhoneAlt /> 070 493 73 54
              </div>
            </div>
          </div>

          <Image
          src="/hero.jpg"
          alt=""
          width={2000}
          height={2000}
          className="object-cover max-h-80"
        />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
