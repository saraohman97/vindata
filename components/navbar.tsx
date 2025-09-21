"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlinePersonAddAlt } from "react-icons/md";

interface NavbarProps {
  dark?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ dark }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if(currentScrollY < 700) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }
    window.addEventListener("scroll", controlNavbar)
  }, [])

  return (
    <div
      className={`fixed top-0 z-40 bg-transparent h-screen w-screen ${
        dark ? "text-white" : "text-black"
      } 
      ${isVisible && dark ? "hidden" : ""}
      `}
    >
      <div className="h-14 flex max-md:flex-col max-md:items-start items-center justify-between max-w-screen-2xl mx-auto p-4 font-serif">
        <div className="flex gap-4 max-md:flex-col max-md:items-start items-center">
          <Link href={"/"} className="text-3xl mr-10">
            Vin & Mat
          </Link>
        </div>

        <Link
          href={"/kontakt"}
          className={`border ${
            dark ? "" : "border-black/30"
          } h-fit bg-transparent max-md:hidden px-8 py-1 flex items-center gap-2 rounded-3xl hover:bg-black/10 cursor-pointer`}
        >
          <MdOutlinePersonAddAlt /> Kontakta mig
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
