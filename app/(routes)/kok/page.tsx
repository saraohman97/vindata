"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { posts } from "@/data";

export default function Home() {
  const [cards, setCards] = useState(posts);
  const [currentCard, setCurrentCard] = useState("All");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBtns = (e: any) => {
    const word = e.target.value;
    setCurrentCard(word);
  };

  useEffect(() => {
    if (currentCard === "All") {
      setCards(posts);
    } else {
      const filtered = posts.filter((card) => {
        return (
          card.category === currentCard || card.category.includes(currentCard)
        );
      });
      setCards(filtered);
    }
  }, [currentCard]);

  return (
    <main>
      <Navbar dark />

      {/* HERO */}
      <Image
        src="/hero-2.jpg"
        alt=""
        width={2000}
        height={2000}
        className="object-cover h-[800px] max-sm:max-h-screen"
      />
      <h1 className="absolute h-screen inset-0 text-white flex items-center justify-center max-w-screen-lg mx-auto text-center max-sm:p-3 max-sm:pb-20 pb-20 md:text-8xl max-md:text-5xl font-serif font-bold">
        Rätter för alla tillfällen
      </h1>

      <div className="bg-white text-black">
        <div className="max-w-screen-xl mx-auto py-10 px-4">
          {/* HEADER */}
          <div className="md:mb-8 font-bold font-serif text-center">
            <h1 className="text-4xl md:text-5xl">Kök & recept</h1>
            <div>Dokumenterade rätter och hur de smakar</div>
          </div>

          {/* POSTLIST AND SIDEBAR */}
          <div className="flex max-md:flex-col-reverse gap-10 items-start">
            <section className="flex flex-wrap gap-10 w-full">
              {cards.length ? (
                <>
                  {cards.map((card) => (
                    <div
                      key={card.id}
                      className="bg-gray-50 rounded-xl text-black md:w-[420px]"
                    >
                      <Image
                        src={`/${card.image}`}
                        alt=""
                        width={500}
                        height={500}
                        className={`object-cover rounded-t-xl pt-4 hover:p-0 transition-all duration-300 max-h-96`}
                      />
                      <h3 className="p-4 pb-0 font-bold font-serif">
                        {card.heading}
                      </h3>
                      <p className="text-sm p-4 pt-2">{card.text}</p>

                      {card.recipe.ingredients[1] === "" ? (
                        ""
                      ) : (
                        <div className="p-4 flex gap-10 text-sm">
                          <div className="w-min">
                            {card.recipe.ingredients
                              .toString()
                              .replaceAll(",", " ")}
                          </div>

                          <div className="flex flex-col gap-2 w-full">
                            <div>
                              1.
                              {card.recipe.instructions[1]}
                            </div>

                            <div>
                              2.
                              {card.recipe.instructions[2]}
                            </div>

                            <div>
                              3.
                              {card.recipe.instructions[3]}
                            </div>
                          </div>
                          {/* {card.recipe.ingredients[1].toString()} */}
                          {/* {card.recipe.ingredients.toString().split("")} */}
                          {/* {cards.map(c => (c.recipe.ingredients))} */}
                        </div>
                      )}
                    </div>
                  ))}
                </>
              ) : (
                "Inga inlägg"
              )}
            </section>

            <section className="p-4 md:w-1/3 rounded-xl h-fit">
              <h3 className="mb-2 font-serif font-bold max-md:hidden">Sök</h3>
              <input
                type="text"
                placeholder="Namn / datum"
                className="h-10 w-full font-serif bg-transparent px-4 border rounded-full outline-none hover:bg-gray-50 mb-4 max-md:hidden"
              />

              <div className="flex flex-wrap gap-2">
                <h2 className="text-sm font-bold w-full underline underline-offset-2 font-serif text-red-900">
                  Kategorier
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
                  value="Kockskola"
                  className={`h-10 px-4 border rounded-3xl hover:bg-gray-50 hover:text-red-900 hover:border-red-900 text-sm font-bold ${
                    currentCard === "Kockskola"
                      ? "bg-black/20"
                      : "bg-transparent"
                  }`}
                >
                  Kockskola
                </button>

                <button
                  onClick={handleBtns}
                  type="button"
                  value="Fester"
                  className={`h-10 px-4 border rounded-3xl hover:bg-gray-50 hover:text-red-900 hover:border-red-900 text-sm font-bold ${
                    currentCard === "Fester" ? "bg-black/20" : "bg-transparent"
                  }`}
                >
                  Fester
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
