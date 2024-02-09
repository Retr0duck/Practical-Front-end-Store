import Categories from '../Components/Categories';



const HomePage = () => {
    return (
        <div>
            <h5 style={{ textAlign: 'center' }}>Tenemos Ofertas Por Temporada</h5>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">

                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="./src/assets/computer-2982270_640.jpg" className="d-block w-100" alt="img1" />
                        <div className="carousel-caption d-none d-md-block text-center"> {/* Añade la clase text-center aquí */}
                            <h5>La Mejor Calidad</h5>
                            <p>Tenemos los Mejores Productos del Mercado.</p>
                        </div>
                    </div>
                    <br />
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./src/assets/apple-1868496_640.jpg" className="d-block w-100" alt="img2" />
                        <div className="carousel-caption d-none d-md-block text-center"> {/* Añade la clase text-center aquí */}
                            <h5>Tenemos Todos los juegos </h5>
                            <p>Todoos los juegos que estes buscando los tenemos nosotros.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./src/assets/laptop-5673901_640.jpg" className="d-block w-100" alt="img3" />
                        <div className="carousel-caption d-none d-md-block text-center"> {/* Añade la clase text-center aquí */}
                            <h5>Tambien Tenemos Para Gaming</h5>
                            <p>Disfruta tus Juegos sin interrupciones con los mejores componentes.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <br />
            <Categories />
        </div>
    )

}
export default HomePage;
