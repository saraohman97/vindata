"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { posts } from "@/data";

export default function Home() {
  const [cards, setCards] = useState(posts);
  const [currentCard, setCurrentCard] = useState("Alla");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBtns = (e: any) => {
    const word = e.target.value;
    setCurrentCard(word);
  };

  useEffect(() => {
    if (currentCard === "Alla") {
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
            <div className="w-full">
              <div className="font-bold text-sm mb-2">
                Visar: {currentCard === "Alla" ? "Alla kategorier" : currentCard}
              </div>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* POST */}
                {cards.length
                  ? cards.map((card) => (
                      <div
                        key={card.id}
                        className="rounded-xl text-black text-center"
                      >
                        {/* IMAGE */}
                        <Image
                          src={`/${card.image}`}
                          alt=""
                          width={500}
                          height={500}
                          className="max-h-[550px] w-full object-cover rounded-sm"
                        />

                        <div className="py-4 flex flex-col w-full items-center">
                          {/* TEXT */}
                          <h1 className="font-bold font-serif text-2xl">
                            {card.title}
                          </h1>
                          <p className="text-red-900 text-sm">
                            {card.createdAt} | {card.category}
                          </p>
                          <p className="pb-2 font-sans">{card.text}</p>
                          <div className="font-bold underline underline-offset-2 cursor-pointer w-fit text-sm">
                            Se recept
                          </div>

                          {/* RECIPE */}
                          {/* {card.recipe.ingredients[1] === "" ? (
                          ""
                        ) : (
                          <>
                            {card.recipe! && open ? (
                              <>
                                <h3 className="font-bold font-serif">
                                  {card.recipe.heading}
                                </h3>

                                <div className="flex gap-10 text-sm">
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
                                </div>
                              </>
                            ) : (
                              <button
                                className="font-bold"
                                onClick={() => setOpen(true)}
                              >
                                Se recept
                              </button>
                            )}
                          </>
                        )} */}
                        </div>
                      </div>
                    ))
                  : "Inga inlägg"}
              </section>
            </div>

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
                  value="Alla"
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
