import LoaderBackground from 'shared/components/LoaderBackground/LoaderBackground';
import { Header } from './header/Header';
import { ProductsList } from './ProductsList/ProductsList/ProductsList';
import { useProducts } from './useProducts';

export const Products:React.FC = () => {

  const { searchParam, active, promo, dataLoading, products, productsMeta, page, searchParamsChangeHandle,pageChangeHandle} = useProducts();
  return (
    <> 
      <Header searchParam ={searchParam} active={ active} promo={promo} inputsHandle={searchParamsChangeHandle} />
      {dataLoading?
        <LoaderBackground/>
      :
        <ProductsList products= {products} page={page} productsMeta = {productsMeta} pageHandle ={pageChangeHandle}/>
      }

    </>
  );
};