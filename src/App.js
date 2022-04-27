import tw from "tailwind-styled-components";

function App() {
    return (
        <div className="App text-red-300">
            <HEADER>New</HEADER>
        </div>
    );
}

const HEADER = tw.h1`underline text-2xl`;

export default App;
