import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { FontAwesomeIcon } from './components/FontAwesomeIcons'
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/gallery" element={<Gallery />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
