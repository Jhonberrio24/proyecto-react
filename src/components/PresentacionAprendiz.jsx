import { useState } from "react";

function PresentacionAprendiz() {
  const [nombre, setNombre] = useState("");
  const [curso, setCurso] = useState("");
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje

  function manejarEnvio(evento) {
    evento.preventDefault();

    if (nombre.trim() === "" || curso.trim() === "") {
      setMensaje("Por favor, completar los campos.");
      return;
    }

    setMensaje(`¡Formulario enviado correctamente! Nombre: ${nombre}, Curso: ${curso}`);
    

    setNombre("");
    setCurso("");
  }

  return (
    <div>
      <h2>Mi presentación</h2>
      <br />

      <form onSubmit={manejarEnvio}>
        <label htmlFor="nombrePresentacion">Escribe tu nombre:</label>
        <br />
        <input
          id="nombrePresentacion"
          type="text"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
          placeholder="Ejemplo: Gabriel"
        />

        <br />
        <br />

        <label htmlFor="cursoPresentacion">¿Qué curso te interesa?</label>
        <br />
        <input
          id="cursoPresentacion"
          type="text"
          value={curso}
          onChange={(evento) => setCurso(evento.target.value)}
          placeholder="Ejemplo: React"
        />

        <br />
        <br />

        <button type="submit">Enviar formulario</button>
      </form>

      
      {mensaje && <p style={{ marginTop: "15px", fontWeight: "bold" }}>{mensaje}</p>}

      <h3>Mis datos</h3>
      <p>Mi nombre es: {nombre}</p>
      <p>Me interesa aprender: {curso}</p>
    </div>
  );
}

export default PresentacionAprendiz;