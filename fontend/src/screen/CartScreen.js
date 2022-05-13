import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

export const CartScreen = () => {
    const params=useParams()
    const{id}=params;
    const {search}=useLocation();

    const qtyInUrl=new URLSearchParams(search).get('qty');
    const qty=qtyInUrl?Number(qtyInUrl) : 1;
  return (
    <div>CartScreen
        <p>Product id : {id}</p>
        <p>Product Quantity : {qty}</p>
    </div>
  )
}
