import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", backgroundColor: "#161b22", borderBottom: "1px solid #30363d", textAlign: "center", marginBottom: "20px" }}>
      
      <Link to="/" style={{ color: "#ffffff", marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>Inicio</Link>
      <Link to="/cursos" style={{ color: "#ffffff", marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>Cursos</Link>
      <Link to="/gestion" style={{ color: "#ffffff", marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>Gestión Cursos</Link>
      <Link to="/registro" style={{ color: "#ffffff", marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>Registro</Link>
      <Link to="/usuarios" style={{ color: "#ffffff", marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>Usuarios</Link>
      
    
      <Link to="/aprendices" style={{ color: "#ffb703", marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>Aprendices</Link>
      <Link to="/instructores" style={{ color: "#ffb703", marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>Instructores</Link>
      <Link to="/fichas" style={{ color: "#ffb703", marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>Fichas</Link>
      <Link to="/competencias" style={{ color: "#ffb703", marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>Competencias</Link>
      <Link to="/evaluaciones" style={{ color: "#ffb703", marginRight: "15px", textDecoration: "none", fontWeight: "bold" }}>Evaluaciones</Link>

      <Link to="/acerca-de" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }}>Acerca de</Link>
    </nav>
  );
}

export default Navbar;