"use client";

import { useEffect, useState } from "react";
import { wines } from "@/data";
import Image from "next/image";
import StarsRating from "./stars";

const FilteredData = () => {
  const [cards, setCards] = useState(wines);
  const [currentCard, setCurrentCard] = useState("All");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBtns = (e: any) => {
    const word = e.target.value;
    setCurrentCard(word);
  };

  useEffect(() => {
    if (currentCard === "All") {
      setCards(wines);
    } else {
      const filtered = wines.filter((card) => {
        return (
          card.country === currentCard || card.country.includes(currentCard)
        );
      });
      setCards(filtered);
    }
  }, [currentCard]);

  return (
    <div className="flex max-md:flex-col-reverse gap-10 items-start">
      <section className="flex flex-wrap gap-10 w-full">
        {cards.length ? (
          <>
            {cards.map((card) => (
              <div
                key={card.id}
                className="bg-gray-50 rounded-xl text-black md:w-48 text-center"
              >
                <Image
                  src={`/${card.id}.webp`}
                  alt=""
                  width={500}
                  height={500}
                  className={`h-72 object-contain rounded-t-xl pt-4 hover:p-0 transition-all duration-300`}
                />
                <h3 className="p-4 pb-0 font-bold">{card.brand}</h3>
                <StarsRating item={card} />
              </div>
            ))}
          </>
        ) : (
          "Inga inlägg"
        )}
      </section>

      <section className="p-4 md:w-1/3 rounded-xl h-fit">
        <h3 className="mb-2 font-serif font-bold">Sök</h3>
        <input
          type="text"
          placeholder="Namn / datum"
          className="h-10 w-full font-serif bg-transparent px-4 border rounded-full outline-none hover:bg-gray-50 mb-4"
        />

        <div className="flex flex-wrap gap-2 max-md:hidden">
          <h2 className="text-sm font-bold w-full underline underline-offset-2 font-serif text-red-900">
            Länder
          </h2>
          <button
            onClick={handleBtns}
            type="button"
            value="All"
            className={`h-10 px-4 border rounded-3xl hover:bg-gray-50 hover:text-red-900 hover:border-red-900 text-sm font-bold ${
              currentCard === "All" ? "bg-black/20" : "bg-transparent"
            }`}
          >
            Alla
          </button>

          <button
            onClick={handleBtns}
            type="button"
            value="Frankrike"
            className={`h-10 px-4 border rounded-3xl hover:bg-gray-50 hover:text-red-900 hover:border-red-900 text-sm font-bold ${
              currentCard === "Frankrike" ? "bg-black/20" : "bg-transparent"
            }`}
          >
            Frankrike
          </button>
          <button
            onClick={handleBtns}
            type="button"
            value="Sverige"
            className={`h-10 px-4 border rounded-3xl hover:bg-gray-50 hover:text-red-900 hover:border-red-900 text-sm font-bold ${
              currentCard === "Sverige" ? "bg-black/20" : "bg-transparent"
            }`}
          >
            Sverige
          </button>
        </div>
      </section>
    </div>
  );
};

export default FilteredData;
