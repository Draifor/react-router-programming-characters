import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import CharactersList from "./components/CharactersList/CharactersList";
import Character from "./pages/Character/Character";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <h2>Personajes del mundo de la programación</h2>

        <Routes>
          <Route path="/" element={<CharactersList />} />
          <Route path="/:identifier" element={<Character />} />
          <Route path='/*' element={<Error />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
