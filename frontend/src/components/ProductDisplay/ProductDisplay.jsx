import React, { useContext } from 'react';
import './ProductDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import ProductItem from '../ProductItem/ProductItem';

// Render
const ProductDisplay = ({ category }) => {
  const { product_list, token } = useContext(StoreContext);

  // Render ProductDisplay only if token exists
  if (!token) {
    return null;
  }

  return (
    <div className='productDisplay' id='productDisplay'>
      <h2>Find Products Near You</h2>
      <div className="productDisplayList">
        {product_list.map((item, index) => {
          if (category === 'All' || category === item.category) {
            return (
              <ProductItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductDisplay;