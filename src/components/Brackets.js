import BlueHelmet from "../assets/blue-helmet.png";
import BlackHelmet from "../assets/black-helmet.png";
import NextButton from "./NextButton";
import React, { useState, useEffect } from "react";

const Stats = ({stats, userTeam, currentBrackets}) => {
  const [showModal, setModal] = useState(true);
  useEffect(() => {
   setModal(true); 
  }, [currentBrackets])

  const closeModal = () => {setModal(false);}

  return(
    <section className={`bg-gray-100 absolute mt-20 z-10 w-10/12 mx-8 rounded ${showModal?"block":"hidden"} ${currentBrackets.length >= 7?"hidden":""}`}>
      <p className="text-center text-2xl font-bold text-green-500 underline mb-2">Game Stats</p>
      <ol className="mx-2 text-sm">
        {stats.map((stat, index) => {
           return <li key={index} className={`${stat.includes(userTeam)?"bg-white font-bold ":""}`}>{index + 1}. {stat}</li>
        })}
      </ol>
      <div className="flex justify-center mt-4">
        <buttton type="button" className="text-sm mb-2 py-1 px-4 rounded-lg md:text-xl bg-red-700 font-bold" onClick={closeModal}>Close</buttton>
      </div>
    </section>
  );
}

const Bracket = ({ home, visiting, userTeam }) => {
  return (
    <section className={`flex flex-col ${userTeam === home || userTeam === visiting?"bg-white":""}`}>
      <div className="flex justify-around items-center flex-row">
        <img className="w-1/4" src={BlueHelmet} alt="Blue football helmet" />
        <strong className="text-3xl text-red-600">VS</strong>
        <img className="w-1/4" src={BlackHelmet} alt="Black football helmet" />
      </div>
      <div className="flex justify-between flex-row mx-4">
        <p className={`font-bold ${home === userTeam?"text-green-500":""}`}>{home}</p>
        <p className={`font-bold ${visiting === userTeam?"text-green-500 font-serif":""}`}>{visiting}</p>
      </div>
    </section>
  );
};

const Brackets = ({ play, currentBrackets, userTeam, roundStats }) => {
  return (
    <article className="relative z-0">
      <Stats stats={roundStats} userTeam={userTeam} currentBrackets={currentBrackets} />
      <section className="-mt-12 small-phone:-mt-4">
        <NextButton title="Time to Play some Football" next={play} />
      </section>
      {currentBrackets.map((bracket, index) => {
        return <Bracket home={bracket.home} visiting={bracket.visiting} key={index} userTeam={userTeam} />
      })}
    </article>
  );
};

export default Brackets;
