import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import TeamName from "./components/TeamName";

function App() {
  const [challengeStage, setChallengeStage] = useState(0);

  const nextScreen = () => {
    setChallengeStage(challengeStage + 1);
    console.log("it ran");
  };

  return (
    <div className="App flex-col h-screen">
      <header className="flex-1 text-gray-900 text-center font-bold text-2xl">Fantasy Football Challenge</header>
      <main>
        {challengeStage === 0 && <Title next={nextScreen} />}
        {challengeStage === 1 && <TeamName />}
      </main>
    </div>
  );
}

export default App;
