import React from 'react';
import './featuredProducts.scss';
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({type}) => {
    const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][type][$eq]=${type}`
      );
      console.log(data)
    
  return (
    <div className='featuredProducts'>
        <div className='top'>
            <h1>{type} products</h1>
            <p>"Introducing our trendy Women's Striped T-Shirt, a must-have for any fashion-forward wardrobe. This comfortable and stylish t-shirt features a classic black and white stripe pattern, perfect for pairing with jeans, shorts, or skirts. The lightweight cotton material is breathable and easy to wear all day long, while the fitted silhouette flatters your curves. With hundreds of 5-star reviews from satisfied customers, you can trust the quality and style of this t-shirt. Plus, take advantage of our limited-time promotion and get 10% off your purchase when you buy two or more items. Order now and elevate your wardrobe with our Women's Striped T-Shirt."</p>
        </div>
        <div className='bottom'>
            {error 
            ? "Something went wrong!" 
            : loading
            ? "loading"
            : data?.map(item => 
                <Card key={item.id} item={item} />
            )}
        </div>
    </div>
  )
}


export default FeaturedProducts