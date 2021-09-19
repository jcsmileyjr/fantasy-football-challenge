import BlueHelmet from "../assets/blue-helmet.png";
import BlackHelmet from "../assets/black-helmet.png";
import NextButton from "./NextButton";

const Bracket = ({ home, visiting }) => {
  return (
    <section className="flex flex-col ">
      <div className="flex justify-around items-center flex-row">
        <img className="w-1/3" src={BlueHelmet} alt="Blue football helmet" />
        <strong className="text-3xl text-red-600">VS</strong>
        <img className="w-1/3" src={BlackHelmet} alt="Black football helmet" />
      </div>
      <div className="flex justify-between flex-row mx-4">
        <p className="font-bold">{home}</p>
        <p className="font-bold">{visiting}</p>
      </div>
    </section>
  );
};

const Brackets = ({ play, currentBrackets }) => {
  return (
    <article>
      {currentBrackets.map((bracket, index) => {
        return <Bracket home={bracket.home} visiting={bracket.visiting} key={index} />
      })}
      <NextButton title="Time to Play some Football" next={play} />
    </article>
  );
};

export default Brackets;
