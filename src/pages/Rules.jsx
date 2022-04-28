function Rules() {
    return (
        <div className="container-body centered">
            <div className="bg-skin-fillmuted w-11/12 centered flex-col rounded-md p-8 md:w-8/12 lg:w-7/12">
                <h2 className="text-2xl box-border mb-6">Rules</h2>
                <div>
                    <ul className="list-disc leading-10">
                        <li>
                            You will get 30 seconds to select an option for each question.
                        </li>
                        <li>
                            Otherwise that question will be skipped and point won't be
                            considered.
                        </li>
                        <li>Each right answer scores 10 points.</li>
                        <li>
                            Each multiple choice question has only one correct answer.
                        </li>
                        <li>
                            You cannot go back to the previous question once the question
                            is answered.
                        </li>
                    </ul>
                </div>
                <button className="button-cta mt-4">Let's start</button>
            </div>
        </div>
    );
}

export { Rules };
