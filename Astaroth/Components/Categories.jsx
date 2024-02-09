import './Categories.css'

const Categories = () => {
    return (
        <div>
            <div className="container">
                <div className="box">
                    <img src="https://imgs.search.brave.com/6wwuOlCdIk_Q_7xW55xyM1eDVKcIo2HQ1pXR90_nr7g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9waXhu/aW8uY29tL2ZyZWUt/aW1hZ2VzLzIwMTkv/MDIvMDcvMjAxOS0w/Mi0wNy0wOS01MS0w/MC01NzZ4NDMyLmpw/Zw" alt="Imagen 1" />
                    <div className="overlay">
                        <div className="text"><a href="./PCcomp.jsx">PC Completas</a></div>
                    </div>
                </div>
                <div className="box">
                    <img src="https://imgs.search.brave.com/h_wToBiKAldZm6zMUiOKvtPeonWhGgaGW6ILxljZq0g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3BhcnRhbmdl/ZWsuY29tL2NjL2tp/dC10ZWNsYWRvLXkt/bW91c2UtY29yc2Fp/ci5wbmc" alt="Imagen 2" />
                    <div className="overlay">
                        <div className="text"><a href="./Accesorios.jsx">Accesorios</a></div>
                    </div>
                </div>
                <div className="box">
                    <img src="https://imgs.search.brave.com/yNfM_s_gfppnVSAsszyAl94cbV_JSAdCf6ajbUMjhd8/rs:fit:500:0:0/g:ce/aHR0cDovL3d3dy56/b25hcmVkLmNvbS9p/bWFnZXMvcmVwb3J0/YWplcy83MDAvNzMz/LzEuanBn" alt="Imagen 3" />
                    <div className="overlay">
                        <div className="text"><a href="./Videojuegos.jsx">Videojuegos</a></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Categories;