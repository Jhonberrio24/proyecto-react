import { useState } from "react";

function PresentacionAprendiz() {
    const [nombre, setNombre] = useState("");
    const [curso, setCurso] = useState("");

    function manejarEnvio(evento) {
        eventoinicializar = evento; // o evento.preventDefault()
        evento.preventDefault();

        alert(`¡Formulario enviado! Nombre: ${nombre}, Curso de interes:${curso}`);
    }

    return (
        <div>
            <h2>Mi presentación</h2>

            <form onSubmit={manejarEnvio}>

                <label htmlFor="nombrePresentacion">Escribe tu nombre:</label>

                <input
                    id="nombrePresentacion"
                    type="text"
                    value={nombre}
                    onChange={(evento) => setNombre(evento.target.value)}
                    placeholder="Ejemplo: Jhon"
                />

                <br />
                <br />

                <label htmlFor="cursoPresentacion">¿Qué curso te interesa?</label>
                <input
                    id="cursoPresentacion"
                    type="text"
                    value={curso}
                    onChange={(evento) => setCurso(evento.target.value)}
                    placeholder="Ejemplo: React"
                />

                <br />
                <br />
                <button type="submit">
                    Enviar formulario
                </button>

            </form>

        </div>
    );
}

export default PresentacionAprendiz;