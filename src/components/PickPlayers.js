import { useState } from "react";
import NextButton from "./NextButton";
import Players from "./Players";
import players from '../data/player';

const PickPlayers = ({ next, buildRoster, teamPlayers }) => {
  const [buttonText, setButtonText] = useState("3 remaining picks");
  const [enableNextButton, setNextButton] = useState(true);

  // Tracks the number of players choosen by the user by the user clicking the "Pick" button
  const picked = (player) => {
    // Test if teamPlayer is already chosen.
    if(teamPlayers.includes(player)){
      teamPlayers.splice(teamPlayers.indexOf(player),1);
      
    }else{
      // Add each seleted player to the team roster
      let currentRoster = teamPlayers;
      currentRoster.push(player);
      buildRoster(currentRoster);
    }

    // Track number of picks      
    if (teamPlayers.length === 3) {
      setButtonText("Awesome, See the Game Brackets"); // Update "Next" button title content
      setNextButton(false); // Enable the "Next" button to navigate user to Brackets page
    } else {
      let buttonContent = `${3 - teamPlayers.length} remaining picks`;
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
        <p className="text-xs sm:text-2xl text-center">* Player selection is disable when roster is full</p>
      </section>
      <section className="flex-1 flex flex-wrap flex-row justify-around gap-x-8 small-phone:mt-2">
        {players.map((player, index) => {
          return <Players key={index} enable={!enableNextButton} name={player.name} role={player.role} primaryStat={player.primaryStat} primaryNumber={player.primaryNumber} seconaryNumber={player.seconaryNumber} secondaryStat={player.secondaryStat} pick={() =>picked(player)} /> 
        })}
      </section>
    </article>
  );
};

export default PickPlayers;
