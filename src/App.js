import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import {
    Home,
    Login,
    Explore,
    Signup,
    Rules,
    QuestionPage,
    Results,
    Leaderboard,
    UserProfile,
} from "./pages";

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
                <Route path="/results" element={<Results />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/user" element={<UserProfile />} />
            </Routes>
        </div>
    );
}

export default App;
