import { useState } from "react";

function RegistroAprendiz() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [enviado, setEnviado] = useState(false);

    function registrarAprendiz(evento) {
        evento.preventDefault();
        setMensaje("Enviando...");
        setEnviado(true);

        fetch("[https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: nombre,
                body: correo,
                userId: 1
            })
        })
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("No se pudo enviar el registro");
                }
                return respuesta.json();
            })
            .then((datos) => {
                // Uso de comillas invertidas para interpolar la variable
                setMensaje(`Solicitud exitosa. Id de prueba: ${datos.id}`);
                setNombre("");
                setCorreo("");
            })
            .catch((error) => {
                setMensaje("Ocurrió un error al enviar los datos");
                console.error(error);
            })
            .finally(() => {
                setEnviado(false);
            });
    }

    return (
        <section>
            <h2>Registrar aprendiz (prueba)</h2>

            <form onSubmit={registrarAprendiz}>
                <div>
                    <label>Nombre completo</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Correo electrónico</label>
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" disabled={enviado}>
                    {enviado ? "Enviando..." : "Enviar"}
                </button>
            </form>

            {mensaje && <p>{mensaje}</p>}
        </section>
    );
}

export default RegistroAprendiz;