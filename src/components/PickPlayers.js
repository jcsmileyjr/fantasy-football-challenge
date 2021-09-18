import NextButton from "./NextButton";

const Players = ({name, role, primaryStat, primaryNumber, secondaryStat, seconaryNumber}) => {
    return(
        <article className="flex-1 w-5/12 bg-white mt-4">
          <section className="text-center mb-4">
            <strong className="text-xl">{name}</strong>
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
            <button type="button" className="bg-blue-700 text-white text-sm mb-2 py-1 px-4 rounded-lg md:text-xl">Pick</button>
          </section>
        </article>
    );
}

const PickPlayers = ({ next }) => {
  return (
    <article className="flex-col h-screen">
      <section className="flex-1 flex flex-wrap flex-row justify-around gap-x-8">
        <Players name="Paul the Bull" role="Running Back" primaryStat="Rushing Yards" primaryNumber="115" secondaryStat="Touchdowns" seconaryNumber="5" />
        <Players name="Shane the Cane" role="Running Back" primaryStat="Rushing Yards" primaryNumber="208" secondaryStat="Touchdowns" seconaryNumber="8" />
        <Players name="John Big Dog" role="Quarterback" primaryStat="Passing Yards" primaryNumber="305" secondaryStat="Touchdowns" seconaryNumber="15" />
        <Players name="Carly the Bold" role="Quarterback" primaryStat="Passing Yards" primaryNumber="505" secondaryStat="Touchdowns" seconaryNumber="31" />
        <Players name="Paul the Bull" role="Running Back" primaryStat="Rushing Yards" primaryNumber="115" secondaryStat="Touchdowns" seconaryNumber="5" />
        <Players name="Shane the Cane" role="Running Back" primaryStat="Rushing Yards" primaryNumber="208" secondaryStat="Touchdowns" seconaryNumber="8" />
        <Players name="John Big Dog" role="Quarterback" primaryStat="Passing Yards" primaryNumber="305" secondaryStat="Touchdowns" seconaryNumber="15" />
        <Players name="Carly the Bold" role="Quarterback" primaryStat="Passing Yards" primaryNumber="505" secondaryStat="Touchdowns" seconaryNumber="31" />
      </section>
      <section className="flex-1">
        <NextButton title="Yeah!!! See the Game Brackets" next={next} />
      </section>
    </article>
  );
};

export default PickPlayers;
