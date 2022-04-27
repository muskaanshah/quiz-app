import { LeaderboardTable } from "../components/LeaderboardTable";

function Leaderboard() {
    return (
        <div className="container-body centered flex-col">
            <p className="centered text-skin-primary gap-2">
                <span className="material-icons text-3xl">emoji_events</span>
                <span className="text-2xl font-semibold">Leaderboard</span>
            </p>
            <LeaderboardTable />
            <LeaderboardTable />
            <LeaderboardTable />
            <LeaderboardTable />
        </div>
    );
}

export { Leaderboard };
