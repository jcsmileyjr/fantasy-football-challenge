
const NextButton = ({next, title}) => {
    return(
        <section className="text-center flex-3 flex justify-center small-phone:mt-0 mt-16">
            <button className="bg-blue-900 text-white p-2 md:p-4 rounded-2xl md:text-4xl" type="button" onClick={next}>{title}</button>
        </section>
    );
}

export default NextButton;