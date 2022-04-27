import React from "react";
import Popup from "reactjs-popup";
import { Product } from '../../useProducts';
import { IoClose } from  'react-icons/io5';

interface Props{
  oneProduct: Product;
}

const OneProductModal:React.FC<Props> = (props) => {

  return (
    <Popup
      trigger={<button className='primmary_button product_button'>Show details</button>}
      modal
      nested
    >
    {(close:any) => (
      <div className="product_modal">
        <img className='product_modal_img' src={props.oneProduct.image} />
        <div className='one_product_modal_data'>
          <p className='one_product__modal_tittle'>{props.oneProduct.name}</p>
          <p className='one_product_modal_description'>{props.oneProduct.description}</p>
        </div>
        <IoClose className="product_modal_close" onClick={() => {close()}}/>
      </div>
    )}
    </Popup>
  );

} 

export default OneProductModal;