import Style from "../styles/Contacto.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const Contacto = () => {
    return (
        <footer class="bg-secondary">
            <div className={`container ${Style.card_form} d-flex`}>
                <div class="row align-items-start">
                    <div class="col-md-6">
                        <div class="pt-3">
                            <h1>Contactanos!</h1>
                        </div>
                    </div>
                    <div class="container text-center">
                        <div class="row align-items-center justify-content-center">
                            <div class="col-md-1"></div>
                            <div class="col-md-4">
                                <div>
                                    <h1>
                                        Unete a nuestra familia <br />¡Que Esperas!!!
                                    </h1>
                                </div>
                            </div>
                            <div class="col-md-1">
                                <div class={Style.hr_vertical}>
                                    <hr />
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div>
                                    <h2>Información institucional</h2>
                                    <p>
                                        <span className="material-symbols-outlined">tag</span> I.E. N° 11009 "Virgen de la Medalla Milagrosa"
                                    </p>
                                    <p>
                                        <span className="material-symbols-outlined">location_on</span> Calle Húsares de Junín N° 520, Garcés, José Leonardo Ortiz, Chiclayo.
                                    </p>
                                    <p>
                                        <span className="material-symbols-outlined">call</span> +51 987654321
                                    </p>
                                    <p>
                                        <span className="material-symbols-outlined">mail</span> mpvie-278700@ugelchiclayo.pe
                                    </p>
                                    <p>
                                        <span className="material-symbols-outlined">person_3</span> Janet del Pilar Guevara Quiroz
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Contacto;
