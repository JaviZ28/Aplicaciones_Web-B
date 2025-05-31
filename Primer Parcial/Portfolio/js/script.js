function mostrar(seccion) {
  const contenido = document.getElementById('contenido');
  contenido.style.opacity = 0;


  setTimeout(() => {
    if (seccion === 'proyectos') {
      contenido.innerHTML = `
        <div class="seccion-contenido">
          <h1>Mis Proyectos</h1>
          <p class="intro">Estos son algunos de mis proyectos más destacados en los que he trabajado recientemente.</p>
          
          <div class="proyecto-card">
            <div class="proyecto-img">
              <img src="img/proyectos/proyecto1.jpg" alt="Proyecto 1">
            </div>
            <div class="proyecto-info">
              <h3>Cinema</h3>
              <p>Desarrolle una aplicación de reservación de asientos y boletos de un cine virtual.</p>
              <div class="tecnologias">
                <span>Python</span>
                <span>CustomTkinter</span>
              </div>
            </div>
          </div>
          
          <div class="proyecto-card">
            <div class="proyecto-img">
              <img src="img/proyectos/proyecto2.jpg" alt="Proyecto 2">
            </div>
            <div class="proyecto-info">
              <h3>Gestor de Tareas</h3>
              <p>En grupo modificamos una aplicación web subida en Render, donde se desarrolló la interfaz de administrador y usuario con sus respectivas credenciales.</p>
              <div class="tecnologias">
                <span>Python</span>
                <span>MongoDB</span>
                <span>Render</span>
              </div>
            </div>
          </div>
      `;
    } else if (seccion === 'estudios') {
      contenido.innerHTML = `
        <div class="seccion-contenido">
          <h1>Mis Estudios</h1>
          <p class="intro">Mi formación académica los 	realicé:</p>
          
          <div class="timeline">
            <div class="timeline-item">
              <div class="fecha">2010 - 2018</div>
              <div class="info">
                <h3>Educación Inicial y la Educación Básica</h3>
                <h4>Unidad Educativa Fiscal "Atahualpa"</h4>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="fecha">2019 - 2022</div>
              <div class="info">
                <h3>Educación Básica y Bachillerato</h3>
                <h4>U.E.P Mater Misericordiae</h4>
              </div>
            </div>
            
            <div class="timeline-item">
              <div class="fecha">2023 - En curso</div>
              <div class="info">
                <h3>Carrera: Ingeniería de Software</h3>
                <h4>Universidad Laica Eloy Alfaro de Manabi</h4>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (seccion === 'cualidades') {
      contenido.innerHTML = `
        <div class="seccion-contenido">
          <h1>Mis Cualidades</h1>
          <p class="intro">Habilidades técnicas y personales que me destacan como profesional.</p>
          
          <div class="skills-container">
            <div class="skills-column">
              <h2>Habilidades Técnicas</h2>
              
              <div class="skill">
                <div class="skill-name">Python</div>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 70%;"></div>
                </div>
              </div>
              
              <div class="skill">
                <div class="skill-name">Java</div>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 30%;"></div>
                </div>
              </div>
              
              <div class="skill">
                <div class="skill-name">JavaScript</div>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 20%;"></div>
                </div>
              </div>
              
              <div class="skill">
                <div class="skill-name">Html y Css</div>
                <div class="skill-bar">
                  <div class="skill-level" style="width: 20%;"></div>
                </div>
              </div>
            </div>
            
            <div class="skills-column">
              <h2>Cualidades Personales</h2>
              
              <div class="cualidad">
                <img src="img/otros/trabajo-equipo.svg" alt="Trabajo en Equipo">
                <h3>Trabajo en Equipo</h3>
              </div>
              
              <div class="cualidad">
                <img src="img/otros/creatividad.svg" alt="Creatividad">
                <h3>Creatividad</h3>
              </div>
              
              <div class="cualidad">
                <img src="img/otros/adaptabilidad.svg" alt="Adaptabilidad">
                <h3>Adaptabilidad</h3>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (seccion === 'inicio') {
      // Para la página de inicio, cargamos el contenido predeterminado
      contenido.innerHTML = `
          <h1>¡Bienvenido a mi portfolio!</h1>
          <p>Soy un estudiante de Ingeniería de Software en la ULEAM</p>
            
          <div class="home-highlight">
            <div class="highlight-item">
              <i class="fas fa-laptop-code"></i>
              <h3>Programador</h3>
              <p>Creación, modificación y mantenimiento de software, aplicaciones y sistemas informáticos utilizando lenguajes de programación específicos.</p>
            </div>
            <div class="highlight-item">
              <i class="fas fa-paint-brush"></i>
              <h3>Diseño Web</h3>
              <p>Actualmente estoy aprendiendo sobre aplicaciones web y su diseño.</p>
            </div>
      `;
    }
    contenido.style.animation = 'fadeIn 0.8s';
    contenido.style.opacity = 1;
  }
  , 300);
}  
