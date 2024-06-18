// frontend/src/pages/Home.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import Header from '../components/Header';
import ExploreMenu from '../components/ExploreMenu';
import ProductCard from '../components/ProductCard';
import AppDownload from '../components/AppDownload';

const HomePage = () => {
  const [category, setCategory] = useState("All");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend API
    axios.get('/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const filteredProducts = category === "All" ? products : products.filter(product => product.category === category);

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <AppDownload />
    </div>
  );
}

export default Home;