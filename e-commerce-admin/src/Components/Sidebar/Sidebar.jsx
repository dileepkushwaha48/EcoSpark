import React from 'react';
import './Sidebar.css';
import add_product_icon from '../Assets/Product_Cart.svg';
import list_product_icon from '../Assets/Product_list_icon.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to='/addproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={add_product_icon} alt="Add Product" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to='/listproduct' style={{ textDecoration: 'none' }}>
        <div className="sidebar-item">
          <img src={list_product_icon} alt="Product List" />
          <p>Product List</p>
        </div>
      </Link>

      {/* <Link to='/user' style={{ textDecoration:'none'}} >
      
    <p>Users</p>
      </Link> */}
    </div>
  );
}

export default Sidebar;
