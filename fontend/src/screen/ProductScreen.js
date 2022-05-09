import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '../component/Rating';
import data from '../data'

export const ProductScreen = (props) => {
  const params = useParams();
  const { id: productId } = params;
  const product = data.products.find((x) => x.id === productId)
  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <div>
      <Link to='/'>back to home</Link>
      <div className='row top'>
        <div className='col-2'>
          <img className='large' src={product.image} alt={product.name}></img>
        </div>
        <div className='col-1'>
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>
              <Rating rating={product.rating} Reviews={product.reviews}></Rating>
            </li>
            <li>Price:{product.price} Tk</li>
            <li>Description:<p>{product.description}</p></li>
          </ul>
        </div>
        <div className='col-1'>
          <div className='card card-body'>
            <ul>
              <li>
                <div className='row'>
                  <div>Price :</div>
                  <div className='price'>{product.price} Tk</div>
                </div>
              </li>
              <li>
                <div className='row'>
                  <div>Status:</div>
                  <div>
                    {product.countInStock > 0 ?
                      (<span className='success'>In Stock</span>) : (<span className='error'>Out Of Stock!</span>)}
                  </div>
                </div>
              </li>
              <li>
                <button className='primary block' onClick={(e)=>console.log('yes')}>Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
