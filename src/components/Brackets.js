import BlueHelmet from '../assets/blue-helmet.png';
import BlackHelmet from '../assets/black-helmet.png';

const Bracket = () => {
    return(
        <section className="flex justify-around items-center flex-row ">
            <img className="w-1/3" src={BlueHelmet} alt="Blue football helmet" />
            <strong className="text-3xl">VS</strong>
            <img className="w-1/3" src={BlackHelmet} alt="Black football helmet" />
        </section>
    );
}

const Brackets = () => {
    return(
        <article>
            <Bracket />
        </article>
    );
}

export default Brackets;