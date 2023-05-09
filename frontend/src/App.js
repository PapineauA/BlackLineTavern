import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Menu from "./components/menu";
import Catering from "./components/catering";
import Events from "./components/events";
import Contact from "./components/contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/menu" Component={Menu} />
          <Route exact path="/catering" Component={Catering} />
          <Route exact path="/events" Component={Events} />
          <Route exact path="/contact" Component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
