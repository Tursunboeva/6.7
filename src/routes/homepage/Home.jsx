import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../homepage/Home.css'

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  console.log(products);

  return (
    <div className="home-container">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <Link to={`/single/${product.id}`}><p>{product.description}</p></Link>
          <Link to={`/single/${product.id}`}><p>Price: ${product.price}</p></Link>
          <Link to={`/single/${product.id}`}><img src={product.image} alt={product.title} width="100" /></Link>
          <Link to={`/single/${product.id}`}><h2>{product.title}</h2></Link>
        </div>
      ))}
    </div>
  );
};

export default Home;

