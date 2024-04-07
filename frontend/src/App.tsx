import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './components/DataContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import HomeFeatured from './components/HomeFeatured';
import Footer from './components/Footer';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Account from './components/Account';

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <NavBar />
          <Routes>
            <Route path="/" element={<><HeroSection /><HomeFeatured /></>}/>
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </DataProvider>
  )
}

export default App