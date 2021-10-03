import Helmets from '../assets/football-1.jpg';

const Lose = ({team, restart, games, generateStats}) => {
    let seasonSummary = generateStats();
    return(
        <article className="h-screen flex flex-col ">
            <img src={Helmets} alt="blue and black clashing football helmets" className="lg:w-7/12 xl:w-6/12 2xl:w-5/12 lg:mx-auto" />
            <h1 className="mt-4 font-bold text-white text-3xl md:text-6xl text-center">Game Over</h1>
            {games.length === 1
                ?<p className="mt-2 mx-4 text-center text-yellow-300 text-xl md:text-2xl lg:text-4xl">Team "{team}" lose the Championship.</p>
                :<p className="mt-2 mx-4 text-center text-yellow-300 text-xl md:text-2xl lg:text-4xl">Team "{team}" didn't make the play-offs.</p>
            }
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
            
            <button type="button" className="mt-12 font-bold text-blue-900 bg-white rounded-2xl md:text-4xl mx-4 md:mx-20 lg:mx-40 xl:mx-60 md:py-2 lg:py-4" onClick={restart}>Play Again</button>
        </article>
    );
}

export default Lose;