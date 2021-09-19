import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import TeamName from "./components/TeamName";
import PickPlayers from "./components/PickPlayers";
import Brackets from "./components/Brackets";
import Lose from "./components/Lose";
import Won from "./components/Won";

function App() {
  const [challengeStage, setChallengeStage] = useState(0);
  const [teamname, setTeamName] = useState("");
  const [currentBrackets, setBrackets] = useState([]);

  // main method in NextButton that moves user through the intial team creation screen
  const nextScreen = () => {
    setChallengeStage(challengeStage + 1);
    if (challengeStage + 1 === 2) {
      generateStartingBracket(); // Create the initial bracket of teams including the user team's name
    }
  };

  // Take in an array of teams, randomize the array, split into even factions, and return an array of dual team objects.
  const generateBracket = (teams) => {
    teams.sort(() => Math.random() - 0.5); // Sort teams array

    const oddTeams = teams.filter((team, index) => {
      return index % 2 !== 0; // Get all odd number teams
    });

    const evenTeams = teams.filter((team, index) => {
      return index % 2 === 0; // Get all even number teams
    });

    // Create a new array of dual team objects
    let newBrackets = [];
    for (let i = 0; i < oddTeams.length; i++) {
      let bracket = { home: oddTeams[i], visiting: evenTeams[i] };
      newBrackets.push(bracket);
    }

    return newBrackets;
  };

  // Create the starting 16 teams
  const generateStartingBracket = () => {
    // Standing nine teams
    const teams = [
      "Mighty Ducks",
      "Pink Flaming Candles",
      "Roaring Bears",
      "Striking Tigers",
      "Seanky Snakes",
      "Leaping Frogs",
      "Black Panthers",
      "Painful Worms",
      "Idiot Cats",
      "Raging Rinos",
      "Kingly Lions",
      "Trumpeting Elephants",
      "Buzzing Bees",
      "Graceful Dolphins",
      "Dark Unicorns",
    ];
    teams.push(teamname); // Add user's enter team to array of teams

    setBrackets(generateBracket(teams)); // Save new brackets to state
  };

  const playGame = () => {
    let canPlay = false;
    currentBrackets.forEach(team => {
      for(let key in team){
        if(team[key]=== teamname){
          canPlay = true;
          return;
        }
      }
    });

    if (canPlay === false) {
      setChallengeStage("lose");
    }

    if(currentBrackets.length === 1){
      let championship = Math.random();
      if(championship < 0.5){
        setChallengeStage("won");
        return;
      }else{
        setChallengeStage("lose");
        return;
      }
    }

    const outcomes = currentBrackets.map((team, index) => {
      let flipOutcome = Math.random();
      console.log(`${team.home} vs ${team.visiting} with outcome ${flipOutcome}`);
      if (flipOutcome < 0.5) {
        return team.home;
      } else {
        return team.visiting;
      }
    });


    setBrackets(generateBracket(outcomes));
    
  };

  // Restart game
  const newGame = () => {
    setChallengeStage(0);
  };

  return (
    <div className="App flex-col h-screen">
      <header className="flex-1 text-gray-900 text-center font-bold text-2xl">
        Fantasy Football Challenge
      </header>
      <main>
        {challengeStage === 0 && <Title next={nextScreen} />}
        {challengeStage === 1 && (
          <TeamName next={nextScreen} createTeam={setTeamName} />
        )}
        {challengeStage === 2 && <PickPlayers next={nextScreen} />}
        {challengeStage === 3 && (
          <Brackets
            next={nextScreen}
            currentBrackets={currentBrackets}
            play={playGame}
          />
        )}
        {challengeStage === "lose" && (
          <Lose restart={newGame} team={teamname} />
        )}
        {challengeStage === "won" && <Won restart={newGame} />}
      </main>
    </div>
  );
}

export default App;
