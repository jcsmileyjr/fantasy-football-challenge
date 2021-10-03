import React, { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import TeamName from "./components/TeamName";
import PickPlayers from "./components/PickPlayers";
import Brackets from "./components/Brackets";
import Lose from "./components/Lose";
import Won from "./components/Won";
import { userDraft, createPlayers } from "./data/player";

function App() {
  const [challengeStage, setChallengeStage] = useState(0);
  const [teamname, setTeamName] = useState("");
  const [roster, setRoster] = useState([]);
  const [currentBrackets, setBrackets] = useState([]);
  const [currentPlayOffStats, setStats] = useState([]);
  const [playerdraft, setPlayerDraft] = useState([]);
  const [allDraft, setAllDraft] = useState([]);

  // main method in NextButton that moves user through the intial team creation screen
  const nextScreen = () => {
    setChallengeStage(challengeStage + 1); // navigate user to the next screen

    // Drafts 48 players for the 6 teams. Preload user draft with 6 random players of the 48.
    if (challengeStage + 1 === 1) {
      let listOfPlayers = createPlayers();
      let officialDraft = userDraft(listOfPlayers);
      setPlayerDraft(officialDraft[0]);
      setAllDraft(officialDraft[1]);
    }

    if (challengeStage + 1 === 2) {
      generateStartingBracket(allDraft); // Create the initial bracket of teams including the user team's name
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
      let bracket = {
        homeTeam: oddTeams[i],
        visitingTeam: evenTeams[i]
      }
  
      newBrackets.push(bracket);
    }
    return newBrackets;
  };

  // Create the starting 16 teams
  const generateStartingBracket = (list) => {
    // Standing nine teams
    const teams = [
      { name: "Mighty Ducks", rivals: [] },
      { name: "Pink Flaming Candles", rivals: [] },
      { name: "Roaring Bears", rivals: [] },
      { name: "Striking Tigers", rivals: [] },
      { name: "Sneaky Snakes", rivals: [] },
      { name: "Leaping Frogs", rivals: [] },
      { name: "Black Panthers", rivals: [] },
      { name: "Painful Worms", rivals: [] },
      { name: "Idiot Cats", rivals: [] },
      { name: "Raging Rinos", rivals: [] },
      { name: "Kingly Lions", rivals: [] },
      { name: "Trumpeting Elephants", rivals: [] },
      { name: "Buzzing Bees", rivals: [] },
      { name: "Graceful Dolphins", rivals: [] },
      { name: "Dark Unicorns", rivals: [] },
    ];

    teams.forEach((team) => {
      team.rivals.push(list.splice(0, 3));
    });
    
    teams.push({ name: teamname, rivals: [] }); // Add user's enter team to array of teams
    setBrackets(generateBracket(teams)); // Save new brackets to state
  };

  // Determine which teams proceed to the next round.
  const playGame = () => {
    let canPlay = false;
    currentBrackets.forEach((team) => {
      for (let key in team) {
        if (team[key].name === teamname) {
          canPlay = true;
          return;
        }
      }
    });

    if (canPlay === false) {
      setChallengeStage("lose");
      return;
    }

    // FIX ISSUE: SHOULD BE DETERMINE WITH SKILLS
    if (currentBrackets.length === 1) {
      let championship = Math.random();
      if (championship < 0.5) {
        setChallengeStage("won");
        return;
      } else {
        setChallengeStage("lose");
        return;
      }
    }

    clearGameStats();

    const outcomes = currentBrackets.map((competingTeams) => {
      if (competingTeams.homeTeam.name === teamname) {
        competingTeams.homeTeam.rivals[0] = roster;
      }
      if (competingTeams.visitingTeam.name === teamname) {
        competingTeams.visitingTeam.rivals[0] = roster;
      }

      // Figure out if its a passing game, running game, or tackle game
      let gameTypes = Math.floor(Math.random() * 10) + 1;
      let currentGameType = "";
      if (gameTypes <= 3) {
        currentGameType = "Passing Yards";
      } else if (gameTypes > 3 && gameTypes <= 6) {
        currentGameType = "Rushing Yards";
      } else {
        currentGameType = "Quarterback sacks";
      }

      // find players on each team with roles and highest stats (homeTeam & visitingTeam)
      let homeStarPlayer = 0;
      let homeStar= "";
      competingTeams.homeTeam.rivals[0].forEach((person) => {
        if (
          person.primaryNumber > homeStarPlayer &&
          person.primaryStat === currentGameType
        ) {
          homeStarPlayer = person.primaryNumber;
          homeStar = {team:competingTeams.homeTeam.name, playerName: person.name}
        }
      });
 
      let visitingStarPlayer= 0;
      let visitingStar = "";
      competingTeams.visitingTeam.rivals[0].forEach((person) => {
        if (
          person.primaryNumber > visitingStarPlayer &&
          person.primaryStat === currentGameType
        ) {
          visitingStarPlayer = person.primaryNumber;
          visitingStar = {team:competingTeams.visitingTeam.name, playerName: person.name}
        }
      });

      // Compare players to determine who has the highest stat. That outcome gives or recieve an extra .
      let skillOutcome =
        homeStarPlayer > visitingStarPlayer
          ? -0.2
          : 0.2;

      // Random number between 0 and 1.
      let flipOutcome = Math.random();

      let gameOutcome = flipOutcome + skillOutcome;

      gatherStats(gameOutcome, competingTeams.homeTeam.name, competingTeams.visitingTeam.name, currentGameType, homeStar, visitingStar);
      if (gameOutcome < 0.5) {
        return competingTeams.homeTeam;
      } else {
        return competingTeams.visitingTeam;
      }
    });

    let newBracket = generateBracket(outcomes);
    setBrackets(newBracket);
  };

  const clearGameStats = () => {
    let clearStats = currentPlayOffStats;
    clearStats.length = 0;
    setStats(clearStats);
  };

  // Gather the last round stats to be display on pop-up modal on the Brackets Screen
  const gatherStats = (outcome, home, visiting, gameType, homeStarPlayer, visitingStarPlayer) => {
    let winningScore = Math.floor(Math.random() * 35) + 14;
    let losingScore = Math.floor(Math.random() * 14) + 0;

    // if the home team is my team and wins, then pick homeplayer
    let topPlayerStat = "";
    if(outcome < 0.5 && homeStarPlayer.team === teamname){
      if(gameType === "Passing Yards"){
        topPlayerStat = `. ${homeStarPlayer.playerName} threw for ${Math.floor(Math.random() * 400) + 100} passing yards!`;
      }else if(gameType === "Rushing Yards"){
        topPlayerStat = `. ${homeStarPlayer.playerName} ran for ${Math.floor(Math.random() * 200) + 80} rushing yards!`;
      }else{
        topPlayerStat = `. ${homeStarPlayer.playerName} sack the quaterback ${Math.floor(Math.random() * 20) + 5} times!`;
      }
    }
    if(outcome > 0.5 && visitingStarPlayer.team === teamname){
      if(gameType === "Passing Yards"){
        topPlayerStat = `. ${visitingStarPlayer.playerName} threw for ${Math.floor(Math.random() * 400) + 100} passing yards!`;
      }else if(gameType === "Rushing Yards"){
        topPlayerStat = `. ${visitingStarPlayer.playerName} ran for ${Math.floor(Math.random() * 200) + 80} rushing yards!`;
      }else{
        topPlayerStat = `. ${visitingStarPlayer.playerName} sack the quaterback ${Math.floor(Math.random() * 20) + 5} times!`;
      }
    }
    
    let stat = "";
    if (outcome < 0.5) {
      stat = `${home} wins, ${winningScore} to ${losingScore}, against ${visiting} ${home === teamname ? topPlayerStat :`with higher ${gameType.toLowerCase()}.`}  `;
    } else {
      stat = `${home} loses, ${losingScore} to ${winningScore}, against ${visiting} ${visiting === teamname ? topPlayerStat:`superior ${gameType.toLowerCase()}.`}  `;
    }

    let gameStats = currentPlayOffStats;
    gameStats.push(stat);
    setStats(gameStats);
  };

  // Restart game
  const newGame = () => {
    setChallengeStage(0);
    setRoster([]);
    setBrackets([]);
    clearGameStats();
  };

  const ifPlaying = () => {
    let playing = false;
    currentBrackets.forEach((team) => {
      for (let key in team) {
        if (team[key].name === teamname) {
          playing = true;
          return;
        }
      }
    });
    return playing;
  };

  return (
    <div
      className={`App flex-col h-screen bg-fixed bg-center bg-contain bg-no-repeat xl:bg-repeat ${
        challengeStage === 0 ? "bg-football-pattern" : "bg-blue-900"
      } ${challengeStage === 1 ? "bg-football-names" : "bg-blue-900"} ${challengeStage > 1 ? "h-full":""}`}
    >
      <div
        className={` bg-opacity-90 h-full ${
          challengeStage > 1
            ? ifPlaying() === false
              ? "bg-red-700"
              : "bg-opacity-100"
            : "bg-blue-900"
        }`}
      >
        <header className="flex-1 text-white text-center font-bold text-2xl sm:text-6xl lg:text-7xl xl:text-8xl sm:mb-4 mt-2">
          Fantasy Football Challenge
        </header>
        <main>
          {challengeStage === 0 && <Title next={nextScreen} />}
          {challengeStage === 1 && (
            <TeamName next={nextScreen} createTeam={setTeamName} teamName={teamname} />
          )}
          {challengeStage === 2 && (
            <PickPlayers
              next={nextScreen}
              buildRoster={setRoster}
              teamPlayers={roster}
              draft={playerdraft}
            />
          )}
          {challengeStage === 3 && (
            <Brackets
              next={nextScreen}
              currentBrackets={currentBrackets}
              play={playGame}
              userTeam={teamname}
              roundStats={currentPlayOffStats}
            />
          )}
          {challengeStage === "lose" && (
            <Lose restart={newGame} team={teamname} games={currentBrackets} />
          )}
          {challengeStage === "won" && <Won restart={newGame} />}
        </main>
      </div>
    </div>
  );
}

export default App;
