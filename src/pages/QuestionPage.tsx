function QuestionPage() {
    return (
        <div className="container-body centered">
            <div className="w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12">
                <div className="flex justify-between mb-8">
                    <p>Question 1</p>
                    <p className="centered items-center gap-2">
                        <span className="material-icons text-xl">timer</span>{" "}
                        <span>59s</span>
                    </p>
                </div>
                <p>
                    1. The first man made object to leave the solar system and enter
                    interstellar space was
                </p>
                <div>
                    <p className="px-4 py-3 my-4 bg-skin-fillmuted rounded-md cursor-pointer hover:bg-skin-primary">
                        Option 1 jikcmrec vijrmdvkrdv irkmvckrv
                    </p>
                    <p className="px-4 py-3 my-4 bg-skin-fillmuted rounded-md cursor-pointer hover:bg-skin-primary">
                        Option 2 jikcmrec vijrmdvkrdv irkmvckrv
                    </p>
                    <p className="px-4 py-3 my-4 bg-skin-fillmuted rounded-md cursor-pointer hover:bg-skin-primary">
                        Option 3 jikcmrec vijrmdvkrdv irkmvckrv
                    </p>
                    <p className="px-4 py-3 my-4 bg-skin-fillmuted rounded-md cursor-pointer hover:bg-skin-primary">
                        Option 4 jikcmrec vijrmdvkrdv irkmvckrv
                    </p>
                </div>
                <div className="flex justify-between mt-8">
                    <button className="border-red-700 border text-red-700 py-2 px-4 rounded-md hover:text-skin-base hover:bg-red-700">
                        Quit
                    </button>
                    <button className="button-cta py-2 px-4">Next</button>
                </div>
            </div>
        </div>
    );
}

export { QuestionPage };
