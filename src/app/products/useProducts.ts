import { useEffect, useState } from "react";
import { useHttpGet } from "shared/hooks/useHttpGet";

export interface Product {
  id: number, 
  name: string,
  description: string,
  rating: number,
  image: string,
  promo:boolean,
  active: boolean
}

export interface ProductMeta {
  currentPage: number,
  itemCount: number,
  itemPerPage: number,
  totalItems: number,
  totalPages: number,
}

export const useProducts = () => {

  const [searchParam, setSearchParam] = useState<string>('');
  const [active, setActive] = useState<boolean>(false);
  const [promo, setPromo] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[] |null >(null);
  const [productsMeta, setProductsMeta] = useState<ProductMeta>({currentPage: 0, itemCount: 0,
    itemPerPage: 0, totalItems: 0, totalPages: 0});
  const {data, loading, httpGet} = useHttpGet();
  const limitPerPage = 8;

  useEffect(() => {
    let endpoint = `products?&limit=${limitPerPage}&page=${page}`;
    if(searchParam !== ''){endpoint +=  `&search=${searchParam}`}
    if(active === true){endpoint +=  `&active=${active}`}
    if (promo === true){endpoint +=  `&promo=${promo}`}
    httpGet(endpoint)
  }, [searchParam,active,promo, page])

  useEffect(() => {
    if(data !== null){
      setProducts(data.items)
      setProductsMeta(data.meta)
    }
  }, [data])

  useEffect(() => {
    setDataLoading(loading)
  }, [loading])

  const searchParamsChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.getAttribute('name');
    if(name === 'active'){
      setActive(!active)
      setPage(1); 
    }else if (name === 'promo'){
      setPromo(!promo)
      setPage(1);
    }else{
      setSearchParam(e.target.value);
      setPage(1);
    }
  }

  const pageChangeHandle = (e: React.MouseEvent<HTMLElement>, page:number) => { 
    setPage(page)
  }

return{ searchParam, active, promo, dataLoading, products, productsMeta, page, searchParamsChangeHandle, pageChangeHandle } 

}