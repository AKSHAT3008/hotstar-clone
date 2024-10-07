import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import Details from "./components/Details/Details";
import Genres from "./components/Genres/Genres";
import Language from "./components/Language/Language";
import Channel from "./components/Channel/Channel";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type/:id" element={<Details />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/language" element={<Language />} />
          <Route path="/channel" element={<Channel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
