function Curso({ nombre, descripcion }) {
    function mostrarMensaje() {
        alert(`¡Bienvenido al curso de ${nombre}!`);
    }

    function inscribirme() {
        alert(`¡Te has inscrito al curso de ${nombre}!`);
    }

    return (
        <article className="curso-card">
            <div className="curso-contenido">
                <span className="curso-etiqueta">Curso disponible</span>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
            </div>

            <div className="curso-botones">
                <button onClick={mostrarMensaje}>Ver información</button>
                <button onClick={inscribirme}>Inscribirme</button>
            </div>
        </article>
    );
}

export default Curso;