import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { detailProductsActions } from '../actions/ProductAction';
import Rating from '../component/Rating';
import { LoadingBox } from '../component/LoadingBox';
import { ErrorBox } from '../component/ErrorBox';

export const ProductScreen = (props) => {
  const params = useParams();

  const dispatch = useDispatch();

  const { id: productId } = params;

  const navigate=useNavigate()

  const productDetails = useSelector(state => state.productDetailsReducer);

  const { loading, error, product } = productDetails;
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(detailProductsActions(productId))
  }, [dispatch, productId])

  const handleClick=()=>{
    navigate(`/cart/${productId}?qty=${qty}`)
  }

  return (
    <div>{
      loading ? (<LoadingBox></LoadingBox>)
        : error ? (<ErrorBox variant='danger'>{error}</ErrorBox>)
          : (
            <div>

              <Link to="/" className='nav-link'>back to home</Link>

              <div className='row top'>
                <div className='col-2'>
                  <img className='large'
                    src={product.image}
                    alt={product.name}></img>
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
                              (<span className='success'>In Stock</span>) : (<span className='danger'>Out Of Stock!</span>)}
                          </div>
                        </div>
                      </li>
                      {product.countInStock > 0 && (
                        <>
                        <div className='row'>
                          <div>Qty :</div>
                          <div>
                            <select value={qty} onChange={e=>setQty(e.target.value)}>{
                             [...Array(product.countInStock).keys()].map(
                               (x)=>(<option key={x+1} value={x+1}>{x+1}</option>)
                             )
                            }</select>
                          </div>
                        </div>
                          <li>
                            <button className='primary block' onClick={handleClick}>Add to Cart</button>
                          </li>
                        </>
                      )}

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}</div>
  )
}