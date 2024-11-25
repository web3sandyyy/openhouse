import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import CreateQuiz from "./pages/CreateQuiz";
import CreateVoting from "./pages/CreateVoting";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/create-quiz" element={<CreateQuiz />} />
        <Route path="/admin/create-voting" element={<CreateVoting />} />
      </Routes>
    </Router>
  );
}

export default App;
