import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import { GamePage } from "../pages";

import SearchSection from "../SearchSection/SearchSection";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Header />
        <main className="page">
          <Routes>
            <Route path="/" element={<SearchSection />} />
            <Route path="/game/:gameId/*" element={<GamePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
