import tw from "tailwind-styled-components";
import { homeillustration } from "../../assets";
import "./home.css";

function Home() {
    return (
        <BODYCONTAINER>
            <HOMEWRAPPER>
                <CONTENTWRAPPER>
                    <p className="mb-4">You think you're a Bollywood fan?</p>
                    <p className="mb-4">
                        Explore the variety of quizes that we have and find out
                    </p>
                    <button className="button-cta">Explore</button>
                </CONTENTWRAPPER>
                <IMGWRAPPER>
                    <img
                        className="max-w-70 sm:max-w-full"
                        src={homeillustration}
                        alt="illustration"
                    />
                </IMGWRAPPER>
            </HOMEWRAPPER>
        </BODYCONTAINER>
    );
}

const BODYCONTAINER = tw.div`h-[calc(100vh-4rem)] p-4 box-border`;
const HOMEWRAPPER = tw.div`grid grid-cols-1 sm:grid-cols-2`;
const IMGWRAPPER = tw.div`landing-page-img centered`;
const CONTENTWRAPPER = tw.div`centered flex-col h-full px-8 box-border`;

export { Home };
