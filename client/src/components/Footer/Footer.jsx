import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div className='item'>
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className='item'>
                <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stores</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className='item'>
                <h1>About</h1>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint maiores officiis eligendi, neque blanditiis, ratione dolorum molestiae autem reprehenderit necessitatibus quas tempore vel magnam nam cupiditate amet sequi, consectetur velit!</span>
            </div>
            <div className='item'>
                <h1>Contact</h1>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint maiores officiis eligendi, neque blanditiis, ratione dolorum molestiae autem reprehenderit necessitatibus quas tempore vel magnam nam cupiditate amet sequi, consectetur velit!</span>
            </div>
        </div>
        <div className='bottom'>
            <div className="left">
                <span className="logo">La Galerie</span>
                <span className="copyright">© Copyright 2023. All Rights Reserved </span>
            </div>
            <div className="right">
                <img src="https://github.com/safak/youtube2022/blob/ecommerce/client/public/img/payment.png?raw=true" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer
