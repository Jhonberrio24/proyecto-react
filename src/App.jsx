import Header from './components/Header';
import Navbar from './components/Navbar';
import Curso from './components/Curso';
import Footer from './components/Footer';

function App() {
  function saludar() {
    alert("¡Bienvenido al Centro Nacional Colombo Alemán!");
  }

  return (
    <div>
      <Header />
      <Navbar />

      <main id="inicio">
        <h2>Bienvenidos a nuestro portal de formación</h2>

        <button onClick={saludar}>
          Haz click aqui
        </button>

        <section id="cursos">
          <h2>Nuestros cursos</h2>
          <p>
            Ofrecemos una variedad de cursos para ayudarte a desarrollar tus
            habilidades y alcanzar tus metas profesionales.
          </p>

          <Curso 
            nombre="Desarrollo Web" 
            descripcion="Aprende a crear paginas web" 
          />

          <Curso 
            nombre="Programación en Python" 
            descripcion="Domina el lenguaje de programación Python" 
          />

          <Curso 
            nombre="Diseño UX/UI"
            descripcion="Crea experiencias de usuario excepcionales" 
          />

          <Curso 
            nombre="programacion con java" 
            descripcion="aprende a desarrollar aplicaciones y soluciones mediante el lenguaje java" 
          />

          <Curso 
            nombre="curso de python" 
            descripcion="aprende a desarrollar aplicaciones mediante el entorno de python" 
          />
        </section>

        <section id="otros-cursos">
          <h2>Otros cursos</h2>
          <p>Explora más opciones de aprendizaje en nuestra plataforma.</p>
        </section>

        <section id="nosotros">
          <h2>Sobre nosotros</h2>
          <p>
            Somos un centro de formación comprometido con el desarrollo de
            nuestros estudiantes y la excelencia educativa.
          </p>
        </section>

        <section id="contacto">
          <h2>Contacto</h2>
          <p>
            Puedes contactarnos a través de nuestro correo electrónico o número
            de teléfono para más información sobre nuestros cursos.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;