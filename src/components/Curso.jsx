function Curso({ nombre, descripcion }) {
  return (
    <div className="curso-card">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default Curso;