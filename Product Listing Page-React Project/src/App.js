import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SortingBar from './components/SortingBar';
import LoginPage from './components/Login';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([]);

  const handleLogin = (username, password) => {
    if (username === 'Username' && password === 'Password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // ✅ Fetch products from FakeStore API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (isLoggedIn) fetchProducts();
  }, [isLoggedIn]);

  return (
    <div className="app">
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        {isLoggedIn ? (
          <Route
            path="/"
            element={
              <>
                <Header />
                <SortingBar />
                <ProductList products={products} isLoggedIn={isLoggedIn} />
                <Footer />
              </>
            }
          />
        ) : (
          <Route path="/" element={<LoginPage handleLogin={handleLogin} />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
