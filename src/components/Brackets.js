import BlueHelmet from "../assets/blue-helmet.png";
import BlackHelmet from "../assets/black-helmet.png";
import NextButton from "./NextButton";
import React, { useState, useEffect } from "react";

const Stats = ({ stats, userTeam, currentBrackets }) => {
  const [showModal, setModal] = useState(true);
  useEffect(() => {
    setModal(true);
  }, [currentBrackets]);

  const closeModal = () => {
    setModal(false);
  };

  return (
    <section
      className={`bg-gray-100 absolute mt-20 z-10 w-10/12 mx-8 md:mx-16 lg:mx-20 xl:mx-60 2xl:mx-96 xl:w-8/12 2xl:w-6/12 rounded ${
        showModal ? "block" : "hidden"
      } ${currentBrackets.length >= 7 ? "hidden" : ""}`}
    >
      <p className="text-center text-2xl md:text-5xl lg:text-6xl font-bold text-green-500 underline mb-2">
        Game Stats
      </p>
      <ol className="mx-2 lg:mx-4 text-sm md:text-2xl lg:text-3xl xl:mx-10">
        {stats.map((stat, index) => {
          return (
            <li
              key={index}
              className={`${
                stat.includes(userTeam) ? "bg-white font-bold " : ""
              }`}
            >
              {index + 1}. {stat}
            </li>
          );
        })}
      </ol>
      <div className="flex justify-center mt-4">
        <buttton
          type="button"
          className="text-sm mb-2 py-1 px-4 md:py-2 md:px-8 lg:py-4 lg:px-12 xl:px-6 xl:py-2 2xl:px-6 2xl:py-2 rounded-lg md:text-2xl lg:text-3xl bg-red-700 font-bold"
          onClick={closeModal}
        >
          Close
        </buttton>
      </div>
    </section>
  );
};

const Bracket = ({ home, visiting, userTeam }) => {
  return (
    <section
      className={`flex flex-col md:mb-2 ${
        userTeam === home || userTeam === visiting ? "bg-white" : ""
      }`}
    >
      <div className="flex justify-around items-center flex-row">
        <img
          className="w-1/4 md:w-1/5 lg:w-1/6"
          src={BlueHelmet}
          alt="Blue football helmet"
        />
        <strong className="text-3xl md:text-6xl text-red-600">VS</strong>
        <img
          className="w-1/4 md:w-1/5 lg:w-1/6"
          src={BlackHelmet}
          alt="Black football helmet"
        />
      </div>
      <div className="flex justify-between flex-row mx-4">
        <p
          className={`font-bold md:text-3xl ${
            home === userTeam ? "text-green-500" : ""
          }`}
        >
          {home}
        </p>
        <p
          className={`font-bold md:text-3xl ${
            visiting === userTeam ? "text-green-500 font-serif" : ""
          }`}
        >
          {visiting}
        </p>
      </div>
    </section>
  );
};

const Brackets = ({ play, currentBrackets, userTeam, roundStats }) => {
  return (
    <article className="relative z-0">
      <Stats
        stats={roundStats}
        userTeam={userTeam}
        currentBrackets={currentBrackets}
      />
      <section>
        {currentBrackets.length === 8 && <p className="text-center font-bold underline text-lg md:text-4xl ">Round 1 - 16 Teams</p>}
        {currentBrackets.length === 4 && <p className="text-center font-bold underline text-lg md:text-4xl ">Round 2 - 8 Teams</p>}
        {currentBrackets.length === 2 && <p className="text-center font-bold underline text-lg md:text-4xl ">Play Offs - 4 Teams</p>}
        {currentBrackets.length === 1 && <p className="text-center font-bold underline text-lg md:text-4xl ">Championship - 2 Teams</p>}
      </section>
      <section className="-mt-12 small-phone:-mt-4">
        <NextButton title="Time to Play some Football" next={play} />
      </section>
      <section className="xl:w-5/12 xl:mx-auto xl:mt-4">
        {currentBrackets.map((bracket, index) => {
          return (
            <Bracket
              home={bracket.home}
              visiting={bracket.visiting}
              key={index}
              userTeam={userTeam}
            />
          );
        })}
      </section>
    </article>
  );
};

export default Brackets;
