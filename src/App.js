import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { Home, Login, Explore, Signup, Rules, QuestionPage } from "./pages";

function App() {
    return (
        <div className="App bg-skin-fill text-skin-base font-basic">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Explore />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="rules" element={<Rules />} />
                <Route path="/question" element={<QuestionPage />} />
            </Routes>
        </div>
    );
}

export default App;
