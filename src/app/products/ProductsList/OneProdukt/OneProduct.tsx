import React from 'react';
import './OneProduct.css';
import { IoStar, IoStarOutline } from  'react-icons/io5';
import { Product } from '../../useProducts';
import OneProductModal from './OneProductModal';

interface Props{
  oneProduct: Product;
}

export const OneProduct:React.FC<Props> = (props) => {

  return (
    <>
      <div className='one_product'>
        <div className='img_section'>
          <img className={ props.oneProduct.active ? 'one_product_img':'one_product_img deactive_img' } src={props.oneProduct.image} />
          {props.oneProduct.promo?<p className='one_product_promo'>Promo</p>:null}
        </div>
        <div className='one_product_data'>
          <p className='one_product_tittle'>{props.oneProduct.name}</p>
          <p className='one_product_description'>{props.oneProduct.description}</p>
          <div className='rating_button' >
            <div className='one_product_rating'>
              {[1,2,3,4,5].map((el, index) => 
                <span key={index}>{el <= props.oneProduct.rating? <IoStar className='full_star'/>: <IoStarOutline className='empty_star'/> }</span>
              )}
            </div>
            <div>
            {props.oneProduct.active?
              <OneProductModal oneProduct={props.oneProduct}/>: 
              <button className='disabled_button product_button'>Unavailable</button>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};