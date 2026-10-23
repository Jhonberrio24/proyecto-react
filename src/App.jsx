import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import RegistroAprendiz from "./components/RegistroAprendiz";
import Footer from "./components/Footer";
import GestionCursos from "./components/GestionCursos";
import Inicio from "./pages/Inicio";
import Cursos from "./pages/Cursos";
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
          padding: "15px",
          backgroundColor: "#161b22",
          borderBottom: "1px solid #30363d",
          textAlign: "center",
          marginBottom: "20px"
        }}>
          <Link to="/" style={{ color: "#ffffff", marginRight: "20px", textDecoration: "none", fontWeight: "bold" }}>
            Inicio
          </Link>
          <Link to="/cursos" style={{ color: "#ffffff", marginRight: "20px", textDecoration: "none", fontWeight: "bold" }}>
            Cursos
          </Link>
          <Link to="/gestion" style={{ color: "#ffffff", marginRight: "20px", textDecoration: "none", fontWeight: "bold" }}>
            Gestión Cursos
          </Link>
          <Link to="/registro" style={{ color: "#ffffff", textDecoration: "none", fontWeight: "bold" }}>
            Registro
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos cursos={cursos} onInscribir={handleInscribir} />} />
          <Route path="/gestion" element={<GestionCursos cursos={cursos} setCursos={setCursos} />} />
          <Route path="/registro" element={<RegistroAprendiz />} />
        </Routes>

        <hr style={{ margin: "30px 0", borderColor: "#30363d" }} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;