import { homeillustration } from "../assets";

function Home() {
    return (
        <div className="container-body">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="centered flex-col h-full px-8 box-border">
                    <p className="mb-4">You think you're a Bollywood fan?</p>
                    <p className="mb-4">
                        Explore the variety of quizes that we have and find out
                    </p>
                    <button className="button-cta">Explore</button>
                </div>
                <div className="landing-page-img centered">
                    <img
                        className="max-w-70 sm:max-w-full"
                        src={homeillustration}
                        alt="illustration"
                    />
                </div>
            </div>
        </div>
    );
}

export { Home };
