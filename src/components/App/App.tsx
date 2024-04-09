import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "../../utils/ScrollToTop";

import Header from "../Header/Header";
import { MainPage, GamePage, DevelopersPage, DeveloperPage } from "../pages";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="wrapper">
        <Header />
        <main className="page">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/game/:gameId/*" element={<GamePage />} />
            <Route path="/developers" element={<DevelopersPage/>}/>
            <Route path="/developers/:developerId" element={<DeveloperPage/>}/> 
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
