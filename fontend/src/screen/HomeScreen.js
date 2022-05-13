import React, { useEffect } from 'react'
import Product from '../component/Product'
import {useDispatch, useSelector} from 'react-redux'
import { LoadingBox } from '../component/LoadingBox';
import { ErrorBox } from '../component/ErrorBox';
import { listProduct } from '../actions/ProductAction';

export const HomeScreen = () => {

  const dispatch=useDispatch();

  const productList=useSelector((state)=>state.productListReducer);

  const {loading,error,products}=productList;

  useEffect(() => {
    dispatch(listProduct({}))
  }, [dispatch])
  
  return (
    <div>
      {loading ? (<LoadingBox></LoadingBox>
      ):error ?(<ErrorBox variant='danger'>{error}</ErrorBox>
      ):(
        <div className="row center">
        {
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        }
      </div>
        
      )}
      
    </div>
  )
}
