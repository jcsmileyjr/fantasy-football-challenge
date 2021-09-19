import { useState } from "react";

const Players = ({
  name,
  role,
  primaryStat,
  primaryNumber,
  secondaryStat,
  seconaryNumber,
  pick,
  enable = false,
}) => {
  const [drafted, setdraft] = useState(false);
  const isDraft = () => {
    setdraft(!drafted);
  };

  return (
    <article
      className={`flex-1 small-phone:w-8/12 w-5/12 mt-4 flex flex-col justify-between ${
        drafted ? "bg-green-900 text-white" : " bg-white "
      }`}
    >
      <section className="text-center mb-4">
        <strong className="text-xl small-phone:text-lg">{name}</strong>
        <p className="text-red-500 font-bold text-sm">{role}</p>
      </section>
      <section className="text-xs flex flex-col justify-between mx-2">
        <div className="flex flex-row justify-between">
          <p>{primaryStat}</p>
          <p>{primaryNumber}</p>
        </div>
        <div className="flex flex-row justify-between">
          <p>{secondaryStat}</p>
          <p>{seconaryNumber}</p>
        </div>
        <div className="text-center mt-4">
          <button
            disabled={enable}
            type="button"
            className={` text-sm mb-2 py-1 px-4 rounded-lg md:text-xl ${
              drafted
                ? "bg-white text-green-900 font-bold"
                : "bg-blue-700 text-white"
            }`}
            onClick={() => {
              pick();
              isDraft();
            }}
          >
            Pick
          </button>
        </div>
      </section>
    </article>
  );
};

export default Players;
