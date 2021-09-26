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
        drafted ? "bg-yellow-600 text-black" : " bg-white "
      }`}
    >
      <section className="text-center mb-4">
        <strong className="text-xl sm:text-3xl small-phone:text-lg">{name}</strong>
        <p className={`font-bold text-sm sm:text-2xl ${drafted?"text-white":"text-red-500"}`}>{role}</p>
      </section>
      <section className="text-xs flex flex-col justify-between mx-2 sm:mx-auto md:w-10/12 lg:w-2/3">
        <div className="flex flex-row justify-between sm:text-2xl">
          <p>{primaryStat}</p>
          <p>{primaryNumber}</p>
        </div>
        {/* <div className="flex flex-row justify-between">
          <p>{secondaryStat}</p>
          <p>{seconaryNumber}</p>
        </div> */}
        <div className="text-center mt-4">
          <button
            disabled={enable}
            type="button"
            className={` text-sm mb-2 py-1 px-4 md:px-8 md:py-2 rounded-lg md:font-bold md:text-2xl ${
              drafted
                ? "bg-white text-blue-900 font-bold"
                : "bg-gray-500 text-white"
            }`}
            onClick={() => {
              pick();
              isDraft();
            }}
          >
            {drafted?"Drafted":"Pick"}
          </button>
        </div>
      </section>
    </article>
  );
};

export default Players;
