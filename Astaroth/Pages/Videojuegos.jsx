import React, { useState } from 'react';
import './Videojuegos.css'; // Asegúrate de tener tu archivo CSS

function Videojuegos() {
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
                    <img src="https://http2.mlstatic.com/D_NQ_NP_764820-MLU70610438351_072023-O.webp" alt="Producto 1" />
                    <div className="product-details">
                        <h2>Super Mario Bros Wonder Nintendo Switch Latam</h2>
                        <p>El videojuego clásico de Nintendo nunca para de sorprender. En sus distintas ediciones, la franquicia de Super Mario ha logrado combinar su estilo con modernos modos de juego que divierten y desafían constantemente a quienes juegan.</p>
                        <p>Precio: $889</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_861671-MLA44346739378_122020-O.webp" alt="Product" />
                    <div className="product-details">
                        <h2>Pikmin 3 Deluxe Deluxe Edition Nintendo Switch Físico</h2>
                        <p>Con este juego de Pikmin vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.

                            Interactúa con otros jugadores
                            Podrás disfrutar de una experiencia inigualable, ya que te permite jugar con tus amistades y compartir momentos inolvidables.</p>
                        <p>Precio: $899</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_837403-MLU74224883935_012024-O.webp" alt="Product" />
                    <div className="product-details">
                        <h2>Videojuego Pokémon Brilliant Diamond Nintendo Switch Físico</h2>
                        <p>Explora la región de Sinnoh, una tierra rica en mitos y naturaleza exuberante, con el Monte Corona dominando el paisaje. Inicia tu aventura eligiendo entre Turtwig, Chimchar o Piplup y enfréntate al desafío de convertirte en el Campeón de la Liga Pokémon. A lo largo de tu viaje, te cruzarás con la enigmática organización Equipo Galaxia y tendrás la oportunidad de encontrarte con el Pokémon legendario Dialga.

                        </p>
                        <p>Precio: $890</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_876340-MLU74118698538_012024-O.webp" alt="Product" />
                    <div className="product-details">
                        <h2>Prince of Persia The Lost Crow Switch Medio Físico Standard Nintendo Switch Físico</h2>
                        <p>Con este juego de Prince of Persia vas a disfrutar de horas de diversión y de nuevos desafíos que te permitirán mejorar como gamer.</p>
                        <p>Precio: $899.00</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_715805-MLU74086277155_012024-O.webp" alt="Product" />
                    <div className="product-details">
                        <h2>The Last Of Us Part Il Remastered - Playstation 5</h2>
                        <p>The Last of Us Part II Remastered, ganador de más de 300 premios al juego del año, llega con una serie de nuevas características, modos y mejoras técnicas. Creado para PS5, este juego mejora al original de PS4 con un rendimiento visual de 4K* en el modo fidelidad y una serie de mejoras gráficas.
                        </p>
                        <p>Precio: $899.00</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_619915-MLA43440081550_092020-O.webp" alt="Product" />
                    <div className="product-details">
                        <h2>Animal Nintendo Switch New Horizons</h2>
                        <p>El otoño ha llegado a Animal Crossing: New Horizons, transformando el follaje de tu isla en tonos naranja y trayendo consigo bellotas y piñas que caen de los árboles, listas para ser utilizadas en proyectos creativos. Además, el 30 de septiembre se lanzará una actualización para el juego que incluirá elementos temáticos de Halloween, como disfraces, opciones de personalización para tu personaje, proyectos de bricolaje y celebraciones especiales.</p>
                        <p>Precio: $899.00</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_816690-MLU74245575717_012024-O.webp" alt="Product" />
                    <div className="product-details">
                        <h2>Videojuego Super Smash Bros Ultimate Nintendo Switch B +12</h2>
                        <p>Vive un enfrentamiento épico de íconos de los videojuegos, disponible para disfrutar en cualquier momento y lugar. Expulsa a tus adversarios del campo de batalla con personajes como Simon Belmont o King K. Rool, junto a Inkling, Ridley y todos los luchadores que han marcado la saga de Super Smash Bros. Experimenta una jugabilidad más ágil y combate en escenarios inspirados en las franquicias de Castlevania, Super Mario Odyssey, entre otras.
                        </p>
                        <p>Precio: $899.00</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_938026-MLA44340980703_122020-O.webp" alt="Product" />
                    <div className="product-details">
                        <h2>Legend Of Zelda Breath Of The Wild Nintendo Switch</h2>
                        <p>ENTRAR EN UN MUNDO DE AVENTURAS
                            Olvídate de todo lo que sabes sobre los juegos de The Legend of Zelda. Adéntrate en un mundo de descubrimiento, exploración y aventura en The Legend of Zelda: Breath of the Wild, un juego revolucionario de la aclamada serie. Viaja a través de vastos campos, bosques y picos de montañas mientras exploras lo que ha sido del reino de Hyrule en esta impresionante aventura al aire libre. Ahora en Nintendo Switch, tu viaje es más libre y abierto que nunca. Lleva tu sistema a cualquier lugar y aventúrate como Link como quieras.</p>
                        <p>Precio: $789.00</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>
                <div className={`product ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <img src="https://http2.mlstatic.com/D_NQ_NP_618478-MLU72829564391_112023-O.webp" alt="Producto" />
                    <div className="product-details">
                        <h2>Bayonetta Origins: Cereza And The Lost Demon Nintendo Switch Físico</h2>
                        <p>Érase una vez, una joven bruja llamada Cereza…
                            Mucho antes de que esta aprendiz de las artes ocultas fuera llamada Bayonetta, nuestra joven emprendió un funesto viaje hacia la región prohibida de Bosque Ávalon. A su lado se encontraba Cheshire, su primer demonio, que poseía a su peluche. Juega como ambos, Cereza y Cheshire, y busca a través de un peligroso bosque el poder para salvar a la madre de Cereza.
                        </p>
                        <p>Precio: $789.00</p>
                    </div>
                    <button className="add-to-cart-btn">Agregar al carrito</button>
                    <button className="buy-btn" onClick={handleBuyButtonClick}>Comprar</button>
                </div>







            </div>
        </div>
    );
}

export default Videojuegos;
