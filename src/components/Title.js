
import BlueHelmets from '../assets/helmets-1-title-blue-a.png';
import NextButton from './NextButton';

const Title = ({next}) => {
    return(
        <article className="flex-col h-screen">
            <header className="flex-1">                
                <img className="w-full md:w-9/12" src={BlueHelmets} alt="football helmets" />
            </header>
            <section className="ml-4 md:mx-24 flex-2">
                <p className="text-gray-900 mb-10 font-bold small-phone:text-base text-xl lg:text-4xl"><span className="text-blue-900">Build</span> your Team</p>
                <p className="text-gray-900 mb-10 font-bold small-phone:text-lg text-2xl lg:text-5xl"><span className="text-blue-900">Play</span> in the Playoffs</p>
                <p className="text-gray-900 mb-8 font-bold small-phone:text-xl text-3xl lg:text-6xl"><span className="text-blue-900">Win</span> the Championship</p>
            </section>
            <NextButton  title="Party Time, Name your Team" next={next}></NextButton>
        </article>
    );
}

export default Title;