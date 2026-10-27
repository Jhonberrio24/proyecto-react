import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import RegistroAprendiz from "./components/RegistroAprendiz";
import Footer from "./components/Footer";
import GestionCursos from "./components/GestionCursos";
import Inicio from "./pages/Inicio";
import Cursos from "./pages/Cursos";
import AcercaDe from "./pages/AcercaDe";
import Usuarios from "./pages/Usuarios";
import Aprendices from "./pages/Aprendices";
import Instructores from "./pages/Instructores";
import Fichas from "./pages/Fichas";
import Competencias from "./pages/Competencias";
import Evaluaciones from "./pages/Evaluaciones";
import "./App.css";

function App() {
  const [cursos, setCursos] = useState([
    {
      id: 1,
      titulo: "Desarrollo Web",
      nombre: "Desarrollo Web",
      descripcion: "Aprende a crear páginas web modernas y atractivas.",
      informacion: "HTML, CSS y JavaScript desde cero.",
      inscritos: 0,
    },
    {
      id: 2,
      titulo: "Bases de Datos",
      nombre: "Bases de Datos",
      descripcion: "Aprende a gestionar y manipular bases de datos.",
      informacion: "Fundamentos de SQL y diseño relacional.",
      inscritos: 0,
    },
    {
      id: 3,
      titulo: "Inteligencia Artificial",
      nombre: "Inteligencia Artificial",
      descripcion: "Aprende a desarrollar soluciones basadas en inteligencia artificial.",
      informacion: "Conceptos de Machine Learning y Python.",
      inscritos: 0,
    },
    {
      id: 4,
      titulo: "Programación con Java",
      nombre: "Programación con Java",
      descripcion: "Aprende a desarrollar aplicaciones y soluciones mediante el lenguaje java.",
      informacion: "Programación Orientada a Objetos.",
      inscritos: 0,
    },
    {
      id: 5,
      titulo: "Curso de Python",
      nombre: "Curso de Python",
      descripcion: "Aprende a desarrollar aplicaciones mediante el entorno de python.",
      informacion: "Sintaxis básica y proyectos prácticos.",
      inscritos: 0,
    },
  ]);

  const handleInscribir = (id) => {
    setCursos(
      cursos.map((curso) =>
        curso.id === id ? { ...curso, inscritos: curso.inscritos + 1 } : curso
      )
    );
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <nav style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          flexWrap: "wrap",
          padding: "15px 20px",
          backgroundColor: "#161b22",
          borderBottom: "1px solid #30363d",
          marginBottom: "20px"
        }}>
          <Link to="/" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold", fontSize: "0.9rem" }}>Inicio</Link>
          <Link to="/cursos" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold", fontSize: "0.9rem" }}>Cursos</Link>
          <Link to="/gestion" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold", fontSize: "0.9rem" }}>Gestión Cursos</Link>
          <Link to="/registro" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold", fontSize: "0.9rem" }}>Registro</Link>
          <Link to="/usuarios" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold", fontSize: "0.9rem" }}>Usuarios</Link>
          <Link to="/aprendices" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold", fontSize: "0.9rem" }}>Aprendices</Link>
          <Link to="/instructores" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold", fontSize: "0.9rem" }}>Instructores</Link>
          <Link to="/fichas" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold", fontSize: "0.9rem" }}>Fichas</Link>
          <Link to="/competencias" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold", fontSize: "0.9rem" }}>Competencias</Link>
          <Link to="/evaluaciones" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold", fontSize: "0.9rem" }}>Evaluaciones</Link>
          <Link to="/acerca-de" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold", fontSize: "0.9rem" }}>Acerca de</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos cursos={cursos} onInscribir={handleInscribir} />} />
          <Route path="/gestion" element={<GestionCursos cursos={cursos} setCursos={setCursos} />} />
          <Route path="/registro" element={<RegistroAprendiz />} />
          <Route path="/usuarios" element={<Usuarios />} />

         
          <Route path="/aprendices" element={<Aprendices />} />
          <Route path="/instructores" element={<Instructores />} />
          <Route path="/fichas" element={<Fichas />} />
          <Route path="/competencias" element={<Competencias />} />
          <Route path="/evaluaciones" element={<Evaluaciones />} />

          <Route path="/acerca-de" element={<AcercaDe />} />
        </Routes>

        <hr style={{ margin: "30px 0", borderColor: "#30363d" }} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;