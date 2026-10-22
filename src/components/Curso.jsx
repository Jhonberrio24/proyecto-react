function Curso(props) {
    function mostrarMensaje() {
        alert(`¡Bienvenido al curso de ${props.nombre}!`);
    }

    function inscribirme() {
        alert(`¡Te has inscrito al curso de ${props.nombre}!`);
    }

    return (
        <div className="curso-card">
            <h3>Curso: {props.nombre}</h3>

            <p>{props.descripcion}</p>

            <div className="curso-botones">
                <button onClick={mostrarMensaje}>Ver información</button>
                <button onClick={inscribirme}>Inscribirme</button>
            </div>
        </div>
    );
}

export default Curso;