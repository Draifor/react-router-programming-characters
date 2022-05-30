import "./button.css";
import { Link } from "react-router-dom";

export default function Button({ path, children }) {
  return (
    <Link to={path}>
      <button className="button">{children}</button>
    </Link>
  );
}
