import NextButton from "./NextButton";

const TeamName = ({next, createTeam, teamName}) => {
    return (
        <article className="flex-col h-screen">
            <section className="flex-3 flex flex-col items-center">
                <h1 className="mt-10 mb-2 text-yellow-300 font-bold text-2xl sm:text-4xl">Name your Team</h1>
                <input autoFocus type="text" className=" focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:border-transparent mt-4 w-2/3 md:w-2/4 lg:w-1/3 py-2 sm:py-4 sm:text-4xl text-center font-bold font-serif" onChange={(e) => createTeam(e.target.value)}></input>
            </section>
            <section className="flex-3 mt-40">
                <NextButton enable={teamName === ""? true:false} title="Pick your Players" next ={next} />
            </section>
        </article>
    )
};

export default TeamName;