import Style from "../styles/Contacto.module.css"

const Contacto = () => {
    return (
      <div>
        <h1>Contactanos!</h1>
        <p>Este es un ejemplo básico de un componente.</p>
        <div className={Style.card_form}>
            <div >
                <h2>Información institucional</h2>
                <p>
                    <span class="material-symbols-outlined"> tag </span> <span>I.E. N° 11009 "Virgen de la Medalla Milagrosa"</span>
                </p>
                <p>
                    <span class="material-symbols-outlined"> location_on </span> <span>Calle Húsares de Junín N° 520, Garcés, José Leonardo Ortiz, Chiclayo.</span>
                </p>
                <p>
                    <span class="material-symbols-outlined"> call </span> <span>+51 987654321</span>
                </p>
                <p>
                    <span class="material-symbols-outlined"> mail </span> <span> mpvie-278700@ugelchiclayo.pe</span>
                </p>
                <p>
                    <span class="material-symbols-outlined"> person_3 </span> <span> Janet del Pilar Guevara Quiroz</span>
                </p>
            </div>
        </div>
      </div>
    );
}

export default Contacto;
