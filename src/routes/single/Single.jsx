import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../single/Single.css'

const Single = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  console.log(product);

  return (
    <div  className='single-product-container'>
      {product && (
        <div>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} width="100" />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      )}
    </div>
  );
};

export default Single;
