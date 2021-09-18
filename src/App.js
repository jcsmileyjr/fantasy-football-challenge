import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import TeamName from "./components/TeamName";
import PickPlayers from "./components/PickPlayers";

function App() {
  const [challengeStage, setChallengeStage] = useState(0);

  const nextScreen = () => {
    setChallengeStage(challengeStage + 1);
  };

  return (
    <div className="App flex-col h-screen">
      <header className="flex-1 text-gray-900 text-center font-bold text-2xl">Fantasy Football Challenge</header>
      <main>
        {challengeStage === 0 && <Title next={nextScreen} />}
        {challengeStage === 1 && <TeamName next={nextScreen} />}
        {challengeStage === 2 && <PickPlayers next={nextScreen} />}

      </main>
    </div>
  );
}

export default App;
