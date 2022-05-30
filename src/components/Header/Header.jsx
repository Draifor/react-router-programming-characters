import "./header.css";
import logo from "./logo.svg";

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="Logo React" />
      <h1>Práctica React Router</h1>
    </header>
  );
}
