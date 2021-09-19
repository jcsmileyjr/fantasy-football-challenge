import BlueHelmet from "../assets/blue-helmet.png";
import BlackHelmet from "../assets/black-helmet.png";
import NextButton from "./NextButton";

const Bracket = ({ home, visiting, userTeam }) => {
  return (
    <section className={`flex flex-col ${userTeam === home || userTeam === visiting?"bg-white":""}`}>
      <div className="flex justify-around items-center flex-row">
        <img className="w-1/4" src={BlueHelmet} alt="Blue football helmet" />
        <strong className="text-3xl text-red-600">VS</strong>
        <img className="w-1/4" src={BlackHelmet} alt="Black football helmet" />
      </div>
      <div className="flex justify-between flex-row mx-4">
        <p className={`font-bold ${home === userTeam?"text-green-500":""}`}>{home}</p>
        <p className={`font-bold ${visiting === userTeam?"text-green-500 font-serif":""}`}>{visiting}</p>
      </div>
    </section>
  );
};

const Brackets = ({ play, currentBrackets, userTeam }) => {
  return (
    <article>
      <section className="-mt-12 small-phone:-mt-4">
        <NextButton title="Time to Play some Football" next={play} />
      </section>
      {currentBrackets.map((bracket, index) => {
        return <Bracket home={bracket.home} visiting={bracket.visiting} key={index} userTeam={userTeam} />
      })}
    </article>
  );
};

export default Brackets;
