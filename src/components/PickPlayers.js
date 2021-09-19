import { useState } from "react";
import NextButton from "./NextButton";
import Players from "./Players";
import players from '../data/player';

const PickPlayers = ({ next }) => {
  const [buttonText, setButtonText] = useState("3 remaining picks");
  const [numberOfPicks, setNumberOfPicks] = useState(3);
  const [enableNextButton, setNextButton] = useState(true);

  // Tracks the number of players choosen by the user by the user clicking the "Pick" button
  const picked = () => {
    let currentPicks = numberOfPicks - 1;
    setNumberOfPicks(currentPicks);

    if (numberOfPicks <= 1) {
      setButtonText("Awesome, See the Game Brackets"); // Update "Next" button title content
      setNextButton(false); // Enable the "Next" button to navigate user to Brackets page
    } else {
      let buttonContent = `${currentPicks} remaining picks`;
      setButtonText(buttonContent); // Update "Next" button title content
    }
  };

  return (
    <article className="flex-col h-screen">
      <section
        className={`flex-1 small-phone:-mt-4 -mt-12 ${
          enableNextButton ? "filter grayscale" : ""
        }`}
      >
        <NextButton title={buttonText} next={next} enable={enableNextButton} />
      </section>
      <section className="flex-1 flex flex-wrap flex-row justify-around gap-x-8 small-phone:mt-2">
        {players.map((player, index) => {
          return <Players key={index} name={player.name} role={player.role} primaryStat={player.primaryStat} primaryNumber={player.primaryNumber} seconaryNumber={player.seconaryNumber} secondaryStat={player.secondaryStat} pick={picked} /> 
        })}
      </section>
    </article>
  );
};

export default PickPlayers;
