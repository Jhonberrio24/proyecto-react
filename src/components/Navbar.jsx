import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/inicio">Inicio</Link></li>
        {/* 👇 Aquí cambiaste el texto para que diga solo "Cursos" */}
        <li><Link to="/cursos">Cursos</Link></li>
        <li><Link to="/">Gestión Cursos</Link></li>
        <li><Link to="/registros">Registro</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;