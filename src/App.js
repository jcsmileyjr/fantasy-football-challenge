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
    console.log(teams)
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
        home: oddTeams[i].name,
        homeTeam: oddTeams[i].rivals,
        visiting: evenTeams[i].name,
        visitingTeam: evenTeams[i].rivals,
      };
      //console.table(bracket)
      newBrackets.push(bracket);
    }
    //console.table(newBrackets);
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
      { name: "Seanky Snakes", rivals: [] },
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
    //console.table(teams);
    teams.push({ name: teamname, rivals: [] }); // Add user's enter team to array of teams
    setBrackets(generateBracket(teams)); // Save new brackets to state
  };

  // Determine which teams proceed to the next round.
  const playGame = () => {
    let canPlay = false;
    currentBrackets.forEach((team) => {
      for (let key in team) {
        if (team[key] === teamname) {
          console.log(`${teamname} can play`)
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
      console.log(`Championship is being held`)
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

    const outcomes = currentBrackets.map((team, index) => {
      console.log(team)
      if (team.home === teamname) {
        team.homeTeam[0] = roster;
      }
      if (team.visiting === teamname) {
        team.visitingTeam[0] = roster;
      }

      // Figure out if its a passing game, running game, or tackle game
      let gameTypes = Math.floor(Math.random() * 10) + 1;
      //console.log(`Game type random number is ${gameTypes}`);
      let currentGameType = "";
      if (gameTypes <= 3) {
        currentGameType = "Passing Yards";
      } else if (gameTypes > 3 && gameTypes <= 6) {
        currentGameType = "Rushing Yards";
      } else {
        currentGameType = "Quarterback sacks";
      }

      // find players on each team with roles and highest stats (homeTeam & visitingTeam)
      let homeStarPlayer = { primaryStat: currentGameType, primaryNumber: 0 };
      team.homeTeam[0].forEach((person) => {
        //console.log(`${person.name} has stat ${person.primaryStat} and number ${person.primaryNumber}`)
        if (
          person.primaryNumber > homeStarPlayer.primaryNumber &&
          person.primaryStat === currentGameType
        ) {
          homeStarPlayer = person;
        }
      });

      let visitingStarPlayer = {
        primaryStat: currentGameType,
        primaryNumber: 0,
      };
      team.visitingTeam[0].forEach((person) => {
        //console.log(`${person.name} has stat ${person.primaryStat} and number ${person.primaryNumber}`)
        if (
          person.primaryNumber > visitingStarPlayer.primaryNumber &&
          person.primaryStat === currentGameType
        ) {
          visitingStarPlayer = person;
        }
      });

      // Compare players to determine who has the highest stat. That outcome gives or recieve an extra .
      //console.table(homeStarPlayer);
      //console.table(visitingStarPlayer);
      let skillOutcome =
        homeStarPlayer.primaryNumber > visitingStarPlayer.primaryNumber
          ? -0.2
          : 0.2;

      // state the type of game and stand out player/stat

      // Random number between 0 and 1.
      let flipOutcome = Math.random();

      let gameOutcome = flipOutcome + skillOutcome;

      // if (team.home === teamname || team.visiting === teamname) {
      //   console.log(
      //     `${team.home} vs ${team.visiting} - flipoutcome: ${flipOutcome} + skillcome: ${skillOutcome} = ${gameOutcome}`
      //   );
      // }

      gatherStats(gameOutcome, team.home, team.visiting);
      if (gameOutcome < 0.5) {
        return {name:team.home, rivals:team.homeTeam};
        //return team.home;
      } else {
        return {name:team.visiting, rivals:team.visitingTeam}
        //return team.visiting;
      }
    });

    //console.table(outcomes)
    let newBracket = generateBracket(outcomes);
    //console.table(newBracket)
    setBrackets(newBracket);
  };

  const clearGameStats = () => {
    setStats([]);
  };

  // Gather the last round stats to be display on pop-up modal on the Brackets Screen
  const gatherStats = (outcome, home, visiting) => {
    let stat = "";
    if (outcome < 0.5) {
      stat = `${home} won against ${visiting}`;
    } else {
      stat = `${home} lose against ${visiting}`;
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
        if (team[key] === teamname) {
          playing = true;
          return;
        }
      }
    });
    return playing;
  };

  return (
    <div
      className={`App flex-col h-screen bg-fixed bg-center bg-contain bg-no-repeat ${
        challengeStage === 0 ? "bg-football-pattern" : "bg-blue-900"
      } ${challengeStage === 1 ? "bg-football-names" : "bg-blue-900"} `}
    >
      <div
        className={` bg-opacity-80 h-screen ${
          challengeStage > 1
            ? ifPlaying() === false
              ? "bg-red-700"
              : "bg-opacity-100"
            : "bg-blue-900"
        }`}
      >
        <header className="flex-1 text-white text-center font-bold text-2xl sm:text-6xl sm:mb-4">
          Fantasy Football Challenge
        </header>
        <main>
          {challengeStage === 0 && <Title next={nextScreen} />}
          {challengeStage === 1 && (
            <TeamName next={nextScreen} createTeam={setTeamName} />
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
