import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from '../Components/Navbar';
import HomePage from '../Pages/HomePage';
import Pc from '../Pages/PCcomp';
import Accesorios from '../Pages/Accesorios';
import Videojuegos from '../Pages/Videojuegos';
import ShoppingCartPage from '../Pages/CartPage';
import PaymentPage from '../Pages/CheckoutPage';
import Footer from '../Components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PCcomp.jsx" element={<Pc />} />
          <Route path='/Accesorios.jsx' element={<Accesorios />} />
          <Route path='/Videojuegos.jsx' element={<Videojuegos />} />
          <Route path='/CartPage.jsx' element={<ShoppingCartPage />} />
          <Route path="/CheckoutPage.jsx" element={<PaymentPage />} />
        </Routes>
        <Footer />
      </div>
    </Router >
  );
}

export default App;

