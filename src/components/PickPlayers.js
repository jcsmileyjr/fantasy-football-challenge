import { useState } from "react";
import NextButton from "./NextButton";
import Players from "./Players";

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
    <article className="flex-col h-screen z-0">
      <section
        className={`flex-1 sticky small-phone:top-10 top-4 -mt-12 z-20 ${
          enableNextButton ? "filter grayscale" : ""
        }`}
      >
        <NextButton title={buttonText} next={next} enable={enableNextButton} />
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
          pick={picked}
        />
        <Players
          name="John Big Dog"
          role="Quarterback"
          primaryStat="Passing Yards"
          primaryNumber="305"
          secondaryStat="Touchdowns"
          seconaryNumber="15"
          pick={picked}
        />
        <Players
          name="Carly the Bold"
          role="Quarterback"
          primaryStat="Passing Yards"
          primaryNumber="505"
          secondaryStat="Touchdowns"
          seconaryNumber="31"
          pick={picked}
        />
        <Players
          name="Deshaun the Bat"
          role="Offensive Tackle"
          primaryStat="Quarterback sacks"
          primaryNumber="15"
          secondaryStat="Running Back sacks"
          seconaryNumber="35"
          pick={picked}
        />
        <Players
          name="The Irnee"
          role="Offensive Tackle"
          primaryStat="Quarterback sacks"
          primaryNumber="28"
          secondaryStat="Running Back sacks"
          seconaryNumber="3"
          pick={picked}
        />
        <Players
          name="John Big Dog"
          role="Quarterback"
          primaryStat="Passing Yards"
          primaryNumber="305"
          secondaryStat="Touchdowns"
          seconaryNumber="15"
          pick={picked}
        />
        <Players
          name="Carly the Bold"
          role="Quarterback"
          primaryStat="Passing Yards"
          primaryNumber="505"
          secondaryStat="Touchdowns"
          seconaryNumber="31"
          pick={picked}
        />
      </section>
    </article>
  );
};

export default PickPlayers;
