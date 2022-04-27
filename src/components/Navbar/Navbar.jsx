import tw from "tailwind-styled-components";

function Navbar() {
    return (
        <NAVBAR>
            <LOGO>NEW</LOGO>
            <ICONSWRAPPER>
                <button>
                    <span className="material-icons">light_mode</span>
                </button>
                <button>
                    <span className="material-icons">emoji_events</span>
                </button>
                <button>
                    <span className="material-icons">person</span>
                </button>
            </ICONSWRAPPER>
        </NAVBAR>
    );
}

const NAVBAR = tw.div`h-16 shadow-lg shadow-emerald-600/50 sticky top-0 flex items-center px-4 z-10 left-0 right-0 bg-skin-fill`;
const LOGO = tw.div`text-skin-primarylight text-2xl grow`;
const ICONSWRAPPER = tw.div`flex items-center gap-6`;

export { Navbar };
