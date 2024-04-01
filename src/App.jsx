import React, { useState } from 'react';
import './App.css';

function App() {


  return (
    <div className="App">
      
      <nav className="navbar">
          <ul className={'menu-list'}>
            <li><h2>Logo</h2></li>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Acerca de</a></li>
            <li><a href="#">Accesos</a></li>
            <li><a href="#">Contacto</a></li>
            <li><button>Login</button></li>
          </ul>
      </nav>
      <hr color='#bebebe' />
      
      <main>
        <div className='content'>
          <h1>Virgen de la Medalla Milagrosa</h1>
          <p>Inicial | Primaria | Secundaria</p>
          <input type="search" placeholder='Buscar ...'/>
          <hr />
          <div className='buttons'>
            <button>Contactar</button>
            <button>Preguntas frecuentes</button>
          </div>
        </div>
        <div>
          <img src="" alt="hola" />
        </div>
      </main>
      
      <div className="main-content">
        
        <div className='about-me'>
          <h1>Acerca de</h1>
          <div className='informacion'>
            <div>
              <h2>Reseña Historica</h2>
              <p>La Institución Educativa N° 11009 “Virgen de la Medalla Milagrosa”, fundada en 1954 como Escuela de Primer Grado No 2244 en Garcés, José Leonardo Ortiz, Chiclayo, ha experimentado un crecimiento significativo a lo largo de los años. En 1960, se trasladó a su propio local en la calle Húsares de Junín N° 520, y en 1971 cambió su denominación a E.P.M. N° 11009. Bajo el liderazgo del Prof. Juan Carlos SAMILLÁN PAICO desde 1995, se logró la construcción de un moderno edificio en 1998 y la incorporación del nivel secundario en 2000. En 2009, se fusionó con la I.E. Santa Rosa de Lima. Actualmente, cuenta con una población estudiantil de aproximadamente 2300 alumnos y un equipo de 88 profesionales, ofreciendo un entorno educativo seguro y adecuado.</p>
            </div>
            <div>
              <h2>Misión</h2>
              <p>La Institución Educativa N° 11009 “Virgen de la Medalla Milagrosa”, fundada en 1954 como Escuela de Primer Grado No 2244 en Garcés, José Leonardo Ortiz, Chiclayo, ha experimentado un crecimiento significativo a lo largo de los años. En 1960, se trasladó a su propio local en la calle Húsares de Junín N° 520, y en 1971 cambió su denominación a E.P.M. N° 11009. Bajo el liderazgo del Prof. Juan Carlos SAMILLÁN PAICO desde 1995, se logró la construcción de un moderno edificio en 1998 y la incorporación del nivel secundario en 2000. En 2009, se fusionó con la I.E. Santa Rosa de Lima. Actualmente, cuenta con una población estudiantil de aproximadamente 2300 alumnos y un equipo de 88 profesionales, ofreciendo un entorno educativo seguro y adecuado.</p>x

            </div>
            <div>
              <h2>Visión</h2>
              <p> La misión de un colegio estatal del Perú podría ser: "Brindar una educación de calidad, equitativa e inclusiva, centrada en el desarrollo integral de cada estudiante, promoviendo valores éticos y ciudadanos, y fomentando el pensamiento crítico, la creatividad y la participación activa en la comunidad".</p>x

            </div>
            <div>
              <h2>Valores</h2>
              <p>Responsabilidad: Fomentar la responsabilidad personal y social entre los estudiantes, promoviendo el cumplimiento de deberes y la participación activa en la comunidad escolar y en la sociedad en general.

  Respeto: Inculcar el respeto hacia uno mismo, hacia los demás y hacia el entorno, promoviendo la tolerancia, la empatía y el trato respetuoso hacia todas las personas, independientemente de sus diferencias.

  Honestidad: Fomentar la honestidad y la integridad en todas las acciones y relaciones dentro y fuera del colegio, promoviendo la transparencia y la confianza mutua entre los miembros de la comunidad educativa.

  Solidaridad: Promover la solidaridad y la colaboración entre los estudiantes, el personal docente y administrativo, y la comunidad en general, fomentando el apoyo mutuo y la ayuda a quienes lo necesiten.

  Justicia: Promover la justicia social y el respeto por los derechos humanos, fomentando la igualdad de oportunidades y el trato equitativo para todos los miembros de la comunidad educativa.

  Innovación: Fomentar la creatividad, la curiosidad y el pensamiento crítico entre los estudiantes, promoviendo la búsqueda constante de nuevas soluciones y enfoques para los desafíos educativos y sociales.</p>x

            </div>
          </div>
        </div>
        <div>
          <h2>Oferta Educativa</h2>
          
        </div>
      </div>
    </div>
  );
}

export default App;

