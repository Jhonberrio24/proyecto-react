import { useState } from "react";

function Formulario() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [contraseña, setContraseña] = useState("");

    function registrar(e) {
        e.preventDefault();

        alert("¡Bienvenido! Tu registro ha sido exitoso." + nombre);
        // Lógica para manejar el envío del formulario
    }

    return (
        <section>
            <h2>Registro</h2>

            <form onSubmit={registrar}>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    minLength={3}
                    required
                />

                <label htmlFor="correo">Correo:</label>
                <input
                    type="email"
                    id="correo"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />

                <label htmlFor="contraseña">Contraseña:</label>
                <input
                    type="password"
                    id="contraseña"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    minLength={8}
                    required
                />

                <button type="submit">Registrar</button>
            </form>
        </section>
    );
}

export default Formulario;