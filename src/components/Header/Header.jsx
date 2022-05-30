import "./header.css";
import logo from "./logo.svg";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="Logo React" />
      <h2>Práctica React Router</h2>
    </header>
  );
}
