import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Login, Explore, Signup } from "./pages";

function App() {
    return (
        <div className="App bg-skin-fill text-skin-base font-basic">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Explore />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
}

export default App;
