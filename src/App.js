import "./App.css";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import { GiveAccess } from "./components/GiveAccess";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/give-access" element={<GiveAccess />} />
      </Routes>
    </div>
  );
}

export default App;
