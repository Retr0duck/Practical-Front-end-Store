import React, { useState } from 'react';
import './CartPage.css';

function ShoppingCartPage() {
    // Estado para almacenar los elementos en el carrito
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Producto 1', price: 10 },
        { id: 2, name: 'Producto 2', price: 20 },
        { id: 3, name: 'Producto 3', price: 15 }
    ]);

    // Función para eliminar un elemento del carrito
    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
    };

    // Función para pagar
    const handlePayment = () => {
        // Aquí podrías agregar la lógica para redirigir al usuario a una página de pago externa
        // Por ejemplo:
        window.location.href = './CheckoutPage.jsx';
    };

    return (
        <div className="shopping-cart">
            <h2>Carrito de Compras</h2>
            <ul className="cart-items">
                {cartItems.map(item => (
                    <li key={item.id} className="cart-item">
                        <span className="item-name">{item.name}</span>
                        <span className="item-price">${item.price}</span>
                        <button onClick={() => removeFromCart(item.id)} className="remove-btn">Eliminar</button>
                    </li>
                ))}
            </ul>
            <div className="total">
                <span>Total:</span>
                <span>${cartItems.reduce((total, item) => total + item.price, 0)}</span>
            </div>
            <button onClick={handlePayment} className="pay-btn">Pagar</button>
        </div>
    );
}

export default ShoppingCartPage;
