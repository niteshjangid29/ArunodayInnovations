import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { FontAwesomeIcon } from "./components/FontAwesomeIcons";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/gallery" element={<Gallery />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/careers" element={<Careers />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
