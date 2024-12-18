import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`} style={{ textDecoration: 'none' }} onClick={() => window.scrollTo(0, 0)}>
        <img src={props.image} alt="product" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        {/* <div className="item-price-old">Rs{props.old_price}</div> */}
      </div>
    </div>
  );
};

export default Item;
