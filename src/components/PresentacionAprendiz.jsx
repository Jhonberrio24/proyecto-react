import { useState } from "react";

function PresentacionAprendiz() {
  const [nombre, setNombre] = useState("");
  const [curso, setCurso] = useState("");
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje
  const [mostrarInformacion, setMostrarInformacion] = useState(false);
  const programa = "Desarrollo de Software";

  function limpiarCampos() {
    setNombre("");
    setCurso("");
  }

  function manejarEnvio(evento) {
    evento.preventDefault();

    if (nombre.trim() === "" || curso.trim() === "") {
      setMensaje("Completa los campos obligatorios antes de continuar.");
      return;
    }

    setMensaje("✓ Presentación enviada correctamente.");
    limpiarCampos();
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
        <select
          id="cursoPresentacion"
          value={curso}
          onChange={(evento) => setCurso(evento.target.value)}
        >
          <option value="">Selecciona un curso</option>
          <option value="Desarrollo Web">Desarrollo Web</option>
          <option value="React">React</option>
          <option value="Bases de Datos">Bases de Datos</option>
          <option value="Inteligencia Artificial">Inteligencia Artificial</option>
          <option value="Programación con Java">Programación con Java</option>
          <option value="Curso de Python">Curso de Python</option>
        </select>

        <br />
        <br />

        <button type="submit">Enviar formulario</button>
        <button
          type="button"
          onClick={() => {
            limpiarCampos();
            setMensaje("");
          }}
        >
          Limpiar formulario
        </button>
      </form>

      {mensaje && <p style={{ marginTop: "15px", fontWeight: "bold" }}>{mensaje}</p>}

      <button
        type="button"
        onClick={() => setMostrarInformacion(!mostrarInformacion)}
        aria-expanded={mostrarInformacion}
        aria-controls="informacionAprendiz"
      >
        {mostrarInformacion ? "Ocultar información" : "Mostrar información"}
      </button>

      {mostrarInformacion && (
        <div id="informacionAprendiz">
          <h3>Mi perfil de aprendiz</h3>
          <p>Nombre: {nombre || "Sin completar"}</p>
          <p>Curso de interés: {curso || "Sin seleccionar"}</p>
          <p>Programa: {programa}</p>
        </div>
      )}
    </div>
  );
}

export default PresentacionAprendiz;