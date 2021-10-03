import Confetti from 'react-confetti'
import Trophy from '../assets/trophy.jpg';

const Won = ({restart, generateStats}) => {
    let seasonSummary = generateStats();
    const width = window.innerWidth;
    const height = window.innerHeight;
    return(
        <article className="h-screen flex flex-col ">
            <Confetti width={width} height={height} />
            <img src={Trophy} className="md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 md:mx-auto" alt="Trophy" />
            <p className="mt-4 font-bold text-3xl md:text-6xl text-center text-white">Congrats</p>
            <p className="mt-2 mx-4 text-center text-xl md:text-3xl text-yellow-300">You are the Champion!!!</p>
            <section>
                <h3 className="mt-4 font-bold text-white text-xl md:text-4xl text-center underline">Team Highlights </h3>
                <ol className="mx-2 lg:mx-4 text-sm md:text-2xl lg:text-3xl xl:mx-10 mt-2">
                {seasonSummary.length === 0 &&
                <p className="text-center text-white">None</p>

                }
                {seasonSummary.map( (stat, index )=> {
                    return(
                        <li className="text-white" key={index}>{index + 1}. {stat}</li>
                    ) 
                })

                }
                </ol>
            </section>
            <button type="button" className="mt-12 font-bold text-blue-900 bg-white rounded-2xl md:text-4xl mx-4 lg:mx-60 xl:mx-80 2xl:mx-96" onClick={restart}>Play Again</button>
        </article>
    );
};

export default Won;