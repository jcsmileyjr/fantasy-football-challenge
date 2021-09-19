
import Trophy from '../assets/trophy.jpg';

const Won = ({restart}) => {
    return(
        <article className="h-screen flex flex-col ">
            <img src={Trophy} className="" alt="Trophy" />
            <p className="mt-4 font-bold text-3xl text-center">Congrats</p>
            <p className="mt-2 mx-4 text-center text-xl">You are the Champion!!!</p>
            <button type="button" className="mt-12 font-bold bg-blue-700 text-white rounded-2xl md:text-4xl mx-4" onClick={restart}>Play Again</button>
        </article>
    );
};

export default Won;