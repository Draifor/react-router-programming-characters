import "./character.css";
import useCharacter from "../../hooks/useCharacter";

import Button from "../../components/Button/Button";
import Error from "../Error";

export default function Character() {
  const { alias, urlImagen, description, name, exists } = useCharacter();

  return (
    <section className={`character ${!exists && "error"}`}>
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
