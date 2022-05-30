import './charactersList.css';import { Link } from "react-router-dom";

export default function CharactersList() {
  return (
    <article className="characters">
      <nav>
        <ul className='characters-list'>
          <li>
            <Link to="/hola-mundo">Hola Mundo</Link>
          </li>
          <li>
            <Link to="/hdeleon">H de Leon</Link>
          </li>
          <li>
            <Link to="/soy-dalto">Soy Dalto</Link>
          </li>
          <li>
            <Link to="/bettatech">BettaTech</Link>
          </li>
          <li>
            <Link to="/midudev">Midudev</Link>
          </li>
        </ul>
      </nav>
    </article>
  );
}
