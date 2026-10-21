import { useState } from "react";

function Curso(props) {
    const [intersados, setInteresados] = useState(0);
    const [inscritos, setInscritos] = useState(0);

    function agregarInteresado() {
        setInteresados(intersados + 1);
    }

    function mostrarMensaje() {
        alert(`¡Bienvenido al curso de ${props.nombre}!`);
    }

    function inscribirme() {
        alert(`¡Te has inscrito al curso de ${props.nombre}!`);
        setInscritos(inscritos + 1);
    }

    return (
        <div>
            <h3>{props.nombre}</h3>

            <p>{props.descripcion}</p>

            {/* Contadores con el texto exacto de la captura */}
            <p>Cantidad de inscritos: {inscritos}</p>
            <p>Cantidad de interesados: {intersados}</p>

            {/* Fila única de botones */}
            <div>
                <button onClick={mostrarMensaje}>Ver información</button>
                <button onClick={inscribirme}>Inscribirme</button>
                <button onClick={agregarInteresado}>Me interesa</button>
            </div>
        </div>
    );
}

export default Curso;