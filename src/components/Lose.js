import Helmets from '../assets/football-1.jpg';

const Lose = ({team, restart, games}) => {
    return(
        <article className="h-screen flex flex-col ">
            <img src={Helmets} alt="blue and black clashing football helmets" className="lg:w-7/12 xl:w-6/12 2xl:w-5/12 lg:mx-auto" />
            <h1 className="mt-4 font-bold text-white text-3xl md:text-6xl text-center">Game Over</h1>
            {games.length === 1 && (games.home === team || games.visiting === team)
                ?<p className="mt-2 mx-4 text-center text-yellow-300 text-xl md:text-2xl lg:text-4xl">Team "{team}" lose the Championship.</p>
                :<p className="mt-2 mx-4 text-center text-yellow-300 text-xl md:text-2xl lg:text-4xl">Team "{team}" didn't make the play-offs.</p>
            }
            
            <button type="button" className="mt-12 font-bold text-blue-900 bg-white rounded-2xl md:text-4xl mx-4 md:mx-20 lg:mx-40 xl:mx-60 md:py-2 lg:py-4" onClick={restart}>Play Again</button>
        </article>
    );
}

export default Lose;