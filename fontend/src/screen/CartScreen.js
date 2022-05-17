import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { addToCartAction } from '../actions/CartAction'

export const CartScreen = () => {

  const params = useParams()
  const { id } = params;
  const { search } = useLocation();

  const qtyInUrl = new URLSearchParams(search).get('qty');

  const qty = qtyInUrl ? Number(qtyInUrl) : 1;
  const dispatch = useDispatch()
  useEffect(() => {
    if (id) {
      dispatch(addToCartAction(id, qty))
    }
  }, [dispatch, id, qty])

  return (
    <div>CartScreen
      <p>Product id : {id}</p>
      <p>Product Quantity : {qty}</p>
    </div>
  )
}