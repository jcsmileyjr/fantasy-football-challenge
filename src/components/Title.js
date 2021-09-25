import BlueHelmets from "../assets/helmets-1-title-blue-a.png";
import NextButton from "./NextButton";

const Title = ({ next }) => {
  return (
    <article className="flex-col h-screen ">
      <section className="ml-4 md:mx-24 lg:w-4/6 xl:w-4/6 2xl:w-3/6 lg:mx-auto flex-2">
        <p className="text-gray-900 sm:mx-auto sm:w-11/12 md:w-10/12 mb-10 font-bold small-phone:text-base text-xl md:text-2xl lg:text-3xl 2xl:text-2xl">
          <span className="underline">Build</span> your Team
        </p>
        <p className="text-gray-900 sm:mx-auto sm:w-11/12 md:w-10/12 mb-10 font-bold small-phone:text-lg text-2xl md:text-3xl lg:text-4xl 2xl:text-3xl">
          <span className="underline">Play</span> in the Playoffs
        </p>
        <p className="text-gray-900 sm:mx-auto sm:w-11/12 md:w-10/12 mb-8 font-bold small-phone:text-xl text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl">
          <span className="underline">Win</span> the Championship
        </p>
      </section>
      <NextButton title="Party Time, Name your Team" next={next}></NextButton>
    </article>
  );
};

export default Title;
