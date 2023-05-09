import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
