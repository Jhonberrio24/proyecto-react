function Curso({ id, nombre, descripcion, inscritos, onInscribir }) {
    return (
        <article className="curso-card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <div className="curso-contenido" style={{ flex: 1 }}>
                <span className="curso-etiqueta">Curso disponible</span>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <p style={{ color: "#58a6ff", fontWeight: "bold", marginTop: "15px" }}>
                    Personas inscritas: {inscritos}
                </p>
            </div>

            <div className="curso-botones" style={{ marginTop: "15px" }}>
                <button>Ver información</button>
                <button onClick={() => onInscribir(id)}>Inscribirme</button>
            </div>
        </article>
    );
}

export default Curso;