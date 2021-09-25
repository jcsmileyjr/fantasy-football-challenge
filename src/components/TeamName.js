import NextButton from "./NextButton";
import HelmetWithNames from '../assets/helmets-1-name-blue.png';

const TeamName = ({next, createTeam}) => {
    return (
        <article className="flex-col h-screen">
            <section className="flex-3 flex flex-col items-center">
                <h1 className="mt-4 mb-2 font-black text-2xl sm:text-4xl">Name your Team</h1>
                <input type="text" className="mt-10 w-2/3 md:w-2/4 lg:w-1/3 py-2 sm:py-4 sm:text-4xl text-center" onChange={(e) => createTeam(e.target.value)}></input>
            </section>
            <section className="flex-3">
                <NextButton title="Let's Play, Pick your Players" next ={next} />
            </section>
        </article>
    )
};

export default TeamName;