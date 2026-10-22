import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RegistroAprendiz from "./components/RegistroAprendiz";
import PresentacionAprendiz from "./components/PresentacionAprendiz";
import Curso from "./components/Curso";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [mostrarCursos, setMostrarCursos] = useState(false);

  const listaCursos = [
    {
      id: 1,
      nombre: "Desarrollo Web",
      descripcion: "Aprende a crear páginas web modernas y atractivas.",
    },
    {
      id: 2,
      nombre: "Bases de Datos",
      descripcion: "Aprende a gestionar y manipular bases de datos.",
    },
    {
      id: 3,
      nombre: "Inteligencia Artificial",
      descripcion: "Aprende a desarrollar soluciones basadas en inteligencia artificial.",
    },
    {
      id: 4,
      nombre: "programación con java",
      descripcion: "aprende a desarrollar aplicaciones y soluciones mediante el lenguaje java",
    },
    {
      id: 5,
      nombre: "curso de python",
      descripcion: "aprende a desarrollar aplicaciones mediante el entorno de python",
    },
    {
      id: 6,
      nombre: "HTML y CSS",
      descripcion: "Aprende a crear páginas web.",
    },
  ];

  return (
    <div className="App">
      {/* Header va primero arriba del todo */}
      <Header />
      <Navbar />
      <RegistroAprendiz />

      <hr style={{ margin: "30px 0", borderColor: "#444" }} />

      <PresentacionAprendiz />

      <hr style={{ margin: "30px 0", borderColor: "#444" }} />

      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button
          onClick={() => setMostrarCursos(!mostrarCursos)}
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          {mostrarCursos ? "Ocultar cursos" : "Ver cursos"}
        </button>
      </div>

      {mostrarCursos && (
        <div className="lista-cursos">
          <h2>NUESTROS CURSOS</h2>
          {listaCursos.map((curso) => (
            <Curso
              key={curso.id}
              nombre={curso.nombre}
              descripcion={curso.descripcion}
            />
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;