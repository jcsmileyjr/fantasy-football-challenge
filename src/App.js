import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import TeamName from "./components/TeamName";
import PickPlayers from "./components/PickPlayers";
import Brackets from "./components/Brackets";

function App() {
  const [challengeStage, setChallengeStage] = useState(0);
  const [teamname, setTeamName] = useState("");
  const [currentBrackets, setBrackets] = useState([]);

  const nextScreen = () => {
    setChallengeStage(challengeStage + 1);
    if(challengeStage + 1 === 2){
      generateBracket();
    }
  };

  const generateBracket = () => {
    // Standing nine teams
    const teams = ["Might Ducks", "Pink Flaming Candles","Roaring Bears", "Striking Tigers", "Seanky Snakes", "Leaping Frogs", "Black Panthers", "Painful Worms", "Idiot Cats"];
    teams.push(teamname); // Add user's enter team to array of teams
     
    teams.sort(() => Math.random() - 0.5); // Sort teams array
    
    const oddTeams = teams.filter((team,index) => {
      return (index % 2) !== 0; // Get all odd number teams
    })
    
    const evenTeams = teams.filter((team, index) => {
      return (index % 2) === 0; // Get all even number teams
    })
    
    // Create a new array of dual team objects
    let newBrackets = [];
    for(let i=0; i<oddTeams.length;i++){
      let bracket = {"home":oddTeams[i], "visiting": evenTeams[i]};
      newBrackets.push(bracket);
    }

    setBrackets(newBrackets); // Save new brackets to state

  }

  return (
    <div className="App flex-col h-screen">
      <header className="flex-1 text-gray-900 text-center font-bold text-2xl">Fantasy Football Challenge</header>
      <main>
        {challengeStage === 0 && <Title next={nextScreen} />}
        {challengeStage === 1 && <TeamName next={nextScreen} createTeam={setTeamName} />}
        {challengeStage === 2 && <PickPlayers next={nextScreen} />}
        {challengeStage === 3 && <Brackets next={nextScreen} currentBrackets={currentBrackets} />}

      </main>
    </div>
  );
}

export default App;
