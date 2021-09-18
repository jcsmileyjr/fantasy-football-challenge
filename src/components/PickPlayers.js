import { useState } from "react";
import NextButton from "./NextButton";

const Players = ({
  name,
  role,
  primaryStat,
  primaryNumber,
  secondaryStat,
  seconaryNumber,
  pick,
}) => {
  return (
    <article className="flex-1 w-5/12 bg-white mt-4">
      <section className="text-center mb-4">
        <strong className="text-xl small-phone:text-lg">{name}</strong>
        <p className="text-red-500 font-bold text-sm">{role}</p>
      </section>
      <section className="text-xs flex flex-row justify-between mx-4">
        <p>{primaryStat}</p>
        <p>{primaryNumber}</p>
      </section>
      <section className="text-xs flex flex-row justify-between mx-4">
        <p>{secondaryStat}</p>
        <p>{seconaryNumber}</p>
      </section>
      <section className="text-center mt-4">
        <button
          type="button"
          className="bg-blue-700 text-white text-sm mb-2 py-1 px-4 rounded-lg md:text-xl"
          onClick={pick}
        >
          Pick
        </button>
      </section>
    </article>
  );
};

/*
A. Content state changes
1. Each time user pick, numberOfPicks state is updated
2. When reach 0 picks, change buttontext

B. UI changes
1. NextButton start as pink or gray color with text && disable && opacity is .5
2. When reach 0 picks, go to dark blue && enabled

C. When user picks, the player UI box changes to show highlight
*/

const PickPlayers = ({ next }) => {
  const [buttonText, setButtonText] = useState("3 remaining picks");
  const [numberOfPicks, setNumberOfPicks] = useState(3);

  const picked = () => {
    let currentPicks = numberOfPicks - 1;
    setNumberOfPicks(currentPicks);
    if (numberOfPicks <= 1) {
      setButtonText("Awesome, See the Game Brackets");
    } else {
      let buttonContent = `${currentPicks} remaining picks`;
      setButtonText(buttonContent);
    }
  };
  return (
    <article className="flex-col h-screen z-0">
      <section className="flex-1 sticky small-phone:top-10 top-4 -mt-12 z-20">
        <NextButton title={buttonText} next={next} />
      </section>
      <section className="flex-1 flex flex-wrap flex-row justify-around gap-x-8 small-phone:mt-2">
        <Players
          name="Paul the Bull"
          role="Running Back"
          primaryStat="Rushing Yards"
          primaryNumber="115"
          secondaryStat="Touchdowns"
          seconaryNumber="5"
          pick={picked}
        />
        <Players
          name="Shane the Cane"
          role="Running Back"
          primaryStat="Rushing Yards"
          primaryNumber="208"
          secondaryStat="Touchdowns"
          seconaryNumber="8"
        />
        <Players
          name="John Big Dog"
          role="Quarterback"
          primaryStat="Passing Yards"
          primaryNumber="305"
          secondaryStat="Touchdowns"
          seconaryNumber="15"
        />
        <Players
          name="Carly the Bold"
          role="Quarterback"
          primaryStat="Passing Yards"
          primaryNumber="505"
          secondaryStat="Touchdowns"
          seconaryNumber="31"
        />
        <Players
          name="Paul the Bull"
          role="Running Back"
          primaryStat="Rushing Yards"
          primaryNumber="115"
          secondaryStat="Touchdowns"
          seconaryNumber="5"
        />
        <Players
          name="Shane the Cane"
          role="Running Back"
          primaryStat="Rushing Yards"
          primaryNumber="208"
          secondaryStat="Touchdowns"
          seconaryNumber="8"
        />
        <Players
          name="John Big Dog"
          role="Quarterback"
          primaryStat="Passing Yards"
          primaryNumber="305"
          secondaryStat="Touchdowns"
          seconaryNumber="15"
        />
        <Players
          name="Carly the Bold"
          role="Quarterback"
          primaryStat="Passing Yards"
          primaryNumber="505"
          secondaryStat="Touchdowns"
          seconaryNumber="31"
        />
        <Players
          name="Paul the Bull"
          role="Running Back"
          primaryStat="Rushing Yards"
          primaryNumber="115"
          secondaryStat="Touchdowns"
          seconaryNumber="5"
        />
        <Players
          name="Shane the Cane"
          role="Running Back"
          primaryStat="Rushing Yards"
          primaryNumber="208"
          secondaryStat="Touchdowns"
          seconaryNumber="8"
        />
        <Players
          name="John Big Dog"
          role="Quarterback"
          primaryStat="Passing Yards"
          primaryNumber="305"
          secondaryStat="Touchdowns"
          seconaryNumber="15"
        />
        <Players
          name="Carly the Bold"
          role="Quarterback"
          primaryStat="Passing Yards"
          primaryNumber="505"
          secondaryStat="Touchdowns"
          seconaryNumber="31"
        />
        <Players
          name="Paul the Bull"
          role="Running Back"
          primaryStat="Rushing Yards"
          primaryNumber="115"
          secondaryStat="Touchdowns"
          seconaryNumber="5"
        />
        <Players
          name="Shane the Cane"
          role="Running Back"
          primaryStat="Rushing Yards"
          primaryNumber="208"
          secondaryStat="Touchdowns"
          seconaryNumber="8"
        />
        <Players
          name="John Big Dog"
          role="Quarterback"
          primaryStat="Passing Yards"
          primaryNumber="305"
          secondaryStat="Touchdowns"
          seconaryNumber="15"
        />
        <Players
          name="Carly the Bold"
          role="Quarterback"
          primaryStat="Passing Yards"
          primaryNumber="505"
          secondaryStat="Touchdowns"
          seconaryNumber="31"
        />
      </section>
    </article>
  );
};

export default PickPlayers;
