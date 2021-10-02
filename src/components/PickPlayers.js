import { useState } from "react";
import NextButton from "./NextButton";
import Players from "./Players";

const PickPlayers = ({ next, buildRoster, teamPlayers, draft }) => {
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
        <p className="text-xs sm:text-2xl text-center text-white mt-2">* Player selection is disable when roster is full</p>
      </section>
      <section className="text-md sm:text-3xl text-black text-left mt-2 small-phone:mx-12 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-14 2xl:bg-transparent 2xl:text-white 2xl:text-center bg-white p-2">
        <p>There are 6 players randomly choosen for this year's draft. Each game between teams is partially decided by a player with the highest randomly chosen skill. </p>
      </section>
      <section className="flex-1 flex flex-wrap flex-row justify-around gap-x-8 small-phone:mt-2">
        {draft.map((player, index) => {
          return <Players key={index} enable={!enableNextButton} name={player.name} role={player.role} primaryStat={player.primaryStat} primaryNumber={player.primaryNumber} picture={player['picture']} seconaryNumber={player.seconaryNumber} secondaryStat={player.secondaryStat} pick={() =>picked(player)} /> 
        })}
      </section>
    </article>
  );
};

export default PickPlayers;
