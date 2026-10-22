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
      titulo: "Desarrollo Web",
      descripcion: "Aprende a crear páginas web modernas y atractivas.",
    },
    {
      id: 2,
      titulo: "Bases de Datos",
      descripcion: "Aprende a gestionar y manipular bases de datos.",
    },
    {
      id: 3,
      titulo: "Inteligencia Artificial",
      descripcion: "Aprende a desarrollar soluciones basadas en inteligencia artificial.",
    },
    {
      id: 4,
      titulo: "programación con java",
      descripcion: "aprende a desarrollar aplicaciones y soluciones mediante el lenguaje java",
    },
    {
      id: 5,
      titulo: "curso de python",
      descripcion: "aprende a desarrollar aplicaciones mediante el entorno de python",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Header />
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
        <div style={{ margin: "20px auto", maxWidth: "600px", textAlign: "center" }}>
          <h2>Nuestros cursos</h2>
          {listaCursos.map((curso) => (
            <Curso
              key={curso.id}
              nombre={curso.titulo}
              titulo={curso.titulo}
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