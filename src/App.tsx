import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CharacterDetails from "./pages/CharacterDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CharacterDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
