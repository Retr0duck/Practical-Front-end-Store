import React from 'react';
import './CheckoutPage.css'; // Asegúrate de tener tus estilos CSS

function PaymentPage() {
    return (
        <div className="container__checkout">
            <h1>Proceso de Pago</h1>
            <div className="payment-form">
                <div className="input-group">
                    <label htmlFor="card-number">Número de Tarjeta:</label>
                    <input type="text" id="card-number" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="input-group">
                    <label htmlFor="expiration-date">Fecha de Expiración:</label>
                    <input type="text" id="expiration-date" placeholder="MM/AA" />
                </div>
                <div className="input-group">
                    <label htmlFor="cvv">CVV:</label>
                    <input type="text" id="cvv" placeholder="123" />
                </div>
                <div className="input-group">
                    <label htmlFor="name">Nombre en la Tarjeta:</label>
                    <input type="text" id="name" placeholder="Nombre Apellido" />
                </div>
                <button className="pay-btn">Pagar</button>
            </div>
        </div>
    );
}

export default PaymentPage;
