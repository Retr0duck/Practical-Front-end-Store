import './Accesorios.css'
import { useState } from 'react';

function Accesorios() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleBuyButtonClick = () => {
        // Aquí puedes realizar la acción que desees al hacer clic en el botón de compra
        // Por ejemplo, redirigir a otra página
        window.location.href = '/checkout'; // Cambia '/checkout' por la URL a la que deseas redirigir
    };
    return (

        <div className="container">
            <img id='img1' src="" alt="" />
            <div className="products">
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://m.media-amazon.com/images/I/71QDJHG1PqL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="Producto 1" />
                    <div className="product-details">
                        <h2>REDRAGON S101 Set combo</h2>
                        <p>Combo de teclado y mouse para juegos de PC: incluye teclado Redragon RGB retroiluminado para juegos y mouse para juegos con retroiluminación RGB. Kit de PC todo en uno, fantástico para jugadores (nueva versión mejorada).</p>
                        <p>Precio: $910.00</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://m.media-amazon.com/images/I/61JiXMLP0ZL._AC_UL320_.jpg" alt="Product" />
                    <div className="product-details">
                        <h2>Logitech MK120 Combo</h2>
                        <p>Escritura cómoda: Disfrutará de teclas planas que apenas hacen ruido y un diseño estándar con teclas F y teclado numérico de tamaño normal.</p>
                        <p>Precio: $359.00</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://m.media-amazon.com/images/I/81Z882NR-ZL.__AC_SY300_SX300_QL70_ML2_.jpg" alt="Product" />
                    <div className="product-details">
                        <h2>Teclado de computadora con cable y mouse con cable, paquete de 10</h2>
                        <p>
                        </p>
                        <p>Precio: $3,499</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://m.media-amazon.com/images/I/51ZNVcXw41L.__AC_SX300_SY300_QL70_ML2_.jpg" alt="Product" />
                    <div className="product-details">
                        <h2>Computadora Dell / Hp Core I3 8gb 500gb Lcd 22 Wifi</h2>
                        <p>Las teclas de acceso rápido permiten un fácil acceso a medios, mi computadora, silencio, bajar volumen, subir y calculadora; 4 teclas de función controlan la pista anterior, parar, reproducir/pausar, siguiente pista en tu reproductor multimedia</p>
                        <p>Precio: $2,645.30</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://m.media-amazon.com/images/I/71Scnmp0k7L._AC_SX425_.jpg" alt="Product" />
                    <div className="product-details">
                        <h2>Free wolf K820 Kit Teclado y Mouse, Teclado Gamer con Cable, Mouse Gamer con Cable hasta 2400DPI, Luz de Retroiluminación Rainbow</h2>
                        <p>TECLADO PARA JUEGOS - Anti-ghosting 19 teclas de uso común en juegos, 12 teclas multimedia, 50 millones de pulsaciones de teclas de duración. Cable USB: 1,5m. Tapa de tecla de suspensión por inyección doble, caracteres que no se desvanecen, evita salpicaduras de líquido, reduce la posibilidad de que el agua y las bebidas dañen el teclado.</p>
                        <p>Precio: $399.00</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://m.media-amazon.com/images/I/71Scnmp0k7L.__AC_SX300_SY300_QL70_ML2_.jpg" alt="Product" />
                    <div className="product-details">
                        <h2>Free Wolf T13 Kit Teclado y Mouse</h2>
                        <p>TECLADO PARA JUEGOS DURADERO DE 104 TECLAS - Anti-ghosting 19 teclas de uso común en juegos, 12 teclas multimedia, 50 millones de pulsaciones de teclas de duración. Cable USB: 1,5m. Tapa de tecla de suspensión por inyección doble, caracteres que no se desvanecen, evita salpicaduras de líquido, reduce la posibilidad de que el agua y las bebidas dañen el teclado.</p>
                        <p>Precio: $359.00</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://m.media-amazon.com/images/I/71C000Ycc8L._AC_SX425_.jpg" alt="Product" />
                    <div className="product-details">
                        <h2>Teclado y Ratón para Juegos</h2>
                        <p>【Teclado profesional para juegos】El panel del teclado para juegos está hecho de material ABS, repelente al agua, a prueba de golpes y resistente al desgaste. El botón flotante hace que la mano se sienta más cómoda.Mayor durabilidad y respuesta táctil. El teclado para juegos MTQ es el teclado perfecto para todo tipo de juegos, que puede llevarte a una atmósfera de juego inmersivo.
                        </p>
                        <p>Precio: $599.00</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://m.media-amazon.com/images/I/61tPtGwX2tL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="Product" />
                    <div className="product-details">
                        <h2>Perixx PERIBOARD 317ES</h2>
                        <p>PERIBOARD-317 es un teclado de tamaño real retroiluminado y con cable. Diseño en monobloque, rentable, resistente, duradero y adaptado para diferentes usos. Ideal para trabajos en estudio, oficina o sala de reuniones oscura con proyector.</p>
                        <p>Precio: $499.00</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://m.media-amazon.com/images/I/71SnGfyPKKL.__AC_SX300_SY300_QL70_ML2_.jpg" alt="Producto" />
                    <div className="product-details">
                        <h2>Teclado Bluetooth traje con RGB 7 Colores 13in Retroiluminación Keyboard y Ratón</h2>
                        <p>【LUZ DE FONDO DE 7 COLORES】 este teclado y mouse bluetooth tiene una luz de fondo LED de 7 colores con iluminación constante y modo de respiración para escribir más fácil y agradable en lugares oscuros. La luz de fondo se apagará automáticamente cuando esté inactiva para ahorrar energía.</p>
                        <p>Precio: $475.00</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
            </div>
        </div>
    )
}
export default Accesorios;