function LeaderboardTable() {
    return (
        <div className="centered flex-col w-full sm:w-10/12 md:w-8/12 my-8">
            <p className="my-4">Category: 3 Idiots</p>
            <div className="table w-full">
                <div className="table-header-group bg-skin-primary">
                    <div className="table-row">
                        <div className="table-cell text-center py-2">Rank</div>
                        <div className="table-cell text-center py-2">Name</div>
                        <div className="table-cell text-center py-2">Score</div>
                    </div>
                </div>
                <div className="table-row-group">
                    <div className="table-row">
                        <div className="table-cell text-center py-2">1</div>
                        <div className="table-cell text-center py-2">Malcolm Lockyer</div>
                        <div className="table-cell text-center py-2">50</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell text-center py-2">2</div>
                        <div className="table-cell text-center py-2">The Eagles</div>
                        <div className="table-cell text-center py-2">80</div>
                    </div>
                    <div className="table-row">
                        <div className="table-cell text-center py-2">3</div>
                        <div className="table-cell text-center py-2">
                            Earth, Wind, and Fire
                        </div>
                        <div className="table-cell text-center py-2">90</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { LeaderboardTable };
