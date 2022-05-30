import "./character.css";
import useCharacter from "../../hooks/useCharacter";
import { Link } from "react-router-dom";

import Button from "../../components/Button/Button";
import Error from "../../components/Error";

export default function Character() {
  const { alias, urlImagen, description, name, exists } = useCharacter();

  return (
    <section className="character">
      {exists ? (
        <>
          <h3>{name}</h3>
          <img src={urlImagen} alt={name} />
          <div>
            <p>Más conocido como {alias}</p>
            <p>{description}</p>
          </div>
          <Button path="/">Regresar</Button>
        </>
      ) : (
        <Error />
      )}
    </section>
  );
}
