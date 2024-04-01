import React, { useState } from 'react';
import './App.css';
import Contacto from './components/Contacto';

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
          <h1>Virgen de la Medalla Milagrosa - 11009</h1>
          <p>Inicial | Primaria | Secundaria</p>
          <input type="search" placeholder='Buscar ...'/>
          <hr />
          <div className='buttons'>
            <button>Contactar</button>
            <button>Preguntas frecuentes</button>
          </div>
        </div>
        <div>
          <img src="" alt="imagen" />
        </div>
      </main>
        <div className='redes'>
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-solid fa-envelope"></i></a>
          <a href=""><i class="fa-brands fa-youtube"></i></a>
        </div>
      
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
              <p>"Brindar una educación de calidad, equitativa e inclusiva, centrada en el desarrollo integral de cada estudiante, promoviendo valores éticos y ciudadanos, y fomentando el pensamiento crítico, la creatividad y la participación activa en la comunidad"</p>

            </div>
            <div>
              <h2>Visión</h2>
              <p> "Ser reconocidos como una institución líder en la formación integral de estudiantes, destacando por la excelencia académica, la inclusión social y el compromiso con el desarrollo sostenible de la sociedad".</p>

            </div>
            <div>
              <h2>Valores</h2>
              <p>Responsabilidad, respeto, honestidad, solidaridad, justicia e innovación</p>

            </div>
          </div>
        </div>
        <div>
          <h2>Oferta Educativa</h2>
          
        </div>
      </div>

      <Contacto />
    </div>
  );
}

export default App;

