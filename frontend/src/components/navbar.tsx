import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/desafio1">Desafio 1</Link>
      <Link to="/desafio2">Desafio 2</Link>
      <Link to="/desafio3">Desafio 3</Link>
      <Link to="/desafio4">Desafio 4</Link>
    </nav>
  );
}
