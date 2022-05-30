import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import CharactersList from "./pages/CharactersList/CharactersList";
import Character from "./pages/Character/Character";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <h1>Personajes del mundo de la programación</h1>

        <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path="/:identifier" element={<Character />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
