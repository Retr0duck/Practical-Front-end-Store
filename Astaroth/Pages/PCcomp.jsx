import React, { useState } from 'react';
import './PCcomp.css'; // Asegúrate de tener tu archivo CSS

function Pc() {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const handleBuyButtonClick = () => {
        // Aquí puedes realizar la acción que desees al hacer clic en el botón de compra
        // Por ejemplo, redirigir a otra página
        window.location.href = '/checkoutPage.jsx'; // Cambia '/checkout' por la URL a la que deseas redirigir
    };

    return (
        <div className="container">
            <div className="products">
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_641174-MLM54007213780_022023-O.webp" alt="Producto 1" />
                    <div className="product-details">
                        <h2>Core I3 8gb/ 320hdd, Monitor Lcd 19</h2>
                        <p>Procesador Core i3 de primera generación (1ra gen) al menos 2.4ghz
                            Memoria Ram: 8gb DDR3
                            Almacenamiento: 240gb solido SSD
                            Monitor LCD de 19" grado B, puede contener detalles leves en display y carcasa
                            *Teclado, Mouse, Cables y Wifi USB de Regalo*
                            Win10 y Office.</p>
                        <p>Precio: $3,210</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_992788-MLM73975278567_012024-O.webp" alt="Product" />
                    <div className="product-details">
                        <h2>Equipo Completo Dell Core I5 8gb/500gb Monitor 22¨ Wifi (Reacondicionado)</h2>
                        <p>Procesador Core i5 de tercera generación (3ra gen) al menos 3.1ghz
                            Memoria Ram: 8gb DDR3
                            Disco Duro: 240gb solido SSD
                            Monitor LCD de 22" grado B, puede contener detalles leves en display y carcasa
                            *Teclado, Mouse, Cables y Wifi USB de Regalo*
                            Win10 y office.</p>
                        <p>Precio: $3,590</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_727951-MLM71486918474_092023-O.webp" alt="Product" />
                    <div className="product-details">
                        <h2>Equipo Dell I5 De 4ta Gen 16 Gb Ram 500 Gb Monitor 22 Wifi (Reacondicionado)</h2>
                        <p>* I5-4590 3.30 GHz
                            ° Memoria RAM: 16 Gb DDR3.
                            ° Unidad de Disco Duro: 500 Gb.
                            ° WIFI USB (NUEVO)
                            ° Teclado y Mouse.
                            ° Monitor LCD 22" (se envia marca y modelo dependiendo stock).
                            ° Cable VGA y Cables AC.
                            * Fuente de Poder: 255W

                            PUERTOS:
                            ° USB 2.0
                            ° Aux. Audífonos.
                            ° Aux. Micrófono.
                            ° Display Port.
                            ° VGA.
                            ° Serie.
                            ° Ps2 (Para Teclado y Mouse).
                            ° ETHERNET.
                        </p>
                        <p>Precio: $3,499</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_806609-MLM74060944807_012024-O.webp" alt="Product" />
                    <div className="product-details">
                        <h2>Computadora Dell / Hp Core I3 8gb 500gb Lcd 22 Wifi</h2>
                        <p>-Procesador: Intel Core i3 (2da generación)2.4 GHz
                            -Memoria RAM: 8GB DDR3
                            -Disco Solido: 240 GB SDD
                            -Pantalla: Monitor 22 pulgadas " grado B (MARCA SE ENVIA DE ACUERDO A EXISTENCIAS )(puede presentar ligeros detalles estéticos en display y/o carcasa)
                            -Paquetería: Office 2019 (Licencias activadas por 6 meses)
                            -Sistema Operativo: Windows 10
                            -Productos de regalo incluidos:
                            Teclado, mouse y cables
                            Adaptador USB WIFI</p>
                        <p>Precio: $
                            3,419</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_987082-MLM73939375866_012024-O.webp" alt="Product" />
                    <div className="product-details">
                        <h2>Equipo Dell Optiplex I7 6ta Monitor 27 32gb/ 480gb+1tb</h2>
                        <p>-Dell Mini/SFF/MT
                            (Modelo y Tamaño se envía de acuerdo existencias).
                            -Procesador: Intel Core I7 6ta Generación.
                            -Memoria RAM: 32 GB.
                            -Disco Duro: 480 GB SSD + 1 TB HDD
                            -Monitor 22 pulgadas (Modelo se envía de acuerdo a existencias)
                            -Teclado, mouse y USB WIFI.
                            (Monitor, teclado y mouse se envían de acuerdo existencias).
                            -Incluye cable AC y de video.
                            -Paquetería: Office 2019(Licencias activadas por 6 meses).
                            -Sistema Operativo: Windows 10.</p>
                        <p>Precio: $9,500</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_993667-MLM69925832030_062023-O.webp" alt="Product" />
                    <div className="product-details">
                        <h2>Completo I7-6ta Dell 16gb 1tb Hdd Lcd 22 Usb Wifi</h2>
                        <p>° Procesador: Intel Core I7 - 6ta 3.40 GHz
                            ° Memoria RAM: 16 Gb.
                            ° Disco mecánico: 1 TB
                            ° Monitor LCD 22". ( OJO, OJO, MARCA SUJETA A DISPONIBILIDAD )
                            ° Teclado y Mouse.
                            ° ****************************** WIFI REGALO ******************************
                            Puertos:
                            ° USB 2.0
                            ° USB 3.0
                            ° Aux. Audífonos y Microfono.
                            ° HDMI
                            ° ETHERNET.</p>
                        <p>Precio: $4,799</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_835269-MLM69318303706_052023-O.webp" alt="Product" />
                    <div className="product-details">
                        <h2>Pc Gamer Ryzen 5 Vega 7 32gb Ram Ssd 1tb Monitor 21.5 Wifi</h2>
                        <p>PROCESADOR:
                            -Procesador AMD Ryzen 5 4600G 4a generación. 6 núcleos, 12 hilos. Máximo 4.2GHz, gráficos incorporados AMD Radeon Vega 7 núcleos GPU
                            MOTHER BOARD:
                            -MOTHER BOARD SOCKET AM4, VGA, HDMI
                            MEMORIA RAM :
                            -MEMORIA RAM TOTAL 32GB DDR4 UDIMM
                            ALMACENAMIENTO:
                            - Unidad de estado Solido SSD 1TB SATA 2.5"
                            KIT TECLADO Y MOUSE:
                            -kit de teclado y mouse USB Gamer RETROILUMINADO
                            FUENTE DE PODER ESTANDAR 600W
                            GABINETE
                            -GABINETE GAMER INCLUYE 3 VENTILADORES
                            WIFI:
                            -Adaptador de red wifi, conexión
                            MONITOR:
                            -MONITOR LED 21.5" FULL HD 1920X1080 VGA HDMI COLOR NEGRO
                        </p>
                        <p>Precio: $10.00</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_859870-MLM70909756215_082023-O.webp" alt="Product" />
                    <div className="product-details">
                        <h2>Pc Gamer Ryzen 7 5700g 32gb Ram Ssd 1t Monitor 27 Fuente 80+</h2>
                        <p>-Procesador AMD Ryzen 7 5700G 8 nucleos, Reloj base 3.8GHz, Reloj de aumento máx. Hasta 4.6GHz, gráficos Radeon Graphics 8 nucleos GPU 2000 MHz
                            - Monitor LED FULL HD 27". VGA, HDMI color negro
                            -Mother board socket AM4, salida de video VGA y HDMI
                            -Memoria RAM 32GB UDIMM DDR4 dual channel
                            -Almacenamiento unidad de estado solido SSD 1TB
                            -Gabinete gamer incluye 3 ventiladores.
                            - Fuente de poder certificada. Certificacion 80 plus
                            -Adaptador 2 EN 1 Bluetooth + wifi conexion USB
                            -TECLADO Y MOUSE USB, EN ESPAÑOL, CON ILUMINACION</p>
                        <p>Precio: $11,970</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_987528-MLM71300431538_082023-O.webp" alt="Producto" />
                    <div className="product-details">
                        <h2>Pc Gamer Ryzen 7 5700g 64gb Ram Ssd 1t Monitor 27 Fuente 80+</h2>
                        <p>-Procesador AMD Ryzen 7 5700G 8 nucleos, Reloj base 3.8GHz, Reloj de aumento máx. Hasta 4.6GHz, gráficos Radeon Graphics 8 nucleos GPU 2000 MHz
                            - Monitor LED FULL HD 27" VGA, HDMI color negro
                            -Mother board socket AM4, salida de video HDMI
                            -Memoria RAM 64GB UDIMM DDR4 dual channel
                            -Almacenamiento unidad de estado solido SSD 1TB SATA 2.5"
                            -Gabinete gamer incluye 3 ventiladores.
                            - Fuente de poder certificada. Certificacion 80 plus
                            -Adaptador de red 2 en 1 Bluetooth + wifi conexion USB
                            -TECLADO Y MOUSE USB, EN ESPAÑOL, CON ILUMINACION</p>
                        <p>Precio: $13,422</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>







            </div>
        </div>
    );
}

export default Pc;
