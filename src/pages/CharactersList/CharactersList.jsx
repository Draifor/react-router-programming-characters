import "./charactersList.css";
import Button from "../../components/Button/Button";
export default function CharactersList() {
  return (
    <article className="characters">
      <nav>
        <ul className="characters-list">
          <Button path="/hola-mundo">
            Hola Mundo
          </Button>
          <Button path="/hdeleon">
            H de Leon
          </Button>
          <Button path="/soy-dalto">
            Soy Dalto
          </Button>
          <Button path="/bettatech">
            BettaTech
          </Button>
          <Button path="/midudev">
            Midudev
          </Button>
        </ul>
      </nav>
    </article>
  );
}
