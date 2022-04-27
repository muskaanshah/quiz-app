import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home } from "./pages";
import { Explore } from "./pages/Explore/Explore";

function App() {
    return (
        <div className="App bg-skin-fill text-skin-base font-basic">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Explore />} />
            </Routes>
        </div>
    );
}

export default App;
