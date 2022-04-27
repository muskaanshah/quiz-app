function LeaderboardTable() {
    return (
        <div className="centered flex-col w-full sm:w-10/12 md:w-8/12 my-8">
            <p className="my-4">Category: 3 Idiots</p>
            <div class="table w-full">
                <div class="table-header-group bg-skin-primary">
                    <div class="table-row">
                        <div class="table-cell text-center py-2">Rank</div>
                        <div class="table-cell text-center py-2">Name</div>
                        <div class="table-cell text-center py-2">Score</div>
                    </div>
                </div>
                <div class="table-row-group">
                    <div class="table-row">
                        <div class="table-cell text-center py-2">1</div>
                        <div class="table-cell text-center py-2">Malcolm Lockyer</div>
                        <div class="table-cell text-center py-2">50</div>
                    </div>
                    <div class="table-row">
                        <div class="table-cell text-center py-2">2</div>
                        <div class="table-cell text-center py-2">The Eagles</div>
                        <div class="table-cell text-center py-2">80</div>
                    </div>
                    <div class="table-row">
                        <div class="table-cell text-center py-2">3</div>
                        <div class="table-cell text-center py-2">
                            Earth, Wind, and Fire
                        </div>
                        <div class="table-cell text-center py-2">90</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { LeaderboardTable };
