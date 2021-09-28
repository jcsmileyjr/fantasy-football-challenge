import NextButton from "./NextButton";

const Title = ({ next }) => {
  return (
    <article className="flex-col h-screen pt-8">
      <section className="mt-4 ml-6 md:mx-24 lg:w-4/6 xl:w-4/6 2xl:w-3/6 lg:mx-auto flex-2">
        <p className="text-white sm:mx-auto sm:w-11/12 md:w-10/12 mb-10 font-bold small-phone:text-base text-xl md:text-2xl lg:text-3xl 2xl:text-2xl">
          <span className="underline text-yellow-500">Build</span> your Team
        </p>
        <p className="text-white sm:mx-auto sm:w-11/12 md:w-10/12 mb-10 font-bold small-phone:text-lg text-2xl md:text-3xl lg:text-4xl 2xl:text-3xl">
          <span className="underline text-yellow-500">Play</span> in the Playoffs
        </p>
        <p className="text-white sm:mx-auto sm:w-11/12 md:w-10/12 mb-8 font-bold small-phone:text-xl text-3xl md:text-4xl lg:text-5xl 2xl:text-5xl">
          <span className="underline text-yellow-500">Win</span> the Championship
        </p>
      </section>
      <NextButton title="Name your Team" next={next}></NextButton>
    </article>
  );
};

export default Title;
