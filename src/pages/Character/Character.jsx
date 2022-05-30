import useCharacter from "../../hooks/useCharacter";

import Button from "../../components/Button/Button";
import Error from "../../components/Error";

export default function Character() {
  const { alias, urlImagen, description, name, exists } = useCharacter();

  return (
    <section className="character">
      {exists ? (
        <>
          <img src={urlImagen} alt={name} />
          <div>
            <h3>{name}</h3>
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
