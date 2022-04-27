import React from 'react';
import {ProductMeta , Product} from '../../useProducts';
import { OneProduct } from '../OneProdukt/OneProduct';
import { EmptyProductList } from './EmptyProductList/EmptyProductList';
import './ProductList.css'

interface Props {
  products: Product[] | null;
  productsMeta: ProductMeta;
  page: number;
  pageHandle: (e: React.MouseEvent<HTMLElement>, page:number) => void;
}

export const ProductsList:React.FC<Props> = (props) => {

  const currentPage = props.productsMeta.currentPage;
  const tatalPages = props.productsMeta.totalPages;

  return (
    <>
    <div className='products_section'>
      <div className='one_products_section'>
        {props.products !== null?
        props.products.length > 0? props.products.map((product,index) => (
          <OneProduct key={index} oneProduct={product}/>
        )):
        <EmptyProductList/>
        :
        null}
      </div>

      <div className='products_pagination'>
        
        { tatalPages <= 6 ?
        [...Array(tatalPages)].map((el,index) => (
            <span className={index + 1 === currentPage ? 'pagination_page actual_page': 'pagination_page'} key={index} onClick = {(e) => {props.pageHandle(e, index+1)}}>
            {index+1}
          </span>
        ))
        :
        <>
          {(() => {
            switch (currentPage) {
              case 1:
                return (
                  <>
                    <span className='pagination_page actual_page' onClick = {(e) => {props.pageHandle(e, currentPage)}}>{currentPage}</span>
                    <span className='pagination_page' onClick = {(e) => {props.pageHandle(e, currentPage + 1)}}>{currentPage+1}</span>
                    <span className='pagination_page' onClick = {(e) => {props.pageHandle(e, currentPage + 2)}}>{currentPage+2}</span>
                  </>
                )
              case tatalPages :
                return (
                  <>
                    <span className='pagination_page' onClick = {(e) => {props.pageHandle(e, tatalPages-1)}}>{tatalPages-2}</span>
                    <span className='pagination_page' onClick = {(e) => {props.pageHandle(e, tatalPages-1)}}>{tatalPages-1}</span>
                    <span className='pagination_page actual_page' onClick = {(e) => {props.pageHandle(e, tatalPages)}}>{tatalPages}</span>
                  </> 
                )
              default:
                return(
                  <>
                    <span className='pagination_page' onClick = {(e) => {props.pageHandle(e, currentPage - 1)}}>{currentPage-1}</span>
                    <span className='pagination_page actual_page' onClick = {(e) => {props.pageHandle(e, currentPage)}}>{currentPage}</span>
                    <span className='pagination_page' onClick = {(e) => {props.pageHandle(e, currentPage + 1)}}>{currentPage+1}</span>
                  </> 
                )
            }
          })()}

          <span >...</span>       
          <span className='pagination_page' onClick = {(e) => {props.pageHandle(e, tatalPages-2)}}>{tatalPages-2}</span>
          <span className='pagination_page' onClick = {(e) => {props.pageHandle(e, tatalPages-1)}}>{tatalPages-1}</span>
          <span className='pagination_page' onClick = {(e) => {props.pageHandle(e, tatalPages)}}>{tatalPages}</span>
        </>
        }

      </div>
    </div>
    </>
  );
};