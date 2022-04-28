import { QuizResultQuestion } from "../components";

function Results() {
    return (
        <div className="container-body centered">
            <div className="flex-col my-8 md:w-6/12">
                <div className="text-center font-semibold">
                    <p className="text-3xl text-skin-primary font-medium">Quiz results</p>
                    <p className="my-4 text-xl">You could do better!</p>
                    <p className="my-4 text-xl">You scored 0/100</p>
                </div>
                <QuizResultQuestion />
                <QuizResultQuestion />
                <QuizResultQuestion />
                <QuizResultQuestion />
                <div className="centered mt-16">
                    <button className="button-cta">Back to home</button>
                </div>
            </div>
        </div>
    );
}

export { Results };
