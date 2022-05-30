import { useParams } from "react-router-dom";

export default function useCharacter() {
  const { identifier } = useParams();
  let alias;
  let urlImagen;
  let description;
  let name;
  let exists = true;

  switch (identifier) {
    case "hola-mundo":
      alias = "Hola Mundo";
      name = "Nicolas Schurmann";
      description =
        "Desarrollador de software senior, instructor de tecnologías para el desarrollo web y móvil.";
      urlImagen = "https://i.ytimg.com/vi/iTxYYr35nTM/hqdefault.jpg";
      break;
    case "hdeleon":
      alias = "Hdeleon.net";
      name = "Hector de León";
      description = `Ingeniero en computación, aficionado a la inteligencia artificial, y el
      desarrollo de sistemas que optimicen los procesos de las empresas. Tengo más de 20 años
      programando, y es mi profesión y hobby.`;
      urlImagen =
        "https://pbs.twimg.com/profile_images/1523017006236291072/NihCEM3d_400x400.jpg";
      break;
    case "soy-dalto":
      alias = "Soy Dalto";
      name = "Lucas Dalto";
      description = `Programador de Argentina, Dalto te va a mostrar la programación y el
      desarrollo de una forma distinta, aprendé a programar con mis cursos de programación y
      desarrollo web. Actualmente Soy Dalto es el canal de programación y desarrollo mas grande
      de Argentina.`;
      urlImagen =
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.AEwm-M4vlhLN3JqYfhZD-gGQGQ%26pid%3DApi&f=1";
      break;
    case "bettatech":
      alias = "BettaTech";
      name = "Martín";
      description = "Ingeniero de software y creador de contenido";
      urlImagen =
        "https://pbs.twimg.com/profile_images/1528825431864000513/uHCkn7yc_400x400.jpg";
      break;
    case "midudev":
      alias = "Midudev";
      name = "Miguel Ángel Durán";
      description =
        "Desarrollador Full Stack 🧑‍💻 • Amante de las tecnologías web y JavaScript. • ⭐Reconocido como Google Developer Expert y GitHub Star •";
      urlImagen =
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F1561955%3Fv%3D4%3Fs%3D400&f=1&nofb=1";
      break;
    default:
      exists = false;
      break;
  }
  return { alias, name, description, urlImagen, exists };
}
