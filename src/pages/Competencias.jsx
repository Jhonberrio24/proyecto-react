import { useEffect, useState } from "react";

function Competencias() {
    const [competencias, setCompetencias] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("No se pudo consultar la información.");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setCompetencias(datos);
            })
            .catch(() => {
                setError("No fue posible cargar las competencias.");
            })
            .finally(() => {
                setCargando(false);
            });
    }, []);

    return (
        <section>
            <h2>Competencias (datos de prueba)</h2>
            {cargando && <p>Cargando información...</p>}
            {error && <p>{error}</p>}
            {!cargando && !error && (
                <div>
                    {competencias.map((item) => (
                        <article key={item.id}>
                            <h3>{item.title}</h3>
                            <p>Estado: {item.completed ? "Completado" : "Pendiente"}</p>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}

export default Competencias;