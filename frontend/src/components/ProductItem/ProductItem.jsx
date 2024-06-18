import React, { useContext } from 'react';
import './ProductItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const ProductItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

  return (
    <div className='productItem'>
      <div className="productItemImgContainer">
        <img src={`${url}/images/${image}`} alt={name} className="productItemImage" />
        {!cartItems[id] ? (
          <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to Cart" />
        ) : (
          <div className="productItemCounter">
            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from Cart" />
            <p>{cartItems[id]}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add to Cart" />
          </div>
        )}
      </div>
      <div className="productItemInfo">
        <div className="productItemNameRating">
          <p>{name}</p>
          <img src={assets.rating_stars} alt='Rating Stars' />
        </div>
        <p className="productItemDescription">
          {description}
        </p>
        <p className="productItemPrice">
          ₦{price}
        </p>
      </div>
    </div>
  );
};

export default ProductItem;
