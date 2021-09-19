import { useState } from "react";

const Players = ({
  name,
  role,
  primaryStat,
  primaryNumber,
  secondaryStat,
  seconaryNumber,
  pick,
}) => {
  const [drafted, setdraft] = useState(false);
  const isDraft = () => {
    setdraft(!drafted);
  };

  return (
    <article
      className={`flex-1 w-5/12 mt-4 flex flex-col justify-between ${
        drafted ? "bg-blue-700 text-white" : " bg-white "
      }`}
    >
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
          className={` text-sm mb-2 py-1 px-4 rounded-lg md:text-xl ${
            drafted
              ? "bg-white text-blue-700 font-bold"
              : "bg-blue-700 text-white"
          }`}
          onClick={() => {
            pick();
            isDraft();
          }}
        >
          Pick
        </button>
      </section>
    </article>
  );
};

export default Players;
