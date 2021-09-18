import NextButton from "./NextButton";
import HelmetWithNames from '../assets/helmets-1-name-blue.png';

const TeamName = ({next}) => {
    return (
        <article className="flex-col h-screen">
            <section className="flex-1 mx-2">
                <img className="w-full md:w-9/12" src={HelmetWithNames} alt="football helmets" />
            </section>
            <section className="flex-3 flex flex-col items-center">
                <h1 className="mt-4 mb-2 font-black text-2xl">Name your Team</h1>
                <input type="text" className="w-2/3  py-2"></input>
            </section>
            <section className="flex-3">
                <NextButton title="Let's Play, Pick your Players" next ={next} />
            </section>
        </article>
    )
};

export default TeamName;