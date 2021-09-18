
const NextButton = ({next, title, enable=false}) => {
    return(
        <section className="text-center flex-3 flex justify-center small-phone:mt-8 mt-16">
            <button disabled={enable} className="font-bold bg-blue-700 text-white p-2 md:p-4 rounded-2xl md:text-4xl" type="button" onClick={next}>{title}</button>
        </section>
    );
}

export default NextButton;