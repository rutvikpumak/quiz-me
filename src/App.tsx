import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./component";
import { Home, Question, Result, Rule, SignIn, SignUp, UserProfile } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rule />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Result />} />
        <Route path="/user-profile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
