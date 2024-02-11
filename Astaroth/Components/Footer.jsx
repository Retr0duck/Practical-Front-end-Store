import { react } from 'react'

const Footer = () => {
    return (
        <footer className="footer" style={{ background: 'grey' }}>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Enlaces rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Acerca de nosotros</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contacto</h5>
                        <address>
                            123 Calle Principal<br />
                            Ciudad, País<br />
                            <i className="fas fa-phone"></i> +52 33 3016 2737<br />
                            <i className="fas fa-envelope"></i> paatoo1909@outlook.com
                        </address>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer;
