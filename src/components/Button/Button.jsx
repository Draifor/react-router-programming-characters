import { useNavigate } from "react-router-dom";

export default function Button({ path, children }) {
    const navigate = useNavigate();
  return (
    <button onClick={() => navigate(path)} >{children}</button>
  )
}
